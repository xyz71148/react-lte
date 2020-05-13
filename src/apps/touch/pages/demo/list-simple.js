import Container from 'lib/container';
import React,{Component} from 'react';
import Sentry from 'react-sentry';
import { Link, UI } from 'lib/touch-js';
import PropTypes from 'prop-types';
import body from "./list-simple.json"
var scrollable = Container.initScrollable({ left: 0, top: 44 });

class SimpleLinkItem  extends Component{
	static propTypes = {
		person: PropTypes.object.isRequired
	}
	render () {
		return (
			<Link to="tabs:list-details" transition="show-from-right" viewProps={{ person: this.props.person, prevView: 'list-simple' }}>
				<UI.Item showDisclosureArrow>
					<UI.ItemInner>
						<UI.ItemTitle>{this.props.person.name.full}</UI.ItemTitle>
					</UI.ItemInner>
				</UI.Item>
			</Link>
		);
	}
}

const peoples = body.results.map(p => p);



export default class extends Component{
	constructor(props) {
		super(props);
		Object.assign(this,Sentry)
		// post process new data
		peoples.forEach((person, i) => {
			if(!person) return
			person.id = i;
			person.name.first = person.name.first[0].toUpperCase() + person.name.first.slice(1);
			person.name.last = person.name.last[0].toUpperCase() + person.name.last.slice(1);
			person.name.initials = person.name.first[0] + person.name.last[0];
			person.name.full = person.name.first + ' ' + person.name.last;
			person.category = Math.random() > 0.5 ? 'A' : 'B';
			person.github = person.name.first.toLowerCase() + person.name.last.toLowerCase();
			person.picture = person.picture.medium;
			person.twitter = '@' + person.name.first.toLowerCase() + (Math.random().toString(32).slice(2, 5));
		});

		this.state = {
			searchString: '',
			people: peoples
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
		let { people, searchString } = this.state
		let searchRegex = new RegExp(searchString)

		function searchFilter (person) { return searchRegex.test(person.name.full.toLowerCase()) };
		function sortByName (a, b) { return a.name.full.localeCompare(b.name.full) };

		let filteredPeople = people.filter(searchFilter).sort(sortByName);

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
					{filteredPeople.map((person, i) => {
						return <SimpleLinkItem key={'person' + i} person={person} />
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
