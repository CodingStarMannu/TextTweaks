import React, {useState} from 'react'



export default function TextForm(props) {

    const collectMail =(event) => {
        console.log("mail");
        setMail(event.target.value);
    }
    const passwordTaken =(event) => {
        console.log("password");
        setPass(event.target.value);
    }

    //This Function is for Button
    const  handleUpClick =  () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const  handleLoClick =  () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const  clickToClear =  () =>{
        let newText = "";
        setText(newText); 
    }


    const  handleOnChange =  (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const[text,setText] = useState('');
    const[mail,setMail] = useState('www.example.com');
    const[pass,setPass] = useState('Enter Your Password here!');
    // text= "new text"; // Wrong way to change the state
    // setText("new text"); // Right way to change the state
    
  return (
    <>
    <div className= "container">
<h1>{props.heading}</h1>     


 <div className="mb-3">
  <label htmlFor="mailBox" className="form-label">Email </label>
  <input type="email" className="form-control" id="mailBox" value={mail} onChange={collectMail}/>
  <label htmlFor="myPass" className="form-label">Password </label>
  <input type="password" className="form-control" id="myPass" value={pass} onChange={passwordTaken}/>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 mt-3">Sign Up!</button>
  </div>

</div>

<div className=" container mb-3">
  <label htmlFor="myBox" className="form-label">Write Your Thoughts Here!</label>
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="14"></textarea>
</div>
<button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert To Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert To LowerCase</button>
{/* <button className='btn btn-primary mx-3' onClick={clickToColor}>Change Color</button> */}
<button className='btn btn-primary mx-3' onClick={clickToClear}>Clear Text </button>
<div className="container">
    <h2>Your text Summary!</h2>
    <p>{text.split(" ").length-1} words and {text.length} Characters.</p>
    <p>{0.008 * (text.split(" ").length-1)} minutes read </p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
    </div>
    </>
  )
}
