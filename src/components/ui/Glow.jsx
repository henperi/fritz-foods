import React, { Component } from 'react';

class Glow extends Component {
  state = {
    isGlowedByUser: false,
    glowCount: 0,
  };

  handleGlow = () => {
    this.setState(prevState => ({
      isGlowedByUser: !prevState.isGlowedByUser,
      glowCount: prevState.isGlowedByUser ? prevState.glowCount - 1 : prevState.glowCount + 1,
    }));
  };

  render() {
    const { isGlowedByUser, glowCount } = this.state;
    return (
      <div>
        <div style={{ minHeight: '20px' }}>
          {isGlowedByUser && <small>You glowed this article</small>}
        </div>
        <button
          type="button"
          onClick={this.handleGlow}
          className={`btn fs-20 ${isGlowedByUser && 'bg-blue'}`}
        >
          <i className={`fa fa-lightbulb-o p-r-5 ${isGlowedByUser ? '' : 'text-blue'}`} />
          <span> Glow</span>
        </button>
        <div>
          <small>
            {glowCount}
            <span> Article Glows</span>
          </small>
        </div>
      </div>
    );
  }
}

export default Glow;
