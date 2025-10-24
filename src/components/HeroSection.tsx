"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(false);

  useEffect(() => {
    // Try to autoplay unmuted. If the browser blocks it, show an overlay so the user can
    // explicitly start playback with sound.
    const v = videoRef.current;
    if (!v) return;

    // Ensure video is unmuted per user request
    v.muted = false;

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // autoplay succeeded
          setShowPlayOverlay(false);
        })
        .catch(() => {
          // autoplay failed (most likely due to autoplay policy). show overlay.
          setShowPlayOverlay(true);
        });
    }
  }, []);

  function handleOverlayPlay() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {
      /* ignore */
    });
    setShowPlayOverlay(false);
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Pilot Study Underway
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Sleep Well.{' '}
              <span className="text-blue-600">Protect Your Smile.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Clinician-Ready Insights, Right From Home.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-700 mb-10 max-w-2xl"
            >
              SomnoSense is a revolutionary wearable device that monitors sleep bruxism 
              (jaw clenching and teeth grinding) during sleep, providing objective data 
              to help protect your dental health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Join the Waitlist
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/somnosense"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                Follow on LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-2xl">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                {/* YouTube embed: replace video ID if needed. */}
                <div className="rounded-2xl overflow-hidden bg-black">
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                        <video
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          src="/videos/intro.mp4"
                          controls
                          playsInline
                          aria-hidden="true"
                          aria-label="SomnoSense intro video"
                        >
                        </video>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}