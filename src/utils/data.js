export function Nearestpath() {
  var rides = [
    {
      id: " 001",
      origin_station_code: 23,
      station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
      destination_station_code: 93,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: " Panvel",
    },
    {
      id: "002",
      origin_station_code: 20,
      station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
      destination_station_code: 98,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: " Panvel",
    },
    {
      id: "003",
      origin_station_code: 13,
      station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
      destination_station_code: 91,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: " Panvel",
    },
  ];
  var user = {
    station_code: 40,
    name: "zain mir",
  };
  var finalArray = [];
  var myNewarray = [];
  function dynamicSort(property) {
    return function (a, b) {
      return a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    };
  }
  for (let i = 0; i < 3; i++) {
    
    finalArray = [];
    for (let j = 0; j < 9; j++) {
      var my = rides[i].station_path[j];
      finalArray.push(my);    }
    var newObject = {
      shortestValue: Number,
      object: {},
      distance:Number
    };
    newObject.shortestValue = finalArray.reduce((a, b) => {
      let aDiff = Math.abs(a - user.station_code);
      let bDiff = Math.abs(b - user.station_code);

      if (aDiff == bDiff) {
        return a > b ? a : b;
      } else {
        return bDiff < aDiff ? b : a;
      }
    });
    var neewvalue=newObject.shortestValue = finalArray.reduce((a, b) => {
      let aDiff = Math.abs(a - user.station_code);
      let bDiff = Math.abs(b - user.station_code);

      if (aDiff == bDiff) {
        return a > b ? a : b;
      } else {
        return bDiff < aDiff ? b : a;
      }
    });
    newObject.object = rides[i];
    newObject.distance=neewvalue-user.station_code
    myNewarray.push(newObject);
    myNewarray.sort(dynamicSort("shortestValue"));
  
  }
 return myNewarray
}

