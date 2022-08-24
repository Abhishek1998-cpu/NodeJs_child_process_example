const { spawn } = require("child_process");

const child = spawn("python3", ["./1.py"]);
child.stdout.on("data", (data) => {
  console.log("Stdout = " + data);
});
