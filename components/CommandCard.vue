<template>
  <v-card class="rounded-card" :flat="$vuetify.breakpoint.xs" tile>
    <v-card-text class="pb-0">
      <template v-for="item in stateButtons">
        <v-btn
          v-if="item.cmd"
          :key="item.label + item.cmd"
          small
          color="secondary"
          depressed
          class="ml-1"
          :outlined="item.isEnabled()"
          @click="item.cmd && bdmDevice.sendCommand(item.cmd)"
          >{{ item.label }}</v-btn
        >
        <v-chip
          v-else
          :key="item.label"
          small
          color="secondary"
          depressed
          class="ml-1"
          :outlined="item.isEnabled()"
        >
          {{ item.label }}</v-chip
        >
      </template>
      <v-chip
        small
        color="secondary"
        :disabled="!readingTypes.lowBattery"
        class="ml-1"
        :outlined="!readingTypes.lowBattery"
        >Low BAT</v-chip
      >
    </v-card-text>

    <v-card-text>
      <v-btn
        v-for="item in commandButtons"
        :key="item.cmd"
        small
        depressed
        :color="item.color"
        class="ml-1"
        @click="bdmDevice.sendCommand(item.cmd)"
      >
        {{ item.cmd }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

import { bdmDevice } from '~/store'
import { BdmCommandNameT, BdmReadingTypesT } from '~/utils/owon-b41t-plus'

export default defineComponent({
  components: {},
  setup() {
    const readingTypes = computed(
      (): BdmReadingTypesT =>
        bdmDevice.reported?.readingTypes || {
          max: false,
          min: false,
          lowBattery: false,
          autoRange: false,
          delta: false,
          hold: false,
        }
    )

    type StateButtonT = {
      cmd?: BdmCommandNameT
      label: string
      isEnabled: Function
    }

    const stateButtons: Array<StateButtonT> = [
      {
        cmd: 'Auto',
        label: 'Auto',
        isEnabled: () => !readingTypes.value.autoRange,
      },
      {
        cmd: 'Relative',
        label: 'Delta',
        isEnabled: () => !readingTypes.value.delta,
      },
      {
        cmd: 'Hold',
        label: 'Hold',
        isEnabled: () => !readingTypes.value.hold,
      },
      {
        label: 'Max',
        isEnabled: () => !readingTypes.value.max,
      },
      {
        label: 'Min',
        isEnabled: () => !readingTypes.value.min,
      },
    ]

    type CommandButtonT = {
      cmd: BdmCommandNameT
      color: string
    }

    const commandButtons: Array<CommandButtonT> = [
      // On-device buttons
      {
        cmd: 'Select',
        color: 'accent darken-1',
      },
      {
        cmd: 'Range',
        color: 'accent darken-1',
      },
      {
        cmd: 'Hz/Duty',
        color: 'accent darken-1',
      },
      {
        cmd: 'Min/Max',
        color: 'accent darken-1',
      },
      // Optional buttons
      {
        cmd: 'Backlight',
        color: 'primary lighten-3',
      },
      {
        cmd: 'Bluetooth Off',
        color: 'primary lighten-3',
      },
      {
        cmd: 'Normal',
        color: 'primary lighten-3',
      },
    ]

    return {
      // data
      readingTypes,
      stateButtons,
      commandButtons,

      // others
      bdmDevice,
    }
  },
})
</script>

<style lang="scss" scoped></style>
