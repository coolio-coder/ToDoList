//We want to sort elements given their priority//

//Ways to sort//

//1) Sort by duration without alotted time
//2) Sort by alotted time and percentage


//Step 1: User enters items that they consider highest to lowest priority. The item is then array.push() into the corresponding array.

var firstPriority = [
    {
        task: 'Work on the Odin Project',
        duration: 2,
    },
    {
        task:'Work on independent project',
        duration: 3,
    }
];
var secondPriority = [{
    task: 'Read Algorithm Design Manual',
    duration: 2,
}];
var thirdPriority = [
    {
        task: 'Work on Code Wars Questions', 
        duration: 1.5,
    },
    {
        task: 'Work on Leet Code Questions',
        duration: 2,
    }
];
var fourthPriority = [
    {
        task: 'Read "Learning SQL"',
        duration: 1.5,
    },
    {
        task: 'Watch video on Graph Theory',
        duration: 1,
    }
];

var priorityList = [firstPriority, secondPriority, thirdPriority, fourthPriority];

//Question about hoisting -> why do I have to assign the variables to priorityList after I declare the other variables?

//Step 2: User says how much time they can allocate in a given day

var alottedTime = 5;

//Step 2a: Users can change the distribution percentage of how each group should be prioritized. They will enter a whole number like 60%, and then the program will covert to 0.60.

//Example 1: 

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
    var schedule1 = [];

    var durationSort = (arr) => {
        arr.map(task =>
            //Pick a random task inside each va
            console.log(task[Math.floor(Math.random()*task.length)])
        )
    }

    durationSort(priorityList)
    



/*************************************** IDEAS / QUESTIONS *******************************************
 * 1) Have firstPriority, secondPriority, etc have prototype properties so that when a user presses a button or click-drag items, the program will automatically adjust percentages
 * 
 * 2) 
 */