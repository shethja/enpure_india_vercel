import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const hmac = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET_TEST)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isValid = hmac === razorpay_signature;

    // Optional: write to Firestore here if (isValid)
    return res.status(isValid ? 200 : 400).json({ ok: isValid });
  } catch (err) {
    console.error("Error verifying payment:", err);
    return res.status(500).json({ ok: false, error: err.message || "Server error" });
  }
}
