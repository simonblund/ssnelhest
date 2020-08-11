<template>
  <div id="app">
    <Header/>
    <BirthdaySex :date="defaultDate" :sex="sex"/>
    <SSNSection :birthdate="defaultDate" :sex="sex"/>
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
  data() {
    let defaultDate = new Date();
    const sex = 'male';
    console.log('app', sex);
    defaultDate.setFullYear(defaultDate.getFullYear() - 70);
    defaultDate = defaultDate.toISOString().substring(0, 10);
    return {
      defaultDate,
      sex,
    };
  },
};
</script>

<style lang="scss">

</style>
