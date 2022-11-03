import React, { useState } from "react";
import "./expenseForm.css";
export const ExpenseForm = (props) => {
  const [exp, setExp] = useState({
    id: Math.random().toString(),
    title: "",
    amount: 0,
    date: new Date(),
  });
  const [tempDate,setTempDate]=useState("");
  const { expense, setExpenses } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prevState)=>{
      return[...prevState,exp];
    });
    setTempDate("");
    setExp({
        id: Math.random().toString(),
      title: "",
    amount: 0,
    date: new Date(),
    })
  };

  const changeHandler = (e) => {
    if (e.target.name === "date") {
      setExp((prevState) => {
        return { ...prevState, [e.target.name]: new Date(e.target.value) };
      });
      setTempDate(e.target.value);
    } else {
      setExp((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value};
      });
    }
  };
  return (
    <form  onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={exp.title}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={exp.amount}
            onChange={changeHandler}
            required
          />
        </div>
        <br />
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            step="2022-12-31"
            name="date"
            onChange={changeHandler}
            value={tempDate}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
