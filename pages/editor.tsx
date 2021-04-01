import React, { useRef, useEffect } from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/lib/codemirror.css'

const Editor = () => {
  const editorRef = useRef(null)

  const options = {
    lineNumbers: true,
    lineWrapping: true,
    indentWithTabs: false,
    mode: 'jsx',
  }

  useEffect(() => {
    CodeMirror(editorRef.current, options)
  }, [])

  return (
    <div>
      <h1>Editor</h1>
      <div ref={editorRef}></div>
    </div>
  )
}

export default Editor
