const massageContainer = document.getElementById('massageContainer');
const usersContainer = document.getElementById('usersContainer');

const getUsersBut = document.getElementById('getUsersBut');
const deleteAllUsersBut = document.getElementById('deleteAllUsersBut');


 
async function getUsers() {
  const users = localStorage.getItem('users');
  try {
      let usersData;


    if (users === null) {
      massageContainer.textContent = 'Данные загружаются...';
      const response = await fetch('./users.json');
      if (!response.ok) {
        throw new Error('Ошибка загрузки');
      }
      const data = await response.json();
      usersData = data.users;
      const usersJson = JSON.stringify(usersData);
      localStorage.setItem('users', usersJson);
    } else {
        usersData  = JSON.parse(users);
      }
    massageContainer.textContent = '';

    renderUsers(usersData);


  } catch (error) {
      massageContainer.textContent = 'Ошибка при загрузке данных';
  }
}


function renderUsers(usersData) {
  usersContainer.innerHTML = '';


    usersData.forEach(item => {
      const userElement = document.createElement('div');
      const deleteUserBtn = document.createElement('button');
      deleteUserBtn.textContent = 'Удалить';

      deleteUserBtn.addEventListener('click', () => {
        deleteUser(item.id);
        userElement.remove();
      });

      deleteUserBtn.classList.add('deleteUserBtn');
      userElement.classList.add('user-card');
      userElement.textContent = `${item.id}, ${item.name}, ${item.surname}, ${item.email}, ${item.age}`;
      usersContainer.append(userElement);
      userElement.append(deleteUserBtn);
    });
}

function deleteUser(id) {
  const users = localStorage.getItem('users');
  const usersData  = JSON.parse(users);
  const newUsers = usersData.filter(user => user.id !== id);
  const saveUserArray = JSON.stringify(newUsers);
  localStorage.setItem('users', saveUserArray);
}


// вызовы

getUsersBut.addEventListener('click', () => {
  if (usersContainer.children.length > 0) {
    massageContainer.textContent = 'Пользователи уже отображены';
  } else 
    getUsers();
  
})

deleteAllUsersBut.addEventListener('click', () => {
  localStorage.removeItem('users');
  usersContainer.innerHTML = '';
})


// вывов главной фукции                 
getUsers();

  