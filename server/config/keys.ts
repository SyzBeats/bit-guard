const ENCRYPTION_KEY_256BIT = process.env.ENCRYPTION_KEY_256BIT || '6c3TipHv0XD1zpZlTuq9dG7YscMMP3EO';
const JWT_TOKEN_SIGNATURE = process.env.JWT_TOKEN_SIGNATURE || 'sDdkfFjfuChseizubdHasiEpewbdji';
const IS_PROD = process.env.NODE_ENV === 'production';

export { ENCRYPTION_KEY_256BIT, JWT_TOKEN_SIGNATURE, IS_PROD };
