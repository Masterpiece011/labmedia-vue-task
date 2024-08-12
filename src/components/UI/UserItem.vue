<template>
    <tr class="table-row">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.registration_date}}</td>
        <td>{{user.rating}}</td>
        <td>
            <button @click="showDialog" class="table-btn">
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
            this.$emit('update:show', true)
        }
    }
}
</script>

<style scoped>
    
    .table-row td {
        padding-top: 14px;
        width: 247px;
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: var(--text-color);
    }

    .table-row td:first-child {
        color: var(--table-username-color);
    }

    .table-row td:last-child  .table-btn {
        float: right;
    }

    .table-btn {
        background: none;
        border: none;
        cursor: pointer;
    }


</style>