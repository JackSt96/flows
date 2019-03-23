(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,n,t){e.exports=t(427)},427:function(e,n,t){"use strict";t.r(n);var r=t(38),a=t(0),o=t.n(a),i=t(24),c=t(43),s=t(35),u=t(434),l=(t(99),{currTest:{},answerList:[],loading:!0}),p={flows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ON_LOAD_CURRENT_TEST":return Object(r.a)({},e,{currTest:n.test});case"ON_LOAD_CURRENT_ANSWERS":return Object(r.a)({},e,{answerList:n.answer});case"IS_LOADING":return Object(r.a)({},e,{loading:!0});case"DONE_LOADING":return Object(r.a)({},e,{loading:!1});default:return e}}},d=t(28),f=t.n(d),w=t(51),m=t(67),O=t(68),h=t(72),v=t(69),b=t(73),y=t(41),_=t(42),g=(t(433),t(435)),E=t(52),j=t(164),T=t.n(j),A=t(163),N=t.n(A),S=t(432);function x(){var e=Object(y.a)(["\n    text-decoration: none;\n    color: inherit;\n"]);return x=function(){return e},e}var k=Object(_.a)(S.a)(x());function I(){var e=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return I=function(){return e},e}var R=_.a.div(I()),D=Object(E.withStyles)({root:{margin:5,width:300}})(N.a),C=function(e){function n(){var e,t;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(v.a)(n)).call.apply(e,[this].concat(a)))).componentDidMount=function(){t.props.downloadCurrentTest(t.props.testId)},t}return Object(b.a)(n,e),Object(O.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.text,r=(n.testId,n.answers),a=n.loading;return o.a.createElement(R,null,!a&&o.a.createElement("div",null,o.a.createElement(T.a,{variant:"h2"}," ",t," "),r&&r.map(function(n,t){return o.a.createElement("div",{key:t},o.a.createElement(k,{to:"/"+n.destination},o.a.createElement(D,{color:"primary",variant:"contained",onClick:function(t){return e.props.downloadCurrentTest(n.destination)}},n.answer)))})))}}]),n}(o.a.Component),L=t(36),q=t.n(L),U=function(e){return{type:"ON_LOAD_CURRENT_ANSWERS",answer:e}},$=function(e){return function(){var n=Object(w.a)(f.a.mark(function n(t){var r;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"IS_LOADING"}),console.log("START: LOAD CURRENT ANSWERS "),n.prev=2,n.next=5,L.API.graphql(Object(L.graphqlOperation)("query ListAnswers(\n  $filter: ModelAnswerFilterInput\n  $limit: Int\n  $nextToken: String\n) {\n  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    items {\n      id\n      testid\n      answer\n      destination\n    }\n    nextToken\n  }\n}\n",{filter:{testid:{eq:e}},limit:1e3}));case 5:r=(r=n.sent).data.listAnswers.items,console.log("SUCCESS: LOAD CURRENT ANSWERS "),console.log(r),t(U(r)),t({type:"DONE_LOADING"}),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}},n,null,[[2,13]])}));return function(e){return n.apply(this,arguments)}}()},G=function(e){return e.match.params.id||"new"},W=Object(c.b)(function(e,n){return{text:e.flows.currTest.question,testId:G(n),answers:e.flows.answerList,loading:e.flows.loading}},function(e){return{downloadCurrentTest:function(n){return e(function(e){return function(){var n=Object(w.a)(f.a.mark(function n(t){var r;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("STARTING"),r=null,t({type:"IS_LOADING"}),n.prev=3,n.next=6,L.API.graphql(Object(L.graphqlOperation)("query GetTest($id: ID!) {\n  getTest(id: $id) {\n    id\n    question\n    answers\n    is_solution\n  }\n}\n",{id:e}));case 6:r=(r=n.sent).data.getTest,console.log("SUCCESS: LOAD CURRENT TEST "),t({type:"ON_LOAD_CURRENT_TEST",test:r}),!r.is_solution&&r.answers?t($(r.id)):(t(U([])),t({type:"DONE_LOADING"})),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),console.log(n.t0);case 16:case"end":return n.stop()}},n,null,[[3,13]])}));return function(e){return n.apply(this,arguments)}}()}(n))}}})(C);function M(){var e=Object(y.a)(["\n  max-width: 1180px;\n  minheight: 2000px;\n  margin: 0 auto;\n"]);return M=function(){return e},e}var P=_.a.div(M()),z=function(e){function n(){return Object(m.a)(this,n),Object(h.a)(this,Object(v.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement(P,null,o.a.createElement(g.a,{path:"/:id",component:W}),o.a.createElement(g.a,{exact:!0,path:"/",component:W}))}}]),n}(a.Component),B=Object(c.b)(function(e){return{}},function(e){return{}})(z),F=Object(E.createMuiTheme)({palette:{primary:{main:"#7f2982"},secondary:{main:"#f7717d"},error:{main:"#e53935"}},typography:{fontFamily:'"Helvetica Neue"',color:"#16001E",button:{textTransform:"none"}}}),J=function(){return o.a.createElement(E.MuiThemeProvider,{theme:F},o.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(165),H={aws_project_region:"us-east-1",aws_content_delivery_bucket:"123.flowchoice.net",aws_content_delivery_bucket_region:"us-east-1",aws_content_delivery_url:"http://123.flowchoice.net.s3-website-us-east-1.amazonaws.com",aws_appsync_graphqlEndpoint:"https://gumxwz3jwvfolb72q3psl747qu.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-mcw2yfvvtnaipfuwnqivs4ta7i"};q.a.configure(H);var Y=Object(s.c)(Object(r.a)({},p)),Q=[Object(s.a)(K.a)],V=Object(s.e)(Y,s.d.apply(void 0,Q));Object(i.render)(o.a.createElement(c.a,{store:V},o.a.createElement(u.a,null,o.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,n){}},[[167,1,2]]]);
//# sourceMappingURL=main.35d2fb0f.chunk.js.map