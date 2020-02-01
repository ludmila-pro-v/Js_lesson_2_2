let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let now = new Date();
nowDay = now.getDay();
// alert( week[nowDay] );


let x = 0;
for (week[x]; x < 7; x++) {
  // console.log(x);

  if (x == nowDay) {
    document.write('<font face="Arial">'+ week[x].italics() + '</font>', '<br>');
  } else {
    if (x == 6 || x == 0) {
      document.write('<font face="Arial">'+ week[x].bold() + '</font>', '<br>');
    } else {
      document.write( week[x], '<br>' );
    };
  };
};
  
let arr = [];
for (i=0; i < 7; i++) {
  let a = +prompt('Введите многозначное число', '');
  if ((typeof(a)) === 'number' && a != '' && a > 9 ) {
    // console.log('всё верно');
    arr[i] = String(a);
    // console.log(arr[i]);

  } else {
    prompt('Неверно, введите другое число', '');
    i--;
  };
};

for (i=0; i < 7; i++) {
  let x = arr[i];
  y = x[0];
  if (y == '3'|| y == '7') {
    console.log(arr[i]);
  } else {
  };
};
