require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  port: 3000,
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  //   accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
  //   refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
  //   resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
  //   verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    smtp: {
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  },
  prepostseo: {
    api_key: process.env.API_KEY,
    api_url: process.env.API_URL,
  },
  stripe: {
    secret_key: process.env.STRIPE_SECRET_KEY,
  }
};