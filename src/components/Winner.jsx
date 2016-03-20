import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactMixin from 'react-mixin';

class Winner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
};
ReactMixin(Winner.prototype, PureRenderMixin);
export default Winner;
