import fb from '../Assets/fb.png'
import insta from '../Assets/insta.png'
import twit from '../Assets/twit.png'
const Footer =()=>{
    return (
        <div className='bg-black   mb-0 h-1/5 inset-x-0 bottom-0'>
        <div className='flex justify-evenly '>
            <div className='text-white'><p className='sm:font-bold'>Quick Links</p>
            <hr></hr>
            <ul >
             <li className='hover:underline text-sm sm:text-base'><a href='#'>Category </a></li>
             <li className='hover:underline text-sm sm:text-base'><a href='#'>Promo</a></li> 
             <li className='hover:underline text-sm sm:text-base'><a href='#'>Men product</a></li>  
                </ul></div>
            <div className='text-white'><p className="sm:font-bold">Contact Us</p>
            <hr></hr>
            <ul>
                <li className='text-sm sm:text-base'>Phone: General Information: 8348582975</li>
                <li className='text-sm sm:text-base'>
                Email: nileshpandey8348@gmail.com
                </li>
            </ul>
            </div>
            <div className='text-white'><p className='sm:font-bold '>Follow us</p>
            <hr>
            </hr>
            <ul className='flex'>
                <li className='hover:underline text-sm sm:text-base'><a href='https://www.facebook.com/profile.php?id=100009069965724' target='_blank'><img  src={fb} alt="Can't load."></img></a></li>
                <li className='hover:underline text-sm sm:text-base'><a href='https://www.instagram.com/pandeyji_6969/' target='_blank'><img className='h-7' src={insta} alt="Can't load."></img></a></li>
                <li className='hover:underline text-sm sm:text-base'><a href='https://twitter.com/NileshP38741669' target='_blank'><img src={twit} alt="Can't load."></img></a></li>
            </ul>
            </div>
        </div>
        <div className='relative items-center'><p className=' text-center text-white'>Made by - Nilesh Pandey</p></div>
        </div>
    );
}
export default Footer;