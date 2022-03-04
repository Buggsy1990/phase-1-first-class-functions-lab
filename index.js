// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
    const first =drivers.slice(0,2)
    return first;
}
const returnLastTwoDrivers =function(drivers){
    const last =drivers.slice(2,4)
    return last
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return ((fare) => fare*num);
}
const fareDoubler = function(fare) {
    return fare* 2;
}
const fareTripler =function(fare) {
    return fare* 3;
}
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}