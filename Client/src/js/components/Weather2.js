var React=require('react');
var Weather2=React.createClass({
  render:function()
  {
return(
  <tr>
    <td>{this.props.dates}</td>
    <td>{this.props.time}</td>
    <td>{this.props.desc1}</td>
    <td>{this.props.temp1}</td>
    <td>{this.props.tempmin1}</td>
    <td>{this.props.tempmax1}</td>
    <td>{this.props.wind1}</td>
    <td>{this.props.cloud1}</td>
    <td>{this.props.pressure1}</td>
    <td>{this.props.humidity1}</td>
  </tr>
  );
}
})
module.exports=Weather2;
