// let a = prompt('Введите свое имя')
// let b = prompt('Введите свой год рождение')
// let d = prompt('Введите нынешный год')

// function add(a,b,d) {
//     let ans = 'Ваще имя ' + a + ' Вам ' + (d-b) + ' лет'
//     return ans
    
// }
// console.log(add(a,b,d));


function randomNumber(a, b) {
  return Math.floor(Math.random() * (b + 1 - a) + a)
}

let count = +prompt('Введите кол-во примеров');
for (let i = 1; i <= count; i++) {
  let action = randomNumber(1, 4)
  let one = randomNumber(1, 100)
  let two = randomNumber(100, 1)
  let res = 0

  if(action == 1){
    res = +prompt(one + ' + ' + two + '=' + '?'); 
    alert(one + ' + ' + two + '=' +(one + two) + ' Ваш ответ ' + res + ((one + two) == res ? ' Молодец' : ' Не правильно' ))
  }else if(action == 2){
    res = +prompt(one + ' - ' + two + '=' + '?'); 
    alert(one + ' - ' + two + '=' + (one - two) +  ' Ваш ответ ' + res + ((one - two) == res ? ' Молодец' : ' Не правильно' ))
  }else if(action == 3){
    res = +prompt(one + ' * ' + two + '=' + '?');
    alert(one + ' * ' + two + '=' + (one * two) + ' Ваш ответ ' + res + ((one * two) == res ? ' Молодец' : ' Не правильно' ))
  }else if(action == 4){
    res = +prompt(one + ' / ' + two + '=' + '?');
    alert(one + ' / ' + two + '=' + (one / two) +  ' Ваш ответ ' + res + ((one / two) == res ? ' Молодец' : ' Не правильно' ))
  }
  
}
