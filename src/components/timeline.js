import React, { Component } from 'react';

export const TimelineCard = ({ inverted, children }) => {
  const className = inverted ? 'inverted' : undefined;

  return (
    <li className={className}>
      <div className='timeline-badge'><a><i className='fa fa-circle' /></a></div>
      <div className='timeline-card'>
        { children }
      </div>
    </li>
  );
};

export const TimelineMarker = ({ text }) => {
  return (
    <li className='timeline-marker'>{text}</li>
  );
};

class Timeline extends Component {
  render() {
    const { children } = this.props;
    let markers = 0;

    return (
      <div className='timeline-container'>
        <ul className='timeline'>
          {
            React.Children.map(children, (child, index) => {
              if (child.type === TimelineMarker) {
                markers++;
                return child;
              } else if ((index + markers)%2 === 0) return child;

              return React.cloneElement(child, { inverted: true });
            })
          }
        </ul>
      </div>
    );
  }
}

export default Timeline;
