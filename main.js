import { snakeSpeed,draw as drawSnake,update as updateSnake,snakeCrossItSelf,getSnakeHead } from "./snake.js"
import { update as updateSnakeFood , draw as drawSnakeFood } from './food.js'
import { outsideGameBoard } from "./grid.js"



let lastRenderTime = 0
let gameOver = false
const gameBoard = document.querySelector(".game_board")


function main(currentTime){
    if(gameOver){
       displayModel()
        return
    }
    window.requestAnimationFrame(main)
    
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / snakeSpeed ) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateSnakeFood()
    loosingGame()

}

function draw(){
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawSnakeFood(gameBoard)
}

function loosingGame(){
    gameOver = outsideGameBoard(getSnakeHead()) || snakeCrossItSelf()
}

function displayModel(){
    let modelParent = document.querySelector(".model")
    let restartBtn = document.querySelector("#restart")
    let cancelBtn = document.querySelector("#cancel")

    if(gameOver){
       modelParent.style.top = "unset"
       restartBtn.addEventListener("click",()=>{
        window.location = "/"

       })

       cancelBtn.addEventListener("click",()=>{
        modelParent.style.top = "-10000px"
       })
       
        
    }
}