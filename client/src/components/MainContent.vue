<template>
  <div>
    <table>
      <tr>
        <th>Do It</th>
        <th>Status</th>
        <th>Task</th>
        <th>Remove</th>
      </tr>
      <tr v-for="task in todo_list" :key="task._id">
        <td><button>Finish</button></td>
        <td>{{ task.isfinished }}</td>
        <td>{{ task.todo_name }}</td>
        <td><button>Remove</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['todo_list'],
  data () {
    return {
    }
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
