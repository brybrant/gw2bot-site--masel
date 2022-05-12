<template>
  <main id="faq">
    <div class="page-width page-padding">
      <header>
        <h1>Frequently Asked Questions</h1>
      </header>

      <div class="question">
        <h2>How do I use the bot?</h2>
        <p>After the bot has been added to the server using <a :href="inviteLink">this invite link</a>, you can access the commands by using the <code>/</code> prefix.</p>
        <p><strong>Type <code>/</code> for a full list of commands.</strong></p>
      </div>

      <div class="question">
        <h2>Does the bot work in DMs?</h2>
        <p>Yes. API keys are cross-server too, if you're in multiple servers with the bot.</p>
      </div>

      <div class="question">
        <h2>How do I setup game update notifications?</h2>
        <p>First, you must have the "manage server" permission.</p>
        <p>Provided you have that, point the bot to the channel where it'll post announcements, using <code>/notifier&nbsp;update&nbsp;channel</code>.</p>
        <p>Make sure the bot has permissions to talk in that channel.</p>
      </div>

      <div class="question">
        <h2>What is guildsync?</h2>
        <p>guildsync is a feature which allows you to sync your in-game ranks with discord roles.</p>
        <ul>
          <li>It requires leader permissions in-game.</li>
          <li>It is tied to your account. If you remove your API key, it will break.</li>
          <li>It isn't instant - it can take even 30 minutes before your settings are synced. To force a sync, you can use <code>/server&nbsp;sync</code>.</li>
          <li>Always ensure that GW2Bot is above the synced roles, or the bot won't be able to assign them.</li>
          <li>You can modify and change permissions of the roles created by the bot.</li>
          <li>Only server members with API key added to the bot will participate in the sync and no input is required from them.</li>
          <li>New members who add their API key after sync is setup will also be synced automatically.</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script scoped>
export default {
  props: ["inviteLink"]
};
</script>

