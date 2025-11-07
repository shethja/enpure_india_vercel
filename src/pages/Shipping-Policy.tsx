import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
return (
      <>
          <article className="py-16 bg-white text-slate-900">
              <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-5xl font-light mb-3">Shipping Policy</h1>
                <br />
                <p className="text-blue-500 text-md mb-3">
                  <strong>Last Updated:</strong> November 07, 2024
                </p>
            
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  At <em>ENPURE</em> by DiHydro Tech Innovation, we are committed to delivering the  Enpure Water Purifiers and pHydrafyt Ionizers to customers across India. Our shipping services are designed to ensure your product reaches you safely and on time.
                </p>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">1. Delivery Coverage</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  We provide shipping services across India, covering all major cities, towns, and remote locations. Whether you're in a metro city or a remote village, we ensure that ENPURE's intelligent hydration solutions reach you.
                </p>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">2. Processing & Delivery Time</h2>
            
                <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">2.1 Order Processing</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                  Once you place an order, we process it within <strong>1-2 business days</strong>. You will receive an order confirmation email with all relevant details.
                </p>
            
                <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">2.2 Delivery Timeline</h3>
                <p className="text-gray-700 leading-relaxed mb-3">Delivery times vary based on your location:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Metro Cities:</strong> 3-5 business days</li>
                  <li><strong>Tier 2 & Tier 3 Cities:</strong> 5-7 business days</li>
                  <li><strong>Remote Locations:</strong> 7-10 business days</li>
                </ul>
            
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                  <p className="text-blue-900 font-semibold">
                    📧 Order Confirmation: 
                  </p>
                  <p className="text-blue-900">
                     You will receive an order confirmation email with tracking details within 24 hours of placing your order.
                  </p>
                      <br/>
                  <p className="text-blue-900 font-semibold">
                    📱 Track Your Order:
                  </p>
                  <p className="text-blue-900">
                     Use the tracking link provided to monitor your shipment in real-time.
                  </p>
                </div>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">3. Shipping Charges</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Free Shipping:</strong> Available on all orders of Enpure products including the pHydrafyt Ionizers across India</li>
                  <li><strong>Installation Service:</strong> Professional installation included at no extra charge</li>
                  <li><strong>Remote Areas:</strong> Additional charges may apply for extremely remote locations (customer will be notified in advance)</li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">4. Packaging & Handling</h2>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                  All products are carefully packaged to ensure safe transit. The Enpure products including the pHydrafyt Ionizers are packed with:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>High-quality protective packaging materials</li>
                  <li>Secure bubble wrap and foam padding</li>
                  <li>Tamper-proof sealing to ensure product integrity</li>
                  <li>Clear labeling with "Handle with Care" instructions</li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">5. Order Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">Once your order is shipped, you will receive:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Shipping confirmation email with AWB/tracking number</li>
                  <li>SMS updates on shipment status</li>
                  <li>Real-time tracking through our courier partner's website</li>
                  <li>Estimated delivery date notification</li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">6. Delivery Process</h2>
            
                <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">6.1 At the Time of Delivery</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Please verify the product packaging before accepting delivery</li>
                  <li>Check for any visible damage to the outer box</li>
                  <li>Ensure all package seals are intact</li>
                  <li>Sign the delivery receipt only after inspection</li>
                </ul>
            
                <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">6.2 Failed Delivery Attempts</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">If delivery is unsuccessful:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Our courier partner will make up to 3 delivery attempts</li>
                  <li>You will be contacted before each attempt</li>
                  <li>The package will be held at the nearest courier facility for pickup</li>
                  <li>If not collected within 7 days, the order will be returned to us</li>
                </ul>
            
                <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
                  <p className="text-red-900 font-semibold mb-1">
                    ⚠️ Important:
                  </p>
                  <p className="text-red-900">
                    Please ensure someone is available to receive the delivery at the provided address. Redelivery charges may apply if multiple failed delivery attempts occur due to recipient unavailability.
                  </p>
                </div>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">7. Installation Service</h2>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                  ENPURE provides complimentary professional installation for all the products including the pHydrafyt Ionizers:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Installation will be scheduled within 24-48 hours of delivery</li>
                  <li>Our certified technician will contact you to confirm appointment</li>
                  <li>Installation typically takes 1-2 hours</li>
                  <li>Product demonstration and usage instructions included</li>
                  <li>Warranty registration completed during installation</li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">8. Shipping Restrictions</h2>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                  While we strive to deliver everywhere in India, please note:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>We do not ship to PO Box addresses</li>
                  <li>Certain high-risk or restricted areas may require additional verification</li>
                  <li>Military or defense establishments may have special delivery protocols</li>
                  <li>International shipping is also available, and may take 7-10 business days </li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">9. Damaged or Lost Shipments</h2>
            
                <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">9.1 Damaged During Transit</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">If your product arrives damaged:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Do not accept the delivery if outer packaging shows significant damage</li>
                  <li>Take photographs of the damaged package immediately</li>
                  <li>Report the issue to us within 24 hours at <strong>info@enpure.in</strong></li>
                  <li>We will arrange for a replacement or refund based on your payment method</li>
                </ul>
            
                <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">9.2 Lost Shipments</h3>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">In the rare event that your shipment is lost:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Contact us immediately if tracking shows no movement for more than 7 days</li>
                  <li>We will investigate with our courier partner</li>
                  <li>A replacement will be dispatched or full refund processed within 5-7 business days</li>
                </ul>
            
                <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
                  <p className="text-green-900 font-semibold mb-1">
                    ✅ Delivery Assurance:
                  </p>
                  <p className="text-green-900">
                    Our team ensures that Enpure products including the pHydrafyt Ionizers reaches you in perfect condition. In case of any delays or issues, our customer support team is available to assist you.
                  </p>
                </div>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">10. Holidays and Peak Seasons</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Deliveries are not made on national holidays</li>
                  <li>During festive seasons (Diwali, Christmas, etc.), delivery times may extend by 2-3 days</li>
                  <li>We will notify you in advance if your delivery is affected by holidays</li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">11. Contact for Shipping Queries</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Shipping Support</h3>
                  <p className="text-gray-700 mb-2">For any questions about shipping:</p>
                  <p className="text-gray-700"><strong>Email:</strong> info@enpure.in</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91-70160 38671</p>
                  <p className="text-gray-700"><strong>Website:</strong> www.enpure.in</p>
                  <p className="text-gray-700"><strong>Support Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
                </div>
            
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                  <p className="text-green-900 font-semibold mb-2">Your satisfaction is our priority.</p>
                  <p className="text-green-900">
                    We are committed to delivering your ENPURE product safely and on time. If you have any concerns, our customer support team is always here to help.
                  </p>
                </div>
            
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>ENPURE</strong> - Intelligent Hydration, Effortless Wellness
                  </p>
                  <p className="text-gray-600 text-sm">
                    © 2024 ENPURE. All rights reserved.
                  </p>
                </div>
            
                <br /> <br />
                <a href="/" className="text-blue-600 font-medium hover:text-blue-900">
                  ← Back to Home
                </a>
              </div>
            </article>
          </>  
          );

};


export default ShippingPolicy;










