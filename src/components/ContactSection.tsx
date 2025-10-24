'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  // Form state
  const [waitlistForm, setWaitlistForm] = useState({ name: '', email: '', phone: '', consent: false, _gotcha: '' });
  const [professionalForm, setProfessionalForm] = useState({ name: '', email: '', role: '', interest: '', consent: false, _gotcha: '' });

  // Submission state
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [professionalSubmitted, setProfessionalSubmitted] = useState(false);
  const [waitlistError, setWaitlistError] = useState<string | null>(null);
  const [professionalError, setProfessionalError] = useState<string | null>(null);

  // Formspree endpoints
  const WAITLIST_ENDPOINT = 'https://formspree.io/f/xrbynnkn';
  const PROFESSIONAL_ENDPOINT = 'https://formspree.io/f/xdkwqqda';

  async function handleWaitlistSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWaitlistError(null);

    // Honeypot check (client-side) - if filled, silently abort
    if (waitlistForm._gotcha) return;

    try {
      const formData = new FormData();
      formData.append('name', waitlistForm.name);
      formData.append('email', waitlistForm.email);
      formData.append('phone', waitlistForm.phone);
      formData.append('consent', waitlistForm.consent ? 'yes' : 'no');

      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setWaitlistSubmitted(true);
        // clear form
        setWaitlistForm({ name: '', email: '', phone: '', consent: false, _gotcha: '' });
      } else {
        const data = await res.json().catch(() => null);
        setWaitlistError((data && data.error) || 'Submission failed. Please try again later.');
      }
    } catch (err) {
      setWaitlistError('Network error. Please try again later.');
    }
  }

  async function handleProfessionalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProfessionalError(null);

    if (professionalForm._gotcha) return;

    try {
      const formData = new FormData();
      formData.append('name', professionalForm.name);
      formData.append('email', professionalForm.email);
      formData.append('role', professionalForm.role);
      formData.append('interest', professionalForm.interest);
      formData.append('consent', professionalForm.consent ? 'yes' : 'no');

      const res = await fetch(PROFESSIONAL_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (res.ok) {
        setProfessionalSubmitted(true);
        setProfessionalForm({ name: '', email: '', role: '', interest: '', consent: false, _gotcha: '' });
      } else {
        const data = await res.json().catch(() => null);
        setProfessionalError((data && data.error) || 'Submission failed. Please try again later.');
      }
    } catch (err) {
      setProfessionalError('Network error. Please try again later.');
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join the SomnoSense Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be among the first to experience SomnoSense. Join our waitlist for patients 
            or request information for healthcare professionals and researchers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Join the Waitlist
              </h3>
              <p className="text-gray-600">
                For patients interested in SomnoSense
              </p>
            </div>

            {!waitlistSubmitted ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6" autoComplete="off" noValidate>
                {/* Honeypot - hidden field to trap bots */}
                <input name="_gotcha" value={waitlistForm._gotcha} onChange={(e) => setWaitlistForm(prev => ({ ...prev, _gotcha: e.target.value }))} type="text" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true" />

                <div>
                  <label htmlFor="waitlist-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="waitlist-name"
                    name="name"
                    required
                    value={waitlistForm.name}
                    onChange={(e) => setWaitlistForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="waitlist-email"
                    name="email"
                    required
                    value={waitlistForm.email}
                    onChange={(e) => setWaitlistForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="waitlist-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="waitlist-phone"
                    name="phone"
                    value={waitlistForm.phone}
                    onChange={(e) => setWaitlistForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="waitlist-consent"
                    name="consent"
                    required
                    checked={waitlistForm.consent}
                    onChange={(e) => setWaitlistForm(prev => ({ ...prev, consent: e.target.checked }))}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="waitlist-consent" className="ml-3 text-sm text-gray-700">
                    I consent to receive updates about SomnoSense via email. I understand I can unsubscribe at any time. *
                  </label>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Do not submit personal health information (PHI) through this form. 
                      This form is for waitlist registration only.
                    </p>
                  </div>
                </div>

                {waitlistError && (
                  <div className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg p-3">
                    {waitlistError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="text-center py-8" role="status" aria-live="polite">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thank you - you’ve joined the SomnoSense waitlist.
                </h4>
                <p className="text-gray-600">
                  We will keep you updated on SomnoSense developments.
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Request Information
              </h3>
              <p className="text-gray-600">
                For healthcare professionals and researchers
              </p>
            </div>

            {!professionalSubmitted ? (
              <form onSubmit={handleProfessionalSubmit} className="space-y-6" autoComplete="off" noValidate>
                <input name="_gotcha" value={professionalForm._gotcha} onChange={(e) => setProfessionalForm(prev => ({ ...prev, _gotcha: e.target.value }))} type="text" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true" />

                <div>
                  <label htmlFor="professional-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="professional-name"
                    name="name"
                    required
                    value={professionalForm.name}
                    onChange={(e) => setProfessionalForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="professional-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="professional-email"
                    name="email"
                    required
                    value={professionalForm.email}
                    onChange={(e) => setProfessionalForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="professional-role" className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Role *
                  </label>
                  <select
                    id="professional-role"
                    name="role"
                    required
                    value={professionalForm.role}
                    onChange={(e) => setProfessionalForm(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select your role</option>
                    <option value="dentist">Dentist</option>
                    <option value="dental-hygienist">Dental Hygienist</option>
                    <option value="sleep-specialist">Sleep Specialist</option>
                    <option value="researcher">Researcher</option>
                    <option value="investor">Investor</option>
                    <option value="healthcare-administrator">Healthcare Administrator</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="professional-interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    id="professional-interest"
                    name="interest"
                    required
                    value={professionalForm.interest}
                    onChange={(e) => setProfessionalForm(prev => ({ ...prev, interest: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select your interest</option>
                    <option value="clinical-use">Clinical Use</option>
                    <option value="research-partnership">Research Partnership</option>
                    <option value="investment-opportunity">Investment Opportunity</option>
                    <option value="distribution">Distribution</option>
                    <option value="education">Education & Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="professional-consent"
                    name="consent"
                    required
                    checked={professionalForm.consent}
                    onChange={(e) => setProfessionalForm(prev => ({ ...prev, consent: e.target.checked }))}
                    className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="professional-consent" className="ml-3 text-sm text-gray-700">
                    I consent to receive information about SomnoSense and potential partnership opportunities. I understand I can unsubscribe at any time. *
                  </label>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Do not submit personal health information (PHI) through this form. 
                      This form is for professional inquiries only.
                    </p>
                  </div>
                </div>

                {professionalError && (
                  <div className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg p-3">
                    {professionalError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Request Information
                </button>
              </form>
            ) : (
              <div className="text-center py-8" role="status" aria-live="polite">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thank you - your request has been received.
                </h4>
                <p className="text-gray-600">
                  Our team will contact you soon.
                </p>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Questions? We are Here to Help
            </h3>
            <p className="text-gray-600 mb-6">
              For general inquiries or support, please contact us at:
            </p>
            <a
              href="mailto:contact.somnosense@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              contact.somnosense@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}