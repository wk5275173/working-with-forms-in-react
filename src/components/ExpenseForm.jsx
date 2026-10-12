// import React from 'react'

// export default function ExpenseForm() {           //in jsx class = className and for attribute is = htmlFor(Connects label to input (accessibility))
//   return (
//      <form className="expense-form">
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//             <input id="category" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" />
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm() {           
//   return (
//      <form className="expense-form">
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" />
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }                                                                //when we press button inside form the submit event is fire and the page is reload//(this is the form default behavior)       


// import React from 'react'

// export default function ExpenseForm() {           
//   return (
//      <form className="expense-form" onSubmit={(e) => {     
//       e.preventDefault()
//      }}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" />
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }


// import React from 'react'

// export default function ExpenseForm() {        //(e.target)//	The HTML element that triggered the event //Where the user actually clicked/typed // e.current target //Element the listener is attached to//Where you put the onClick/onChange
//   const handleSubmit = (e) => {          //  Prevents page refresh
//     e.preventDefault()
//     console.log(e.target)
//   }   
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" />
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm() {        
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(e.target)
//     const data = new FormData(e.target)
//     console.log(data)
//   }                                               //formdata //contains all form fields with name attributes //  new FormData(e.target) //This creates a FormData object from the form element that triggered the event.// creates a FormData object containing all form fields(inputs,select)
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" />
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }




// import React from 'react'

// export default function ExpenseForm() {        
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(e.target)
//     const data = new FormData(e.target)
//     // console.log(data)
//     for(const value of data.values()) {                   //it will not work
//       console.log(value)
//     }
//   }   
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" />
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm() {        
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(e.target)
//     const data = new FormData(e.target)
//     // console.log(data)
//     for(const value of data.values()) {                   //it work when write name attribute on input or select
//       console.log(value)
//     }
//   }   
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" name='title'/>
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category' name='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" name='amout'/>
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }


// import React from 'react'

// export default function ExpenseForm() {        
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(e.target)
//     const data = new FormData(e.target)
//     // console.log(data)
//     for(const value of data.entries()) {                   //i want both keys and values  //in the next step //value is an array here i destructerd it
//       console.log(value)
//     }
//   }   
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" name='title'/>
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category' name='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" name='amout'/>
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm() {        
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(e.target)
//     const data = new FormData(e.target)
//     // console.log(data)
//     for(const [key, value] of data.entries()) {                   
//       console.log(key, value)
//     }
//   }   
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" name='title'/>
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category' name='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" name='amout'/>
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm() {        
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const formData = new FormData(e.target)
//     const data = {}
//     for(const [key, value] of formData.entries()) {                   
//       data[key] = value
//     }                                                       //With Variables (Bracket Notation)// Variable containing the key name// Variable containing the value //Creates property with key name and assigns value//Dot Notation (for known property names)://data.title = "Milk",data.category = "grocery"// Bracket Notation (for dynamic/variable names)://Uses value of variable as property name
//     console.log(data)
//   }   
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" name='title'/>
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category' name='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" name='amout'/>
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm() {        
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(getFormData(e.target))                                                     
//   }                                               //getFormData(e.target) Calls utility function, passing the form (means argument)  //  the element that triggered the event = the <form> element
//   const getFormData = (form) => {                  // getFormData extracts data//Captures all 3 fields// Loop runs 3 times (once for each field)//// Iteration 1: key='title', value='Milk', // Iteration 2: key='category', value='grocery', // Iteration 3: key='amount', value='40' 
//     const formData = new FormData(form)
//     const data = {}
//     for(const [key, value] of formData.entries()) {                   
//       data[key] = value
//     } 
//     return data
//   }
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" name='title'/>
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category' name='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" name='amout'/>
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm({setExpenses}) {                //setExpenses as a prop from the parent component//setExpenses is the state setter function from useState in App.js
//   const handleSubmit = (e) => {                                     // [...prevState, getFormData(e.target)]//prevState and add new things
//     e.preventDefault()
//    setExpenses((prevState) => [...prevState, getFormData(e.target)])                                                   
//   }                                               
//   const getFormData = (form) => {                   
//     const formData = new FormData(form)
//     const data = {}
//     for(const [key, value] of formData.entries()) {                   
//       data[key] = value
//     } 
//     return data
//   }
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" name='title'/>
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category' name='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" name='amount'/>
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }



// import React from 'react'

// export default function ExpenseForm({setExpenses}) {        
//   const handleSubmit = (e) => {                                     
//     e.preventDefault()
//    setExpenses((prevState) => [...prevState,{ ...getFormData(e.target), id: crypto.randomUUID}])                                                   
//   }                                               
//   const getFormData = (form) => {                   
//     const formData = new FormData(form)
//     const data = {}
//     for(const [key, value] of formData.entries()) {                   
//       data[key] = value
//     } 
//     return data
//   }
//   return (
//      <form className="expense-form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="title">Title</label>
//             <input id="title" name='title'/>
//           </div>
//           <div className="input-container">
//             <label htmlFor="category">Category</label>
//              <select id='category' name='category'>
//                   <option value="" hidden>Select Category</option>
//                   <option value="grocery">Grocery</option>
//                   <option value="clothes">Clothes</option>
//                   <option value="bills">Bills</option>
//                   <option value="education">Education</option>
//                   <option value="medicine">Medicine</option>
//                 </select>
//           </div>
//           <div className="input-container">
//             <label htmlFor="amount">Amount</label>
//             <input id="amount" name='amount'/>
//           </div>
//           <button className="add-btn">Add</button>
//         </form>
//   )
// }


import React from 'react'

export default function ExpenseForm({setExpenses}) {        
  const handleSubmit = (e) => {                                     
    e.preventDefault()
    const expense = { ...getFormData(e.target), id: crypto.randomUUID()}
   setExpenses((prevState) => [...prevState, expense])   
  //  e.target.reset()                                                
  }                                                                          //setExpenses((prevState) => [...prevState, expense]) Adds the New Row
  const getFormData = (form) => {                   
    const formData = new FormData(form)
    const data = {}
    for(const [key, value] of formData.entries()) {               //How data[key] = value Adds the New Row://data['title'] = 'Milk'//data['category'] = 'grocery'/data['amount'] = '40'  // User submits form,getFormData runs,data[key] = value builds the object,Object gets added to expenses state, Table re-renders with new row          
      data[key] = value
    } 
    return data
  }
  return (
     <form className="expense-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name='title'/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
             <select id='category' name='category'>
                  <option value="" hidden>Select Category</option>
                  <option value="grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name='amount'/>
          </div>
          <button className="add-btn">Add</button>
        </form>
  )
}