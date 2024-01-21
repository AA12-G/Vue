<template>
    <div>
        <h4>Left 组件</h4>

        <!-- 声明一个插槽 -->
        <!-- vue 官方规定：每一个 slot 插槽都要有一个 name名称-->
        <!-- 如果省略了 slot 插槽的 name 属性，则有一个默认名称叫做 default-->
        <slot name="default">
            <h6>这是 default 插槽的后备内容</h6>
        </slot>
    </div>
</template>

<script>
export default{}
</script>

<style lang="less" scoped>
    
    
</style>