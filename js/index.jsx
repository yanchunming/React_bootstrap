

(function (React, ReactDOM, window) {

	// 整体页面结构
	// Header 头部导航条
	// Defaults 默认页面
	// Page 其它结构相似的页面：起步，全局css样式, 组件，javascript插件，定制
	//
	//

	var Header = React.createClass({
		getInitialState: function () {
			return {
				cls: {
					defaults: "choose",
					start: "",
					css: "",
					component: "",
					js: "",
					download: ""
				}
			}
		},
		// 事件回调函数
		// 可以尝试直接在dom中通过this.props.changeNav来直接调用父组件方法
		changeNav: function (e) {
			var id = e.target.getAttribute("data-id");
			var cls = this.state.cls;
			for(var k in cls) {
				if (k === id) {
					cls[k] = "choose";
				} else {
					cls[k] = "";
				}
			}
			this.props.changeNav(id);
			this.setState({
				cls: cls
			})
		},
		render: function () {
			var cls = this.state.cls;
			return (
				<div>
					<header className="header navbar navbar-static-top">
						<div className="container">
							<div className="navbar-header">
								<a data-id="defaults" onClick={this.changeNav} className="navbar-brand">Bootstrap</a>
							</div>
							<ul className="nav nav-pills navbar-nav">
								<li className={cls.start}>
									<a data-id="start" onClick={this.changeNav}>起步</a>
								</li>
								<li className={cls.css}>
									<a data-id="css" onClick={this.changeNav}>全局css样式</a>
								</li>
								<li className={cls.component}>
									<a data-id="component" onClick={this.changeNav}>组件</a>
								</li>
								<li className={cls.js}>
									<a data-id="js" onClick={this.changeNav}>javascript插件</a>
								</li>
								<li className={cls.download}>
									<a data-id="download" onClick={this.changeNav}>定制</a>
								</li>
							</ul>
							<ul className="nav nav-pills navbar-nav pull-right">
								<li>
									<a href="">高薪工作</a>
								</li>
								<li>
									<a href="">优站精选</a>
								</li>
								<li>
									<a href="">官方博客</a>
								</li>
							</ul>
						</div>
					</header>
				</div>
			)
		}
	})

	var Footer = React.createClass({
		render: function () {
			return (
				<div>
					<footer className="footer footer-box">
						<p>Designed and built with all the love in the world by <a href="#">@mdo</a> and <a href="">@fat</a>.</p>
						<p>Maintained by the <a href="#">core team</a> with the help of <a href="#">our contributors</a>.</p>
						<p>本项目源码受 MIT 开源协议保护，文档受 CC BY 3.0 开源协议保护。</p>
						<ul className="list-inline">
							<li>
								当前版本： v3.3.0 &nbsp;·
							</li>
							<li>
								<a href="#"> GitHub 仓库 </a>&nbsp;·
							</li>
							<li>
								<a href="#"> 实例精选 </a>&nbsp;·
							</li>
							<li>
								<a href="#"> v2.3.2 中文文档 </a>&nbsp;·
							</li>
							<li>
								<a href="#"> 关于 </a>&nbsp;·
							</li>
							<li>
								<a href="#"> 优站精选 </a>&nbsp;·
							</li>
							<li>
								<a href="#"> 官方博客 </a>&nbsp;·
							</li>
							<li>
								<a href="#"> Issues </a>&nbsp;·
							</li>
							<li>
								<a href="#"> 历史版本</a>
							</li>
						</ul>
					</footer>
				</div>
			)
		}
	})
	var Defaults = React.createClass({
		getInitialState: function () {
			return {
				firstList: [
					{
						img: 'img/sass-less.png',
						h3: '预处理脚本',
						p: '虽然可以直接使用 Bootstrap 提供的 CSS 样式表，不要忘记 Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。'
					},
					{
						img: 'img/devices.png',
						h3: '一个框架、多种设备',
						p: '你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。'
					},
					{
						img: 'img/components.png',
						h3: '特性齐全',
						p: 'Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。'
					}
				],
				secondList: [
					{
						img: 'img/01.png'
					},
					{
						img: 'img/02.jpg'
					},
					{
						img: 'img/03.png'
					}
				]
			}
		},
		// 生成列表函数
		createList: function (data) {
			console.log(data);
			return data.map(function (value, index) {
				if (value.h3 && value.p) {
					return (
						<div key={index} className="col-lg-4">
							<img src={value.img} alt=""/>
							<h3>{value.h3}</h3>
							<p>{value.p}</p>
						</div>
					)
				} else {
					return (
						<div key={index} className="col-lg-4">
							<img src={value.img} alt=""/>
						</div>
					)
				}
			})
		},
		render: function () {
			return (
				<section style={{display: this.props.show}}>
					<div className="banner">
						<div className="banner-b-logo">B</div>
						<h2>Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。</h2>
						<span className="btn btn-lg btn-outline">下载 Bootstrap</span>
						<p className="app-version">当前版本： v3.3.0 | 文档更新于：2014-10-31</p>
					</div>
					<div className="first-list">
						<div className="container">
							<h2>为所有开发者、所有应用场景而设计。</h2>
							<p className="intro">Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用。</p>
								<div className="row">
									{this.createList(this.state.firstList)}
								</div>
							<p className="description">Bootstrap 是完全开源的。它的代码托管、开发、维护都依赖 GitHub 平台。</p>
							<span className="btn btn-lg">查看 GitHub 项目主页</span>
						</div>
					</div>
					<div className="second-list">
						<div className="container">
							<h2>基于 Bootstrap 构建的网站</h2>
							<p className="intro">全球数以百万计的网站都是基于 Bootstrap 构建的。你可以先参观一下我们提供的实例精选或者看一看我们粉丝的网站吧。</p>
								<div className="row">
									{this.createList(this.state.secondList)}
								</div>
							<p className="description">我们在“优站精选”里展示了许多精美的 Bootstrap 网站。</p>
							<span className="btn btn-lg">逛一逛“优站精选”</span>
						</div>
					</div>
				</section>
			)
		}
	})
	
	var Banner = React.createClass({
		render: function () {
			return (
				<div className="banner app-banner">
					<div className="container">
						<h1>{this.props.title}</h1>
						<p>{this.props.intro}</p>
					</div>
				</div>
			)
		}
		
	})
	var Article = React.createClass({
		getArticle: function () {
			var article = this.props.article;
			return article.map(function (obj, index) {
				return (
					<div key={index} id={obj.id}>
						<h3>{obj.title}</h3>
						<p>{obj.content}</p>
					</div>
				)
			})
		},
		render: function () {
			return (
				<article className="article col-lg-9">
					{this.getArticle()}
				</article>
			)
		}
	})

	var Aside = React.createClass({
		getAside: function () {
			var aside = this.state.aside;
			var self = this;
			return aside.map(function (obj, index) {
				return (
					<li key={index} className={obj.cls}>
						<a href={"#" + obj.id} data-id={obj.id} onClick={self.chooseLi}>{obj.title}</a>
					</li>
				)
			})
		},
		chooseLi: function (e) {
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
			})
		},
		getInitialState: function () {
			return {
				aside: this.props.aside
			}
		},
		render: function () {
			return (
				<aside className="aside col-lg-3">
					<ul className="nav">
						{this.getAside()}
					</ul>
				</aside>
			)
		},

		// 自己配置一些生存周期中的函数过程
		componentWillReceiveProps: function (newprops) {
			this.setState({
				aside: newprops.aside
			})
		}
	})


	var Content = React.createClass({
		render: function () {
			return (
				<div className="content container">
					<div className="row">
						<Article article={this.props.article} />
						<Aside aside={this.props.aside} />
					</div>
				</div>
			)
		}
		
	})
	// 公共函数
	var Util = {
		// ajax异步读取数据方法封装
		getData: function (url, fn) {
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
		asideAdpator: function (data) {
			var result = [];
			for (var i = 0; i < data.length; i++) {
				result.push(data[i]);
				result[i].cls = "";
			};
			return result;
		}
	};

	var Page = React.createClass({
		// 混合导入公共函数
		mixins: [Util],
		getInitialState: function () {
			return {
				article: [],
				aside: []
			}
		},
		render: function () {
			return (
				<section style={{display: this.props.show}}>
					<Banner title={this.props.title} intro={this.props.intro} />
					<Content article={this.state.article} aside={this.state.aside} />
				</section>
			)
		},
		componentDidMount: function () {
			var self = this;
			this.getData(this.props.url, function (res) {
				self.setState({
					article: res,
					aside: self.asideAdpator(res)
				})
			});
		}
	})
	
	var App = React.createClass({

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
		changeNav: function (msg) {
			console.log(this);
			var maps = this.state.maps;
			for(var k in maps) {
				if (k === msg) {
					maps[k] = "block";
				} else {
					maps[k] = "none";
				}
			}
			this.setState({
				maps: maps
			})
		},
		// 有状态变化，所以要初始化状态
		// show 传递类名，控制显示掩藏
		getInitialState: function () {
			return {
				maps: {
					defaults: "block",
					start: "none",
					css: "none",
					component: "none",
					js: "none",
					download: "none"
				}
			}
		},
		render: function () {
			var maps = this.state.maps
			return (
				<div>
					<Header changeNav={this.changeNav} />
					<Defaults show={maps.defaults} />
					<Page show={maps.start} title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。" url="data/start.json" />
					<Page show={maps.css} title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。" url="data/css.json" />
					<Page show={maps.component} title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。" url="data/component.json" />
					<Page show={maps.js} title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" url="data/js.json" />
					<Page show={maps.download} title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。" url="data/download.json" />
					<Footer />
				</div>
			)
		}
	})

	ReactDOM.render((<App />), document.getElementById("app"));
})(React, ReactDOM, window);