<template>
  <li class="commands-list__item">
    <template v-if="!command.args">
      <h3 class="command-name"><span>{{ command.name }}</span></h3>
      <p class="command-desc">{{ command.desc }}</p>
    </template>
    <template v-else>
      <h3 class="command-name">
        <button @click="toggleActive(command)" :class="{active: command.active}"><span>{{ command.name }}</span></button>
      </h3>
      <p class="command-desc">{{ command.desc }}</p>
      <ul class="commands-list" v-show="command.active">
        <li class="command-argument" v-for="(argDesc, argName,) in command.args" :key="argName.id">
          <hr>
          <p class="command-argument-name">{{ argName }}</p>
          <p class="small-text">{{ argDesc }}</p>
        </li>
      </ul>
    </template>
  </li>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    command: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleActive(command) {
      if (command.active) {
        command.active = false;
      } else if (!command.active) {
        Vue.set(command, "active", true);
      }
    }
  }
};
</script>