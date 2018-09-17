const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let counter = 0

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which)
    if (key === code[counter]) {
      counter++
      console.log(`passed round ${counter}`)
      if (counter === code.length) {
        alert("You did it!!")
        counter = 0
      }
    } else {
      console.log("nope...")
      counter = 0
    }
  })
}
