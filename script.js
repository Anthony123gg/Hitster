// ===============================
// CONEXIÓN CON SUPABASE
// ===============================

const SUPABASE_URL = "https://keeieiomuwsmucvusutb.supabase.co";
const SUPABASE_KEY = "sb_publishable_za_9TrxyouZuD_0thf7jVw_NiGwAHTF";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function probarSupabase() {
    const { data, error } = await supabaseClient
        .from("games")
        .select("*")
        .limit(1);

    if (error) {
        console.error("❌ Error conectando con Supabase:", error);
        return;
    }

    console.log("✅ HITSTER está conectado con Supabase");
    console.log("Datos:", data);
}

probarSupabase();

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

    const onlineButton = document.getElementById("onlineButton");
const onlineOptions = document.getElementById("onlineOptions");
const createGameButton = document.getElementById("createGameButton");
const joinGameButton = document.getElementById("joinGameButton");
const onlineLobbyScreen = document.getElementById("onlineLobbyScreen");
const roomCodeDisplay = document.getElementById("roomCodeDisplay");
const onlinePlayersList = document.getElementById("onlinePlayersList");
const lobbyMessage = document.getElementById("lobbyMessage");
const startOnlineButton = document.getElementById("startOnlineButton");

startOnlineButton.addEventListener("click", async function() {

    if (!isGameHost) {
        alert("Solo el creador de la partida puede comenzar.");
        return;
    }

    console.log("🎮 Preparando partida online...");

    // =========================================
    // 1. CREAR MAZO ÚNICO PARA TODOS
    // =========================================

    const deck = shuffle(
        songs.map(function(song, index) {
            return index;
        })
    );

    // =========================================
    // 2. OBTENER JUGADORES
    // =========================================

    const { data: onlinePlayers, error: playersError } =
        await supabaseClient
            .from("game_players")
            .select("*")
            .eq("game_id", currentGameId)
            .order("player_index", {
                ascending: true
            });

    if (playersError) {

        console.error(
            "Error obteniendo jugadores:",
            playersError
        );

        alert("❌ No se pudieron cargar los jugadores.");
        return;
    }

    if (onlinePlayers.length < 2) {

        alert(
            "❌ Se necesitan al menos 2 jugadores."
        );

        return;
    }

    // =========================================
    // 3. DAR UNA CANCIÓN INICIAL A CADA JUGADOR
    // =========================================

    let deckPosition = 0;

    for (const player of onlinePlayers) {

        const firstSongId =
            deck[deckPosition];

        deckPosition++;

        const { error } =
            await supabaseClient
                .from("game_players")
                .update({
                    timeline_song_ids: [firstSongId],
                    score: 0,
                    streak: 0
                })
                .eq("id", player.id);

        if (error) {

            console.error(
                "Error preparando jugador:",
                error
            );

            alert(
                "❌ No se pudo preparar a los jugadores."
            );

            return;
        }
    }

    // =========================================
    // 4. ELEGIR PRIMERA CANCIÓN DE LA PARTIDA
    // =========================================

    const firstSongId =
        deck[deckPosition];

    deckPosition++;

    // =========================================
    // 5. GUARDAR TODO EN SUPABASE
    // =========================================

    const { error: gameError } =
        await supabaseClient
            .from("games")
            .update({

                song_deck: deck,

                deck_position: deckPosition,

                current_song_id: firstSongId,

                current_player_index: 0

            })
            .eq("id", currentGameId);

    if (gameError) {

        console.error(
            "Error preparando partida:",
            gameError
        );

        alert(
            "❌ No se pudo preparar la partida."
        );

        return;
    }

    // =========================================
    // 6. AHORA SÍ: COMENZAR PARTIDA
    // =========================================

    const { error: statusError } =
        await supabaseClient
            .from("games")
            .update({
                status: "playing"
            })
            .eq("id", currentGameId);

    if (statusError) {

        console.error(
            "Error comenzando partida:",
            statusError
        );

        alert(
            "❌ No se pudo comenzar la partida."
        );

        return;
    }

    console.log("🎮 PARTIDA ONLINE INICIADA");
    console.log("🎵 Mazo:", deck);
    console.log("🎵 Primera canción:", firstSongId);
});

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

let currentGameId = null;
let currentPlayerName = null;
let playersChannel = null;
let isGameHost = false;
let isOnlineGame = false;

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

function generarCodigoSala() {
    const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let codigo = "";

    for (let i = 0; i < 5; i++) {
        const posicion = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[posicion];
    }

    return codigo;
}

async function crearPartida() {

    const playerName = prompt("🎵 Ingresa tu nombre:");

    if (!playerName) {
        return;
    }

    const nombre = playerName.trim();

    if (!nombre) {
        return;
    }

    const roomCode = generarCodigoSala();

    // Crear la partida
    const { data, error } = await supabaseClient
        .from("games")
        .insert({
            room_code: roomCode,
            status: "waiting"
        })
        .select()
        .single();

    if (error) {
        console.error("Error creando partida:", error);
        alert("❌ No se pudo crear la partida.");
        return;
    }

    // Guardar datos de la partida actual
    currentGameId = data.id;
    currentPlayerName = nombre;
    isGameHost = true;
    isOnlineGame = true;
    startOnlineButton.style.display = "block";

    // Agregar al creador como jugador 1
    const { error: playerError } = await supabaseClient
        .from("game_players")
        .insert({
            game_id: data.id,
            player_name: nombre,
            player_index: 0
        });

    if (playerError) {
        console.error("Error agregando jugador:", playerError);
        alert("❌ No se pudo agregar el jugador.");
        return;
    }

    console.log("✅ Partida creada:", data);
    console.log("✅ Jugador agregado:", nombre);

    // Mostrar código
    roomCodeDisplay.textContent = data.room_code;

    // Mostrar jugador
    onlinePlayersList.innerHTML = `
        <div class="online-player">
            <span class="player-number">1</span>
            <span>${nombre}</span>
        </div>
    `;

    lobbyMessage.textContent = "Esperando jugadores...";

    // Cambiar a sala de espera
    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    onlineLobbyScreen.classList.add("active");

escucharJugadores(currentGameId);
escucharPartida(currentGameId);
}

// =========================================
// ACTUALIZAR JUGADORES EN TIEMPO REAL
// =========================================

function actualizarListaJugadores(players) {

    onlinePlayersList.innerHTML = "";

    players.forEach(function(player) {

        onlinePlayersList.innerHTML += `
            <div class="online-player">
                <span class="player-number">
                    ${player.player_index + 1}
                </span>

                <span>${player.player_name}</span>
            </div>
        `;
    });

    if (players.length < 2) {
        lobbyMessage.textContent = "Esperando jugadores...";
    } else {
        lobbyMessage.textContent =
            players.length + " jugadores conectados";
    }
}

async function escucharJugadores(gameId) {

    // =========================================
    // ELIMINAR CANAL ANTERIOR
    // =========================================

    if (playersChannel) {

        await supabaseClient.removeChannel(
            playersChannel
        );

        playersChannel = null;
    }


    // =========================================
    // FUNCIÓN PARA CARGAR JUGADORES
    // =========================================

    async function cargarLista() {

        const { data, error } =
            await supabaseClient
                .from("game_players")
                .select("*")
                .eq("game_id", gameId)
                .order(
                    "player_index",
                    { ascending: true }
                );

        if (error) {

            console.error(
                "❌ Error cargando jugadores:",
                error
            );

            return;
        }


        console.log(
            "👥 Jugadores actuales:",
            data
        );


        // Si estamos en el lobby
        if (
            onlineLobbyScreen &&
            onlineLobbyScreen.classList.contains("active")
        ) {

            actualizarListaJugadores(data);
        }


        // Si estamos jugando
        if (
            gameScreen.classList.contains("active")
        ) {

            await cargarJugadoresOnline();

            const myPlayer =
                players.find(function(player) {

                    return (
                        player.name ===
                        currentPlayerName
                    );

                });


            if (!myPlayer) {
                return;
            }


            timelineSongs =
                myPlayer.timelineSongs;


            renderTimeline();
        }
    }


    // =========================================
    // CARGAR LISTA INMEDIATAMENTE
    // =========================================

    await cargarLista();


    // =========================================
    // CREAR CANAL REALTIME
    // =========================================

    playersChannel =
        supabaseClient
            .channel(
                "game-players-" + gameId
            )

            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "game_players",
                    filter:
                        "game_id=eq." + gameId
                },

                async function(payload) {

                    console.log(
                        "🔄 Cambio detectado en jugadores:",
                        payload
                    );

                    await cargarLista();
                }
            )

            .subscribe(function(status) {

                console.log(
                    "📡 Realtime jugadores:",
                    status
                );

            });
}

// =========================================
// ACTUALIZAR TURNO ONLINE
// =========================================

async function actualizarTurnoOnline(playerIndex) {

    currentPlayerIndex = playerIndex;

    console.log(
        "🔄 Actualizando turno online:",
        playerIndex
    );

    // Obtener nuevamente la partida
    const { data: game, error: gameError } =
        await supabaseClient
            .from("games")
            .select("*")
            .eq("id", currentGameId)
            .single();

    if (gameError) {

        console.error(
            "❌ Error obteniendo partida:",
            gameError
        );

        return;
    }

    // Recargar jugadores y sus tarjetas
    await cargarJugadoresOnline();

    // Jugador al que le toca
    const currentPlayer =
        players[currentPlayerIndex];

    if (!currentPlayer) {

        console.error(
            "❌ No se encontró el jugador:",
            currentPlayerIndex
        );

        return;
    }

    // Su línea de tiempo
    timelineSongs =
        currentPlayer.timelineSongs;

    // Canción actual
    const songId =
        game.current_song_id;

    currentSong =
        songs[songId];

    if (!currentSong) {

        console.error(
            "❌ No se encontró la canción:",
            songId
        );

        return;
    }

    // ==============================
    // ACTUALIZAR INTERFAZ
    // ==============================

    turnText.textContent =
        "TURNO DE " +
        currentPlayer.name.toUpperCase();

    turnText.classList.remove("turn-pulse");

    void turnText.offsetWidth;

    turnText.classList.add("turn-pulse");

    // ==============================
    // REINICIAR RESPUESTA
    // ==============================

    selectedPosition = null;

    checkButton.disabled = true;

    // ==============================
    // CARGAR NUEVA CANCIÓN
    // ==============================

    audioPlayer.pause();

    audioPlayer.src =
        currentSong.audio;

    audioPlayer.currentTime = 0;

    playMusicButton.textContent = "▶";

    equalizer.classList.remove("playing");

    playerCard.classList.remove("playing");

    gameScreen.classList.remove("music-playing");

    // ==============================
    // MOSTRAR NUEVAS TARJETAS
    // ==============================

    renderTimeline();

    console.log(
        "🎵 Nueva canción:",
        currentSong.title
    );

    console.log(
        "📅 Año:",
        currentSong.year
    );

    console.log(
        "👤 Turno de:",
        currentPlayer.name
    );
}

async function cargarJugadoresOnline() {

    const { data, error } = await supabaseClient
        .from("game_players")
        .select("*")
        .eq("game_id", currentGameId)
        .order("player_index", {
            ascending: true
        });

    if (error) {

        console.error(
            "Error cargando jugadores:",
            error
        );

        return;
    }

    players = data.map(function(player) {

        const songIds =
            player.timeline_song_ids || [];

        const timeline =
            songIds.map(function(songId) {

                return songs[songId];

            }).filter(Boolean);

        return {

            id: player.id,

            name: player.player_name,

            playerIndex: player.player_index,

            timelineSongs: timeline,

            score: player.score || 0,

            streak: player.streak || 0

        };

    });

    console.log(
        "👥 Jugadores online cargados:",
        players
    );
}

// =========================================
// ENTRAR AL JUEGO ONLINE
// =========================================

async function entrarAlJuegoOnline() {

    // =========================================
    // DETENER MÚSICA DEL MENÚ
    // =========================================

    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    console.log("🎮 Entrando al juego online...");

    // =========================================
    // OBTENER PARTIDA
    // =========================================

    const { data: game, error: gameError } =
        await supabaseClient
            .from("games")
            .select("*")
            .eq("id", currentGameId)
            .single();

    if (gameError) {

        console.error(
            "❌ Error obteniendo partida:",
            gameError
        );

        return;
    }

    // =========================================
    // CARGAR JUGADORES
    // =========================================

    await cargarJugadoresOnline();

    // =========================================
    // GUARDAR TURNO
    // =========================================

    currentPlayerIndex =
        game.current_player_index || 0;

    // =========================================
    // OBTENER CANCIÓN ACTUAL
    // =========================================

    const songId =
        game.current_song_id;

    currentSong =
        songs[songId];

    if (!currentSong) {

        console.error(
            "❌ No se encontró la canción:",
            songId
        );

        return;
    }

    // =========================================
// OBTENER MI PROPIA LÍNEA DEL TIEMPO
// =========================================

const currentPlayer =
    players[currentPlayerIndex];

if (!currentPlayer) {

    console.error(
        "❌ No se encontró el jugador actual."
    );

    return;
}

// Buscar al jugador de ESTA computadora
const myPlayer =
    players.find(function(player) {

        return player.name === currentPlayerName;

    });

if (!myPlayer) {

    console.error(
        "❌ No se encontró mi jugador."
    );

    return;
}

// Cada jugador ve SU propia línea de tiempo
timelineSongs =
    myPlayer.timelineSongs;

    // =========================================
    // CONFIGURAR INTERFAZ
    // =========================================

    currentRound++;

    selectedPosition = null;

    checkButton.disabled = true;

    turnText.textContent =
        "TURNO DE " +
        currentPlayer.name.toUpperCase();

    turnText.classList.remove("turn-pulse");

    void turnText.offsetWidth;

    turnText.classList.add("turn-pulse");

    // =========================================
    // CARGAR CANCIÓN
    // =========================================

    audioPlayer.pause();

    audioPlayer.src =
        currentSong.audio;

    audioPlayer.currentTime = 0;

    playMusicButton.textContent = "▶";

    equalizer.classList.remove("playing");

    playerCard.classList.remove("playing");

    gameScreen.classList.remove("music-playing");

    // =========================================
    // MOSTRAR LÍNEA DEL TIEMPO
    // =========================================

    renderTimeline();

    // =========================================
    // MOSTRAR JUEGO
    // =========================================

    showScreen(gameScreen);

    console.log(
        "🎵 Canción online:",
        currentSong.title
    );

    console.log(
        "📅 Año:",
        currentSong.year
    );

    console.log(
        "👤 Turno:",
        currentPlayer.name
    );
}
// =========================================
// ESCUCHAR CAMBIOS DE LA PARTIDA
// =========================================

function escucharPartida(gameId) {

    supabaseClient
        .channel("game-status-" + gameId)

        .on(
            "postgres_changes",
            {
                event: "UPDATE",
                schema: "public",
                table: "games",
                filter: "id=eq." + gameId
            },

            async function(payload) {

                console.log(
                    "🔄 Cambio en partida:",
                    payload.new
                );

                // ==========================
                // LA PARTIDA COMENZÓ
                // ==========================

                if (
                    payload.new.status === "playing" &&
                    !gameScreen.classList.contains("active")
                ) {

                    currentPlayerIndex =
                        payload.new.current_player_index;

                    await entrarAlJuegoOnline();

                    return;
                }

                // ==========================
// CAMBIÓ EL TURNO
// ==========================

if (
    payload.new.status === "playing"
) {

    console.log(
        "🔄 Nuevo turno:",
        payload.new.current_player_index
    );

    await entrarAlJuegoOnline();

} })

        .subscribe(function(status) {

            console.log(
                "📡 Estado Realtime partida:",
                status
            );

        });
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


        // =========================================
// SOLO EL JUGADOR DEL TURNO PUEDE JUGAR
// =========================================

let puedeJugar = true;

if (isOnlineGame) {

    const jugadorActual =
        players[currentPlayerIndex];

    puedeJugar =
        jugadorActual &&
        jugadorActual.name === currentPlayerName;
}


// =========================================
// CONFIGURAR SLOT
// =========================================

if (!puedeJugar) {

    slot.disabled = true;

    slot.classList.add(
        "slot-disabled"
    );

} else {

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
}


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

async function checkAnswer() {

    // =========================================
    // COMPROBAR SI ES MI TURNO
    // =========================================

    if (isOnlineGame) {

        const currentPlayer =
            players[currentPlayerIndex];

        if (
            !currentPlayer ||
            currentPlayer.name !== currentPlayerName
        ) {

            alert("⏳ No es tu turno.");
            return;
        }

    }


    // =========================================
    // COMPROBAR POSICIÓN
    // =========================================

    if (selectedPosition === null) {
        return;
    }


    // =========================================
    // COMPROBAR RESPUESTA
    // =========================================

    lastAnswerWasCorrect =
        isCorrectPosition(selectedPosition);


    // =========================================
    // PARTIDA ONLINE
    // =========================================

    if (isOnlineGame) {

        // El jugador que está jugando
        const currentPlayer =
            players[currentPlayerIndex];


        if (!currentPlayer) {

            console.error(
                "❌ No existe el jugador actual."
            );

            return;
        }


        // =====================================
        // RESPUESTA CORRECTA
        // =====================================

        if (lastAnswerWasCorrect) {

            currentPlayer.timelineSongs.splice(
                selectedPosition,
                0,
                currentSong
            );


            currentPlayer.score +=
                100 +
                currentPlayer.streak * 20;


            currentPlayer.streak++;


        } else {

            currentPlayer.streak = 0;

        }


        // =====================================
        // CONVERTIR TIMELINE A IDS
        // =====================================

        const timelineSongIds =
            currentPlayer.timelineSongs.map(
                function(song) {

                    return songs.indexOf(song);

                }
            );


        // =====================================
        // GUARDAR EN SUPABASE
        // =====================================

        const { data: updatedPlayer, error } =
    await supabaseClient
        .from("game_players")
        .update({

            timeline_song_ids: timelineSongIds,

            score: currentPlayer.score,

            streak: currentPlayer.streak

        })
        .eq("id", currentPlayer.id)
        .select()
        .single();


if (error) {

    console.error(
        "❌ ERROR GUARDANDO JUGADA EN SUPABASE:",
        error
    );

    alert(
        "❌ No se pudo guardar la canción."
    );

    return;
}


// =========================================
// ACTUALIZAR JUGADOR LOCAL
// =========================================

currentPlayer.timelineSongs =
    updatedPlayer.timeline_song_ids.map(
        function(songId) {

            return songs[songId];

        }
    );


// =========================================
// ACTUALIZAR MI LÍNEA
// =========================================

timelineSongs =
    currentPlayer.timelineSongs;


// =========================================
// REDIBUJAR LA LÍNEA
// =========================================

renderTimeline();


console.log(
    "✅ CANCIÓN GUARDADA:",
    currentSong.title
);

console.log(
    "🎵 MI LÍNEA:",
    timelineSongs
);


        if (error) {

            console.error(
                "❌ Error guardando línea:",
                error
            );

            alert(
                "❌ No se pudo guardar la jugada."
            );

            return;
        }


        // =====================================
        // ACTUALIZAR MI LÍNEA
        // =====================================

        timelineSongs =
            currentPlayer.timelineSongs;


        console.log(
            "✅ Línea guardada:",
            timelineSongs
        );

    }


    // =========================================
    // PARTIDA LOCAL
    // =========================================

    else {

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

    }


    // =========================================
    // MOSTRAR RESULTADO
    // =========================================

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


async function nextPlayerTurn() {

    // ==================================
    // PARTIDA ONLINE
    // ==================================

    if (isOnlineGame) {

        // ----------------------------------
        // COMPROBAR QUE SEA MI TURNO
        // ----------------------------------

        const currentPlayer =
            players[currentPlayerIndex];

        if (
            !currentPlayer ||
            currentPlayer.name !== currentPlayerName
        ) {

            console.log(
                "⏳ No es tu turno."
            );

            return;
        }


        // ----------------------------------
        // OBTENER ESTADO ACTUAL DE LA PARTIDA
        // ----------------------------------

        const { data: game, error: gameError } =
            await supabaseClient
                .from("games")
                .select("*")
                .eq("id", currentGameId)
                .single();


        if (gameError) {

            console.error(
                "❌ Error obteniendo partida:",
                gameError
            );

            return;
        }


        // ----------------------------------
        // CALCULAR SIGUIENTE JUGADOR
        // ----------------------------------

        const nextIndex =
            (currentPlayerIndex + 1) %
            players.length;


        // ----------------------------------
        // OBTENER SIGUIENTE CANCIÓN
        // ----------------------------------

        const deck =
            game.song_deck;

        let deckPosition =
            game.deck_position;


        if (
            !deck ||
            deckPosition >= deck.length
        ) {

            console.error(
                "❌ No quedan canciones en el mazo."
            );

            return;
        }


        const nextSongId =
            deck[deckPosition];


        deckPosition++;


        console.log(
            "🎵 Siguiente canción:",
            nextSongId
        );

        console.log(
            "👤 Siguiente jugador:",
            nextIndex
        );


        // ----------------------------------
        // GUARDAR NUEVO TURNO Y CANCIÓN
        // ----------------------------------

        const { error } =
            await supabaseClient
                .from("games")
                .update({

                    current_player_index:
                        nextIndex,

                    current_song_id:
                        nextSongId,

                    deck_position:
                        deckPosition

                })
                .eq(
                    "id",
                    currentGameId
                );


        if (error) {

            console.error(
                "❌ Error cambiando turno:",
                error
            );

            return;
        }


        console.log(
            "✅ Turno cambiado correctamente."
        );

        return;
    }


    // ==================================
    // PARTIDA LOCAL
    // ==================================

    currentPlayerIndex++;


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

onlineButton.addEventListener("click", function() {

    // Ocultar los botones principales
    startButton.style.display = "none";
    howButton.style.display = "none";

    // Ocultar JUGAR ONLINE
    onlineButton.classList.add("online-hidden");

    // Mostrar opciones online
    onlineOptions.style.display = "grid";
});

createGameButton.addEventListener("click", function() {
    crearPartida();
});


joinGameButton.addEventListener("click", async function() {

    const roomCode = prompt("🎵 Ingresa el código de la partida:");

    if (!roomCode) {
        return;
    }

    const codigo = roomCode.trim().toUpperCase();

    // Buscar la partida
    const { data: game, error: gameError } = await supabaseClient
        .from("games")
        .select("*")
        .eq("room_code", codigo)
        .maybeSingle();

    if (gameError) {
        console.error("Error buscando partida:", gameError);
        alert("❌ Ocurrió un error al buscar la partida.");
        return;
    }

    if (!game) {
        alert("❌ La partida no existe.");
        return;
    }

    // Pedir nombre
    const playerName = prompt("👤 Ingresa tu nombre:");

    if (!playerName) {
        return;
    }

    const nombre = playerName.trim();

    if (!nombre) {
        return;
    }

    // Ver cuántos jugadores hay
    const { data: existingPlayers, error: playersError } =
        await supabaseClient
            .from("game_players")
            .select("*")
            .eq("game_id", game.id)
            .order("player_index", { ascending: true });

    if (playersError) {
        console.error("Error obteniendo jugadores:", playersError);
        alert("❌ No se pudieron obtener los jugadores.");
        return;
    }

    // Máximo 5 jugadores
    if (existingPlayers.length >= 5) {
        alert("❌ Esta partida ya está llena.");
        return;
    }

    const playerIndex = existingPlayers.length;

    // Agregar jugador
    const { error: insertError } = await supabaseClient
        .from("game_players")
        .insert({
            game_id: game.id,
            player_name: nombre,
            player_index: playerIndex
        });

    if (insertError) {
        console.error("Error agregando jugador:", insertError);
        alert("❌ No se pudo entrar a la partida.");
        return;
    }

    // Guardar datos actuales
   currentGameId = game.id;
currentPlayerName = nombre;
isGameHost = false;
isOnlineGame = true;
startOnlineButton.style.display = "none";

    console.log("✅ Entraste a la partida:", game.room_code);
    console.log("✅ Jugador:", nombre);

    // Mostrar código
    roomCodeDisplay.textContent = game.room_code;

    // Mostrar jugadores
    onlinePlayersList.innerHTML = "";

    existingPlayers.forEach(function(player) {

        onlinePlayersList.innerHTML += `
            <div class="online-player">
                <span class="player-number">
                    ${player.player_index + 1}
                </span>

                <span>${player.player_name}</span>
            </div>
        `;
    });

    // Agregar el jugador actual
    onlinePlayersList.innerHTML += `
        <div class="online-player">
            <span class="player-number">
                ${playerIndex + 1}
            </span>

            <span>${nombre}</span>
        </div>
    `;

    lobbyMessage.textContent = "Esperando jugadores...";

    // Mostrar sala
    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    onlineLobbyScreen.classList.add("active");
    escucharJugadores(currentGameId);
    escucharPartida(currentGameId);
});
