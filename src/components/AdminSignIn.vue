<template>
  <div id="signContainer">
    <form id="signForm" @submit="signIn">
      <input type="email" placeholder="email" ref="email">
      <input type="password" placeholder="password" ref="password">
      <input type="submit" value="Sign In">
    </form>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: 'admin-sign-in',
  methods: {
    async signIn(e) {
      e.preventDefault();
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      try {
        const user = await AuthService.signIn(email, password);
        this.$store.commit('setUser', user);
        this.$router.push('/admin/components');
      } catch (err) {
        console.error(err.message);
      }
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
</style>