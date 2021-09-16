(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s,r=n(10),c=n.n(r),a=n(2),o=n(3),i=n(5),l=n(4),d=n(1),u=n.n(d),h=(n(16),n(17),n(6)),j=n.n(h),p=n(7),b=n(11),v=n(9),m=n.n(v),f=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},O=function(e){return f("/users/".concat(+e))},x=(n(19),n(0));!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var _=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={todos:[],searchQuery:"",filterByStatus:"all",hasLoadingError:!1},e.handleSearch=function(t){var n=t.target;e.setState({searchQuery:n.value})},e.handleSelect=function(t){var n=t.target;e.setState({filterByStatus:n.value})},e.randomize=function(){e.setState((function(e){return{todos:Object(b.a)(e.todos).sort((function(){return Math.random()-.5}))}}))},e.getFilteredTodos=function(){var t=e.state,n=t.searchQuery,r=t.todos,c=t.filterByStatus,a=n.toLowerCase();return r.filter((function(e){switch(c){case s.active:return!e.completed;case s.completed:return e.completed;case s.all:default:return e}})).filter((function(e){return e.title&&e.title.toLowerCase().includes(a)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("/todos");case 3:t=e.sent,this.setState({todos:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({hasLoadingError:!0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.searchQuery,n=e.filterByStatus,s=e.hasLoadingError,r=this.props,c=r.selectedUserId,a=r.onUserSelect,o=this.getFilteredTodos();return Object(x.jsxs)("div",{className:"TodoList",children:[Object(x.jsx)("h2",{children:"Todos:"}),Object(x.jsxs)("div",{className:"TodoList__controls",children:[Object(x.jsx)("input",{value:t,type:"text",placeholder:"Search by title",onChange:this.handleSearch}),Object(x.jsx)("button",{type:"button",className:"button",onClick:this.randomize,children:"Randomise"}),Object(x.jsxs)("label",{htmlFor:"status-type",children:["Status:",Object(x.jsxs)("select",{onChange:this.handleSelect,value:n,id:"status-type",className:"TodoList__controls--status",children:[Object(x.jsx)("option",{value:"all",children:"All"}),Object(x.jsx)("option",{value:"active",children:"Active"}),Object(x.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(x.jsxs)("div",{className:"TodoList__list-container",children:[o.length>0?Object(x.jsx)("ul",{className:"TodoList__list",children:o.map((function(e){return Object(x.jsxs)("li",{className:m()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(x.jsx)("p",{children:e.title})]}),Object(x.jsx)("button",{type:"button",className:m()("button TodoList__user-button",{"TodoList__user-button--selected":e.userId===c}),onClick:function(){return a(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))}):Object(x.jsx)("h2",{children:"Loading..."}),s&&Object(x.jsx)("h2",{children:"Server is not responding"})]})]})}}]),n}(u.a.Component),y=(n(21),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:null,hasLoadingError:!1},e.loadUser=Object(p.a)(j.a.mark((function t(){var n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.props.selectedUserId,t.next=4,O(n);case 4:s=t.sent,e.setState({currentUser:s,hasLoadingError:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({hasLoadingError:!0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.selectedUserId!==this.props.selectedUserId&&this.loadUser()}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.hasLoadingError,s=this.props.onReset;return t&&Object(x.jsx)("div",{className:"CurrentUser",children:n?Object(x.jsx)("h2",{children:"Cannot load user"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{className:"CurrentUser__title",children:Object(x.jsx)("span",{children:"Selected user: ".concat(null===t||void 0===t?void 0:t.id)})}),Object(x.jsx)("h3",{className:"CurrentUser__name",children:null===t||void 0===t?void 0:t.name}),Object(x.jsx)("p",{className:"CurrentUser__email",children:null===t||void 0===t?void 0:t.email}),Object(x.jsx)("p",{className:"CurrentUser__phone",children:null===t||void 0===t?void 0:t.phone}),Object(x.jsx)("button",{type:"button",className:"button CurrentUser__clear",onClick:s,children:"Clear"})]})})}}]),n}(u.a.Component)),U=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.resetSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.selectedUserId;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App__sidebar",children:Object(x.jsx)(_,{selectedUserId:e,onUserSelect:this.selectUser})}),Object(x.jsx)("div",{className:"App__content",children:Object(x.jsx)("div",{className:"App__content-container",children:e?Object(x.jsx)(y,{selectedUserId:e,onReset:this.resetSelectedUser}):"No user selected"})})]})}}]),n}(u.a.Component);c.a.render(Object(x.jsx)(U,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5f64646d.chunk.js.map