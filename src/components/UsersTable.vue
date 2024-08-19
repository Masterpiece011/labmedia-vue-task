<template>
    <table class="table">
        <thead>
            <tr class="table-heading">
                <th>Имя пользователя</th>
                <th>E-mail</th>
                <th>Дата регистрации</th>
                <th>Рейтинг</th>
                <th></th>
            </tr>
        </thead>
        <tbody v-if="users.length > 0" >
            <user-item 
            class="table-row"
            v-for="user in users" 
            :key="user.id" 
            :user="user" 
            :show="show" 
            @show="$emit('show', true)"
            @change-user="$emit('change-user', user.id)"
            />
        </tbody>
        <div v-else class="message">
            {{ message }}
        </div>
    </table>
</template>

<script>
import UserItem from './UI/UserItem.vue';

export default {
    name: 'users-table',
    components: {
        UserItem
    },
    props: {
        users: {
            type: Array,
            required: true
        },
        show: {
            type: Boolean
        },
        searchQuery: {
            type: String
        }
    },
    computed: {
        message() {
            if (this.users.length === 0) {
                if (this.searchQuery) {
                    return `Пользователь по запросу "${this.searchQuery}" не найден`;
                } else {
                    return 'Пользователи загружаются...';
                }
            }
            return '';
        }
    }
}
</script>

<style scoped>
    .table {
        width: 100%;
        height: 331px;
        background: var(--dialog-bkg);
        padding: 0 16px;
        border-radius: 10px;
        box-shadow: var(--box-shadow);
    }

    .table-row,
    .table-heading {
        padding: 14px 0 22px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--body-bkg);
    }

    .table-heading {
        padding: 16px 0 22px;
    }

    .table tr th,
    .table tr td {
        text-align: left;
        width: 200px;
    }
    .table-heading th {
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        color: var(--text-color);
        height: 16px;
    }

    .table-heading th:last-child {
        width: 30px;
    }

    .table tr:last-child {
        border-bottom: none;
    }

    .message {
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        padding-top: 14px;
        color: var(--text-color);
    }

</style>