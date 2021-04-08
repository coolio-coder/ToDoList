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
                var spans = document.createElement('span');
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
        mySlidesTitle.innerHTML = "<p class='title is-1'>Creating your tasks</p><a class='subtitle is-4'>The purpose of this app is to make your life easier by generating a list of your tasks in 30 minute segments.</a><br><br><a class='subtitle is-4'>In each slide you will be asked to fill in a task, its duration in hours, and whether the task is important. There are 3 priority levels from highest to lowest.</a><br><br><a class='subtitle is-4'>After you hit submit on the last page, the application will prioritize your most important task first, then mixes your non-important task such that you won't get bored of a single task</a> <br><br> <a class ='subtitle is-4'>⌛ Enter your start time below to get started.⌛</a><input type='time' class='input' id='start-time'>";

        // mySlidesHighTasks.className = 'mySlides fade';
        // mySlidesHighTasks.id = 'highTasks';
        // mySlidesHighTasks.style = 'display: none;'
        //     highTitle.className='title is-1';
        //     highTitle.innerHTML='Highest Priority Tasks'
        //     highSubtitle.className='subtitle is-4'
        //     highSubtitle.innerHTML='Please list all the tasks that are your highest priority and which of them are important';
        //         highDiv.className = 'tasks';
        //         highDiv.id = 'a-1';
        //             hightaskNumber.className = 'subtitle is-4'
        //             hightaskNumber.innerHTML = `Task 1`
                
        //             hightaskInput.type='text';
        //             hightaskInput.className ='input';
        //             hightaskInput.placeholder='Your Task';
        //             hightaskInput.id=`a-1-task`;
                
        //             highdurationInput.type='text';
        //             highdurationInput.className ='input'
        //             highdurationInput.placeholder='Duration in Hours';
        //             highdurationInput.id=`a-1-duration`;
                
        //             highaText.id=`a-1-important`;
        //             highaText.className='checkbox'
        //             highaText.innerHTML='Is this task important';
                
        //             highcheckboxInput.type='checkbox';
        //             highcheckboxInput.id=`a-1-checkbox`;
            
        //         addTaskbutton.className='addTask button is-primary is-small';
        //         addTaskbutton.id=`a-1-priority`;
        //         addTaskbutton.innerHTML='+ Add more Task'
        //         addTaskbutton.onclick=addTask;
        
        // mySlidesMedTasks.className = 'mySlides fade';
        // mySlidesMedTasks.id = 'medTasks';
        // mySlidesMedTasks.style = 'display: none;'
        //     medTitle.className='title is-1';
        //     medTitle.innerHTML='Medium Priority Tasks'
        //     medSubtitle.className='subtitle is-4'
        //     medSubtitle.innerHTML="Please list all the tasks that are medium priority. These are the tasks that are on your plate but aren't as important.";
        //         medDiv.className = 'tasks';
        //         medDiv.id = 'b-1';
        //             medtaskNumber.className = 'subtitle is-4'
        //             medtaskNumber.innerHTML = `Task 1`
                
        //             medtaskInput.type='text';
        //             medtaskInput.className ='input';
        //             medtaskInput.placeholder='Your Task';
        //             medtaskInput.id=`b-1-task`;
                
        //             meddurationInput.type='text';
        //             meddurationInput.className ='input'
        //             meddurationInput.placeholder='Duration in Hours';
        //             meddurationInput.id=`b-1-duration`;
                
        //             medaText.id=`b-1-important`;
        //             medaText.className='checkbox'
        //             medaText.innerHTML='Is this task important';
                
        //             medcheckboxInput.type='checkbox';
        //             medcheckboxInput.id=`b-1-checkbox`;
            
        //         addMedTaskbutton.className='addTask button is-primary is-small';
        //         addMedTaskbutton.id=`b-1-priority`;
        //         addMedTaskbutton.innerHTML='+ Add more Task'
        //         addMedTaskbutton.onclick=addTask;
        // mySlidesLowTasks.className = 'mySlides fade';
        // mySlidesLowTasks.id = 'lowTasks';
        // mySlidesLowTasks.style = 'display: none;'
        //     lowTitle.className='title is-1';
        //     lowTitle.innerHTML='Lowest Priority Tasks'
        //     lowSubtitle.className='subtitle is-4'
        //     lowSubtitle.innerHTML="Please list all the tasks that are your lowest priority. These are the tasks that are not important but nice to have completed.";
        //         lowDiv.className = 'tasks';
        //         lowDiv.id = 'c-1';
        //             lowtaskNumber.className = 'subtitle is-4'
        //             lowtaskNumber.innerHTML = `Task 1`
                
        //             lowtaskInput.type='text';
        //             lowtaskInput.className ='input';
        //             lowtaskInput.placeholder='Your Task';
        //             lowtaskInput.id=`c-1-task`;
                
        //             lowdurationInput.type='text';
        //             lowdurationInput.className ='input'
        //             lowdurationInput.placeholder='Duration in Hours';
        //             lowdurationInput.id=`c-1-duration`;
                
        //             lowaText.id=`c-1-important`;
        //             lowaText.className='checkbox'
        //             lowaText.innerHTML='Is this task important';
                
        //             lowcheckboxInput.type='checkbox';
        //             lowcheckboxInput.id=`c-1-checkbox`;
            
        //         addLowTaskbutton.className='addTask button is-primary is-small';
        //         addLowTaskbutton.id=`c-1-priority`;
        //         addLowTaskbutton.innerHTML='+ Add more Task'
        //         addLowTaskbutton.onclick=addTask;

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
        document.getElementById('slideshowContainer').appendChild(mySlidesHighTasks)

        //     //Title and Subtitle for the highest priority slide
        //     document.getElementById('highTasks').appendChild(highTitle)
        //     document.getElementById('highTasks').appendChild(highSubtitle)
        //     document.getElementById('highTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     document.getElementById('highTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     document.getElementById('highTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     //Div container for the questions
        //     document.getElementById('highTasks').appendChild(highDiv)
        //         //Append the input fields
        //         document.getElementById('a-1').appendChild(hightaskNumber);
        //         document.getElementById('a-1').appendChild(hightaskInput);
        //         document.getElementById('a-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        //         //Append the duration fields
        //         document.getElementById('a-1').appendChild(highdurationInput);
        //         document.getElementById('a-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
                
        //         document.getElementById('a-1').appendChild(highaText);
        //         document.getElementById(highaText.id).appendChild(highcheckboxInput);
        //         aText = document.createElement('a');
        //         document.getElementById('a-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        //         document.getElementById('a-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        // //Add Task button outside of the div container    
        // document.getElementById('highTasks').appendChild(addTaskbutton);
        // document.getElementById('slideshowContainer').appendChild(mySlidesMedTasks)
        //     //Title and Subtitle for the highest priority slide
        //     document.getElementById('medTasks').appendChild(medTitle)
        //     document.getElementById('medTasks').appendChild(medSubtitle)
        //     document.getElementById('medTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     document.getElementById('medTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     document.getElementById('medTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     //Div container for the questions
        //     document.getElementById('medTasks').appendChild(medDiv)
        //         //Append the input fields
        //         document.getElementById('b-1').appendChild(medtaskNumber);
        //         document.getElementById('b-1').appendChild(medtaskInput);
        //         document.getElementById('b-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        //         //Append the duration fields
        //         document.getElementById('b-1').appendChild(meddurationInput);
        //         document.getElementById('b-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
                
        //         document.getElementById('b-1').appendChild(medaText);
        //         document.getElementById(medaText.id).appendChild(medcheckboxInput);
        //         aText = document.createElement('b');
        //         document.getElementById('b-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        //         document.getElementById('b-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        //     //Add Task button outside of the div container    
        //     document.getElementById('medTasks').appendChild(addMedTaskbutton);
        
        // document.getElementById('slideshowContainer').appendChild(mySlidesLowTasks)
        //     //Title and Subtitle for the highest priority slide
        //     document.getElementById('lowTasks').appendChild(lowTitle)
        //     document.getElementById('lowTasks').appendChild(lowSubtitle)
        //     document.getElementById('lowTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     document.getElementById('lowTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     document.getElementById('lowTasks').appendChild(linebreak);
        //     linebreak = document.createElement('br');
        //     //Div container for the questions
        //     document.getElementById('lowTasks').appendChild(lowDiv)
        //         //Append the input fields
        //         document.getElementById('c-1').appendChild(lowtaskNumber);
        //         document.getElementById('c-1').appendChild(lowtaskInput);
        //         document.getElementById('c-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        //         //Append the duration fields
        //         document.getElementById('c-1').appendChild(lowdurationInput);
        //         document.getElementById('c-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
                
        //         document.getElementById('c-1').appendChild(lowaText);
        //         document.getElementById(lowaText.id).appendChild(lowcheckboxInput);
        //         aText = document.createElement('c');
        //         document.getElementById('c-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
        //         document.getElementById('c-1').appendChild(linebreak);
        //         linebreak = document.createElement('br');
            //Add Task button outside of the div container    
            document.getElementById('lowTasks').appendChild(addLowTaskbutton);
            document.getElementById('lowTasks').appendChild(linebreak);
            document.getElementById('lowTasks').appendChild(submitButton)
            document.getElementById('slideshowContainer').appendChild(progressBar)
    } 
    if (window.location.href.match('SchedulePage.html') != null) {
        var slideContainer = document.createElement('div');
        var scheduleDiv = document.createElement('div');
            var scheduleTitleP = document.createElement('p');
            var scheduleTable = document.createElement('table');
            var tableRow = document.createElement('tr');
            var tableTimeHead = document.createElement('th');
            var tableTaskHead = document.createElement('th');
            var tableDurationHead = document.createElement('th');
        var restartButton = document.createElement('a')
        
        //Assign Classes and Ids
        slideContainer.className='slideshow-container';
        slideContainer.id='main-container';

        scheduleDiv.className='mySlides fade';
        scheduleDiv.id='scheduleDiv';
        scheduleDiv.style='display:block'
            scheduleTitleP.className='title is-1';
            scheduleTitleP.innerHTML='Your Custom Schedule';
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
        restartButton.innerHTML='Create a New Schedule';
        restartButton.style='margin-top: 30px';
        
        //Append the elements to the HTML body
        document.body.appendChild(slideContainer);
        document.getElementById('main-container').appendChild(scheduleDiv)
        document.getElementById('scheduleDiv').appendChild(scheduleTitleP);
        document.getElementById('scheduleDiv').appendChild(scheduleTable);
        document.getElementById('schedule-box').appendChild(tableRow);
        document.getElementById('tableHead').appendChild(tableTimeHead);
        document.getElementById('tableHead').appendChild(tableTaskHead);
        document.getElementById('tableHead').appendChild(tableDurationHead);
        document.getElementById('main-container').appendChild(restartButton)

    //Get session storage
    console.log('stored session')
    var storedArray = JSON.parse(sessionStorage.getItem("myTasks"));

    //For loop to get all the information from the random sort array and place them on a table
    console.log(storedArray)
        for(let i=0; i<storedArray.length;i++) {
            document.getElementById('schedule-box').innerHTML +=
            "<tr> <td class=\"grid-item\">" + storedArray[i].time +
            "</td><td class=\"grid-item\">" + storedArray[i].task +
            "</td><td class=\"grid-item\">" + storedArray[i].duration + " hour" + "</td> </tr>";
        }
    }
})

function addTaskPage (importanceIndex, isThisForTheHomePage) {
    var mySlidesTasks = document.createElement('div');
    var Title = document.createElement('p');
    var Subtitle = document.createElement('a');

    var addTaskbutton = document.createElement('a');

    //To create the slide for the high priority tasks
    if(arguments.length == 2 && importanceIndex == 'a'){
        //Add the task container
        mySlidesTasks.className = 'mySlides fade';
        mySlidesTasks.id = 'highTasks';
        mySlidesTasks.style = 'display: none;'
            //Add the title for the section
            Title.className='title is-1';
            Title.innerHTML='Highest Priority Tasks'
            Subtitle.className='subtitle is-4'
            Subtitle.innerHTML='Please list all the tasks that are your highest priority and which of them are important';
                //Add the task section 
                addTaskDiv('highTasks','a','1', true);
    }
    // if(arguments.length == 2 && importanceIndex == 'b'){
    //     //Add the task container
    //     mySlidesTasks.className = 'mySlides fade';
    //     mySlidesTasks.id = 'medTasks';
    //     mySlidesTasks.style = 'display: none;'
    //         //Add the title for the section
    //         Title.className='title is-1';
    //         Title.innerHTML='Highest Priority Tasks'
    //         Subtitle.className='subtitle is-4'
    //         Subtitle.innerHTML='Please list all the tasks that are your highest priority and which of them are important';
    //             //Add the task section 
    //             addTaskDiv('highTasks','a','1');
    //         //Add the task button

    // }
    // if(arguments.length == 2 && importanceIndex == 'c'){
    //     //Add the task container
    //     mySlidesTasks.className = 'mySlides fade';
    //     mySlidesTasks.id = 'highTasks';
    //     mySlidesTasks.style = 'display: none;'
    //         //Add the title for the section
    //         Title.className='title is-1';
    //         Title.innerHTML='Highest Priority Tasks'
    //         Subtitle.className='subtitle is-4'
    //         Subtitle.innerHTML='Please list all the tasks that are your highest priority and which of them are important';
    //             //Add the task section 
    //             addTaskDiv('highTasks','a','1');
    //         //Add the task button
    // }
    // if(arguments.length == 2) {
    //     addTaskbutton.className='addTask button is-primary is-small';
    //     addTaskbutton.id=`a-1-priority`;
    //     addTaskbutton.innerHTML='+ Add more Task'
    //     addTaskbutton.onclick=addTask;
    // }
}

function addTaskDiv (containerID, priorityIndex, priorityNum, addButton) {
    const div = document.createElement('div');
    const taskNumber = document.createElement('p');
    const taskInput = document.createElement('input');
    const durationInput = document.createElement('input');
    var aText = document.createElement('a');
    const checkboxInput = document.createElement('input');
    var linebreak = document.createElement('br');

    div.class='tasks';
    div.id=`${priorityIndex}-${priorityNum}`

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
    aText.innerHTML='Is this task important';

    checkboxInput.type='checkbox';
    checkboxInput.id=`${priorityIndex}-${priorityNum}-checkbox`;
    
    // console.log(target)
    console.log(containerID)
    document.getElementById(containerID).appendChild(taskNumber);
    document.getElementById(containerID).appendChild(taskInput);
    document.getElementById(containerID).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    document.getElementById(containerID).appendChild(durationInput);
    document.getElementById(containerID).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    document.getElementById(containerID).appendChild(aText);
    document.getElementById(aText.id).appendChild(checkboxInput);
    aText = document.createElement('a');
    document.getElementById(containerID).appendChild(linebreak);
    linebreak = document.createElement('br');
    
    document.getElementById(containerID).appendChild(linebreak);
    linebreak = document.createElement('br');

    if(arguments.length == 4) {
        var addTaskbutton = document.createElement('a');

        addTaskbutton.className='addTask button is-primary is-small';
        addTaskbutton.id=`a-1-priority`;
        addTaskbutton.innerHTML='+ Add more Task'
        addTaskbutton.onclick=addTask;

        //Add Task button outside of the div container    
        document.getElementById('highTasks').appendChild(addTaskbutton);
    }
}


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
}

function addTime (initialTime, moreTime) {
    var hour = parseInt(initialTime.split(':')[0]);
    var minute = parseInt(initialTime.split(':')[1]);
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

addTime('14:30',30)

// for(let i = 0; i<8; i++){
//     if (i = 0) {
//         var tempTime = "10:30"
//         var currentTime = addTime('10:30', 30)
//         console.log(currentTime)
//     } else {
//         addTime(currentTime, 30)
//     }
// }

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

// window.addEventListener('load', (event) => {
//     //CODE TO ADD CONTENT TO THE INDEX PAGE
if (window.location.href.match('carousel.html') != null) {
    var slideIndex = 1;
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
    else if (n===2) {progressBar.value = 33;}
    else if (n===3) {progressBar.value = 66;}
    else if (n===4) {progressBar.value = 100;}
    }
}


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
    // console.log(priorityList)
    priorityList
    durationSort(priorityList);

    //Execute the randomSort function 
    var randomSort = durationSort(priorityList);
    var combinedRandomSort = [].concat(randomSort[0],randomSort[1]);
    console.log(randomSort)
    console.log(combinedRandomSort);

    //Assign times to each task under random sort
    var currentTime = document.getElementById('start-time').value;
    var finalTaskList = [];
    for(let i=0;i<combinedRandomSort.length;++i){
        var newTime = currentTime;
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

var array = [['a','b'],['c','d']];
var newArray = [].concat(array[0],array[1])
console.log(newArray)

// sessionStorage.setItem("tasks", JSON.stringify([].concat(finalTaskList[0],finalTaskList[1])));