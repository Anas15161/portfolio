// /home/anas/Desktop/portefolio/portfolio/server/server.js
import app from './src/app.js';
import pool from './src/config/db.js';

const PORT = process.env.PORT || 5000;

// Verify DB connection before starting the server
pool.getConnection()
  .then((connection) => {
    console.log('Database connected successfully.');
    connection.release();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err.message);
    process.exit(1);
  });
