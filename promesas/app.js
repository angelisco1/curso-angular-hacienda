// const fetch = require('node-fetch') // CommonJS
import fetch from 'node-fetch' // ES6 Modules

console.log('Inicio')

// const miPromesa = new Promise((resolve, reject) => {
//   const datos = [1, 2, 3]
//   console.log(datos)
//   resolve(datos)
// })


// peticionConCb('url', (resp) => {
//   resp.json(datos => {
//     console.log(datos)
//     peticionConCb('url+5', (resp =>{
//       resp.json()
//     }))
//   })
// })


fetch('http://jsonplaceholder.typicode.com/users')
  .then(resp => {
    console.log(resp)
    return resp.json()
  })
  .then(datos => {
    console.log(datos)
    const quintoUsuario = datos[4]
    return fetch('http://jsonplaceholder.typicode.com/users/' + quintoUsuario.id)
  })
  .then(resp => resp.json())
  .then(usuario5 => console.log(usuario5))
  .then(() => {
    console.log('Fin')
  })

// ASYNC/AWAIT
// async function getDatos() {
  // const resp = await fetch('http://jsonplaceholder.typicode.com/users')
  // console.log(resp)
  // const datos = await resp.json()
  // console.log(datos)
// }

// getDatos()