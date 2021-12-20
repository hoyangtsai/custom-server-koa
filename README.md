# Custom Server: Koa

## Install and Run

Download this example or clone [bottender](https://github.com/Yoctol/bottender).

```sh
curl https://codeload.github.com/Yoctol/bottender/tar.gz/master | tar -xz --strip=2 bottender-master/examples/custom-server-koa
cd custom-server-koa
```

Install dependencies:

```sh
npm install
```

Depend on the platforms you want to enable, You must edit your `bottender.config.js` file and fill in your `.env` file accordingly.

After that, you can run the bot with this npm script:

```sh
npm run dev
```

This command starts a server listening at `http://localhost:5000` for bot development.

To set up ngrok for your server, run:

```sh
npx ngrok http 5000
```

If you successfully set up ngrok, you get a webhook URL in the format of `https://xxxxxxxx.ngrok.io/webhooks/${platform}` from your terminal.
