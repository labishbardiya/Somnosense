"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ChartBarIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline';

export default function OurSolutionSection() {
  const benefits = [
    {
      icon: HomeIcon,
      title: "Home-Based Monitoring",
      description: "No need for expensive overnight sleep studies. Monitor your bruxism in the comfort of your own bed."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Easy-to-Use App",
      description: "Simple mobile app interface that syncs your data and generates comprehensive reports."
    },
    {
      icon: ChartBarIcon,
      title: "Objective Data",
      description: "Get precise, measurable insights about your bruxism patterns and severity levels."
    },
    {
      icon: UserIcon,
      title: "Clinician-Ready Reports",
      description: "Share detailed reports with your dentist or healthcare provider for informed treatment decisions."
    }
  ];

  return (
    <section id="our-solution" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Introducing SomnoSense
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolutionary wearable device that brings professional-grade sleep bruxism monitoring 
            to your home. Get the insights you need to protect your dental health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              {/* container will adopt the video's intrinsic aspect ratio once metadata loads */}
              <div
                className="rounded-2xl overflow-hidden mb-6 bg-black w-full"
                style={undefined}
                id="working-video-container"
              >
                <video
                  id="working-video"
                  src="/videos/working.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-cover block"
                  aria-hidden="true"
                />
              </div>
            </div>
            
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
            >
              Product Demo
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Monitoring, Made Simple
            </h3>
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                SomnoSense is a comfortable, non-invasive wearable device that tracks your 
                sleep bruxism patterns throughout the night. The device uses advanced sensor 
                technology to detect jaw muscle activity and teeth grinding episodes.
              </p>
              <p>
                Data is automatically synced to your smartphone app, where sophisticated 
                algorithms analyze your sleep patterns and generate comprehensive bruxism 
                severity reports.
              </p>
              <p>
                These reports provide objective, measurable data that you can share with 
                your dentist or healthcare provider to inform treatment decisions and track 
                progress over time.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Comfortable, lightweight design</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Long battery life for extended monitoring</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Water-resistant for all-night wear</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Secure, encrypted data transmission</span>
              </div>
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
            Why Choose SomnoSense?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
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
          className="mt-16"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                  Important Notice
                </h4>
                <p className="text-yellow-700">
                  SomnoSense is currently in development and undergoing pilot studies. 
                  The device is intended for monitoring and clinician-aid purposes only. 
                  Results from pilot studies are being used to refine the technology and 
                  validate its effectiveness.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}