(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(17)},15:function(e,t,o){},16:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var n=o(0),l=o.n(n),a=o(3),c=o.n(a),r=(o(15),o(16),o(1)),s=o(7),i=o(4),d=o(5),u=o(8),m=o(6),f=o(9),p=function(e){var t=e.createNewTodo,o=e.addNewTodo,n=e.enterNewTodo;return l.a.createElement("form",{onSubmit:o},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:n,value:t}))},h=function(e){return l.a.createElement("div",{className:"view"},l.a.createElement("input",{onChange:function(){return e.changeStateComplete(e.todo.id)},checked:e.todo.complete,type:"checkbox",className:"toggle",id:"todo-".concat(e.todo.id)}),l.a.createElement("label",{className:e.todo.complete?"view__completed":"",htmlFor:"todo-".concat(e.todo.id)},e.todo.title),l.a.createElement("button",{onClick:function(){return e.deleteTodo(e.index)},type:"button",className:"destroy"}))},N=function(e){var t=e.filtresTodos,o=e.changeStateComplete,n=e.deleteTodo;return l.a.createElement("ul",{className:"todo-list"},t.map(function(e,t){return l.a.createElement("li",{key:e.id},l.a.createElement(h,{index:t,todo:e,changeStateComplete:o,deleteTodo:n}))}))},T=function(e){var t=e.idFiltres,o=e.setIdFiltres;return l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"filtersAll"===t?"selected":"",id:"filtersAll",onClick:function(){return o("filtersAll")}},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",id:"filtersActiv",className:"filtersActiv"===t?"selected":"",onClick:function(){return o("filtersActiv")}},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",id:"filtersCompleted",className:"filtersCompleted"===t?"selected":"",onClick:function(){return o("filtersCompleted")}},"Completed")))},C=[],E=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={idFiltres:"",todosList:C,createNewTodo:"",isCompleted:!0},o.clearCompleted=function(){o.setState(function(e){return{todosList:e.todosList.filter(function(e){return!1===e.complete})}})},o.lengthCompeletedTodos=function(e){return o.state.todosList.filter(function(t){return t.complete===e}).length},o.setIdFiltres=function(e){o.setState({idFiltres:e})},o.filtresTodos=function(){switch(o.state.idFiltres){case"filtersActiv":return o.state.todosList.filter(function(e){return!1===e.complete});case"filtersCompleted":return o.state.todosList.filter(function(e){return!0===e.complete});default:return o.state.todosList}},o.enterNewTodo=function(e){o.setState({createNewTodo:e.target.value})},o.addNewTodo=function(e){e.preventDefault(),!o.state.createNewTodo.length>0||o.setState(function(){var e=o.state,t=e.todosList,n=e.createNewTodo,l={complete:!1,id:+new Date,title:n};return{todosList:[].concat(Object(s.a)(t),[l]),createNewTodo:""}})},o.checkboxValue=function(e){o.setState({isCompleted:e.target.checked}),o.allSelectTodo(o.state.isCompleted)},o.allSelectTodo=function(e){o.setState(function(t){return{todosList:t.todosList.map(function(t){return Object(r.a)({},t,{complete:e})})}})},o.changeStateComplete=function(e){o.setState(function(t){return{todosList:t.todosList.map(function(t){return t.id!==e?t:Object(r.a)({},t,{complete:!t.complete})})}})},o.deleteTodo=function(e){o.setState(function(t){return t.todosList.splice(e,1)})},o}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,o=t.todosList,n=t.createNewTodo,a=t.isCompleted,c=t.idFiltres,r=this.addNewTodo,s=this.enterNewTodo,i=this.changeStateComplete,d=this.deleteTodo,u=this.setIdFiltres;return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(p,{createNewTodo:n,addNewTodo:r,enterNewTodo:s})),l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{onChange:this.checkboxValue,checked:a,type:"checkbox",id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(N,{filtresTodos:this.filtresTodos(),changeStateComplete:i,deleteTodo:d})),l.a.createElement("footer",{className:"footer",style:{display:"".concat(o.length>0?"block":"none")}},l.a.createElement("span",{className:"todo-count"},this.lengthCompeletedTodos(!1)," items left"),l.a.createElement(T,{setIdFiltres:u,idFiltres:c}),l.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"".concat(this.lengthCompeletedTodos(!0)>0?"block":"none")},onClick:function(){return e.clearCompleted()}},"Clear-completed")))}}]),t}(l.a.Component);c.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.63becdba.chunk.js.map