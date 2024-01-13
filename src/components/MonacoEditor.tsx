import { Editor } from '@monaco-editor/react'

const MonacoEditor = () => {
  return (
    <div className=''>
        <Editor theme='vs-dark'  height="35vh" defaultLanguage="python"/>
    </div>
  )
}

export default MonacoEditor