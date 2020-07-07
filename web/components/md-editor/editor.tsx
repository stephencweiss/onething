import { useState } from 'react'
import { Preview } from './preview'

export function Editor() {
  const [markdownSrc, setMarkdownSrc] = useState('')
  const handleChange = ({ target }: { target: HTMLTextAreaElement }) => {
    if (target) {
      setMarkdownSrc(target.value)
    }
  }
  return (
    <>
      <textarea onChange={handleChange}></textarea>
      <Preview text={markdownSrc} />
    </>
  )
}
