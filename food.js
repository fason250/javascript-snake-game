import { onSnake,increaseSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let foodPoint = getRandomFoodPosition()
const growRate = 1

export function update(){
    if(onSnake(foodPoint)){
        increaseSnake(growRate)
        foodPoint = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
    const snakeFoodElement = document.createElement("div")
    snakeFoodElement.style.gridRowStart = foodPoint.y
    snakeFoodElement.style.gridColumnStart = foodPoint.x
    snakeFoodElement.classList.add("food")
    gameBoard.appendChild(snakeFoodElement)
}

function getRandomFoodPosition(){
    let newSnakeFoodPosition
    while(newSnakeFoodPosition == null || onSnake(newSnakeFoodPosition)){
        newSnakeFoodPosition = randomGridPosition()
    }
    return newSnakeFoodPosition
}
