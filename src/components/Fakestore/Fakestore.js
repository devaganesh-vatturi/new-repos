import { useEffect, useState } from "react";
import React  from "react";
import Fakestorecard from "./Fakestorecard";
import './Fakestore.css'
import Fakestorehead from "./Fakestorehead";
import Fakefotter from "./Fakefotter";

function Fakestore()
{
    
  const [prod, setProd]=useState([])
  useEffect(
       ()=>{
        fecthing();
        },[]
       )
async function fecthing() {
  let res= await fetch('https://fakestoreapi.com/products');
        let str= await res.json();
        setProd(str);
}
   

  if( prod.length === 0)
  {
    return (<h1>Fetching data.....</h1>);
  }

  return( 

    <>
   
    <Fakestorehead/>
    <div className="Fakestore-product">
    {prod.map((p)=><Fakestorecard key={p.id} {...p}></Fakestorecard>)}
    
    <Fakefotter/>
    </div>
    </>
    
    )
}
export default Fakestore;