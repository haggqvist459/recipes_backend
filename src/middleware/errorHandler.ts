import type { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = error.status || 500;
  
  res.status(statusCode).json({
    success: false,
    error: error.message || 'Internal server error'
  });
};