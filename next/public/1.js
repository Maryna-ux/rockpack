(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{19:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n(15),u=n(16),l=n.n(u),c=n(37),s=n.n(c),f=n(38),m=n.n(f),v=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i};t.default=function(){s()(m.a);var e=v(Object(i.useUssrState)("appState.text",{text:"i am test "}),2),t=e[0],n=e[1];return Object(i.useWillMount)((function(){return new Promise((function(e){return setTimeout((function(){return e({text:"Hello world"})}),1e3)})).then((function(e){return n(e)}))})),o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement("title",null,"Home"),o.a.createElement("meta",{name:"description",content:"Home page"})),o.a.createElement("div",{className:m.a.block},o.a.createElement("h1",null,t.text),o.a.createElement(a.a,{to:"/secondary"},"secondary")))}},37:function(e,t,n){"use strict";var r=n(0),o=n(12),a=function(){return this&&"object"==typeof this.window}();e.exports=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=r.useContext(o),u=i.insertCss;if(!u)throw new Error('Please provide "insertCss" function by StyleContext.Provider');var l=function(){var e=u.apply(void 0,t);return function(){setTimeout(e,0)}};a?r.useEffect(l,[]):l()}},38:function(e,t,n){e.exports={block:"_3hEZrtp9CfksvCL_SV4Tnp"}}}]);