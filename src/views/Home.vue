<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="This is a prop passed to HelloWorld from the Home view" />
    <DailyInput msg="This is a prop passed to the DailyInput from the Home view" />
    <h2>Here's another static element. on the Home view</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DailyInput from "@/components/DailyInput.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    DailyInput
  }
};
</script>
