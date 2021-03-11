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
            //separate the tasks into 30minute segments
            var multiplier = (pickedTask.duration / 0.5)
            for(let j=0;j<multiplier;j++) {
                const newMiniTask = Object.assign({}, pickedTask, { duration: 0.5 });
                schedule.push(newMiniTask);
            }
        }
        // console.log(schedule[0])
        // console.log(schedule[1])
        // console.log(schedule[2])
        // console.log(schedule[3])
        // console.log(schedule[4])
        // console.log(schedule[5])
        var importantTasks = [];
        //sorting the schedule based on importance
        for(let k=0;k<schedule.length;k++){
            console.log(schedule[k])
            if(schedule[k].important === true) {
                importantTasks.push(schedule[k]);
                schedule.splice(k,1)
            }
        }
        console.log(importantTasks)
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
        var shuffledTasks = shuffle(schedule);
        return [importantTasks,shuffledTasks];
}
//question about scoping inside for loop and outside, can you use the same variable?
durationSort(priorityList)


//Add task options

function addTask () {
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

    console.log(event)
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

window.addEventListener('load', (event) => {
    var randomSort = durationSort(priorityList);
    for(let i=0; i<randomSort.length;i++) {
        for(let j=0; j<randomSort[i].length;j++){
            console.log(randomSort[i][j])
        }
    }
})






//Carousel script

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*************************************** IDEAS / QUESTIONS *******************************************
 * 1) How do we come up with a way to effectively read whick task number it is
 */