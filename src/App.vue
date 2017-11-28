<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=cyrillic-ext');
body {
  margin: 0;
}
* {
  font-family: 'Roboto';
}
input[type='text'],
input[type='email'],
input[type='password'],
textarea {
  padding: 8px;
  border: 1px lightgray solid;
  border-radius: 2px;
}
button,
input[type='submit'] {
  padding: 8px 16px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #ddd;
  letter-spacing: 0.5px;
  border: 1px lightgray solid;
  border-radius: 2px;
  cursor: pointer;
}

button:active,
input[type='submit']:active {
  background-color: #ccc;
  outline: none;
}

button:focus,
input[type='submit']:focus {
  outline: none;
}
</style>
