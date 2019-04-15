import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import db from "./db";
import compose from "koa-compose";

const app = new Koa();

const router = new Router({ prefix: "/api" });

router.post("/devices", ctx => {
  const device = db.Device.create({
    name: ctx.request.body.name,
    location: ctx.request.body.location,
    scenes: ctx.request.body.scenes
  });

  ctx.body = {
    id: device._id,
    name: device.name,
    location: device.location,
    scenes: device.scenes
  };
});

app.use(compose([bodyParser(), router.allowedMethods(), router.routes()]));

const port = process.env.NODE_ENV === "production" ? process.env.PORT : 8082;

const listener = app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

export { listener as app };
