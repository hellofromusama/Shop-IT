# Shop-IT - MERN Stack E-commerce Platform

A full-featured e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User authentication and authorization
- Product management
- Shopping cart functionality
- Order processing
- Payment integration with Stripe
- Admin dashboard
- Responsive design
- Search and filtering
- Reviews and ratings

## Tech Stack

- **Frontend**: React.js, TypeScript, Material-UI, Redux Toolkit
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Payment**: Stripe
- **File Upload**: Multer
- **Email**: Nodemailer
- **Security**: Helmet, Rate Limiting, XSS Protection, CORS

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Stripe account (for payments)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
COOKIE_EXPIRE=30
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_API_KEY=your_stripe_api_key
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_EMAIL=your_smtp_email
SMTP_PASSWORD=your_smtp_password
FRONTEND_URL=http://localhost:3000
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shop-it.git
   cd shop-it
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend
   npm install
   ```

3. Start the development server:
   ```bash
   # From the root directory
   npm run dev
   ```

## Deployment

### Backend Deployment (Heroku)

1. Create a Heroku account and install the Heroku CLI
2. Login to Heroku:
   ```bash
   heroku login
   ```
3. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```
4. Add MongoDB addon:
   ```bash
   heroku addons:create mongolab
   ```
5. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set JWT_SECRET=your_jwt_secret
   # Set other environment variables
   ```
6. Deploy:
   ```bash
   git push heroku main
   ```

### Frontend Deployment (Vercel)

1. Create a Vercel account
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   cd frontend
   vercel
   ```

### Alternative Deployment Options

- **Backend**: DigitalOcean, AWS EC2, Google Cloud Platform
- **Frontend**: Netlify, AWS S3, Firebase Hosting
- **Database**: MongoDB Atlas

## Testing

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 