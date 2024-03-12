const {questions} = require('./question.js')
const { prompt } = require('enquirer');
const moment = require('moment')
const notifier = require('node-notifier');


prompt(questions)
  .then(answer => startTimer(answer))
  .catch(console.error);

const formatedTime = (totalSeconds)=>{
  const duration  = moment.duration(totalSeconds,'seconds')
  const hours =  duration.hours().toString().padStart(2,'0')
  const minutes =  duration.minutes().toString().padStart(2,'0')
  const seconds =  duration.seconds().toString().padStart(2,'0')

  return `${hours}:${minutes}:${seconds}`
}

const startTimer = (answer) => {
  const {work,rest,repeat} = answer;
  let isWorking = true
  let remainingTime = work * 60
  let session  = repeat

  const intervalID = setInterval(() =>{
    const time = formatedTime(remainingTime)
    console.log(`${isWorking ? 'Work' : 'Rest'} : ${time} `)
    remainingTime--
    
    if (remainingTime === 0) {
      if (isWorking) {
        console.log('Rest Time!!');
        isWorking = false;
        remainingTime = rest * 60;
      } else {
        session--;
        if (session === 0) {
          clearInterval(intervalID);
          return console.log('Pomodoro Completed!!');
        }
        console.log('Work Time!!');
        isWorking = true;
        remainingTime = work * 60;
      }
      notifier.notify({
				title: !isWorking ? 'Break Time!' : 'Work Time!',
				message: !isWorking ? 'Good Work!' : 'Good Break!',
				sound: true,
				wait: true,
			});
    }

  },1000)

}
  
  
