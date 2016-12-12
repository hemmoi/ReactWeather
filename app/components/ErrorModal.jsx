var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentdDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    debugger;
    modal.open();
  },
  render: function (){
    var {title, message} = this.props;
    debugger;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Some Title</h4>
        <p>Our error message</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
