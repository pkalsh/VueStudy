<template>
    <div id="editor">
        <TodoHeader></TodoHeader>
        <section>
            <!-- 컴포넌트에는 자체 범위가 분리되어있기 때문에 컴포넌트에 데이터를 자동으로 전달하지는 않습니다. -->
            <!-- 반복할 데이터를 컴포넌트로 전달하려면 props도 사용해야합니다. -->
            <content-box v-for="todoItem in this.storedTodoItems"  :propsdata="todoItem.item" :key="todoItem.item"></content-box>
        </section>
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import ContentBox from '@/components/ContentBox.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'editor',
    components: {
        TodoHeader,
        'content-box': ContentBox
    },
    computed: {
      ...mapGetters(['storedTodoItems'])
      // getters의 메소드 이름과 computed에 명명하는 이름을 달리하고 싶을 때
      // ...mapGetters({
      //   todoItems: 'storedTodoItems'
      // })
    }
}
</script>

<style>

</style>
