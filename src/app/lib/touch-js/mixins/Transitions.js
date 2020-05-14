import PropTypes from 'prop-types';

const Transitions = {
	contextTypes: {
		app: PropTypes.object
	},
	transitionTo (view, opts) {
		this.context.app.transitionTo(view, opts);
	}
};

export default Transitions;
