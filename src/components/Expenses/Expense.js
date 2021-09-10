import React, { useState } from "react";
import ExpanseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";

const Expense = (props) => {
    const [filterYear,setfilterYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setfilterYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />

            <ExpanseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount} />
            <ExpanseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount} />
            <ExpanseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount} />
            <ExpanseItem title={props.expenses[3].title} date={props.expenses[3].date} amount={props.expenses[3].amount} />
        </Card>
    );
}

export default Expense;