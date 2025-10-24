'use client';

import { motion } from 'framer-motion';
import { LightBulbIcon, ChartBarIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function ForResearchersSection() {
  const opportunities = [
    {
      icon: LightBulbIcon,
      title: "Innovation & Technology",
      description: "Cutting-edge wearable technology with advanced sensor capabilities and machine learning algorithms for precise bruxism detection."
    },
    {
      icon: ChartBarIcon,
      title: "Market Research",
      description: "Access to valuable data insights and market trends in the growing sleep health and dental monitoring space."
    },
    {
      icon: UserGroupIcon,
      title: "Clinical Partnerships",
      description: "Collaboration opportunities with dental professionals, sleep specialists, and research institutions for clinical validation studies."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Investment Potential",
      description: "Growing market with significant unmet need. The global sleep monitoring market is projected to reach $8.9 billion by 2027."
    }
  ];

  const marketStats = [
    { label: "Adults Affected by Bruxism", value: "8-31%", description: "Global prevalence" },
    { label: "Sleep Monitoring Market", value: "$8.9B", description: "Projected by 2027" },
    { label: "Undiagnosed Cases", value: "60%+", description: "Many go untreated" },
    { label: "Treatment Cost Savings", value: "70%", description: "vs traditional sleep studies" }
  ];

  return (
    <section id="for-researchers" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            For Researchers & Investors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SomnoSense represents a significant opportunity in the growing sleep health market. 
            Join us in revolutionizing how we monitor and manage sleep bruxism.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {marketStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <opportunity.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {opportunity.title}
              </h3>
              <p className="text-gray-700">
                {opportunity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Story: Addressing an Unmet Need
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The idea for SomnoSense was born from a simple observation: millions of people 
                  suffer from sleep bruxism, yet most cases go undiagnosed due to the high cost 
                  and inconvenience of traditional sleep studies.
                </p>
                <p>
                  We recognized that early detection and monitoring of bruxism could prevent 
                  significant dental damage and improve quality of life. However, existing 
                  solutions were either too expensive, too invasive, or not accessible to 
                  the average patient.
                </p>
                <p>
                  SomnoSense bridges this gap by bringing professional-grade monitoring 
                  technology to the home, making bruxism detection accessible, affordable, 
                  and comfortable for everyone.
                </p>
                <p>
                  Our idea was developed during InventX'25 at IIT Gandhinagar - an intensive
                  innovation sprint where we prototyped the concept and validated the core
                  sensing approach. Watch the short demo below to see the idea in action.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-full mb-4 rounded-lg overflow-hidden">
                  {/* Responsive 16:9 embed */}
                  <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src="https://www.youtube.com/embed/YxEBLeNQ-wo"
                      title="SomnoSense InventX'25 Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Innovation in Action
                </h4>
                <p className="text-gray-600">
                  Transforming sleep health monitoring through accessible technology - developed at InventX'25, IIT Gandhinagar
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Choose SomnoSense?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Early Detection
              </h4>
              <p className="text-gray-600">
                Prevents long-term damage through early identification and intervention
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Evidence-Based
              </h4>
              <p className="text-gray-600">
                Clinician-aid positioning with objective, measurable data
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Affordable & Comfortable
              </h4>
              <p className="text-gray-600">
                Home-based monitoring that is accessible to everyone
              </p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              Ready to Partner with Us?
            </h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join us in revolutionizing sleep bruxism monitoring. Whether you are a researcher, 
              investor, or healthcare professional, we would love to explore partnership opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Information
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}