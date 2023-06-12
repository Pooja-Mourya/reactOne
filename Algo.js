let arr = [73, 67, 38, 33]
for (let i = 0; i < arr.length; i++) {
  let activity = arr[i] + 2 - arr[i]
  let originArray = arr[i] + 2
  if (activity == 3) {
    originArray - 2
  } else if (originArray <= 40) {
    originArray
  } else {
    console.log('first')
  }
  console.log(originArray)
}

// let array = [73, 67, 38, 33]
// for (let i = 0; i < array.length; i++) {
//   if (array[i] >= 38) {
//     let nextMultipleOfFive = Math.ceil(array[i] / 5) * 5
//     if (nextMultipleOfFive - array[i] < 3) {
//       array[i] = nextMultipleOfFive
//     }
//   }
// }
// console.log(array.join('\n'))
