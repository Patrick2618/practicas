import {React} from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../Data/trabajos'
import img1 from './img/img1.webp'
import img2 from './img/img2.webp'
import img3 from './img/img3.webp'
import img4 from './img/img4.webp'
import img5 from './img/img5.webp'
import img6 from './img/img6.webp'


var i=-1
const img = [img1, img2, img3, img4, img5, img6]


const Imagenes = () => {
  i+=1

  return(
    <div className='mask'>
      <img src={img[i]}/>
    </div>
  )
}

export const Portafolio = () => {


  return (
    <>
    <h2 className='porta-titulo'>Trabajos</h2>
    <div className='porta-art'>
      {/* El parentesis en lugar el {} es para que el valor se duevualva automaticamente. Es como si se hubiera escrito el return */}
      {trabajos.map(trabajo => (
        // El key se utiliza como atributo del identificador para la etiqueta, es para que no marque error
        <article key={trabajo.id} className='article'>
          <Link to={"/proyecto/"+trabajo.id} >
            <h2>{trabajo.nombre}</h2>
            <Imagenes />
          </Link>
          <p><b>El creator es:</b> {trabajo.autor}</p>
          <p><b>Las tecnologías son:</b> {trabajo.tecnologias}</p>
          <p><b>Esta es la url: </b>{trabajo.url}</p>
        </article>
      ))}
    </div>
    </>
  )
}
