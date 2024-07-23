"use client"

import { useHandle } from '@/hooks/useHandle'
import React, { useState } from 'react'

const FormNota = () => {
  
  const {titulo, contenido, handleTitle, handleContent, handleSubmit} = useHandle()

  return (
    <form className='flex flex-col gap-y-5 my-10 text-black' onSubmit={handleSubmit}>
      <input type="text" name="Tutilo" placeholder="Tutilo" value={titulo} onChange={handleTitle}
      className='rounded p-2' />
      <textarea name="Contenido" placeholder="Contenido" rows={5} cols={50} 
      value={contenido} onChange={handleContent}
      className='rounded p-2'></textarea>
      <button type='submit' 
      className='text-xl bg-blue-700 hover:bg-blue-900 px-3 py-1 rounded-md text-white'>
        Crear
      </button>
    </form>
  )
}

export default FormNota