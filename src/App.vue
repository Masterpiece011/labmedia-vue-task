<template>
  <div>
    <header class="header container">
      <h1>Список пользователей</h1>
      <div class="header__wrapper ">
        <div class="header__search">
          <img src="./assets/search-icon.svg" alt="search-icon">
          <search-input 
          placeholder="Поиск по имени или email" 
          v-model="searchQuery"
          />
        </div>
        <div class="header__clear">
          
          <clear-button class="header__clear-btn">
            <img src="./assets/clean-icon.svg" alt="clean-icon">
            Очистить фильтр
          </clear-button>
        </div>
      </div>
    </header>
    <main class="main container">
      <div class="main__sort">
        <p>Сортировка:</p>
        <sort-button class="main__sort-btn">Дата регистрации</sort-button>
        <sort-button class="main__sort-btn">Рейтинг</sort-button>
      </div>
      <users-table :users="searchedUsers" v-model:show="dialogVisible" @show="showDialog" @remove="removeUser"></users-table>
    </main>
    <footer class="footer">
      <remove-dialog v-model:show="dialogVisible" @remove="removeUser"></remove-dialog>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios';
  import ClearButton from './components/UI/ClearButton.vue';
  import RemoveDialog from './components/UI/RemoveDialog.vue';
  import SearchInput from './components/UI/SearchInput.vue';
  import SortButton from './components/UI/SortButton.vue';
  import UsersTable from './components/UsersTable.vue';
  export default {
    data() {
      return {
        dialogVisible: false,
        users: [],
        filteredUsers: [],
        page: 0,
        limit: 5,
        isUsersLoading: false,
        totalPages: 0, 
        searchQuery: '',
      }
    },
    components: {
      UsersTable,
      SearchInput,
      ClearButton,
      SortButton,
      RemoveDialog
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
          this.users = response.data
          
          console.log(response.data);
        } catch (error) {
          console.log('Error fetching users', error);
        }
      },
      removeUser(user) {
        this.users = this.users.filter(u => u.id !== user.id)
      },
      showDialog() {
        this.dialogVisible = true
      }
      
    },
    computed: {
      sortedUsers() {
        return [...this.users].sort((user1, user2) => user1.username?.localeCompare(user2.username))
      },
      sortedAndSearchedUsers() {
        return this.sortedUsers.filter(user => user.username.toLowerCase().includes(this.searchQuery.toLowerCase()))
      },
      searchedUsers() {
        return this.users.filter(user => user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) || user.email.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    mounted() {
      this.fetchUsers()
      this.users.forEach(user => {
        user.registration_date = Intl.DateTimeFormat('ru-RU').format(user.registration_date)
        console.log(user);
      })
    },
  }
</script>

<style>
  .header h1 {
    margin-bottom: 20px;
    margin-top: 12px;
    
  }

  .header__wrapper {
    padding: 12px 16px 16px;
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
  }

  .header__search {
    position: relative;
    margin-bottom: 24px;
  }

  .header__search img {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 3px;
    top: 5px;
  }

  .header__clear {
    display: flex;
    align-self: flex-start;
  }

  .header__clear img {
    height: 16px;
    width: 16px;
    margin-right: 3px;
  }

  .header__clear-btn {
    display: flex;
    align-items: center;
    transition: all .2s ease;
  }
  .header__clear-btn:hover {
    opacity: 0.7;
  }

  .main {
    padding: 72px 0;
  }

  .main__sort {
    display: flex;
    align-items: first baseline;
    margin-bottom: 15px;
  }

  .main__sort p {
    color: var(--text-color);
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
  }

  .main__sort-btn {
    margin-left: 8px;
  }

</style>
