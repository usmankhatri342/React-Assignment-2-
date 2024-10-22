import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


export default function Bio() {
  return (
    <div>
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br/><br/>
      <b>And <i>pictures</i></b> of scientists!
    </p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// export default function Bio() {
//   return (
//     <div>
//       <div className="intro">
//         <h1>Welcome to my website!</h1>
//       </div>
//       <p className="summary">
//         You can find my thoughts here.
//         <br /><br />
//         <b>And <i>pictures</i></b> of scientists!
//       </p>
//     </div>
//   );
// }