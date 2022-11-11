import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState({});
  const [totalPrice, setPrice] = useState(0);

  const update = (i) => {
    let updateCart = cart;

    if (updateCart[i]){
      updateCart[i] += 1
    }
    else {
      updateCart[i] = 1
    }

    setCart({...updateCart})
  }

  return (
    <div className="App">
      <div>
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => { // TODO: map bakeryData to BakeryItem components
        return(
        <Cart update={update} item={item} index={index} totalPrice={totalPrice} setPrice={setPrice}> </Cart>
        )
        })}

      </div>
      <div>
        <h2>Cart</h2>
        <h4>Your Items</h4>
        {Object.keys(cart).map((k) =>{

        return(
          <div>
          {bakeryData[k].name + ": " + cart[k]}
          </div>
        )

      })}
      <h4>Total cost = ${totalPrice}</h4>

      </div>
    </div>
    
  );
}

function Cart(x) {
  return (
    <div>
      <img src = {x.item.image} width = "200"></img>
      <h1>{x.item.name} </h1>
      <h4>{x.item.description}</h4>
      <p>${x.item.price}</p>
      <button onClick={()=>{x.update(x.index); x.setPrice(x.totalPrice+x.item.price)}}>Add {x.item.name} to Cart</button>
    </div>
  )
}

export default App;
