<template>
  <div>
    <input type="text" v-model="description" />
    <button @click="AddTodo">Add Todo</button>
  </div>
</template>

<script>
export default {
  props: [
    'refreshData'
  ],
  data: function(){
    return {
      description: ""
    }
  },
  methods: {
    AddTodo: async function() {
      await fetch("http://localhost:4000/todos", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ description: this.description, date: Date.now() }) // body data type must match "Content-Type" header
      }).catch((error) => {
        console.log(error.message, error);
      });
      this.description = "";
      this.refreshData();
    }
  }
}
</script>

<style>
</style>