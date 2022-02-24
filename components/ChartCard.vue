<template>
  <v-card
    ref="main"
    tile
    :flat="$vuetify.breakpoint.xs"
    class="main-card rounded-card"
  >
    <v-toolbar dense flat color="primary lighten-1" dark class="headline">
      <v-icon left>mdi-chart-timeline-variant</v-icon>

      <v-spacer></v-spacer>

      <v-col cols="2">
        <v-select
          v-model="selectedPeriod"
          :items="periodOptions"
          hide-details
          flat
          dense
        ></v-select>
      </v-col>

      <v-switch
        v-model="updatePaused"
        label="Pause"
        color="accent"
        hide-details
        flat
        dense
        class="mr-3"
      ></v-switch>

      <v-col cols="2">
        <v-select
          v-model="selectedSeriesName"
          :items="BDM_FUNC_NAMES"
          hide-details
          flat
          dense
        ></v-select>
      </v-col>

      <v-switch
        v-model="autoSwitchEnabled"
        label="Auto switch"
        color="accent"
        hide-details
        flat
        dense
        class="mr-3"
      ></v-switch>

      <v-btn icon color="red" @click="bdmDevice.resetHistory">
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <v-btn icon color="white" @click="configDialog = true">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <VueApexCharts
        ref="chart"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </v-card-text>
    <ChartConfigDialog
      :dialog.sync="configDialog"
      @apply="onConfigApply"
    ></ChartConfigDialog>
  </v-card>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  computed,
  ref,
  ComputedRef,
  reactive,
} from '@vue/composition-api'
import { ApexOptions } from 'apexcharts'
import log from 'loglevel'
import ms from 'ms'
import ChartConfigDialog, { ChartConfigT } from './ChartConfigDialog.vue'
import { bdmDevice } from '~/store'
import { BdmFuncNameT, BDM_FUNC_NAMES } from '~/utils/owon-b41t-plus'

const logger = log.getLogger('ChartCard')

const colorPalette = [
  '#fd7f6f',
  '#7eb0d5',
  '#b2e061',
  '#bd7ebe',
  '#ffb55a',
  '#ffee65',
  '#beb9db',
  '#fdcce5',
  '#8bd3c7',
]

const periodOptions = ['10s', '30s', '1m', '10m', '30m', '1h'] as const
type PeriodOptionT = typeof periodOptions[number]

export default defineComponent({
  components: {
    VueApexCharts: () => import('vue-apexcharts'),
    ChartConfigDialog,
  },
  setup() {
    const chartConfig = reactive<ChartConfigT>({
      multiplier: 1.0,
      lineWidth: 2.0,
    })
    const configDialog = ref(false)
    const selectedPeriod = ref<PeriodOptionT>('10m')
    const updatePaused = ref(false)
    const selectedSeriesName = ref<BdmFuncNameT>('DCV')
    const autoSwitchEnabled = ref(true)
    const reportedFuncName = computed(() => bdmDevice.reported?.funcName)

    watch(reportedFuncName, (funcName) => {
      if (autoSwitchEnabled.value && funcName) {
        selectedSeriesName.value = funcName
      }
    })

    // Keep the last generated series for pausing
    let generatedSeries: ApexAxisChartSeries = []

    const series: ComputedRef<ApexAxisChartSeries> = computed(() => {
      const name = selectedSeriesName.value
      const deadline = Date.now() - ms(selectedPeriod.value)

      const series = [
        {
          name: `${name} (${
            bdmDevice.reported?.readValue === undefined
              ? '-'
              : bdmDevice.reported.readValue * chartConfig.multiplier
          })`,
          color:
            colorPalette[BDM_FUNC_NAMES.indexOf(name) % colorPalette.length],
          data: bdmDevice
            .historiesOf(name)
            .filter((v) => v.timestamp >= deadline)
            .map((v) => ({
              x: v.timestamp,
              y: v.readValue * chartConfig.multiplier,
            })),
        },
      ]
      // Make it non-reactive
      Object.assign(series[0], { _isVue: true })

      if (updatePaused.value) {
        return generatedSeries
      }
      generatedSeries = series
      return series
    })

    const chart = ref<ApexCharts | null>(null)

    const chartOptions: ApexOptions = {
      chart: {
        id: 'history',
        type: 'line',
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: false,
        },
        toolbar: {
          show: updatePaused.value,
          autoSelected: 'zoom',
        },
        animations: {
          enabled: false,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },
      },
      markers: {
        size: 0,
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        floating: true,
        position: 'top',
      },
      yaxis: {},
      xaxis: {
        type: 'datetime',
        labels: {
          datetimeUTC: false,
        },
      },
      noData: {
        text: 'No data',
      },
      tooltip: {
        x: {
          format: 'yyyy-MM-ddTHH:mm:ss.fff',
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      stroke: {
        width: 2,
      },
    }

    watch(updatePaused, () => {
      chartOptions.chart!.toolbar!.show = updatePaused.value
      chart.value?.updateOptions(chartOptions)
    })

    watch(chartConfig, (v) => {
      chartOptions.stroke!.width = v.lineWidth
      chart.value?.updateOptions(chartOptions)
    })

    return {
      // data (reactive)
      chartConfig,
      configDialog,
      selectedPeriod,
      updatePaused,
      selectedSeriesName,
      autoSwitchEnabled,
      chartOptions,
      periodOptions,
      // computed
      series,
      // others
      BDM_FUNC_NAMES,
      chart,
      bdmDevice,
    }
  },
  methods: {
    onConfigApply(config: ChartConfigT) {
      logger.debug('onConfigApply', config)
      Object.assign(this.chartConfig, config)
    },
  },
})
</script>

<style lang="scss" scoped></style>
