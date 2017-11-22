<template>
  <div>
    <table>
      <tr>
        <th>Do It</th>
        <th>Status</th>
        <th>Task</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Remove</th>
      </tr>
      <tr v-for="task in todo_list" :key="task._id">
        <td><button style="btn btn-success" @click.prevent="finishTask(task)">Finish</button></td>
        <td>{{ task.isfinished }}</td>
        <td>{{ task.todo_name }}</td>
        <td>{{ task.createdAt }}</td>
        <td>{{ task.updatedAt }}</td>
        <td><button style="btn btn-danger" @click="removeTask(task)">Remove</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['todo_list'],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['finishTask', 'removeTask'])
  }
}
</script>

<style scoped>
table { width:100% }
tr:nth-child(even) { background:#f0f0f0; }
tr:before,tr:after { content:""; display:table-cell; }
th,td { width:300px; padding:0 10px; /* 960 */ line-height:3em; text-align:center; }
td:first-child { background:rgba(200,200,200,.15); text-align:left; }
</style>
