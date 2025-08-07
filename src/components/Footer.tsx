'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Github, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';

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
    <footer className="relative overflow-x-hidden border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <Container className="relative z-10">
        {/* Main footer content */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-12">
            {/* Brand section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center space-x-2">
                <Logo size={40} />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-6 sm:text-base">
                Transforming workforce mobility with smarter matches and faster hires. Building the
                future of career transitions.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="glass-effect rounded-lg p-2 transition-all duration-200 hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <social.icon className="h-5 w-5 text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links sections */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:col-span-3 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white sm:mb-4 sm:text-base">
                  Product
                </h3>
                <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {footerLinks.product.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-600 transition-colors duration-200 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 sm:text-sm lg:text-base"
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
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white sm:mb-4 sm:text-base">
                  Company
                </h3>
                <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {footerLinks.company.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-600 transition-colors duration-200 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 sm:text-sm lg:text-base"
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
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white sm:mb-4 sm:text-base">
                  Support
                </h3>
                <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
                  {footerLinks.support.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-600 transition-colors duration-200 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 sm:text-sm lg:text-base"
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
          className="border-t border-gray-200/50 py-4 dark:border-gray-700/50 sm:py-6 lg:py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-left">
            <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-300 sm:space-x-2 sm:text-sm">
              <span>© 2025 PathLink. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="h-4 w-4 fill-current text-red-500 dark:text-red-400" />
              </motion.div>
              <span>for better careers.</span>
            </div>

            <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 sm:space-x-6 sm:text-sm">
              <a
                href="#privacy"
                className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                Terms
              </a>
              <a
                href="#cookies"
                className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
