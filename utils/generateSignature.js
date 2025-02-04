import crypto from 'crypto';

export const generateSignature = (shopId, orderId, amount, currency, description, secretKey) => {
  const data = [shopId, orderId, amount, currency, description, secretKey].join(':');
  return crypto.createHash('sha256').update(data).digest('hex').toUpperCase();
};