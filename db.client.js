const { Sequelize } = require('sequelize');

// database
const sequelize = new Sequelize(
  process.env.DATABASE_URL, 
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'); // Message de succès amélioré
    sequelize.sync().catch((error) => console.log("Cannot sync the database:", error)); // Log d'erreur amélioré
  })
  .catch((error) => console.log("Cannot connect to database, please check environment credentials:", error)); // Log d'erreur amélioré

module.exports = sequelize;