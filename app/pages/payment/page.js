// pages/payment.js
import React from 'react';
import PayeerForm from "../../component/PayeerForm";
import { generateSignature } from '../../../utils/generateSignature';

const page = () => {
  const shopId = '2189740929';
  const orderId = '32232323';
  const amount = '10'; // Example amount
  const currency = 'USD';
  const description = Buffer.from('Payment for Order #' + orderId).toString('base64');
  const secretKey = 'zghari@39123';

  const sign = generateSignature(shopId, orderId, amount, currency, description, secretKey);

  return (
    <div>
      <h1>Complete Your Payment</h1>
      <PayeerForm
        shopId={shopId}
        orderId={orderId}
        amount={amount}
        currency={currency}
        description={description}
        sign={sign}
      />
    </div>
  );
};

export default page;
