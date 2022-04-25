<template>
  <main id="commands">
    <div class="feature-section">
      <div class="page-width page-padding">
        <h1>GW2Bot Commands</h1>
        <h2 class="paragraph">Type <code>/</code> to see a full list of commands</h2>
        <p>Use <code>&#11134; Tab</code> to autocomplete commands with options<!--: <code>/key add</code>--></p>
      </div>
    </div>
    <div class="page-width page-padding">
      <div class="flexbox">
        <div class="commands-column">
          <ul class="commands-list">

            <cmd v-for="command in commandsMainOne" :key="command.id" :command="command"/>

          </ul>
        </div>

        <div class="commands-column">
          <ul class="commands-list">

            <cmd v-for="command in commandsMainTwo" :key="command.id" :command="command"/>

          </ul>
        </div>
      </div> <!-- Wrapper -->
      <hr>
      <h2 class="h3">Notifiers</h2>
      <hr>
      <div class="flexbox">
        <div class="commands-column">
          <ul class="commands-list">

            <cmd v-for="command in commandsNotifiersOne" :key="command.id" :command="command"/>

          </ul>
        </div>
        <div class="commands-column">
          <ul class="commands-list">

            <cmd v-for="command in commandsNotifiersTwo" :key="command.id" :command="command"/>

          </ul>
        </div>
      </div> <!-- Wrapper -->
      <!--<hr>
      <h3>Meta & Stats</h3>
      <hr>
      <div class="flexbox">
        <div class="commands-column">
          <ul class="commands-list">

            <cmd v-for="command in commandsMetaOne" :key="command.id" :command="command"/>

          </ul>
        </div>
        <div class="commands-column">
          <ul class="commands-list">

            <cmd v-for="command in commandsMetaTwo" :key="command.id" :command="command"/>

          </ul>
        </div>
      </div>-->
    </div>
  </main>
</template>

<script src="./commandsdata.js" scoped>
</script>


