var React=require('react');
var Weather1=require('./Weather1');
var loadeddata = false;
var Weather=React.createClass({
   getInitialState:function(){
     return({datas:[],city:''}) //return value with city
   },
   getData:function(){
      this.setState({city:this.refs.city.value}); //set the value for city
      $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?q='+this.refs.city.value+'&appid=1b229d06e261f769c3a692257c928c00', //api for weather
      dataType: 'json', //getting datatype as json
      async:false,
      type: 'GET',
      success: function(data)
      {       
          this.setState({datas:data}); //this sets the data to states
          loadeddata=true;
      }.bind(this),
      error: function(xhr, status, err) {
          alert("enter the correct city"); //alert if wrong data (city) entered
          console.error(err.toString()); //write the error message to console as string
      }.bind(this),
   });
 },
  render:function(){
    var wd;
    if(loadeddata)
    {      
      wd=<Weather1 details={this.state.datas} cities={this.state.city}>; // binds the data for state and city
    }
    return(
      <div>          
      <h1 id="head"><b>5 Day Weather Forecast</b></h1>
      <input type="text" className="form-control"  id="search" ref="city" placeholder="Enter the city Name" />    
      <button type="submit" className="btn btn-default" id="button" onClick={this.getData}>Search</button>
        {wd}  
      </div>
    );
  }
})
module.exports=Weather
