(this["webpackJsonphackernews-lounge"]=this["webpackJsonphackernews-lounge"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(13),n(1)),c=n(4),l=n(5),u=n(7),m=n(6),d=(n(14),n(15),function(e){return o.a.createElement("div",{className:"StoryCard"},o.a.createElement("p",null,"#",e.index," Title: ",o.a.createElement("a",{href:e.url}," ",e.title)," Discussion: ",o.a.createElement("a",{href:"https://news.ycombinator.com/item?id="+e.id},"link")),o.a.createElement("p",null," Post score ",e.score," points "))}),h=(n(16),function(e){var t=e.isLoading,n=e.percentageFinished;return o.a.createElement("div",{className:"LoadingSpinner",style:{display:t?"block":"none"}},o.a.createElement("div",{className:"lds-circle"},o.a.createElement("div",null),0===n?o.a.createElement("p",null,"Loading..."):o.a.createElement("p",null,"Finished ",n,"%")))}),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={topStories:[],isLoading:!1,loadingProgress:0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then((function(e){return e.json()})).then((function(t){var n=t.length,a=0,o=t.map((function(t){return fetch("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json")).then((function(t){return++a,e.setState({loadingProgress:(a/n*100).toFixed(2)}),t.json()}))}));Promise.all(o).then((function(t){t=t.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{index:t+1,key:e.id})})),e.setState({topStories:t,isLoading:!1})}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,{isLoading:this.state.isLoading,percentageFinished:this.state.loadingProgress}),o.a.createElement("div",{className:"header"}),o.a.createElement("div",{className:"body"},this.state.topStories.map((function(e){return o.a.createElement(d,e)}))),o.a.createElement("div",{className:"footer"}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.90c439aa.chunk.js.map