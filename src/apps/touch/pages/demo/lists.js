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
					<UI.GroupHeader>Lists</UI.GroupHeader>
					<UI.GroupBody>
						<Link onTap={()=>{
							weui.alert('content', function () {
								console.log('yes')
							}, {
								title: '自定义标题'
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									Alert
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link onTap={()=>{

							weui.prompt("请输入", function (value) {
								console.log('ok',value);
								alert(value)
							}, {
								input:true,
								title: '自定义标题'
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									prompt
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link onTap={()=>{

							weui.confirm('自定义标题的confirm', function () {
								console.log('yes')
							}, function () {
								console.log('no')
							}, {
								title: '自定义标题'
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									confirm
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link onTap={()=>{

							weui.toast('操作成功', {
								duration: 3000,
								className: "bears"
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									toast
								</UI.ItemInner>
							</UI.Item>
						</Link>

						<Link onTap={()=>{
							const loading = weui.loading("loading");
							setTimeout(()=>{
								loading.hide()
							},3000)
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									loading
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link onTap={()=>{
							const loading = weui.loading("loading",{showMask:true});
							setTimeout(()=>{
								loading.hide()
							},3000)
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									loading with mask
								</UI.ItemInner>
							</UI.Item>
						</Link>

						<Link onTap={()=>{
							weui.actionSheet([
								{
									label: '拍照',
									onClick: function () {
										console.log('拍照');
									}
								}, {
									label: '从相册选择',
									onClick: function () {
										console.log('从相册选择');
									}
								}, {
									label: '其他',
									onClick: function () {
										console.log('其他');
									}
								}
							], [
								{
									label: '取消',
									onClick: function () {
										console.log('取消');
									}
								}
							], {
								title: 'actionTitle',
								className: "custom-classname",
								onClose: function(){
									console.log('关闭');
								}
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									actionSheet
								</UI.ItemInner>
							</UI.Item>
						</Link>

						<Link onTap={()=>{
							weui.topTips('请填写正确的字段', {
								duration: 3000,
								className: "custom-classname",
								callback: function () {
									console.log('close');
								}
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									topTips
								</UI.ItemInner>
							</UI.Item>
						</Link>

						<Link onTap={()=>{
							weui.datePicker({
								start: '2016-12-29',
								end: '2030-12-29',
								/**
								 * https://zh.wikipedia.org/wiki/Cron
								 * cron 表达式后三位
								 * 示例：
								 *  * * *                每天
								 *  5 * *                每个月的5日
								 *  1-10 * *             每个月的前10日
								 *  1,5,10 * *           每个月的1号、5号、10号
								 *  *\/2 * *             每个月的 1、3、5、7...日，注意写的时候斜杠“/”前面没有反斜杠“\”，这是因为是注释所以需要转义
								 *  * 2 0                2月的每个周日
								 *  * * 0,6              每个周末
								 *  * * 3                每周三
								 */
								cron: '* */2 0',
								defaultValue: [2017, 7, 9],
								onChange: function (result) {
									console.log(result);
								},
								onConfirm: function (result) {
									console.log(result);
								},
								id: 'datePicker',
								title: '日期选择器'
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									datePicker
								</UI.ItemInner>
							</UI.Item>
						</Link>
						<Link onTap={()=>{
							weui.picker([{
								label: '飞机票',
								value: 0
							}, {
								label: '火车票(disabled)',
								disabled: true,
								value: 1
							}, {
								label: '的士票',
								value: 2
							}, {
								label: '住宿费',
								value: 3
							}, {
								label: '礼品费(disabled)',
								value: 4,
								disabled: true,
							}, {
								label: '活动费',
								value: 5
							}, {
								label: '通讯费',
								value: 6
							}, {
								label: '补助',
								value: 7
							}, {
								label: '通讯费',
								value: 8
							}, {
								label: '其他',
								value: 9
							}], {
								defaultValue: [2],
								className: 'custom-classname',
								onChange: function (result) {
									//console.log(item, index);
									console.log(result);
								},
								onConfirm: function (result) {
									console.log('confirm')
									console.log(result);
								},
								id: 'picker',
								title: '单列选择器'
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									picker
								</UI.ItemInner>
							</UI.Item>
						</Link>

						<Link onTap={()=>{
							weui.picker([
								{
									label: '1',
									value: '1'
								}, {
									label: '2',
									value: '2'
								}, {
									label: '3',
									value: '3'
								}
							], [
								{
									label: 'A',
									value: 'A'
								}, {
									label: 'B',
									value: 'B'
								}, {
									label: 'C',
									value: 'C'
								}
							], {
								defaultValue: ['3', 'A'],
								onChange: function (result) {
									console.log(result);
								},
								onConfirm: function (result) {
									console.log(result);
								},
								id: 'multiPickerBtn',
								onClose: function(){
									console.log('onClose');
								},
								title: '多列选择器'
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									多列选择器
								</UI.ItemInner>
							</UI.Item>
						</Link>

						<Link onTap={()=>{
							weui.picker([
								{
									label: '广东',
									value: 0,
									children: [
										{
											label: '广州',
											value: 0,
											children: [
												{
													label: '海珠',
													value: 0
												}, {
													label: '番禺',
													value: 1
												}
											]
										}, {
											label: '佛山',
											value: 1,
											children: [
												{
													label: '禅城',
													value: 0
												}, {
													label: '南海',
													value: 1
												}
											]
										}
									]
								}, {
									label: '广西',
									value: 1,
									children: [
										{
											label: '南宁',
											value: 0,
											children: [
												{
													label: '青秀',
													value: 0
												}, {
													label: '兴宁',
													value: 1
												}
											]
										}, {
											label: '桂林',
											value: 1,
											children: [
												{
													label: '象山',
													value: 0
												}, {
													label: '秀峰',
													value: 1
												}
											]
										}
									]
								}
							], {
								depth: 3,
								defaultValue: [0, 1, 1],
								onChange: function (result) {
									console.log(result);
								},
								onConfirm: function (result) {
									console.log(result);
								},
								id: 'cascadePicker',
								title: '嵌套选择器'
							});
						}}>
							<UI.Item showDisclosureArrow>
								<UI.ItemInner>
									嵌套选择器
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
