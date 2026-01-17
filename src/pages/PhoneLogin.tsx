import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { LogIn, Phone, KeyRound } from "lucide-react";
import { auth } from '../firebase';
import { Link, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


export default function PhoneLogin() {
  const {phoneLogin, verifyOTP } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("reCAPTCHA solved");
        },
      }
    );
  }
}, []);

  
  const sendOTP = async () => {
  if (!phone) {
    alert("Enter phone number");
    return;
  }

  try {
    setLoading(true);

    const appVerifier = window.recaptchaVerifier;

    if (!appVerifier) {
      alert("reCAPTCHA not initialized");
      return;
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phone,
      appVerifier
    );

    window.confirmationResult = confirmationResult;
    setOtpSent(true);
    //alert("OTP sent successfully!");
    setStep(2);
  } catch (error: any) {
    console.error("Send OTP Error:", error);
    //alert(error.message || "Failed to send OTP");
  } finally {
    setLoading(false);
  }
};

  const verify = async () => {
    await verifyOTP(otp);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center -mt-20">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">

        <div className="text-center mb-6">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
            <LogIn className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mt-4">Login with Phone</h2>
        </div>

        {step === 1 && (
          <>
            <label className="text-sm mb-2 block font-semibold">Phone Number</label>
            <div className="relative mb-4">
              <Phone className="absolute left-3 top-3 text-gray-400" />
              <input
                className="w-full pl-10 py-3 rounded-full border"
                placeholder="Enter in format: '+91XXXXXXXXXX'"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              onClick={sendOTP}
              disabled={loading}
              //className="w-full modern-button bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              className="w-full modern-button bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-full font-semibold
               hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-200
               transition-all duration-200 transform hover:scale-105
               disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none" 
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

            <div className="mt-8 text-center">
            <p className="text-gray-600">
              Login via Email{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-200"
              >
                    Click Here
              </Link>
            </p>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <label className="text-sm mb-2 block font-semibold">Enter OTP</label>
            <div className="relative mb-4">
              <KeyRound className="absolute left-3 top-3 text-gray-400" />
              <input
                className="w-full pl-10 py-3 rounded-full border"
                placeholder="Enter your 6-digit OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button
              onClick={verify}
              className="w-full modern-button bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Verify & Login
            </button>
          </>
        )}

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
