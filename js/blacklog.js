scr = "js\assignmentOfTasks.js";
var tasks = [
  {
    id: "940f42a9-519f-4d12-80e3-7e8353fa7492",
    subject: "Анализ",
    description: "",
    creationAuthor: 1,
    executor: 1,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-12",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },

  {
    id: "b12869fd-f77b-46f2-add0-b314930cd6a0",
    subject: "Планирование",
    description: "",
    creationAuthor: 1,
    executor: 1,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },

  {
    id: "3507b07f-28c6-44fe-be7c-a7e479a4842a",
    subject: "Проектирование",
    description: "",
    creationAuthor: 1,
    executor: 2,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-14",
    planEndDate: "2021-10-15",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "a1c67418-bfc4-4b2a-95ec-1bb0688faeb7",
    subject: "Разработка",
    description: "",
    creationAuthor: 1,
    executor: 3,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-14",
    planEndDate: "2021-10-19",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "92615005-ea49-498b-98b9-25c047091d69",
    subject: "Тестирование",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-18",
    planEndDate: "2021-10-19",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "2c30d635-49c9-47a6-a055-ab724d79bbe6",
    subject: "Заместитель",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "419158da-98b4-4c90-8557-b83cd6726b19",
    subject: "Наблюдатель",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "dacad8d9-4bec-4409-8271-748400218fa1",
    subject: "Декоратор",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "b781117d-490a-4d68-bd06-22ab8198c7e8",
    subject: "Фасад",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "b3df2930-cb32-4f5b-aa7e-3a07f9eb1c4f",
    subject: "Адаптер",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "44c69ee3-6fdd-4edb-a1f0-55dc5fc19d9f",
    subject: "Строитель",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "4c55cfad-e6bb-4aff-845b-4ff18cf35ea9",
    subject: "Мост",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "c97bef6a-c706-4449-b233-a93bab0c8b29",
    subject: "Команда",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "c2322e3b-a5a7-4842-82cf-f005342418e8",
    subject: "Итератор",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "f35eb514-c3d3-42fe-9588-be025a85c5c8",
    subject: "Посредник",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "920fea1d-8fc9-47b3-857c-f9fafa281119",
    subject: "Прототип",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "685774d7-95ce-48b4-9a47-a4a599fea3e4",
    subject: "Компоновщик",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "761e4be1-7cb6-4b0e-920f-2bb8bc138d9a",
    subject: "Снимок",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "daf30d66-1158-45e6-a3d2-56a96fb94cec",
    subject: "Состояние",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "928dbafd-d3c4-4e60-9cc0-548447ee3c2a",
    subject: "Стратегия",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "c800c3bc-63f1-4f46-ad79-7e632cc8bbd7",
    subject: "Одиночка",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "f029c122-b60d-442f-ab97-5f2978eaba11",
    subject: "Легковес",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "063dc4c9-e99d-4277-b38a-201d7a83f7f0",
    subject: "Посетитель",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "a2ac383a-911d-424d-bcdf-6087044b77a0",
    subject: "Фабричный метод",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "a97be4c4-e4fe-4b37-a531-97a6385a3434",
    subject: "Абстрактная фабрика",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
  {
    id: "4428c4ab-3efa-4000-96ac-d175e3352926",
    subject: "Цепочка обязанностей",
    description: "",
    creationAuthor: 1,
    executor: null,
    creationDate: "2021-10-12",
    planStartDate: "2021-10-13",
    planEndDate: "2021-10-14",
    endDate: "2021-10-12",
    status: 1,
    order: 1,
  },
];


document.querySelector(".planner__blacklog").innerHTML += tasks.map(
    (tasks) => `
<div class="planner__task" data-title="from ${tasks.planStartDate} to ${tasks.planEndDate}">
${tasks.subject}
</div>
`).join("");

var tasksExecutor = [];
var tasksId = [];
for (var i = 0; i < tasks.length; i++) {
  tasksExecutor[i] = tasks[i].executor;
  tasksId[i] = tasks[i].id;
}