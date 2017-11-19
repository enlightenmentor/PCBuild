<template>
  <div id="components">
    <table>
      <tr>
        <th v-for="field in componentFields">{{ field }}</th>
      </tr>
      <tr v-for="(component, field) in components">
        <td v-for="value in components[field]">{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'admin-components',
  props: {
    components: Array
  },
  computed: {
    componentFields() {
      return this.components[0] ? Object.keys(this.components[0]) : [];
    }
  },
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th {
  padding: 8px 12px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
td {
  padding: 8px 12px;
  border-bottom: 1px solid black;
  font-size: 12px;
}
</style>