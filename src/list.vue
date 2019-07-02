<template>
  <div class="list">
    
      <li v-for="(movie,index) in movies" :key="index">
        <router-link class="navLink" :to="'/' + movie.show.id">
        <img width="80" height="80" :src="movie.show.image.medium" alt="el.show.name">
        <span class="spanForName">{{movie.show.name}}</span>
        </router-link>
      </li>
     <router-view/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "List",
  mounted() {
    this.$store.dispatch("LoadMovies");
  },
  computed: {
    ...mapState(["movies"])
  }
};
</script>

<style lang="scss" scoped>
.list {
  li {
    display: flex;
    font-size: 14px;
    text-decoration: none;
    list-style: none;
    margin: 30px;
  }

  .spanForName {
    margin-left: 20px;
    font-size: 16px;
  }

   .navLink {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 50x;
    text-decoration: none;
    color: #7f8c8d;
    padding: 10px;
    margin: 10px;
    background-color: white;

    border-radius: 7px;

    &:hover {
      background-color: #7f8c8d;
      color: white;
    }
  }
}


</style>