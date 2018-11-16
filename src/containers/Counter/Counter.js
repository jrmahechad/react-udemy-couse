import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

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
		onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
		onAdd: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
		onSubstract: () => dispatch({ type: actionTypes.SUBSTRACT, payload: 5 }),
		onStoreResults: (value) => dispatch({ type: actionTypes.STORE_RESULT, payload: value }),
		onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, payload: id })
	};
};

export default connect(mapStateToProps, mapDispatchToProsp)(Counter);
