<template>
    <div>
        <div class="App">
           <h3 v-color="color"> App.vue组件</h3>
           <button @click="color='green'">改变 color 的值</button>
        </div>
        <hr>
        <div class="box">
        <!-- 渲染 Left 组件和 Right 组件 -->
        <!-- 3.以标签的形式，使用注册好的组件 -->
        <Left style="display: none;">
            <!-- v-slot 的简写形式是 #-->
            <template #default>
                <p>This is Left p text ! </p>
            </template>
        </Left>
        <Right style="display: none;"></Right>

        <Article>
            <template #title>
                <h3>Hello!</h3>
            </template>
                        <!-- 作用域插槽的解构赋值 -->
            <template #content="{ msg,user }">
                <div>
                    <h3>你不会以为 我不良人 没人了吧！</h3>
                    <h3>{{ msg }}</h3>
                    <h3>{{ user.name }}</h3>
                </div>
            </template>

            <template #footer>
                <h3>若森</h3>
            </template>
        </Article>

        </div>
    </div>
</template>

<script>
    //1.导入需要使用的.vue 组件
    import Left from '@/components/Left.vue'
    import Right from '@/components/Right.vue'
    import Article from '@/components/Article.vue'

    export default{
        //2.注册组件
        components:{
            Left,
            Right,
            Article
        },
        data(){
            return {
                color:'blue'
            }
        },
        // 定义私有自定义属性的指令
        directives:{
            // 定义一个指令，指向一个配置对象
            // color:{
            // //当指令第一次被绑到元素上时，会立即触发 bind 函数
            // //el 表示的当前指令所绑定到的 DOM 对象     
            //     bind(el,binding){
            //         console.log("触发了！")
            //         el.style.color= binding.value // value 值，配合 binding 使用
            //     },
            //     // 在 DOM 更新的时候，会触发 update 函数，因为 bind 指令只在第一次绑定时触发
            //     // 两个指令都要有
            //     update(el,binding){
            //         console.log("触发了！")
            //         el.style.color= binding.value // value 值，配合 binding 使用
            //     }
            // }
            // bind 函数和 update 函数逻辑相同的时候，可以使用简写形式
            color(el,binding){
                el.style.color=binding.value
            }
        }
    }
</script>

<style lang="less">
    .App{
        padding: 1px 20px 20px;
        background-color: aqua;
    }
    /* .box{
        padding: 100px 30px 30px;
        background-color:brown;
    } */
</style>

