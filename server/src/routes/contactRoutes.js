// /home/anas/Desktop/portefolio/portfolio/server/src/routes/contactRoutes.js
import express from 'express';
import { body } from 'express-validator';
import { sendMessage } from '../controllers/contactController.js';
import validate from '../middlewares/validate.js';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const router = express.Router();

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 15 * 60, // 15 minutes
});

const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter.consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).json({ success: false, message: 'Trop de requêtes, veuillez réessayer plus tard.' });
    });
};

router.post(
  '/',
  rateLimiterMiddleware,
  [
    body('name')
      .trim()
      .isLength({ min: 2, max: 50 }).withMessage('Le nom doit contenir entre 2 et 50 caractères.'),
    body('email')
      .trim()
      .isEmail().withMessage('Veuillez fournir une adresse email valide.'),
    body('message')
      .trim()
      .isLength({ min: 10, max: 500 }).withMessage('Le message doit contenir entre 10 et 500 caractères.')
  ],
  validate,
  sendMessage
);

export default router;
