// ==================================================
// LISTA DE CANCIONES
// ==================================================

const songs = [

    {
        title: "On the floor",
        artist: "Jeniffe Lopez",
        year: 2011,
        audio:
            "musica/Jennifer Lopez - On The Floor ft. Pitbull.mp3"
    },

    {
        title: "Levitating",
        artist: "Dua Lipa",
        year: 2020,
        audio:
            "musica/Dua Lipa - Levitating (Lyrics).mp3"
    },

    {
        title: "slipping through my fingers",
        artist: "ABBA",
        year: 1981,
        audio:
            "musica/Slipping Through My Fingers.mp3"
    },

    {
        title: "Boy With Luv",
        artist: "BTS",
        year: 2019,
        audio:
            "musica/Boy With Luv - BTS feat. Halsey (Traducida al español).mp3"
    },

    {
        title: "Hips Don't Lie (Bamboo)",
        artist: "Shakira",
        year: 2006,
        audio:
            "musica/Shakira - Bamboo (lyrics video).mp3"
    },

    {
        title: "Seguro te pierdo",
        artist: "Sergi",
        year: 2022,
        audio:
            "musica/KID FLEX, Sergi - Seguro Te Pierdo  (Video Oficial).mp3"
    },

    {
        title: "From the start",
        artist: "Laufey",
        year: 2023,
        audio:
            "musica/Laufey - From The Start (Official Music Video).mp3"
    },

    {
        title: "Great balls of fire",
        artist: "Jerry Lee Lewis",
        year: 1961,
        audio:
            "musica/Great Balls Of Fire.mp3"
    },

    {
        title: "Angeles fuimos",
        artist: "Adrian Barba",
        year: 2012,
        audio:
            "musica/Dragon Ball Z Angeles Fuimos Audio Latino canta Adrian Barba.mp3"
    },

    {
        title: "Billie Jean",
        artist: "Michael Jackson",
        year: 1983,
        audio:
            "musica/Michael Jackson - Billie Jean (Official Video).mp3"
    },

    {
        title: "En el muelle de San Blas",
        artist: "MANA",
        year: 1997,
        audio:
            "musica/Maná - En El Muelle De San Blás (Video Oficial).mp3"
    },

    {
        title: "Mariposa traicionera",
        artist: "MANA",
        year: 2002,
        audio:
            "musica/Maná - Mariposa Traicionera (Video Oficial).mp3"
    },

    {
        title: "Dark red",
        artist: "Steve Lacy",
        year: 2017,
        audio:
            "musica/Dark Red Steve Lacy (Subtitulada al Español).mp3"
    },

    {
        title: "Gangnam style",
        artist: "PSY",
        year: 2012,
        audio:
            "musica/PSY - Gangnam Style [Traducido al Español].mp3"
    },

    {
        title: "Levan Polkka",
        artist: "Mikku hatsune",
        year: 2007,
        audio:
            "musica/Hatsune Miku - Ievan Polkka ( Lyrics Video ).mp3"
    },

    {
        title: "little bitty pretty one",
        artist: "Thurston Harris",
        year: 1957,
        audio:
            "musica/Little Bitty Pretty One - Thurston Harris  subtitulado al español.mp3"
    },

    {
        title: "Good feeling",
        artist: "Flo Rida",
        year: 2011,
        audio:
            "musica/Flo Rida - Good Feeling [Official Video].mp3"
    },

    {
        title: "Body to body",
        artist: "BTS",
        year: 2026,
        audio:
            "musica/Body to Body.mp3"
    },

    {
        title: "Weast coast",
        artist: "Lana del Rey",
        year: 2014,
        audio:
            "musica/Lana Del Rey - West Coast.mp3"
    },
    {
        title: "Matushka",
        artist: "Tatiana Kurtukova",
        year: 2022,
        audio:
            "musica/Татьяна Куртукова - Матушка (Lyrics).mp3"
    },

    {
        title: "Little dark age",
        artist: "MGMT",
        year: 2018,
        audio:
            "musica/MGMT - Little Dark Age (Lyrics).mp3"
    },

    {
        title: "How deep is your love ",
        artist: "Bee Gees",
        year: 2014,
        audio:
            "musica/Bee Gees - How Deep Is Your Love (Lyrics).mp3"
    },

    {
        title: "Da ya think i'm sexy",
        artist: "Rod stewart",
        year: 1978,
        audio:
            "musica/Rod Stewart - Da Ya Think I'm Sexy_ (Official Video) [HD Remaster].mp3"
    },

    {
        title: "Me voy",
        artist: "Julieta Venegas",
        year: 2006,
        audio:
            "musica/Julieta Venegas - Me Voy (Video Stereo).mp3"
    },

    {
        title: "A donde va el viento",
        artist: "Julieta Vengas",
        year: 2024,
        audio:
            "musica/Julieta Venegas - A Donde Va El Viento (Letra).mp3"
    },

    {
        title: "Dancing Queen",
        artist: "ABBA",
        year: 1976,
        audio:
            "musica/ABBA - Dancing Queen (Lyrics).mp3"
    },

    {
        title: "Under the influence",
        artist: "Chris Brown",
        year: 2019,
        audio:
            "musica/Chris Brown - Under The Influence (Lyrics).mp3"
    },

    {
        title: "Wannabe",
        artist: "Spice Girls",
        year: 1996,
        audio:
            "musica/why mona - Wannabe (Lyrics).mp3"
    },

    {
        title: "World's Smallest Violin",
        artist: "AJR",
        year: 2021,
        audio:
            "musica/AJR - World's Smallest Violin (Lyrics).mp3"
    },

    {
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        year: 2023,
        audio:
            "musica/Stephen Sanchez - Until I Found You (Lyrics).mp3"
    },

    {
        title: "Lay All Your Love On Me",
        artist: "ABBA",
        year: 1980,
        audio:
            "musica/Abba - Lay All Your Love On Me (Español).mp3"
    },

    {
        title: "Samba do Brasil",
        artist: "Bellini",
        year: 2014,
        audio:
            "musica/Bellini - Samba Do Brasil.mp3"
    },

    {
        title: "Feet Don’t Fail Me Now",
        artist: "Joy Crookes",
        year: 2021,
        audio:
            "musica/Joy Crookes - Feet Don't Fail Me Now (Lyrics).mp3"
    },

    {
        title: "Te juro que te amo",
        artist: "Los terricolas",
        year: 1975,
        audio:
            "musica/Te Juro Que Te Amo.mp3"
    },

    {
        title: "Butterfly",
        artist: "Smile",
        year: 1998,
        audio:
            "musica/Smile.Dk - Butterfly (Lyrics) Ay ay ayI'm your little butterfly [Tiktok song].mp3"
    },

    {
        title: "The Way You Are",
        artist: "Milky",
        year: 2002,
        audio:
            "musica/Milky - Just The Way You Are (Sub. Español  Lyrics)  Pibble Song.mp3"
    },

    {
        title: "Stereo love",
        artist: "Vika Jigulina, Edward Maya",
        year: 2009,
        audio:
            "musica/Edward Maya, Vika Jigulina  Stereo Love [Letra].mp3"
    },

    {
        title: "Cinnamon Girl",
        artist: "Lana del Rey",
        year: 2019,
        audio:
            "musica/𝘭𝘢𝘯𝘢 𝘥𝘦𝘭 𝘳𝘦𝘺 - 𝘤𝘪𝘯𝘯𝘢𝘮𝘰𝘯 𝘨𝘪𝘳𝘭.mp3"
    },

    {
        title: "The calling",
        artist: "Laura Brehm",
        year: 2016,
        audio:
            "musica/TheFatRat - The Calling (feat. Laura Brehm).mp3"
    },

    {
        title: "I Thought I Saw Your Face Today",
        artist: "She & him",
        year: 2008,
        audio:
            "musica/She & Him - I Thought I Saw Your Face Today (Official Lyric Video).mp3"
    },

    {
        title: "Good for You",
        artist: "Selena Gomes",
        year: 2015,
        audio:
            "musica/Selena Gomez - Good For You (Lyrics) ft. A$AP ROCKY.mp3"
    },

    {
        title: "En tu lugar",
        artist: "Daniel Nasa",
        year: 2025,
        audio:
            "musica/En Tu Lugar.mp3"
    },

    {
        title: "Stolen Dance",
        artist: "Milky Chance",
        year: 2013,
        audio:
            "musica/Milky Chance - Stolen Dance (Traducida al Español).mp3"
    },

    {
        title: "Solo tu",
        artist: "Matia Bazar",
        year: 1979,
        audio:
            "musica/Sólo Tú (Remastered 2011).mp3"
    },

    {
        title: "Coqueta",
        artist: "Fuerza regida y grupo frontera",
        year: 2024,
        audio:
            "musica/Fuerza Regida, Grupo Frontera - Coqueta (LetraLyrics).mp3"
    },

    {
        title: "Luna",
        artist: "Zoe",
        year: 2008,
        audio:
            "musica/Zoé - Luna (MTV Unplugged).mp3"
    },

    {
        title: "Rolling in the deep",
        artist: "Adele",
        year: 2011,
        audio:
            "musica/adele - Rolling in the deep ll LYRICS.mp3"
    },

    {
        title: "El tiempo",
        artist: "Afrodisiaco",
        year: 2008,
        audio:
            "musica/Afrodisíaco - El Tiempo  Letra.mp3"
    },

    {
        title: "Lifelight",
        artist: "Abby Trott",
        year: 2018,
        audio:
            "musica/Super Smash Bros  Ultimate - Lifelight (Remix feat. Slyleaf).mp3"
    },

    {
        title: "Free from Desire",
        artist: "GALA",
        year: 1996,
        audio:
            "musica/GALA - Freed From Desire (Lyrics).mp3"
    },

    {
        title: "Not today",
        artist: "BTS",
        year: 2017,
        audio:
            "musica/BTS (방탄소년단) 'Not Today' Lyrics [Color Coded HanRomEng].mp3"
    },

    {
        title: "Oblivion",
        artist: "Grimes",
        year: 2012,
        audio:
            "musica/lily potter - oblivion (lyrics).mp3"
    },

    {
        title: "Hey lovers",
        artist: "The Daughters of Eve",
        year: 1965,
        audio:
            "musica/Hey Lover.mp3"
    },

    {
        title: "Good to be",
        artist: "Mark Ambor",
        year: 2024,
        audio:
            "musica/Mark Ambor - Good To Be (Lyrics).mp3"
    },

    {
        title: "Windfall",
        artist: "TheFatRat",
        year: 2016,
        audio:
            "musica/TheFatRat - Windfall.mp3"
    },

    {
        title: "Me gustas tu",
        artist: "Manu Chao",
        year: 2001,
        audio:
            "musica/Manu Chao - Me Gustas Tu.mp3"
    },

    {
        title: "Total Eclipse of the Heart",
        artist: "Bonnie Tyler",
        year: 1983,
        audio:
            "musica/Bonnie Tyler - Total Eclipse Of The Heart [español  lyrics].mp3"
    },

    {
        title: "Sign of the Times",
        artist: "Harry Styles",
        year: 2017,
        audio:
            "musica/Harry Styles - Sign of the Times (Lyrics).mp3"
    },

    {
        title: "Be My Baby",
        artist: "The Ronettes",
        year: 1963,
        audio:
            "musica/The Ronettes - Be My Baby (Sub. Español  Lyrics).mp3"
    },

    {
        title: "It's Been So Long",
        artist: "The Living Tombstone",
        year: 2014,
        audio:
            "musica/The Living Tombstone - It's Been So Long.mp3"
    },

    {
        title: "Last Summer Whisper",
        artist: "Anri",
        year: 1983,
        audio:
            "musica/Anri - Last Summer Whisper.mp3"
    },

    {
        title: "Wrap Me in Plastic",
        artist: "CHROMANCE",
        year: 2020,
        audio:
            "musica/CHROMANCE - Wrap Me In Plastic (Lyrics).mp3"
    },

    {
        title: "Dos Oruguitas",
        artist: "Sebastián Yatra",
        year: 2021,
        audio:
            "musica/Sebastian Yatra Dos Oruguitas from Encanto Letra.mp3"
    },

    {
        title: "Eres Para Mí",
        artist: "Julieta Venegas",
        year: 2006,
        audio:
            "musica/Julieta Venegas - Eres para mí  Letra.mp3"
    },

    {
        title: "Pa' Dónde Se Fue",
        artist: "Mon Laferte",
        year: 2017,
        audio:
            "musica/Mon Laferte - Pa' Dónde Se Fue  Letra.mp3"
    },

    {
        title: "Careless Whisper",
        artist: "George Michael / Wham!",
        year: 1984,
        audio:
            "musica/George Michael - Careless Whisper (Lyrics).mp3"
    },

    {
        title: "Everybody Wants to Rule the World",
        artist: "Tears for Fears",
        year: 1985,
        audio:
            "musica/Tears For Fears - Everybody Wants To Rule The World (Lyrics).mp3"
    },

    {
        title: "Take on Me",
        artist: "a-ha",
        year: 1985,
        audio:
            "musica/a-ha - Take On Me (Lyrics).mp3"
    },

    {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        year: 1977,
        audio:
            "musica/Bee Gees Stayin' Alive   lyrics.mp3"
    },

    {
        title: "Forever Young",
        artist: "Alphaville",
        year: 1984,
        audio:
            "musica/Alphaville - Forever Young (Sub. Español  Lyrics).mp3"
    },

    {
        title: "Material Girl",
        artist: "Madonna",
        year: 1984,
        audio:
            "musica/Madonna - Material Girl (Lyrics) Cause we are living in a material world.mp3"
    },

    {
        title: "Gimme! Gimme! Gimme! (A Man After Midnight)",
        artist: "ABBA",
        year: 1979,
        audio:
            "musica/ABBA - Gimme! Gimme! Gimme! (A Man After Midnight).mp3"
    },

    {
        title: "BEZOS",
        artist: "Bo Burnham",
        year: 2021,
        audio:
            "musica/Bezos I.mp3"
    },

    {
        title: "One bad man",
        artist: "Midnight Riders",
        year: 2009,
        audio:
            "musica/left 4 dead 2 concierto music.mp3"
    },

    {
        title: "I ran",
        artist: "A Flock Of Seagulls",
        year: 1982,
        audio:
            "musica/A Flock Of Seagulls - I Ran (So Far Away) (Video).mp3"
    },

    {
        title: "Cuando pienses en volver",
        artist: "Pedro Suares Vertiz",
        year: 1996,
        audio:
            "musica/Pedro Suárez Vértiz - Cuando Pienses En Volver (Letra).mp3"
    },

    {
        title: "Those Eyes",
        artist: "New West",
        year: 2019,
        audio:
            "musica/New West - Those Eyes (Lyrics).mp3"
    },

    {
        title: "My Marmalade",
        artist: "Katya Lel",
        year: 2004,
        audio:
            "musica/Катя Лель - Мой мармеладный.mp3"
    },

    {
        title: "Wonderwall",
        artist: "Oasis",
        year: 1995,
        audio:
            "musica/Oasis - Wonderwall (Lyrics).mp3"
    },

    {
        title: "Life Letters",
        artist: "Never Get Used to People",
        year: 2018,
        audio:
            "musica/Never Get Used To People - Life Letters [ Sub Español ].mp3"
    },

    {
        title: "Come and Get Your Love",
        artist: "Redbone",
        year: 1974,
        audio:
            "musica/Redbone - Come and Get Your Love (Lyrics) Guardians of the Galaxy.mp3"
    },

    {
        title: "Garota de Ipanema",
        artist: "Antônio Carlos Jobim",
        year: 1962,
        audio:
            "musica/Garota de Ipanema - Tom Jobim  sub.español & portugués.mp3"
    },

    {
        title: "Golden Brown",
        artist: "The Stranglers",
        year: 1981,
        audio:
            "musica/Golden Brown - The Stranglers  Sub. Español  TrixyBixy.mp3"
    },

    {
        title: "Bones",
        artist: "Imagine Dragons",
        year: 2022,
        audio:
            "musica/Imagine Dragons - Bones  Sub. Español (video oficial).mp3"
    },

    {
        title: "I Was Made for Lovin' You",
        artist: "KISS",
        year: 1979,
        audio:
            "musica/Kiss - I Was Made For Lovin' You.mp3"
    },


    {
        title: "End of Beginning",
        artist: "Djo",
        year: 2022,
        audio:
            "musica/Djo - End Of Beginning (Official Audio).mp3"
    },

    {
        title: "Sex, Drugs, Etc.",
        artist: "Beach Weather",
        year: 2016,
        audio:
            "musica/Beach Weather - sex, drugs, etc. (Lyrics).mp3"
    },

    {
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        year: 2012,
        audio:
            "musica/The Neighbourhood - Sweater Weather (Lyrics).mp3"
    },

    {
        title: "Washing Machine Heart",
        artist: "Mitski",
        year: 2018,
        audio:
            "musica/Mitski - Washing Machine Heart.mp3"
    },

    {
        title: "Blue Hair",
        artist: "TV Girl",
        year: 2016,
        audio:
            "musica/tv girl  blue hair (español).mp3"
    },

    {
        title: "Dancing",
        artist: "Aaron Smith",
        year: 2004,
        audio:
            "musica/Aaron Smith - Dancin (KRONO Remix) Lyrics.mp3"
    },

    
    {
        title: "Bad Habit",
        artist: "Steve Lacy",
        year: 2022,
        audio:
            "musica/Steve Lacy - Bad Habit (Lyrics).mp3"
    },

    {
        title: "Duvet",
        artist: "Bôa",
        year: 1998,
        audio:
            "musica/Bôa - Duvet (Lyrics).mp3"
    },

    {
        title: "Color Your Night",
        artist: "Lotus Juice & Azumi Takahashi",
        year: 2024,
        audio:
            "musica/Persona 3 Reload - Color Your Night (with Lyrics).mp3"
    },

    {
        title: "Tek It",
        artist: "Cafuné",
        year: 2021,
        audio:
            "musica/Cafuné - Tek It (Español)  i watch the moon.mp3"
    },

    {
        title: "Judas",
        artist: "Lady Gaga",
        year: 2011,
        audio:
            "musica/Lady Gaga - Judas (Lyrics).mp3"
    },

    {
        title: "Hey Jude",
        artist: "The Beatles",
        year: 1968,
        audio:
            "musica/Jude Bellingham  Hey Jude.mp3"
    },

    {
        title: "young turks",
        artist: "Rod Stewart",
        year: 1981,
        audio:
            "musica/Rod Stewart - Young Turks (Official Video) [HD Remaster].mp3"
    },

    {
        title: "eyes without a face",
        artist: "Billy Idol",
        year: 1983,
        audio:
            "musica/The Eighties - Eyes Without A Face [edit].mp3"
    },

    {
        title: "head on my shoulder",
        artist: "Paul Anka",
        year: 1960,
        audio:
            "musica/Paul Anka  Put Your Head On My Shoulder [Letra  video].mp3"
    },

    

];


// ==================================================
// PANTALLAS
// ==================================================

const screens =
    document.querySelectorAll(".screen");


const homeScreen =
    document.getElementById("homeScreen");


const resultScreen =
    document.getElementById("resultScreen");




// ==================================================
// BOTONES
// ==================================================



const startButton =
    document.getElementById("startButton");

    const participantsOptions =
    document.getElementById("participantsOptions");
    
    const participantCards =
    document.querySelectorAll(".participant-card");

    const playersForm =
    document.getElementById("playersForm");

const playersInputs =
    document.getElementById("playersInputs");

const playGameButton =
    document.getElementById("playGameButton");

const howButton =
    document.getElementById("howButton");

const closeModal =
    document.getElementById("closeModal");

const checkButton =
    document.getElementById("checkButton");

const continueButton =
    document.getElementById("continueButton");




// ==================================================
// ELEMENTOS DEL JUEGO
// ==================================================

const instructionsModal =
    document.getElementById("instructionsModal");

const roundText =
    document.getElementById("roundText");

const livesElement =
    document.getElementById("lives");

const timelineElement =
    document.getElementById("timeline");

const audioPlayer =
    document.getElementById("audioPlayer");
    

    const playMusicButton =
    document.getElementById("playMusicButton");

    const equalizer =
    document.querySelector(".equalizer");

    const playerCard =
    document.querySelector(".player-card");

    const gameScreen =
    document.getElementById("gameScreen");

    const turnText =
    document.getElementById("turnText");

const backgroundMusic =
    document.getElementById("backgroundMusic");
    

    

    const vinyl =
    document.querySelector(
        "#homeScreen .vinyl"
    );

backgroundMusic.volume = 0.35;

backgroundMusic.addEventListener(
    "play",
    function () {
        vinyl.classList.add("music-active");
    }
);

backgroundMusic.addEventListener(
    "pause",
    function () {
        vinyl.classList.remove("music-active");
    }
);

function iniciarMusicaMenu() {

    if (backgroundMusic.paused) {

        backgroundMusic.play().catch(function (error) {
            console.log("No se pudo iniciar la música:", error);
        });

    }

    document.removeEventListener(
        "pointerdown",
        iniciarMusicaMenu
    );

    document.removeEventListener(
        "keydown",
        iniciarMusicaMenu
    );
}

document.addEventListener(
    "pointerdown",
    iniciarMusicaMenu
);

document.addEventListener( 
    "keydown", 
    function (event) { 

        // TECLA ESPACIO → REPRODUCIR / PAUSAR
        if (event.code === "Space") {

            if (gameScreen.classList.contains("active")) {
                event.preventDefault();
                playMusicButton.click();
                return;
            }

        }
 
        // TECLA ENTER
        if (event.key !== "Enter") { 
            return; 
        } 

        /* PANTALLA DE RESULTADO */ 
        if ( 
            resultScreen.classList.contains("active") 
        ) { 
            event.preventDefault(); 
            continueButton.click(); 
            return; 
        } 
 
        /* PANTALLA DEL JUEGO */ 
        if ( 
            gameScreen.classList.contains("active") && 
            !checkButton.disabled 
        ) { 
            event.preventDefault(); 
            checkButton.click(); 
            return; 
        } 

    } 
);





// ==================================================
// ELEMENTOS DEL RESULTADO
// ==================================================

const resultTitle =
    document.getElementById("resultTitle");

const resultArtist =
    document.getElementById("resultArtist");

const resultYear =
    document.getElementById("resultYear");

const resultMessage =
    document.getElementById("resultMessage");

const resultExplanation =
    document.getElementById("resultExplanation");

    const homeButton =
    document.getElementById("homeButton");

    const winnerModal =
    document.getElementById("winnerModal");

const winnerTitle =
    document.getElementById("winnerTitle");

const winnerSubtitle =
    document.getElementById("winnerSubtitle");

const winnerButton =
    document.getElementById("winnerButton");





// ==================================================
// VARIABLES DEL JUEGO
// ==================================================

let gameSongs = [];

let currentSong = null;

let currentRound = 0;

let lives = 3;

let score = 0;

let streak = 0;

let bestStreak = 0;

let selectedPosition = null;

let timelineSongs = [];

let lastAnswerWasCorrect = false;

let selectedPlayers = 0;

let playerNames = [];

let players = [];

let currentPlayerIndex = 0;


// ==================================================
// CAMBIAR DE PANTALLA
// ==================================================

function showScreen(screen) {

    screens.forEach(function (item) {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}






// ==================================================
// MEZCLAR CANCIONES
// ==================================================

function shuffle(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        const temporal =
            copy[i];

        copy[i] =
            copy[randomIndex];

        copy[randomIndex] =
            temporal;
    }

    return copy;
}


// ==================================================
// INICIAR PARTIDA
// ==================================================

function startGame() {

    // Detiene la música del menú
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;


    // Mezclamos todas las canciones
    gameSongs = shuffle(songs);


    // Reiniciamos datos generales
    currentRound = 0;

    lives = 3;

    score = 0;

    streak = 0;

    bestStreak = 0;

    selectedPosition = null;

    currentPlayerIndex = 0;


    // Creamos a cada jugador
    // con SU PROPIA línea del tiempo
    players = playerNames.map(
        function (name) {

            const firstSong =
                gameSongs.shift();

            return {
                name: name,
                timelineSongs: [firstSong]
            };
        }
    );


    // La línea activa será la del primer jugador
    timelineSongs =
        players[0].timelineSongs;


    // Comienza el primer turno
    nextRound();
}


// ==================================================
// SIGUIENTE RONDA
// ==================================================

function nextRound() {

    // Si se acabaron las canciones,
    // volvemos a mezclar
    if (gameSongs.length === 0) {

        gameSongs = shuffle(songs);
    }


    // Jugador al que le toca
    const currentPlayer =
        players[currentPlayerIndex];


    // Usamos SU línea del tiempo
    timelineSongs =
        currentPlayer.timelineSongs;


    // Mostramos su nombre
    turnText.textContent =
        "TURNO DE " +
        
        currentPlayer.name.toUpperCase();

        // Usamos SU línea del tiempo 
timelineSongs = 
    currentPlayer.timelineSongs; 
 
 
// Mostramos su nombre 
turnText.textContent = 
    "TURNO DE " + 
     
    currentPlayer.name.toUpperCase();

// Animación de tamaño durante 3 segundos
turnText.classList.remove("turn-pulse");
void turnText.offsetWidth;
turnText.classList.add("turn-pulse");

        


    // Canción que deberá adivinar
    currentSong =
        gameSongs.shift();


    currentRound++;

    selectedPosition = null;

    checkButton.disabled = true;


    // Reiniciamos reproductor
    audioPlayer.pause();

    audioPlayer.src =
        currentSong.audio;

    audioPlayer.currentTime = 0;


    playMusicButton.textContent =
        "▶";


    equalizer.classList.remove(
        "playing"
    );

    playerCard.classList.remove(
        "playing"
    );

    gameScreen.classList.remove(
        "music-playing"
    );


    // Mostramos solamente las cartas
    // de este jugador
    renderTimeline();


    showScreen(
        gameScreen
    );
}


// ==================================================
// ACTUALIZAR VIDAS
// ==================================================

function updateLives() {

    const fullHearts =
        "♥ ".repeat(lives);

    const emptyHearts =
        "♡ ".repeat(
            3 - lives
        );

    livesElement.textContent =
        fullHearts +
        emptyHearts;
}


// ==================================================
// MOSTRAR LÍNEA DEL TIEMPO
// ==================================================

function renderTimeline() {

    timelineElement.innerHTML = "";


    for (
        let position = 0;
        position <= timelineSongs.length;
        position++
    ) {
    const isLastPosition =
    position === timelineSongs.length;

const lastSong =
    timelineSongs[timelineSongs.length - 1];

if (
    isLastPosition &&
    lastSong &&
    lastSong.year >= 2026
) {
    continue;
}
        // Espacio donde colocar la canción
        const slot =
            document.createElement(
                "button"
            );

        slot.className =
            "timeline-slot";

        slot.innerHTML = `
    <span class="slot-plus">+</span>
`;


        slot.addEventListener(
            "click",
            function () {

                const allSlots =
                    document.querySelectorAll(
                        ".timeline-slot"
                    );

                allSlots.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                slot.classList.add(
                    "selected"
                );

                selectedPosition =
                    position;

                checkButton.disabled =
                    false;
            }
        );


        timelineElement.appendChild(
            slot
        );


        // Tarjeta de canción ya conseguida
        if (
            position <
            timelineSongs.length
        ) {

            const song =
                timelineSongs[position];

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "timeline-card";

            card.innerHTML = `
                <small>
                    ${song.title}
                </small>

                <strong>
                    ${song.year}
                </strong>
            `;

            timelineElement.appendChild(
                card
            );
        }
    }
}


// ==================================================
// COMPROBAR POSICIÓN
// ==================================================

function isCorrectPosition(position) {

    const previousSong =
        timelineSongs[
            position - 1
        ];

    const nextSong =
        timelineSongs[
            position
        ];


    const afterPrevious =
        !previousSong ||
        currentSong.year >=
        previousSong.year;


    const beforeNext =
        !nextSong ||
        currentSong.year <=
        nextSong.year;


    return (
        afterPrevious &&
        beforeNext
    );
}


// ==================================================
// COMPROBAR RESPUESTA
// ==================================================

function checkAnswer() {

    if (selectedPosition === null) {
        return;
    }

    lastAnswerWasCorrect =
        isCorrectPosition(
            selectedPosition
        );

    if (lastAnswerWasCorrect) {

        timelineSongs.splice(
            selectedPosition,
            0,
            currentSong
        );

        score +=
            100 +
            streak * 20;

        streak++;

        bestStreak =
            Math.max(
                bestStreak,
                streak
            );

    } else {

        streak = 0;
    }

    // SIEMPRE mostramos primero
    // el resultado de la canción
    showResult();
}

function checkWinner() {

    const currentPlayer =
        players[currentPlayerIndex];

    if (
        currentPlayer.timelineSongs.length >= 10
    ) {
        showWinner(currentPlayer);
        return true;
    }

    return false;
}

function showWinner(player) {

    audioPlayer.pause();

    playMusicButton.textContent = "▶";

    equalizer.classList.remove("playing");
    playerCard.classList.remove("playing");
    gameScreen.classList.remove("music-playing");

    winnerTitle.textContent =
        "🏆 ¡" +
        player.name.toUpperCase() +
        " HA GANADO!";

    winnerSubtitle.textContent =
    "Dominó la línea del tiempo y ganó la partida.";

    winnerModal.classList.add("show");
}


// ==================================================
// MOSTRAR RESULTADO
// ==================================================

function showResult() {

    resultTitle.textContent =
        currentSong.title;

    resultArtist.textContent =
        currentSong.artist;

    resultYear.textContent =
        currentSong.year;


    if (lastAnswerWasCorrect) {

    resultMessage.textContent =
        "✓ ¡Correcto!";

    resultMessage.className =
        "result-message correct";

    resultExplanation.textContent =
        currentSong.year +
        " era una posición válida.";

    resultScreen.classList.remove(
        "result-incorrect"
    );

    resultScreen.classList.add(
        "result-correct"
    );

} else {

    resultMessage.textContent =
        "✕ Incorrecto";

    resultMessage.className =
        "result-message incorrect";

    resultExplanation.textContent =
        "La canción fue publicada en " +
        currentSong.year +
        ".";

    resultScreen.classList.remove(
        "result-correct"
    );

    resultScreen.classList.add(
        "result-incorrect"
    );
}


    audioPlayer.pause();

    showScreen(
        resultScreen
    );
}





// ==================================================
// BOTONES DEL JUEGO
// ==================================================

startButton.addEventListener(
    "click",
    function () {

        startButton.style.display =
            "none";

        howButton.style.display =
            "none";

        participantsOptions.classList.add(
            "show"
        );

        backButton.classList.add(
            "show"
        );

    }
);

backButton.addEventListener(
    "click",
    function () {

        // Oculta selección de participantes
        participantsOptions.classList.remove(
            "show"
        );

        // Oculta formulario de nombres
        playersForm.classList.remove(
            "show"
        );

        // Oculta JUGAR
        playGameButton.classList.remove(
            "show"
        );

        // Limpia los nombres
        playersInputs.innerHTML =
            "";

        selectedPlayers = 0;
        playerNames = [];

        // Vuelven los botones iniciales
        startButton.style.display =
            "";

        howButton.style.display =
            "";

        // Oculta la flecha
        backButton.classList.remove(
            "show"
        );

    }
);

participantCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                selectedPlayers =
                    Number(
                        card.dataset.players
                    );


                // Ocultamos las opciones
                participantsOptions.classList.remove(
                    "show"
                );


                // Limpiamos campos anteriores
                playersInputs.innerHTML =
                    "";


                // Creamos un campo por jugador
                for (
                    let i = 1;
                    i <= selectedPlayers;
                    i++
                ) {

                    const input =
                        document.createElement(
                            "input"
                        );

                    input.type =
                        "text";

                    input.className =
                        "player-name-input";

                    input.placeholder =
                        "Jugador " + i;

                    input.maxLength =
                        15;


                    input.addEventListener(
                        "input",
                        checkPlayerNames
                    );

                    input.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            playGameButton.classList.contains("show")
        ) {
            event.preventDefault();
            playGameButton.click();
        }

    }
);


                    playersInputs.appendChild(
                        input
                    );
                }


                // Mostramos formulario
                playersForm.classList.add(
                    "show"
                );


                // JUGAR comienza oculto
                playGameButton.classList.remove(
                    "show"
                );

            }
        );

    }
);

function checkPlayerNames() {

    const inputs =
        document.querySelectorAll(
            ".player-name-input"
        );


    const allCompleted =
        Array.from(inputs).every(
            function (input) {

                return (
                    input.value.trim() !== ""
                );

            }
        );


    if (allCompleted) {

        playGameButton.classList.add(
            "show"
        );

    } else {

        playGameButton.classList.remove(
            "show"
        );

    }
}

playGameButton.addEventListener(
    "click",
    function () {

        const inputs =
            document.querySelectorAll(
                ".player-name-input"
            );


        playerNames =
            Array.from(inputs).map(
                function (input) {

                    return (
                        input.value.trim()
                    );

                }
            );


        /* DESTELLO */

        const flash =
            document.createElement("div");

        flash.className =
            "epic-flash";

        document.body.appendChild(
            flash
        );


        /* ANIMACIÓN DE SALIDA */

        homeScreen.classList.add(
            "screen-transition-out"
        );


        setTimeout(
            function () {

                homeScreen.classList.remove(
                    "screen-transition-out"
                );


                /* INICIA EL JUEGO */

                startGame();


                /* ANIMACIÓN DE ENTRADA */

                gameScreen.classList.add(
                    "screen-transition-in"
                );


                setTimeout(
                    function () {

                        gameScreen.classList.remove(
                            "screen-transition-in"
                        );

                    },
                    800
                );

            },
            600
        );


        /* ELIMINA EL FLASH */

        setTimeout(
            function () {

                flash.remove();

            },
            800
        );

    }
);


playMusicButton.addEventListener(
    "click",
    function () {
        

        if (audioPlayer.paused) {

            audioPlayer.play();

            playMusicButton.textContent = "⏸";

            equalizer.classList.add("playing");

            playerCard.classList.add("playing");

            gameScreen.classList.add("music-playing");

        } else {

            audioPlayer.pause();

            playMusicButton.textContent = "▶";

            equalizer.classList.remove("playing");

            playerCard.classList.remove("playing");

            gameScreen.classList.remove("music-playing");

        }

    }
);



checkButton.addEventListener(
    "click",
    checkAnswer
);


function nextPlayerTurn() {

    currentPlayerIndex++;

    // Si llegamos al último jugador,
    // volvemos al primero
    if (
        currentPlayerIndex >=
        players.length
    ) {
        currentPlayerIndex = 0;
    }

    nextRound();
}


continueButton.addEventListener(
    "click",
    function () {

        // Primero comprobamos si el jugador
        // que acaba de jugar llegó a 10 cartas
        if (checkWinner()) {
            return;
        }

        // Si todavía no ganó,
        // pasa al siguiente jugador
        nextPlayerTurn();
    }
);








// ==================================================
// CÓMO JUGAR
// ==================================================

howButton.addEventListener(
    "click",
    function () {

        instructionsModal.classList.add(
            "open"
        );

    }
);

homeButton.addEventListener(
    "click",
    function () {

        // Detener la canción del juego
        audioPlayer.pause();
        audioPlayer.currentTime = 0;

        playMusicButton.textContent = "▶";

        equalizer.classList.remove("playing");
        playerCard.classList.remove("playing");
        gameScreen.classList.remove("music-playing");

        // Restaurar pantalla de inicio
        participantsOptions.classList.remove("show");
        playersForm.classList.remove("show");
        playGameButton.classList.remove("show");

        playersInputs.innerHTML = "";

        selectedPlayers = 0;
        playerNames = [];

        startButton.style.display = "";
        howButton.style.display = "";

        backButton.classList.remove("show");

        showScreen(homeScreen);

        // 🎵 VOLVER A REPRODUCIR LA MÚSICA DEL INICIO
        backgroundMusic.currentTime = 0;
        backgroundMusic.play();

    }
);

closeModal.addEventListener(
    "click",
    function () {

        instructionsModal.classList.remove(
            "open"
        );

    }
);

instructionsModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            instructionsModal
        ) {

            instructionsModal.classList.remove(
                "open"
            );
        }
    }
);

winnerButton.addEventListener(
    "click",
    function () {

        winnerModal.classList.remove("show");

        // ==============================
        // DETENER COMPLETAMENTE LA CANCIÓN DEL JUEGO
        // ==============================

        audioPlayer.pause();
        audioPlayer.removeAttribute("src");
        audioPlayer.load();

        playMusicButton.textContent = "▶";

        equalizer.classList.remove("playing");
        playerCard.classList.remove("playing");
        gameScreen.classList.remove("music-playing");

        // ==============================
        // REINICIAR OPCIONES DEL MENÚ
        // ==============================

        participantsOptions.classList.remove("show");
        playersForm.classList.remove("show");
        playGameButton.classList.remove("show");

        playersInputs.innerHTML = "";

        selectedPlayers = 0;
        playerNames = [];

        startButton.style.display = "";
        howButton.style.display = "";

        backButton.classList.remove("show");

        // ==============================
        // VOLVER AL INICIO
        // ==============================

        showScreen(homeScreen);

        // ==============================
        // REPRODUCIR MÚSICA DEL INICIO
        // ==============================

        backgroundMusic.currentTime = 0;

        backgroundMusic.play().catch(function (error) {
            console.log("No se pudo reproducir la música:", error);
        });

    }
);