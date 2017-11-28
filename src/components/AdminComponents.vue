<template>
  <div id="components">
    <div>
      <form @submit="addComponent" id="addForm">
        <label>Add component: </label><br>
        <input type="text" placeholder="rId" ref="addRId">
        <input type="submit" value="Add">
      </form>
      <table>
        <tr v-for="component in components">
          <td class="title">
            <router-link :to="'/admin/components/'+component._id">{{ component.title }}</router-link>
          </td>
          <td class="status">
            <span :class="{ 'available': component.available }">{{ component.available | filterStatus }}</span>
          </td>
          <td class="price">{{ component.price }} UAH</td>
          <td><button @click="removeComponent(component._id)">x</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import BuildService from "@/services/BuildService";

export default {
  name: 'admin-components',
  mounted() {
    if (this.user)
      this.fetchComponents(this.userToken);
  },
  computed: {
    userToken() {
      return this.$store.state.user.token;
    },
    components() {
      return this.$store.state.components;
    }
  },
  methods: {
    async fetchComponents(token) {
      const responce = await BuildService.fetchComponents(token);
      this.$store.commit('setComponents', responce.data);
    },
    async addComponent(e) {
      e.preventDefault();
      const rId = this.$refs.addRId.value;
      const responce = await BuildService.addComponent(rId, this.userToken);
      if (responce.data.success)
        this.$store.commit('addComponent', responce.data.component);
    },
    async removeComponent(_id) {
      const responce = await BuildService.deleteComponent(_id, this.userToken);
      if (responce.data.success)
        this.$store.commit('removeComponent', _id);
    }
  },
  filters: {
    filterStatus(bool) {
      return bool ? 'available' : 'out of stock';
    }
  }
}
</script>

<style scoped>
#components {
  display: flex;
  justify-content: center;
}
#addForm {
  margin-bottom: 24px;
}
td {
  padding: 8px 12px 8px 0;
  font-size: 12px;
}
.status,
.price {
  min-width: 80px;
  text-align: center;
}
.status span {
  background-color: red;
  color: white;
  padding: 1px 4px;
  border-radius: 3px;
}
.status span.available {
  background-color: green;
}
.price {
  font-size: 14px;
  font-weight: bold;
}
</style>