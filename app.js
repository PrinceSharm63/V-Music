const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: "1",
        songName: `Chittiyan Kalaiyan <br><div class="subtitle">Kanika kapoor, Meet Bros</div>`,
        poster: "poster/1.jpeg",
    },
    {
        id: "2",
        songName: `Dilliwaliye <br>
        <div class="subtitle">Bilal saeed, Neha kakkar</div>`,
        poster: "poster/2.jpeg",
    },
    {
        id: "3",
        songName: `Chammak Challo <br>
        <div class="subtitle">Ra-One</div>`,
        poster: "poster/3.jpeg",
    },
    {
        id: "4",
        songName: `De de pyar de <br>
        <div class="subtitle">De de pyar de</div>`,
        poster: "poster/4.jpeg",
    },
    {
        id: "5",
        songName: `Pyar ki maa ki <br>
        <div class="subtitle">Shaarib Sabri, Toshi Sabri, Toshi</div>`,
        poster: "poster/5.jpeg",
    },
    {
        id: "6",
        songName: `Pyar hota kayi baar h <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/6.jpeg",
    },
    {
        id: "7",
        songName: `BAD BOY <br>
        <div class="subtitle">Badshah, Neeti Mohan</div>`,
        poster: "poster/7.jpeg",
    },
    {
        id: "8",
        songName: `Genda Phool <br>
        <div class="subtitle">Badshah</div>`,
        poster: "poster/8.jpeg",
    },
    {
        id: "9",
        songName: `Kalla Sohna nai <br>
        <div class="subtitle">Neha kakkar</div>`,
        poster: "poster/9.jpeg",
    },
    {
        id: "10",
        songName: `Malang <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "poster/10.jpeg",
    },
    {
        id: "11",
        songName: `Kapoor & sons <br>
        <div class="subtitle">Badshah</div>`,
        poster: "poster/11.jpeg",
    },
    {
        id: "12",
        songName: `Dhaago se baandha <br>
        <div class="subtitle">Arijit Singh, Shreya Ghoshal</div>`,
        poster: "poster/12.jpeg",
    },
    {
        id: "13",
        songName: `Ankh Maarey <br>
        <div class="subtitle">Neha kakkar</div>`,
        poster: "poster/13.jpeg",
    },
    {
        id: "14",
        songName: `Jalwa <br>
        <div class="subtitle">Sajid-Wajid</div>`,
        poster: "poster/14.jpeg",
    },
    {
        id: "15",
        songName: `Dance meri raani <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "poster/15.jpeg",
    },
    {
        id: "16",
        songName: `Dhadak - tite track <br>
        <div class="subtitle">jahnvi & ishaan</div>`,
        poster: "poster/16.jpeg",
    },
    {
        id: "17",
        songName: `Kala Chashma <br>
        <div class="subtitle">Badshah, Neha kakkar</div>`,
        poster: "poster/17.jpeg",
    },
    {
        id: "18",
        songName: `Number Likh <br>
        <div class="subtitle">Tony kakkar</div>`,
        poster: "poster/18.jpeg",
    },
    {
        id: "19",
        songName: `Chaka chak <br>
        <div class="subtitle">A R Rahman, Shreya ghoshal</div>`,
        poster: "poster/19.jpeg",
    },
    {
        id: "20",
        songName: `Pysho Saiyaan <br>
        <div class="subtitle">Dhvani Bhanushali, Sachet Tandon, and Tanishk Bagchi</div>`,
        poster: "poster/20.jpeg",
    },
    {
        id: "21",
        songName: `Barbaad <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/21.jpeg",
    },
    {
        id: "22",
        songName: `Safar <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/22.jpg",
    },
    {
        id: "23",
        songName: `Geruaa <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/23.jpeg",
    },
    {
        id: "24",
        songName: `Sau Aasmaan <br>
        <div class="subtitle">Armaan malik, Neeti mohan</div>`,
        poster: "poster/24.jpeg",
    },
    {
        id: "25",
        songName: `Barish ki jaaye <br>
        <div class="subtitle">Sunanda Sharma</div>`,
        poster: "poster/25.jpeg",
    },
    {
        id: "26",
        songName: `Paani Paani <br>
        <div class="subtitle">Badshah</div>`,
        poster: "poster/26.jpeg",
    },
    {
        id: "27",
        songName: `Tum kya mile <br>
        <div class="subtitle">Arijit Singh, Shreya Ghoshal</div>`,
        poster: "poster/27.jpeg",
    },
    {
        id: "28",
        songName: `Brothers Anthem <br>
        <div class="subtitle">Vishal Dadlani</div>`,
        poster: "poster/28.jpeg",
    },
    {
        id: "29",
        songName: `Jee ni karda <br>
        <div class="subtitle">Neha kakkar</div>`,
        poster: "poster/29.jpeg",
    },
    {
        id: "30",
        songName: `Tumhi ho bandhu <br>
        <div class="subtitle"> Neeraj Sridhar & Kavita Seth</div>`,
        poster: "poster/2.jpeg",
    },
    {
        id: "31",
        songName: `Radhe - Title track <br>
        <div class="subtitle">Sajid Ali</div>`,
        poster: "poster/31.jpeg",
    },
    {
        id: "32",
        songName: `Baarish ban jana <br>
        <div class="subtitle">Arijit Singh, Shreya Ghoshal</div>`,
        poster: "poster/32.jpeg",
    },
    {
        id: "33",
        songName: `Dhokhebaaz <br>
        <div class="subtitle">Jaani</div>`,
        poster: "poster/33.jpeg",
    },
    {
        id: "34",
        songName: `Tum hi ana <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "poster/34.jpeg",
    },
    {
        id: "35",
        songName: `High rated gabru <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "poster/35.jpeg",
    },
    {
        id: "36",
        songName: `Gede <br>
        <div class="subtitle">Karan randhawa</div>`,
        poster: "poster/36.jpeg",
    },
    {
        id: "37",
        songName: `Nain Bengali <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "poster/37.jpeg",
    },
    {
        id: "38",
        songName: `gandi baat <br>
        <div class="subtitle">Mika singh, kalpna patowari</div>`,
        poster: "poster/38.jpeg",
    },
    {
        id: "39",
        songName: `Tere liye <br>
        <div class="subtitle">Atif aslam</div>`,
        poster: "poster/39.jpeg",
    },
    {
        id: "40",
        songName: `Is qadar <br>
        <div class="subtitle">Tulsi kumar, Darshan raval</div>`,
        poster: "poster/40.jpeg",
    },
    {
        id: "41",
        songName: `Kesariya <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/41.jpeg",
    },
    {
        id: "42",
        songName: `Khyaal rakhya kar <br>
        <div class="subtitle">Neha kakkar, Rohanpreet Singh</div>`,
        poster: "poster/42.jpeg",
    },
    {
        id: "43",
        songName: `Wajah tum ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/43.jpeg",
    },
    {
        id: "44",
        songName: `Phir bhi tumko chahunga <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/44.jpeg",
    },
    {
        id: "45",
        songName: `Sorry <br>
        <div class="subtitle">Maninder Buttar, Neha kakkar</div>`,
        poster: "poster/45.jpeg",
    },
    {
        id: "46",
        songName: `Laila <br>
        <div class="subtitle">Pawni P Pandey</div>`,
        poster: "poster/46.jpeg",
    },
    {
        id: "47",
        songName: `Relation <br>
        <div class="subtitle">Nikk</div>`,
        poster: "poster/47.jpeg",
    },
    {
        id: "48",
        songName: `Sanam Re <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/48.jpeg",
    },
    {
        id: "49",
        songName: `Swag se swagat <br>
        <div class="subtitle">Vishal dadlani, Neha Bhasin</div>`,
        poster: "poster/49.jpeg",
    },
    {
        id: "50",
        songName: `Whistle baja <br><div class="subtitle">Manj Musik</div>`,
        poster: "poster/50.jpeg",
    }, 
    {
        id: "51",
        songName: `Lamba h ri Lamba <br><div class="subtitle">Manj Musik</div>`,
        poster: "poster/51.jpeg",
    },
]




Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});


// search data start
let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `

    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
        
        if (text_value.toUpperCase().indexOf(input_value) > -1 ) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";

        }

        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }
    }
})

// search data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playListplay')).forEach((e) =>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `poster/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName)
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration /100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
    
});



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }  

    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `poster/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});

next.addEventListener('click', ()=>{
    index ++;
    if(index >Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `poster/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

                                                                                                                            //  SHUFFLE BUTTON

const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index ++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }            
});
























let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artist_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    Artist_bx.scrollLeft -= 330;
});




