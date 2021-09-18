import React, { useState } from "react";
import ExpanseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";

const Expense = (props) => {
  const [filterYear, setfilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.expenses.map((expense) => {
        return (
          <ExpanseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expense;
