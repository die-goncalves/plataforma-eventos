import { RichText, RichTextProps } from '@graphcms/rich-text-react-renderer'
import { ReactElement } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type FormatRichTextProps = Pick<RichTextProps, 'content'>

export function FormatRichText({ content }: FormatRichTextProps) {
  return (
    <RichText
      content={content}
      renderers={{
        h1: ({ children }) => (
          <h1 className="mb-4 font-medium text-[1.5rem] leading-[1.6] max-640px:text-[1.125rem]">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="my-4 font-medium text-[1.25rem] leading-[1.6] max-640px:text-[1rem]">
            {children}
          </h2>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            className="text-green-300 hover:text-green-500 hover:underline decoration-green-500"
            rel="noreferrer"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul role="list" className="space-y-2 my-4 pl-5 marker:text-green-300">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol role="list" className="space-y-2 my-4 pl-5 marker:text-green-300">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="max-640px:text-[0.875rem]">{children}</li>
        ),
        p: ({ children }) => (
          <p className="indent-5 max-640px:text-[0.875rem]">{children}</p>
        ),
        bold: ({ children }) => <span className="font-bold">{children}</span>,
        code_block: ({ children }) => {
          const element = children as ReactElement
          const code = element.props.content[0].text
          return (
            <SyntaxHighlighter
              language="javascript"
              showLineNumbers
              style={atomDark}
              {...{
                className: 'scrollbar scrollbar-code-border-radius'
              }}
              customStyle={{ borderRadius: '0.25rem', fontSize: '0.875rem' }}
            >
              {code}
            </SyntaxHighlighter>
          )
        },
        code: ({ children }) => (
          <code className="break-words px-2 border rounded border-dashed border-green-500 bg-gray-700">
            {children}
          </code>
        ),
        img: ({ src, altText }) => (
          <img className="my-2" src={src} alt={altText} />
        )
      }}
    />
  )
}
