// let  item_1
// item_1 = 5
// console.log(item_1)

// let item_2
// item_2 = 3
// console.log(item_2)

// let item_3
// item_3 = item_1 + item_2
// console.log(item_3)

// let item_4
// item_4 = 'Yolochka'
// console.log('Yolochka')

// console.log(item_3 + item_4)
// console.log(item_3 * item_4)

// let item_5
// item_5 = item_3

// let item_6
// let item_6_type
// item_6 = 15
// item_6_type = typeof(item_6)
// console.log('item_6 ==', item_6, 'item_6_type ==', item_6_type)

// let item_7 = String(item_6)
// let item_7_type
// item_7_type = typeof(item_7)
// console.log('item_7 ==', item_7, 'item_7_type ==', item_7_type)

// let age_1 = 10
// let age_2 = 18
// let age_3 = 60

// if (age_1 < age_2) {
//     console.log('You don`t have access cause your age is less than ' + age_2)
// }
// else if ( age_1 >=  age_2 && age_1 <  age_3) {
//     console.log('Welcome !')
// }
// else if (age_1  > age_3) {
//     console.log('Keep calm and look Culture channel')
// }
// else {
//     console.log('Technical work')
// }


//HW 1*


function checkAge(age_1) {

    let age_2 = 18
    let age_3 = 60
    
    if (age_1 < age_2) {
        console.log('You don`t have access cause your age is less than ' + age_2)
    }
    else if ( age_1 >=  age_2 && age_1 <  age_3) {
        console.log('Welcome !')
    }
    else if (age_1  > age_3) {
        console.log('Keep calm and look Culture channel')
    }
    else {
        console.log('Technical work')
    }
}
checkAge(17)
checkAge(18)
checkAge(61)



//HW 2**


function checkAge(age_1) {
    let age_2 = 18
    let age_3 = 60

    if (typeof age_1 == "number") {

      if (age_1 < age_2) {
        console.log('You don`t have access cause your age is less than' + age_2)
      } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome !')
      } else if (age_1 > age_3) {
        console.log('Keep calm and look Culture channel')
      }
    } else {
      console.log('Error')
    }
  }
  
  checkAge('30')


  //HW 3***



function checkAge(age_1) {
  let age_2 = 18
  let age_3 = 60

  age_1 = Number(age_1)

  if (!isNaN(age_1)) {

    if (age_1 < age_2) {
      console.log('You don`t have access cause your age is less than' + age_2)
    } else if (age_1 >= age_2 && age_1 < age_3) {
      console.log('Welcome !')
    } else if (age_1 > age_3) {
      console.log('Keep calm and look Culture channel')
    }

  } else {
    console.log('Error')
  }
}

checkAge('30')


// HW 4****

let age_1 = prompt('what is your age?')


    let age_2 = 18
    let age_3 = 60
  
    age_1 = Number(age_1)

    if (!isNaN(age_1)) {

      if (age_1 < age_2) {
        alert('You don`t have access cause your age is less than' + age_2)
      } else if (age_1 >= age_2 && age_1 < age_3) {
        alert('Welcome !')
      } else if (age_1 > age_3) {
        alert('Keep calm and look Culture channel')
      }
  
    } else {
      alert('Error')
    }


//     <!doctype html>
// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
//     <title>JavaScript</title>
//     <link rel="stylesheet" href="styles.css" />
    

// </head>
// <body>

// <h1>Entertainment content</h1>

// <button id="Button">Give me some entertainment</button>

// <img src="https://i.pinimg.com/564x/4f/7d/f3/4f7df36b0f374c3b0e2567c6ad02b50a.jpg" />

// <script src="function checkAge.js"></script>

// </body>
// </html>


// http://d97801f1.beget.tech/ - result))