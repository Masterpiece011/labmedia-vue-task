<template>
  <div>
    <remove-dialog 
      v-model:show="dialogVisible" 
      @remove="removeUser(userIdForDelete)"
      :userId="Number(userIdForDelete)"
    />

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
          <clear-button 
          class="header__clear-btn"
          @click="clearFilter"
          >
            <img src="./assets/clean-icon.svg" alt="clean-icon">
            Очистить фильтр
          </clear-button>
        </div>
      </div>
    </header>

    <main class="main container">
      <div class="main__sort">
        <p>Сортировка:</p>
        <sort-button 
        class="main__sort-btn"
        @click="sortByDate"
        :class="{ active: sortBy === 'date' }"
        >
          Дата регистрации
        </sort-button>
        <sort-button 
        class="main__sort-btn"
        @click="sortByRating"
        :class="{ active: sortBy === 'rating' }"
        >
          Рейтинг
        </sort-button>
      </div>

      <users-table 
        @change-user="changeUserForDelete"
        @show="showDialog"
        class="main__users-table"
        :users="curUsers" 
        v-model:show="dialogVisible" 
        :userRemoveId="userIdForDelete"
        :searchQuery="searchQuery"
      />

      <pagination-container 
      v-show="totalPages > 0"
      class="main__pagination-container"
      :pages="totalPages"
      >
        <pagination-item 
          class="main__pagination-item"
          v-for="pageNumber in totalPages" 
          :page="pageNumber" 
          :key="pageNumber"
          :class="{
            'current-page': currentPage === pageNumber
          }"
          @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </pagination-item>
      </pagination-container>

    </main>

    <footer class="footer">
      
    </footer>
  </div>
</template>

<script>
  import axios from 'axios'

  import ClearButton from './components/UI/ClearButton.vue'
  import RemoveDialog from './components/UI/RemoveDialog.vue'
  import SearchInput from './components/UI/SearchInput.vue'
  import SortButton from './components/UI/SortButton.vue'
  import UsersTable from './components/UsersTable.vue'
  import PaginationContainer from './components/PaginationContainer.vue'
  import PaginationItem from './components/UI/PaginationItem.vue'


  export default {
  data() {
    return {
      dialogVisible: false,
      users: [],
      originalUsers: [],
      currentPage: 0,
      usersPerPage: 5,
      isUsersLoading: false,
      searchQuery: '',
      userIdForDelete: 0,
      currentPage: 1,
      sortBy: '',
      sortOrder: '' 
    }
  },
  components: {
    UsersTable,
    SearchInput,
    ClearButton,
    SortButton,
    RemoveDialog,
    PaginationContainer,
    PaginationItem
  },
  methods: {
    async fetchUsers() {
      this.isUsersLoading = true;
      try {
        const response = await axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
        this.users = response.data.map(user => ({
          ...user,
          originalDate: new Date(user.registration_date), 
          registration_date: Intl.DateTimeFormat('ru-RU').format(new Date(user.registration_date))
        }));
        this.originalUsers = [...this.users]
      } catch (error) {
        console.log('Error fetching users', error)
      } finally {
        this.isUsersLoading = false;
      }
    },
    changeUserForDelete(id) {
      this.userIdForDelete = id
    },
    removeUser(removingUserId) {
      this.originalUsers = this.originalUsers.filter(u => u.id !== removingUserId)
      this.users = this.users.filter(u => u.id !== removingUserId)
      this.dialogVisible = false
      if (this.currentPage > this.totalPages) {
        this.currentPage -= 1
      }
    },
    showDialog() {
      this.dialogVisible = true
    },
    changePage(pageNumber) {
      this.currentPage = pageNumber
    },
    clearFilter() {
      this.searchQuery = ''
      this.users = [...this.originalUsers]
      this.sortBy = ''
      this.sortOrder = ''
      this.currentPage = 1;
    },
    sortByDate() {
      this.sortBy = 'date';
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
      this.users = this.sortedUsers
    },
    sortByRating() {
      this.sortBy = 'rating';
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
      this.users = this.sortedUsers
    },
  },
  computed: {
    curUsers() {
      const startIndex = (this.currentPage - 1) * this.usersPerPage
      const endIndex = startIndex + this.usersPerPage
      return this.sortedAndSearchedUsers.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.sortedAndSearchedUsers.length / this.usersPerPage)
    },
    sortedUsers() {
      if (!this.sortBy) {
        return this.users
      }

      return [...this.users].sort((user1, user2) => {
        let compareValue = 0

        if (this.sortBy === 'date') {
          compareValue = new Date(user1.originalDate) - new Date(user2.originalDate)
        } else if (this.sortBy === 'rating') {
          compareValue = user1.rating - user2.rating
        }

        return this.sortOrder === 'asc' ? compareValue : -compareValue
      })
    },
    sortedAndSearchedUsers() {
      return this.sortedUsers.filter(user =>
        user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  mounted() {
    this.fetchUsers()
  }
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
    font-family: "Inter", sans-serif;
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
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }

  .header__clear-btn:hover {
    opacity: 0.7;
  }

  .main {
    padding: 72px 0;
    display: flex;
    flex-direction: column;
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

  .main__users-table {
    margin-bottom: 30px;
  }

  .main__pagination-container {
    align-self: center;
  }

  .main__pagination-item {
    margin-right: 10px;
  }

  .main__pagination-item:last-child {
    margin-right: 0;
  }

  .current-page {
    background: #000;
    color: #fff;
  }

</style>
