<template>
  <div class="home">
    <Nav/>
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoApp />
    <Parent/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoApp from '@/components/TodoApp.vue'
import Nav from '@/components/Nav.vue'
import Parent from '@/components/Parent.vue'



export default {
  name: 'HomeView',
  components: {
    TodoApp,
    Nav,
    Parent
  }
}
</script>
