import React from "react";
import "./transaction.css";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import qiwi from "../../assets/qiwi.png";
import webmoney from "../../assets/webmoney.png";
import transferwise from "../../assets/transferwise.png";
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
          <td>
            <img src={mastercard} className="table-img" alt="" />
            Mastercard
          </td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>
            <img src={paypal} className="table-img" alt="" />
            Paypal
          </td>
          <td>Done</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>
            <img src={qiwi} className="table-img" alt="" />
            Qiwi
          </td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>
            <img src={transferwise} className="table-img" alt="" />
            Transferwise
          </td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>
            <img src={webmoney} className="table-img" alt="" />
            WebMoney
          </td>
          <td>Done</td>
          <td>-400.00$</td>
        </tr>
        <tr>
          <td>17 feb 2020, 16:30</td>
          <td>
            <img src={mastercard} className="table-img" alt="" />
            Mastercard
          </td>
          <td>pending</td>
          <td>-400.00$</td>
        </tr>
      </table>
    </div>
  );
};

export default Transaction;
