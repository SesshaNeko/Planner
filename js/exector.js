var exectors = [
  {
    id: 1,
    username: "user1",
    surname: "Некрасов",
    firstName: "Борис",
    secondName: "",
  },

  {
    id: 2,
    username: "user2",
    surname: "Тонких",
    firstName: "Евгений",
    secondName: "",
  },

  {
    id: 3,
    username: "user3",
    surname: "Петренко",
    firstName: "Дмитрий",
    secondName: "",
  },

  {
    id: 4,
    username: "user4",
    surname: "Тонких",
    firstName: "Дмитрий",
    secondName: "",
  },

  {
    id: 5,
    username: "user5",
    surname: "Васильев",
    firstName: "Денис",
    secondName: "",
  },

  {
    id: 6,
    username: "user6",
    surname: "Кузнецов",
    firstName: "Александр",
    secondName: "",
  },

  {
    id: 7,
    username: "user7",
    surname: "Смагин",
    firstName: "Антон",
    secondName: "",
  },

  {
    id: 8,
    username: "user8",
    surname: "Стольный",
    firstName: "Иван",
    secondName: "",
  },

  {
    id: 9,
    username: "user9",
    surname: "Быстров",
    firstName: "Евгений",
    secondName: "",
  },

  {
    id: 10,
    username: "user10",
    surname: "Мозгов",
    firstName: "Борис",
    secondName: "",
  },

  {
    id: 11,
    username: "user11",
    surname: "Мозгов",
    firstName: "Дмитрий",
    secondName: "",
  },

  {
    id: 12,
    username: "user12",
    surname: "Тонких",
    firstName: "Влад",
    secondName: "",
  },

  {
    id: 13,
    username: "user13",
    surname: "Стольный",
    firstName: "Григорий",
    secondName: "",
  },

  {
    id: 14,
    username: "user14",
    surname: "Мозгов",
    firstName: "Иван",
    secondName: "",
  },

  {
    id: 15,
    username: "user15",
    surname: "Васильев",
    firstName: "Александр",
    secondName: "",
  },
  {
    id: 16,
    username: "user16",
    surname: "Потапенко",
    firstName: "Сергей",
    secondName: "",
  },
  {
    id: 17,
    username: "user17",
    surname: "Быстров",
    firstName: "Иван",
    secondName: "",
  },
  {
    id: 18,
    username: "user18",
    surname: "Петров",
    firstName: "Антон",
    secondName: "",
  },
  {
    id: 19,
    username: "user19",
    surname: "Кузнецов",
    firstName: "Борис",
    secondName: "",
  },
  {
    id: 20,
    username: "user20",
    surname: "Кузнецов",
    firstName: "Альберт",
    secondName: "",
  },
  {
    id: 21,
    username: "user21",
    surname: "Иванов",
    firstName: "Антон",
    secondName: "",
  },
  {
    id: 22,
    username: "user22",
    surname: "Стольный",
    firstName: "Григорий",
    secondName: "",
  },
  {
    id: 23,
    username: "user23",
    surname: "Васильев",
    firstName: "Александр",
    secondName: "",
  },
  {
    id: 24,
    username: "user24",
    surname: "Быстров",
    firstName: "Олег",
    secondName: "",
  },
  {
    id: 25,
    username: "user25",
    surname: "Петров",
    firstName: "Сергей",
    secondName: "",
  },
];

document.querySelector(".planner__table").innerHTML += exectors.map(exectors => `
  <tr class="planner__tasks-in-progress">
    <th class="planner__id-exector">${exectors.id}</th>
    <th class="planner__exector">${exectors.surname}<br> ${exectors.firstName}</th>
    <td id=1 class="planner__droppable"></td>
    <td id=2 class="planner__droppable"></td>
    <td id=3 class="planner__droppable"></td>
    <td id=4 class="planner__droppable"></td>
    <td id=5 class="planner__droppable"></td>
    <td id=6 class="planner__droppable"></td>
    <td id=7 class="planner__droppable"></td>
  </tr>
`).join('');


var exectorId=[];
for(var i = 0; i<exectors.length; i++){
    exectorId[i] = exectors[i].id;
}
