<template>
 <div class="column tile is-parent is-2 has-background-info ml-4 has-text-white">
  <article class="tile is-child">
    <p class="title has-text-white">{{country.country}}</p>
  <div class="content ">
    <p>{{country.state}}</p>
    <h2>{{ssn}}</h2>
    <div class="tags has-addons">
      <span class="tag is-medium">Copy by pressing</span>
      <span class="tag is-medium is-primary"><b>{{country.copy}}</b></span>
    </div>
  </div>

  </article>

</div>

</template>

<script>
import generateSSN from '../services/SSNService';

export default {
  name: 'SSNTile',
  props: ['country'],
  created() {
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        window.addEventListener('keydown', (e) => {
          if (e.key === this.country.copy) {
            navigator.clipboard.writeText(this.ssn);
          }
        });
      }
    });
  },
  computed: {
    sex: {
      get() {
        return this.$store.state.sex;
      },
    },
    dateOfBirth: {
      get() {
        return this.$store.state.dateOfBirth;
      },
    },
    ssn: {
      get() {
        return generateSSN(this.country, this.sex, this.dateOfBirth);
      },
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.column{
  border-radius: 0.5em;
}
</style>
