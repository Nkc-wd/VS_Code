import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
    const [title, updateTitle] = useState(props.title);
    const clicke = () => {
        updateTitle('This is updated!');
        console.log("clicked!!");
    }

    return (
        <Card className='expense-items'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clicke}>Click Event</button>
        </Card>

    );
}

export default ExpenseItem;