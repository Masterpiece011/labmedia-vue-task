<template>
    <li class="page-item">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'pagination-item',
    props: {
        pageNumber: {
            type: Number
        }
    }
}
</script>

<style>
    .page-item {
        border: 1px solid #cdcdcd;
        border-radius: 8px;
        padding: 10px 14px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all .2s ease;
        background: #fff;
        color: #000;
    }

    .page-item:hover {
        background: #000;
        color: #fff;
    }

</style>