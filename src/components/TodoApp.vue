<template>
    <div>
        <div 
        v-for="todo in todos"
        :key="todo.id"
        data-test="todo"
        :class="todo.completed ? 'completed' : 'uncompleted'"
        >
            {{ todo.text }}
            <input type="checkbox" data-test="todo-checkbox" v-model="todo.completed">
        </div>
        <form data-test="form" @submit.prevent="CreateTodo">
            <input type="text" data-test="new-todo" v-model="newTodo">
        </form>
    </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data(){
    return {
        newTodo: "",
        todos: [
            {
                id: 1,
                text: "Learn vue testing",
                completed: false
            },
            {
                id: 2,
                text: "Lets play rocket league",
                completed: false    
            },
        ]
    }
  },

  methods: {
    CreateTodo(){
        this.todos.push({
            id: 3,
            text: this.newTodo,
            completed: false
        })
        this.newTodo = ""
    }
  }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>