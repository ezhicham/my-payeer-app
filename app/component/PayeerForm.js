// components/PayeerForm.js
import React from 'react';

const PayeerForm = ({ shopId, orderId, amount, currency, description, sign }) => {
  return (
    <form method="POST" action="https://payeer.com/merchant/">
      <input type="hidden" name="m_shop" value={shopId} />
      <input type="hidden" name="m_orderid" value={orderId} />
      <input type="hidden" name="m_amount" value={amount} />
      <input type="hidden" name="m_curr" value={currency} />
      <input type="hidden" name="m_desc" value={description} />
      <input type="hidden" name="m_sign" value={sign} />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PayeerForm;
