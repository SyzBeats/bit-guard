import * as jwt from 'jsonwebtoken';

import * as keys from '../../../config/keys';
import * as apiService from '../../services';
import utility from '../../../utility';
import { MessageToken, isMessageToken } from '../../../typings';

const decipher = async (req, res) => {
  try {
    const { cipher } = req.params;

    const token = utility.encryption.decryptAes256cbc(cipher);

    const data = jwt.verify(token, keys.JWT_TOKEN_SIGNATURE) as MessageToken;

    if (!isMessageToken(data)) {
      return res.status(500).json({ message: 'something went wrong' });
    }

    const message = await apiService.link.findAndDecrypt(data);

    return res.status(200).send(message);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went horribly wrong here. We are sorry!',
      error: error.message,
    });
  }
};

export default {
  decipher,
};
