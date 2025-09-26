'use client';

import { motion } from 'framer-motion';
import { MoonIcon, ChartBarIcon, DevicePhoneMobileIcon, DocumentTextIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: MoonIcon,
      title: "Wear at Night",
      description: "Simply put on the comfortable SomnoSense device before bed. The lightweight design ensures you can sleep naturally without disruption."
    },
    {
      number: "02",
      icon: ChartBarIcon,
      title: "Device Records Data",
      description: "Throughout the night, SomnoSense continuously monitors your jaw muscle activity and detects bruxism episodes using advanced sensor technology."
    },
    {
      number: "03",
      icon: DevicePhoneMobileIcon,
      title: "Data Syncs to App",
      description: "In the morning, your sleep data automatically syncs to the SomnoSense mobile app via secure, encrypted wireless transmission."
    },
    {
      number: "04",
      icon: DocumentTextIcon,
      title: "Report Generated",
      description: "The app analyzes your data and generates a comprehensive Bruxism Severity Report with detailed insights about your sleep patterns."
    },
    {
      number: "05",
      icon: ShareIcon,
      title: "Share with Dentist",
      description: "Easily share your report with your dentist or healthcare provider to inform treatment decisions and track progress over time."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How SomnoSense Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with SomnoSense is simple. Follow these five easy steps to 
            begin monitoring your sleep bruxism and protecting your dental health.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-blue-600 mr-4">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <step.icon className="w-16 h-16 text-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Value for Everyone
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">For Patients</h4>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• Easy, comfortable monitoring</li>
                <li>• Actionable insights at home</li>
                <li>• Affordable alternative to sleep studies</li>
                <li>• Early detection prevents damage</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">For Dentists</h4>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• Objective severity classification</li>
                <li>• Longitudinal tracking capabilities</li>
                <li>• Evidence-based treatment planning</li>
                <li>• Improved patient outcomes</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">For Researchers</h4>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>• Innovative, scalable technology</li>
                <li>• Growing unmet market need</li>
                <li>• Partnership opportunities</li>
                <li>• Clinical research potential</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}