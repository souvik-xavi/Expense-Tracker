import React, { useState } from "react";
import Card from "../Card";
import { ExpensesFilter } from "../ExpenseFilter/ExpensesFilter";
import { NewExpense } from "../Newexpense/NewExpense";
import Expenseitem from "./Expenseitem";
import "./expenses.css";
const Expenses = () => {
  const [expenses,setExpenses] =useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const[filterByYear,setFilterByYear]=useState('');
  console.log(filterByYear);
  return (
  <div>
    <ExpensesFilter setFilterByYear={setFilterByYear} filterByYear={filterByYear} />
    <Card className="expenses">
      <NewExpense expense={expenses} setExpenses={setExpenses} />
      {expenses.map((expense) => (
        <Expenseitem
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
    </div>
  );
};

export default Expenses;
