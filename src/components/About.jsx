import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiThumbsUp, FiTrendingUp } = FiIcons;

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FiTrendingUp,
      key: 'experience',
      number: '5+',
      color: 'text-facebook-600 dark:text-facebook-400',
      bgColor: 'bg-facebook-100 dark:bg-facebook-900/50',
    },
    {
      icon: FiAward,
      key: 'projects',
      number: '500+',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/50',
    },
    {
      icon: FiThumbsUp,
      key: 'clients',
      number: '98%',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
    },
    {
      icon: FiUsers,
      key: 'team',
      number: '20+',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 dark-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accessible-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.title')}
            </h2>
            
            <p className="text-accessible-xl text-gray-700 dark:text-gray-300 mb-8">
              {t('about.subtitle')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-facebook-100 dark:bg-facebook-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiAward} className="w-4 h-4 text-facebook-600 dark:text-facebook-400" />
                </div>
                <div>
                  <h3 className="text-accessible-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Award-Winning Design
                  </h3>
                  <p className="text-accessible-base text-gray-700 dark:text-gray-300">
                    Our team has received multiple industry awards for innovative web design and user experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-accessible-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Proven Results
                  </h3>
                  <p className="text-accessible-base text-gray-700 dark:text-gray-300">
                    We deliver measurable results that help businesses grow and succeed in the digital landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-accessible-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Expert Team
                  </h3>
                  <p className="text-accessible-base text-gray-700 dark:text-gray-300">
                    Our multidisciplinary team brings together expertise in design, development, SEO, and AI.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <SafeIcon icon={stat.icon} className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-accessible-2xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <p className="text-accessible-base font-medium text-gray-700 dark:text-gray-300">
                  {t(`about.${stat.key}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;