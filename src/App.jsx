import React, { useState } from 'react'
import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense"

const DUMMY_EXPENSE = [
  {id: 'e1', title: 'Rent', category: 'Housing', amount: 855.00, date: new Date(2022, 7, 1)},
  {id: 'e2', title: 'Internet', category: 'Utilities', amount: 55.00, date: new Date(2022, 7, 5)},
  {id: 'e3', title: 'Car Payment', category: 'Transportation', amount: 355.00, date: new Date(2022, 7, 7)},
]

const App = () => {

  const [ expenses, setExpenses] = useState(DUMMY_EXPENSE);


  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) =>{
      return [expense, ...prevExpense];
    })
  }

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">

      <h2>React Expense Tracker</h2>
      
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items = {expenses} />  

    </div>
  );
}

export default App;
