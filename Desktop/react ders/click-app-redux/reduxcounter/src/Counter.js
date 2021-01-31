import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from './actions/counterAction';

function Counter(props) {
  return (<div>
    <h1>You have {props.count} Clicked times</h1>
     <br/>
     <button onClick={props.decrease}>Decrease 1</button><br/>
      <button onClick={props.decrease}>Decrease 5</button><br/>
      <button onClick={props.decrease}>Decrease 10</button><br/>
      <button onClick={props.increase}>Increase 1</button><br/>
      <button onClick={props.increase}>Increase 5</button><br/>
      <button onClick={props.increase}>Increase 10</button>
    </div>)
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  } 
}

const mapDispatchToProps = {
  increase: increaseCount,
  decrease: decreaseCount
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);