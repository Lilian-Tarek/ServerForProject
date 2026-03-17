const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path"); // ضيفي السطر ده

const app = jsonServer.create();

// تعديل المسار هنا عشان Vercel يشوف الملف صح
const router = jsonServer.router(path.join(__dirname, "../db.json"));

app.db = router.db;

const middlewares = jsonServer.defaults({
  readOnly: false // السطر ده بيتضاف هنا
});

app.use(middlewares);
app.use(auth);
app.use(router);

module.exports = app;
