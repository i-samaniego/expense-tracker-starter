import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {

  return (

    <div>
        {props.items.map((expense) => (

          <ExpenseItem 
          key = {expense.id}
          title = {expense.title}
          category = {expense.category}
          amount = {expense.amount}
          date = {expense.date}
          />

        ))}
    </div>

  )
}


export default Expenses