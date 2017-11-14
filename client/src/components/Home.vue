<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container" v-for="list in todo_list" :key="list._id">
      {{list.todo_name}}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Todo Apps Fancy',
      todo: ['lalala', 'yeyeyeye']
    }
  },
  computed: {
    ...mapState(['todo_list'])
  },
  methods: {
    ...mapActions(['getAllTodos'])
  },
  created () {
    this.getAllTodos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
