<template>
    <div v-if="show" class="dialog-wrapper">
        <div class="dialog-content">
            <p>Вы уверены, что хотите удалить пользователя?</p>
            <div class="btns">
                <button class="btn" @click="removeUser">Да</button>
                <button class="btn" @click="hideDialog">Нет</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'remove-dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        userId: {
            type: Number
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        },
        removeUser() {
            this.$emit('remove', this.userId)
            this.$emit('update:show', false)
        }
    }

}
</script>

<style scoped>
    .dialog-wrapper {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.2);
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dialog-content {
        padding: 36px 36px 32px;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
        background: var(--dialog-bkg);
        border-radius: 8px;
    }

    .dialog-content p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 24px;
    }

    .btns {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .btn {
        padding: 6px 36px;
        background: var(--table-username-color);
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: all .2s ease;
    }

    .btn:hover {
        opacity: 0.8;
    }

    .btn:first-child {
        color: #828282;
        background: var(--dialog-btn-bkg);
        margin-right: 36px;
    }
</style>