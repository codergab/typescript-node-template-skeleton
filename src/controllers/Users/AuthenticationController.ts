import { NextFunction, Request, Response } from 'express';

class AuthenticationController {
  static async Login(req: Request, res: Response, next: NextFunction) {
    res.send(['Ade', 'Bisi']);
  }
}

export default AuthenticationController;
