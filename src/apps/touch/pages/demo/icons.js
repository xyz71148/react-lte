import Container from 'lib/container';
import React,{Component} from 'react';
import Sentry from 'react-sentry';
import { Link, UI } from 'lib/touch-js';
import PropTypes from 'prop-types';
import icons from "./icons.json"
var scrollable = Container.initScrollable({ left: 0, top: 44 });

class SimpleLinkItem  extends Component{
	static propTypes = {
		row: PropTypes.string.isRequired
	}
	render () {
		return (
			<UI.Item>
				<UI.ItemInner>
					<UI.ItemTitle><span>ion-{this.props.row}</span></UI.ItemTitle>
					<UI.ItemSubTitle>
						<i style={{fontSize:24}} className={"ion-"+this.props.row} />
					</UI.ItemSubTitle>
				</UI.ItemInner>
			</UI.Item>
		);
	}
}


export default class extends Component{
	constructor(props) {
		super(props);
		Object.assign(this,Sentry)
		this.state = {
			searchString: '',
			icons
		}
	}
	static navigationBar = 'main'
	static getNavigation = (props, app) =>{
		return {
			leftArrow: true,
			leftLabel: 'Lists',
			leftAction: () => { app.transitionTo('tabs:lists', { transition: 'reveal-from-right' }) },
			title: 'Simple'
		}
	}

	componentDidMount () {

	}

	clearSearch () {
		this.setState({ searchString: '' });
	}

	updateSearch (str) {
		this.setState({ searchString: str });
	}

	submitSearch (str) {
		console.log(str);
	}

	render () {
		let { icons, searchString } = this.state
		let searchRegex = new RegExp(searchString)

		function searchFilter (item) { return searchRegex.test(item.toLowerCase()) };
		function sortByName (a, b) { return a.localeCompare(b) };

		let filteredPeople = icons.filter(searchFilter).sort(sortByName);

		let results
		if (searchString && !filteredPeople.length) {
			results = (
				<Container direction="column" align="center" justify="center" className="no-results">
					<div className="no-results__icon ion-ios-search-strong" />
					<div className="no-results__text">{'No results for "' + searchString + '"'}</div>
				</Container>
			);

		} else {
			results = (
				<UI.GroupBody>
					{filteredPeople.map((row, i) => {
						return <SimpleLinkItem key={'person' + i} row={row} />
					})}
				</UI.GroupBody>
			);
		}

		return (
			<Container ref="scrollContainer" scrollable={scrollable}>
				<UI.SearchField type="dark" value={this.state.searchString} onSubmit={this.submitSearch.bind(this)} onChange={this.updateSearch.bind(this)} onCancel={this.clearSearch.bind(this)} onClear={this.clearSearch.bind(this)} placeholder="Search..." />
				{results}
			</Container>
		);
	}
}
