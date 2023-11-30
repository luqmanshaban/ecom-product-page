import { useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"

const App = () => {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(false)

  const toggleCart = () => setCart(!cart)
  const addToCart = (val: number) => {
    setCount(val)
  }
  const clearCart = () => setCount(0)
  return (
    <div className="font-sans md:px-64">
      <header>
        <Navbar count={count} toggleCart={toggleCart}/>
        <div className="h-[1px] w-ful bg-grayishBlue  block"></div>
      </header>
      <main>
        {cart && <div className="fixed md:right-60 md:top-36 top-24 right-6 z-20">
          <Cart count={count} clearCart={clearCart}/>
        </div>}
        <Main addToCart={addToCart}/>
      </main>
    </div>
  )
}

export default App