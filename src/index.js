exports.handler = async function (event, context) {
  console.log(event, context);
  let res;

  const request = JSON.parse(event.body);
  console.log("==> poojah!", request);
  if (request.op === "plus") {
    res = String(Number(request.op1) + Number(request.op2));
  } else if (request.op === "minus") {
    res = String(Number(request.op1) - Number(request.op2));
  } else if (request.op === "multiplication") {
    res = String(Number(request.op1) * Number(request.op2));
  } else if (request.op === "division") {
    res = String(Number(request.op1) / Number(request.op2));
  } else {
    res = "noop";
  }

  return res;
};
