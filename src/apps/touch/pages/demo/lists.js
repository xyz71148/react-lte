import Container from 'lib/container';
import React, {Component} from 'react';
import { Link, UI } from 'lib/touch-js';

export default class extends Component{

	static navigationBar = 'main'
	static getNavigation = () => {
		return {
			title: 'Lists'
		}
	}

	render () {
		return (
			<Container scrollable>

				<UI.Group>
					<UI.GroupHeader>Lists</UI.GroupHeader>
					<UI.GroupBody>
						<Link to="tabs:list-simple" transition="show-from-right">
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									Simple List
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link to="tabs:form" transition="show-from-right">
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									Form
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link to="tabs:icons" transition="show-from-right">
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									Icons
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link to="tabs:control" transition="show-from-right">
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									Control
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link to="tabs:transitions" transition="show-from-right">
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									Transition
								</UI.ItemInner>
							</UI.Item>
						</Link>
					</UI.GroupBody>
				</UI.Group>
				<UI.Group>
					<UI.GroupHeader>GroupHeader</UI.GroupHeader>
					<UI.GroupBody>
						<UI.GroupInner>
							<p>Use groups to contain content or lists. Where appropriate a Group should be accompanied by a GroupHeading and optionally a GroupFooter.</p>
							GroupBody will apply the background for content inside groups.
						</UI.GroupInner>
					</UI.GroupBody>
				</UI.Group>
			</Container>
		);
	}
}
