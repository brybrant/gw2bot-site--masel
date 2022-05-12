<template>
  <li class="command">
    <div v-if="command.args" class="tooltip" :class="{active: command.active}" :id="command.name+'-tooltip'">
      <cmdArgs :command="command"/>
    </div>

    <h3 class="command__name">
      <template v-if="!command.subcommands">
        <span>{{ command.name }}</span>
        <button v-if="command.args" @click="toggleActive(command)" class="args-button" :class="{active: command.active}" :aria-controls="command.name+'-tooltip'" :aria-expanded="command.active?'true':'false'" :title="command.active?'Hide command arguments':'Show command arguments'" v-html="'+'+command.args.length"></button>
      </template>
      <template v-else-if="command.subcommands">
        <button @click="toggleActive(command)" class="command-button" :class="{active: command.active}" :aria-controls="command.name+'-subcommands'" :aria-expanded="command.active?'true':'false'" :title="command.active?'Hide subcommands':'Show subcommands'">
          <span>{{ command.name }}</span>
        </button>
      </template>
    </h3>
    <p class="command__desc">{{ command.desc | twoOrphans }}</p>

    <ul v-if="command.subcommands" v-show="command.active" class="subcommand-list" :id="command.name+'-subcommands'">
      <li class="subcommand" v-for="subcommand in command.subcommands" :key="subcommand.id">
        <div v-if="subcommand.args" class="tooltip" :class="{active: subcommand.active}" :id="command.name+'-'+subcommand.name+'-tooltip'">
          <cmdArgs :command="subcommand"/>
        </div>

        <p class="subcommand__name">
          <span>{{ command.name }}</span> {{ subcommand.name }}
          <button v-if="subcommand.args" @click="toggleActive(subcommand)" class="args-button" :class="{active: subcommand.active}" :aria-controls="command.name+'-'+subcommand.name+'-tooltip'" :aria-expanded="subcommand.active?'true':'false'" :title="subcommand.active?'Hide command arguments':'Show command arguments'" v-html="'+'+subcommand.args.length"></button>
        </p>
        <p class="small-text">{{ subcommand.desc | twoOrphans }}</p>
      </li>
    </ul>
  </li>
</template>

<script>
import Vue from "vue";
import cmdArgs from "./CmdArgs";

export default {
  components: {
    cmdArgs
  },
  props: {
    command: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleActive(thing) {
      if (thing.active) {
        thing.active = false;
      } else if (!thing.active) {
        Vue.set(thing, "active", true);
      }
    }
  }
};
</script>