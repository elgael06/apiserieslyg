
import { useSelector } from 'react-redux'

const  Home =()=> {
    const {usuario} = useSelector(state => state);

    console.log(usuario)

    return (<div className="container">
        <h2>Hola {usuario.nombre}</h2>
        <h3>this is the <b>api</b>  to tienda web.</h3>
    </div>)
}

export default  Home;