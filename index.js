const returnFirstTwoDrivers = (arr) =>  arr.slice(0, 2)
const returnLastTwoDrivers = (arr) => arr.slice(arr.length - 2, arr.length)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(num) {
    return function(fare) {
        return fare * num
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(arr, driversFunction) {
    return driversFunction(arr)
}