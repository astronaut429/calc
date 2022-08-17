const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.post("/", (req, res) => {
  const request = req.body;
  console.log("==> poojah!", request);
  if (request.op === "plus") {
    res.send(String(Number(request.op1) + Number(request.op2)));
  } else if (request.op === "minus") {
    res.send(String(Number(request.op1) - Number(request.op2)));
  } else if (request.op === "multiplication") {
    res.send(String(Number(request.op1) * Number(request.op2)));
  } else if (request.op === "division") {
    res.send(String(Number(request.op1) / Number(request.op2)));
  } else {
    res.send("noop");
  }

  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
