'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const footerLinks = {
    product: [
      { name: 'For Applicants', href: '#applicants' },
      { name: 'For Companies', href: '#companies' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Features', href: '#features' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Status', href: '#status' },
    ],
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-x-hidden">
      <div className="container-custom relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <motion.div
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                  whileHover={{ rotate: 3, scale: 1.02 }}
                >
                  <div className="absolute inset-0 gradient-bg" />
                  <span className="relative text-white dark:text-gray-900 font-bold text-xl">
                    P
                  </span>
                </motion.div>
                <span className="text-2xl font-bold gradient-text">Pathlink</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Transforming workforce mobility with smarter matches and faster hires. Building the
                future of career transitions.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg glass-effect hover:shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links sections */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4 text-sm sm:text-base">
                  Product
                </h3>
                <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {footerLinks.product.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4 text-sm sm:text-base">
                  Company
                </h3>
                <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {footerLinks.company.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-4 text-sm sm:text-base">
                  Support
                </h3>
                <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {footerLinks.support.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-gray-200/50 dark:border-gray-700/50 py-4 sm:py-6 lg:py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              <span>© 2025 Pathlink. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-4 h-4 text-red-500 dark:text-red-400 fill-current" />
              </motion.div>
              <span>for better careers.</span>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <a
                href="#privacy"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#cookies"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
