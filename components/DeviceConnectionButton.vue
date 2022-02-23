<template>
  <v-btn
    depressed
    :class="{ pulse: !isConnected }"
    color="blue"
    @click="connectOrDisconnect"
    >{{ isConnected ? 'Disconnect' : 'Connect' }}</v-btn
  >
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import log from 'loglevel'

import { bdmDevice } from '~/store'

export default defineComponent({
  computed: {
    isConnected: () => bdmDevice.isConnected,
  },
  mounted() {
    if (!navigator.bluetooth) {
      this.$toast.error('Web Bluetooth is not supported on your browser!')
    }
  },
  methods: {
    connectOrDisconnect() {
      if (this.isConnected) {
        bdmDevice.disconnect().catch(log.error)
      } else {
        bdmDevice.connect().catch(log.error)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_colors.scss';

.pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  $pulse-color: map-get(
    $map: $blue,
    $key: 'base',
  );
  0% {
    box-shadow: 0 0 0 0 transparentize($pulse-color, $amount: 0.3);
  }
  80% {
    box-shadow: 0 0 0 15px transparentize($pulse-color, $amount: 1);
  }
  100% {
    box-shadow: 0 0 0 0 transparentize($pulse-color, $amount: 1);
  }
}
</style>
