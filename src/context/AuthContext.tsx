import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, db } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  PhoneAuthProvider,
  EmailAuthProvider,
  linkWithCredential,
  User as FirebaseUser,
} from "firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, "id"> & { password: string }) => Promise<void>;
  logout: () => Promise<void>;
  phoneLogin: (phone: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

const normalizeUser = (firebaseUser: FirebaseUser | null): User | null => {
  if (!firebaseUser) return null;
  return {
    id: firebaseUser.uid,
    name: firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "User",
    email: firebaseUser.email || "",
    phone: firebaseUser.phoneNumber || "",
    address: ""
  };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔹 AuthContext mounted — Listening for Firebase user changes");
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      const userRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          phone: firebaseUser.phoneNumber || "",
          address: "",
          createdAt: new Date().toISOString(),
        });
      }

      setUser(normalizeUser(firebaseUser));
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error("❌ Login error:", error);
      throw error; // Pass error to Login.tsx
    }
  };


  const register = async (userData: Omit<User, "id"> & { password: string }) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      if (result.user) {
        await updateProfile(result.user, { displayName: userData.name });
        
        console.log ("Awaiting User Doc - Creating Firestore User Doc....");
        await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name: userData.name,
        email: userData.email,
        phone: userData.phone || "",
        address: userData.address || "",
        createdAt: new Date().toISOString(),
      });

        setUser(normalizeUser(result.user));
      }
    } catch (error: any) {
      console.error("❌ Registration error:", error);
    throw error;
    }
  };

  const phoneLogin = async (phone: string) => {
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" },
      );
    }

    const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
    window.confirmationResult = confirmation;
  };

  const verifyOTP = async (otp: string) => {
    
    if (!window.confirmationResult) {
    throw new Error("OTP session expired. Please request a new OTP.");
    }

    const result = await window.confirmationResult.confirm(otp);

    await setDoc(
      doc(db, "users", result.user.uid),
      {
        uid: result.user.uid,
        phone: result.user.phoneNumber,
        email: result.user.email || "",
        name: result.user.displayName || "",
        createdAt: new Date().toISOString(),
      },
      { merge: true }
    );
  };


  const logout = async () => {
    await signOut(auth);
    console.log('Successfully logged out...');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        register,
        logout,
        phoneLogin,
        verifyOTP,
      }}
    >
      {!loading ? (
        children
      ) : (
        <div className="flex justify-center items-center h-screen text-gray-800 text-lg">
          Loading user...
        </div>
      )}
    </AuthContext.Provider>
  );
};
