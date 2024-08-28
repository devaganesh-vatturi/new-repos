import { useLocation } from "react-router-dom";
import Fakestorehead from "./Fakestorehead";
import './Fakestorebill.css'
import Fakefotter from "./Fakefotter";
function Fakestorebill()
{
    const location=useLocation();
    const qp= new URLSearchParams(location.search);
    let title=qp.get('title');
    let price=qp.get('price');
    let img=qp.get('image');
    function billit()
    {
        alert('successfully purchased!')
    }
    return (
    <div className="fakebill">
    <Fakestorehead/>
    <div className="Fakestorebill-main">
    <p id="Fakestorebill-title">{title}</p>
    <p id="Fakestorebill-price">₹{price}</p>
    
    <img id ="Fakestorebill-img" src={img} alt="theimg"/>
    <p id="Fakestorebill-buy" onClick={billit}>Buy Now</p>
   
    </div>
    <Fakefotter/>
    </div>);
}
export default Fakestorebill;