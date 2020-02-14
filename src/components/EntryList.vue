<template>
  <div class="hello">
    <h1>List</h1>
    <p>
      <ul>
        <li v-for="note in this.notes" v-bind:key="note.index">
          {{note}}
          | <button v-on:click.prevent="deleteNote(note)">x</button>
        </li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EntryList extends Vue {
  @Prop() private notes!: string[];
  private deleteNote(note: string) {
    this.$emit ("deleteNote", note);
    console.log(note + " will be deleted");
  };
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
  display: block;
  margin: 10px 10px;
  padding: 5px;
}
a {
  color: #42b983;
}
.hello {
  background-color: #b5eed4;
}
</style>
