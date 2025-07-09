import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiPlay, FiStar } = FiIcons;

const Hero = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-facebook-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-facebook-600 to-blue-600"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-facebook-100 text-facebook-700 px-4 py-2 rounded-full text-accessible-sm font-medium mb-6"
            >
              <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
              {t('hero.trusted_by')}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-accessible-3xl sm:text-5xl lg:text-6xl font-bold text-accessible-high-contrast mb-6 leading-tight"
            >
              {t('hero.title')}{' '}
              <span className="text-facebook-600 bg-gradient-to-r from-facebook-600 to-blue-600 bg-clip-text text-transparent">
                {t('hero.company')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-accessible-xl text-accessible-medium-contrast mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-accessible-lg text-accessible-low-contrast mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group bg-facebook-600 hover:bg-facebook-700 text-white px-8 py-4 rounded-lg text-accessible-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-facebook-300 flex items-center justify-center">
                {t('hero.cta_primary')}
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white hover:bg-gray-50 text-facebook-600 border-2 border-facebook-600 px-8 py-4 rounded-lg text-accessible-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-facebook-300 flex items-center justify-center">
                <SafeIcon icon={FiPlay} className="mr-2 w-5 h-5" />
                {t('hero.cta_secondary')}
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-facebook-500 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={FiStar} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-accessible-lg font-bold text-gray-900">Premium Quality</h3>
                      <p className="text-accessible-base text-gray-600">Award-winning designs</p>
                    </div>
                  </div>
                  
                  <div className="bg-facebook-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-accessible-base font-medium text-gray-700">Project Success Rate</span>
                      <span className="text-accessible-lg font-bold text-facebook-600">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: '98%' } : {}}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="bg-facebook-500 h-3 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-4 shadow-lg"
              >
                <SafeIcon icon={FiStar} className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-green-500 rounded-full p-4 shadow-lg"
              >
                <SafeIcon icon={FiStar} className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;