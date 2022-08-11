import { Link } from 'react-router-dom'
import Kfrok from './Kidsimage/Kfrok.jpg'
import Kjeans from './Kidsimage/Kjeans.jpg'
import Kjeans2 from './Kidsimage/Kjeans2.jpg'
import Kshoes from './Kidsimage/Kshoes.jpg'
import Ksuit from './Kidsimage/Ksuit.jpg'
import Ktshirt from './Kidsimage/Ktshirt.jpg'
import Ktshirt2 from './Kidsimage/Ktshirt2.jpg'
import ItemComponent from './ItemComponent'
const Kids = () =>{
    const kids=[
        {
            name: 'Frok',
            image: Kfrok,
            price: 30
        },
        {
            name: 'Kids jeans',
            image: Kjeans,
            price: 47
        },
        {
            name: 'Kids stylish jeans',
            image: Kjeans2,
            price: 182
        },
        {
            name: 'Kids shoes',
            image: Kshoes,
            price: 499
        },
        {
            name: 'Kids Suit',
            image: Ksuit,
            price: 689
        },
        {
            name: 'T shirt',
            image: Ktshirt,
            price: 69
        },
        {
            name: 'Stylish Tshirt',
            image: Ktshirt2,
            price: 79
        }
    ]
    let data = kids.map((item) => {
        return <ItemComponent items={item} />
    })

    return(
        <>
            <div className='absolute top-72 left-96'>
                <ul className='flex justify-center space-x-16 mx-9 pt-14'>
                    <Link to='/Category/AllCategory'><li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>All Category</li></Link>
                    <Link to='/Category/Men'> <li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Mens</li> </Link>
                    <Link to='/Category/Women'><li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Women</li></Link>
                    <Link to='/Category/Kids'><li className='h-8 w-28 text-center text-white rounded-2xl p-1 bg-orange-600 hover:bg-teal-900 hover:rounded-xl hover:text-white hover:px-2 hover:py-1'>Kids</li> </Link>

                </ul>
            </div>
            <div className='mr-32 ml-44 mb-2 mt-2'>
                {data}
            </div>
        </>
    )
}
export default Kids;

