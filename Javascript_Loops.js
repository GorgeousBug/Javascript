// for && while && do while loops

let temperature = 0

while(temperature < 40) {
    if (temperature < 10) {
        console.log('temperature =', temperature, 'it is cold')
    } else if (temperature >= 10 && temperature < 30) {
        console.log('temperature =', temperature, 'it is nice')
    } else {
        console.log('temperature =', temperature, 'it is hot') 
    }
    temperature++
}



for (let i = 0; i < 10; i++) {
    console.log(i , '= FOR')
}



for (let temperature = 0; temperature < 10; temperature++) {
    if (temperature < 3) {
                console.log('temperature =', temperature, 'it is cold')
            } else if (temperature >= 3 && temperature < 7) {
                console.log('temperature =', temperature, 'it is nice')
            } else {
                console.log('temperature =', temperature, 'it is hot') 
            }
}



let time = 1
do {
    console.log(time)
    time++
} while (time <= 12)



let names = ['Kate',
             'Alex',
             'Ivan',
             'Ignat',
             'Andrey',
             'Vika']

for (let item_1 of names) {

    if (item_1 == 'Ignat') {
        break
    }

    console.log(item_1)
} 



let listOfNames = ['Alex',
                   'Ivan',
                   'Ignat',
                   'Andrey',
                   'Vika']

 let items = listOfNames.length
 let count = 0

 console.log(items)

 while (++count > items) {
     console.log(listOfNames[count])
 }




 