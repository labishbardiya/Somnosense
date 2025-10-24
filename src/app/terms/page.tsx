import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SomnoSense",
  description: "SomnoSense Terms of Service - Terms and conditions for using our website and services.",
  robots: "index, follow",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-800 font-medium">
              <strong>Last Updated:</strong> [Date to be updated by legal team]
            </p>
              <p className="text-blue-700 mt-2">
              These Terms of Service are a placeholder and will be completed by our legal team. 
              Please <a href="mailto:contact.somnosense@gmail.com" className="text-blue-700 underline">contact us</a> for any questions.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the SomnoSense website and services, you accept and agree 
              to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-gray-700">
              <strong>Note:</strong> This is a placeholder terms of service. The complete 
              terms will be provided by our legal team and will include comprehensive 
              details about usage rights, restrictions, and legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Medical Disclaimer</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Medical Notice</h3>
              <p className="text-yellow-700">
                <strong>SomnoSense is under development and patent review. Not FDA approved or cleared. 
                Intended for monitoring and clinician-aid purposes only. Pilot study in progress.</strong>
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              The information on this website is not intended to be a substitute for professional 
              medical advice, diagnosis, or treatment. Always seek the advice of your physician 
              or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:contact.somnosense@gmail.com" className="text-blue-600 hover:text-blue-800">contact.somnosense@gmail.com</a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Subject Line:</strong> Terms of Service Inquiry
              </p>
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Legal Notice</h3>
            <p className="text-yellow-700">
              These terms of service are a placeholder and will be completed by our legal team. 
              The final terms will include comprehensive details about all legal obligations, 
              liability limitations, dispute resolution procedures, and applicable laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
