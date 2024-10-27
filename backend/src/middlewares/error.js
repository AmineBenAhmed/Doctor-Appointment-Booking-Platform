import ErrorResponse from "../utils/errorResponse.js";

export const errorHandler = (err, req, res, next) => {

  //make a copy of err object
  let error = { ...err };
  error.message = err.message;

  //log to console for dev
  console.log(err.stack.red);

  //Mongoose bad error
  if (err.name === 'CastError') {
    const message = `Ressource not found`;
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400)
  }

  //Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};
