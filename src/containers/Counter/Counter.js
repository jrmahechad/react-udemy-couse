import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, decrement,add, substract, storeResults, deleteResults} from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 5" clicked={this.props.onAdd} />
				<CounterControl label="Subtract 5" clicked={this.props.onSubstract} />
				<hr />
				<button onClick={()=>this.props.onStoreResults(this.props.ctr)}>Store result</button>
				<ul>
					{this.props.storedResults.map((r) => (
						<li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>
							{r.value}{' '}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results
	};
};

const mapDispatchToProsp = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch(increment()),
		onDecrementCounter: () => dispatch(decrement()),
		onAdd: () => dispatch(add(5)),
		onSubstract: () => dispatch(substract(5)),
		onStoreResults: (value) => dispatch(storeResults(value)),
		onDeleteResult: (id) => dispatch(deleteResults(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProsp)(Counter);
