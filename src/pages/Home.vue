<template>
  <div>
    <HelloComponent />
    <button @click="click">
      Butt
    </button>
    <span>{{ this.$store.state.home.x }}</span>
  </div>
</template>

<script>
import { HelloComponent } from '../components'

export default {
  components: {
    HelloComponent
  },
  methods: {
    click () {
      this.$store.dispatch('increment')
    }
  }
}
</script>
