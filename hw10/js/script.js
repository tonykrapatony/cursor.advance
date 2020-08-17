window.addEventListener("keydown", function (event) {
    const audio = document.querySelector(`audio[class = "sound${event.keyCode}"]`);
    const key = document.querySelector(`div[id = "${event.keyCode}"]`);
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
    key.classList.add('play');
    setTimeout(() => {key.classList.remove('play')}, 1000);
});

document.getElementById('81').addEventListener('click', function(){     
    const audio = document.querySelector('.sound81');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('87').addEventListener('click', function(){     
    const audio = document.querySelector('.sound87');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('69').addEventListener('click', function(){     
    const audio = document.querySelector('.sound69');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('82').addEventListener('click', function(){     
    const audio = document.querySelector('.sound82');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('84').addEventListener('click', function(){     
    const audio = document.querySelector('.sound84');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('89').addEventListener('click', function(){     
    const audio = document.querySelector('.sound89');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('85').addEventListener('click', function(){     
    const audio = document.querySelector('.sound85');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('73').addEventListener('click', function(){     
    const audio = document.querySelector('.sound73');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
document.getElementById('79').addEventListener('click', function(){     
    const audio = document.querySelector('.sound79');
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
});
