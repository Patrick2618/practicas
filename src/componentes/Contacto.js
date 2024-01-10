import React from 'react'

export const Contacto = () => {
  return (
    <>
      <form className='contacto'>
        <input type='text' name='nombre' placeholder='Nombre'/>
        <input type='password' name='contraseña' placeholder='Contraseña'/>
        <textarea type='text' name='area' placeholder='Motivo del contacto' />
        <input type='submit' value='Enviar' />
      </form>
    </>
  )
}
