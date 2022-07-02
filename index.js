// Code your solution here
function findMatching (array, string) {
    const result = array.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch (array, string) {
    const result = array.filter(driver => driver.split("").slice(0, string.length).join("") === string);
   
    return result
}

function matchName (array, string) {
    const result = array.filter(driver => driver["name"] === string)

    return result
}