import { useState } from "react"

export function useHandle () {
  const [titulo, setTitle] = useState('')
  const [contenido, setContent] = useState('')

  const handleTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value)
  }

  const handleContent = (evt:  React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(evt.target.value)
  }

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const res = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({titulo, contenido}),
      headers: { 'Content-Type': 'application/json' }
    })

    const data = await res.json()
    
    setTitle('')
    setContent('')
  }

  return {handleTitle, handleContent, handleSubmit, titulo, contenido}
}