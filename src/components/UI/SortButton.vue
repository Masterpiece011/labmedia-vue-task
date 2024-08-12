<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'sort-button'
}
</script>

<style scoped>
    .btn {
        background: none;
        border: none;
        border-bottom: 2px dashed transparent;
        transition: all .3s ease;
        color: var(--text-color);
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        cursor: pointer;
    }

    .btn:hover {
        border-bottom: 2px dashed var(--btn-active-color);
        color: var(--btn-active-color);
    }
</style>