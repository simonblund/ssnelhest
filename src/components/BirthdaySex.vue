<template>
  <section class="section" id="birthdaysex">
    <div class="container">
      <div class="field">
        <div class="control">
          <input class="input is-large is-primary" type="date" v-model="_date">
        </div>
      </div>

      <div class="control">
        <label class="radio">
          <input class=" is-large" type="radio" name="sex" value="N" v-model="sex">
          I don't care
        </label>
        <label class="radio">
          <input class=" is-large" type="radio" name="sex" value="M" v-model="sex">
          Male
        </label>
        <label class="radio">
            <input class=" is-large" type="radio" name="sex" value="F" v-model="sex">
            Female
          </label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BirthdaySex',
  props: ['date', 'sex'],
  computed: {
    _date: {
      get() {
        return this.date;
      },
      set(newDate) {
        console.log(newDate);
        if (newDate.length === 10) {
          this.date = newDate;
        }
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
