const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');

const securityMiddleware = (app) => {
  // Set security HTTP headers
  app.use(helmet());

  // Rate limiting
  const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
  });
  app.use('/api', limiter);

  // Data sanitization against XSS
  app.use(xss());

  // Data sanitization against NoSQL query injection
  app.use(mongoSanitize());

  // Prevent parameter pollution
  app.use(hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  }));
};

module.exports = securityMiddleware; 