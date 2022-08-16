import React from "react";



const ExpenseItem = (props) => {

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
      <div className="list-group w-auto">

        <div className="list-group-item list-group-item-action d-flex gap-3 py-3">
          {month} {day}, {year}
          
          <div className="d-flex gap-2 w-100 justify-content-between">
            
            <div>
              <h6 className="mb-0">{props.title}</h6>
              <p className="mb-0 opacity-75">{props.category}</p>
            </div>
            
            <small className="opacity-50 text-nowrap">${props.amount}.00</small>
          
          </div>      
        </div>
      </div>
    );

}

export default ExpenseItem;
