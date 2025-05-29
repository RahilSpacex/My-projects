class bankAcc {
    constructor(name,balance) {
        this.name = name
        this.balance = balance
    }
    checkBalance(){
        console.log(this.balance)
    }
    deposit(amount){
        this.balance += amount
    }
    
}

function create() {
    let name = document.getElementById('name').value
    let balance = document.getElementById('balance').value
    let object = new bankAcc(name,balance)
    localStorage.setItem("bankData", JSON.stringify(object))
    console.log(object)
}
function loadTable() {
    let ppl = JSON.parse(localStorage.getItem("bankData")) || {}
    for (const name in ppl) {
       const {balance} = ppl[name]
       row = `<tr>${name}</tr>
        <tr>${balance}</tr>`
        document.getElementById('users').innerHTML += row
        
    }
}
