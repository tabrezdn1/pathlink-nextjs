'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

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
    <Section className="bg-white pt-16 dark:bg-black sm:pt-24">
      <Container>
        {/* Why PathLink Exists Section */}
        <motion.div
          className="mb-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-display mb-12 text-3xl text-gray-900 dark:text-white md:text-5xl"
          >
            {whyPathLink.title}
          </motion.h2>
          <div className="mx-auto max-w-4xl space-y-6">
            {whyPathLink.content.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className={`text-body-large text-lg md:text-xl ${
                  index === 0 || index === 2
                    ? 'font-semibold text-gray-900 dark:text-white'
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
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="mb-12 flex justify-center">
            <div className="flex space-x-2 rounded-2xl bg-gray-100 p-2 dark:bg-gray-800">
              <button
                data-tab="applicants"
                onClick={() => setActiveTab('applicants')}
                className={`relative rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
                  activeTab === 'applicants'
                    ? 'text-white dark:text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {activeTab === 'applicants' && (
                  <motion.div
                    layoutId="activeTab"
                    className="gradient-bg absolute inset-0 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>For Applicants</span>
                </span>
              </button>

              <button
                data-tab="companies"
                onClick={() => setActiveTab('companies')}
                className={`relative rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
                  activeTab === 'companies'
                    ? 'text-white dark:text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {activeTab === 'companies' && (
                  <motion.div
                    layoutId="activeTab"
                    className="gradient-bg absolute inset-0 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
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
                className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800 sm:rounded-3xl sm:p-6 md:p-8 lg:p-12"
              >
                <div className="mb-12 text-center">
                  <h2 className="text-heading mb-4 text-3xl text-gray-900 dark:text-white md:text-4xl">
                    For Applicants
                  </h2>
                  <p className="mb-2 text-xl text-gray-600 dark:text-gray-300">
                    You shouldn&apos;t have to apply to 100 jobs to find one that fits.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    PathLink helps you find roles that match your skills, personality, and potential
                    — with none of the spam.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {applicantFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="rounded-2xl bg-white p-6 transition-all duration-200 hover:shadow-lg dark:bg-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                        <div>
                          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-6 italic text-gray-600 dark:text-gray-300">
                    No more job boards. No more guessing. No more applying into black holes.
                  </p>
                  <Button variant="accent" className="mx-auto flex items-center space-x-2">
                    <span>Join the Waitlist</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
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
                className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800 sm:rounded-3xl sm:p-6 md:p-8 lg:p-12"
              >
                <div className="mb-12 text-center">
                  <h2 className="text-heading mb-4 text-3xl text-gray-900 dark:text-white md:text-4xl">
                    For Companies
                  </h2>
                  <p className="mb-2 text-xl text-gray-600 dark:text-gray-300">
                    Only see the candidates who match — and none of the ones who don&apos;t.
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    PathLink is built for recruiters who are tired of sifting through noise.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {companyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="rounded-2xl bg-white p-6 transition-all duration-200 hover:shadow-lg dark:bg-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                        <div>
                          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-6 italic text-gray-600 dark:text-gray-300">
                    Less recruiting friction. More signal. Built for how hiring should work.
                  </p>
                  <Button variant="accent" className="mx-auto flex items-center space-x-2">
                    <span>Request Early Access</span>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
};

export default TabbedFeatures;
