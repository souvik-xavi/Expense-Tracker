import React from 'react'
import { ExpenseForm } from './ExpenseForm'
import "./newExpense.css";

export const NewExpense = (props) => {
    const {expense,setExpenses}=props;
  return (
    <div className='new-expense'>
        <ExpenseForm setExpenses={setExpenses}  expense={expense}/>
    </div>
  )
}
