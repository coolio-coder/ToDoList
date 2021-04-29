//Tasks array that will contained 
localStorage.setItem('name', 'Bill');


// INITIAL HTML CODE FOR THE WEBPAGE

//First page
window.addEventListener('load', (event) => {
    const mainNav = document.createElement('nav');
        const navBarBrand = document.createElement('div')
            const navBarLogoContainer = document.createElement('a');
                const logoImg = document.createElement('img');
            const buttons = document.createElement('a');
                let spans = document.createElement('span');
        const navMenu = document.createElement('div');
            const navBarStart = document.createElement('div')
                const homeOption = document.createElement('a');
                const documentationOption =document.createElement('a');
    
    mainNav.className="navbar";
    mainNav.role='navigation';
    mainNav.id='mainNav'
        navBarBrand.className='navbar-brand';
        navBarBrand.id='navBarBrand';
            navBarLogoContainer.className='navbar-item';
            navBarLogoContainer.id='navBarLogoContainer';
                logoImg.src='todolist-logo.jpg';
                logoImg.id='logo-img';
        buttons.role='button';
        buttons.class='navbar-burger';

    document.body.appendChild(mainNav);
    document.getElementById('mainNav').appendChild(navBarBrand);
    document.getElementById('navBarBrand').appendChild(navBarLogoContainer);
    document.getElementById('navBarLogoContainer').appendChild(logoImg);
    document.getElementById('mainNav').appendChild(buttons);
    

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
        let  linebreak = document.createElement('br');
        let  mySlidesTitle = document.createElement('div');
            let  submitButton = document.createElement('a');

        let  backButton = document.createElement('a');
        let  nextButton = document.createElement('a');
        let  progressBar = document.createElement('progress');
        
        slideshowContainer.className = 'slideshow-container';
        slideshowContainer.id = 'slideshowContainer';
        mySlidesTitle.className = 'mySlides fade'
        mySlidesTitle.id = 'title'
        mySlidesTitle.style = 'display: block;'
        mySlidesTitle.innerHTML = "<p class='title is-1'>Creating your tasks</p><a class='subtitle is-4'>The purpose of this app is to make your life easier by generating a list of your tasks in 30 minute segments.</a><br><br><a class='subtitle is-4'>In each slide you will be asked to fill in a task, its duration in hours, and whether the task is important. There are 3 priority levels from highest to lowest.</a><br><br><a class='subtitle is-4'>After you hit submit on the last page, the application will prioritize your most important task first, then mixes your non-important task such that you won't get bored of a single task</a> <br><br> <a class ='subtitle is-4'>⌛ Enter your start time below to get started.⌛</a><input type='time' class='input' id='start-time'>";

            submitButton.className='button is-medium is-light is-primary';
            submitButton.id='submit-button'
            submitButton.onclick=getTasks;
            // submitButton.href="SchedulePage.html";
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

        //Add functions
        addTaskPage('a',true)
        addTaskPage('b',true)
        addTaskPage('c',true)

            document.getElementById('lowTasks').appendChild(linebreak)
            document.getElementById('lowTasks').appendChild(submitButton)
            document.getElementById('slideshowContainer').appendChild(progressBar)
    } 
    if (window.location.href.match('SchedulePage.html') != null) {
        let  slideContainer = document.createElement('div');
        let  scheduleDiv = document.createElement('div');
            let  scheduleTitleP = document.createElement('p');
            let  scheduleTable = document.createElement('table');
            let  tableRow = document.createElement('tr');
            let  tableTimeHead = document.createElement('th');
            let  tableTaskHead = document.createElement('th');
            let  tableDurationHead = document.createElement('th');
        let  restartButton = document.createElement('a');
        let  shuffleButton = document.createElement('a');
        let  lineBreak = document.createElement('br');

        let divDropdown = document.createElement('div');
            let divDropdownTrig = document.createElement('div');
                let dropDownbutton = document.createElement('button');
                let dropDownTitle = document.createElement('span');
                let dropDownIcon = document.createElement('i');
            let dropDownMenu = document.createElement("div");
                let dropDownContent = document.createElement('div');
                    let dropDownShf1 = document.createElement('a');
                    let dropDownShf2 = document.createElement('a');
                    let dropDownShf3 = document.createElement('a');
                    let dropDownShf4 = document.createElement('a');

        //Assign Classes and Ids
        slideContainer.className='slideshow-container';
        slideContainer.id='main-container';

        scheduleDiv.className='mySlides fade';
        scheduleDiv.id='scheduleDiv';
        scheduleDiv.style='display:block'
            scheduleTitleP.className='title is-1';
            scheduleTitleP.innerHTML='Your Schedule';
            scheduleTable.className='table is-bordered is-striped is-narrow is-hoverable';
            scheduleTable.id='schedule-box';
            tableRow.id='tableHead';
                tableTimeHead.title='Time';
                tableTimeHead.innerHTML='Time';
                tableTaskHead.title='Task';
                tableTaskHead.innerHTML='Task';
                tableDurationHead.title='Duration';
                tableDurationHead.innerHTML='Duration';
        restartButton.className='button is-danger';
        restartButton.onclick=restartSchedule;
        restartButton.innerHTML='🗑️Create a New Schedule🗑️';
        restartButton.style='margin-top: 30px';
        shuffleButton.className='button is-success';
        shuffleButton.id='shuffle';
        shuffleButton.innerHTML='🎲Shuffle Your Schedule🎲';
        shuffleButton.onclick=shuffleSchedule;

        divDropdown.className = 'dropdown';
        divDropdown.id = 'divDropdown';
            divDropdownTrig.className = 'dropdown-trigger';
            divDropdownTrig.id = 'divDropdownTrig';
                dropDownbutton.className = 'button is-info';
                dropDownbutton.id = 'dropDownbutton';
                dropDownbutton.setAttribute('aria-haspopup', 'true')
                dropDownbutton.setAttribute('aria-controls', 'dropdown-menu');
                    dropDownTitle.innerHTML = 'Set your Shuffle Type ⬇';
                    dropDownTitle.id = 'dropDownTitle';
                    // dropDownIcon.className = 'icon is-small';
                    // dropDownIcon.innerHTML = '<i class="fas fa-angle-down" aria-hidden="true"></i>';
            dropDownMenu.className = 'dropdown-menu';
            dropDownMenu.id = 'dropdown-menu';
            dropDownMenu.role = 'menu';
                dropDownContent.className = 'dropdown-content';
                dropDownContent.id = 'dropDownContent';
                    dropDownShf1.className = 'dropdown-item is-active'
                    dropDownShf1.innerHTML = 'Default Sort / Fisher Yates'
                    dropDownShf1.id = 'defaultSort';
                    dropDownShf1.onclick = setSchedule;
                    dropDownShf2.className = 'dropdown-item'
                    dropDownShf2.innerHTML = 'Alphabet Sort'
                    dropDownShf2.id = 'alphabetSort'
                    dropDownShf2.onclick = setSchedule;
                    dropDownShf3.className = 'dropdown-item'
                    dropDownShf3.innerHTML = 'Reverse Alphabet Sort'
                    dropDownShf3.id = 'reverseAlphabetSort'
                    dropDownShf3.onclick = setSchedule;
                    dropDownShf4.className = 'dropdown-item'
                    dropDownShf4.innerHTML = 'Dispersed Sort'
                    dropDownShf4.id = 'dispersedSort';
                    dropDownShf4.onclick = setSchedule;

        
        //Append the elements to the HTML body
        document.body.appendChild(slideContainer);
        document.getElementById('main-container').appendChild(scheduleDiv)
        document.getElementById('scheduleDiv').appendChild(scheduleTitleP);
        document.getElementById('scheduleDiv').appendChild(scheduleTable);
        document.getElementById('schedule-box').appendChild(tableRow);
        document.getElementById('tableHead').appendChild(tableTimeHead);
        document.getElementById('tableHead').appendChild(tableTaskHead);
        document.getElementById('tableHead').appendChild(tableDurationHead);
        document.getElementById('main-container').appendChild(lineBreak);
        lineBreak = document.createElement('br');
        
        

        document.getElementById('main-container').appendChild(divDropdown);
            document.getElementById('divDropdown').appendChild(divDropdownTrig);
            document.getElementById('divDropdownTrig').appendChild(dropDownbutton);
                document.getElementById('dropDownbutton').appendChild(dropDownTitle);
                document.getElementById('dropDownbutton').appendChild(dropDownIcon);
            document.getElementById('divDropdown').appendChild(dropDownMenu);
                document.getElementById('dropdown-menu').appendChild(dropDownContent);
                    document.getElementById('dropDownContent').appendChild(dropDownShf1);
                    document.getElementById('dropDownContent').appendChild(dropDownShf2);
                    document.getElementById('dropDownContent').appendChild(dropDownShf3);
                    document.getElementById('dropDownContent').appendChild(dropDownShf4);

        document.getElementById('main-container').appendChild(lineBreak);
        lineBreak = document.createElement('br');
        document.getElementById('main-container').appendChild(lineBreak);
        lineBreak = document.createElement('br');
        document.getElementById('main-container').appendChild(shuffleButton);
        document.getElementById('main-container').appendChild(lineBreak);
        document.getElementById('main-container').appendChild(restartButton);


    //Get session storage
    console.log('stored session')
    let  storedArray = JSON.parse(sessionStorage.getItem("myTasks"));

    //For loop to get all the information from the random sort array and place them on a table
    console.log(storedArray)
        for(let i=0; i<storedArray.length;i++) {
            document.getElementById('schedule-box').innerHTML +=
            "<tr> <td class=\"grid-item\">" + storedArray[i].time +
            "</td><td class=\"grid-item\">" + storedArray[i].task +
            "</td><td class=\"grid-item\">" + storedArray[i].duration + " hour";
        }

        //If users decides to shuffle the schedule
        function shuffleSchedule () {
            //Find the current Time
            let  currentTime = storedArray[0]['time'];

            //Empty out the previous table based on class name
            [...document.getElementsByClassName("grid-item")].map(n => n && n.remove());

            //Shuffle the stored array
            //Set the second argument as the type of shuffle
            let  shuffledStoredArray = shuffleAgain(storedArray, oldShuffleAlgo);
            console.log(shuffledStoredArray)
            
            //Assign times to each task under random sort
            let  finalTaskList = [];
            
            for(let j=0;j<shuffledStoredArray.length;++j){
                    shuffledStoredArray[j]['time'] = '';
                    let  newTime = currentTime;
                    let  newTimedTask = Object.assign({}, shuffledStoredArray[j], { time: newTime});
                    finalTaskList.push(newTimedTask);
                    currentTime = addTime(currentTime, 30);
                }

            //Create new table
            for(let i=0; i<finalTaskList.length;i++) {
                document.getElementById('schedule-box').innerHTML +=
                "<tr> <td class=\"grid-item\">" + finalTaskList[i].time +
                "</td><td class=\"grid-item\">" + finalTaskList[i].task +
                "</td><td class=\"grid-item\">" + finalTaskList[i].duration + " hour" + "</td> </tr>";
            }

            //Declare finalTaskList as the new storedArray
        storedArray = finalTaskList
        }


        var dropdown = document.querySelector('.dropdown');
        var dropdownItem = document.querySelector('.dropdown-item');

        //Toggle the drop down off and on
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdown.classList.toggle('is-active');
        });

        //Assign the shuffle function to be based on the selection of the 
    }
})

let oldShuffleAlgo = "defaultSort";
let newShuffeAlgo = "";

function setSchedule () {
    console.log(oldShuffleAlgo)
    //Find the element that the user clicks
    let dropdownItem = document.getElementById(event.target.id);
    
    console.log(dropdownItem);
    console.log(document.getElementById('defaultSort'))
    //If the id is the same as the old shuffle algo, then we don't do anything as set the inner html to be default
    if(dropdownItem.id == oldShuffleAlgo && dropdownItem.id == "defaultSort") {
        document.getElementById('dropDownTitle').innerHTML = dropdownItem.innerHTML
    } else if (dropdownItem.id == oldShuffleAlgo && dropdownItem.id != "defaultSort") {
        document.getElementById('dropDownTitle').innerHTML = "Default Sort / Fisher Yates";
        dropdownItem.classList.toggle('is-active')
        document.getElementById('defaultSort').classList.toggle('is-active');
    }
    else {
        //If the new toggle's value isn't the old shuffle algo, then toggle off the oldShuffleAlgo
        document.getElementById(oldShuffleAlgo).classList.toggle('is-active');
        //Toggle on the new button
        dropdownItem.classList.toggle('is-active');
        //Set the old shuffle algo as the current id
        oldShuffleAlgo = dropdownItem.id;
        document.getElementById('dropDownTitle').innerHTML = dropdownItem.innerHTML;
    }
}

function addTaskPage (importanceIndex) {
    //To create the slide for the high priority tasks
    if(importanceIndex == 'a'){
        let  mySlidesTasks = document.createElement('div');
        let  Title = document.createElement('p');
        let  Subtitle = document.createElement('a');
        //Add the task container
        mySlidesTasks.className = 'mySlides fade';
        mySlidesTasks.id = 'highTasks';
        mySlidesTasks.style = 'display: none;'
        document.getElementById('slideshowContainer').appendChild(mySlidesTasks)
            //Add the title for the section
            Title.className='title is-1';
            Title.innerHTML='Highest Priority Tasks'
            document.getElementById('highTasks').appendChild(Title)
            Subtitle.className='subtitle is-4'
            Subtitle.innerHTML='Please list all the tasks that are your highest priority and which of them are important';
            document.getElementById('highTasks').appendChild(Subtitle)
                //Add the task section 
                addTaskDiv('highTasks','a','1', true);
    }
    if(importanceIndex == 'b'){
        console.log('hi')
        let  mySlidesTasks = document.createElement('div');
        let  Title = document.createElement('p');
        let  Subtitle = document.createElement('a');
        //Add the task container
        mySlidesTasks.className = 'mySlides fade';
        mySlidesTasks.id = 'medTasks';
        mySlidesTasks.style = 'display: none;'
        document.getElementById('slideshowContainer').appendChild(mySlidesTasks)
            //Add the title for the section
            Title.className='title is-1';
            Title.innerHTML='Medium Priority Tasks'
            document.getElementById('medTasks').appendChild(Title)
            Subtitle.className='subtitle is-4'
            Subtitle.innerHTML="Please list all the tasks that are medium priority. These are the tasks that are on your plate but aren't as important.";
            document.getElementById('medTasks').appendChild(Subtitle)
                //Add the task section 
                addTaskDiv('medTasks','b','1', true);
    }
    if(importanceIndex == 'c'){
        let  mySlidesTasks = document.createElement('div');
        let  Title = document.createElement('p');
        let  Subtitle = document.createElement('a');
        //Add the task container
        mySlidesTasks.className = 'mySlides fade';
        mySlidesTasks.id = 'lowTasks';
        mySlidesTasks.style = 'display: none;'
        document.getElementById('slideshowContainer').appendChild(mySlidesTasks)
            //Add the title for the section
            Title.className='title is-1';
            Title.innerHTML='Lowest Priority Tasks'
            document.getElementById('lowTasks').appendChild(Title)
            Subtitle.className='subtitle is-4'
            Subtitle.innerHTML="Please list all the tasks that are your lowest priority. These are the tasks that are not important but nice to have completed.";
            document.getElementById('lowTasks').appendChild(Subtitle)
                //Add the task section 
                addTaskDiv('lowTasks','c','1', true);
    }
}

function addTaskDiv (containerID, priorityIndex, priorityNum, addButton) {
    const div = document.createElement('div');
    const taskNumber = document.createElement('p');
    const taskInput = document.createElement('input');
    const durationInput = document.createElement('input');
    let  aText = document.createElement('a');
    const checkboxInput = document.createElement('input');
    let  addTaskText = document.createElement('a');
    const taskCheckboxInput = document.createElement('input');
    let  linebreak = document.createElement('br');

    div.className='tasks';
    div.id=`${priorityIndex}-${priorityNum}`;

    taskNumber.className = 'subtitle is-4'
    taskNumber.innerHTML = `Task ${priorityNum}`

    taskInput.type='text';
    taskInput.className ='input';
    taskInput.placeholder='Your Task';
    taskInput.id=`${priorityIndex}-${priorityNum}-task`;

    durationInput.type='text';
    durationInput.className ='input'
    durationInput.placeholder='Duration in Hours';
    durationInput.id=`${priorityIndex}-${priorityNum}-duration`;

    aText.id=`${priorityIndex}-${priorityNum}-important`;
    aText.className='checkbox'
    aText.innerHTML='Is this task important?';

    checkboxInput.type='checkbox';
    checkboxInput.id=`${priorityIndex}-${priorityNum}-checkbox`;

    addTaskText.id=`${priorityIndex}-${priorityNum}-taskText`;
    addTaskText.className='checkbox';
    addTaskText.innerHTML='Add this task to your schedule?';

    taskCheckboxInput.type='checkbox';
    taskCheckboxInput.id=`${priorityIndex}-${priorityNum}-taskcheckbox`;

    document.getElementById(containerID).appendChild(div);
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(taskNumber);
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(taskInput);
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(durationInput);
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(aText);
    document.getElementById(aText.id).appendChild(checkboxInput);
    aText = document.createElement('a');
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(linebreak);
    linebreak = document.createElement('br');

    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(addTaskText);
    document.getElementById(addTaskText.id).appendChild(taskCheckboxInput);
    addTaskText = document.createElement('a');

    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(linebreak);
    linebreak = document.createElement('br');
    document.getElementById(`${priorityIndex}-${priorityNum}`).appendChild(linebreak);
    linebreak = document.createElement('br');

    if(addButton === true) {
        let  addTaskbutton = document.createElement('a');

        addTaskbutton.className='addTask button is-primary is-small';
        addTaskbutton.id=`${priorityIndex}-${priorityNum}-priority`;
        addTaskbutton.innerHTML='+ Add more Task'
        addTaskbutton.onclick=addTask;

        //Add Task button outside of the div container    
        document.getElementById(`${containerID}`).appendChild(addTaskbutton);
    }
}


//Step 1: User enters items that they consider highest to lowest priority. The item is then array.push() into the corresponding array.

let  aPriority = [],
    bPriority = [],
    cPriority = [];

let  priorityList = [aPriority, bPriority, cPriority];
console.log(priorityList)

//Add task options

let  priorityIndex = {
    a: 1,
    b: 1,
    c: 1,
};


function addTask () {
    //Examine the index of the add button and tasks 
    let  firstTaskId = event.target.parentNode.querySelectorAll("div")[0].id;
    console.log(event.target.parentNode.querySelectorAll("div")[0].id)
    console.log(document.getElementById(firstTaskId).id.charAt(0))
    let  priorityDegree = document.getElementById(firstTaskId).id.charAt(0);
    console.log(priorityIndex[`${priorityDegree}`])
    
    priorityIndex[`${priorityDegree}`] += 1;
    let  priorityNumber = priorityIndex[priorityDegree];
    
    addTaskDiv (firstTaskId, priorityDegree, priorityNumber)
}

function addTime (initialTime, moreTime) {
    let  hour = parseInt(initialTime.split(':')[0]);
    let  minute = parseInt(initialTime.split(':')[1]);
    minute += moreTime;
    if (minute >= 60) {
        if(minute % 60 >= 0) {
            hour = hour + minute/60;
            minute = minute % 60;
        }
        if (hour > 24) {
            hour = 0;
        } 
    }
    if (hour.toString().length < 2) {hour = String(0+hour)}
    if (minute.toString().length < 2) {
        if(minute == 0) {minute = String('00') 
        }
        else {minute = String(0+minute)
        }
    }
    
    // console.log([hour, minute].join(':'))
    return [hour, minute].join(':')
}


let  a1 = [
    {task: 'Sleep',
     duration: '3',
     isImportant: true,
     addToList: true,
    },
    {task: 'Study for exam',
    duration: '2',
    isImportant: false,
    addToList: false,
    },
    {task: 'Finish Homework',
    duration: '2',
    isImportant: false,
    addToList: true,
    }
];

let  b1 = [
    {task: 'Read book',
     duration: '1.5',
     isImportant: false,
     addToList: false,
    },
    {task: 'Go to the park',
    duration: '2',
    isImportant: false,
    addToList: false,
    }
];

let  c1 = [
    {task: 'Take out trash',
     duration: '0.5',
     isImportant: false,
     addToList: true,
    }
];

let  exampleTask = [a1,b1,c1];

function addDurationToArray (task, multiplier, array) {
    for(let j=0;j<multiplier;j++) {
        const newMiniTask = Object.assign({}, task, { duration: 0.5 });
        array.push(newMiniTask);
    }
}

function shuffle (array) {
    let  currentIndex=array.length, temporaryValue, randomIndex;
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

let  durationSort = (arr) => {
    let  schedule, pickedTask, found, multiplier
    schedule = [];
    //Pick a random task in each priority
    for(let i=0;i<arr.length;i++) {
        //Test whether there are multiple task we need to add or just one
        //First, find whether if there's one element we 
        found = false;
            //loops through the array to see if there are any elements that has addToList listed as true
            for(let k=0;k<arr[i].length;++k){
                if(arr[i][k].addToList === true) {
                    found = true;
                    break;
                }
            }
        //if found == true, then we will go back to the array and start 
        if(found == true) {
            for(let n=0;n<arr[i].length;++n){
                if(arr[i][n].addToList === true) {
                    pickedTask = arr[i][n];
                    //separate the tasks into 30minute segments
                    multiplier = (pickedTask.duration / 0.5);
                    addDurationToArray(pickedTask,multiplier,schedule);
                }
            }
        } 
        //If found is false, then we pick a random task from the array
        else {
            pickedTask = arr[i][Math.floor(Math.random()*arr[i].length)];
            multiplier = (pickedTask.duration / 0.5)
            addDurationToArray(pickedTask, multiplier, schedule);
        }
        // for(let j=0;j<multiplier;j++) {
        //     const newMiniTask = Object.assign({}, pickedTask, { duration: 0.5 });
        //     schedule.push(newMiniTask);
        // }
    }
    let  importantTasks = [];
    let  nonImportantTasks = [];

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
    let  shuffledNonImportantTasks = shuffle(nonImportantTasks);
    return [importantTasks,shuffledNonImportantTasks];
}

//question about scoping inside for loop and outside, can you use the same let iable?
// durationSort(priorityList)

function shuffleAgain (arr, shuffleName) {
    let shuffledNonImportantTasks;
    let  importantTask = [];
    let  nonImportantTasks = [];

    //Isolate the important tasks from the nonImportant Tasks
    for(let i=0;i<arr.length;++i){
        if(arr[i].isImportant === true) {
            importantTask.push(arr[i]);
        } else {
            nonImportantTasks.push(arr[i]);
        }
    }

    //Shuffle the nonImportantTasks
    console.log(nonImportantTasks)
    if(arguments.length == 2) {
        shuffledNonImportantTasks = sortingAlgo[shuffleName](nonImportantTasks)
        shuffledNonImportantTasks = sortingAlgo[shuffleName](nonImportantTasks)
        console.log(shuffledNonImportantTasks)
    } else {
        shuffledNonImportantTasks = sortingAlgo.defaultSort(nonImportantTasks);
    }

    return [].concat(importantTask,shuffledNonImportantTasks);
} 

//Carousel script

// window.addEventListener('load', (event) => {
//     //CODE TO ADD CONTENT TO THE INDEX PAGE
if (window.location.href.match('carousel.html') != null) {
    let  slideIndex = 1;
    // showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let  i;
    let  slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = n - 1}
    if (n < 1) {slideIndex = n + 1}

    //Remove the slide arrow on the first and last page
    let  backButton = document.getElementById("previous");
    let  nextButton = document.getElementById('next');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        if(n === 1) {backButton.style.display = 'none'} else {backButton.style.display = 'block'}
        if(n === slides.length) {nextButton.style.display = 'none'} else {nextButton.style.display = 'block'}
        slides[slideIndex-1].style.display = "block";

    //Change the progress bar based on the slide
    let  progressBar = document.getElementById("progress-bar");
    if (n === 1) {progressBar.value = 0;}
    else if (n===2) {progressBar.value = 33;}
    else if (n===3) {progressBar.value = 66;}
    else if (n===4) {progressBar.value = 100;}
    }
}


/*************************************** IDEAS / QUESTIONS *******************************************
 * 1) How do we come up with a way to effectively read whick task number it is
 */

 function Task (task, duration, isImportant, addToList) {
    this.task = task;
    this.duration = duration;
    this.isImportant = isImportant;
    this.addToList = addToList;
}

const newTask = new Task('Eat pie', '0.5', true, true);

let  priorityLetters = ['a','b','c'];

function getTasks() {
    for(let i = 0; i < priorityLetters.length; i++){
        for(let j = 1; j <= priorityIndex[priorityLetters[i]]; j++) {
            let  taskValue = document.getElementById(`${priorityLetters[i]}-${j}-task`).value
            let  durationValue = document.getElementById(`${priorityLetters[i]}-${j}-duration`).value
            if(document.getElementById(`${priorityLetters[i]}-${j}-checkbox`) === null) {return false;}
            let  checkedValue = document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked
            if(document.getElementById(`${priorityLetters[i]}-${j}-taskcheckbox`) === null) {return false;}
            let  taskCheckedValue = document.getElementById(`${priorityLetters[i]}-${j}-taskcheckbox`).checked
            
            //Retreive and push onto array: task name, duration, and whether it's important
            if(priorityLetters[i] === 'a') {
                aPriority.push(new Task(taskValue,durationValue,checkedValue,taskCheckedValue))
                document.getElementById(`${priorityLetters[i]}-${j}-task`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-duration`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked = null;
                document.getElementById(`${priorityLetters[i]}-${j}-taskcheckbox`).checked = null;
            }
            else if(priorityLetters[i] === 'b') {
                bPriority.push(new Task(taskValue,durationValue,checkedValue,taskCheckedValue))
                document.getElementById(`${priorityLetters[i]}-${j}-task`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-duration`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked = null;
                document.getElementById(`${priorityLetters[i]}-${j}-taskcheckbox`).checked = null;
            }
            if(priorityLetters[i] === 'c') {
                cPriority.push(new Task(taskValue,durationValue,checkedValue,taskCheckedValue))
                document.getElementById(`${priorityLetters[i]}-${j}-task`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-duration`).value = '';
                document.getElementById(`${priorityLetters[i]}-${j}-checkbox`).checked = null;
                document.getElementById(`${priorityLetters[i]}-${j}-taskcheckbox`).checked = null;
            }
        }
    }
    // console.log(priorityList)
    durationSort(priorityList);

    //Execute the randomSort function 
    let  randomSort = durationSort(priorityList);
    let  combinedRandomSort = [].concat(randomSort[0],randomSort[1]);

    //Assign times to each task under random sort
    let  currentTime = document.getElementById('start-time').value;
    let  finalTaskList = [];
    for(let i=0;i<combinedRandomSort.length;++i){
        let  newTime = currentTime;
        const newTimedTask = Object.assign({}, combinedRandomSort[i], { time: newTime});
        finalTaskList.push(newTimedTask);
        currentTime = addTime(currentTime, 30);
    }
    console.log(finalTaskList)

    sessionStorage.setItem("myTasks", JSON.stringify(finalTaskList));
    
    //Redirect users to another page
    location.replace("SchedulePage.html")
}

function restartSchedule () {
    sessionStorage.removeItem('tasks');
    location.replace("carousel.html");
}
// sessionStorage.setItem("tasks", JSON.stringify([].concat(finalTaskList[0],finalTaskList[1])));

//Different sorting algorithms

let array = ["Steve","Jim","Pam","Bill","Adam"];

let sortingAlgo = {
    //Default Sort / Fisher Yates
    defaultSort: function (array) {
        let  currentIndex=array.length, temporaryValue, randomIndex;
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
    },
    //Sort alphabetatically
    alphabetSort: function (arr) {
        return arr.sort((a,b) => {
            if(a > b) {return 1};
            if(a < b) {return -1};
        })

    },
    //Sort reverse alphabetatically
    reverseAlphabetSort: function (arr) {
        return arr.sort((a,b) => {
            if(a > b) {return 1};
            if(a < b) {return -1};
        })
    },
    //Sort by dispersing all the 
    dispersingSort: function (arr) {
        // if(arr)
    }
}

let sortName = 'alphabetSort';

// for(let key in sortingAlgo) {
//     if (key == sortName) {
        
//         console.log(Object.values(sortingAlgo))
//     }
// }


let arrayOfSortingAlgo = Object.keys(sortingAlgo);

console.log(sortingAlgo[sortName](array))