export const apiRequest = async (requestType, requestObject) => {
    const key = "DEMO_KEY" // replace DEMO_KEY with your API key here

    let uri = "https://api.nasa.gov/neo/rest/v1";
    let requestMethod = "GET";
    let request;
    let jsonHttp;

    switch (requestType){
        case "date":
            uri = uri + "/feed?start_date=" + requestObject + "&end_date=" + requestObject + "&api_key=" + key;

        break;

        case "object":
            uri = uri + "/neo/" + requestObject + "?api_key=" + key;

        break;

        default: 
            throw new Error("Assign a valid requestType to the apiRequest function");
    }

    jsonHttp = {
        method: requestMethod,
    };

    request = new Request(uri, jsonHttp);

    const response = await fetch(request);
    const json = await response.json();

    return json;
}