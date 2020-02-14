<template>
  <div class="daily-input">
    <h1>Rate your day</h1>
    <form>
      <ul>
        <li v-for="rating in ratings" v-bind:key="rating.index">
          <button
            v-on:click.prevent="updateRating(rating)"
            v-bind:class="{ selected: selectedRating == rating }"
          >
            {{ rating }}
          </button>
        </li>
      </ul>
      <textarea v-model="note" placeholder="Notes" />
      <button v-on:click.prevent="addNote">Add Note</button>
      <p v-if="errorIsPresent">{{ error }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ratings from "../mocks";
import Day from "../day";

@Component
export default class DailyInput extends Vue {
  @Prop() private msg!: string;
  private ratings: string[] = ratings;
  private note = "";
  private selectedRating = "";
  private ratingIsSelected = false;
  private error = "";
  private errorIsPresent = false;
  private addNote() {
    if (this.selectedRating === "") {
      this.addError("Please select a rating.");
      this.errorIsPresent = true;
    } else {
      const day = new Day(Date.now(), this.note, this.selectedRating);
      this.$emit("updateList", day);
      this.resetNoteAndRating();
    }
  }
  private resetNoteAndRating() {
    this.note = "";
    this.selectedRating = "";
    this.ratingIsSelected = false;
    this.error = "";
  }
  private updateRating(rating: string) {
    this.selectedRating = rating;
    this.ratingIsSelected = true;
  }
  private addError(errorText: string) {
    this.error = errorText;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
form {
  & button {
    width: 30%;
    margin: 20px auto;
  }
  & ul button {
    width: 40px;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  & textarea {
    height: 100px;
  }
}
.selected {
  box-shadow: 2px 2px 0px #42b983;
}

ul {
  list-style-type: none;
  padding: 10px;
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
