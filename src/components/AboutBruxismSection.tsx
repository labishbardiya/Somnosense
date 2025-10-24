'use client';

import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function AboutBruxismSection() {
  const problems = [
    {
      icon: ExclamationTriangleIcon,
      title: "Dental Damage",
      description: "Chronic grinding can wear down teeth, cause fractures, and lead to expensive dental work."
    },
    {
      icon: ClockIcon,
      title: "Sleep Disruption",
      description: "Bruxism often disrupts sleep quality, leading to fatigue and decreased quality of life."
    },
    {
      icon: CurrencyDollarIcon,
      title: "High Treatment Costs",
      description: "Traditional sleep studies can cost thousands of dollars and require overnight stays at clinics."
    },
    {
      icon: UserGroupIcon,
      title: "Widespread Issue",
      description: "Affects 8-31% of adults, with many cases going undiagnosed due to lack of awareness."
    }
  ];

  return (
    <section id="about-bruxism" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Understanding Sleep Bruxism
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sleep bruxism is the involuntary clenching, grinding, or gnashing of teeth during sleep. 
            It is a common condition that can have serious consequences for your dental health and overall well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What is Sleep Bruxism?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Sleep bruxism occurs when you unconsciously clench or grind your teeth during sleep. 
                This can happen for short periods or throughout the night, often without you realizing it.
              </p>
              <p>
                While occasional teeth grinding may not cause problems, chronic bruxism can lead to 
                significant dental damage, jaw pain, headaches, and sleep disruption.
              </p>
              <p>
                The condition affects millions of people worldwide, yet many cases go undiagnosed 
                because symptoms often develop gradually and may not be immediately apparent.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8"
          >
              <div className="text-center">
                <div className="mb-6 overflow-hidden rounded-xl shadow-lg bg-black">
                  <video
                    src="/videos/grinding.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-48 md:h-64 lg:h-80 object-cover"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Sleep Bruxism
                </h4>
                <p className="text-gray-600">
                  Involuntary teeth grinding during sleep
                </p>
              </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            The Hidden Costs of Untreated Bruxism
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <problem.icon className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h4>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Early Detection is Key
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              The sooner bruxism is identified and addressed, the better the outcomes. 
              Traditional sleep studies are expensive and inconvenient, but SomnoSense brings 
              professional-grade monitoring to your home.
            </p>
            <a
              href="#our-solution"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn About Our Solution
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}