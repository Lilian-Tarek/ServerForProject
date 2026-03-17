// const jsonServer = require("json-server");
// const auth = require("json-server-auth");
// const path = require("path"); // ضيفي السطر ده

// const app = jsonServer.create();

// // تعديل المسار هنا عشان Vercel يشوف الملف صح
// const router = jsonServer.router(path.join(__dirname, "../db.json"));

// app.db = router.db;

// const middlewares = jsonServer.defaults({
//   readOnly: false // السطر ده بيتضاف هنا
// });

// app.use(middlewares);
// // ده بيخلي السيرفر يستنى شوية لو فيه ضغط
// app.use(jsonServer.rewriter({
//   "/api/*": "/$1"
// }));
// app.use(auth);
// app.use(router);

// module.exports = app;
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");
const cors = require("cors"); // 1. استوردي مكتبة CORS

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json"));

app.db = router.db;

// 2. شغلي الـ CORS قبل أي حاجة تانية
app.use(cors()); 

const middlewares = jsonServer.defaults({
  readOnly: false
});

app.use(middlewares);

app.use(jsonServer.rewriter({
  "/api/*": "/$1"
}));

app.use(auth);
app.use(router);

module.exports = app;