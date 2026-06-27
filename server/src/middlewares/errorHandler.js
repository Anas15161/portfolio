// /home/anas/Desktop/portefolio/portfolio/server/src/middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Une erreur interne du serveur est survenue.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

export default errorHandler;
