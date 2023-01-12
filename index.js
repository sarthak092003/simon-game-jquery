let start = false
let levelNumb = 1;
let storage = [];
let chance = 0;
let continueCheck = true
let continueGame = true

    $('body').keypress(function(event){
        if(start===false){
            goo(event)
        }
    })
function goo (key){
    if(key === "A"||"a"){
        start = true
        startGame()
    }
}

function startGame(){
    $(`body`).removeClass("game-over")

        $("h1").text(`level ${levelNumb}`)
        let tileNumb = Math.random()*4
        let tile = Math.floor(tileNumb)
        let prevColor = $(`#${tile}`).css("background-color")
        $(`#${tile}`).css("background-color",'black')
        sound(tile)
        setTimeout(()=>($(`#${tile}`).css("background-color",prevColor)),100)
        storage.push(tile)
    }


function sound (tile){
    switch (tile) {
        case 0:
            let sound = new Audio('./sounds/green.mp3')
            sound.play()
            
            break;
            case 1:
            let sound1 = new Audio('./sounds/red.mp3')
            sound1.play()
            
            break;
            case 2:
            let sound2 = new Audio('./sounds/yellow.mp3')
            sound2.play()
            
            break;
            case 3:
            let sound3 = new Audio('./sounds/blue.mp3')
            sound3.play()
            
            break;
    
        default:
            break;
    }
}
$('.btn').on("click",function(event){
    check(event.target.id)
})

function check (event){
            $(`#${event}`).addClass("pressed")
            setTimeout(()=>($(`#${event}`).removeClass("pressed")
            ),100)
            sound(parseInt(event))
            if (event != storage[chance]){
                let soundError = new Audio('./sounds/wrong.mp3')
                $('body').addClass('game-over')
                continueCheck = false
                $('h1').text('wrong start again press any key to Restart')
                $("body").on('keypress',function(){
                    restart()
                })
            }
            if (event == storage[chance]){  
                chance++;
            }
            if(chance==storage.length){

                chance = 0;
                levelNumb++;
                setTimeout(()=>(startGame()),500)
            }
            
    

       
    }

function restart(){
    
    continueCheck= true
    storage = [];
    chance = 0;
    levelNumb= 1;
    setTimeout(()=>(startGame()),500)
}