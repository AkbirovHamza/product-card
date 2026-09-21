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
      const ussData = JSON.stringify(usersData);
      localStorage.setItem('users', ussData);
    } else {
        usersData  = JSON.parse(users);
      }
    massageContainer.textContent = '';
    usersContainer.innerHTML = '';

    usersData.forEach(item => {
      const userElement = document.createElement('div');
      const deleteUserBtn = document.createElement('button');
      deleteUserBtn.textContent = 'Удалить';

      deleteUserBtn.addEventListener('click', () => {
        const newUsers = usersData.filter(user => user.id !== item.id);  
        const usersJson  = JSON.stringify(newUsers);
        localStorage.setItem('users', usersJson);
        userElement.remove();
      });

      deleteUserBtn.classList.add('deleteUserBtn');
      userElement.classList.add('user-card');
      userElement.textContent = `${item.id}, ${item.name}, ${item.surname}, ${item.email}, ${item.age}`;
      usersContainer.append(userElement);
      userElement.append(deleteUserBtn);
    });


  } catch (error) {
      massageContainer.textContent = 'Ошибка при загрузке данных';
  }
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


                        
