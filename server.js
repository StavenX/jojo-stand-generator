const express = require('express');
const app = express();
const port = process.env.PORT || '8080';

// Set up the EJS template engine
app.set('view engine', 'ejs');
app.set('views', './views'); // The directory storing the template files

/* Homepage */
app.get('/', (req, res) => {
    res.render('pages/index', {
        stand_name: generateStandName(),
        stand_desc: generateStandDescription()
    });
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
    console.log('Open in your browser at http://localhost:' + port);
});

function generateStandName() {
    METALS = [
        'bronze',
        'silver',
        'gold',
        'platinum',
        'titanium',
        'brass',
        'iron',
        'steel',
        'uranium'
    ];

    COLOURS = [
        'blue',
        'red',
        'green',
        'yellow',
        'purple',
        'white',
        'black',
        'gray',
        'orange'
    ]

    PROFESSIONS = [
        "Magician's",
        "Blacksmith's",
        "Doctor's",
        "Fisherman's",
        "Welder's",
        "Explorer's",
        "Miner's"
    ]

    CREATURES = [
        "Angel's",
        "Goblin's",
        "Landshark's",
        "Unicorn's",
        "Ant's",
        "Oyster's",
        "Pelican's"
    ]

    prefixeLists = getRandomArrayItem([ PROFESSIONS, CREATURES ]);
    suffixesLists = getRandomArrayItem([ COLOURS, METALS ]);

    standPrefix = getRandomArrayItem(prefixeLists);
    standSuffix = getRandomArrayItem(suffixesLists);

    const standName = standPrefix.toUpperCase() + " " + standSuffix.toUpperCase();

    return standName;
}

function generateStandDescription() {

    INTROS = [
        'By harnessing the power of',
        'By using the power of',
        'Through molding the flow of time into',
        'By freezing water into',
        'By detecting certain smells from',
        'By influencing the government with',
        'Through swimming on land while holding',
        'By sniffing dust in a teenagers room while seducing'
    ]

    MIDDLES = [
        'a sun',
        'a moon',
        'a lake',
        'a star',
        'a raindrop',
        'a piece of coal',
        'a TV episode',
        'a barking dog',
        'an old man',
        'a newspaper',
        'a grandpa',
        'a japanese sex-shop',
        'a christmas tree'
    ]

    ACTIONS = [
        'it can predictably evade',
        'it can tell the oxygen-levels of',
        'it is able to moisten up',
        'it might spit water on',
        'it can transform any food into',
        'it can copyright-claim an idea from',
        'it can steal both a movie and popcorn from',
        'it can make three wishes for',
        'it can summon an unborn child from'
    ]

    ENDS = [
        'a dying star',
        'a bedridden family-member',
        'a high-school math teacher',
        'a dumb dog',
        'a smart dog',
        'a sassy cat',
        'a classy grandma',
        'a bottle of pepsi-max',
        'a discord moderator',
        'a gamer-girl',
        'an old painter and his family',
        'a time-traveling woman'
    ]

    DAYS = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    const intro = getRandomArrayItem(INTROS);
    const middle = getRandomArrayItem(MIDDLES);
    const action = getRandomArrayItem(ACTIONS);
    const end = getRandomArrayItem(ENDS);

    /* Only used at random times */
    let timeLimit = "";

    if (flipCoin()) {
        timeLimit = " (on a " + getRandomArrayItem(DAYS) + ")";
    }

    const generatedDescription = intro + " " + middle + ", " + action + " " + end + timeLimit + ".";

    return generatedDescription;
}


/* Retrieves a random item from an array without index number */
function getRandomArrayItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function flipCoin() {
    return Math.random() >= 0.5;
}