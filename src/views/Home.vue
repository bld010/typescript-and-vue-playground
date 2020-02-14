<template>
  <div class="home">
    <img alt="Random image" src="https://picsum.photos/200" />
    <DailyInput
      msg="This is a prop passed to the DailyInput from the Home view"
      @updateList="updateList"
    />
    <EntryList @deleteNote="deleteNote" v-bind:notes="this.notes" />
  </div>
</template>

<script>
// @ is an alias to /src
import EntryList from "@/components/EntryList.vue";
import DailyInput from "@/components/DailyInput.vue";

export default {
  name: "Home",
  components: {
    EntryList,
    DailyInput
  },
  data() {
    return {
      notes: ["hi", "hey", "hello", "yo"]
    };
  },
  methods: {
    updateList(newItem) {
      this.notes.push(newItem);
    },
    deleteNote(noteToDelete) {
      this.notes = this.notes.filter(note => note != noteToDelete);
    }
  }
};
</script>
