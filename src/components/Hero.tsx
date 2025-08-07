'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star, Users, Briefcase, TrendingUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { scrollToElement } from '@/utils';

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
    <Section className="relative flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <Container className="relative z-10">
        <motion.div
          className="mx-auto w-full max-w-5xl pt-16 text-center sm:pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-4 inline-flex items-center space-x-2 rounded-full bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300 sm:mb-8 sm:px-6 sm:py-3 sm:text-sm"
          >
            <Star className="h-3 w-3 flex-shrink-0 fill-current text-gray-600 dark:text-gray-400 sm:h-4 sm:w-4" />
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
            className="text-display mb-4 text-3xl leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
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
              className="gradient-text block"
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
            className="text-body-large mx-auto mb-8 max-w-4xl px-2 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-12 sm:px-0 sm:text-lg md:text-xl"
          >
            PathLink connects the right people to the right roles — faster, smarter, and without the
            noise. Whether you&apos;re hiring or looking, PathLink gives you the guidance and match
            quality no job board can.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-3 px-2 sm:mb-16 sm:flex-row sm:gap-4 sm:px-0"
          >
            <Button
              variant="accent"
              className="flex items-center space-x-2"
              onClick={() => {
                scrollToElement('tabbed-features');
                setTimeout(() => {
                  const applicantsTab = document.querySelector(
                    '[data-tab="applicants"]'
                  ) as HTMLButtonElement;
                  applicantsTab?.click();
                }, 500);
              }}
            >
              <span>For Applicants</span>
              <ArrowRight className="h-5 w-5" />
            </Button>

            <Button
              variant="secondary"
              onClick={() => {
                scrollToElement('tabbed-features');
                setTimeout(() => {
                  const companiesTab = document.querySelector(
                    '[data-tab="companies"]'
                  ) as HTMLButtonElement;
                  companiesTab?.click();
                }, 500);
              }}
            >
              <span>For Companies</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            {/* Mobile: Horizontal scroll */}
            <div className="block w-full overflow-hidden sm:hidden">
              <div
                className="scrollbar-hide flex gap-3 overflow-x-auto px-4 pb-4"
                style={{ scrollSnapType: 'x mandatory', width: '100%', maxWidth: '100vw' }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="w-32 flex-shrink-0 rounded-xl border border-gray-100 bg-white p-3 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
                    style={{ scrollSnapAlign: 'start' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  >
                    <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary-500 dark:text-primary-400" />
                    <div className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs leading-tight text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden gap-6 sm:grid sm:grid-cols-3 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group cursor-pointer text-center"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ delay: stat.delay }}
                >
                  <motion.div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 transition-colors duration-300 group-hover:bg-primary-200 dark:bg-primary-900/30 dark:group-hover:bg-primary-900/50">
                    <stat.icon className="h-8 w-8 text-primary-500 dark:text-primary-400" />
                  </motion.div>
                  <motion.div
                    className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
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
            className="border-t border-gray-200 pt-6 dark:border-gray-700 sm:pt-12"
          >
            <p className="mb-4 text-xs text-gray-500 dark:text-gray-400 sm:mb-8 sm:text-sm">
              Trusted by leading companies worldwide
            </p>

            {/* Mobile: Horizontal scroll */}
            <div className="block w-full overflow-hidden sm:hidden">
              <div
                className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-2"
                style={{ scrollSnapType: 'x mandatory', width: '100%', maxWidth: '100vw' }}
              >
                {trustLogos.map((company, index) => (
                  <motion.div
                    key={company}
                    className="flex-shrink-0 whitespace-nowrap rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-600 opacity-60 dark:bg-gray-800 dark:text-gray-400"
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
            <div className="hidden flex-wrap items-center justify-center gap-4 opacity-60 sm:flex lg:gap-6">
              {trustLogos.map((company, index) => (
                <motion.div
                  key={company}
                  className="cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400 sm:py-3 sm:text-base lg:px-6"
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
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="relative flex h-10 w-6 justify-center overflow-hidden rounded-full border-2 border-gray-400 dark:border-gray-600">
          <motion.div
            className="mt-2 h-3 w-1 rounded-full bg-gray-400 dark:bg-gray-600"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;
