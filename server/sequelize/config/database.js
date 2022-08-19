require('dotenv').config()

const config = {
  development: {
    username: process.env.DD_DATABASE_USER,
    password: process.env.DD_DATABASE_PASSWORD,
    database: process.env.DD_DATABASE_NAME,
    host: process.env.DD_DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: false,
      undescored: true
    }
  },
  test: {
    username: process.env.DD_DATABASE_USER,
    password: process.env.DD_DATABASE_PASSWORD,
    database: process.env.DD_DATABASE_NAME,
    host: process.env.DD_DATABASE_HOST,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.DD_DATABASE_USER,
    password: process.env.DD_DATABASE_PASSWORD,
    database: process.env.DD_DATABASE_NAME,
    host: process.env.DD_DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

module.exports = config
