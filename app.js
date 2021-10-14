const fs = require('fs')
csv = fs.readFileSync("plastic_pollution.csv")

const array = csv.toString().split('\r')


let result = []

let headers = array[0].split(', ')


// for (let i = 0; i < 100 ; i++) {
//   let obj = {}
//
//   let str = array[i]
//   let s = ''
//
//   let flag = 0
//   for(let ch of str) {
//     if (ch === '"' && flag === 0) {
//       flag = 1
//     }
//     else if (ch === '"' && flag === 1) flag = 0
//     if (ch === ', ' && flag === 0) ch = '|'
//     if (ch !== '"') s += ch
//   }
//
//   let properties = s.split('|')
//
//   for (let j in headers) {
//       if (properties[j].includes(', ')) {
//         obj[headers[j]] = properties[j]
//         .split(', ').map(item=> item.trim())
//       }
//       else obj[headers[j]] = properties[j]
//   }
//   result.push(obj)
// }
//
// let json = JSON.stringify(result)





console.log(headers[0])
