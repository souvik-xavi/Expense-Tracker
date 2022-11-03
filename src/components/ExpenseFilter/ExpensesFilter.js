import React, { useState } from "react";
import './expensesFilter.css';

export const ExpensesFilter = (props) => {
    const options = [
        {value: '', text: '--Choose an option--'},
        {value: '2022', text: '2022'},
        {value: '2021', text: '2021'},
        {value: '2020', text: '2020'},
        {value: '2019', text: '2019'},
      ];
    const {setFilterByYear, filterByYear}=props;
  const handleChange = (event) => {
    setFilterByYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filterByYear} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};
