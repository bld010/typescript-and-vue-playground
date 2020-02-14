<template>
  <div class="list">
    <h1>List</h1>
    <ul>
      <li v-for="note in this.notes" v-bind:key="note.index">
        {{ note }}
        | <button v-on:click.prevent="deleteNote(note)">x</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Day from "../day";

@Component
export default class EntryList extends Vue {
  @Prop() private notes!: Day[];
  private deleteNote(day: Day) {
    this.$emit("deleteNote", day);
    console.log(day.note + " will be deleted");
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
  padding: 10px;
}
li {
  display: block;
  margin: 10px 10px;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 2px gray;
}
a {
  color: #42b983;
}
.list {
  background-color: #b5eed4;
  padding: 30px;
  margin: 20px 0px;
  border-radius: 5px;
}
</style>
