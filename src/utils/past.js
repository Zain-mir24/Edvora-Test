export function Past(){
  var date1 = new Date();
  var finalpastArray=[]
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
 
  var futureArray=[]

  for(let i=0; i<3;i++){
     
     var date2 = new Date(rides[i].date)
     if (date1>date2){
         finalpastArray.push(rides[i])
     }else{
         futureArray.push(rides[i])
     }
  }
 console.log(finalpastArray)
  return finalpastArray
}
Past()