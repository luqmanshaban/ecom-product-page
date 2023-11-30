import { FC } from 'react'
import img from '../assets/images/image-product-1-thumbnail.jpg'
import { RiDeleteBin6Line } from "react-icons/ri";

type Props = {
    count: number
    clearCart: () => void
}
const Cart: FC<Props> = ({ count, clearCart }) => {
  return (
    <div className='w-[350px] bg-white py-3 shadow-2xl rounded-lg'>
        <div className=''>
            <h1 className='text-black font-bold m-2'>Cart</h1>
            <div className='w-full h-[1px] block bg-lightGrayishBlue'></div>
        </div>
        {count > 0 &&<section className='flex flex-col h-[150px] px-3 mt-3'>
            <div className='flex justify-between items-center gap-x-2 w-full'>
                <img src={img} alt="product" className='h-14 rounded-md' />
                <div className='flex flex-col gap-y-1 text-grayishBlue'>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <div className='flex items-center gap-x-1'>
                        <p>$125.00 x</p>
                        <span>{count}</span>
                        <p className='text-black font-bold'>${count * 125}.00</p>
                    </div>
                </div>
                <button onClick={() => clearCart()} className='text-grayishBlue'><RiDeleteBin6Line /></button>
            </div>
            <button className='bg-orange w-full text-center text-paleOrange font-bold text-sm rounded-lg py-4 mt-5'>Checkout</button>
        </section>}
        {count === 0 && <section className='flex justify-center items-center px-3 py-20'>
            <p className='font-bold text-lg text-center text-grayishBlue'>Your cart is empty</p>
        </section>}
    </div>
  )
}

export default Cart