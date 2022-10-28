import fetch from 'node-fetch';

let array = []


for (let i = 1; i <= 25; i++) {
  fetch('https://api.chucknorris.io/jokes/random')
  .then((resp) => {
    return resp.json()
  }).then((resp) => {
    array.push(resp)
    console.log("Array: ", array)
  })
}