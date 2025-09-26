'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allConsent));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We use cookies to enhance your experience</h3>
              <p className="text-sm text-gray-600">
                We use cookies to provide essential functionality, analyze site usage, and improve our services. 
                You can customize your preferences or accept all cookies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button onClick={() => setShowSettings(true)} className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                <Cog6ToothIcon className="h-4 w-4 mr-2" />
                Customize
              </button>
              <button onClick={handleRejectAll} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                Reject All
              </button>
              <button onClick={handleAcceptAll} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Cookie Preferences</h3>
              <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-600">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
                  <p className="text-sm text-gray-600">Essential for the website to function properly. Cannot be disabled.</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" checked={preferences.necessary} disabled className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">Used to deliver relevant advertisements and track campaign performance.</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={handleRejectAll} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                Reject All
              </button>
              <button onClick={handleAcceptSelected} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}