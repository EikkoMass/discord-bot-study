module.exports = {
  "interactionCreate": (client, eventFiles) => {
      return async (interaction) => {
        for(const eventFile of eventFiles)
        {
          const eventFunction  = require(eventFile);
          await eventFunction(client, interaction);
        }
      }
    },
    "messageCreate": (client, eventFiles) => {
      return async message => {
        for(const eventFile of eventFiles)
          {
            const eventFunction  = require(eventFile);
            await eventFunction(client, message);
          }
      }
    },
    "ready": (client, eventFiles) => {
      return async interaction => {
        for(const eventFile of eventFiles)
          {
            const eventFunction  = require(eventFile);
            await eventFunction(client, interaction);
          }
      }
    }
  };