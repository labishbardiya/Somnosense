import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Patent Marking | SomnoSense",
  description: "SomnoSense Virtual Patent Marking - Information about our patent applications and intellectual property.",
  robots: "noindex, nofollow",
};

export default function VirtualPatentMarking() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Virtual Patent Marking</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-800 font-medium">
              <strong>Patent Status:</strong> Patent Pending
            </p>
            <p className="text-blue-700 mt-2">
              This page provides information about SomnoSense&apos;s intellectual property and patent applications.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Patent Pending Notice</h2>
            <p className="text-gray-700 mb-4">
              SomnoSense technology is currently protected by pending patent applications. 
              The following notice applies to all SomnoSense products and services:
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800 font-semibold text-center text-lg">
                &quot;Patent Pending. Once granted, applicable patents will be listed here.&quot;
              </p>
            </div>
            <p className="text-gray-700">
              This virtual patent marking serves as notice that SomnoSense products and 
              services may be covered by one or more pending patent applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about SomnoSense&apos;s intellectual property or patent applications, 
              please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:support@somnosense.com" className="text-blue-600 hover:text-blue-800">support@somnosense.com</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Subject Line:</strong> Patent Information Inquiry
              </p>
              <p className="text-gray-700">
                <strong>Note:</strong> Due to the sensitive nature of patent applications, 
                detailed technical information is not publicly available.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
