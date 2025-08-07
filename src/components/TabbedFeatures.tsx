'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const TabbedFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'applicants' | 'companies'>('applicants');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const tabContentVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Why PathLink Exists section data
  const whyPathLink = {
    title: 'Why PathLink Exists',
    content: [
      'The workforce is changing faster than ever.',
      'Layoffs are common. Skills become outdated overnight. Talented people are underused — and great companies are understaffed.',
      'PathLink was built to fix this.',
      "We believe in a world where talent flows, not stalls. Where layoffs don't mean starting over — they mean pivoting forward.",
      "We're not just another job board. We're a platform for career mobility, talent redistribution, and smarter hiring.",
    ],
  };

  const applicantFeatures = [
    {
      title: 'Blind-matched to roles that actually fit you',
      description:
        'Get matched to companies based on blind filters — no more keyword-stuffed resumes or endless guessing.',
    },
    {
      title: 'Career guidance that helps you grow, not guess',
      description:
        'Improve your chances with PathCoach, your AI career guide that helps you strengthen your profile, improve your resume, and prepare for interviews.',
    },
    {
      title: 'Skill-based feedback to improve your chances',
      description:
        "Discover where you belong, not just what's available. You'll get career suggestions based on real market data, not generic lists.",
    },
    {
      title: 'AI insights on where the job market is headed',
      description:
        'Stay ahead of change. Our platform gives you up-to-date insights into how AI and industry trends are shifting the job market — and what to do about it.',
    },
  ];

  const companyFeatures = [
    {
      title: 'Only see people who match your needs',
      description:
        'Post once. Get matches. No spam applicants, no endless inbox sorting — just a curated stream of qualified people.',
    },
    {
      title: 'Filter quietly — no spam or irrelevant applicants',
      description:
        'Define your filters privately. We use blind-matching to protect your intent while delivering high-fit candidates.',
    },
    {
      title: 'Unlock untapped talent from unexpected industries',
      description:
        "Find candidates from other industries or roles who meet your criteria — even if they wouldn't have applied themselves.",
    },
    {
      title: 'Fill roles faster with data-backed confidence',
      description:
        'Our system uses skill signals, retention data, and behavioral feedback to match you with the right fit the first time.',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-black pt-16 sm:pt-24 overflow-x-hidden">
      <div className="container-custom w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why PathLink Exists Section */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl text-display text-gray-900 dark:text-white mb-12"
          >
            {whyPathLink.title}
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {whyPathLink.content.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className={`text-lg md:text-xl text-body-large ${
                  index === 0 || index === 2
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Tabbed Content Section */}
        <motion.div
          id="tabbed-features"
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl flex space-x-2">
              <button
                data-tab="applicants"
                onClick={() => setActiveTab('applicants')}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'applicants'
                    ? 'text-white dark:text-gray-900'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeTab === 'applicants' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 gradient-bg rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>For Applicants</span>
                </span>
              </button>

              <button
                data-tab="companies"
                onClick={() => setActiveTab('companies')}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'companies'
                    ? 'text-white dark:text-gray-900'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeTab === 'companies' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 gradient-bg rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>For Companies</span>
                </span>
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'applicants' && (
              <motion.div
                key="applicants"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl text-heading text-gray-900 dark:text-white mb-4">
                    For Applicants
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                    You shouldn&apos;t have to apply to 100 jobs to find one that fits.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    PathLink helps you find roles that match your skills, personality, and potential
                    — with none of the spam.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {applicantFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    No more job boards. No more guessing. No more applying into black holes.
                  </p>
                  <button className="btn-accent flex items-center space-x-2 mx-auto">
                    <span>Join the Waitlist</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'companies' && (
              <motion.div
                key="companies"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl text-heading text-gray-900 dark:text-white mb-4">
                    For Companies
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                    Only see the candidates who match — and none of the ones who don&apos;t.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    PathLink is built for recruiters who are tired of sifting through noise.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {companyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    Less recruiting friction. More signal. Built for how hiring should work.
                  </p>
                  <button className="btn-accent flex items-center space-x-2 mx-auto">
                    <span>Request Early Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TabbedFeatures;
