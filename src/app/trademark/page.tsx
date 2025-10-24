import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Information | SomnoSense",
  description: "SomnoSense Trademark Information - Details about our trademark rights and usage guidelines.",
  robots: "index, follow",
};

export default function TrademarkInformation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Trademark Information</h1>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-blue-800 font-medium">
              <strong>Last Updated:</strong> [Date to be updated by legal team]
            </p>
            <p className="text-blue-700 mt-2">
              This trademark information page is a placeholder and will be completed by our legal team.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SomnoSense™ Trademark</h2>
            <p className="text-gray-700 mb-4">
              &quot;SomnoSense&quot; is a trademark of SomnoSense, Inc. The SomnoSense™ mark is used 
              to identify our products and services in the field of sleep monitoring and 
              dental health technology.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800 font-semibold text-center text-lg">
                &quot;SomnoSense™ is a trademark. All rights reserved.&quot;
              </p>
            </div>
            <p className="text-gray-700">
              <strong>Note:</strong> This is a placeholder trademark information page. 
              The complete trademark details will be provided by our legal team and will 
              include comprehensive information about trademark registrations, usage guidelines, 
              and protection measures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about SomnoSense trademark rights, licensing, or usage permissions, 
              please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:contact.somnosense@gmail.com" className="text-blue-600 hover:text-blue-800">contact.somnosense@gmail.com</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Subject Line:</strong> Trademark Inquiry
              </p>
              <p className="text-gray-700">
                <strong>Note:</strong> Please include specific details about your trademark 
                inquiry or request.
              </p>
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Legal Notice</h3>
            <p className="text-yellow-700">
              This trademark information page is a placeholder and will be completed by our legal team. 
              The final page will include comprehensive details about trademark registrations, 
              usage guidelines, licensing information, and enforcement policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
