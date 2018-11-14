<template>
    <span class="badge">{{ num }}</span>
</template>

<script>
export default {
    props: {
        num: {
            type: [Number, String],
            default: 0
        }
    }
}
</script>

<style scoped>
    .badge {
        padding: 1px 4px;
        font-size: 14px;
        border-radius: 9px;
        color: #fe6311;
        border: 1px solid #fe6311;
    }
</style>
