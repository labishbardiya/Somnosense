import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">SomnoSense</span>
              <span className="ml-2 text-xs text-gray-400 font-normal">™</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Sleep Well. Protect Your Smile. Clinician-Ready Insights, Right From Home.
            </p>
            <p className="text-sm text-gray-400">Patent Pending</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about-bruxism" className="text-gray-300 hover:text-blue-400 transition-colors">About Bruxism</Link></li>
              <li><Link href="/#our-solution" className="text-gray-300 hover:text-blue-400 transition-colors">Our Solution</Link></li>
              <li><Link href="/#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link href="/#for-researchers" className="text-gray-300 hover:text-blue-400 transition-colors">For Researchers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/accessibility" className="text-gray-300 hover:text-blue-400 transition-colors">Accessibility</Link></li>
              <li><Link href="/patents" className="text-gray-300 hover:text-blue-400 transition-colors">Virtual Patent Marking</Link></li>
              <li><Link href="/trademark" className="text-gray-300 hover:text-blue-400 transition-colors">Trademark</Link></li>
              <li><Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
              <li>
                <span className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                  Do Not Sell or Share My Personal Information
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-200">
              <strong>Important Notice:</strong> This device is under development and patent review. 
              Not FDA approved or cleared. Intended for monitoring and clinician-aid purposes only. 
              Pilot study in progress.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© 2024 SomnoSense™. All rights reserved.</p>
              <p className="mt-1">SomnoSense™ is a trademark. All rights reserved.</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Support: <a href="mailto:support@somnosense.com" className="hover:text-blue-400 transition-colors">support@somnosense.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
