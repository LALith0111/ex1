import React,{useState} from 'react'
const FunctionalCount = () => {
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        setCount(count+1)
    }
    const handledecrease = () =>{
        setCount(count-1)
    }
   
    return(
    <>
    <div className="count">
     <h1>Counter:{count}</h1>
     <button onClick={() => handleClick()}>Increase</button><br></br>
     <br></br>
    {count !==0 && <button onClick={() => handledecrease()}>Decrease</button>}

        </div>
        <div class ="slide">
            <h1>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript</h1>
        </div>
    </>
    );
}
 
export default FunctionalCount;