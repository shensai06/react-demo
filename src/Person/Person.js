import React from 'react'
 const person =  (props)=>{
     return <p>
         大家好{Math.round(Math.random()*30)}
         <br/>
         我是传进来的值:{props.name}
         <span>
            这是一个卡槽 {props.children }
         </span>
     </p>
 }

 export default person;