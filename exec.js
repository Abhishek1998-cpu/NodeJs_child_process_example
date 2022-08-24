const { exec } = require("child_process");
// const { spawn } = require("child_process");

exec("node ./1.js", (error, stdout, stderr) => {
  if (error) {
    console.log(error.message);
    return error.message;
  }
  if (stderr) {
    console.log(stderr);
    return stderr;
  }
  console.log(stdout);
  return stdout;
});

// exec("java ./1.java", (error, stdout, stderr) => {
//     if(error){
//         console.log(error.message)
//         return error.message
//     }
//     if(stderr){
//         console.log(stderr)
//         return stderr
//     }
//     console.log(stdout)
//     return stdout
// })

// const child = spawn("python3", ["./1.py"]);
// child.stdout.on("data", (data) => {
//   console.log("Stdout = " + data);
// });
