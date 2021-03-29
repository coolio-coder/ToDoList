//Tasks array that will contained 

//We want to sort elements given their priority//

// INITIAL HTML CODE FOR THE WEBPAGE

//First page
window.addEventListener('load', (event) => {
    //CODE TO ADD CONTENT TO THE INDEX PAGE
    if (window.location.href.match('index.html') != null) {
        const section = document.createElement('section');
        const subtitleDiv = document.createElement('div');
        const titleP = document.createElement('p');
        const nextButton = document.createElement('a');

        section.className = 'intro-screen';
        section.innerHTML = "<div class='container center' id='test'></div>";
        titleP.className = 'title is-1';
        titleP.innerHTML = 'Welcome to Auto-tasker';
        subtitleDiv.className = 'subtitle is-4';
        subtitleDiv.innerHTML = 'Turn your life around one automated task at a time';
        nextButton.className = 'button is-primary is-medium is-outlined is-centered';
        nextButton.href = 'carousel.html';
        nextButton.innerHTML = 'Click to Get Started';

        document.body.appendChild(section);
        document.getElementById('test').appendChild(titleP);
        document.getElementById('test').appendChild(subtitleDiv);
        document.getElementById('test').appendChild(nextButton);
    } 
    //CODE TO ADD CONTENT TO THE TASK INPUT PAGE
    if (window.location.href.match('carousel.html') != null) {
        const slideshowContainer = document.createElement('div');
        var linebreak = document.createElement('br');
        var mySlidesTitle = document.createElement('div')

        var mySlidesHighTasks = document.createElement('div');
            var highTitle = document.createElement('p');
            var highSubtitle = document.createElement('a');

            const highDiv = document.createElement('div');
            const hightaskNumber = document.createElement('p');
            const hightaskInput = document.createElement('input');
            const highdurationInput = document.createElement('input');
            var highaText = document.createElement('a');
            var highcheckboxInput = document.createElement('input');
            var addTaskbutton = document.createElement('a');

        var mySlidesMedTasks = document.createElement('div');
            var medTitle = document.createElement('p');
            var medSubtitle = document.createElement('a');

            const medDiv = document.createElement('div');
            const medtaskNumber = document.createElement('p');
            const medtaskInput = document.createElement('input');
            const meddurationInput = document.createElement('input');
            var medaText = document.createElement('a');
            var medcheckboxInput = document.createElement('input');
            var addMedTaskbutton = document.createElement('a');

        var mySlidesLowTasks = document.createElement('div');
            var lowTitle = document.createElement('p');
            var lowSubtitle = document.createElement('a');

            const lowDiv = document.createElement('div');
            const lowtaskNumber = document.createElement('p');
            const lowtaskInput = document.createElement('input');
            const lowdurationInput = document.createElement('input');
            var lowaText = document.createElement('a');
            const lowcheckboxInput = document.createElement('input');
            var addLowTaskbutton = document.createElement('a');
            var submitButton = document.createElement('a');

        var backButton = document.createElement('a');
        var nextButton = document.createElement('a');

        var progressBar = document.createElement('progress');
        
        slideshowContainer.className = 'slideshow-container';
        slideshowContainer.id = 'slideshowContainer';

        mySlidesTitle.className = 'mySlides fade'
        mySlidesTitle.id = 'title'
        mySlidesTitle.style = 'display: block;'
        mySlidesTitle.innerHTML = "<p class='title is-1'>Creating your tasks</p><a class='subtitle is-4'>The purpose of this app is to make your life easier by generating a list of your tasks in 30 minute segments.</a><br><br><a class='subtitle is-4'>In each slide you will be asked to fill in a task, its duration in hours, and whether the task is important. There are 3 priority levels from highest to lowest.</a><br><br><a class='subtitle is-4'>After you hit submit on the last page, the application will prioritize your most important task first, then mixes your non-important task such that you won't get bored of a single task</a>";

        mySlidesHighTasks.className = 'mySlides fade';
        mySlidesHighTasks.id = 'highTasks';
            highTitle.className='title is-1';
            highTitle.innerHTML='Highest Priority Tasks'
            highSubtitle.className='subtitle is-4'
            highSubtitle.innerHTML='Please list all the tasks that are your highest priority and which of them are important';
                highDiv.className = 'tasks';
                highDiv.id = 'a-1';
                    hightaskNumber.className = 'subtitle is-4'
                    hightaskNumber.innerHTML = `Task 1`
                
                    hightaskInput.type='text';
                    hightaskInput.className ='input';
                    hightaskInput.placeholder='Your Task';
                    hightaskInput.id=`a-1-task`;
                
                    highdurationInput.type='text';
                    highdurationInput.className ='input'
                    highdurationInput.placeholder='Duration in Hours';
                    highdurationInput.id=`a-1-duration`;
                
                    highaText.id=`a-1-important`;
                    highaText.className='checkbox'
                    highaText.innerHTML='Is this task important';
                
                    highcheckboxInput.type='checkbox';
                    highcheckboxInput.id=`a-1-checkbox`;
            
                addTaskbutton.className='addTask button is-primary is-small';
                addTaskbutton.id=`a-1-priority`;
                addTaskbutton.innerHTML='+ Add more Task'
                addTaskbutton.onclick=addTask;
        
        mySlidesMedTasks.className = 'mySlides fade';
        mySlidesMedTasks.id = 'medTasks';
            medTitle.className='title is-1';
            medTitle.innerHTML='Medium Priority Tasks'
            medSubtitle.className='subtitle is-4'
            medSubtitle.innerHTML="Please list all the tasks that are medium priority. These are the tasks that are on your plate but aren't as important.";
                medDiv.className = 'tasks';
                medDiv.id = 'b-1';
                    medtaskNumber.className = 'subtitle is-4'
                    medtaskNumber.innerHTML = `Task 1`
                
                    medtaskInput.type='text';
                    medtaskInput.className ='input';
                    medtaskInput.placeholder='Your Task';
                    medtaskInput.id=`b-1-task`;
                
                    meddurationInput.type='text';
                    meddurationInput.className ='input'
                    meddurationInput.placeholder='Duration in Hours';
                    meddurationInput.id=`b-1-duration`;
                
                    medaText.id=`b-1-important`;
                    medaText.className='checkbox'
                    medaText.innerHTML='Is this task important';
                
                    medcheckboxInput.type='checkbox';
                    medcheckboxInput.id=`b-1-checkbox`;
            
                addMedTaskbutton.className='addTask button is-primary is-small';
                addMedTaskbutton.id=`b-1-priority`;
                addMedTaskbutton.innerHTML='+ Add more Task'
                addMedTaskbutton.onclick=addTask;

        mySlidesLowTasks.className = 'mySlides fade';
        mySlidesLowTasks.id = 'lowTasks';
            lowTitle.className='title is-1';
            lowTitle.innerHTML='Lowest Priority Tasks'
            lowSubtitle.className='subtitle is-4'
            lowSubtitle.innerHTML="Please list all the tasks that are your lowest priority. These are the tasks that are not important but nice to have completed.";
                lowDiv.className = 'tasks';
                lowDiv.id = 'c-1';
                    lowtaskNumber.className = 'subtitle is-4'
                    lowtaskNumber.innerHTML = `Task 1`
                
                    lowtaskInput.type='text';
                    lowtaskInput.className ='input';
                    lowtaskInput.placeholder='Your Task';
                    lowtaskInput.id=`c-1-task`;
                
                    lowdurationInput.type='text';
                    lowdurationInput.className ='input'
                    lowdurationInput.placeholder='Duration in Hours';
                    lowdurationInput.id=`c-1-duration`;
                
                    lowaText.id=`c-1-important`;
                    lowaText.className='checkbox'
                    lowaText.innerHTML='Is this task important';
                
                    lowcheckboxInput.type='checkbox';
                    lowcheckboxInput.id=`c-1-checkbox`;
            
                addLowTaskbutton.className='addTask button is-primary is-small';
                addLowTaskbutton.id=`c-1-priority`;
                addLowTaskbutton.innerHTML='+ Add more Task'
                addLowTaskbutton.onclick=addTask;
            submitButton.className='button is-medium is-light is-primary';
            submitButton.id='submit-button'
            submitButton.onclick=getTasks;
            submitButton.innerHTML='Submit your tasks'
        
        //Back and next buttons
        slideshowContainer.innerHTML = '<a class="prev" id="previous" onclick="plusSlides(-1)">&#10094;</a><a class="next" id="next" onclick="plusSlides(1)">&#10095;</a>';

        //Progress Bar
        progressBar.className='progress is-medium tasks';
        progressBar.id='progress-bar';
        progressBar.value='0';
        progressBar.max='100';
        
        document.body.appendChild(backButton);
        document.body.appendChild(nextButton);
        document.body.appendChild(slideshowContainer);
        document.getElementById('slideshowContainer').appendChild(mySlidesTitle)

        document.getElementById('slideshowContainer').appendChild(mySlidesHighTasks)
            //Title and Subtitle for the highest priority slide
            document.getElementById('highTasks').appendChild(highTitle)
            document.getElementById('highTasks').appendChild(highSubtitle)
            document.getElementById('highTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            document.getElementById('highTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            document.getElementById('highTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            //Div container for the questions
            document.getElementById('highTasks').appendChild(highDiv)
                //Append the input fields
                document.getElementById('a-1').appendChild(hightaskNumber);
                document.getElementById('a-1').appendChild(hightaskInput);
                document.getElementById('a-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                //Append the duration fields
                document.getElementById('a-1').appendChild(highdurationInput);
                document.getElementById('a-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                
                document.getElementById('a-1').appendChild(highaText);
                document.getElementById(highaText.id).appendChild(highcheckboxInput);
                aText = document.createElement('a');
                document.getElementById('a-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                document.getElementById('a-1').appendChild(linebreak);
                linebreak = document.createElement('br');
            //Add Task button outside of the div container    
            document.getElementById('highTasks').appendChild(addTaskbutton);

        document.getElementById('slideshowContainer').appendChild(mySlidesMedTasks)
            //Title and Subtitle for the highest priority slide
            document.getElementById('medTasks').appendChild(medTitle)
            document.getElementById('medTasks').appendChild(medSubtitle)
            document.getElementById('medTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            document.getElementById('medTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            document.getElementById('medTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            //Div container for the questions
            document.getElementById('medTasks').appendChild(medDiv)
                //Append the input fields
                document.getElementById('b-1').appendChild(medtaskNumber);
                document.getElementById('b-1').appendChild(medtaskInput);
                document.getElementById('b-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                //Append the duration fields
                document.getElementById('b-1').appendChild(meddurationInput);
                document.getElementById('b-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                
                document.getElementById('b-1').appendChild(medaText);
                document.getElementById(highaText.id).appendChild(medcheckboxInput);
                aText = document.createElement('b');
                document.getElementById('b-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                document.getElementById('b-1').appendChild(linebreak);
                linebreak = document.createElement('br');
            //Add Task button outside of the div container    
            document.getElementById('medTasks').appendChild(addMedTaskbutton);
        
        document.getElementById('slideshowContainer').appendChild(mySlidesLowTasks)
            //Title and Subtitle for the highest priority slide
            document.getElementById('lowTasks').appendChild(lowTitle)
            document.getElementById('lowTasks').appendChild(lowSubtitle)
            document.getElementById('lowTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            document.getElementById('lowTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            document.getElementById('lowTasks').appendChild(linebreak);
            linebreak = document.createElement('br');
            //Div container for the questions
            document.getElementById('lowTasks').appendChild(lowDiv)
                //Append the input fields
                document.getElementById('c-1').appendChild(lowtaskNumber);
                document.getElementById('c-1').appendChild(lowtaskInput);
                document.getElementById('c-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                //Append the duration fields
                document.getElementById('c-1').appendChild(lowdurationInput);
                document.getElementById('c-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                
                document.getElementById('c-1').appendChild(lowaText);
                document.getElementById(highaText.id).appendChild(lowcheckboxInput);
                aText = document.createElement('c');
                document.getElementById('c-1').appendChild(linebreak);
                linebreak = document.createElement('br');
                document.getElementById('c-1').appendChild(linebreak);
                linebreak = document.createElement('br');
            //Add Task button outside of the div container    
            document.getElementById('lowTasks').appendChild(addLowTaskbutton);
            document.getElementById('lowTasks').appendChild(linebreak);
            document.getElementById('lowTasks').appendChild(submitButton)

            document.getElementById('slideshowContainer').appendChild(progressBar)
    } 
})



//Ways to sort//

//1) Sort by duration without alotted time or percentage
//2) Sort by alotted time and percentage (don't have durations)


//Step 1: User enters items that they consider highest to lowest priority. The item is then array.push() into the corresponding array.

var aPriority = [],
    bPriority = [],
    cPriority = [];

var priorityList = [aPriority, bPriority, cPriority];
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



//Add task options

var priorityIndex = {
    a: 1,
    b: 1,
    c: 1,
};


function addTask () {
    const div = document.createElement('div');
    const taskNumber = document.createElement('p');
    const taskInput = document.createElement('input');
    const durationInput = document.createElement('input');
    var aText = document.createElement('a');
    const checkboxInput = document.createElement('input');
    var linebreak = document.createElement('br');
    // const addTaskbutton = document.createElement('a');

    //Remove the button
    
    //Examine the index of the add button and tasks 
    var firstTaskId = event.target.parentNode.querySelectorAll("div")[0].id;
    console.log(event.target.parentNode.querySelectorAll("div")[0].id)
    console.log(document.getElementById(firstTaskId).id.charAt(0))
    var priorityDegree = document.getElementById(firstTaskId).id.charAt(0);
    console.log(priorityIndex[`${priorityDegree}`])
    
    console.log(document.getElementById(`${priorityDegree}-${priorityIndex[`${priorityDegree}`]}-priority`))
    // document.getElementById(`${priorityDegree}-${priorityIndex[`${priorityDegree}Priority`]}-priority`).remove();

    priorityIndex[`${priorityDegree}`] += 1;
    var priorityNumber = priorityIndex[priorityDegree];
    
    div.class='tasks';
    div.id=`${priorityDegree}-${priorityNumber}`

    taskNumber.className = 'subtitle is-4'
    taskNumber.innerHTML = `Task ${priorityNumber}`

    taskInput.type='text';
    taskInput.className ='input';
    taskInput.placeholder='Your Task';
    taskInput.id=`${priorityDegree}-${priorityNumber}-task`;

    durationInput.type='text';
    durationInput.className ='input'
    durationInput.placeholder='Duration in Hours';
    durationInput.id=`${priorityDegree}-${priorityNumber}-duration`;

    aText.id=`${priorityDegree}-${priorityNumber}-important`;
    aText.className='checkbox'
    aText.innerHTML='Is this task important';

    checkboxInput.type='checkbox';
    checkboxInput.id=`${priorityDegree}-${priorityNumber}-checkbox`;

    // addTaskbutton.className='addTask button is-primary is-small';
    // addTaskbutton.id=`${priorityDegree}-${priorityNumber}-priority`;
    // addTaskbutton.innerHTML='+ Add more Task'
    
    // console.log(target)
    document.getElementById(firstTaskId).appendChild(taskNumber);
    document.getElementById(firstTaskId).appendChild(taskInput);
    document.getElementById(firstTaskId).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    document.getElementById(firstTaskId).appendChild(durationInput);
    document.getElementById(firstTaskId).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    document.getElementById(firstTaskId).appendChild(aText);
    document.getElementById(aText.id).appendChild(checkboxInput);
    aText = document.createElement('a');
    document.getElementById(firstTaskId).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    // document.getElementById(firstTaskId).appendChild(addTaskbutton);
    
    document.getElementById(firstTaskId).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    
    // addTaskbutton.addEventListener('click', addTask())
    // addTaskbutton.onclick = addTask();
    
}

// window.addEventListener('load', (event) => {
//     var randomSort = durationSort(priorityList);
//     for(let i=0; i<randomSort.length;i++) {
//         for(let j=0; j<randomSort[i].length;j++){
//             document.getElementById('schedule-box').innerHTML +=
//             "<tr> <td class=\"grid-item\">" + "N/A" +
//             "</td><td class=\"grid-item\">" + randomSort[i][j].task +
//             "</td><td class=\"grid-item\">" + randomSort[i][j].duration + " hour" + "</td> </tr>";
//         }
//     }
// })


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
    var importantTasks = [];
    var nonImportantTasks = [];

    console.log(schedule.length)
    console.log(schedule)

    //sorting the schedule based on importance
    for(let k=0;k<schedule.length;k++){
        if(schedule[k].isImportant === true) {
            importantTasks.push(schedule[k]);
        } else {
            nonImportantTasks.push(schedule[k])
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
    var shuffledNonImportantTasks = shuffle(nonImportantTasks);
    return [importantTasks,shuffledNonImportantTasks];
}
//question about scoping inside for loop and outside, can you use the same variable?
// durationSort(priorityList)

//Carousel script

<<<<<<< HEAD
// window.addEventListener('load', (event) => {
//     //CODE TO ADD CONTENT TO THE INDEX PAGE
// if (window.location.href.match('carousel.html') != null) {
    var slideIndex = 2;
    // showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    console.log('hey')
    showSlides(slideIndex += n);
    }
=======
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
>>>>>>> 61728b678e00a30fea0b9374c252896d2c757ea0

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = n - 1}
    if (n < 1) {slideIndex = n + 1}

    //Remove the slide arrow on the first and last page
    var backButton = document.getElementById("previous");
    var nextButton = document.getElementById('next');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        if(n === 1) {backButton.style.display = 'none'} else {backButton.style.display = 'block'}
        if(n === slides.length) {nextButton.style.display = 'none'} else {nextButton.style.display = 'block'}
        slides[slideIndex-1].style.display = "block";

    //Change the progress bar based on the slide
    var progressBar = document.getElementById("progress-bar");
    if (n === 1) {progressBar.value = 0;}
    else if (n===2) {progressBar.value = 25;}
    else if (n===3) {progressBar.value = 50;}
    else if (n===4) {progressBar.value = 75;}
    else if (n===5) {progressBar.value = 100;}
    }
// }})



/*************************************** IDEAS / QUESTIONS *******************************************
 * 1) How do we come up with a way to effectively read whick task number it is
 */

 function Task (task, duration, isImportant) {
    this.task = task;
    this.duration = duration;
    this.isImportant = isImportant;
}

const newTask = new Task('Eat pie', '0.5', true);

var priorityLetters = ['a','b','c'];

function getTasks() {
    for(let i = 0; i < priorityLetters.length; i++){
        console.log(priorityLetters[i])
        for(let j = 1; j <= priorityIndex[priorityLetters[i]]; j++) {
            var taskValue = document.getElementById(`${priorityLetters[i]}-${j}-task`).value
            var durationValue = document.getElementById(`${priorityLetters[i]}-${j}-duration`).value
            if(document.getElementById(`${priorityLetters[i]}-${j}-checkbox`) === null) {return false;}
            var checkedValue = document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked
            
            console.log(priorityLetters[i])
            //Retreive and push onto array: task name, duration, and whether it's important
            if(priorityLetters[i] === 'a') {
                aPriority.push(new Task(taskValue,durationValue,checkedValue))
                document.getElementById(`${priorityLetters[i]}-${j}-task`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-duration`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked = null;
            }
            else if(priorityLetters[i] === 'b') {
                bPriority.push(new Task(taskValue,durationValue,checkedValue))
                document.getElementById(`${priorityLetters[i]}-${j}-task`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-duration`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked = null;
            }
            if(priorityLetters[i] === 'c') {
                cPriority.push(new Task(taskValue,durationValue,checkedValue))
                document.getElementById(`${priorityLetters[i]}-${j}-task`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-duration`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked = null;
            }
        }
    }
    console.log(priorityList)
    durationSort(priorityList);

    // plusSlides(slideIndex)

    var randomSort = durationSort(priorityList);
    for(let i=0; i<randomSort.length;i++) {
        for(let j=0; j<randomSort[i].length;j++){
            document.getElementById('schedule-box').innerHTML +=
            "<tr> <td class=\"grid-item\">" + "N/A" +
            "</td><td class=\"grid-item\">" + randomSort[i][j].task +
            "</td><td class=\"grid-item\">" + randomSort[i][j].duration + " hour" + "</td> </tr>";
        }
    }
}