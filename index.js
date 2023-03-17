
function distanceFromHqInBlocks(currentBlock) {
    if (currentBlock > 42) {
        return currentBlock - 42
    } else {
        return 42 - currentBlock
    }
}
console.log(distanceFromHqInBlocks(43));
function distanceFromHqInFeet (currentBlock){
    if (currentBlock > 42) {
        return (currentBlock - 42) * 264
    } else {
        return (42 - currentBlock) * 264
    }
 }


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination) {
        return (start- destination) * 264
    } else if (destination > start)
        return (destination - start) * 264
    
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled =distanceTravelledInFeet(start, destination)
  if (distanceTravelled<= 400) {
    return 0;
  } 
  else if (distanceTravelled> 400 && distanceTravelled<=2000){
    return (distanceTravelled-400)*0.02;
  }
  else if (distanceTravelled >2000 && distanceTravelled<=2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
    //returns the fare for the customer
    
  }