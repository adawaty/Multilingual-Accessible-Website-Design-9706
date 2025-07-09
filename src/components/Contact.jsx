import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSend, FiMail, FiPhone, FiMapPin, FiClock } = FiIcons;

const Contact = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'hello@adawaty.com',
      color: 'text-facebook-600 dark:text-facebook-400',
      bgColor: 'bg-facebook-100 dark:bg-facebook-900/50',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/50',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'New York, NY',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/50',
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      value: 'Mon-Fri 9AM-6PM',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/50',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400 focus:border-facebook-500 dark:focus:border-facebook-400 text-base text-gray-900 dark:text-white transition-colors"
                  aria-describedby="name-help"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400 focus:border-facebook-500 dark:focus:border-facebook-400 text-base text-gray-900 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400 focus:border-facebook-500 dark:focus:border-facebook-400 text-base text-gray-900 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.form.service')}
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400 focus:border-facebook-500 dark:focus:border-facebook-400 text-base text-gray-900 dark:text-white transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="web-design">Web Design & Development</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="ai">AI Solutions</option>
                  <option value="edtech">EdTech Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-facebook-500 dark:focus:ring-facebook-400 focus:border-facebook-500 dark:focus:border-facebook-400 text-base text-gray-900 dark:text-white transition-colors resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-facebook-600 hover:bg-facebook-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-facebook-300 dark:focus:ring-facebook-800 flex items-center justify-center"
              >
                <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <SafeIcon icon={info.icon} className={`w-6 h-6 ${info.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-facebook-100 to-blue-100 dark:from-facebook-900/50 dark:to-blue-900/50 rounded-xl p-8 text-center"
            >
              <SafeIcon icon={FiMapPin} className="w-16 h-16 text-facebook-600 dark:text-facebook-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Visit Our Office
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                Schedule a meeting to discuss your project in person
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;