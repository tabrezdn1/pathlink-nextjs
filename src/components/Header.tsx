'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import type { NavItem } from '@/types';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Learn', href: '#learn' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Login', href: '#login' },
  ];

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'glass-effect shadow-2xl shadow-primary-500/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between px-2 sm:px-0 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <Logo size={32} />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <Button variant="primary">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-2 mt-2 space-y-1 rounded-lg bg-white px-4 pb-3 pt-2 shadow-lg dark:bg-dark-surface">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full py-2.5 text-sm">Get Started</Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.header>
  );
};

export default Header;
