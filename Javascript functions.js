// Functions


const power = function(num) {
    return 2**num
}
console.log(power(10))



function printSmile(stroka, numberOfRows) {
    for (let i = 1; i<=numberOfRows; i++) {
        console.log(stroka.repeat(i))
    }
}
printSmile('=)', 6)



