import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

   createRoot(document.getElementById('root')).render(
       <>
       <div class="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p class="summary">
        You can find my thoughts here.
        <br/><br/>
        <b>And <i>pictures</i></b> of scientists!
      </p>
      </>
    );
  













































    // createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <>
  //   <div class="intro">
  //     <h1>Welcome to my website!</h1>
  //   </div>
  //   <p class="summary">
  //     You can find my thoughts here.
  //     <br></br>
  //     <b>And</b> <i>pictures</i> of scientists!
  //   </p>
  //   </>
  // </StrictMode>,
  // );
