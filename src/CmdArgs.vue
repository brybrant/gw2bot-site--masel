<template>
  <ul class="arg-list">
    <li class="arg" v-for="arg in command.args" :key="arg.id">
      <p class="arg__name">{{ arg.name }} <span v-html="'('+(arg.required?'required':'optional')+')'"></span></p>
      <p class="small-text" v-html="$options.filters.twoOrphans(arg.desc)+(arg.options?':':'.')"></p>
      <ul class="option-list" v-if="arg.options">
        <li class="option small-text" v-for="option in arg.options" :key="option.id" v-html="$options.filters.twoOrphans(option)"></li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    command: {
      type: Object,
      required: true
    }
  }
};
</script>