//создал матрицу 8 на 8
let chess=[
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];
//отрисовал матрицу
function draw() {
    let out = '';
    let m = 0;
    for (let i=0;i<chess.length;i++){
        let arr = chess[i];
        for(let k=0;k<arr.length;k++){
            if(m % 2 == 0){
                out+=`<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;//добавлнее индекса поля
            }
            else{
                out+=`<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;//добавление индекса поля
            }
            m++;
        }
        m++;
    }
    document.querySelector('#field').innerHTML =out ;//Привязка к полям и прорисовка
    document.querySelectorAll('.chess-block').forEach(function(element){
        element.onclick = horse;
    })
}

draw();

function horse(){
    document.querySelectorAll('.chess-block').forEach(function(element){
        element.classList.remove('green'); //чиска класов после испольхования
        element.classList.remove('active');
    })
     let x=this.dataset.x;  //использование dataset для обрашения к data-x
     let y=this.dataset.y;  //использование dataset для обрашения к data-y
     this.classList.add('green');
     console.log(x + ' ' + y); // проверка работы матрицы функции
     if(+x+2 < 8 && +y + 1 <  8){   //прорисовка клеточек
        document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y+1}"]`).classList.add('active');
     }
     if(+x+2 < 8 && +y - 1 >=0){
        document.querySelector(`.chess-block[data-x="${+x + 2}"][data-y="${+y-1}"]`).classList.add('active');
     }
     if(+x-2 >=0 && +y + 1 <  8){
        document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y+1}"]`).classList.add('active');
     }
     if(+x-2 >=0 && +y - 1 >=0){
        document.querySelector(`.chess-block[data-x="${+x - 2}"][data-y="${+y-1}"]`).classList.add('active');
     }
     if(+x+1 <8 && +y - 2 >=0){
        document.querySelector(`.chess-block[data-x="${+x +1}"][data-y="${+y-2}"]`).classList.add('active');
     }
     if(+x-1 >=0 && +y - 2 >=0){
        document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y-2}"]`).classList.add('active');
     }
     if(+x+1 <8 && +y +2 <  8){
        document.querySelector(`.chess-block[data-x="${+x +1}"][data-y="${+y+2}"]`).classList.add('active');
     }
     if(+x-1 >=0 && +y +2 <  8){
        document.querySelector(`.chess-block[data-x="${+x - 1}"][data-y="${+y+2}"]`).classList.add('active');
     } 

}