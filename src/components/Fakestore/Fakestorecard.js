import Fakefotter from './Fakefotter';
import './Fakestorecard.css';
function Fakestorecard({title,price,image,rating})
{
    const querypar=`title=${title}&price=${price}&image=${image}`;
    function handleClick()
    {
        window.location.href=`/bill?${querypar}`;
    }
    console.log();
    return(
        <div className="Fakestorecard-card" >
           <img src={image} alt="newimg" />
           <p>{title}</p>
           <p>{price} rupees</p>
           <p>Rating:{rating.rate}</p>
           <p onClick={handleClick} id="fakestotrcard-buynow">Buy Now</p>
           

        </div>
    )

}
export default Fakestorecard;