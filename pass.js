const upperkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerkeys = "abcdefghijklmnopqrstuvwxyz"
const numkeys = "123456789"
const symbolkeys = "~!@#$%^&*()_+"

const lengthbox = document.getElementById("lengtho")
const testbox = document.getElementById("test-box")
const upperpin = document.getElementById("upper")
const lowerpin = document.getElementById("small")
const numberpin = document.getElementById("numbers")
const symbolpin = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatepassword = (password = "") => {
    if(upperpin.checked){
        password += getRandomData(upperkeys)
    }
    if(lowerpin.checked){
        password += getRandomData(lowerkeys)
    }
    if(numberpin.checked){
        password += getRandomData(numkeys)
    }
    if(symbolpin.checked){
        password += getRandomData(symbolkeys)
    }
    if(password.length <= lengthbox.value){
        return generatepassword(password)
    }

    testbox.innerText = truncateString(password, lengthbox.value)
}

generatepassword()

document.getElementById("btn").addEventListener("click",function(){
    generatepassword()
})

// copied function

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}