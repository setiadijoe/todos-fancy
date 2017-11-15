<template>
  <div class="container">
      <h2>Adding Your TODO</h2>
        <form class="form">
            <input type="text" placeholder="adding your task" v-model="task.todo_name" required>
            <input class="btn btn-primary" type="button" value="Submit" v-on:click.prevent="writeNewTodo(task)">
        </form>
      </div><!--close modal class -->
    </div><!-- ckise modal div -->

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      task: {
        todo_name: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'writeNewTodo'
    ])
  }
}
</script>
