<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'clear-button'
}
</script>

<style scoped>
    .btn {
        cursor: pointer;
        background: none;
        border: none;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
    }

</style>