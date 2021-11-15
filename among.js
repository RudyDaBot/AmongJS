const susify = (arg) => {
    return(arg + " is sus");
}


const eject = (name, noOfImposters) => {

    if (noOfImposters !== 1 && noOfImposters !== 0) {
        let imposterAmount = noOfImposters - 1;
        return(`${name} is an impostor. ${imposterAmount} imposters remain`)
    }

    else 
    {
        console.error("Invalid Value. Please set value higher than 2")
    }

   
}

export default susify;
export default eject;
