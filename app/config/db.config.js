module.exports = {
  HOST: "localhost",

  USER: "root",

  PASSWORD: "Q1p0w2o9e3i8",

  DB: "fake_db",

  dialect: "mysql",

  pool: {
    max: 5,

    min: 0,

    acquire: 30000,

    idle: 10000,
  },
};
