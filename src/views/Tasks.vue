<template>
    <div id="tasks">
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
    // 네임드 뷰 
    name: 'tasks',
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter
    }
}
</script>

<style>

</style>
