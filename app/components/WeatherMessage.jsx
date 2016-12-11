var React = require('react');

/*var WeatherMessage = React.createClass({

  render: function () {
    var {temp, location} = this.props;

    return (
      <div>
        <h2>Temperature in {location} is {temp}</h2>
      </div>
    );
  }
});
*/

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className="text-center">Temperature in {location} is {temp}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
