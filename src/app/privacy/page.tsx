import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SomnoSense",
  description: "SomnoSense Privacy Policy - How we collect, use, and protect your personal information.",
  robots: "index, follow",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-800 font-medium">
              <strong>Last Updated:</strong> [Date to be updated by legal team]
            </p>
              <p className="text-blue-700 mt-2">
              This Privacy Policy is a placeholder and will be completed by our legal team. 
              Please <a href="mailto:contact.somnosense@gmail.com" className="text-blue-700 underline">contact us</a> for any privacy-related questions.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              SomnoSense™ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700">
              <strong>Note:</strong> This is a placeholder privacy policy. The complete 
              policy will be provided by our legal team and will include comprehensive 
              details about data collection, processing, and protection practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect various types of information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal information you provide (name, email, phone number)</li>
              <li>Device and usage information</li>
              <li>Health-related data (with your explicit consent)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Placeholder:</strong> Detailed information about data collection 
              practices will be included in the final privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing and improving our services</li>
              <li>Communicating with you about SomnoSense</li>
              <li>Analyzing sleep bruxism patterns (with consent)</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:contact.somnosense@gmail.com" className="text-blue-600 hover:text-blue-800">contact.somnosense@gmail.com</a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Subject Line:</strong> Privacy Policy Inquiry
              </p>
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Legal Notice</h3>
            <p className="text-yellow-700">
              This privacy policy is a placeholder and will be completed by our legal team. 
              The final policy will include comprehensive details about all data practices, 
              legal bases for processing, retention periods, and your rights under applicable 
              privacy laws including GDPR, CCPA, and other relevant regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}