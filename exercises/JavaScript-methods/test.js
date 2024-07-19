function randomPromise() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve("The promise resolved!!")
    } else {
      return reject("The promise was rejected!!")
    }
  })
}

const randomPromise2 = async () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) return resolve("Well done!")
    return reject("Error!")
  })
}


// randomPromise()
//   .then(dsf => console.log(dsf))
//   .catch(ett => console.error(ett))
try {
  console.log(randomPromise2())
} catch (e) {
  console.log('!Errorrrrrrr')
  console.error(e)
}

