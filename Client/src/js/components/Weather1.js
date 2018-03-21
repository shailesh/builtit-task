var React=require('react');
var obj1={};
var Weather2=require('./Weather2');
var Weather1=React.createClass({  
  render:function()
  {
      var arr1=[];
      var datetime='';
      var desc='';
      loop=this.props.details.list;
      loop.forEach(function(msd) {     
      var datetime=msd.dt_txt;
      var str=datetime.split(" ");
      var stdate=str[0];
      var sttime=str[1];
      var desc=msd.weather[0].description;
      var temp=(Number(msd.main.temp)- 273.15).toFixed();
      var tempmin=(Number(msd.main.temp_min)- 273.15).toFixed();
      var tempmax=(Number(msd.main.temp_max)- 273.15).toFixed();
      var pressure=msd.main.pressure;
      var humidity=msd.main.humidity;
      var wind=msd.wind.speed;
      var cloud=msd.clouds.all;
      arr1.push(<Weather2 dates={stdate} time={sttime} desc1={desc} temp1={temp} tempmin1={tempmin} tempmax1={tempmax} pressure1={pressure} humidity1={humidity} wind1={wind} cloud1={cloud}/>);
   });
return(
  <div id="tab1">
  <h2 id="tab2">Five days weather details in <b>{this.props.cities}</b> for every 3hr intervals</h2>
  <table>
    <thead>
      <tr>
        <th>FiveDays Date</th>
        <th>Time</th>
        <th>Description</th>
        <th>Temperature in Celsius</th>
        <th>Temperature Min in Celsius</th>
        <th>Temperature Max in Celsius</th>
        <th>Wind Speed in m/sec</th>
        <th>Cloudiness in %</th>
        <th>Pressure in hpa</th>
        <th>Humidity in %</th>
      </tr>
    </thead>
    <tbody>
      {arr1}
    </tbody>
  </table>
  </div>       
        );
}
})
module.exports=Weather1;
