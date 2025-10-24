import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SomnoSense",
  description: "SomnoSense Cookie Policy - Information about how we use cookies and similar technologies.",
  robots: "index, follow",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-800 font-medium">
              <strong>Last Updated:</strong> December 2024
            </p>
            <p className="text-blue-700 mt-2">
              This Cookie Policy explains how SomnoSense uses cookies and similar technologies on our website.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your computer or mobile device 
              when you visit a website. They are widely used to make websites work more 
              efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-700">
              Cookies allow a website to recognize a user&apos;s device and remember information 
              about their visit, such as their preferred language and other settings. This 
              can make your next visit easier and the site more useful to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              SomnoSense uses cookies and similar technologies for several purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To ensure our website functions properly</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze how our website is used</li>
              <li>To improve our website&apos;s performance and user experience</li>
              <li>To provide personalized content and features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Necessary Cookies</h3>
                <p className="text-green-800 mb-3">
                  These cookies are essential for the website to function properly. They cannot be disabled.
                </p>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Session management and security</li>
                  <li>• Form submission and validation</li>
                  <li>• Cookie consent preferences</li>
                  <li>• Basic website functionality</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Analytics Cookies</h3>
                <p className="text-blue-800 mb-3">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Page views and user behavior</li>
                  <li>• Website performance metrics</li>
                  <li>• Popular content and features</li>
                  <li>• Error tracking and debugging</li>
                </ul>
                <p className="text-blue-700 text-sm mt-2">
                  <strong>Note:</strong> Analytics cookies are optional and can be disabled.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Marketing Cookies</h3>
                <p className="text-purple-800 mb-3">
                  These cookies are used to deliver relevant advertisements and track campaign performance.
                </p>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• Ad targeting and personalization</li>
                  <li>• Campaign effectiveness measurement</li>
                  <li>• Cross-site tracking for advertising</li>
                  <li>• Social media integration</li>
                </ul>
                <p className="text-purple-700 text-sm mt-2">
                  <strong>Note:</strong> Marketing cookies are optional and can be disabled.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:contact.somnosense@gmail.com" className="text-blue-600 hover:text-blue-800">contact.somnosense@gmail.com</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Subject Line:</strong> Cookie Policy Inquiry
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond to cookie-related inquiries within 2 business days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
