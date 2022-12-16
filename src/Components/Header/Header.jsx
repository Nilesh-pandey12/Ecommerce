import logo from '../Assets/logo.png'

import { Link } from 'react-router-dom'
const Header = () => {
    return (

        <div className='bg-image bg-no-repeat mx-36 h-96 bg-cover bg-center'>
            <div className='flex justify-between'>
                <img src={logo} className='h-40 w-40 justify-left'></img>

                <ul className='flex justify-end space-x-16 mx-9 pt-14'>
                    <Link to='/'><li className='hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Home</li></Link>
                    <Link to='/Category/AllCategory'><li className='hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Category</li></Link>
                    <Link to='/'><li className='hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1 '>Promo</li></Link>
                    <Link to='/'><li className='hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1 '>About</li></Link>
                    <Link to='/'><li className='hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Contact us</li></Link>
                </ul>

            </div>
        </div>

    );
}

export default Header;