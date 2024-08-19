<template>
    <ul class="pagination-list">
        <slot></slot>
    </ul>
</template>

<script>
import PaginationItem from './UI/PaginationItem.vue'

export default {
    name: 'pagination-container',
    components: {
        PaginationItem
    },
    props: {
        pages: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
    .pagination-list {
        list-style: none;
        display: flex;
        flex-direction: row;
        padding: 20px;
        background: #fff;
        border-radius: 10px;
        border: 1px solid #c6c6c6;
    }
</style>