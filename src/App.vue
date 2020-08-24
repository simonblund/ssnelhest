<template>
  <div id="app">
    <Header/>
    <BirthdaySex/>
    <SSNSection/>
  </div>
</template>

<script>
import BirthdaySex from './components/BirthdaySex.vue';
import Header from './components/Header.vue';
import SSNSection from './components/SSNSection.vue';

export default {
  name: 'App',
  components: {
    BirthdaySex,
    Header,
    SSNSection,
  },
};
</script>

<style lang="scss">

</style>
