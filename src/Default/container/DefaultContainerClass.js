/**
 *
 * @author ChanWoo Gwon, Yonsei Univ. Researcher, since 2020.05
 * @date 2021.01.06
 */
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import DefaultComponent from '../component/DefaultComponentClass';

import * as defaultActions from '../store/actions/defaultAction';

class DefaultContainer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
		this.onEventListener = this.onEventListener.bind(this);
	}
	
	render() {
		return (
			<div className="App">
				<DefaultComponent
					onEventListener={this.onEventListener}
				/>
			</div>
		)
	}
	
	onEventListener(e) {
		this.props.DefaultActions.fetchDefault();
	}
}

export default connect(
	(state) => ({
		...state.default // bind data to props
	}),
	(dispatch) => ({
		DefaultActions: bindActionCreators(defaultActions, dispatch) // bind dispatch to props
	})
)(DefaultContainer);