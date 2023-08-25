<template>
<div v-if="loading">
  <Spinner/>
</div>
  <div v-else class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Spinner from '../components/Spinner.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld, Spinner
  }
}
</script>
