<template>
  <div id="admin">
    <header>
      <h3 id="pageTitle">Admin panel</h3>
      <div style="flex: 1"></div>
      <span id="userEmail">{{ user.email }}</span>
      <button @click="signOut">Sign Out</button>
    </header>
    <nav>
      <router-link to="/admin/components">Components</router-link>
      <router-link to="/admin/builds">Builds</router-link>
    </nav>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: 'admin',
  created() {
    if (this.$route.path === '/admin' && this.user)
      this.$router.replace('/admin/components');
    else if (!this.user)
      this.$router.replace('/sign-in');
    this.checkUser();
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async checkUser() {
      const user = await AuthService.checkUser();
      this.$store.commit('setUser', user);
    },
    async signOut() {
      await AuthService.signOut();
      this.$store.commit('setUser', null);
      this.$store.commit('setComponents', []);
      this.$router.push('/sign-in');
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
.router-link-active {
  font-weight: bold;
  color: #210056;
}
.router-link-active::after {
  content: '';
  display: block;
  margin-top: 12px;
  height: 2px;
  background-color: #210056;
}
</style>
