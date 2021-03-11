//We want to sort elements given their priority//

//Ways to sort//

//1) Sort by duration without alotted time or percentage
//2) Sort by alotted time and percentage (don't have durations)


//Step 1: User enters items that they consider highest to lowest priority. The item is then array.push() into the corresponding array.


var firstPriority = [
    {
        task: 'Work on the Odin Project',
        duration: 2,
        important: true,
    },
    {
        task:'Work on independent project',
        duration: 3,
        important: true,
    }
];
var secondPriority = [
    {
        task: 'Read Algorithm Design Manual',
        duration: 2,
        important: true,
    }
];
var thirdPriority = [
    {
        task: 'Work on Code Wars Questions', 
        duration: 1.5,
        important: false,
    },
    {
        task: 'Work on Leet Code Questions',
        duration: 2,
        important: false,
    }
];
var fourthPriority = [
    {
        task: 'Read "Learning SQL"',
        duration: 1.5,
        important: false,
    },
    {
        task: 'Watch video on Graph Theory',
        duration: 1,
        important: false,
    }
];

var priorityList = [firstPriority, secondPriority, thirdPriority, fourthPriority];
console.log(priorityList)

//Step 2: User says how much time they can allocate in a given day

var alottedTime = 5;

//Step 2a: Users can change the distribution percentage of how each group should be prioritized. They will enter a whole number like 60%, and then the program will covert to 0.60.


var firstPercentage = 0.60;
var secondPercentage = 0.20;
var thirdPercentage = 0.15;
var fourthPercentage = 0.05;

//Step 3: Program to break down your alotted time of your day to the given percentages

var firstTime = alottedTime * firstPercentage;
var secondTime = alottedTime * secondPercentage;
var thirdTime = alottedTime * thirdPercentage;
var fourthTime = alottedTime * fourthPercentage;

// console.log(firstTime);
// console.log(secondTime);
// console.log(thirdTime);
// console.log(fourthTime);

//Step 4: Create Arrays with schedules

    //First way of sorting

    var durationSort = (arr) => {
        var schedule = [];
        //Pick a random task in each priority
        for(let i=0;i<arr.length;i++) {
            var pickedTask = arr[i][Math.floor(Math.random()*arr[i].length)];
            console.log(pickedTask)
            //separate the tasks into 30minute segments
            var multiplier = (pickedTask.duration / 0.5)
            console.log(multiplier)
            for(let j=0;j<multiplier;j++) {
                const newMiniTask = Object.assign({}, pickedTask, { duration: 0.5 });
                schedule.push(newMiniTask);
            }
        }
        console.log(schedule[0])
        console.log(schedule[1])
        console.log(schedule[2])
        console.log(schedule[3])
        console.log(schedule[4])
        console.log(schedule[5])
        console.log(schedule)
        //sorting the schedule based on importance
        for(let k=0;k<schedule.length;k++){
            if(schedule[k].important === true) {
                schedule1.push(schedule[k]);
                schedule.splice(k,1)
            }
        }
        console.log(schedule1)
        console.log(schedule)
        //Fisher-Yates Shuffle https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        function shuffle (array) {
            var currentIndex=array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        return schedule1.concat(shuffle(schedule));
        //return [importantTasks, unimportantShuffledTasks]
}
//question about scoping inside for loop and outside, can you use the same variable?
var tasksList = durationSort(priorityList);


//Add task options

function addTask () {

    //Create Elements
    const div = document.createElement('div');
    const taskInput = document.createElement('input');
    const durationInput = document.createElement('input');
    const aText = document.createElement('a');
    const checkboxInput = document.createElement('input');
    const linebreak = document.createElement('br');
    const addTaskbutton = document.createElement('a');

    div.class='tasks';
    div.id=`a-${2}`

    taskInput.type='text';
    taskInput.placeholder='Your Task';
    taskInput.id=`a-${2}-task`;

    durationInput.type='text';
    durationInput.placeholder='Duration in Hours';
    durationInput.id=`a-${2}-duration`;

    aText.id=`a-${2}-important`;
    aText.innerHTML='Is this task important';

    checkboxInput.type='checkbox';
    checkboxInput.id=`a-${2}-checkbox`;

    addTaskbutton.class='addTask';
    addTaskbutton.id='a-priority';
    addTaskbutton.innerHTML='+ Add more Task'

        //Append it to the array
        document.getElementById(event.srcElement.parentNode.id).appendChild(taskInput);
        document.getElementById(event.srcElement.parentNode.id).appendChild(linebreak);
    
        document.getElementById(event.srcElement.parentNode.id).appendChild(durationInput);
        document.getElementById(event.srcElement.parentNode.id).appendChild(linebreak);

        document.getElementById(event.srcElement.parentNode.id).appendChild(aText);
        document.getElementById(aText.id).appendChild(checkboxInput);
        document.getElementById(event.srcElement.parentNode.id).appendChild(linebreak);

        document.getElementById(event.srcElement.parentNode.id).appendChild(addTaskbutton);

    // addTaskbutton.addEventListener('click', addTask())
    
}

function createSchedule () {
    //loop 
    const div = document.createElement('div');
    for(let i=0;i<schedule1.length;i++){
        div.innerHTML='';
        console.log(schedule1[i].task)
        div.innerHTML = schedule1[i].task;
        document.getElementById('yourSchedule').appendChild(div);
    }
}

window.onload = createSchedule;

/*************************************** IDEAS / QUESTIONS *******************************************
 * 1) How do we come up with a way to effectively read whick task number it is
 */