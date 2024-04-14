const gridSize = 21

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1
    }
}

export function outsideGameBoard(position){
    return ( 
        position.x < 1 || position.x > gridSize || position.y < 1 ||       position.y > gridSize
    )
}