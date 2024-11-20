import { useState } from "react"
import "./style.css"

// function Counter(){

//  var[count,setcount]=useState(0)
//     function increment()
//     {
//       var  newcount=count+1
//        setcount(newcount)
//     }
// function decrement()
// {
//    var  newcount=count-1
//     setcount(newcount)

// }
//     return(
//         <div>
//             <h1>Counter {count}</h1>
//             <button onClick={increment}>INC</button>
//             <button onClick={decrement}>DEC</button>
//         </div>
//     )
// }
// export default Counter


function Random()
{
    var[num,randomnum]=useState(0)

function random(){

     num = Math.random()*10
    randomnum(Math.floor(num))
    console.log(num)
    console.log(randomnum)

}

    return(
        <div className="container">
            <h1 style={{textAlign:"center"}}>Random Number is:{num}</h1>
            <button onClick={random}>Random No</button>
        </div>
    )
}
export default Random