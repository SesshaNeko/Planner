var myDate = new Date();
var myDay = myDate.getDate();

var days = document.querySelector(".planner__date");

var year = [2020,2021,2022];

var weekday = [ 'Mon', 'Tue',
    'Wed', 'Thu', 'Fri', 'Sat','Sun'
];
var month=[];
for (var i = 1; i<=12; i++){
  month[i] = i;
}

var day=`<td class="planner__invisible"></td><td class="planner__invisible"></td>`;
for (var i = 11; i<=17; i++){
  day += `<th id=1 class="planner__day">${weekday[i - 11]}<br> ${i}-${month[10]}-${year[1]} </th>`;
  days.innerHTML = day;
}

