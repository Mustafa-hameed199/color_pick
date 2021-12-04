let log = console.log;

let btn = document.querySelector('.refresh-btn');
let section = document.querySelector('.boxes');
let sound = document.getElementById('sound')
sound.volume = .1;

for (let i = 1; i <= 102 ; i++) {    
    let div = document.createElement('div');
    div.className = 'box'
    section.appendChild(div);
}

let boxes = [...section.children];

function randomBgd() {
    let chars = '123456789abcdef';
    let randomNumbers = 6;
    let color = '#'

    for(let i = 0; i < randomNumbers; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        color+=chars[rand];
    }

    return color;
}

function addBgd() {
    boxes.forEach(box => {
        box.innerHTML = randomBgd()
        box.style.backgroundColor = box.innerHTML;
        
        box.addEventListener('click',function () {
            sound.play()
            boxes.forEach(box => {box.classList.remove('copyed')})
            this.classList.remove('copyed');
            this.classList.add('copyed');
            navigator.clipboard.writeText(this.innerHTML);
        })
    })
}
addBgd()

btn.addEventListener('click', addBgd) 