import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//custom function
function MyApp(){
  return (
      <div>
          <h1>Custom App | chai</h1>
      </div>
  )
}

//not his way we have to create element
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement
  //if() - we cannot write if else here its javascript syntaxx -- because its evaluated expression hai. 
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    // reactElement
    // <MyApp />
    // anotherElement
  
)
