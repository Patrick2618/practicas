import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../Data/trabajos'

export const Descripcion = () => {
  
  //permite recibir parametros por la url
  const params = useParams()
  const [proyecto, setproyecto] = useState("")

  //El useEffect se usa en este caso para crear un array con valores dinamicos (el id del proyecto)
  useEffect(() => {
    let result =  trabajos.filter((trabajo) => trabajo.id === params.id)

    //Se necesita un estado para pasarlo al jsx porque sino seria un array y es mas dificil de manejar
    setproyecto(result[0])
  }, [])

  return (
    <>
    <article className='service'>
      <h2>Estos son los detalles del proyecto {params.id}</h2>
      <p>Hecha un vistado a todo</p>
    </article>
    <article className='service'>
      <h2>Proyecto {proyecto.nombre} </h2>
      <p>el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <p>Esta es su descripcion: {proyecto.descripcion} </p>
    </article>
    </>
  )
}
