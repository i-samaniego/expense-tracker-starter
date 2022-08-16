import React from 'react';
import ExpenseForm  from './ExpenseForm';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  }

  return (
    <div className="card">   
        <div className="card-body">
            <h4 className="card-title mb-4 mt-1">Add Expense</h4>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    </div>
  )
}

export default NewExpense