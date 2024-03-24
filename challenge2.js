//the speed limit has been initialized to 70
const speedLimit=70
function speedOfCar(speed){
    if (speed <=speedLimit){
        return "Ok";
        //returns "Ok" if the speed is less than the limit
    }
        else if (speed >speedLimit){
        points=Math.floor((speed-speedLimit)/5)
        //calculates the number of points
        if (points>12){
            return "Licence suspended"}
            //determines if the licence is suspended         
                            }
                            //outputs points
                            console.log (points)
    }

    

    