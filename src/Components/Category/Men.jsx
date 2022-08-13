import Fastrackwatch from '../../assets/apparalls/Fastrackwatch.webp'
import Menshirt from '../../assets/apparalls/Menshirt.webp'
import Menshoes from '../../assets/apparalls/Menshoes.jpg'
import Tshirt from '../../assets/apparalls/Tshirt.jpg'
import ItemComponent from './ItemComponent'
import {Link} from 'react-router-dom'
const Men = () =>{
    const men=[
        {
            name: 'Fastrack Wrist Watch',
            image: Fastrackwatch,
            price: 299
        },
        {
            name: 'Shirt',
            image: Menshirt,
            price: 29
        },
        {
            name: 'Shoes',
            image: Menshoes,
            price: 39
        },
        {
            name: 'Tshirt',
            image: Tshirt,
            price: 39
        },
    ]
    let data = men.map((item) => {
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

export default Men;
