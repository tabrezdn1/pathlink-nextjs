'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote, Star, Briefcase, MapPin } from 'lucide-react';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'San Francisco, CA',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        'PathLink helped me transition from a startup to Google. The blind matching feature meant I was evaluated purely on my skills, not my previous company size. Got 3 offers in 2 weeks!',
      highlight: 'Skills-first matching',
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Product Manager',
      company: 'Meta',
      location: 'Austin, TX',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        'After being laid off, PathLink guided my career pivot from finance to tech. The AI insights showed me exactly which PM skills to develop. Landed at Meta 4 months later.',
      highlight: 'Career transition success',
    },
    {
      id: 3,
      name: 'Emily Thompson',
      title: 'Data Scientist',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content:
        'As a hiring manager, PathLink transforms our recruiting. We only see candidates who match our exact needs. Our time-to-hire dropped from 8 weeks to 3 weeks.',
      highlight: 'Faster hiring process',
    },
  ];

  const companyLogos = [
    { name: 'Google', color: 'text-red-500 dark:text-red-400' },
    { name: 'Meta', color: 'text-blue-600 dark:text-blue-400' },
    { name: 'Netflix', color: 'text-red-600 dark:text-red-400' },
    { name: 'Apple', color: 'text-gray-900 dark:text-gray-100' },
    { name: 'Amazon', color: 'text-orange-500 dark:text-orange-400' },
  ];
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section className="section-padding relative bg-white dark:bg-black overflow-x-hidden">
      <div className="container-custom relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-heading text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Trusted by professionals at leading companies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
            >
              Join thousands of professionals who&apos;ve accelerated their careers with PathLink
            </motion.p>
          </motion.div>

          {/* Company Logos Strip */}
          <motion.div
            variants={itemVariants}
            className="mb-12 sm:mb-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60 px-2 sm:px-0"
          >
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                className={`text-lg sm:text-xl lg:text-2xl font-bold ${company.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
              >
                {company.name}
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <Quote className="w-4 h-4 text-white" />
                </motion.div>

                {/* Highlight Badge */}
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.highlight}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 dark:text-gray-300 text-body mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 dark:text-yellow-300 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div>
                    <h4 className="text-subheading text-gray-900 dark:text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Briefcase className="w-3 h-3" />
                      <span>{testimonial.title}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {testimonial.company}
                      </span>
                      <span>•</span>
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
          >
            {[
              { number: '10K+', label: 'Professionals Matched' },
              { number: '500+', label: 'Partner Companies' },
              { number: '95%', label: 'Success Rate' },
              { number: '3 weeks', label: 'Average Time to Hire' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-caption text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
