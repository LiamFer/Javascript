function build() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{reject(8)},1000*3)
}).then((result)=>{
    console.log(`${result} times 2 is equal to ${result*2}`)
}).catch((error) =>{
    console.log(`Something unexpected happened ${error}`)
}).finally(()=>{
    console.log("Ending the promise boss.")
})
}

build()
