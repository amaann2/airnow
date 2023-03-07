import React from "react";
import "./transaction.css";
const Transaction = () => {
  return (
    <div className="transaction">
      <div className="heading">
        <h4>Transaction</h4>
        <div className="side">
          <p>Today</p>
          <p>This week</p>
          <p>This month</p>
        </div>
      </div>
      <table>
        <tr>
          <th>Data and Time</th>
          <th>Payment method</th>
          <th>Status</th>
          <th>Amount ($)</th>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>Mastercard</td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>Paypal</td>
          <td>Done</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>Qiwi</td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>Transferwise</td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>WebMoney</td>
          <td>Done</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>Mastercard</td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
      </table>
    </div>
  );
};

export default Transaction;
