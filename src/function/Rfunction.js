import "../components/Counter"
import {useState} from "react";
function Counterr(){
    let [counter,setcounter]= useState(0);
   const plusfunction=()=>{
          setcounter(counter=counter+1)
      }
    const minusfunction=()=>{
        setcounter(counter=counter-1)
      }
    const resetfunction=()=>{
        setcounter(counter=counter*0)
      }
        return (
          <div className="container">
            <div className="counter">Counter</div>
            <div className="count">{counter}</div>
   
            <div className="incdec">
            <div
              className="plus__button"
              onClick={plusfunction}
            >
              +
            </div>
            <div
              className="minus__button"
              onClick={minusfunction}
            >
              -
            </div>
          </div>
          <div
              className="reset__button"
              onClick={resetfunction}
            >
              Reset
            </div>
          </div>
        );
     
};
export default Counterr;

