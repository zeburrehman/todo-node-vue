<template>
  <div>
    <AddTodo :refreshData="refreshData" />
    <ul v-for="task in tasks" :key="task.id">
      <li>{{ task.description }}</li>
    </ul>
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
export default {
  components: {
    AddTodo,
  },
  data: function () {
    return {
      tasks: [],
    };
  },
  created: async function () {
    await this.refreshData();
  },
  methods: {
    refreshData: async function () {
      let response = await fetch("http://localhost:4000/todos");
      let data = await response.json();
      this.tasks = await data.todos;
    },
  },
};
</script>

<style>
</style>