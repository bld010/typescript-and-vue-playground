<template>
  <div class="daily-input">
    <h1>Rate your day</h1>
    <ul>
      <li v-for="adjective in adjectives" v-bind:key="adjective.index">
        <button>{{ adjective }}</button>
      </li>
    </ul>
    <form>
      <input v-model="note" placeholder="Notes" />
      <button v-on:click.prevent="addNote">Add Note</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import adjectives from "../mocks";

@Component
export default class DailyInput extends Vue {
  @Prop() private msg!: string;
  private adjectives: string[] = adjectives;
  private note = "";
  private addNote() {
    this.$emit("updateList", this.note);
    this.note = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: black;
  padding: 5px;
}
a {
  color: #42b983;
}
.daily-input {
  background-color: #b799fd;
  color: white;
  border-radius: 5px;
  padding: 10px;
}
</style>