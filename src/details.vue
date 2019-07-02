
<template>
<div class="details">
        <router-link to="/">Home</router-link>
        <div class="header"><span>{{movieDetails.name}}</span>({{
        movieDetails.premiered}})
        </div>

        <div class="rate">
          {{movieDetails.rating.average}}
          <span> ⭐️ </span>
        </div>

        <img :src="movieDetails.image.medium" />
        <div class="summary">{{movieDetails.summary.replace(/(<([^>]+)>)/gi, "")}}</div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("LoadMovieDetails", {
      movieId: this.$route.params.id
    });
  },
  computed: {
    ...mapState(["movieDetails"])
  }
};
</script>

<style lang="scss" scoped>
.details {
  .header {
    font-size: 20px;
    margin-top: 50px;
    color:white;
  }
  .rate {
    color: #e74c3c;
    margin: 15px;
  }

  .summary {
    margin-top: 25px;
    color:white;
  }
}
</style>