<template>
    <div>
        <h4>Left 组件</h4>
        <MyCount :init="6"></MyCount>
    </div>
</template>

<script>
export default{}
</script>

<style lang="less" scoped>
    
    
    div/deep/ h5 {
        color: red;
    }
</style>