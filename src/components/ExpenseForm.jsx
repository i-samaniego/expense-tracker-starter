import React from 'react'
import { useState } from 'react'


export const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        // clean-up function
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            category: enteredCategory,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredCategory('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (

    <div>
        <form onSubmit={submitHandler}>
            {/*Title*/}
            <div className='form-group'>
                <label>Title</label>
                <input className='form-control mt-2' type='text' onChange={titleChangeHandler}/>
            </div>

            {/*Category*/}
                <div className='form-group'>
                <label>Category</label>
                <input className='form-control mt-2' type='text' onChange={categoryChangeHandler}/>
            </div>

            {/*Amount*/}
            <div className='form-group'>
                <label>Amount</label>
                <input className='form-control mt-2' type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>

            {/*Date*/}
            <div className='form-group'>
                <label>Date</label>
                <input className='form-control mt-2' type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
            </div>

            <div className="form-group mt-2">
                <button className='btn btn-danger btn-block' type='submit'>Add Expense</button>
            </div>

        </form>
    </div>
  )
}

export default ExpenseForm