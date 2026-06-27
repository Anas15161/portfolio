// /home/anas/Desktop/portefolio/portfolio/server/src/controllers/contactController.js
import pool from '../config/db.js';

export const sendMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    await pool.execute(query, [name, email, message]);

    res.status(201).json({
      success: true,
      message: 'Message envoyé avec succès !'
    });
  } catch (error) {
    next(error);
  }
};
