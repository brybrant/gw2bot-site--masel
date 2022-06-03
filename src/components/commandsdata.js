import Vue from "vue";
import cmd from "../Cmd";

export default {
  components: {
    cmd
  },
  data() {
    return {
      commandsMain: [
        {
          name: "account",
          desc: "Information about your account",
          permissions: [
            "account"
          ]
        },
        {
          name: "achievement",
          desc: "Display achievement information and your completion status",
          permissions: [
            "progression"
          ],
          args: [
            {
              name: "achievement",
              desc: "Name of achievement. Example: Playing Chicken",
              required: true
            }
          ]
        },
        {
          name: "bosses",
          desc: "Shows your raid progression for the week",
          permissions: [
            "progression"
          ]
        },
        {
          name: "cats",
          desc: "Displays cats you have not collected yet",
          permissions: [
            "progression"
          ]
        },
        /*{
          name: "changelog",
          desc: "List of recent changes to the bot"
        },*/
        {
          name: "character",
          desc: "Character related commands",
          subcommands: [
            /*{
              name: "attributes",
              desc: "Lists attributes of given character"
            },*/
            {
              name: "birthdays",
              desc: "Lists days until each of your character's birthdays",
              permissions: [
                "characters"
              ]
            },
            {
              name: "crafting",
              desc: "Displays your characters and their crafting level",
              permissions: [
                "characters"
              ]
            },
            {
              name: "fashion",
              desc: "Displays the skins and dyes of a given character",
              permissions: [
                "characters",
                "builds"
              ],
              args: [
                {
                  name: "character",
                  desc: "Character name to inspect. Skip to get a list instead"
                }
              ]
            },
            {
              name: "gear",
              desc: "Displays the gear and build of a given character",
              permissions: [
                "characters",
                "builds"
              ],
              args: [
                {
                  name: "character",
                  desc: "Character name to inspect. Skip to get a list instead"
                }
              ]
            },
            {
              name: "info",
              desc: "Info about a given character",
              permissions: [
                "characters",
                "builds"
              ],
              args: [
                {
                  name: "character",
                  desc: "Character name to inspect. Skip to get a list instead"
                }
              ]
            },
            {
              name: "list",
              desc: "Lists all your characters with extra information",
              permissions: [
                "characters",
                "builds"
              ],
              args: [
                {
                  name: "info",
                  desc: "Select additional information to display",
                  options: [
                    "Age",
                    "Time played"
                  ]
                }
              ]
            },
            /*{
              name: "pvpbuild",
              desc: "Displays the build of given character"
            },*/
            /*{
              name: "togglepublic",
              desc: "Toggle your character's status to public"
            },*/
            /*{
              name: "wvwbuild",
              desc: "Displays the build of given character"
            }*/
          ]
        },
        {
          name: "chatcode",
          desc: "Generate a chat code",
          args: [
            {
              name: "item",
              desc: "Base item name for the chat code. Example: Banana",
              required: true
            },
            {
              name: "quantity",
              desc: "Item quantity, ranging from 1 to 255",
              required: true
            },
            {
              name: "skin",
              desc: "Skin name to apply on the item"
            },
            {
              name: "upgrade_1",
              desc: "Name of the upgrade in the first slot. Example: Mark of Penetration"
            },
            {
              name: "upgrade_2",
              desc: "Name of the upgrade in the second slot. Example: Superior Rune of Generosity"
            }
          ]
        },
        {
          name: "daily",
          desc: "Commands showing daily things",
          args: [
            {
              name: "category",
              desc: "Daily type",
              required: true,
              options: [
                "All dailies",
                "Fractals",
                "PSNA - Pact Supply Network Agent",
                "PvE",
                "PvP",
                "Strikes",
                "WvW"
              ]
            },
            {
              name: "tomorrow",
              desc: "Select this option to view tomorrow's dailies instead"
            }
          ]
        },
        /*{
          name: "dulfy",
          desc: "Search dulfy.net"
        },*/
        {
          name: "et",
          desc: "The event timer",
          args: [
            {
              name: "category",
              desc: "Event timer category",
              required: true,
              options: [
                "Day/night cycle",
                "HoT - Heart of Thorns",
                "PoF - Path of Fire",
                "World bosses"
              ]
            }
          ]
        },
        {
          name: "evtc",
          desc: "Commands related to arcdps log files",
          subcommands: [
            {
              name: "api_key",
              desc: "Generate an API key for third-party apps that automatically upload EVTC logs",
              args: [
                {
                  name: "operation",
                  desc: "The operation to perform",
                  required: true,
                  options: [
                    "Delete your API key",
                    "Generate or regenerate your API key",
                    "View your API key"
                  ]
                }
              ]
            },
            {
              name: "autopost add_destination",
              desc: "Adds the current Discord channel as a destination to autopost EVTC logs to"
            },
            {
              name: "autopost remove_destinations",
              desc: "Removes all Discord channels from the list of autopost destinations"
            },
            {
              name: "channel",
              desc: "Sets the current Discord channel to automatically process EVTC logs",
              args: [
                {
                  name: "channel",
                  desc: "The channel to enable automatic EVTC processing on",
                  required: true
                },
                {
                  name: "autodelete",
                  desc: "Automatically delete message after processing the EVTC log",
                  required: true,
                  options: [
                    "False",
                    "True"
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "gem",
          desc: "Commands related to gems",
          subcommands: [
            {
              name: "price",
              desc: "Lists current gold/gem exchange prices",
              args: [
                {
                  name: "quantity",
                  desc: "The number of gems to evaluate (default is 400)"
                }
              ]
            },
            {
              name: "track",
              desc: "Recive a notification when cost of 400 gems drops below the specified cost",
              args: [
                {
                  name: "gold",
                  desc: "Recieve a notification when price of 400 gems drops below the specified amount",
                  required: true
                }
              ]
            }
          ]
        },
        {
          name: "guild",
          desc: "Guild related commands",
          permissions: [
            "guilds"
          ],
          subcommands: [
            {
              name: "default",
              desc: "Set your default guild for guild commands on the current Discord Server",
              args: [
                {
                  name: "guild_name",
                  desc: "Guild name. Leave blank to reset"
                }
              ]
            },
            {
              name: "info",
              desc: "General guild stats",
              args: [
                {
                  name: "guild_name",
                  desc: "Guild name. Can be blank if the server has a default guild. Required otherwise"
                }
              ]
            },
            {
              name: "log",
              desc: "Get log of last 20 entries of stash/treasury/members",
              args: [
                {
                  name: "log_type",
                  desc: "Select the type of log to inspect",
                  required: true,
                  options: [
                    "Roster",
                    "Stash",
                    "Treasury"
                  ]
                },
                {
                  name: "guild_name",
                  desc: "Guild name. Can be blank if this server has a default guild. Required otherwise"
                }
              ]
            },
            {
              name: "members",
              desc: "Shows a list of members and their ranks",
              args: [
                {
                  name: "guild_name",
                  desc: "Guild name. Can be blank if this server has a default guild. Required otherwise"
                }
              ]
            },
            {
              name: "treasury",
              desc: "Get list of current and needed items for upgrades",
              args: [
                {
                  name: "guild_name",
                  desc: "Guild name. Can be blank if this server has a default guild. Required otherwise"
                }
              ]
            }
          ]
        },
        {
          name: "guildsync",
          desc: "Guild synchronization related commands: sync your in-game guild ranks with Discord roles",
          subcommands: [
            {
              name: "add",
              desc: "Add a new guildsync (max 10)",
              permissions: [
                "guilds"
              ],
              args: [
                {
                  name: "guild_name",
                  desc: "The guild name of the guild you wish to sync with",
                  required: true
                },
                {
                  name: "sync_type",
                  desc: "Select how you want the synced roles to behave",
                  required: true,
                  options: [
                    "Give every member of your guild a single, guild specific role",
                    "Sync both the ranks, and give every member a guild specific role",
                    "Sync only the in-game ranks"
                  ]
                },
                {
                  name: "authentication_method",
                  desc: "Select how you want to authenticate the leadership of the guild",
                  required: true,
                  options: [
                    "Enter a key. If selected, fill out the <code>api_key</code> argument",
                    "Have the bot prompt another user for authorization. If selected, fill out <code>user_to_prompt</code> argument",
                    "Use your own currently active API key. You need to be the guild leader"
                  ]
                },
                {
                  name: "api_key",
                  desc: "The API key to use for authorization. Use only if you've selected it as the <code>authentication_method</code>"
                },
                {
                  name: "user_to_prompt",
                  desc: "The user to prompt for authorization. Use only if you've selected it as the <code>authentication_method</code>"
                }
              ]
            },
            /*{
              name: "clear",
              desc: "Wipes settings and created roles and turns sync off"
            },*/
            {
              name: "edit",
              desc: "Edit or delete existing guildsyncs",
              args: [
                {
                  name: "operation",
                  desc: "Select the operation. You will be prompted to select the sync after the command",
                  required: true,
                  options: [
                    "Change API key. Make sure to fill out the api_key optional argument",
                    "Delete a guildsync",
                    "Toggle guild role. If disabled, this will delete the role created by the bot",
                    "Toggle syncing ranks. If disabled, this will delete the role created by the bot"
                  ]
                },
                {
                  name: "api_key",
                  desc: "The API key to use for authorization. Use only if you've selected it as the <code>authentication_method</code>"
                }
              ]
            },
            /*{
              name: "guildrole",
              desc: "Adds a new role based on the guild tag for channel management"
            },*/
            /*{
              name: "now",
              desc: "Force a synchronization, also deletes or creates new ranks as needed"
            },*/
            {
              name: "purge",
              desc: "Toggle kicking of users that are not in any of the synced guilds",
              permissions: [
                "guilds"
              ],
              args: [
                {
                  name: "enabled",
                  desc: "Enable or disable purge. You'll be asked to confirm your selection afterwards",
                  required: true,
                  options: [
                    "False",
                    "True"
                  ]
                }
              ]
            },
            /*{
              name: "setup",
              desc: "Setup process for ingame roster to Discord member list synchronization"
            },*/
            {
              name: "toggle",
              desc: "Global toggle for guildsync - does not wipe the settings",
              args: [
                {
                  name: "enabled",
                  desc: "Enable or disable guildsync for the current server",
                  required: true,
                  options: [
                    "False",
                    "True"
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "key",
          desc: "Commands related to API keys",
          subcommands: [
            {
              name: "add",
              desc: "Adds your API key and associates it with your Discord account",
              args: [
                {
                  name: "key",
                  desc: "Generate at <a href='https://account.arena.net' target='_blank'>https://account.arena.net</a> under Applications tab",
                  required: true
                }
              ]
            },
            {
              name: "info",
              desc: "Information about your current API key"
            },
            {
              name: "remove",
              desc: "Remove selected keys from the bot"
            },
            {
              name: "switch",
              desc: "Swaps between your stored API keys",
              args: [
                {
                  name: "index",
                  desc: "Key index to switch to. Skip to get a list instead"
                }
              ]
            }
          ]
        },
        {
          name: "kp",
          desc: "Shows completed raids and fractals",
          permissions: [
            "progression"
          ]
        },
        {
          name: "li",
          desc: "Shows how many Legendary Insights and Divinations you have earned",
          permissions: [
            "characters",
            "inventories"
          ]
        },
        {
          name: "nodes",
          desc: "Displays the home instance nodes you have not yet unlocked",
          permissions: [
            "progression"
          ]
        },
        /*{
          name: "prefix",
          desc: "Set bot's prefixes for this server"
        },*/
        {
          name: "pvp",
          desc: "Commands related to PvP",
          permissions: [
            "pvp"
          ],
          subcommands: [
            {
              name: "professions",
              desc: "Information about your PvP profession stats",
              args: [
                {
                  name: "profession",
                  desc: "Select a profession to view specific statistics",
                  options: [
                    "Warrior",
                    "Guardian",
                    "Revenant",
                    "Thief",
                    "Ranger",
                    "Engineer",
                    "Elementalist",
                    "Necromancer",
                    "Mesmer"
                  ]
                }
              ]
            },
            {
              name: "stats",
              desc: "Information about your general PvP stats"
            }
          ]
        },
        {
          name: "sab",
          desc: "Commands related to Super Adventure Box",
          permissions: [
            "characters",
            "progression"
          ],
          subcommands: [
            {
              name: "unlocks",
              desc: "Displays missing SAB unlocks for specified character",
              args: [
                {
                  name: "character",
                  desc: "Displays missing SAB unlocks for specified character",
                  required: true
                }
              ]
            },
            {
              name: "zones",
              desc: "Displays missing SAB zones for specified character",
              args: [
                {
                  name: "character",
                  desc: "Displays missing SAB zones for specified character",
                  required: true
                }
              ]
            }
          ]
        },
        {
          name: "search",
          desc: "Search your account for items",
          permissions: [
            "characters",
            "inventories"
          ],
          args: [
            {
              name: "item",
              desc: "Specify the name of an item to search for",
              required: true
            }
          ]
        },
        {
          name: "server",
          desc: "Commands for server management",
          subcommands: [
            {
              name: "force_account_names",
              desc: "Automatically change nicknames to in-game names",
              permissions: [
                "account"
              ],
              args: [
                {
                  name: "enabled",
                  desc: "Automatically change nicknames to in-game names",
                  required: true,
                  options: [
                    "False",
                    "True"
                  ]
                }
              ]
            },
            {
              name: "preview_chat_links",
              desc: "Enable or disable automatic GW2 chat link preview from Discord messages",
              args: [
                {
                  name: "enabled",
                  desc: "Enable or disable automatic chat link preview",
                  required: true,
                  options: [
                    "False",
                    "True"
                  ]
                }
              ]
            },
            {
              name: "sync",
              desc: "Force a sync for any guildsyncs and worldsyncs you have"
            },
            /*{
              name: "timezone",
              desc: "Change the timezone bot will use in this server"
            }*/
          ]
        },
        {
          name: "skill",
          desc: "Information about a given skill",
          args: [
            {
              name: "skill",
              desc: "The skill name to search for. Example: Meteor Shower",
              required: true
            }
          ]
        },
        {
          name: "tp",
          desc: "Commands related to Trading Post",
          subcommands: [
            {
              name: "buying",
              desc: "Show current buying transactions",
              permissions: [
                "tradingpost"
              ]
            },
            /*{
              name: "current",
              desc: "Show current selling/buying transactions"
            },*/
            {
              name: "delivery",
              desc: "Show your items awaiting in delivery box",
              permissions: [
                "tradingpost"
              ]
            },
            {
              name: "price",
              desc: "Checks price of an item",
              args: [
                {
                  name: "item",
                  desc: "Specify the name of an item to check the price of",
                  required: true
                }
              ]
            },
            {
              name: "selling",
              desc: "Show current selling transactions",
              permissions: [
                "tradingpost"
              ]
            }
          ]
        },
        {
          name: "trait",
          desc: "Information about a given trait",
          args: [
            {
              name: "trait",
              desc: "The trait name to search for. Example: Brave Stride",
              required: true
            }
          ]
        },
        {
          name: "wallet",
          desc: "Info about all of your currencies",
          permissions: [
            "wallet"
          ],
          args: [
            /*{
              name: "currencies",
              desc: "Returns a list of all currencies"
            },*/
            {
              name: "currency",
              desc: "The specific currency to search for. Leave blank for general overview"
            },
            /*{
              name: "maps",
              desc: "Shows map-specific currencies"
            },*/
            /*{
              name: "show",
              desc: "Shows most important currencies in your wallet"
            },*/
            /*{
              name: "tokens",
              desc: "Shows instance-specific currencies"
            }*/
          ]
        },
        {
          name: "wiki",
          desc: "Search the Guild Wars 2 wiki",
          args: [
            {
              name: "search_text",
              desc: "The text to search the wiki for. Example: Lion's Arch",
              required: true
            },
            {
              name: "language",
              desc: "The language of the wiki to search on",
              options: [
                "en",
                "de",
                "fr",
                "es"
              ]
            }
          ]
        },
        {
          name: "worldsync",
          desc: "World synchronization related commands",
          args: [
            {
              name: "ally_role",
              desc: "Specify a role to be given to allies of the chosen world"
            },
            {
              name: "enabled",
              desc: "Enable or disable worldsync",
              required: true,
              options: [
                "False",
                "True"
              ]
            },
            {
              name: "world",
              desc: "The world name to use for worldsync"
            },
            {
              name: "world_role",
              desc: "Specify a role to be given to members of the chosen world"
            }
          ]
        },
        {
          name: "wvw",
          desc: "Commands related to WvW",
          subcommands: [
            {
              name: "info",
              desc: "Info about a world. Defaults to account's world",
              permissions: [
                "account"
              ],
              args: [
                {
                  name: "world",
                  desc: "World name. Leave blank to use your account's world"
                }
              ]
            },
            /*{
              name: "worlds",
              desc: "List all worlds"
            },*/
            {
              name: "poptrack",
              desc: "Receive a notification when a specified world is no longer full",
              args: [
                {
                  name: "world",
                  desc: "Specify the name of a World to track the population of",
                  required: true
                }
              ]
            }
          ]
        },
        /*{
          name: "help",
          desc: "Shows the commands menu"
        }*/
      ],
      commandsNotifiers: [
        /*{
          name: "bossnotifier",
          desc: "Sends the next two bosses every 15 minutes to a channel",
          args: {
            channel: "Sets the channel to send the bosses to",
            toggle: "Toggles posting upcoming bosses"
          }
        },*/
        /*{
          name: "dailynotifier",
          desc: "Sends a list of dailies to specified channel",
          args: {
            channel: "Sets the channel to send the dailies to",
            toggle: "Toggles posting dailies at server reset",
            autodelete: "Toggles autodeleting last day's daily notification",
            autopin: "Toggles autopinning daily notifications",
            categories: "Choose which categories to display on daily notifications"
          }
        },*/
        {
          name: "event_reminder",
          desc: "For setting up notifications of upcoming events",
          args: [
            {
              name: "event_name",
              desc: "Event name. Examples: Shadow Behemoth. Gerent Preparation"
            },
            {
              name: "minutes_before_event",
              desc: "The number of minutes before the event that you'll be notified at"
            }
          ]
        },
        /*{
          name: "newsfeed",
          desc: "For setting up automatic guildwars2.com news feed",
          args: [
            {
              name: "channel",
              desc: "Sets the channel to send the news to"
            },
            {
              name: "toggle",
              desc: "Toggles posting news"
            }
          ]
        },*/
        {
          name: "notifier",
          desc: "For setting up automatic notifications",
          subcommands: [
            {
              name: "bosses",
              desc: "Sends the next two bosses every 15 minutes to a channel",
              args: [
                {
                  name: "channel",
                  desc: "The channel to post to. Leave blank to disable, required otherwise"
                },
                {
                  name: "edit",
                  desc: "Edit the previous message instead of deleting it. If not, posts a new message. Defaults to False",
                  options: [
                    "False",
                    "True"
                  ]
                }
              ]
            },
            {
              name: "daily",
              desc: "Send daily achievements to a channel every day",
              args: [
                {
                  name: "channel",
                  desc: "The channel to post to. Leave blank to disable, required otherwise"
                },
                {
                  name: "pin_message",
                  desc: "Toggle whether to automatically pin the daily message or not",
                  options: [
                    "False",
                    "True"
                  ]
                },
                {
                  name: "behavior",
                  desc: "Select additional behavior for deleting/editing the message. Leave blank for standard behavior",
                  options: [
                    "Delete the previous day's message. Causes an unread notification",
                    "Edit the previous day's message. No unread notification"
                  ]
                }
              ]
            },
            {
              name: "mystic_forger",
              desc: "Get a personal reminder whenever \"Daily Mystic Forger\" becomes active. Get those Mystic Coins!",
              args: [
                {
                  name: "reminder_frequency",
                  desc: "Select when you want to be notified",
                  required: true,
                  options: [
                    "Disable the Mystic Forger reminder",
                    "Get a message about Mystic Forger when it becomes active",
                    "Get a message about Mystic Forger when it becomes active AND 24 hours before that"
                  ]
                }
              ]
            },
            {
              name: "news",
              desc: "Automatically sends news from guildwars2.com to a specified channel",
              args: [
                {
                  name: "channel",
                  desc: "The channel to post to. Leave blank to disable, required otherwise"
                }
              ]
            },
            {
              name: "update",
              desc: "Send a notification whenever the game is updated",
              args: [
                {
                  name: "channel",
                  desc: "The channel to post to. Leave blank to disable, required otherwise"
                },
                {
                  name: "mention",
                  desc: "The mention to ping when posting the notification. Can be a role, or everyone, or even a user"
                }
              ]
            }
          ]
        },
        /*{
          name: "updatenotifier",
          desc: "For setting up notifcations whenever the game updates",
          args: [
            {
              name: "channel",
              desc: "Sets the channel to send the update announcement"
            },
            {
              name: "mention",
              desc: "Change the type of mention to be included with update notifier"
            },
            {
              name: "toggle",
              desc: "Toggles sending game update notifications"
            }
          ]
        }*/
      ],
      commandsMeta: [
        {
          name: "info",
          desc: "Display bot's info"
        },
        {
          name: "ping",
          desc: "Pong!"
        },
        {
          name: "uptime",
          desc: "Display bot's uptime"
        },
        {
          name: "stats",
          desc: "Statistic related commands",
          args: [
            {
              name: "server",
              desc: "Statistics of this server"
            },
            {
              name: "user",
              desc: "Statistics of the user"
            }
          ]
        },
      ]
    };
  },
  methods: {
    columnOne(commands) {
      return commands.filter(function(command,index) {
        return index < Math.round(commands.length / 2);
      });
    },
    columnTwo(commands) {
      return commands.filter(function(command,index) {
        return index >= Math.round(commands.length / 2);
      });
    }
  }
};
