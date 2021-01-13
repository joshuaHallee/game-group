# game-group-api
Discord bot GameGroup - Find and compare Steam games across Discord users within the same server

## Environment File Setup
---

[Discord Developer Docs](https://discord.com/developers/docs/intro) - Create a new application & bot to obtain the bot key
```
BOT_TOKEN=
```

`BOT_TOKEN`: Discord bot token


## Installation Options
---
Below are directions for either development or production use
1. Clone project repository
2. Update `prefix` in `config.json`
3. Run `npm install` in project directory
4. Run `npm run dev` for development use
5. Run `npm start` for production use


## Commands
---

Track allows for the Discord user to link a Steam library
```
track [steam64 ID]
```