let menu = {
  width: 2000,
  height: 3000,
  shit: 600,
  title: "My menu "
};

function multiplyNumeric(obj) {
    for (const info in obj) {
        if (typeof obj[info] === Number) {
            obj[info] = obj[info] * 2
            console.log(obj[info])
        } 
    }
}
multiplyNumeric(menu)
console.log("hey bro")
console.log('hello sis')
function newFeet() {
    console.log("feet")
}