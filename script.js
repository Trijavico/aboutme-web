const $cta = document.querySelector('.play_icon');
const $map = document.querySelector('.map_bg');
const $returns = Array.from(document.querySelectorAll('.spikes button'))
const $cta_credits = document.querySelector('.cta_credits');
const $calc = document.getElementById('calc');
const $exit = document.getElementById('exit');

const values = {
    'about_me': document.querySelector('.about_me'),
    'studies': document.querySelector('.studies'),
    'movies': document.querySelector('.movies')
}

function changeSection(values, map){
    

    const target = values[document.querySelector("input[name=pathway]:checked").value];
    document.body.classList.add('disappear')

    setTimeout(() => {
        map.dataset.display = 'false';
        target.dataset.display = 'show';
        document.body.classList.remove('disappear')
    }, 2000);
}

function returnToMap(values, map){
    document.body.classList.add('disappear');

    setTimeout(() => {
        for (const key in values) {
            values[key].dataset.display = 'false';
        }
        map.dataset.display = 'show';
        document.body.classList.remove('disappear')
    }, 2000);
}

$cta.addEventListener('click', () =>{
    changeSection(values, $map);
});

$cta_credits.addEventListener('click', () => {
    document.querySelector('.credits_container').style.display = 'flex';
});

$returns.forEach(button => {
    button.addEventListener('click', ()=>{
        returnToMap(values, $map)
    })
})

$calc.addEventListener('click', ()=>{
    let n = document.getElementById('in').value;
    let result = 520.00 * n;

    if(document.getElementById('mate').checked) result += 2000.00;
    if(document.getElementById('eng').checked) result += 4000.00;

    document.getElementById('resultBox').innerHTML = '<span class="space">$</span>'+result;
})

$exit.addEventListener('click', ()=>{
    document.querySelector('.credits_container').style.display = 'none';
})