import React from 'react';
import { Link } from 'react-router-dom';

const ReturnRefundPolicy = () => {
return (
      <>
            <article className="py-16 bg-white text-slate-900">
              <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-5xl font-light mb-3">Return & Refund Policy</h1>
                <br />
                <p className="text-blue-500 text-md mb-3">
                  <strong>Last Updated:</strong> November 07, 2024
                </p>
            
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  At <em>ENPURE</em> by DiHydro Tech Innovation, we want you to be completely satisfied with your purchase.
                  While every product undergoes rigorous quality checks before dispatch, rare cases may arise where you receive
                  a defective or damaged item. This Return & Refund Policy outlines how such cases are handled to ensure fairness
                  and transparency for our customers.
                </p>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
                  1. General Policy Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  We offer replacements or refunds only for defective, damaged, or incorrect products delivered to customers. 
                  To initiate a return or replacement, customers must inform us within <strong>10 days</strong> of delivery.
                  Requests made after this period will not be accepted.
                </p>
            
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mb-6">
                  <p className="text-yellow-900 font-semibold mb-1">⚠️ Important Notice:</p>
                  <p className="text-yellow-900 leading-relaxed">
                    Returns are applicable only for defective or damaged items. We do not accept returns for reasons like 
                    change of mind, dislike of product color or design, or installation location concerns.
                  </p>
                </div>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">2. For Cash on Delivery (COD) Orders</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>No returns or refunds are applicable for COD orders.</li>
                  <li>Only <strong>replacement</strong> is provided for defective or damaged products.</li>
                  <li>The customer must notify our support team within <strong>10 days</strong> from delivery.</li>
                  <li>Our team will verify the reported issue before dispatching a replacement.</li>
                  <li>Requests raised after the 10-day window will not be eligible.</li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">3. For Online Payment & Prepaid Orders</h2>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                  Customers who have paid online are eligible for replacement, return, or refund in case of defective or damaged 
                  items, provided the issue is reported within <strong>10 days</strong> of delivery.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>The product must be returned with all original packaging, manuals, and accessories.</li>
                  <li>Once received and inspected, a replacement or refund will be processed as per eligibility.</li>
                  <li>Refunds will be issued through the original payment method only.</li>
                  <li>Refund processing typically takes <strong>5–7 business days</strong> after the defective product is received.</li>
                </ul>
            
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                  <p className="text-blue-900 font-semibold mb-1">💡 Helpful Tip:</p>
                  <p className="text-blue-900 leading-relaxed">
                    Please record an unboxing video when you receive your order. It helps verify any defects or damages during transit 
                    and speeds up the replacement or refund process.
                  </p>
                </div>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">4. Replacement & Return Conditions</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>The product must be unused and in the same condition as received.</li>
                  <li>All accessories, cables, manuals, and warranty cards must be included.</li>
                  <li>Products damaged due to incorrect installation, mishandling, or power fluctuation are not eligible.</li>
                  <li>Replacement is subject to stock availability. If unavailable, a refund will be issued instead.</li>
                </ul>
            
                <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
                  <p className="text-green-900 font-semibold mb-1">✅ Hassle-Free Replacements:</p>
                  <p className="text-green-900 leading-relaxed">
                    Once verified, defective products will be replaced with a new unit within 5–7 working days, ensuring minimal downtime.
                  </p>
                </div>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">5. Refund Timelines & Process</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Refunds are initiated only after we receive and inspect the returned defective product.</li>
                  <li>It may take <strong>5–7 business days</strong> for the refunded amount to reflect in your account.</li>
                  <li>You will be notified by email or SMS once the refund has been processed.</li>
                  <li>Refunds are processed only through the same payment mode used during purchase.</li>
                </ul>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">6. How to Request a Replacement or Refund</h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Email your request to <strong>support@enpure.com</strong> within <strong>10 days</strong> of delivery.</li>
                  <li>Include your order ID, proof of defect (photos or video), and preferred action (replacement/refund).</li>
                  <li>Our team will review your request and provide return pickup details if applicable.</li>
                  <li>Upon receipt and inspection of the returned product, the replacement/refund will be processed.</li>
                </ol>
            
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mb-6">
                  <p className="text-yellow-900 font-semibold mb-1">⚠️ Note:</p>
                  <p className="text-yellow-900 leading-relaxed">
                    Returns or refund requests made after 10 days of delivery will not be accepted under any circumstances.
                  </p>
                </div>
            
                <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">7. Non-Returnable Items</h2>
                <p className="text-gray-700 leading-relaxed mb-3 text-justify">
                  Certain categories of products are not eligible for return due to hygiene, safety, or installation reasons:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Products that have been installed or used.</li>
                  <li>Consumable parts or filters once opened.</li>
                  <li>Customized, demo, or clearance items.</li>
                  <li>Products returned without invoice or original packaging.</li>
                </ul>
            
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Need Help?</h3>
                  <p className="text-gray-700 mb-2">For return or refund assistance, please reach out to our support team:</p>
                  <p className="text-gray-700"><strong>Email:</strong> support@enpure.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91-70160 38671</p>
                  <p className="text-gray-700"><strong>Address:</strong> DiHydro Tech Innovations, Surat, Gujarat, India</p>
                  <p className="text-gray-700"><strong>Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
                </div>
            
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                  <p className="text-green-900 font-semibold mb-2">Your satisfaction is our promise.</p>
                  <p className="text-green-900 leading-relaxed">
                    At ENPURE, we strive to make every customer experience smooth and reliable. 
                    Our team is committed to resolving all product-related concerns quickly and professionally.
                  </p>
                </div>
            
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>ENPURE</strong> — Intelligent Hydration, Effortless Wellness
                  </p>
                  <p className="text-gray-600 text-sm">
                    © 2024 ENPURE Water Solutions. All rights reserved.
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


export default ReturnRefundPolicy;

