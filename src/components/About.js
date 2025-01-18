import React, { useState } from 'react'

export default function About() {
    const[myStyle,newMyStyle]=useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const[btnText,newBtnText]=useState('Enable dark mode')
 const toggleStyle=()=>{
    if(myStyle.color=='black'){
        newMyStyle(
            {
                color: 'white',
                backgroundColor: 'black',
                border:'1px solid black',
            }
        )
        newBtnText('Enable Light Mode')
    }
    else{
      newMyStyle(  {
            color: 'black',
            backgroundColor: 'white',
        })
        newBtnText('Enable Dark Mode')
    }
}
  return (
    <div className="container my-4" style={myStyle}>
        <h1 className="my-4"> About us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        About Textutils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      <strong>TextUtils is a powerful text manipulation tool </strong> that helps you process text efficiently. Whether you need to convert text to uppercase, lowercase, remove extra spaces, or perform other text-related transformations, TextUtils makes it easy and fast.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        TextUtils functionality
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      TextUtils Features:
✅ Convert text to Uppercase and Lowercase<br/>
✅ Remove extra spaces and clean up messy text<br/>
✅ Word & Character Count to analyze text<br/>
✅ Copy modified text with a single click<br/>
✅ Simple, fast, and mobile-friendly interface<br/>
Why Use TextUtils? Whether you are a student, writer, or developer, TextUtils helps streamline your text formatting tasks effortlessly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      Meet the Creator
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      
Hello! I am a BCA student passionate about web development. I created TextUtils as a simple yet powerful tool to help users manipulate text quickly and efficiently. This project is built using React.js, and I am continuously improving it by adding new features.
If you have suggestions or feedback, feel free to reach out! 🚀
      </div>
    </div>
  </div>
</div>
<div className="container my-4">
    <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
</div>
    </div>
  )
}
