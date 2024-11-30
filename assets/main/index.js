System.register("chunks:///_virtual/PipePool.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var i,o,t,r,p,l,n,a,s,c,P,d;return{setters:[function(e){i=e.applyDecoratedDescriptor,o=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized,p=e.defineProperty},function(e){l=e.cclegacy,n=e._decorator,a=e.Prefab,s=e.Node,c=e.instantiate,P=e.NodePool,d=e.Component}],execute:function(){var u,h,f,y,b,m,v;l._RF.push({},"246009d7rBNhqd2A/ToNt6d","PipePool",void 0);var g=n.ccclass,H=n.property;e("PipePool",(u=g("PipePool"),h=H({type:a}),f=H({type:s}),u((m=i((b=function(e){function i(){for(var i,o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return i=e.call.apply(e,[this].concat(l))||this,t(r(i),"prefabPipes",m,r(i)),t(r(i),"pipePoolHome",v,r(i)),p(r(i),"pool",new P),p(r(i),"createdPipe",void 0),i}o(i,e);var l=i.prototype;return l.initPool=function(){for(var e=0;e<3;e++)this.createdPipe=c(this.prefabPipes),0===e?this.pipePoolHome.addChild(this.createdPipe):this.pool.put(this.createdPipe)},l.addPool=function(){this.pool.size()?this.createdPipe=this.pool.get():this.createdPipe=c(this.prefabPipes),this.pipePoolHome.addChild(this.createdPipe)},l.reset=function(){this.pipePoolHome.removeAllChildren(),this.pool.clear(),this.initPool()},i}(d)).prototype,"prefabPipes",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=i(b.prototype,"pipePoolHome",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=b))||y));l._RF.pop()}}}));

System.register("chunks:///_virtual/Character.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,n,o,r,a,s,c,p,u,h,l;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized,r=t.defineProperty},function(t){a=t.cclegacy,s=t._decorator,c=t.CCFloat,p=t.Animation,u=t.Vec3,h=t.tween,l=t.Component}],execute:function(){var d,m,f,y,b,g,v;a._RF.push({},"5ee3cLHMEpEeaFgqQ0cVxnh","Character",void 0);var C=s.ccclass,j=s.property;t("Character",(d=C("Character"),m=j({type:c}),f=j({type:c}),d((g=i((b=function(t){function i(){for(var i,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return i=t.call.apply(t,[this].concat(a))||this,n(o(i),"jumpHeight",g,o(i)),n(o(i),"jumpDuration",v,o(i)),r(o(i),"birdAnimation",void 0),r(o(i),"birdLocation",void 0),r(o(i),"hitSomething",void 0),i}e(i,t);var a=i.prototype;return a.onLoad=function(){this.resetBird(),this.birdAnimation=this.getComponent(p)},a.resetBird=function(){this.birdLocation=new u(0,0,0),this.node.setPosition(this.birdLocation),this.hitSomething=!1},a.fly=function(){var t=this;this.birdAnimation.stop(),h(this.node.position).to(this.jumpDuration,new u(this.node.position.x,this.node.position.y+this.jumpHeight),{easing:"smooth",onUpdate:function(i){t.node.position=i}}).start(),this.birdAnimation.play()},i}(l)).prototype,"jumpHeight",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),v=i(b.prototype,"jumpDuration",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),y=b))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/Results.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,i,o,n,c,s,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized,n=e.defineProperty},function(e){c=e.cclegacy,s=e._decorator,a=e.Label,u=e.Component}],execute:function(){var l,h,p,d,S,f,y,b,g;c._RF.push({},"738202OV81EiZpDyKpNEytb","Results",void 0);var v=s.ccclass,m=s.property;e("Results",(l=v("Results"),h=m({type:a}),p=m({type:a}),d=m({type:a}),l((y=t((f=function(e){function t(){for(var t,r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return t=e.call.apply(e,[this].concat(c))||this,i(o(t),"scoreLabel",y,o(t)),i(o(t),"highScore",b,o(t)),i(o(t),"resultEnd",g,o(t)),n(o(t),"maxScore",0),n(o(t),"currentScore",void 0),t}r(t,e);var c=t.prototype;return c.updateScore=function(e){this.currentScore=e,this.scoreLabel.string=""+this.currentScore},c.resetScore=function(){this.updateScore(0),this.hideResults()},c.addScore=function(){this.updateScore(this.currentScore+1)},c.showResults=function(){this.maxScore=Math.max(this.maxScore,this.currentScore),this.highScore.string="High Score: "+this.maxScore,this.resultEnd.node.active=!0,this.highScore.node.active=!0},c.hideResults=function(){this.highScore.node.active=!1,this.resultEnd.node.active=!1},t}(u)).prototype,"scoreLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(f.prototype,"highScore",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(f.prototype,"resultEnd",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=f))||S));c._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./GameController.ts"],(function(t){"use strict";var o,i,n,e,r,a,s,h,d,p,u,c,g,m;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,e=t.assertThisInitialized,r=t.defineProperty},function(t){a=t.cclegacy,s=t._decorator,h=t.Node,d=t.UITransform,p=t.director,u=t.Canvas,c=t.Vec3,g=t.Component},function(t){m=t.GameController}],execute:function(){var l,S,L,f,y,w,x,W,v;a._RF.push({},"89705D5FIVOtqUZstYTW52V","Ground",void 0);var C=s.ccclass,b=s.property;t("Ground",(l=C("Ground"),S=b({type:h,tooltip:"Ground 1 is here"}),L=b({type:h,tooltip:"Ground 2 is here"}),f=b({type:h,tooltip:"Ground 3 is here"}),l((x=o((w=function(t){function o(){for(var o,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=t.call.apply(t,[this].concat(a))||this,n(e(o),"ground1",x,e(o)),n(e(o),"ground2",W,e(o)),n(e(o),"ground3",v,e(o)),r(e(o),"groundWidth1",void 0),r(e(o),"groundWidth2",void 0),r(e(o),"groundWidth3",void 0),r(e(o),"tempStartLocation1",new c),r(e(o),"tempStartLocation2",new c),r(e(o),"tempStartLocation3",new c),r(e(o),"gameSpeed",(new m).speed),o}i(o,t);var a=o.prototype;return a.onLoad=function(){this.init()},a.init=function(){this.groundWidth1=this.ground1.getComponent(d).width,this.groundWidth2=this.ground2.getComponent(d).width,this.groundWidth3=this.ground3.getComponent(d).width,this.tempStartLocation1.x=0,this.tempStartLocation2.x=this.groundWidth1,this.tempStartLocation3.x=this.groundWidth1+this.groundWidth2,this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3)},a.update=function(t){this.tempStartLocation1=this.ground1.position,this.tempStartLocation2=this.ground2.position,this.tempStartLocation3=this.ground3.position,this.tempStartLocation1.x-=this.gameSpeed*t,this.tempStartLocation2.x-=this.gameSpeed*t,this.tempStartLocation3.x-=this.gameSpeed*t;var o=p.getScene().getComponentInChildren(u);this.tempStartLocation1.x<=0-this.groundWidth1&&(this.tempStartLocation1.x=o.getComponent(d).width),this.tempStartLocation2.x<=0-this.groundWidth2&&(this.tempStartLocation2.x=o.getComponent(d).width),this.tempStartLocation3.x<=0-this.groundWidth3&&(this.tempStartLocation3.x=o.getComponent(d).width),this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3)},o}(g)).prototype,"ground1",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=o(w.prototype,"ground2",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=o(w.prototype,"ground3",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=w))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PipePool.ts","./Character.ts","./Results.ts","./CharacterAudio.ts","./Ground.ts"],(function(e){"use strict";var t,r,i,o,n,a,u,s,c,l,p,h,d,f,m,y,b,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized,n=e.defineProperty},function(e){a=e.cclegacy,u=e._decorator,s=e.CCInteger,c=e.director,l=e.Node,p=e.Collider2D,h=e.Contact2DType,d=e.Component},function(e){f=e.PipePool},function(e){m=e.Character},function(e){y=e.Results},function(e){b=e.CharacterAudio},function(e){g=e.Ground}],execute:function(){var C,v,P,A,G,S,O,z,w,T,B,R,_,D,L,Q,k;a._RF.push({},"af7a34287lK7YuxMxrHzmS+","GameController",void 0);var x=u.ccclass,H=u.property;e("GameController",(C=x("GameController"),v=H({type:g,tooltip:"This is a ground"}),P=H({type:y,tooltip:"Results here"}),A=H({type:m,tooltip:"Character here"}),G=H({type:b,tooltip:"CharacterAudio here"}),S=H({type:f,tooltip:"Pipes Pool here"}),O=H({type:s}),z=H({type:s}),C((B=t((T=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a))||this,i(o(t),"ground",B,o(t)),i(o(t),"result",R,o(t)),i(o(t),"character",_,o(t)),i(o(t),"characterAudio",D,o(t)),i(o(t),"pipePool",L,o(t)),i(o(t),"speed",Q,o(t)),i(o(t),"pipeSpeed",k,o(t)),n(o(t),"isOver",void 0),t}r(t,e);var a=t.prototype;return a.onLoad=function(){this.initListener(),this.result.resetScore(),this.isOver=!0,c.pause()},a.initListener=function(){var e=this;this.node.on(l.EventType.TOUCH_START,(function(){e.isOver&&(e.resetGame(),e.character.resetBird(),e.startGame()),e.isOver||(e.character.fly(),e.characterAudio.onAudioQueue(0))}))},a.startGame=function(){this.result.hideResults(),c.resume()},a.gameOver=function(){this.result.showResults(),this.isOver=!0,this.characterAudio.onAudioQueue(3),c.pause()},a.resetGame=function(){this.result.resetScore(),this.pipePool.reset(),this.startGame(),this.isOver=!1,this.character.resetBird()},a.passPipe=function(){this.result.addScore(),this.characterAudio.onAudioQueue(1)},a.createPipe=function(){this.pipePool.addPool()},a.contactBottomPipe=function(){var e=this.character.getComponent(p);e&&e.on(h.BEGIN_CONTACT,this.onBeginContact,this)},a.onBeginContact=function(e,t,r){this.character.hitSomething=!0,this.characterAudio.onAudioQueue(2)},a.birdStruck=function(){this.contactBottomPipe(),this.character.hitSomething&&this.gameOver()},a.update=function(e){this.isOver||this.birdStruck()},t}(d)).prototype,"ground",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=t(T.prototype,"result",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=t(T.prototype,"character",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(T.prototype,"characterAudio",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(T.prototype,"pipePool",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=t(T.prototype,"speed",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),k=t(T.prototype,"pipeSpeed",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),w=T))||w));a._RF.pop()}}}));

System.register("chunks:///_virtual/Pipes.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,o,p,s,n,a,r,c,h,m,l,P;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,p=t.assertThisInitialized,s=t.defineProperty},function(t){n=t.cclegacy,a=t._decorator,r=t.Node,c=t.find,h=t.UITransform,m=t.Vec3,l=t.screen,P=t.Component}],execute:function(){var d,u,S,w,L,f,g;n._RF.push({},"c9d92VHDGlO/Lvy8dZiR373","Pipes",void 0);var y=a.ccclass,b=a.property,v=function(t,i){return Math.random()*(i-t)+t};t("Pipes",(d=y("Pipes"),u=b({type:r,tooltip:"Top Pipe"}),S=b({type:r,tooltip:"Bottom Pipe"}),d((f=i((L=function(t){function i(){for(var i,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return i=t.call.apply(t,[this].concat(n))||this,o(p(i),"topPipe",f,p(i)),o(p(i),"bottomPipe",g,p(i)),s(p(i),"tempStartLocationUp",new m(0,0,0)),s(p(i),"tempStartLocationDown",new m(0,0,0)),s(p(i),"scene",l.windowSize),s(p(i),"game",void 0),s(p(i),"pipeSpeed",void 0),s(p(i),"tempSpeed",void 0),s(p(i),"isPass",void 0),i}e(i,t);var n=i.prototype;return n.onLoad=function(){this.game=c("GameController").getComponent("GameController"),this.pipeSpeed=this.game.pipeSpeed,this.initPos(),this.isPass=!1},n.initPos=function(){this.tempStartLocationUp.x=this.topPipe.getComponent(h).width+this.scene.width,this.tempStartLocationDown.x=this.topPipe.getComponent(h).width+this.scene.width;var t=v(450,600),i=v(250,450);this.tempStartLocationUp.y=i,this.tempStartLocationDown.y=i-t,this.topPipe.setPosition(this.tempStartLocationUp),this.bottomPipe.setPosition(this.tempStartLocationDown),console.log("GAP",t),console.log("TOP",this.topPipe.position),console.log("BOT",this.bottomPipe.position)},n.update=function(t){this.tempSpeed=this.pipeSpeed*t,this.tempStartLocationUp=this.topPipe.position,this.tempStartLocationDown=this.bottomPipe.position,this.tempStartLocationUp.x-=this.tempSpeed,this.tempStartLocationDown.x-=this.tempSpeed,this.topPipe.setPosition(this.tempStartLocationUp),this.bottomPipe.setPosition(this.tempStartLocationDown),!1===this.isPass&&this.topPipe.position.x<=0&&(this.isPass=!0,this.game.passPipe()),this.topPipe.position.x<-this.scene.width&&(this.game.createPipe(),this.destroy())},i}(P)).prototype,"topPipe",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=i(L.prototype,"bottomPipe",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=L))||w));n._RF.pop()}}}));

System.register("chunks:///_virtual/CharacterAudio.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,i,t,o,n,u,a,c,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,i=e.inheritsLoose,t=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,u=e._decorator,a=e.AudioClip,c=e.AudioSource,l=e.Component}],execute:function(){var p,s,d,f,h,y,b;n._RF.push({},"ea739fnJVFFMI6u6wjbEz+o","CharacterAudio",void 0);var A=u.ccclass,v=u.property,g=[.1,.3,.3,.3];e("CharacterAudio",(p=A("CharacterAudio"),s=v({type:[a]}),d=v({type:c}),p((y=r((h=function(e){function r(){for(var r,i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];return r=e.call.apply(e,[this].concat(n))||this,t(o(r),"clips",y,o(r)),t(o(r),"audioSource",b,o(r)),r}return i(r,e),r.prototype.onAudioQueue=function(e){var r=this.clips[e],i=g[e];this.audioSource.playOneShot(r,i)},r}(l)).prototype,"clips",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=r(h.prototype,"audioSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=h))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./PipePool.ts","./Character.ts","./Results.ts","./CharacterAudio.ts","./GameController.ts","./Ground.ts","./Pipes.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map