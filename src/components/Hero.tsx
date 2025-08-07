'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star, Users, Briefcase, TrendingUp } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay: number;
}

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const trustLogos: string[] = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];

  const stats: StatItem[] = [
    {
      icon: Users,
      value: '500K+',
      label: 'Professionals Matched',
      delay: 0,
    },
    {
      icon: Briefcase,
      value: '10M+',
      label: 'Applications Processed',
      delay: 0.5,
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Match Success Rate',
      delay: 1,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-x-hidden">
      <div className="container-custom relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-5xl mx-auto pt-16 sm:pt-20 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium mb-4 sm:mb-8 mx-auto"
          >
            <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-current text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <span className="text-center leading-tight">
              <span className="block sm:hidden">AI Career Agent - 500K+ Users</span>
              <span className="hidden sm:block">
                Your Personal AI Career Agent - Trusted by 500K+ Professionals
              </span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-display mb-4 sm:mb-6 leading-tight"
          >
            <motion.span
              className="block text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Smarter Matches.
            </motion.span>
            <motion.span
              className="block gradient-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Faster Hires.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-body-large text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            PathLink connects the right people to the right roles — faster, smarter, and without the
            noise. Whether you&apos;re hiring or looking, PathLink gives you the guidance and match
            quality no job board can.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-2 sm:px-0"
          >
            <button
              className="btn-accent flex items-center space-x-2"
              onClick={() => {
                const element = document.getElementById('tabbed-features');
                if (element) {
                  // Get actual header height to offset scroll position
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.offsetHeight + 20 : 100; // Add 20px buffer
                  const elementTop = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth',
                  });
                  // Set applicants tab as active after scroll
                  setTimeout(() => {
                    const applicantsTab = document.querySelector(
                      '[data-tab="applicants"]'
                    ) as HTMLButtonElement;
                    applicantsTab?.click();
                  }, 500);
                }
              }}
            >
              <span>For Applicants</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              className="btn-secondary"
              onClick={() => {
                const element = document.getElementById('tabbed-features');
                if (element) {
                  // Get actual header height to offset scroll position
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.offsetHeight + 20 : 100; // Add 20px buffer
                  const elementTop = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth',
                  });
                  // Set companies tab as active after scroll
                  setTimeout(() => {
                    const companiesTab = document.querySelector(
                      '[data-tab="companies"]'
                    ) as HTMLButtonElement;
                    companiesTab?.click();
                  }, 500);
                }
              }}
            >
              <span>For Companies</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            {/* Mobile: Horizontal scroll */}
            <div className="block sm:hidden overflow-hidden w-full">
              <div
                className="flex gap-3 overflow-x-auto pb-4 px-4 scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory', width: '100%', maxWidth: '100vw' }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex-shrink-0 text-center bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-700 w-32"
                    style={{ scrollSnapAlign: 'start' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary-500 dark:text-primary-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ delay: stat.delay }}
                >
                  <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                  </motion.div>
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Logos */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-12"
          >
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-8">
              Trusted by leading companies worldwide
            </p>

            {/* Mobile: Horizontal scroll */}
            <div className="block sm:hidden overflow-hidden w-full">
              <div
                className="flex gap-2 overflow-x-auto pb-2 px-4 scrollbar-hide"
                style={{ scrollSnapType: 'x mandatory', width: '100%', maxWidth: '100vw' }}
              >
                {trustLogos.map((company, index) => (
                  <motion.div
                    key={company}
                    className="flex-shrink-0 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 text-sm font-medium whitespace-nowrap opacity-60"
                    style={{ scrollSnapAlign: 'start' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.6, x: 0 }}
                    transition={{ delay: 2.5 + index * 0.05, duration: 0.4 }}
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: Flex wrap */}
            <div className="hidden sm:flex flex-wrap justify-center items-center gap-4 lg:gap-6 opacity-60">
              {trustLogos.map((company, index) => (
                <motion.div
                  key={company}
                  className="px-4 lg:px-6 py-2 sm:py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium cursor-pointer"
                  whileHover={{ scale: 1.05, opacity: 1, y: -1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 2.5 + index * 0.1, duration: 0.6 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
