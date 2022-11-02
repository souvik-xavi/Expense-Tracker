import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseitem.css";

const Expenseitem = (props) => {
    const {date,title,amount}=props;
   
  return (
    <div className="expense-item">
      <div>
      <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      
    </div>
  );
};

export default Expenseitem;
