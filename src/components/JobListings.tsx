'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  company: string;
  skills: string[];
  bgGradient: string;
  accentColor: string;
  borderColor: string;
}

const JobListings: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Product Engineer',
      location: 'Ontario',
      type: 'Full-time',
      salary: '$80k - $120k',
      company: 'TechCorp',
      skills: ['UX/UI', 'Prototyping', 'Wireframing'],
      bgGradient:
        'bg-gradient-to-br from-cream-50 via-gold-50 to-primary-50 dark:from-blue-900/40 dark:via-blue-800/30 dark:to-indigo-900/40',
      accentColor: 'text-blue-500 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      location: 'Remote, Europe',
      type: 'Full-time',
      salary: '$60k - $90k',
      company: 'WebFlow Inc',
      skills: ['Django', 'PostgreSQL', 'SQL'],
      bgGradient:
        'bg-gradient-to-br from-primary-50 via-gold-50 to-cream-50 dark:from-green-900/40 dark:via-green-800/30 dark:to-emerald-900/40',
      accentColor: 'text-green-500 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-800',
    },
    {
      id: 3,
      title: 'UX Designer',
      location: 'San Francisco',
      type: 'Contract',
      salary: '$70k - $100k',
      company: 'DesignStudio',
      skills: ['Figma', 'User Research', 'Design Systems'],
      bgGradient:
        'bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/40 dark:via-purple-800/30 dark:to-pink-900/40',
      accentColor: 'text-purple-500 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800',
    },
    {
      id: 4,
      title: 'Backend Engineer',
      location: 'New York',
      type: 'Full-time',
      salary: '$90k - $130k',
      company: 'DataFlow',
      skills: ['Node.js', 'MongoDB', 'AWS'],
      bgGradient:
        'bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/40 dark:via-orange-800/30 dark:to-red-900/40',
      accentColor: 'text-orange-500 dark:text-orange-400',
      borderColor: 'border-orange-200 dark:border-orange-800',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$85k - $115k',
      company: 'CloudTech',
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      bgGradient:
        'bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-900/40 dark:via-teal-800/30 dark:to-cyan-900/40',
      accentColor: 'text-teal-500 dark:text-teal-400',
      borderColor: 'border-teal-200 dark:border-teal-800',
    },
    {
      id: 6,
      title: 'Mobile Developer',
      location: 'Los Angeles',
      type: 'Part-time',
      salary: '$50k - $75k',
      company: 'AppMakers',
      skills: ['React Native', 'Flutter', 'iOS'],
      bgGradient:
        'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/40 dark:via-pink-800/30 dark:to-rose-900/40',
      accentColor: 'text-pink-500 dark:text-pink-400',
      borderColor: 'border-pink-200 dark:border-pink-800',
    },
  ];

  return (
    <Section className="bg-gray-50 dark:bg-dark-surface">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Your Next Opportunity
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl px-2 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:px-0 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Browse through carefully curated job listings from top companies actively hiring
            talented professionals.
          </motion.p>
        </motion.div>

        {/* Mobile: Horizontal scroll */}
        <div className="mb-12 block w-full overflow-hidden sm:hidden">
          <div
            className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4"
            style={{ scrollSnapType: 'x mandatory', width: '100%', maxWidth: '100vw' }}
          >
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                variants={cardVariants}
                className={`w-72 flex-shrink-0 cursor-pointer ${job.bgGradient} rounded-xl border p-4 ${job.borderColor} relative overflow-hidden transition-all duration-300 hover:shadow-lg`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2, scale: 1.01 }}
              >
                {/* Header */}
                <div className="relative z-10 mb-3 flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-300">
                      {job.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Location & Type */}
                <div className="relative z-10 mb-3 flex items-center space-x-3 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{job.type}</span>
                  </div>
                </div>

                {/* Salary */}
                <div className="relative z-10 mb-3 flex items-center space-x-1 text-gray-700 dark:text-gray-300">
                  <DollarSign className="h-3 w-3" />
                  <span className="text-sm font-semibold">{job.salary}</span>
                </div>

                {/* Skills */}
                <div className="relative z-10 mb-4">
                  <div className="flex flex-wrap gap-1">
                    {job.skills.slice(0, 3).map(skill => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/60 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800/60 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="rounded-full bg-white/60 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800/60 dark:text-gray-300">
                        +{job.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                <div className="relative z-10 flex items-center justify-end">
                  <ArrowRight
                    className={`h-4 w-4 ${job.accentColor} transform transition-transform duration-200 group-hover:translate-x-1`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <motion.div
          className="mb-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover="hover"
              className={`group cursor-pointer ${job.bgGradient} rounded-2xl border p-6 ${job.borderColor} relative overflow-hidden transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/10 dark:to-white/5"
                initial={false}
              />

              {/* Header */}
              <div className="relative z-10 mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <motion.h3
                    className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-300"
                    layoutId={`job-title-${job.id}`}
                  >
                    {job.title}
                  </motion.h3>
                  <p className="font-medium text-gray-600 dark:text-gray-300">{job.company}</p>
                </div>
                <motion.div
                  className={`h-3 w-3 rounded-full ${job.accentColor.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              {/* Location & Type */}
              <div className="relative z-10 mb-4 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </motion.div>
                <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                  <Clock className="h-4 w-4" />
                  <span>{job.type}</span>
                </motion.div>
              </div>

              {/* Salary */}
              <motion.div
                className="relative z-10 mb-4 flex items-center space-x-1 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.05 }}
              >
                <DollarSign className="h-4 w-4" />
                <span className="font-semibold">{job.salary}</span>
              </motion.div>

              {/* Skills */}
              <div className="relative z-10 mb-6">
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="cursor-pointer rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 transition-colors duration-200 hover:bg-white/80 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800/80"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <motion.div
                className="relative z-10 flex items-center justify-between"
                variants={hoverVariants}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  In-Demand Section Cards Pattern
                </span>
                <motion.div whileHover={{ scale: 1.05, rotate: 15 }} transition={{ duration: 0.2 }}>
                  <ArrowRight
                    className={`h-5 w-5 ${job.accentColor} transform transition-transform duration-200 group-hover:translate-x-1`}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <Button className="group relative mx-auto flex items-center space-x-2 overflow-hidden">
            <span className="relative z-10">View All Opportunities</span>
            <ArrowRight className="relative z-10 h-5 w-5" />
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default JobListings;
