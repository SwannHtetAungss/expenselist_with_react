import React, { useState } from "react";
import "./ExpendItem.css";
import ExpendDate from "./ExpendDate";
import Card from "../UI/Card";

const ExpandItem = (props) => {
    const [title,subtitile] = useState(props.title);
    const clickResult = () => {
        subtitile('Update !!!');
    };
    
    return (
        <Card className="expense-item">
            <ExpendDate date={props.date}></ExpendDate>
            <div className="expense-item__description"> 
                <h2>{title}</h2> 
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickResult} > Change Name </button>
        </Card>
    );
    
}

export default ExpandItem;