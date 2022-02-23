<template>
  <v-container>
    <v-row class="main-row">
      <v-col cols="12" class="pa-1" justify="center">
        <CommandCard></CommandCard>
      </v-col>
      <v-col cols="12" class="pa-1" justify="center">
        <ChartCard></ChartCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ChartCard from '../components/ChartCard.vue'
import CommandCard from '~/components/CommandCard.vue'

export default defineComponent({
  components: {
    ChartCard,
    CommandCard,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.main-row {
  max-width: 1000px;
  margin: 0 auto;
}

.rounded-card {
  border-radius: 5px !important;
}

.main-card {
  min-width: 300px;
  // margin: 0 auto;
}
</style>
