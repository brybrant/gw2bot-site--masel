<template>
  <main id="commands">
    <div class="page-width page-padding">
      <header>
        <h1>GW2Bot Commands</h1>
        <p><strong>Type <code>/</code> to see a full list of commands</strong></p>
        <p>Use <code>&#11134; Tab</code> to autocomplete commands with options</p>
      </header>

      <div class="flexbox">
        <div class="flexbox__item commands-column">
          <ul class="commands-list">

            <cmd v-for="command in columnOne(commandsMain)" :key="command.id" :command="command"/>

          </ul>
        </div>
        <div class="flexbox__item commands-column">
          <ul class="commands-list">

            <cmd v-for="command in columnTwo(commandsMain)" :key="command.id" :command="command"/>

          </ul>
        </div>
      </div>
      <hr>
      <h2 class="h3">Notifiers</h2>
      <div class="flexbox">
        <div class="flexbox__item commands-column">
          <ul class="commands-list">

            <cmd v-for="command in columnOne(commandsNotifiers)" :key="command.id" :command="command"/>

          </ul>
        </div>
        <div class="flexbox__item commands-column">
          <ul class="commands-list">

            <cmd v-for="command in columnTwo(commandsNotifiers)" :key="command.id" :command="command"/>

          </ul>
        </div>
      </div>
      <!--<hr>
      <h2 class="h3">Meta &amp; Stats</h3>
      <div class="flexbox">
        <div class="flexbox__item commands-column">
          <ul class="commands-list">

            <cmd v-for="command in columnOne(commandsMeta)" :key="command.id" :command="command"/>

          </ul>
        </div>
        <div class="flexbox__item commands-column">
          <ul class="commands-list">

            <cmd v-for="command in columnTwo(commandsMeta)" :key="command.id" :command="command"/>

          </ul>
        </div>
      </div>-->
    </div>
  </main>
</template>

<script src="./commandsdata.js" scoped>
</script>


