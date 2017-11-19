<template>
  <div id="admin">
    <div id="signContainer" v-if="user === null">
      <form id="signForm" @submit="signIn">
        <input type="email" placeholder="email" ref="email">
        <input type="password" placeholder="password" ref="password">
        <input type="submit" value="Sign In">
      </form>
    </div>
    <template v-else-if="user">
      <header>
        <h3 id="pageTitle">Admin panel</h3>
        <div style="flex: 1"></div>
        <span id="userEmail">{{ user }}</span>
        <button @click="signOut">Sign Out</button>
      </header>
      <nav>
        <router-link to="/admin?section=components" :class="{ 'router-link-exact-active': section === 'components' }">Components</router-link>
        <router-link to="/admin?section=builds">Builds</router-link>
      </nav>
      <main>
        <admin-components v-if="section == 'components'" :components="components"></admin-components>
      </main>
    </template>
  </div>
</template>

<script>
import AdminComponents from "@/components/AdminComponents";
import AuthService from "@/services/AuthService";
import ComponentsService from "@/services/ComponentsService";
export default {
  components: {
    'admin-components': AdminComponents
  },
  name: 'admin',
  data() {
    return {
      user: undefined,
      components: []
    };
  },
  created() {
    this.checkUser();
    this.fetchComponents();
  },
  computed: {
    section() {
      return this.$route.query.section || 'components';
    }
  },
  methods: {
    checkUser() {
      this.user = AuthService.checkUser();
    },
    async signIn(e) {
      e.preventDefault();
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      try {
        this.user = await AuthService.signIn(email, password);
      } catch (err) {
        console.error(err.message);
      }
    },
    async signOut() {
      this.user = await AuthService.signOut();
    },
    async fetchComponents() {
      const responce = await ComponentsService.fetchComponents();
      this.components = responce.data;
    }
  }
};
</script>


<style scoped>
#signContainer {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 60px;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(#66abff,#addaff);
}
#signForm {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  background-color: #fff;
  border: 1px lightgray solid;
  border-radius: 4px;
}
#signForm *:not(:last-child) {
  margin-bottom: 16px;
}
header {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #210056;
  border-bottom: 1px lightgray solid;
}
#pageTitle {
  margin: 0 24px;
  color: white;
  letter-spacing: 2px;
}
#userEmail {
  margin-right: 16px;
  color: white;
  font-size: 14px;
}
main {
  padding: 36px;
}
nav {
  display: flex;
  justify-content: center;
}
nav a {
  margin: 16px 16px 0;
  text-transform: uppercase;
  text-decoration: none;
  color: initial;
}
.router-link-exact-active {
  font-weight: bold;
  color: #210056;
}
.router-link-exact-active::after {
  content: '';
  display: block;
  margin-top: 12px;
  height: 2px;
  background-color: #210056;
}
</style>


