         import React , {useState} from 'react'
  // Declare a new state variable, which we'll call "count"
  // Declare a new state variable, which we'll call "count"
  export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("converted to uppercase" , "success");
      }
      const handleLoClick = ()=>{
        console.log("lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("converted to lowercase" , "success");
  }
  const remspace = () => {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("spaces removed" , "success");
  }
    const handleOnChange =(event)=>{
        // console.log(" handleOnChange clicked");
        setText(event.target.value) //this will set new value to existing text

    }

      const [text , setText] = useState(' text ');
      //  text = "new text "; // wrong way to change the state variable
      // setText("new text "); // right way   
      return (
        <>
        <div className="container"  style={{color: props.mode=== 'dark'?'white': 'black'}}>
                        <h1>{props.heading} </h1>
                        <div className="mb-3"> 
                           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'grey': 'white'   , color: props.mode=== 'dark'?'white': 'black'}}  id="mybox" rows="8" ></textarea>
                        </div>
                        <button className="btn btn-primary"  onClick= {handleUpClick} > convert to uppercase </button>              
                        <button className="btn btn-primary mx-5"  onClick= {handleLoClick} > convert to lowercase </button>              
                        <button className="btn btn-primary mx-5"  onClick= {remspace} > remove spaces </button>              
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'?'white': 'black'}}>{/*ternary oprator} */}
          <h2> your text summery</h2>
          <p> {text.split(" ").length} words,  and  {text.length} characters</p>
          <p> {0.008 * text.split(" ").length} minutes read </p>
          {/* //text.split returns array  containing words */}
          <h2>preview</h2>
          <p>{text.length>0?text:"enter something to preview"}</p>
         </div>
        </>
    )
}
