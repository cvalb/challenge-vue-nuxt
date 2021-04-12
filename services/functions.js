//returns the results for the daily calculations, for the NEOs modal and for the daily recordists calculation as an array of 3 arrays
export const formatResults = (unformatted) => {
    let formattedSearch = [];
    let formattedModal = [];
    let formattedRecords = [];
    let formattedAll = [];

    unformatted.forEach((neo) => {
        let id = neo.id;
        let name = neo.name;
        let minDiameter = "~" + parseFloat(neo.estimated_diameter.meters.estimated_diameter_min).toFixed(2) + " m";
        let maxDiameter = "~" + parseFloat(neo.estimated_diameter.meters.estimated_diameter_max).toFixed(2) + " m";
        let hazard = neo.is_potentially_hazardous_asteroid;
        let distance = parseInt(neo.close_approach_data[0].miss_distance.kilometers) + " km";
        let velocity = parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(1) + " km/s";

        if (hazard == true){
            hazard = "Sim";
        } else if (hazard == false) {
            hazard = "Não";
        }

        //daily calculations
        let displayObj = {id: id, name: name, distance: distance, velocity: velocity};
        formattedSearch.push(displayObj);
        
        //NEOs info
        let modalObj = {id:id, name: name, minDiameter: minDiameter, maxDiameter: maxDiameter, hazard: hazard};
        formattedModal.push(modalObj);

        //Recordists
        let recordObj = {
            name: name, 
            minDiameter: parseFloat(neo.estimated_diameter.meters.estimated_diameter_min).toFixed(2), 
            maxDiameter: parseFloat(neo.estimated_diameter.meters.estimated_diameter_max).toFixed(2), 
            distance: parseInt(neo.close_approach_data[0].miss_distance.kilometers),
            velocity: parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(1)
        }
        formattedRecords.push(recordObj);
    })

    formattedAll.push(formattedSearch, formattedModal, formattedRecords);

    return formattedAll;
}

export const calculateRecords = (results) => {
    let arrayBiggest = [];
    let arrayFastest = [];
    let arrayClosest = [];
    let recordsArray = [];

    results.forEach(function(obj) {
        arrayBiggest.push(obj.maxDiameter);
        arrayFastest.push(obj.velocity);
        arrayClosest.push(obj.distance);
    });

    let biggest = arrayBiggest.reduce((a,b) => { return Math.max(a,b) });
    let fastest = arrayFastest.reduce((a,b) => { return Math.max(a,b) });
    let closest = arrayClosest.reduce((a,b) => { return Math.min(a,b) });

    let biggestNeo = results.filter(r => r.maxDiameter == biggest);
    let fastestNeo = results.filter(r => r.velocity == fastest);
    let closestNeo = results.filter(r => r.distance == closest);

    recordsArray.push(
        {name: biggestNeo[0].name, diameter: biggestNeo[0].maxDiameter}, 
        {name: fastestNeo[0].name, velocity: fastestNeo[0].velocity}, 
        {name: closestNeo[0].name, distance: closestNeo[0].distance}
    );

    //recordsArray[0] = biggest, recordsArray[1] = fastest, recordsArray[2] = closest
    return recordsArray;
}