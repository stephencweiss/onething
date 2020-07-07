import ReactMarkdown from 'react-markdown/with-html'
import DOMPurify from 'isomorphic-dompurify'

export function Preview({ text }: { text: string }) {
  const purifiedMd = DOMPurify.sanitize(text)
  return <ReactMarkdown source={purifiedMd} escapeHtml={false} />
}
