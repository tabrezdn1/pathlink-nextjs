'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Brain, Target, Zap, Shield, TrendingUp, Clock, CheckCircle, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const AICopilot: React.FC = () => {
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

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description:
        'Our AI analyzes thousands of data points to match you with opportunities that align with your skills, experience, and career goals.',
      benefit: '10x better matches',
    },
    {
      icon: Target,
      title: 'Skill Gap Analysis',
      description:
        'Identify missing skills for your target roles and get personalized recommendations to bridge the gap.',
      benefit: 'Faster promotions',
    },
    {
      icon: Zap,
      title: 'Instant Application Insights',
      description:
        'Get real-time feedback on your applications and learn what makes you stand out to recruiters.',
      benefit: '3x higher response rate',
    },
    {
      icon: Shield,
      title: 'ATS Optimization',
      description:
        'Ensure your profile passes through Applicant Tracking Systems used by top companies.',
      benefit: '95% ATS compatibility',
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description:
        'Stay ahead with insights on hiring trends, salary benchmarks, and in-demand skills in your field.',
      benefit: 'Always competitive',
    },
    {
      icon: Clock,
      title: 'Application Tracking',
      description:
        'Never lose track of your applications with our intelligent dashboard and automated follow-up reminders.',
      benefit: 'Zero missed opportunities',
    },
  ];

  const successMetrics = [
    { number: '2 weeks', label: 'Average time to hire' },
    { number: '5x', label: 'More interviews' },
    { number: '40%', label: 'Higher salary offers' },
    { number: '100K+', label: 'Successful placements' },
  ];

  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <Container>
        <motion.div
          className="mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center space-x-2 rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
          >
            <Sparkles className="h-4 w-4" />
            <span>Your Personal AI Career Agent</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-display mb-6 text-2xl text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Built by Job Seekers, <span className="gradient-text">for Job Seekers</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-body-large mx-auto max-w-4xl px-2 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:px-0 sm:text-lg md:text-xl"
          >
            PathLink&apos;s AI Copilot acts as your personal talent agent, analyzing millions of
            data points to accelerate your career journey and connect you with opportunities you
            never knew existed.
          </motion.p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Mobile: 2x2 Compact Grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {successMetrics.map(metric => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
                whileHover={{ scale: 1.02 }}
              >
                <div className="group-hover:gradient-text mb-1 text-2xl font-bold text-gray-900 transition-all duration-300 dark:text-white">
                  {metric.number}
                </div>
                <div className="text-xs leading-tight text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: 4 Column Grid */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-4 lg:gap-8">
            {successMetrics.map(metric => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                className="group text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="group-hover:gradient-text mb-2 text-3xl font-bold text-gray-900 transition-all duration-300 dark:text-white md:text-4xl lg:text-5xl">
                  {metric.number}
                </div>
                <div className="text-caption text-gray-600 dark:text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Features Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {features.map(feature => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 sm:rounded-2xl sm:p-6 lg:p-8"
              whileHover={{ y: -2 }}
            >
              <div className="gradient-bg mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                <feature.icon className="h-6 w-6 text-white dark:text-gray-900 sm:h-8 sm:w-8" />
              </div>

              <h3 className="text-heading mb-3 text-base font-semibold leading-tight text-gray-900 dark:text-white sm:mb-4 sm:text-lg lg:text-xl">
                {feature.title}
              </h3>

              <p className="text-body mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-4">
                {feature.description}
              </p>

              <div className="inline-flex items-center space-x-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300 sm:space-x-2 sm:px-3 sm:text-sm">
                <CheckCircle className="h-3 w-3" />
                <span>{feature.benefit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-heading mb-6 text-xl text-gray-900 dark:text-white sm:text-2xl md:text-3xl"
          >
            Ready to experience the future of job searching?
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="accent" className="flex items-center space-x-2">
              <span>Start Your AI Journey</span>
              <Sparkles className="h-5 w-5" />
            </Button>

            <Button variant="secondary">
              <span>See How It Works</span>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default AICopilot;
