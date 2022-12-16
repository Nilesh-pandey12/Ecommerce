import Croptop from '../Assets/Croptop.jpg'
import Suit from '../Assets/Suit.jpg'
import Suit2 from '../Assets/Suit2.jpg'
import Womenjeans from '../Assets/Womenjeans.jpg'
import WomenShoes from '../Assets/WomenShoes.jpg'
import ItemComponent from './ItemComponent'
import {Link} from 'react-router-dom'

const Women =()=> {
    const women=[
        {
            name: 'Croptop',
            image: Croptop,
            price: 40
        },
        {
            name: 'Suit',
            image: Suit,
            price: 149
        },
        {
            name: 'Desi Suit',
            image: Suit2,
            price: 1499
        },
        {
            name: 'Jeans',
            image: Womenjeans,
            price: 299
        },
        {
            name: 'Shoes',
            image: WomenShoes,
            price: 299
        }
        
    ]
    let data = women.map((item) => {
        return <ItemComponent items={item} />
    })


    return(
        <>
            <div className='absolute top-72 left-96'>
                <ul className='flex justify-center space-x-16 mx-9 pt-14'>
                    <Link to='/Category/AllCategory'><li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>All Category</li></Link>
                    <Link to='/Category/Men'> <li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Mens</li> </Link>
                    <Link to='/Category/Women'><li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Women</li></Link>
                    <Link to='/Category/Kids'><li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Kids</li></Link>

                </ul>
            </div>
            <div className='mr-32 ml-44 mb-2 mt-2'>
                {data}
            </div>
        </>
    )
}

export default Women;