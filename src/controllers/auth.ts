import { AxiosError, AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import api from '../tools/api';

class Authenticate {
  async index(req: Request, res: Response) {
    const { refreshToken } = req.body;
    const userData = await api
      .get('/Autenticacao', {
        params: {
          refreshToken,
        },
      })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch((err: AxiosError) => {
        return err.response?.data;
      });
    return res.status(200).json(userData);
  }
}

export default Authenticate;
