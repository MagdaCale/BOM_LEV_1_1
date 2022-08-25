
// CodeFlow Übung lev1_1: setTimeout setInterval
//Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.

console.log('nach 3 Sekunden...')

setTimeout(()=>{
    console.log('kommt das hier')
},3000)


// CodeFlow Übung lev1_1: setTimeout setInterval
// Schreibe eine Funktion die das Ergebnis der Vorschau anzeigt.

const timer = () => {
    let date = new Date()
    console.log(date.toLocaleTimeString())
}

setInterval(timer, 1000)

// CodeFlow Übung lev1_1: setTimeout setInterval
// Schreibe eine Funktion die das Ergebnis der Vorschau ausgibt.

let number = 10

const feierabend = () => {
    if(number === 0){
        console.log('Feierabend')
        clearInterval(myInterval)
    }else{
        console.log(number)
        number -= 1
    }
}

let myInterval = setInterval(feierabend, 1000)

