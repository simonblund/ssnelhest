<template>
  <div id="app">
    <Header/>
    <BirthdaySex :date="defaultDate" :sex="sex"/>
    <SSNSection />
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
    const sex = 'N';
    defaultDate.setFullYear(defaultDate.getFullYear() - 70);
    defaultDate = defaultDate.toISOString().substring(0, 10);
    console.log(defaultDate);
    return {
      defaultDate,
      sex,
    };
  },
};
</script>

<style lang="scss">

</style>
