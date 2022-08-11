const ItemComponent = (props) => {

    return (
    <div className='mt-2 p-4 w-[33%] inline-block'>
        <img src={props.items.image} alt='data' className='justify-center p-2 h-96 w-fit' />
        <p className='font-bold font-serif text-center'>{props.items.name}</p>
        <p className='font-lg font-sans text-center'>${props.items.price}</p>
    </div>)
}

export default ItemComponent;