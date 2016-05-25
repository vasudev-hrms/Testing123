/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var vehiclesPerSecond = request.parameters.vehiclesPerSecond;
var lastCount = storage.local.lastCount;
if (lastCount && lastCount < countOfVehiclesPerSecond) {
    storage.local.lightDuration = storage.local.lightDuration - 10;
}
if (lastCount && lastCount > countOfVehiclesPerSecond) {
    storage.local.lightDuration = storage.local.lightDuration + 10;
}
broadcast(storage.local.lightDuration);
storage.local.lastCount = vehiclesPerSecond;
// We need to persist the evolution of the traffic as a global field, i.e. shared by all scripts
if (!storage.global.traffic) {
  storage.global.traffic = new Array();
}
var data = {
  "time": new Date().getHours(),
  "vehicles": storage.local.lastCount
}
var traffic = [data].concat(storage.global.traffic);
storage.global.traffic = traffic;
return storage.local.lastCount;

function broadcast(value) {
    // broadcast this value to all traffic lights
}			