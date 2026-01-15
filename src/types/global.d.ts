import { RecaptchaVerifier, ConfirmationResult } from "firebase/auth";

export {};

declare global {
  interface Window {
    Razorpay?: any;

    // 🔐 Firebase Phone Auth
    recaptchaVerifier?: any;
    confirmationResult?: any;
    verificationId?: string | null;
  }
}
