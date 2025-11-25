import React, { useState } from 'react';
import { Store, Users, Target, CheckCircle, Send, MapPin, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

const Partnership: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    city: '',
    state: '',
    businessType: 'Dealer / Retailer',
    yearsInBusiness: '',
    investment: '5-7 Lakhs (for DSAs)',
    interestedIn: 'Enpure Water Purifiers & pHydrafyt Ionizers',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Send email via EmailJS
      await emailjs.send(
        'service_j52iqpi', // TODO: replace with your EmailJS Service ID
        'template_zikopck', // TODO: replace with your EmailJS Template ID for dealership leads
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          city: formData.city,
          state: formData.state,
          businessType: formData.businessType,
          yearsInBusiness: formData.yearsInBusiness,
          interestedIn: formData.interestedIn,
          investment: formData.investment,
          message: formData.message,
          formType: 'Dealership Inquiry',
        },
        'xkyJ1mI3UhDDxhFEr' // TODO: replace with your EmailJS Public Key
      );

      // ✅ Optional: Fire Meta Pixel Lead event for dealership form
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Dealership Lead',
          form_location: 'Dealership Page',
          business_type: formData.businessType,
          investment: formData.investment,
          city: formData.city,
          state: formData.state,
        });
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after a short delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          city: '',
          state: '',
          businessType: 'Dealer / Retailer',
          yearsInBusiness: '',
          investment: '5-7 Lakhs (for DSAs)',
          interestedIn: 'Enpure Water Purifiers & pHydrafyt Ionizers',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error('Dealership form email failed:', error);
      setIsSubmitting(false);
      alert('Failed to submit request. Please try again later.');
    }
  };

  const dealershipHighlights = [
    {
      icon: <Store className="h-6 w-6" />,
      title: 'Premium Product Portfolio',
      description:
        'Offer your Customers Next-Gen Enpure Water Purifiers and pHydrafyt Alkaline Ionizers with RO+UV+UF+Alkaline and Hydrogen-rich Alkaline Water Technology.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Strong Brand & Marketing',
      description:
        'Backed by Enpure with Modern Branding, Digital Campaigns, and Point-of-Sale Support to help you grow faster.',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Dealer-Focused Support',
      description:
        'Dedicated Relationship and Technical Support, Training, and Competitive Margins Designed for Long-Term Partnerships.',
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Head Office',
      details: [
        '129, The Grand Plaza,',
        'Near Luthra Circle, Vesu',
        'Surat, Gujarat, India - 395007',
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Dealership Enquiries',
      details: ['Sales: +91 70160 38671', 'WhatsApp: +91 70160 38671'],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@enpure.in', 'sales.enpure@gmail.com'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="h-[100px]bg-gradient-to-b from-blue-50 to-white py-16 relative flex items-center justify-center overflow-hidden -mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <br />
            <br />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Become an Enpure & pHydrafyt Partner
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Partner with Enpure to bring Next-Generation Water Purifiers and Alkaline Ionizers to your city. <br />
              Join our Dealer Network and Grow with a Modern, Design-led Hydration brand.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dealershipHighlights.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue100 text-blue-800 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center md:text-left">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Dealership Form */}
          <div className="mb-12 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Dealership & Business Partnership Form
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Share your details and our team will reach out with dealership options, margins and
                regional availability.
              </p>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Request Submitted Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your interest in partnering with DiHydro. Our team will contact you within
                    24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Business / Firm Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Registered business name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your city"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your state"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="businessType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Type of Business *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option>Dealer / Retailer</option>
                      <option>Distributor</option>
                      <option>Architect / Interior Designer</option>
                      <option>Trader / Supplier</option>
                      <option>Showroom / Experience Center</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="yearsInBusiness"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Years in Business
                      </label>
                      <input
                        type="text"
                        id="yearsInBusiness"
                        name="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g. 3+ years"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interestedIn"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Interested In
                      </label>
                      <select
                        id="interestedIn"
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option>Enpure Water Purifiers & pHydrafyt Ionizers</option>
                        <option>Only Enpure Water Purifiers</option>
                        <option>Only pHydrafyt Alkaline Ionizers</option>
                        <option>Commercial Water Purifiers (Titan Series)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="investment"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Type of Business *
                    </label>
                    <select
                      id="investment"
                      name="investment"
                      value={formData.investment}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option> 5-7 Lakhs (for DSAs) </option>
                      <option> 10-12 Lakhs (for Dealer) </option>
                      <option> 20-25 Lakhs (for Distributor) </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tell us about your business *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                      placeholder="Share your current products, customer base and why you want to partner with us..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="modern-button glass-card w-full bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Dealership Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact / Info Column */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue100 rounded-lg flex items-center justify-center text-blue-800">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Small note for regions */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Territory & Availability
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We are actively appointing dealers and channel partners in select cities across India.
                Share your location and we will confirm current availability, protection radius and
                business terms.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section (Dealership Focus) */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dealership FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about Enpure & pHydrafyt partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What kind of businesses can become dealers?
              </h3>
              <p className="text-gray-600">
                We work with appliance dealers, interior studios, water solution providers, modern
                showrooms and distribution partners who are committed to premium customer experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide training and marketing support?
              </h3>
              <p className="text-gray-600">
                Yes, we provide product training, technical guidance, and marketing assets — including
                catalogues, branding material and digital creatives to help you promote Enpure and
                pHydrafyt effectively.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a minimum order or investment required?
              </h3>
              <p className="text-gray-600">
                Minimum initial order quantity and investment vary by region and product mix. Once you
                submit the form, our team will share territory-specific details and commercial terms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I get exclusive rights for my city or area?
              </h3>
              <p className="text-gray-600">
                In select locations, we offer area-wise exclusivity or protection radius for committed
                partners who meet sales and branding criteria. This is evaluated on a case-by-case basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
