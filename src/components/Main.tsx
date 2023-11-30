
import thumnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumnail2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumnail3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumnail4 from '../assets/images/image-product-4-thumbnail.jpg'
import product1 from '../assets/images/image-product-1.jpg'
import product2 from '../assets/images/image-product-2.jpg'
import product3 from '../assets/images/image-product-3.jpg'
import product4 from '../assets/images/image-product-4.jpg'
import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaAngleRight } from "react-icons/fa";
// import { FaAngleLeft } from "react-icons/fa";

type Props = {
  addToCart: (i: number) => void
}
const Main: React.FC<Props> = ({ addToCart}) => {
  const [active, setActive] = useState([true, false, false, false])
  const [count, setCount] = useState(0)
  const toggleActive = (index: number) => setActive(active.map((_value, i: number) => i === index))

  const addItemToCart = (i: number) => {
    addToCart(i)
    setCount(0)
  }
  
  const images = {
    img1: product1,
    img2: product2,
    img3: product3,
    img4: product4,
  }

  const carousel = (
    <div className='md:hidden relative top-20'>
      <Carousel 
      autoPlay={false}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      // showIndicators={false}
      dynamicHeight={true}
    
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            className='flex justify-center items-center h-10 w-10 p-3 rounded-full absolute top-48 right-3 text-black bg-white '
            type="button"
            onClick={onClickHandler}
            title={label}
          >
            <FaAngleRight color='black'/>
          </button>
        )
      }
      >
        <div>
            <img src={images.img1} />
        </div>
        <div>
          <img src={images.img2}/>
        </div>
        <div>
          <img src={images.img3} />
        </div>
        <div>
          <img src={images.img4} />
        </div>
      </Carousel>
    </div>
  )
  
  return (
    <div className="md:mt-20 md:px-20 md:flex md:flex-row md:justify-center md:items-center md:gap-x-24 gap-y-5">
      <section className='hidden md:flex md:flex-col md:gap-y-5'>
        <div>
          {active[0] && (<img src={images.img1} alt='product1' className='h-80 w-80 rounded-xl'/>)}
          {active[1] && (<img src={images.img2} alt='product1' className='h-80 w-80 rounded-xl'/>)}
          {active[2] && (<img src={images.img3} alt='product1' className='h-80 w-80 rounded-xl'/>)}
          {active[3] && (<img src={images.img4} alt='product1' className='h-80 w-80 rounded-xl'/>)}
        </div>
        <div className='flex justify-between items-center gap-x-3'>
          <img src={thumnail1} alt="thumnail1" className={`rounded-xl h-16`} onClick={() => toggleActive(0)} />
          <img src={thumnail2} alt="thumnail2" className={`rounded-xl h-16`} onClick={() => toggleActive(1)} />
          <img src={thumnail3} alt="thumnail3" className={`rounded-xl h-16`} onClick={() => toggleActive(2)} />
          <img src={thumnail4} alt="thumnail4" className={`rounded-xl h-16`} onClick={() => toggleActive(3)} />
        </div>
      </section>
      {
        carousel
      }
      <section className='md:w-[40%] md:mt-0 mt-20 p-5 flex flex-col gap-y-3'>
        <h3 className='text-sm text-orange font-bold uppercase'>sneaker company</h3>
        <h1 className='text-4xl font-bold text-veryDarkBlue'>Fall Limited Edition <br /> Sneakers</h1>
        <p className='text-grayishBlue'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='md:flex md:items-start md:gap-x-4 md:flex-col gap-y-2'>
          <div className='flex items-center gap-x-4'>
            <h2 className='font-bold text-black'>$125.00</h2>
            <p className='p-1 h-7 w-10 text-orange bg-paleOrange rounded-lg font-bold'>50%</p>
          </div>
          <p className='font-sm text-grayishBlue line-through'>$250.00</p>
        </div>
        <div className='md:flex md:items-center gap-x-3 w-full'>
          <div className='md:w-[40%] flex justify-evenly items-center gap-x-2 py-3 rounded-lg md:bg-paleOrange bg-lightGrayishBlue p-2'>
            <button className='font-bold' disabled={count === 0} onClick={() => setCount(prev => prev -1)}>
              <FaMinus color='orange'/>
            </button>
            <p>{count}</p>
            <button className='font-extrabold' disabled={count === 5} onClick={() => setCount(prev => prev +1)}>
              <FaPlus color='orange'/>
            </button>
          </div>
          <button disabled={count === 0} onClick={() => addItemToCart(count)} className='md:w-[60%] w-full bg-orange py-3 mt-3 md:mt-0 px-3 rounded-lg text-lightGrayishBlue flex justify-center items-center gap-x-3'>
            <IoCartOutline />
            Add to cart
          </button>
        </div>
      </section>
    </div>
  )
}

export default Main