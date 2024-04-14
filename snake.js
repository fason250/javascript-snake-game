import { getInputDirection } from "./input.js"

export const snakeSpeed = 3
const snakeBody = [{ x: 11, y: 11}]
let newPoints = 0

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for(let i= snakeBody.length - 2 ; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
   snakeBody.forEach(points =>{
    const newSnakeElement = document.createElement("div")
    newSnakeElement.style.gridRowStart = points.y
    newSnakeElement.style.gridColumnStart = points.x
    newSnakeElement.classList.add("snake")
    gameBoard.appendChild(newSnakeElement)
   })


}

export function increaseSnake(amount){
    newPoints += amount

}

export function onSnake(position,{ ignoreHead = false } = {}){ 
    return snakeBody.some((point,index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(point,position)
    })
}


export function getSnakeHead(){
    return snakeBody[0]
}
export function snakeCrossItSelf(){
    return onSnake(snakeBody[0],{ ignoreHead: true })

}

function equalPositions(position1, position2){
    return position1.x === position2.x && position1.y === position2.y

}

function addSegments(){
    for(let i = 0; i< newPoints; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newPoints = 0
}