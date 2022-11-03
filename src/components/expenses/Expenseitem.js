import React, { useState } from "react";
import Card from "../Card";
import ExpenseDate from "./ExpenseDate";
import "./expenseitem.css";

const Expenseitem = (props) => {


    const {date,title,amount}=props;
    const [dates,setDate]=useState(date);
    const [des,setDes]=useState(title);
    const [amt,setAmt]=useState(amount);
    const clickHandler =(e)=>{
      setDes(()=>{
        return "updated"
      })
      console.log(des)

    }
   
  return (
    <Card className="expense-item">
      <div>
      <ExpenseDate date={dates} />
      </div>
      <div className="expense-item__description ">
        <h2>{des}</h2>
        <div className="expense-item__price">${amt}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
      
    </Card>
  );
};

export default Expenseitem;
