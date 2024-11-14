function ServicesItem({headerName,text, price, active, obj, arr}){
    return(
        <li>
            <h4>{headerName}</h4>
            <p>{text}</p>
            <p>{price}</p>
            <p>{active ? 'ok' : 'no'}</p>
        </li>
    )
}
export default ServicesItem