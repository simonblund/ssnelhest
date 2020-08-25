<template>
  <div class="columns is-multiline is-1-mobile is-6-desktop is-8-widescreen mt-4 mb-4">
    <div class="container">
      <div class="field">
        <div class="control">
          <input class="input is-large is-primary" type="date" v-model="dateOfBirth">
        </div>
      </div>

      <div class="control">
        <label class="radio">
          <input class=" is-large" type="radio" name="sex" value="N" v-model="sex">
          I don't care
        </label>
        <label class="radio">
          <input class=" is-large" type="radio" name="sex" value="male" v-model="sex">
          Male
        </label>
        <label class="radio">
            <input class=" is-large" type="radio" name="sex" value="female" v-model="sex">
            Female
          </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BirthdaySex',
  computed: {
    sex: {
      get() {
        return this.$store.state.sex;
      },
      set(value) {
        this.$store.commit('changeSex', value);
      },
    },
    dateOfBirth: {
      get() {
        return this.$store.state.dateOfBirth;
      },
      set(value) {
        this.$store.commit('setDate', value);
      },
    },
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
