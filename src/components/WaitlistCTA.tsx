'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, Users, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const WaitlistCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Waitlist signup:', email);
    }
  };

  const benefits = [
    'Early access to smarter job matching',
    'Priority onboarding and support',
    'Exclusive career insights and market data',
    'Free PathCoach AI guidance for early users',
  ];

  return (
    <Section className="relative bg-gray-50 dark:bg-gray-900">
      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="relative mx-auto mb-8 h-20 w-20">
            <div className="gradient-bg flex h-full w-full items-center justify-center rounded-2xl shadow-2xl">
              <Sparkles className="h-10 w-10 text-white dark:text-gray-900" />
            </div>
            <motion.div
              className="gradient-bg absolute -inset-2 rounded-2xl opacity-30 blur-lg"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="text-gray-900 dark:text-white">The workforce is changing.</span>
            <br />
            <span className="gradient-text">Don&apos;t get left behind.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-body-large mx-auto mb-8 max-w-3xl px-2 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-12 sm:px-0 sm:text-lg md:text-xl lg:text-2xl"
          >
            Join the waitlist for early access to smarter matches, career insights, and the hiring
            solution built for real mobility.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div variants={itemVariants} className="mx-auto mb-12 max-w-2xl">
            {/* Mobile: Compact vertical list */}
            <div className="block space-y-3 md:hidden">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="glass-effect flex items-start space-x-3 rounded-lg p-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400" />
                  <span className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Desktop: 2 column grid */}
            <div className="hidden gap-4 md:grid md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="glass-effect flex items-center space-x-3 rounded-xl p-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div variants={itemVariants} className="mx-auto max-w-md px-4 sm:px-0">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="glass-effect w-full rounded-xl border border-gray-200/50 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-600/50 dark:text-white dark:placeholder-gray-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  className="flex w-full items-center justify-center space-x-2 py-4 text-lg"
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Join 10,000+ professionals already on the waitlist
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-effect rounded-2xl p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500"
                >
                  <CheckCircle className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  You&apos;re on the list!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We&apos;ll notify you when PathLink launches. Get ready for smarter matches!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-12 sm:space-y-0"
          >
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Users className="h-5 w-5" />
              <span className="font-medium">10,000+ on waitlist</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Early 2025 launch</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default WaitlistCTA;
