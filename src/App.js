import { useState, useEffect } from "react"
import alanBtn from '@alan-ai/alan-sdk-web';


var  App = () =>  {
var [cart, setcart] = useState([])
var [menuItems, setmenuItems] = useState([])


useEffect(() => {
  alanBtn({
      key: '6273caa54122166263219bc6a734818b2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'getMenu') {
         setmenuItems(commandData.data)
        } else if (commandData.command === 'getMenu') {
         setmenuItems(commandData.data)
        }
      }
  });
}, []);





var addtocart = (menuItem) => {
  setcart((oldcart) => {
    return [...oldcart, menuItem]
  })
}
  return <div className="App">
   <h2>Menu  Price   Category</h2>
     {menuItems.map((menuItem) => (
        <li key={menuItem.name}>
          {menuItem.name} - ${menuItem.price} - {menuItem.category}
        <button onClick={() => addtocart(menuItem)}>Add to cart</button>
        </li>
     ))}

<h3>Cart</h3>
{cart.map((cartItem) => (
        <li key={cartItem.name}>
          {cartItem.name} - ${cartItem.price} - {cartItem.category}
       </li>
      ))}
  </div>
}
export default App;
