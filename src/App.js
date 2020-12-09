import { useState,useEffect } from 'react';
import './App.css';
import Editor from './Editor'

function App() {
  const [html,setHtml] = useState('')
  const [css,setCss] = useState('')
  const [js,setJs] = useState('')
  const[srcs,setSrcs] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcs(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html?>
      `)
    },200)
    return ()=> clearTimeout(timeout);
  },[html,css,js])
  return (
    <>
        <div className="pane top-pane">
          <Editor 
          language="xml" 
          displayName="HTML" 
          value={html} 
          onChange={setHtml} 
          />
          <Editor 
            language="css" 
            displayName="CSS" 
            value={css} 
            onChange={setCss}
          />
          <Editor 
            language="javascript" 
            displayName="JS" 
            value={js} 
            onChange={setJs}
          />
        </div>
        <div className="pane">
            <iframe
              srcDoc = {srcs} 
              title="output"
              sandbox="allow-scripts"
              frameBorder = "0"
              width="100%"
              height="100%"
            />
        </div>


    </>
  );
}

export default App;
