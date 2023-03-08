import React from "react";
import "./incomebox.css";
import { RxArrowTopRight, RxArrowBottomLeft } from 'react-icons/rx'
const Incomebox = () => {
    return <div className="income-expense-box">
        <h4>Income / Expense</h4>
        <div className="boxx">
            <div className="icon expense"><RxArrowTopRight className="arrow" /></div>
            <div className="detail">
                <h4>$ 4343</h4>
                <p>Total Amount Expense</p>
            </div>
        </div>
        <div className="boxx">
            <div className="icon income"><RxArrowBottomLeft className="arrow" /></div>
            <div className="detail">
                <h4>$ 4343</h4>
                <p>Total Amount Expense</p>
            </div>
        </div>
    </div>;
};

export default Incomebox;
