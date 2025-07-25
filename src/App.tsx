import React, { useState } from 'react';
import { ChevronRight, Mail, TrendingUp, Users, BookOpen, Award, Check, ArrowRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GeniusCryptoUpdate
              </span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Tracking the GENIUS Act & Stablecoin Revolution
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Stay Ahead of the
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent block">
                Stablecoin Disruption
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get exclusive insights, regulatory updates, and market analysis on how stablecoins and the GENIUS Act are reshaping fintech, crypto, and traditional finance.
            </p>
          </div>

          {/* Email Capture Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Join 1,000+ Insiders</h3>
              <p className="text-slate-600">Get our exclusive Stablecoin Market Report + weekly updates</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Get Free Report
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
            
            <p className="text-sm text-slate-500 mt-4">
              No spam. Unsubscribe anytime. Join crypto professionals from Goldman Sachs, Circle, and Coinbase.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver the insights that matter most for navigating the rapidly evolving stablecoin landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Exclusive Research</h3>
              <p className="text-slate-600 mb-6">
                Deep-dive analysis on GENIUS Act implications, regulatory changes, and market movements before they hit mainstream media.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Weekly market reports
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Regulatory updates
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Expert interviews
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Market Intelligence</h3>
              <p className="text-slate-600 mb-6">
                Stay ahead with data-driven insights on adoption trends, institutional moves, and emerging opportunities in the stablecoin ecosystem.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Adoption metrics
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Institutional tracking
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Trend forecasting
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Network</h3>
              <p className="text-slate-600 mb-6">
                Connect with fellow professionals, share insights, and access exclusive events with other forward-thinking leaders in fintech and crypto.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Private community
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Industry events
                </li>
                <li className="flex items-center text-slate-700">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Networking opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Trusted by Industry Professionals
            </h2>
            <div className="flex justify-center items-center space-x-8 text-slate-600">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">1,000+ Subscribers</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-semibold">95% Open Rate</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">Featured in CoinDesk</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "VP of Digital Assets, Goldman Sachs",
                quote: "Essential reading for anyone serious about understanding the stablecoin landscape. The GENIUS Act coverage is unmatched."
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Compliance, Circle",
                quote: "GeniusCryptoUpdate consistently delivers insights that help us stay ahead of regulatory changes and market trends."
              },
              {
                name: "Emily Thompson",
                role: "Senior Analyst, Coinbase",
                quote: "The quality of research and timeliness of updates makes this newsletter invaluable for our strategic planning."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <p className="text-slate-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Stay Ahead of the Curve?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who rely on our insights to navigate the stablecoin revolution.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
              >
                Get Started
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">GeniusCryptoUpdate</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 GeniusCryptoUpdate. All rights reserved. Stay informed, stay ahead.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;