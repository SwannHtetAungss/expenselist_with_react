import React, { useState } from "react";
import ExpanseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import "./Expense.css";

const Expense = (props) => {
  const [filterYear, setfilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filterExpenses} />
    </Card>
  );
};

export default Expense;
