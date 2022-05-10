<template>
  <li class="command">
    <template v-if="(!command.subcommands)&&(!command.args)">
      <h3 class="command__name"><span>{{ command.name }}</span></h3>
      <p class="command__desc">{{ command.desc | twoOrphans }}</p>
    </template>

    <template v-else-if="command.args">
      <div class="tooltip" :class="{active: command.active}" :id="command.name+'-tooltip'" role="tooltip">
        <ul class="arg-list">
          <li class="arg" v-for="arg in command.args" :key="arg.id">
            <p class="arg__name">{{ arg.name }} <span>(<template v-if="arg.required">required</template><template v-else>optional</template>)</span></p>
            <p class="small-text" v-html="$options.filters.twoOrphans(arg.desc)+(arg.options?':':'')"></p>
            <ul class="option-list" v-if="arg.options">
              <li class="option small-text" v-for="option in arg.options" :key="option.id" v-html="$options.filters.twoOrphans(option)"></li>
            </ul>
          </li>
        </ul>
      </div>
      <h3 class="command__name">
        <span>{{ command.name }}</span> <button @click="toggleActive(command)" class="args-button" :class="{active: command.active}" :aria-describedby="command.name+'-tooltip'">+{{ command.args.length }}</button>
      </h3>
      <p class="command__desc">{{ command.desc | twoOrphans }}</p>
    </template>

    <template v-else-if="command.subcommands">
      <h3 class="command__name">
        <button @click="toggleActive(command)" class="command-button" :class="{active: command.active}"><span>{{ command.name }}</span></button>
      </h3>
      <p class="command__desc">{{ command.desc | twoOrphans }}</p>
      <ul class="subcommand-list" v-show="command.active">
        <li class="subcommand" v-for="subcommand in command.subcommands" :key="subcommand.id">
          <template v-if="subcommand.args">
            <div class="tooltip" :class="{active: subcommand.active}" :id="command.name+'-'+subcommand.name+'-tooltip'" role="tooltip">
              <ul class="arg-list">
                <li class="arg" v-for="arg in subcommand.args" :key="arg.id">
                  <p class="arg__name">{{ arg.name }} <span>(<template v-if="arg.required">required</template><template v-else>optional</template>)</span></p>
                  <p class="small-text" v-html="$options.filters.twoOrphans(arg.desc)+(arg.options?':':'')"></p>
                  <ul class="option-list" v-if="arg.options">
                    <li class="option small-text" v-for="option in arg.options" :key="option.id" v-html="$options.filters.twoOrphans(option)"></li>
                  </ul>
                </li>
              </ul>
            </div>
            <p class="subcommand__name">
              <span>{{ command.name }}</span> {{ subcommand.name }}
              <button @click="toggleActive(subcommand)" class="args-button" :class="{active: subcommand.active}" :aria-describedby="command.name+'-'+subcommand.name+'-tooltip'">
                +{{ subcommand.args.length }}
              </button>
            </p>
            <p class="small-text">{{ subcommand.desc | twoOrphans }}</p>
          </template>
          <template v-else>
            <p class="subcommand__name"><span>{{ command.name }}</span> {{ subcommand.name }}</p>
            <p class="small-text">{{ subcommand.desc | twoOrphans }}</p>
          </template>
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