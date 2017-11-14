<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="loginState === false">
      <button type="button" class="btn btn-primary"><a href="/#/login">Sign In</a></button>
    </div>
    <div v-if="loginState === true">
      <button type="button" class="btn btn-primary" @click.prevent="signOut()"><a href="/">Sign Out</a></button>
      <main-content :todo_list="todo_list"></main-content>
    </div>
  </div>
</template>

<script>
import MainContent from '@/components/MainContent'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    MainContent
  },
  name: 'Home',
  data () {
    return {
      msg: 'Todo Apps Fancy',
      loginState: false
    }
  },
  computed: {
    ...mapState(['todo_list'])
  },
  methods: {
    ...mapActions(['getAllTodos']),
    signOut: function () {
      localStorage.removeItem('token')
    }
  },
  created () {
    this.getAllTodos()
    if (localStorage.getItem('token') === null) {
      this.loginState = false
    } else {
      this.loginState = true
    }
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
