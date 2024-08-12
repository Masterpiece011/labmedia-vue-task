<template>
    <table class="table">
        <thead>
            <tr>
                <th>Имя пользователя</th>
                <th>E-mail</th>
                <th>Дата регистрации</th>
                <th>Рейтинг</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <user-item v-for="user in users" :key="user.id" :user="user" @remove="$emit('remove', user)" :show="show"></user-item>
        </tbody>
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
            type: Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
    .table {
        display: block;
    }
    .table tr {
        width: 100%;
        padding-top: 14px;
    }

    .table tr:first-child {
        padding-top: 16px;
    }

    .table tr th,
    .table tr td {
        width: 247px;
        text-align: left;
    }

    .table tr th {
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        color: var(--text-color);
    }

</style>