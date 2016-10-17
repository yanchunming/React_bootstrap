"use strict";

(function (React, ReactDOM, window) {

	// 整体页面结构
	// Header 头部导航条
	// Defaults 默认页面
	// Page 其它结构相似的页面：起步，全局css样式, 组件，javascript插件，定制
	//
	//

	var Header = React.createClass({
		displayName: "Header",

		getInitialState: function getInitialState() {
			return {
				cls: {
					defaults: "choose",
					start: "",
					css: "",
					component: "",
					js: "",
					download: ""
				}
			};
		},
		// 事件回调函数
		// 可以尝试直接在dom中通过this.props.changeNav来直接调用父组件方法
		changeNav: function changeNav(e) {
			var id = e.target.getAttribute("data-id");
			var cls = this.state.cls;
			for (var k in cls) {
				if (k === id) {
					cls[k] = "choose";
				} else {
					cls[k] = "";
				}
			}
			this.props.changeNav(id);
			this.setState({
				cls: cls
			});
		},
		render: function render() {
			var cls = this.state.cls;
			return React.createElement(
				"div",
				null,
				React.createElement(
					"header",
					{ className: "header navbar navbar-static-top" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "navbar-header" },
							React.createElement(
								"a",
								{ "data-id": "defaults", onClick: this.changeNav, className: "navbar-brand" },
								"Bootstrap"
							)
						),
						React.createElement(
							"ul",
							{ className: "nav nav-pills navbar-nav" },
							React.createElement(
								"li",
								{ className: cls.start },
								React.createElement(
									"a",
									{ "data-id": "start", onClick: this.changeNav },
									"起步"
								)
							),
							React.createElement(
								"li",
								{ className: cls.css },
								React.createElement(
									"a",
									{ "data-id": "css", onClick: this.changeNav },
									"全局css样式"
								)
							),
							React.createElement(
								"li",
								{ className: cls.component },
								React.createElement(
									"a",
									{ "data-id": "component", onClick: this.changeNav },
									"组件"
								)
							),
							React.createElement(
								"li",
								{ className: cls.js },
								React.createElement(
									"a",
									{ "data-id": "js", onClick: this.changeNav },
									"javascript插件"
								)
							),
							React.createElement(
								"li",
								{ className: cls.download },
								React.createElement(
									"a",
									{ "data-id": "download", onClick: this.changeNav },
									"定制"
								)
							)
						),
						React.createElement(
							"ul",
							{ className: "nav nav-pills navbar-nav pull-right" },
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "" },
									"高薪工作"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "" },
									"优站精选"
								)
							),
							React.createElement(
								"li",
								null,
								React.createElement(
									"a",
									{ href: "" },
									"官方博客"
								)
							)
						)
					)
				)
			);
		}
	});

	var Footer = React.createClass({
		displayName: "Footer",

		render: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"footer",
					{ className: "footer footer-box" },
					React.createElement(
						"p",
						null,
						"Designed and built with all the love in the world by ",
						React.createElement(
							"a",
							{ href: "#" },
							"@mdo"
						),
						" and ",
						React.createElement(
							"a",
							{ href: "" },
							"@fat"
						),
						"."
					),
					React.createElement(
						"p",
						null,
						"Maintained by the ",
						React.createElement(
							"a",
							{ href: "#" },
							"core team"
						),
						" with the help of ",
						React.createElement(
							"a",
							{ href: "#" },
							"our contributors"
						),
						"."
					),
					React.createElement(
						"p",
						null,
						"本项目源码受 MIT 开源协议保护，文档受 CC BY 3.0 开源协议保护。"
					),
					React.createElement(
						"ul",
						{ className: "list-inline" },
						React.createElement(
							"li",
							null,
							"当前版本： v3.3.0  ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" GitHub 仓库 "
							),
							" ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" 实例精选 "
							),
							" ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" v2.3.2 中文文档 "
							),
							" ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" 关于 "
							),
							" ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" 优站精选 "
							),
							" ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" 官方博客 "
							),
							" ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" Issues "
							),
							" ·"
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ href: "#" },
								" 历史版本"
							)
						)
					)
				)
			);
		}
	});
	var Defaults = React.createClass({
		displayName: "Defaults",

		getInitialState: function getInitialState() {
			return {
				firstList: [{
					img: 'img/sass-less.png',
					h3: '预处理脚本',
					p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
				}, {
					img: 'img/devices.png',
					h3: '一个框架、多种设备',
					p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
				}, {
					img: 'img/components.png',
					h3: '特性齐全',
					p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
				}],
				secondList: [{
					img: 'img/01.png'
				}, {
					img: 'img/02.jpg'
				}, {
					img: 'img/03.png'
				}]
			};
		},
		// 生成列表函数
		createList: function createList(data) {
			console.log(data);
			return data.map(function (value, index) {
				if (value.h3 && value.p) {
					return React.createElement(
						"div",
						{ key: index, className: "col-lg-4" },
						React.createElement("img", { src: value.img, alt: "" }),
						React.createElement(
							"h3",
							null,
							value.h3
						),
						React.createElement(
							"p",
							null,
							value.p
						)
					);
				} else {
					return React.createElement(
						"div",
						{ key: index, className: "col-lg-4" },
						React.createElement("img", { src: value.img, alt: "" })
					);
				}
			});
		},
		render: function render() {
			return React.createElement(
				"section",
				{ style: { display: this.props.show } },
				React.createElement(
					"div",
					{ className: "banner" },
					React.createElement(
						"div",
						{ className: "banner-b-logo" },
						"B"
					),
					React.createElement(
						"h2",
						null,
						"Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。"
					),
					React.createElement(
						"span",
						{ className: "btn btn-lg btn-outline" },
						"下载 Bootstrap"
					),
					React.createElement(
						"p",
						{ className: "app-version" },
						"当前版本： v3.3.0 | 文档更新于：2014-10-31"
					)
				),
				React.createElement(
					"div",
					{ className: "first-list" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"h2",
							null,
							"为所有开发者、所有应用场景而设计。"
						),
						React.createElement(
							"p",
							{ className: "intro" },
							"Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。"
						),
						React.createElement(
							"div",
							{ className: "row" },
							this.createList(this.state.firstList)
						),
						React.createElement(
							"p",
							{ className: "description" },
							"Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。"
						),
						React.createElement(
							"span",
							{ className: "btn btn-lg" },
							"查看 GitHub 项目主页"
						)
					)
				),
				React.createElement(
					"div",
					{ className: "second-list" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"h2",
							null,
							"基于 Bootstrap 构建的网站"
						),
						React.createElement(
							"p",
							{ className: "intro" },
							"全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。"
						),
						React.createElement(
							"div",
							{ className: "row" },
							this.createList(this.state.secondList)
						),
						React.createElement(
							"p",
							{ className: "description" },
							"我们在“优站精选”里展示了许多精美的 Bootstrap 网站。"
						),
						React.createElement(
							"span",
							{ className: "btn btn-lg" },
							"逛一逛“优站精选”"
						)
					)
				)
			);
		}
	});

	var Banner = React.createClass({
		displayName: "Banner",

		render: function render() {
			return React.createElement(
				"div",
				{ className: "banner app-banner" },
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						"h1",
						null,
						this.props.title
					),
					React.createElement(
						"p",
						null,
						this.props.intro
					)
				)
			);
		}

	});
	var Article = React.createClass({
		displayName: "Article",

		getArticle: function getArticle() {
			var article = this.props.article;
			return article.map(function (obj, index) {
				return React.createElement(
					"div",
					{ key: index, id: obj.id },
					React.createElement(
						"h3",
						null,
						obj.title
					),
					React.createElement(
						"p",
						null,
						obj.content
					)
				);
			});
		},
		render: function render() {
			return React.createElement(
				"article",
				{ className: "article col-lg-9" },
				this.getArticle()
			);
		}
	});

	var Aside = React.createClass({
		displayName: "Aside",

		getAside: function getAside() {
			var aside = this.state.aside;
			var self = this;
			return aside.map(function (obj, index) {
				return React.createElement(
					"li",
					{ key: index, className: obj.cls },
					React.createElement(
						"a",
						{ href: "#" + obj.id, "data-id": obj.id, onClick: self.chooseLi },
						obj.title
					)
				);
			});
		},
		chooseLi: function chooseLi(e) {
			var id = e.target.getAttribute("data-id");
			var aside = this.state.aside;
			for (var i = 0; i < aside.length; i++) {
				if (aside[i].id === id) {
					aside[i].cls = "choose";
				} else {
					aside[i].cls = "";
				}
			};
			this.setState({
				aside: aside
			});
		},
		getInitialState: function getInitialState() {
			return {
				aside: this.props.aside
			};
		},
		render: function render() {
			return React.createElement(
				"aside",
				{ className: "aside col-lg-3" },
				React.createElement(
					"ul",
					{ className: "nav" },
					this.getAside()
				)
			);
		},

		// 自己配置一些生存周期中的函数过程
		componentWillReceiveProps: function componentWillReceiveProps(newprops) {
			this.setState({
				aside: newprops.aside
			});
		}
	});

	var Content = React.createClass({
		displayName: "Content",

		render: function render() {
			return React.createElement(
				"div",
				{ className: "content container" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(Article, { article: this.props.article }),
					React.createElement(Aside, { aside: this.props.aside })
				)
			);
		}

	});
	// 公共函数
	var Util = {
		// ajax异步读取数据方法封装
		getData: function getData(url, fn) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						var res = JSON.parse(xhr.responseText);
						fn && fn(res);
					};
				};
			};
			xhr.open("GET", url, true);
			xhr.send(null);
		},
		// 数据适配器，为数据数组中的每个对象添加属性cls,属性值控制显示掩藏
		asideAdpator: function asideAdpator(data) {
			var result = [];
			for (var i = 0; i < data.length; i++) {
				result.push(data[i]);
				result[i].cls = "";
			};
			return result;
		}
	};

	var Page = React.createClass({
		displayName: "Page",

		// 混合导入公共函数
		mixins: [Util],
		getInitialState: function getInitialState() {
			return {
				article: [],
				aside: []
			};
		},
		render: function render() {
			return React.createElement(
				"section",
				{ style: { display: this.props.show } },
				React.createElement(Banner, { title: this.props.title, intro: this.props.intro }),
				React.createElement(Content, { article: this.state.article, aside: this.state.aside })
			);
		},
		componentDidMount: function componentDidMount() {
			var self = this;
			this.getData(this.props.url, function (res) {
				self.setState({
					article: res,
					aside: self.asideAdpator(res)
				});
			});
		}
	});

	var App = React.createClass({
		displayName: "App",

		// changeNav: function (e) {
		// 	console.log(333);
		// 	console.log(this);
		// 	var msg = e.target.getAttribute("data-id");
		// 	var maps = this.state.maps;
		// 	for(var k in maps) {
		// 		if (k === msg) {
		// 			maps[k] = "block";
		// 		} else {
		// 			maps[k] = "none";
		// 		}
		// 	}
		// 	this.setState({
		// 		maps: maps
		// 	})

		// },
		// 传递给子组件的方法
		changeNav: function changeNav(msg) {
			console.log(this);
			var maps = this.state.maps;
			for (var k in maps) {
				if (k === msg) {
					maps[k] = "block";
				} else {
					maps[k] = "none";
				}
			}
			this.setState({
				maps: maps
			});
		},
		// 有状态变化，所以要初始化状态
		// show 传递类名，控制显示掩藏
		getInitialState: function getInitialState() {
			return {
				maps: {
					defaults: "block",
					start: "none",
					css: "none",
					component: "none",
					js: "none",
					download: "none"
				}
			};
		},
		render: function render() {
			var maps = this.state.maps;
			return React.createElement(
				"div",
				null,
				React.createElement(Header, { changeNav: this.changeNav }),
				React.createElement(Defaults, { show: maps.defaults }),
				React.createElement(Page, { show: maps.start, title: "起步", intro: "简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。", url: "data/start.json" }),
				React.createElement(Page, { show: maps.css, title: "全局 CSS 样式", intro: "设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。", url: "data/css.json" }),
				React.createElement(Page, { show: maps.component, title: "组件", intro: "无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。", url: "data/component.json" }),
				React.createElement(Page, { show: maps.js, title: "JavaScript 插件", intro: "jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。", url: "data/js.json" }),
				React.createElement(Page, { show: maps.download, title: "定制并下载 Bootstrap", intro: "通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。", url: "data/download.json" }),
				React.createElement(Footer, null)
			);
		}
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
})(React, ReactDOM, window);