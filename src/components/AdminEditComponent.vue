<template>
  <div id="editComponent">
    <form @submit="editComponent">
      <div>
        <label>Title: </label>
        <input type="text" :value="component.title">
      </div>
      <div>
        <label>Type: </label>
        <input type="text" :value="component.type">
      </div>
      <div>
        <label>Producer: </label>
        <input type="text" :value="component.producer">
      </div>
      <div class="status">
        <label>Available: </label>
        <span :class="{ 'available': component.available }">{{ component.available | filterStatus }}</span>
      </div>
      <div>
        <label>Price: </label>
        <span>{{ component.price }} UAH</span>
      </div>
      <div>
        <label>Description: </label>
        <textarea :value="component.description"></textarea>
      </div>
      <div>
        <label>_id: </label>
        <span>{{ component._id }}</span>
      </div>
      <div>
        <label>rId: </label>
        <span>{{ component.rId }}</span>
      </div>
      <input type="submit" value="Save Changes">
    </form>
  </div>
</template>

<script>
import BuildService from "@/services/BuildService";

export default {
  name: 'admin-edit-component',
  computed: {
    userToken() {
      return this.$store.state.user.token;
    },
    component() {
      return this.$store.getters.getComponent(this.$route.params._id);
    }
  },
  methods: {
    async editComponent(e) {
      e.preventDefault();
      const editedComp = {};
      const responce = await BuildService.editComponent(editedComp, this.userToken);
    }
  },
  filters: {
    filterStatus(bool) {
      return bool ? 'yes' : 'no';
    }
  }
}
</script>

<style scoped>
form div {
  display: flex;
  margin-bottom: 16px;
}
label {
  display: inline-flex;
  align-items: center;
  width: 120px;
  font-weight: bold;
}
input,
textarea {
  flex: 1;
}
textarea {
  resize: vertical;
  height: 100px;
}
.status span {
  background-color: red;
  color: white;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 13px;
}
.status span.available {
  background-color: green;
}
input[type="submit"] {
  margin-top: 24px;
}
</style>
