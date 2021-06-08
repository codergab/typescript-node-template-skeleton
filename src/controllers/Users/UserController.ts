import { NextFunction, Request, Response } from 'express';

class UserController {
  static async GetUsers(req: Request, res: Response, next: NextFunction) {
    res.send(['Ade', 'Bisi']);
  }
}

export default UserController;
