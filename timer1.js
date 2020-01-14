//Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
//The user can specify an unlimited number of alarms using command line arguments

const args = process.argv.splice(2);

for (const num of args) {
  if (num < 0 || (!Number(num))) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07')
  }, num * 1000)
}