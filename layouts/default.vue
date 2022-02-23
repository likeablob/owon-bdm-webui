<template>
  <v-app>
    <v-app-bar app color="primary" dark flat fixed :height="56">
      <v-toolbar-title>
        <v-btn class="font-weight-black" text @click="easterEgg"
          >owon-bdm-webui</v-btn
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="center"></slot>
      <v-spacer></v-spacer>
      <DeviceConnectionButton />
      <v-btn icon="icon" @click="infoDialog = true">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="content">
      <v-container
        class="container"
        fill-height="fill-height"
        grid-list-xs="grid-list-xs"
      >
        <nuxt></nuxt>
      </v-container>
    </v-main>
    <AppInfoDialog :dialog.sync="infoDialog"></AppInfoDialog>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import AppInfoDialog from '@/components/AppInfoDialog.vue'
import DeviceConnectionButton from '@/components/DeviceConnectionButton.vue'
import { bdmDevice } from '~/store'

export default defineComponent({
  components: {
    AppInfoDialog,
    DeviceConnectionButton,
  },
  setup() {
    const infoDialog = ref(false)
    return {
      infoDialog,
    }
  },
  methods: {
    async easterEgg() {
      const psleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))
      const beep = () => bdmDevice.sendCommand('Hold')

      const sleeps = [500, 130, 300, 300, 600, 130]

      for (const ms of sleeps) {
        await beep()
        await psleep(ms)
      }
      await beep()
    },
  },
})
</script>

<style media="screen" lang="scss" scoped>
.content {
  background-color: white;
}

.container {
  max-height: calc(100vh - 56px);
  overflow: hidden;
  // padding-top: 56px;
}
</style>
