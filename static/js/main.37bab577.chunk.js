(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),l=a.n(r),s=(a(13),a(1)),o=a(2),c=a(4),u=a(3),p=a(5),m=(a(15),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"app-header"},i.a.createElement("h1",null,"Favorite Players"))}}]),t}(n.Component)),d=(a(17),a(19),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).editSave=function(t){e.state.active?e.setState({active:!1}):e.setState({active:!0})},e.savePlayer=function(){e.editSave(),e.props.player.name=e.nameRef.current.value,e.props.player.position=e.positionRef.current.value},e.waivePlayer=function(){e.props.deletePlayer(e.props.player.id)},e.state={active:!1},e.nameRef=i.a.createRef(),e.positionRef=i.a.createRef(),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{className:"item"},i.a.createElement("div",{className:"item-container"},i.a.createElement("h1",{className:this.state.active?"hide":null},this.props.player.name),i.a.createElement("p",{className:this.state.active?"hide":null},this.props.player.position),i.a.createElement("input",{className:this.state.active?"input-field":"hide",defaultValue:this.props.player.name,ref:this.nameRef}),i.a.createElement("input",{className:this.state.active?"input-field":"hide",defaultValue:this.props.player.position,ref:this.positionRef})),i.a.createElement("div",{className:"button-container"},i.a.createElement("button",{onClick:this.editSave,className:this.state.active?"hide":"button button-edit"},"Edit"),i.a.createElement("button",{onClick:this.waivePlayer,className:this.state.active?"hide":"button button-delete"},"Delete"),i.a.createElement("button",{onClick:this.savePlayer,className:this.state.active?"button button-save":"hide"},"Save")))}}]),t}(n.Component));d.defaultProps={player:{name:"Unknown",position:"Sixth Man",id:0}};a(21);var h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).savePlayer=function(t){if(t.preventDefault(),e.newName.current.value&&e.newPosition.current.value){var a={id:Date.now(),name:e.newName.current.value,position:e.newPosition.current.value};e.props.addPlayer(a),e.newName.current.value="",e.newPosition.current.value=""}else alert("Please fill out the form.")},e.newName=i.a.createRef(),e.newPosition=i.a.createRef(),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{className:"split addForm"},i.a.createElement("h1",null,"Add New Player"),i.a.createElement("input",{className:"input-field",placeholder:"New Name",ref:this.newName}),i.a.createElement("input",{className:"input-field",placeholder:"New Position",ref:this.newPosition}),i.a.createElement("button",{onClick:this.savePlayer,className:"button button-save"},"Save"))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"split list-container"},this.props.players.map(function(t){return i.a.createElement(d,{key:t.id,player:t,deletePlayer:e.props.deletePlayer})}),i.a.createElement(h,{addPlayer:this.props.addPlayer}))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).deletePlayer=function(t){var a=e.state.players.filter(function(e){if(t!=e.id)return!0});e.setState({players:a})},e.addPlayer=function(t){var a=e.state.players;a.push(t),e.setState({players:a})},e.state={players:[{id:1,name:"Guo Ailun",position:"Point Guard"},{id:2,name:"Yi Jianlian",position:"Power Foward"},{id:3,name:"Yao Ming",position:"Center"}]},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(m,null),i.a.createElement(f,{players:this.state.players,addPlayer:this.addPlayer,deletePlayer:this.deletePlayer}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.37bab577.chunk.js.map