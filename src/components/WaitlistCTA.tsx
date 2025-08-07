'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, Users, Sparkles } from 'lucide-react';

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
    <section className="section-padding relative bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="container-custom relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="w-20 h-20 mx-auto mb-8 relative">
            <div className="w-full h-full gradient-bg rounded-2xl flex items-center justify-center shadow-2xl">
              <Sparkles className="w-10 h-10 text-white dark:text-gray-900" />
            </div>
            <motion.div
              className="absolute -inset-2 gradient-bg rounded-2xl opacity-30 blur-lg"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white">The workforce is changing.</span>
            <br />
            <span className="gradient-text">Don&apos;t get left behind.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-body-large text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            Join the waitlist for early access to smarter matches, career insights, and the hiring
            solution built for real mobility.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div variants={itemVariants} className="mb-12 max-w-2xl mx-auto">
            {/* Mobile: Compact vertical list */}
            <div className="block md:hidden space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 glass-effect p-3 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Desktop: 2 column grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 glass-effect p-4 rounded-xl"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto px-4 sm:px-0">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass-effect border border-gray-200/50 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-accent text-lg py-4 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Join the Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Join 10,000+ professionals already on the waitlist
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-effect p-8 rounded-2xl text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
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
            className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12"
          >
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Users className="w-5 h-5" />
              <span className="font-medium">10,000+ on waitlist</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Early 2025 launch</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
