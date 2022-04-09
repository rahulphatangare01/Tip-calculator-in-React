
import React,{useState}  from 'react';
import './Tipcalcey.css'
function Example() {
const[billAmount,setBillAmount] =useState() 
const[percentage,setpercetage] =useState("") 
const[name,setName] =useState(" ") 
const[customername,setcustomername] =useState("User") 
const[TipAmount,setTipAmount]=useState("")
const[list,setlist]=useState([]);
const[result,setResult]= useState("0")
let b = Number(billAmount)
let  p = Number(percentage)
let tip =  b*p
const addCustomer= ()=> {
  setcustomername (name)  
setTipAmount (tip)
setlist ([...list,[name,tip]])
setResult( Number(result)+tip)
 }
  return<div className='Example'>
  <div className='heading'> <h2> Tip Calculator</h2></div>
  <div className='form'>

<label for="fname">Total Billing Amount</label>
    <input onChange={(e)=>setBillAmount (e.target.value)} value={billAmount} placeholder='Total Bill Amount' type= "text"></input> 
    <label for="fname">How Was The Service</label>
    <select onChange={(e)=>setpercetage (e.target.value)}  value={percentage} >
    
  <option selected> Select percentage</option>
  <option  value={"0.25"}> &#11088;&#11088;&#11088;&#11088; Excellent Service 20%</option>
  <option value={"0.15"}> &#11088;&#11088;&#11088; Good  15%</option>
  <option value={"0.1"}> &#11088;&#11088; Moderate 10%</option>
  <option value={"0.05"}> &#11088; bad 5%</option>
 
</select>
  <label for="fname">Customer Name</label>
  <input  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Customer Name' type="text"></input>
    <button onClick={addCustomer} type="button" className="add">Add Customer</button>
     <h3 className='center'>Customer List</h3>
<ul>
  { list.map((n ) => <li> {n[0]} is offerring {n[1]}</li>)}

  

</ul>


<h2> Total Customer: {list.length}</h2>
<h2> Total Tip:{result}</h2>



  </div>

  <h3 className=' center'> @ 2022. TIP.CALCULATOR</h3>
  </div>
}

export default Example;

