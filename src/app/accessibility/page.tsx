import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | SomnoSense",
  description: "SomnoSense Accessibility Statement - Our commitment to making our website accessible to all users.",
  robots: "index, follow",
};

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <p className="text-green-800 font-medium">
              <strong>Last Updated:</strong> December 2024
            </p>
            <p className="text-green-700 mt-2">
              SomnoSense is committed to ensuring digital accessibility for all users, 
              including those with disabilities.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-4">
              SomnoSense is committed to providing a website that is accessible to the 
              widest possible audience, regardless of technology or ability. We are 
              actively working to increase the accessibility and usability of our website 
              and in doing so adhere to many of the available standards and guidelines.
            </p>
            <p className="text-gray-700">
              This website endeavors to conform to level AA of the World Wide Web Consortium 
              (W3C) Web Content Accessibility Guidelines 2.2 (WCAG 2.2). These guidelines 
              explain how to make web content more accessible for people with disabilities, 
              and user friendly for everyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <p className="text-gray-700 mb-4">
              We have implemented the following accessibility features on our website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Keyboard Navigation:</strong> All interactive elements can be accessed using only a keyboard</li>
              <li><strong>Screen Reader Compatibility:</strong> Proper heading structure and alt text for images</li>
              <li><strong>Color Contrast:</strong> Sufficient color contrast ratios for text and background elements</li>
              <li><strong>Focus Indicators:</strong> Clear visual focus indicators for keyboard navigation</li>
              <li><strong>Responsive Design:</strong> Website adapts to different screen sizes and devices</li>
              <li><strong>Alternative Text:</strong> Descriptive alt text for all meaningful images</li>
              <li><strong>Form Labels:</strong> All form inputs have associated labels</li>
              <li><strong>Semantic HTML:</strong> Proper use of HTML semantic elements</li>
            </ul>
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
                <strong>Subject Line:</strong> Accessibility Feedback
              </p>
              <p className="text-gray-700">
                <strong>Response Time:</strong> We aim to respond to accessibility feedback within 2 business days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
