import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  newCounter, 
  incrementCounter, 
  decrementCounter 
} from '../actions';

import Counter from './counter';

class ListCounters extends Component {
  
  drawCounters() {
    return this.props.counters.map((count, index) => {
      return <Counter
                key={index}
                count={count}
                index={index}
                onUp={() => {
                  this.props.incrementCounter(index)
                }}
                onDown={() =>
                  this.props.decrementCounter(index)
                } />
    })
  }

  render() {
    return (
      <div>
        {this.drawCounters()}
        <button onClick={() => {
          this.props.newCounter();
        }}>Add new Counter</button>
      </div>
    )
  }
}

// state === store
const mapStateToProps = (state) => {
  return { counters: state.counters }
}

const mapDispatchToProps = () => {
  return { 
  newCounter, 
  incrementCounter, 
  decrementCounter 
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(
  mapStateToProps,
  {                   // mapDispatchToProps
    mapDispatchToProps,
    incrementCounter, // store.dispatch(incrementCounter(0))
    decrementCounter, // store.dispatch(decrementCounter(0))
    newCounter        // store.dispatch(newCounter())
  })(ListCounters);
