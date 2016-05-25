/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var vehiclesPerSecond = request.parameters.vehiclesPerSecond;
var lastCount = storage.local.lastCount;
if (lastCount && lastCount < vehiclesPerSecond) {
    storage.local.lightDuration = storage.local.lightDuration - 10;
}
if (lastCount && lastCount > vehiclesPerSecond) {
    storage.local.lightDuration = storage.local.lightDuration + 10;
}
broadcast(storage.local.lightDuration);
storage.local.lastCount = vehiclesPerSecond;
return storage.local.lastCount;

function broadcast(value) 
{
    // broadcast this value to all traffic lights
}			