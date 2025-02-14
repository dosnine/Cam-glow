const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
  images: {
    domains: ['images.unsplash.com'], // Add the domain here
  },
};