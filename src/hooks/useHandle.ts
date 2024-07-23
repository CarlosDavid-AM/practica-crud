import { useState } from "react"

export function useHandle () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value)
  }

  const handleContent = (evt:  React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(evt.target.value)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log({
      title: title,
      content: content
    })
    setTitle('')
    setContent('')
  }

  return {handleTitle, handleContent, handleSubmit, title, content}
}