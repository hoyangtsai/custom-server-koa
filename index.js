const { platform, router } = require('bottender/router');

const lineApp = require("./lineapp");

async function LineAction(context) {
  if (context.event.isText) {
    const searchInput = context.event.text;
    await context.sendText(`Searching song: ${searchInput}`);
    const message = await lineApp.searchMusic(searchInput);
    await context.push([message]);
  }
}

module.exports = async function App(context) {
  console.log(`Platform: ${context.platform}`);

  return router([
    platform('line', LineAction),
  ]);
};
