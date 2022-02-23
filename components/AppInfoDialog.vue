<template>
  <div>
    <v-dialog v-model="dialog_" max-width="500">
      <v-card>
        <v-toolbar flat color="primary headline" dark>
          <v-icon left>mdi-information</v-icon>
          owon-bdm-webui ({{ version }})
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text class="pa-3 text-center">
          Yet Another Unofficial Web UI for OWON BT41T Digital Multimeter
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col class="desc-line">
              <v-icon left>mdi-github</v-icon>
              GitHub:
              <a
                target="_blank"
                href="https://github.com/likeablob/owon-bdm-webui"
                >likeablob/owon-bdm-webui</a
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  components: {},
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:dialog'],
  setup(props, { emit }) {
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
      version: process.env.version,
    }
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
