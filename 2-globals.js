// GLOBALS    - NO WINDOWS !!!
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about anv where the program  is being executed

console.log(__dirname)

let count = 0

const Greet = setInterval(showGreet, 1000)


function showGreet() {
    console.log("Hello")
    count++
    console.log(count)
    
    if(count ===5) {
        clearInterval(Greet)
    }
}


