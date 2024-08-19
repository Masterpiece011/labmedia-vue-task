<template>
    <tr class="table-row">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.registration_date}}</td>
        <td>{{user.rating}}</td>
        <td>
            <button class="table-btn"
            @click="changeUserId"
            >
                <img src="../../assets/remove-icon.svg" alt="remove-icon">
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'user-item',
    props: {
        user: {
            type: Object,
            required: true,
        },
        show: {
            type: Boolean,
        }
    },
    methods: {
        showDialog() {
            this.$emit('show', true)
        },
        changeUserId(user) {
            this.$emit('show', true)
            this.$emit('change-user', user.id)
        }
    }
}
</script>

<style scoped>

    .table-row td {
        width: 200px;
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: var(--text-color);
    }

    .table-row td:first-child {
        color: var(--table-username-color);
        font-weight: 700;
    }

    .table-row td:last-child {
        width: 30px;
    }

    .table-row td:last-child  .table-btn {
        float: right;
    }

    .table-btn {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>