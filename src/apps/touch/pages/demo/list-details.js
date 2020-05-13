import Container from 'lib/container';
import React,{Component} from 'react';

export default class extends Component{
	static navigationBar= 'main'
	static getNavigation = (props, app)=> {
		var leftLabel = props.prevView === 'list-simple' ? 'Simple' : 'Complex';
		return {
			leftArrow: true,
			leftLabel: leftLabel,
			leftAction: () => { app.transitionTo('tabs:' + props.prevView, { transition: 'reveal-from-right' }) },
			title: 'Person'
		}
	}
	static defaultProps = {
		prevView: 'home'
	}
	render () {
		var { person } = this.props;

		return (
			<Container direction="column">
				<Container fill scrollable ref="scrollContainer" className="PersonDetails">
					<img src={person.picture} className="PersonDetails__avatar" />
					<div className="PersonDetails__heading">{person.name.full}</div>
					<div className="PersonDetails__text text-block">{person.email || ''}</div>
					{(person.twitter || person.github) && <div className="PersonDetails__profiles">
						{person.twitter && <div className="PersonDetails__profile">
							<span className="PersonDetails__profile__icon ion-social-twitter" />
							{person.twitter}
						</div>}
						{person.github && <div className="PersonDetails__profile">
							<span className="PersonDetails__profile__icon ion-social-github" />
							{person.github}
						</div>}
					</div>}
				</Container>
			</Container>
		);
	}
}
