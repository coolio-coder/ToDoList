//We want to sort elements given their priority//

//Step 1: User enters items that they consider highest to lowest priority. The item is then array.push() into the corresponding array.

var firstPriority = [
    {
        task: 'Work on the Odin Project',
        duration: 3,
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
        duration: 1.5,
    }
];
var fourthPriority = [
    {
        task: 'Read "Learning SQL"',
        duration: 1,
    },
    {
        task: 'Watch video on Graph Theory',
        duration: 1,
    }
];

//Step 2: User says how much time they allocate to each 