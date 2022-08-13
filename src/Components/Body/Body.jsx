import iconArrow from '../../assets/clothings/iconArrow.png'
import ladyImage from '../../assets/clothings/ladyImage.jpeg'
import formalboy from '../../assets/clothings/formalboy.jpeg'
import casualboy from '../../assets/clothings/casualboy.jpeg'
import {Link} from 'react-router-dom'
const Body = () => {
    return (
        <>
            <div className="mx-36 flex justify-around">
                <div>
                    <h4 className="font-bold font-serif leading-tight text-8xl mt-0 mb-2 text-black-600 w-1/3 absolute inset-80 left-60">
                        Wear the best.
                    </h4>
                </div>
                <div>
                    <p className="w-1/4 mx-96 text-xl my-20">Still,the second option holds
                        promise,could make the tagline shortlist if you are delivering relaxed.</p>
                </div>
                <div className="relative right-56 -top-10 w-32">
                    <ul className="">
                    <Link to='/Category/AllCategory'><li className="flex border-solid border-0 bg-teal-900 p-2 w-48 h-32 leading-[116px] text-white">Shop Now <img src={iconArrow} alt='data' className='h-4 my-12 mx-2'></img></li></Link>
                        <li className="flex border-solid border-0 bg-gray-900 p-2 w-48 h-32 leading-[116px] text-white border-t-0">See promo <img src={iconArrow} alt='data' className='h-4 my-12 mx-2'></img></li>
                    </ul>
                </div>
            </div>

            <div className='flex mx-56'>
                <div className='absolute -bottom-96 right-1/3 rounded-full h-56 w-56 bg-teal-900'>
                    <h6 className='text-white font-bold left-3/4 leading-[206px] text-center text-2xl'>
                        Be your best
                    </h6>

                </div>
                <div className='absolute -bottom-72 right-2/4 h-6 w-96 text-center bg-orange-400'>
                    <p className='text-4xl font-bold text-white relative bottom-7'>STREET STYLE</p>
                </div>
                <div className='absolute -bottom-32 right-1/4 h-5 w-36 text-center bg-orange-400'>
                    <p className='text-xl text-white font-bold relative bottom-4'>FORMAL BOY</p>
                </div>
                <div className='absolute -bottom-2/3 right-1/4 h-5 w-36 text-center bg-orange-400'>
                    <p className='text-xl text-white font-bold relative bottom-4'>CASUAL BOY</p>
                </div>
                <div className='mx-2'>
                    <img src={ladyImage} alt='data' className='w-auto h-screen'></img>
                </div>

                <div className=''>
                    <img src={formalboy} alt='data' className='w-auto mx-2 mb-2'></img>
                    <img src={casualboy} alt='data' className='w-auto mx-2'></img>
                </div>
            </div>
        </>

    );
}

export default Body;
