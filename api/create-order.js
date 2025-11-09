import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const { amount, currency = "INR", receipt = `rcpt_${Date.now()}`, notes = {} } = body;

    if (!amount || isNaN(amount)) return res.status(400).json({ error: "Invalid amount" });
    if (!process.env.RAZORPAY_KEY_ID_TEST || !process.env.RAZORPAY_KEY_SECRET_TEST)
      return res.status(500).json({ error: "Razorpay keys missing on server" });

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID_TEST,
      key_secret: process.env.RAZORPAY_KEY_SECRET_TEST,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100), // paise
      currency,
      receipt,
      notes,
      payment_capture: 1,
    });

    return res.status(200).json(order);
  } catch (err) {
    console.error("Error creating order:", err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
}
