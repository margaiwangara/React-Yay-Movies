(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(45)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),i=t.n(c),l=(t(22),t(2)),o=t(3),s=t(5),u=t(4),m=t(6),d=(t(23),function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#now-showing",className:"navbar-brand"},"Yay!Movies"),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#myNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#now-showing",className:"nav-link"},"Now Showing")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#trending",className:"nav-link"},"Trending")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#popular",className:"nav-link"},"Popular"))))))}),p=(t(24),function(e){var a=e.image,t=e.title,n=e.overview,c=e.status,i={background:"url("+a+") no-repeat",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"500px",backgroundPosition:"center"};return r.a.createElement("div",{className:"carousel-item "+c,style:i},r.a.createElement("div",{className:"carousel-caption"},r.a.createElement("h1",{className:"display-4"},t),r.a.createElement("p",{className:"lead"},n)))}),v=t(7),b=t.n(v),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={results:[]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("7538a1ba766c36605ab0e8e10bab23da","&language=en-US&page=1");b.a.get(a).then(function(a){return e.setState({results:a.data.results})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.results.map(function(e,a){return a<6?r.a.createElement(p,{key:e.id,title:e.original_title,overview:e.overview,image:"https://image.tmdb.org/t/p/original"+e.backdrop_path,status:0===a?"active":""}):""});return r.a.createElement("section",{id:"now-showing",style:{minHeight:"500px",maxWidth:"100%"}},r.a.createElement("div",{className:"carousel slide","data-ride":"carousel",id:"myCarousel"},r.a.createElement("div",{className:"carousel-inner"},e)))}}]),a}(n.Component),h=function(e){var a=e.poster,t=e.title,n=e.clickHandler,c={height:"200px",background:"url("+a+")",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"};return r.a.createElement("div",{className:"card m-0 p-0",style:c},r.a.createElement("div",{className:"card-img-overlay text-center"},r.a.createElement("a",{href:"#movies",onClick:n},t)))},f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={results:[]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("7538a1ba766c36605ab0e8e10bab23da");b.a.get(a).then(function(a){return e.setState({results:a.data.results})}).catch(function(e){return console.log(e)})}},{key:"clickHandler",value:function(e,a){a.preventDefault(),alert(e)}},{key:"render",value:function(){var e=this,a=this.state.results.map(function(a,t){return t<8?r.a.createElement(h,{key:a.id,title:a.original_title,poster:"https://image.tmdb.org/t/p/original"+a.poster_path,id:a.id,clickHandler:e.clickHandler.bind(e,a.id)}):""});return r.a.createElement("section",{id:"trending"},r.a.createElement("div",{className:"trending-inner py-5 px-4"},r.a.createElement("h3",{className:"display-5 py-3 mb-3 border-bottom"},"Trending Today"),r.a.createElement("div",null,r.a.createElement("div",{className:"movie-grid"},a))))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={results:[]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://api.themoviedb.org/3/movie/popular?api_key=".concat("7538a1ba766c36605ab0e8e10bab23da","&language=en-US&page=1");b.a.get(a).then(function(a){return e.setState({results:a.data.results})}).catch(function(e){return console.log(e)})}},{key:"clickHandler",value:function(e,a){a.preventDefault(),alert(e)}},{key:"render",value:function(){var e=this,a=this.state.results.map(function(a,t){return t<8?r.a.createElement(h,{key:a.id,title:a.original_title,poster:"https://image.tmdb.org/t/p/original"+a.poster_path,clickHandler:e.clickHandler.bind(e,a.id)}):""});return r.a.createElement("section",{id:"popular"},r.a.createElement("div",{className:"popular-inner py-5 px-4"},r.a.createElement("h3",{className:"display-5 py-3 mb-3 border-bottom"},"Popular"),r.a.createElement("div",null,r.a.createElement("div",{className:"movie-grid"},a))))}}]),a}(n.Component),k=(t(44),function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(g,null),r.a.createElement(f,null),r.a.createElement(E,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.bdadbc18.chunk.js.map