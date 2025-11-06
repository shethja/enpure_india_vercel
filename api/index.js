import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import { createHmac } from "node:crypto";

const app = express();
app.use(cors());
app.use(express.json());

// --- CRITICAL FIX 2: REMOVE DOTENV LINES ---
// process.env is now accessed directly.

// CRITICAL FIX 3: Use the standard RZ_SECRET variable name.
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET // Assumes Vercel variable is RAZORPAY_SECRET
});

// 🪙 Create order
app.post("/api/create-order", async (req, res) => {
  const { amount, currency } = req.body;

  // Input validation (highly recommended in production)
  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount provided." });
  }

  const options = {
    amount: amount * 100, // amount in paise (CRITICAL)
    currency: currency || "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Razorpay Order Creation Error:", error);
    res.status(500).send({ error: "Failed to create order." });
  }
});

// 🧾 Verify payment signature (new route)
app.post("/api/verify-payment", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Use the SECRET key from Vercel's secure environment variables
    const secret = process.env.RAZORPAY_SECRET; 

    if (!secret) {
      console.error("RAZORPAY_SECRET is missing. Cannot verify signature.");
      return res.status(500).json({ success: false, message: "Server configuration error." });
    }

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = createHmac("sha256", secret)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign === razorpay_signature) {
      // SUCCESS: Fulfillment logic (e.g., updating Firestore) goes here.
      console.log("✅ Signature verified successfully!");
      return res.json({ success: true, message: "Payment verified." });
    } else {
      // FAILURE: Potential tampering. Do NOT fulfill the order.
      console.log("❌ Signature verification failed!");
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ success: false, message: "Internal server error during verification." });
  }
});

// --- CRITICAL FIX 1: VERCEL SERVERLESS EXPORT ---
// Export the app instance instead of calling app.listen()
module.exports = app;
// --- END VERCEL FIX ---
