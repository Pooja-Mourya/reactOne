// let arr = [7, 69, 2, 221, 8974] // 7 69 2 221 8974

// console.log('first', Number.parseInt(arr.sort()))

// console.log('abc', 1 + '1')
// console.log('ab', 1 + Number('1'))

// let arr = [4, 4, 1, 3, 4, 3]

// function myFunction(arr) {
//   let counter = {}
//   for (let i of arr) {
//     counter[i] = (counter[i] || 0) + 1
//   }
//   //   console.log('counter', counter['4'])
//   for (let key in counter) {
//     // console.log(`Key: ${key}, Value: ${counter[key]}`)
//     let result = counter[key]

//     if (result > 1 && result < arr.length - 1) {
//       console.log('value', result)
//     }
//   }
// }

// const result = myFunction(arr)

let s = '12:05:45AM'
let arr = s.split(':')
// console.log(12 + Number(arr[0]), arr[1], arr[2])
// let result = `${12 + Number(arr[0])}:${arr[1]}:${parseInt(arr[2])}`
let result = `${12 + Number(arr[0])}:${arr[1]}:${parseInt(arr[2])}`

const meridiem = timeComponents[2].substring(2)
if (meridiem === 'PM' && parseInt(arr[2]) !== 12) {
  hour += 12
} else if (meridiem === 'AM' && parseInt(arr[2]) === 12) {
  hour = 0
}

// Format the hour with leading zeros
//   const hourFormatted = hour.toString().padStart(2, '0');

console.log('result', result)
