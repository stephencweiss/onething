import { useState } from 'react'
import { Preview } from './preview'
interface iEditor {
  text: string
}

export function EditorContainer(params: iEditor) {
  const [markdownSrc, setMarkdownSrc] = useState('')
  const handleChange = ({ target }: { target: HTMLTextAreaElement }) => {
    if (target) {
      setMarkdownSrc(target.value)
    }
  }
  return (
    <>
      <Editor value={markdownSrc} onChange={handleChange} />
      <Preview text={markdownSrc} />
    </>
  )
}

export function Editor(props) {
  return <textarea onChange={props.onChange}></textarea>
}
