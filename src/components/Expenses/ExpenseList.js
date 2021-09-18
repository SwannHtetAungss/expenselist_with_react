import React from "react";
import "./ExpenseList.css";
import ExpanseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Page Not Found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpanseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
