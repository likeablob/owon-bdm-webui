<template>
  <div>
    <v-dialog v-model="dialog_" persistent max-width="500">
      <v-card>
        <v-toolbar flat color="primary headline" dark>
          <v-icon left>mdi-cog</v-icon>
          Chart Config
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text class="pa-3 text-center">
          <v-form @submit.prevent="onClickApply">
            <v-text-field
              v-model.number="config.multiplier"
              type="number"
              label="Multiplier"
              step="0.1"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog_ = false">
            CLOSE
          </v-btn>
          <v-btn color="blue darken-1" text @click="onClickApply">
            APPLY
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from '@vue/composition-api'
import clone from 'just-clone'

export type ChartConfigT = {
  multiplier: number
}

export default defineComponent({
  components: {},
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:dialog', 'apply'],
  setup(props, { emit }) {
    const config = reactive<ChartConfigT>({
      multiplier: 1.0,
    })

    const dialog_ = computed({
      get: () => {
        return props.dialog
      },
      set: (v: boolean) => {
        emit('update:dialog', v)
      },
    })

    return {
      dialog_,
      config,
    }
  },
  methods: {
    onClickApply() {
      this.dialog_ = false
      this.$emit('apply', clone(this.config))
    },
  },
})
</script>

<style lang="scss" scoped>
.desc-line {
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-left: 10px;
  }
}
</style>
