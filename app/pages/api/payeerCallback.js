
import crypto from 'crypto';

export default async (req, res) => {
  if (req.method === 'POST') {
    const {
      m_operation_id,
      m_operation_ps,
      m_operation_date,
      m_operation_pay_date,
      m_shop,
      m_orderid,
      m_amount,
      m_curr,
      m_desc,
      m_status,
      m_sign,
      m_params,
    } = req.body;

    const secretKey = 'zghari@39123';
    const signData = [
      m_operation_id,
      m_operation_ps,
      m_operation_date,
      m_operation_pay_date,
      m_shop,
      m_orderid,
      m_amount,
      m_curr,
      m_desc,
      m_status,
      secretKey,
    ].join(':');

    const expectedSign = crypto.createHash('sha256').update(signData).digest('hex').toUpperCase();

    if (m_sign === expectedSign && m_status === 'success') {
      // Payment is verified and successful
      // Update your order status in the database
      res.status(200).send(`OK${m_orderid}`);
    } else {
      // Invalid signature or payment failed
      res.status(400).send('Invalid payment');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
