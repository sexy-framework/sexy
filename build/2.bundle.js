(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{33:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),l=n(5),s=n(2);s.transition;let u=document.createElement("template");u.innerHTML="<div><span></span></div>",t.default=function(e,t=!1){let n,s=!1===t,{$props:r,$slots:i,$refs:a,$customInit:b}=Object(o.parseContext)(e),d=Object(c.observable)(24),p=Object(o.getProp)(r,"test",null),j=(Object(o.getProp)(r,"value",null),Object(c.computed)([d,d,p],()=>({red:d()%2==0,green:d()%3==0,some:null===p()}))),O={mounted:null,unmounted:null},m=Object(o.getNode)(u,t,s),f=s?m.firstChild:m;n=Object(o.emit)(f),Object(o.call)(b,O,f,s),Object(l.createHooks)(O),Object(o.attrs)(f,s,{class:Object(c.computed)([j,d],()=>[j(),{active:1===d()}]),style:Object(c.computed)([d],()=>[{fontSize:d()+"px"}])}),Object(o.events)(f,{click:function(e){alert(1)}});let v=f.firstChild;return Object(o.slot)(i,"default",v,s,e=>{}),{node:s?m:f,hooks:O}}}}]);