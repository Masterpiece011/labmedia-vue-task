<template>
  <input class="input" type="text" @input="updateInput" :value="modelValue">
</template>

<script>
export default {
    name: 'search-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
    .input {
        padding: 9px 31px;
        width: 100%;
        outline: none;
        background: #ECEFF0;
        border: none;
        border-radius: 4px;
    }

    .input::placeholder {
        color: var(--text-color);
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
    }
</style>