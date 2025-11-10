// ============================================================================
// ЛАБОРАТОРНА РОБОТА №3 - ВАРІАНТ 9
// Студент: [Ваше Прізвище Ім'я]
// ============================================================================

console.log('=== ЛАБОРАТОРНА РОБОТА №3 - ВАРІАНТ 9 ===\n');

// ============================================================================
// ЗАВДАННЯ 1: РОБОТА З СЕРВІСАМИ (МАСИВИ ТА ФУНКЦІЇ)
// ============================================================================

console.log('\n--- ЗАВДАННЯ 1: СЕРВІСИ ---\n');

// Створення 10 записів сервісів
// Використовуємо масив об'єктів з різними властивостями
const services = [
  {
    id: 1,
    name: 'Індивідуальний пошив костюму',
    type: 'Пошив одягу',
    readersDay1: 150,
    readersDay2: 180,
    durationDays: 14,
    durationHours: 336,
    price: 5000
  },
  {
    id: 2,
    name: 'Ремонт одягу',
    type: 'Ремонт',
    readersDay1: 200,
    readersDay2: 195,
    durationDays: 2,
    durationHours: 48,
    price: 500
  },
  {
    id: 3,
    name: 'Пошив вечірньої сукні',
    type: 'Пошив одягу',
    readersDay1: 120,
    readersDay2: 250,
    durationDays: 21,
    durationHours: 504,
    price: 8000
  },
  {
    id: 4,
    name: 'Підгонка по фігурі',
    type: 'Підгонка',
    readersDay1: 180,
    readersDay2: 170,
    durationDays: 3,
    durationHours: 72,
    price: 800
  },
  {
    id: 5,
    name: 'Реставрація шкіряних виробів',
    type: 'Реставрація',
    readersDay1: 90,
    readersDay2: 110,
    durationDays: 10,
    durationHours: 240,
    price: 2500
  },
  {
    id: 6,
    name: 'Пошив корпоративного одягу',
    type: 'Пошив одягу',
    readersDay1: 140,
    readersDay2: 160,
    durationDays: 30,
    durationHours: 720,
    price: 12000
  },
  {
    id: 7,
    name: 'Терміновий ремонт',
    type: 'Ремонт',
    readersDay1: 220,
    readersDay2: 280,
    durationDays: 1,
    durationHours: 24,
    price: 1000
  },
  {
    id: 8,
    name: 'Пошив аксесуарів',
    type: 'Аксесуари',
    readersDay1: 100,
    readersDay2: 130,
    durationDays: 7,
    durationHours: 168,
    price: 1500
  },
  {
    id: 9,
    name: 'Декорування одягу',
    type: 'Декор',
    readersDay1: 85,
    readersDay2: 95,
    durationDays: 5,
    durationHours: 120,
    price: 1200
  },
  {
    id: 10,
    name: 'Хімчистка',
    type: 'Хімчистка',
    readersDay1: 300,
    readersDay2: 290,
    durationDays: 2,
    durationHours: 48,
    price: 600
  }
];

console.log('✓ Створено масив з 10 сервісів');
console.log('Кількість сервісів:', services.length);

// ============================================================================
// ЗАВДАННЯ 1.1: Впорядкування за терміном + середня кількість користувачів
// ============================================================================

console.log('\n--- 1.1: Сортування за тривалістю та середня к-сть користувачів ---');

/**
 * Функція для впорядкування сервісів за тривалістю
 * @param {Array} servicesArray - масив сервісів
 * @returns {Array} - відсортований масив
 */
function sortByDuration(servicesArray) {
  // Створюємо копію масиву, щоб не змінювати оригінал
  // Використовуємо метод sort() з функцією порівняння
  return [...servicesArray].sort((a, b) => a.durationDays - b.durationDays);
}

/**
 * Функція для знаходження середньої кількості користувачів
 * для сервісів з однаковою тривалістю
 * @param {Array} servicesArray - масив сервісів
 * @returns {Object} - об'єкт з результатами
 */
function getAverageReadersByDuration(servicesArray) {
  // Об'єкт для збереження даних по тривалості
  const durationGroups = {};

  // Групуємо сервіси за тривалістю
  // Використовуємо цикл for для перебору масиву
  for (let i = 0; i < servicesArray.length; i++) {
    const service = servicesArray[i];
    const duration = service.durationDays;

    // Якщо група ще не існує - створюємо
    if (!durationGroups[duration]) {
      durationGroups[duration] = {
        services: [],
        totalDay1: 0,
        totalDay2: 0,
        count: 0
      };
    }

    // Додаємо дані до групи
    durationGroups[duration].services.push(service.name);
    durationGroups[duration].totalDay1 += service.readersDay1;
    durationGroups[duration].totalDay2 += service.readersDay2;
    durationGroups[duration].count++;
  }

  // Обчислюємо середні значення
  const results = {};

  // Використовуємо цикл for...in для перебору властивостей об'єкта
  for (const duration in durationGroups) {
    const group = durationGroups[duration];
    const avgDay1 = group.totalDay1 / group.count;
    const avgDay2 = group.totalDay2 / group.count;
    const avgTotal = (avgDay1 + avgDay2) / 2; // Середнє по обох добах

    results[duration] = {
      services: group.services,
      count: group.count,
      averageReadersDay1: Math.round(avgDay1),
      averageReadersDay2: Math.round(avgDay2),
      averageTotal: Math.round(avgTotal)
    };
  }

  return results;
}

// Виконуємо сортування
const sortedServices = sortByDuration(services);
console.log('Відсортовані сервіси за тривалістю (у днях):');
sortedServices.forEach(service => {
  console.log(`  ${service.name}: ${service.durationDays} днів`);
});

// Знаходимо середні значення
const averagesByDuration = getAverageReadersByDuration(services);
console.log('\nСередня кількість читачів по групах тривалості:');
for (const duration in averagesByDuration) {
  const data = averagesByDuration[duration];
  console.log(`  Тривалість ${duration} днів (${data.count} сервіс(ів)):`);
  console.log(`    Сервіси: ${data.services.join(', ')}`);
  console.log(`    Середня к-сть день 1: ${data.averageReadersDay1}`);
  console.log(`    Середня к-сть день 2: ${data.averageReadersDay2}`);
  console.log(`    Загальна середня: ${data.averageTotal}`);
}

// ============================================================================
// ЗАВДАННЯ 1.2: Пошук сервісу з максимальною к-стю читачів за добу_2
// ============================================================================

console.log('\n--- 1.2: Сервіс з максимальною к-стю читачів (день 2) ---');

/**
 * Функція для знаходження сервісу з максимальною к-стю читачів за день 2
 * @param {Array} servicesArray - масив сервісів
 * @returns {Object} - об'єкт з результатом
 */
function findMaxReadersDay2(servicesArray) {
  // Перевірка на порожній масив
  if (servicesArray.length === 0) {
    return null;
  }

  // Використовуємо метод reduce() для пошуку максимуму
  const maxService = servicesArray.reduce((max, current) => {
    return current.readersDay2 > max.readersDay2 ? current : max;
  });

  return {
    id: maxService.id,
    name: maxService.name,
    type: maxService.type,
    readersDay2: maxService.readersDay2
  };
}

const maxReadersService = findMaxReadersDay2(services);
console.log('Сервіс з максимальною кількістю читачів за день 2:');
console.log(`  ID: ${maxReadersService.id}`);
console.log(`  Назва: ${maxReadersService.name}`);
console.log(`  Тип: ${maxReadersService.type}`);
console.log(`  Кількість читачів: ${maxReadersService.readersDay2}`);

// ============================================================================
// ЗАВДАННЯ 1.3: Додавання нового сервісу
// ============================================================================

console.log('\n--- 1.3: Додавання нового сервісу ---');

/**
 * Функція для перевірки повноти даних сервісу
 * @param {Object} service - об'єкт сервісу
 * @returns {Boolean} - чи всі дані присутні
 */
function isServiceComplete(service) {
  // Перевіряємо всі обов'язкові поля
  const requiredFields = ['id', 'name', 'type', 'readersDay1', 'readersDay2',
    'durationDays', 'durationHours', 'price'];

  // Використовуємо метод every() для перевірки
  return requiredFields.every(field => {
    // Перевіряємо, що поле існує і не undefined і не null
    return service[field] !== undefined &&
      service[field] !== null &&
      service[field] !== '';
  });
}

/**
 * Функція для додавання нового сервісу
 * @param {Array} servicesArray - масив сервісів
 * @param {Object} newService - новий сервіс
 * @returns {Array} - оновлений масив
 */
function addNewService(servicesArray, newService) {
  // Створюємо копію масиву
  const updatedServices = [...servicesArray];

  // Перевіряємо повноту даних
  if (isServiceComplete(newService)) {
    console.log('✓ Всі дані присутні. Шукаємо місце за зростанням вартості...');

    // Сортуємо за вартістю
    updatedServices.push(newService);
    updatedServices.sort((a, b) => a.price - b.price);

    // Знаходимо позицію нового сервісу
    const position = updatedServices.findIndex(s => s.id === newService.id);
    console.log(`  Вставлено на позицію: ${position + 1} (після сортування)`);
  } else {
    console.log('✗ Відсутні деякі дані. Додаємо в кінець списку...');
    updatedServices.push(newService);
    console.log(`  Додано в кінець, позиція: ${updatedServices.length}`);
  }

  return updatedServices;
}

// Тестуємо з неповними даними
console.log('\nТЕСТ 1: Додавання сервісу з неповними даними');
const incompleteService = {
  id: 11,
  name: 'Вишивка',
  type: 'Декор',
  readersDay1: 100,
  // Відсутні деякі дані
  price: 2000
};

let servicesWithNew = addNewService(services, incompleteService);
console.log(`Кількість сервісів після додавання: ${servicesWithNew.length}`);

// Тестуємо з повними даними
console.log('\nТЕСТ 2: Додавання сервісу з повними даними');
const completeService = {
  id: 12,
  name: 'Перешив одягу',
  type: 'Підгонка',
  readersDay1: 130,
  readersDay2: 145,
  durationDays: 5,
  durationHours: 120,
  price: 1800
};

servicesWithNew = addNewService(services, completeService);
console.log(`Кількість сервісів: ${servicesWithNew.length}`);
console.log('Порядок після вставки (перші 5):');
for (let i = 0; i < Math.min(5, servicesWithNew.length); i++) {
  console.log(`  ${i + 1}. ${servicesWithNew[i].name} - ${servicesWithNew[i].price} грн`);
}

// ============================================================================
// ЗАВДАННЯ 1.4: Обчислення тривалості декількох сервісів одночасно
// ============================================================================

console.log('\n--- 1.4: Тривалість надання декількох сервісів ---');

/**
 * Функція для обчислення оновленої тривалості сервісів
 * @param {Array} selectedServices - масив вибраних сервісів
 * @returns {Array} - масив з оновленими тривалостями
 */
function calculateUpdatedDuration(selectedServices) {
  const count = selectedServices.length;
  let multiplier; // Змінна для коефіцієнта

  // Визначаємо множник залежно від кількості
  // Використовуємо умовну конструкцію if-else
  if (count === 1) {
    multiplier = 1.0;
    console.log(`Кількість сервісів: ${count} - тривалість не змінюється (×${multiplier})`);
  } else if (count <= 3) {
    multiplier = 1.1;
    console.log(`Кількість сервісів: ${count} - множимо на ${multiplier}`);
  } else {
    multiplier = 2.0;
    console.log(`Кількість сервісів: ${count} - множимо на ${multiplier}`);
  }

  // Обчислюємо нову тривалість для кожного сервісу
  const results = selectedServices.map(service => {
    const newDurationDays = Math.round(service.durationDays * multiplier * 10) / 10;
    const newDurationHours = Math.round(service.durationHours * multiplier);

    return {
      id: service.id,
      name: service.name,
      type: service.type,
      originalDurationDays: service.durationDays,
      newDurationDays: newDurationDays,
      originalDurationHours: service.durationHours,
      newDurationHours: newDurationHours
    };
  });

  return results;
}

// ТЕСТ 1: 1 сервіс
console.log('\nТЕСТ 1: Вибрано 1 сервіс');
const test1 = [services[0]];
const result1 = calculateUpdatedDuration(test1);
result1.forEach(item => {
  console.log(`  ${item.name}:`);
  console.log(`    Оригінал: ${item.originalDurationDays} днів (${item.originalDurationHours} год)`);
  console.log(`    Оновлено: ${item.newDurationDays} днів (${item.newDurationHours} год)`);
});

// ТЕСТ 2: 3 сервіси
console.log('\nТЕСТ 2: Вибрано 3 сервіси');
const test2 = [services[0], services[1], services[2]];
const result2 = calculateUpdatedDuration(test2);
result2.forEach(item => {
  console.log(`  ${item.name}:`);
  console.log(`    Оригінал: ${item.originalDurationDays} днів → Оновлено: ${item.newDurationDays} днів`);
});

// ТЕСТ 3: 5 сервісів
console.log('\nТЕСТ 3: Вибрано 5 сервісів');
const test3 = [services[0], services[1], services[2], services[3], services[4]];
const result3 = calculateUpdatedDuration(test3);
result3.forEach(item => {
  console.log(`  ${item.name}:`);
  console.log(`    Оригінал: ${item.originalDurationDays} днів → Оновлено: ${item.newDurationDays} днів`);
});

// ============================================================================
// ЗАВДАННЯ 2: ОБЛІКОВІ ЗАПИСИ КОРИСТУВАЧІВ (ОБ'ЄКТНО-ОРІЄНТОВАНИЙ КОД)
// ============================================================================

console.log('\n\n--- ЗАВДАННЯ 2: КОРИСТУВАЧІ (ООП) ---\n');

/**
 * Клас для представлення користувача
 * Використовуємо PascalCase для імені класу
 */
class User {
  // Конструктор класу
  constructor(lastName, firstName, age, email, purpose, date, time) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.purpose = purpose; // 'побажання', 'претензія', 'питання', 'пропозиція'
    this.date = new Date(date); // Об'єкт Date
    this.time = time; // Формат "HH:MM"
  }

  // Метод для отримання повного імені
  getFullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // Метод для отримання місяця звернення
  getMonth() {
    return this.date.getMonth() + 1; // +1 бо місяці від 0 до 11
  }

  // Метод для перевірки, чи користувач звернувся у певний місяць і час
  checkMonthAndTime(targetMonth, targetTime) {
    // targetMonth: 1-12
    // targetTime: "HH:MM"
    return this.getMonth() === targetMonth && this.time === targetTime;
  }

  // Внутрішній метод для виведення інформації (використовуємо префікс _)
  _displayInfo() {
    console.log(`  ${this.getFullName()}, ${this.age} років`);
    console.log(`    Email: ${this.email}`);
    console.log(`    Мета: ${this.purpose}`);
    console.log(`    Дата: ${this.date.toLocaleDateString('uk-UA')}, час: ${this.time}`);
  }
}

/**
 * Клас для управління користувачами
 */
class UserManager {
  constructor() {
    this._users = []; // Внутрішній масив користувачів
  }

  // Метод для додавання користувача
  addUser(user) {
    this._users.push(user);
  }

  // Метод для отримання всіх користувачів
  getAllUsers() {
    return this._users;
  }

  // Метод для отримання кількості користувачів
  getUserCount() {
    return this._users.length;
  }

  // ЗАВДАННЯ 2.1: Користувачі за місяцем і часом
  getUsersByMonthAndTime(month, time) {
    const filteredUsers = [];

    // Використовуємо цикл while для перебору
    let i = 0;
    while (i < this._users.length) {
      if (this._users[i].checkMonthAndTime(month, time)) {
        filteredUsers.push(this._users[i]);
      }
      i++;
    }

    return filteredUsers;
  }

  // ЗАВДАННЯ 2.2: Мінімальний вік, email та дата
  getMinAgeUserInfo() {
    if (this._users.length === 0) {
      return null;
    }

    // Знаходимо мінімальний вік
    let minAge = this._users[0].age;
    let minUser = this._users[0];

    // Використовуємо цикл do-while
    let j = 1;
    do {
      if (j < this._users.length) {
        if (this._users[j].age < minAge) {
          minAge = this._users[j].age;
          minUser = this._users[j];
        }
        j++;
      }
    } while (j < this._users.length);

    return {
      minAge: minAge,
      email: minUser.email,
      date: minUser.date.toLocaleDateString('uk-UA'),
      user: minUser
    };
  }

  // ЗАВДАННЯ 2.3: Класифікація користувачів
  classifyUsers() {
    const classes = {
      activeYouth: [], // Активна молодь
      elderlyComplaint: [], // Похилий претензійний
      middleNonComplaint: [], // Середній без претензій
      others: [] // Інші
    };

    // Використовуємо for...of для перебору
    for (const user of this._users) {
      // Використовуємо switch для класифікації
      let classified = false;

      // Активна молодь: вік до 25, мета - побажання
      if (user.age < 25 && user.purpose.toLowerCase() === 'побажання') {
        classes.activeYouth.push(user);
        classified = true;
      }
      // Похилий претензійний: вік > 60, мета - претензія
      else if (user.age > 60 && user.purpose.toLowerCase() === 'претензія') {
        classes.elderlyComplaint.push(user);
        classified = true;
      }
      // Середній без претензій: 25 < вік < 60, мета - не претензія
      else if (user.age >= 25 && user.age <= 60 &&
        user.purpose.toLowerCase() !== 'претензія') {
        classes.middleNonComplaint.push(user);
        classified = true;
      }

      // Інші
      if (!classified) {
        classes.others.push(user);
      }
    }

    return {
      activeYouth: {
        count: classes.activeYouth.length,
        users: classes.activeYouth
      },
      elderlyComplaint: {
        count: classes.elderlyComplaint.length,
        users: classes.elderlyComplaint
      },
      middleNonComplaint: {
        count: classes.middleNonComplaint.length,
        users: classes.middleNonComplaint
      },
      others: {
        count: classes.others.length,
        users: classes.others
      }
    };
  }

  // ЗАВДАННЯ 2.4: Сортування за email
  sortByEmailAndDisplayPurpose() {
    // Створюємо копію масиву для сортування
    const sortedUsers = [...this._users].sort((a, b) => {
      // Порівнюємо email в алфавітному порядку
      return a.email.localeCompare(b.email);
    });

    return sortedUsers.map(user => ({
      email: user.email,
      fullName: user.getFullName(),
      purpose: user.purpose
    }));
  }
}

// Створюємо менеджер користувачів
const userManager = new UserManager();

// Створюємо 10 облікових записів
console.log('Створення 10 облікових записів користувачів...\n');

// Використовуємо різні типи даних
const usersData = [
  new User('Іваненко', 'Олексій', 22, 'alex.ivanenko@gmail.com', 'побажання', '2025-03-15', '14:30'),
  new User('Петренко', 'Марія', 35, 'maria.petrenko@ukr.net', 'питання', '2025-03-20', '10:15'),
  new User('Сидоренко', 'Іван', 65, 'ivan.sydorenko@mail.com', 'претензія', '2025-04-10', '16:45'),
  new User('Коваленко', 'Олена', 28, 'olena.kovalenko@gmail.com', 'пропозиція', '2025-03-15', '11:00'),
  new User('Мельник', 'Андрій', 45, 'andrii.melnyk@yahoo.com', 'побажання', '2025-05-01', '09:30'),
  new User('Шевченко', 'Наталія', 19, 'natalia.shevchenko@outlook.com', 'побажання', '2025-03-15', '14:30'),
  new User('Бондаренко', 'Сергій', 70, 'sergiy.bondarenko@gmail.com', 'претензія', '2025-06-12', '18:20'),
  new User('Ткаченко', 'Юлія', 32, 'yulia.tkachenko@ukr.net', 'питання', '2025-03-28', '13:45'),
  new User('Павленко', 'Дмитро', 55, 'dmytro.pavlenko@mail.com', 'побажання', '2025-07-05', '15:00'),
  new User('Морозова', 'Ірина', 40, 'iryna.morozova@gmail.com', 'пропозиція', '2025-03-15', '14:30')
];

// Додаємо користувачів до менеджера
usersData.forEach(user => userManager.addUser(user));

console.log(`✓ Створено ${userManager.getUserCount()} користувачів\n`);

// ============================================================================
// ЗАВДАННЯ 2.1: Користувачі за місяцем і часом
// ============================================================================

console.log('--- 2.1: Користувачі за місяцем та часом ---\n');

const targetMonth = 3; // Березень
const targetTime = '14:30';

console.log(`Шукаємо користувачів, які звернулись у березні (місяць ${targetMonth}) о ${targetTime}`);

const filteredUsers = userManager.getUsersByMonthAndTime(targetMonth, targetTime);

console.log(`\nЗнайдено користувачів: ${filteredUsers.length}\n`);

if (filteredUsers.length > 0) {
  filteredUsers.forEach((user, index) => {
    console.log(`${index + 1}. ${user.getFullName()}`);
    console.log(`   Email: ${user.email}`);
    console.log(`   Дата: ${user.date.toLocaleDateString('uk-UA')}, час: ${user.time}`);
    console.log(`   Мета: ${user.purpose}\n`);
  });
} else {
  console.log('Користувачі не знайдені за заданими критеріями.\n');
}

// ============================================================================
// ЗАВДАННЯ 2.2: Мінімальний вік
// ============================================================================

console.log('--- 2.2: Користувач з мінімальним віком ---\n');

const minAgeInfo = userManager.getMinAgeUserInfo();

if (minAgeInfo) {
  console.log(`Мінімальний вік: ${minAgeInfo.minAge} років`);
  console.log(`Email: ${minAgeInfo.email}`);
  console.log(`Дата звернення: ${minAgeInfo.date}`);
  console.log(`Повне ім'я: ${minAgeInfo.user.getFullName()}`);
} else {
  console.log('Користувачі відсутні.');
}

// ============================================================================
// ЗАВДАННЯ 2.3: Класифікація користувачів
// ============================================================================

console.log('\n--- 2.3: Класифікація користувачів ---\n');

const classification = userManager.classifyUsers();

console.log('Результати класифікації:\n');

console.log(`1. "Активна молодь" (вік < 25, мета: побажання):`);
console.log(`   Кількість: ${classification.activeYouth.count}`);
if (classification.activeYouth.users.length > 0) {
  classification.activeYouth.users.forEach(user => {
    console.log(`     - ${user.getFullName()}, ${user.age} років`);
  });
}

console.log(`\n2. "Похилий претензійний" (вік > 60, мета: претензія):`);
console.log(`   Кількість: ${classification.elderlyComplaint.count}`);
if (classification.elderlyComplaint.users.length > 0) {
  classification.elderlyComplaint.users.forEach(user => {
    console.log(`     - ${user.getFullName()}, ${user.age} років`);
  });
}

console.log(`\n3. "Середній без претензій" (25 ≤ вік ≤ 60, мета: не претензія):`);
console.log(`   Кількість: ${classification.middleNonComplaint.count}`);
if (classification.middleNonComplaint.users.length > 0) {
  classification.middleNonComplaint.users.forEach(user => {
    console.log(`     - ${user.getFullName()}, ${user.age} років, мета: ${user.purpose}`);
  });
}

console.log(`\n4. "Інші":`);
console.log(`   Кількість: ${classification.others.count}`);
if (classification.others.users.length > 0) {
  classification.others.users.forEach(user => {
    console.log(`     - ${user.getFullName()}, ${user.age} років, мета: ${user.purpose}`);
  });
}

// ============================================================================
// ЗАВДАННЯ 2.4: Сортування за email
// ============================================================================

console.log('\n--- 2.4: Сортування за email ---\n');

const sortedByEmail = userManager.sortByEmailAndDisplayPurpose();

console.log('Користувачі, відсортовані за email (алфавітний порядок):\n');

sortedByEmail.forEach((item, index) => {
  console.log(`${index + 1}. Email: ${item.email}`);
  console.log(`   Ім'я: ${item.fullName}`);
  console.log(`   Мета: ${item.purpose}\n`);
});

// ============================================================================
// ДОДАТКОВІ ТЕСТИ З МЕЖОВИМИ УМОВАМИ
// ============================================================================

console.log('\n--- ДОДАТКОВІ ТЕСТИ ---\n');

// Тест 1: Порожній масив
console.log('ТЕСТ 1: Робота з порожнім масивом');
const emptyManager = new UserManager();
console.log(`Кількість користувачів: ${emptyManager.getUserCount()}`);
const emptyResult = emptyManager.getMinAgeUserInfo();
console.log(`Результат пошуку мін. віку: ${emptyResult === null ? 'null (очікувано)' : 'помилка'}`);

// Тест 2: Один користувач
console.log('\nТЕСТ 2: Один користувач');
const singleManager = new UserManager();
singleManager.addUser(new User('Тест', 'Юзер', 30, 'test@test.com', 'питання', '2025-01-15', '12:00'));
console.log(`Кількість користувачів: ${singleManager.getUserCount()}`);
const singleClassification = singleManager.classifyUsers();
console.log(`Класифікація: середній без претензій - ${singleClassification.middleNonComplaint.count}`);

// Тест 3: Межові значення віку
console.log('\nТЕСТ 3: Межові значення віку (24, 25, 60, 61)');
const boundaryManager = new UserManager();
boundaryManager.addUser(new User('Юзер1', 'Тест', 24, 'user1@test.com', 'побажання', '2025-01-15', '12:00'));
boundaryManager.addUser(new User('Юзер2', 'Тест', 25, 'user2@test.com', 'побажання', '2025-01-15', '12:00'));
boundaryManager.addUser(new User('Юзер3', 'Тест', 60, 'user3@test.com', 'питання', '2025-01-15', '12:00'));
boundaryManager.addUser(new User('Юзер4', 'Тест', 61, 'user4@test.com', 'претензія', '2025-01-15', '12:00'));

const boundaryClass = boundaryManager.classifyUsers();
console.log(`Вік 24 (побажання) → Активна молодь: ${boundaryClass.activeYouth.count}`);
console.log(`Вік 25 (побажання) → Середній без претензій: ${boundaryClass.middleNonComplaint.count}`);
console.log(`Вік 60 (питання) → Середній без претензій: ${boundaryClass.middleNonComplaint.count}`);
console.log(`Вік 61 (претензія) → Похилий претензійний: ${boundaryClass.elderlyComplaint.count}`);

// ============================================================================
// ЗАВЕРШЕННЯ
// ============================================================================

console.log('\n=== ЛАБОРАТОРНА РОБОТА №3 ЗАВЕРШЕНА ===');
console.log('\nВикористані концепції:');
console.log('✓ Типи даних: Number, String, Boolean, Object, Date');
console.log('✓ Масиви та методи роботи з ними (sort, filter, map, reduce, every)');
console.log('✓ Цикли: for, while, do-while, for...in, for...of');
console.log('✓ Умовні конструкції: if-else, тернарний оператор');
console.log('✓ Функції: звичайні, стрілочні, методи класів');
console.log('✓ ООП: класи, конструктори, методи, інкапсуляція');
console.log('✓ Об\'єкти Date та Math');
console.log('✓ console.log() для виведення результатів');
