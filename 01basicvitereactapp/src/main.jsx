import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '__blank'
    },
    childrem: 'Click me to visit google'
}

const anotherElemnt = (
  <a href='https://google.com' target='__blank'>Visit google</a>
)



ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
