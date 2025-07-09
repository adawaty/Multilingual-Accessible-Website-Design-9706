import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMonitor, FiSearch, FiBrain, FiBookOpen, FiArrowRight } = FiIcons;

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FiMonitor,
      key: 'web_design',
      color: 'from-facebook-500 to-blue-500',
      bgColor: 'bg-facebook-50',
      iconColor: 'text-facebook-600',
    },
    {
      icon: FiSearch,
      key: 'seo',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: FiBrain,
      key: 'ai',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: FiBookOpen,
      key: 'edtech',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-accessible-3xl font-bold text-accessible-high-contrast mb-4">
            {t('services.title')}
          </h2>
          <p className="text-accessible-xl text-accessible-medium-contrast max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`${service.bgColor} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border border-gray-100`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-accessible-xl font-bold text-accessible-high-contrast mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                
                <p className="text-accessible-base text-accessible-medium-contrast mb-6 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>

                {/* Learn More Link */}
                <div className={`flex items-center ${service.iconColor} font-semibold group-hover:translate-x-2 transition-transform duration-300`}>
                  <span className="text-accessible-base">Learn More</span>
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="bg-facebook-600 hover:bg-facebook-700 text-white px-8 py-4 rounded-lg text-accessible-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-facebook-300 inline-flex items-center">
            Get Started Today
            <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;