(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{57:function(e,t,n){e.exports=n(81)},62:function(e,t,n){},67:function(e,t,n){},75:function(e,t){},76:function(e,t){},77:function(e,t){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(15),r=n.n(i),s=(n(62),n(27)),c=n(28),l=n(35),u=n(36),d=n(4),p=(n(67),n(10));function m(e){return{type:"SETSCENE",_changeScene:e}}function f(e){return{type:"SETSUBSCENE",_changeSubScene:e}}function v(e){return console.log("ClosePosenet action call:"+e),{type:"CLOSEPOSENET",_closePosenet:e}}var h=n(18),g=(n(46),n(98)),b=n(100),S=Object(g.a)((function(e){return{root:{position:"fixed",left:"0%",top:"0%",width:"100%",height:"100%"},contentsTitle:{position:"absolute",left:"5%",top:"5%",fontSize:"250%",textShadow:"2px 2px 5px black",color:"red"},contentsFailText:{position:"absolute",left:"5%",top:"20%",fontSize:"250%",textShadow:"2px 2px 5px black",color:"white"},retryButton:{position:"absolute",left:"60%",top:"5%",width:"30%",height:"20%",fontSize:"150%",opacity:.5},OKButton:{position:"absolute",left:"60%",top:"35%",width:"30%",height:"20%",fontSize:"150%",opacity:.5}}})),E={SetSubScene:f},y=Object(d.b)((function(e){return{_currentSubScene:e.scene._currentSubScene}}),E)((function(e){e.SetSubScene,e._currentSubScene;var t=e.failureCount,n=e.onOKClick,o=e.onRetryClick,i=S();return a.a.createElement("div",{className:i.root},a.a.createElement("span",{className:i.contentsTitle},"\ucd94\uac00 \uae30\ub85d \ud544\uc694"),a.a.createElement("span",{className:i.contentsFailText},t+"SET"),a.a.createElement(b.a,{className:i.retryButton,onClick:o,variant:"contained",color:"secondary"},"\uc7ac\ub3c4\uc804"),a.a.createElement(b.a,{className:i.OKButton,onClick:n,variant:"contained",color:"secondary"},"\ud655\uc778"))})),_=Object(g.a)((function(e){return{root:{position:"fixed",left:"0%",top:"0%",width:"100%",height:"100%"},contentsTitle:{position:"absolute",left:"5%",top:"5%",fontSize:"250%",textShadow:"2px 2px 5px black",color:"green"},OKButton:{position:"absolute",left:"60%",top:"35%",width:"30%",height:"20%",fontSize:"150%",opacity:.5}}})),w={SetSubScene:f},P=Object(d.b)((function(e){return{_currentSubScene:e.scene._currentSubScene}}),w)((function(e){e.SetSubScene,e._currentSubScene;var t=e.onOKClick,n=_();return a.a.createElement("div",{className:n.root},a.a.createElement("span",{className:n.contentsTitle},"\uc601\uc0c1 \uae30\ub85d \uc644\ub8cc"),a.a.createElement(b.a,{className:n.OKButton,onClick:t,variant:"contained",color:"secondary"},"\ud655\uc778"))})),k=void 0,x=[],C=[];function O(e){if(0!=x.length)if(x.length==C.length){for(var t=[],n=0;n<C.length;n++)if(C[n].step==e){t.push(x[n]);break}if(0!=t.length){var o=new Blob(t,{type:"video/webm"});return URL.createObjectURL(o)}console.log("GetVideoSource not found step key")}else console.log("GetVideoSources recordedChunks, _recordedChunksState length diffrent");else console.log("GetVideoSource recordedChunks length zero")}var N=n(101),T=n(32),j=n.n(T),R=n(51),V=n.n(R),L=n(37);function I(e){void 0!=window&&void 0!=window.parent&&(0==e?window.parent.postMessage("onFitScreen","*"):window.parent.postMessage("onFullScreen","*"))}function B(e){void 0!=window&&void 0!=window.HybridApp&&window.HybridApp.SetLandscapeMode(e)}var D=Object(g.a)((function(e){return{root:{width:"100%"},video:{position:"relative",width:"100%",margin:"0"},rootFullScreen:{position:"fixed",left:"0%",top:"0%",width:"100%",height:"100%"},videoFullScreen:{position:"absolute",width:"auto",height:"100%",left:"0%",top:"0%",margin:"0"},contentsTitle:{position:"absolute",width:"100%",left:"0%",top:"0%",fontSize:"250%",textShadow:"2px 2px 5px black",color:"white",textAlign:"left",margin:"1% 1%"},contentBackBoard:{position:"absolute",left:"0%",top:"0%",width:"100%",height:"100%",backgroundColor:"#00000088",margin:"0"},skipGuide:{position:"absolute",right:"1%",top:"1%",color:"white"},centerPlayButton:{position:"absolute",width:"50%",height:"50%",left:"25%",top:"40%",display:"none",opacity:"255"},contentsScreenMirror:{position:"absolute",width:"15%",height:"15%",left:"70%",top:"70%"},centerPlayButtonText:{position:"absolute",width:"100%",top:"70%",left:"0",fontSize:"60%",margin:"5%",color:"white"},playButton:{position:"absolute",width:"50%",height:"50%",left:"0%",top:"40%",display:"none",opacity:"255"},skipButton:{position:"absolute",width:"50%",height:"50%",left:"50%",top:"40%",display:"none"},largeIcon:{fontSize:"2em",color:L.a[50]}}})),A={SetMaxTime:function(e){return{type:"SETMAXTIME",_maxTime:e}},SetCurrentTime:function(e){return{type:"SETCURRENTTIME",_currentTime:e}}},z=Object(d.b)((function(e){return{}}),A)((function(e){var t=e.title,n=e.videoUrl,i=e.enableContentsSkip,r=e.enableCountDown,s=e.enableContentsPause,c=e.onVideoPlayComplete,l=e.onVideoSkip,u=e.autoPlay,d=e.controls,p=e.enableTitleText,m=e.SetMaxTime,f=e.SetCurrentTime,v=e.enableFullScreen,h=e.enableScreenMirror,g=D(),b=Object(o.useRef)(null),S=Object(o.useRef)(null),E=Object(o.useRef)(null),y=Object(o.useRef)(null);function _(){var e=E.current;void 0!=e?(f(parseInt(e.currentTime)),m(parseInt(e.duration))):console.log("videoRef null")}Object(o.useEffect)((function(){console.log("VideoPlay start:"+n),w(!u);var e=void 0;return 1==r&&(e=setInterval(_,1e3)),function(){void 0!=e&&clearInterval(e),console.log("VideoPlay finish:"+n)}}),[]);var w=function(e){var t="none";1==e&&(t="block"),void 0!=b.current&&(b.current.style.display=t),void 0!=S.current&&(S.current.style.display=t),void 0!=y.current&&(y.current.style.display=t)},P=function(){console.log("onPlayClick call");var e=E.current;void 0!=e?(void 0!=e&&e.play(),w(!1)):console.log("video null")},k=function(){console.log("onSkipClick call"),w(!1),void 0!=l&&l()},x=0==v?g.root:g.rootFullScreen,C=0==v?g.video:g.videoFullScreen;return a.a.createElement("div",{className:x,style:{zIndex:"-2"}},a.a.createElement("video",{className:C,onClick:function(){console.log("onVideoClick call");var e=E.current;if(void 0!=e)return 0==s?(void 0!=e&&e.play(),void console.log("disable contents skip")):void(e.paused?(e.play(),w(!1)):(e.pause(),w(!0)));console.log("videoRef null")},autoPlay:u,onEnded:function(){console.log("onVideoEnded call"),void 0!=c&&c()},ref:E,controls:d,playsinline:!0},a.a.createElement("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."),1==p?a.a.createElement("span",{className:g.contentsTitle},t):void 0,function(){if(0!=s)return 1==i?a.a.createElement("div",null,a.a.createElement("div",{className:g.contentBackBoard,ref:y}),a.a.createElement("span",{className:g.skipGuide},"\ud130\uce58\ud558\uc5ec \uc815\uc9c0/\uc2a4\ud0b5 \uac00\ub2a5"),a.a.createElement("div",{className:g.playButton,ref:b},a.a.createElement(N.a,{"aria-label":"play",onClick:P},a.a.createElement(j.a,{className:g.largeIcon}),a.a.createElement("span",{className:g.centerPlayButtonText},"\uc7ac\uc0dd"))),a.a.createElement("div",{className:g.skipButton,ref:S},a.a.createElement(N.a,{"aria-label":"skip",onClick:k},a.a.createElement(V.a,{className:g.largeIcon}),a.a.createElement("span",{className:g.centerPlayButtonText},"\ub2e4\uc74c")))):a.a.createElement("div",null,a.a.createElement("div",{className:g.contentBackBoard,ref:y}),a.a.createElement("div",{className:g.centerPlayButton,ref:b},a.a.createElement(N.a,{"aria-label":"play",onClick:P},a.a.createElement(j.a,{className:g.largeIcon}),a.a.createElement("span",{className:g.centerPlayButtonText},"\uc7ac\uc0dd"))))}(),1==h?a.a.createElement("img",{onClick:function(){void 0!=window&&void 0!=window.HybridApp&&window.HybridApp.EnablingWiFiDisplay()},className:g.contentsScreenMirror,src:"/home-training/img/screen-mirror-icon.png"}):void 0)})),M=n(11),F=n.n(M),U=n(19),H=n(29);n(5),n(33);var X={zIndex:"0",position:"fixed",right:"0%",bottom:"0%",width:"30%"},K={height:"40%"},W={height:"40%"},G={zIndex:"0",position:"fixed",left:"0%",top:"0%",height:"100%"},Y={width:"auto"},J={width:"100%"},Q={position:"absolute",zIndex:"1",left:"0%",top:"0%",width:"100%",height:"100%",margin:"0 auto",textShadow:"2px 2px 5px black",color:"white"},q={textAlign:"left",fontSize:"150%"},$={textAlign:"center",fontSize:"80%"},Z={textAlign:"right",fontSize:"130%"},ee={textAlign:"center",fontSize:"80%"},te=!1,ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e,n.defaultProps)).getCanvas=function(e){o.canvas=e},o.getVideo=function(e){o.video=e},o.getCameraScan=function(){var e;if(e=1==o.props.showMiniVideo?Object.assign({},Q,$):Object.assign({},Q,q),void 0==o.props._posenetPose)return a.a.createElement("span",{style:e},"\uce74\uba54\ub77c \uc778\uc2dd \uc911...")},o.getCameraInvalid=function(){var e;if(void 0!=o.props._posenetPose&&!(o.props.minPoseConfidence<o.props._posenetPose.score))return e=1==o.props.showMiniVideo?Object.assign({},Q,ee):Object.assign({},Q,Z),a.a.createElement("span",{style:e},"\ud654\uba74 \uc548\uc73c\ub85c \ub4e4\uc5b4\uc624\uc138\uc694.")},o.stopCamera=o.stopCamera.bind(Object(H.a)(o)),console.log("PoseNetCamera init"),o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(U.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te=!1,e.prev=1,e.next=4,this.setupCamera();case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("This browser does not support video capture, or this device does not have a camera");case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){te=!0,console.log("PoseNetCamera componentWillUnmount"),this.stopCamera()}},{key:"setupCamera",value:function(){var e=Object(U.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:this.playCamera(),this.updateCamera();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"playCamera",value:function(){var e=Object(U.a)(F.a.mark((function e(){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.stream&&window.stream.getTracks().forEach((function(e){e.stop()})),t=this.video,1080,1080,"user",e.next=7,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",frameRate:60,width:{exact:1080},height:{exact:1080},aspectRatio:{exact:1}}});case 7:n=e.sent,window.stream=n,t.srcObject=n,t.play();case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateCamera",value:function(){var e=this.canvas;if(void 0!=e){var t=e.getContext("2d");if(void 0!=t){var n=this.video;void 0!=n&&(0==this.props.showVideo?n.style.display="none":n.style.display="block",this.updateCameraFrame(t))}}}},{key:"updateCameraFrame",value:function(e){var t=this,n=this.video,o=function(){var a=Object(U.a)(F.a.mark((function a(){var i;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=t.canvas,1==t.props.showDebugVideo&&void 0!=i&&(n.videoWidth==i.width&&n.videoHeight==i.height||(i.width=n.videoWidth,i.height=n.videoHeight,e.width=n.videoWidth,e.height=n.videoHeight),e.clearRect(0,0,i.width,i.height),e.save(),e.drawImage(n,0,0),e.restore()),"start"!=t.props._closeCamera){a.next=6;break}return t.stopCamera(),t.props.onCloseCamera("complete"),a.abrupt("return");case 6:requestAnimationFrame(o);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();o()}},{key:"stopCamera",value:function(){console.log("stopCamera call");var e=this.video;void 0!=e&&(e.pause(),e.src="",void 0!=e.srcObject&&(e.srcObject.getTracks()[0].stop(),e.srcObject=void 0),console.log("video off"))}},{key:"detectPose",value:function(){var e=this.canvas;if(void 0!=e){var t=e.getContext("2d");if(void 0!=t){var n=this.props.showVideo,o=this.video;o.style.display=0==n?"none":"block",this.poseDetectionFrame(t)}}}},{key:"poseDetectionFrame",value:function(e){var t=this,n=this.props;n.algorithm,n.imageScaleFactor,n.flipHorizontal,n.outputStride,n.minPoseConfidence,n.minPartConfidence,n.maxPoseDetections,n.nmsRadius,n.showDebugVideo,n.showPoints,n.showSkeleton,n.showSkeletonDegree,n.skeletonColor,n.skeletonDegreeColor,n.skeletonLineWidth,this.posenet,this.video;(function(){var e=Object(U.a)(F.a.mark((function e(){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=te){e.next=2;break}return e.abrupt("return");case 2:try{(n={}).score=.5,t.props.onPosenetPose(n)}catch(o){console.log("posenet detection error")}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},{key:"render",value:function(){var e,t;return 1==this.props.showMiniVideo?(e=Object.assign({},X,K),t=Object.assign({},X,W)):(e=Object.assign({},G,Y),t=Object.assign({},G,J)),a.a.createElement("div",null,a.a.createElement("video",{id:"videoCamera",style:e,src:"",playsInline:!0,ref:this.getVideo}),a.a.createElement("div",{style:t},this.getCameraInvalid()),a.a.createElement("canvas",{style:{position:"fixed",left:"0%",top:"0%",zIndex:"1"},ref:this.getCanvas}))}}]),n}(o.Component);ne.defaultProps={flipHorizontal:!0,algorithm:"single-pose",showMiniVideo:!1,showVideo:!0,showDebugVideo:!1,showSkeleton:!1,showPoints:!1,showSkeletonDegree:!1,minPoseConfidence:.7,minPartConfidence:.5,maxPoseDetections:2,nmsRadius:20,outputStride:16,imageScaleFactor:.5,skeletonColor:"#ffadea",skeletonDegreeColor:"#ff0000",skeletonLineWidth:6,loadingText:"Loading...please be patient..."};var oe=ne=Object(d.b)((function(e){return{_currentScene:e.scene._currentScene,_closePosenet:e.posenet._closePosenet,_posenetPose:e.posenet._posenetPose}}),(function(e){return{onPosenetPose:function(t){return e({type:"SETPOSENETPOSE",_posenetPose:t})},onClosePosenet:function(t){return e(v(t))}}}))(ne),ae={position:"absolute",zIndex:"1",left:"0%",top:"0%",width:"100%",height:"100%",textAlign:"left",margin:"0 auto",fontSize:"150%",textShadow:"2px 2px 5px black",color:"white"},ie={position:"absolute",zIndex:"1",left:"0%",top:"0%",width:"100%",height:"100%",textAlign:"right",margin:"0 auto",fontSize:"130%",textShadow:"2px 2px 5px black",color:"white"},re={position:"fixed",zIndex:"1",left:"0%",top:"0%",width:"100%",height:"100%"},se={setScene:m},ce=(Object(d.b)((function(e){return{_posenetPose:e.posenet._posenetPose,_countdown:e.countdown._countdown}}),se)((function(e){e.setScene;var t=e._posenetPose,n=(e._countdown,e.minPoseConfidence);Object(o.useEffect)((function(){}));return a.a.createElement("div",{style:re},a.a.createElement("span",{style:ae},"\uce74\uba54\ub77c \uc778\uc2dd \uc911..."),function(){if(void 0!=t&&!(n<t.score))return a.a.createElement("span",{style:ie},"\ud654\uba74 \uc548\uc73c\ub85c \ub4e4\uc5b4\uc624\uc138\uc694.")}())})),Object(g.a)((function(e){return{root:{width:"100%",maxHeight:"100%"},contentsTitle:{position:"absolute",left:"5%",top:"5%",fontSize:"250%",textShadow:"2px 2px 5px black",color:"red"},contentsResult:{position:"fixed",left:"0%",top:"10%",width:"100%",height:"auto",fontSize:"250%",textShadow:"2px 2px 5px black",textAlign:"center",color:"white"}}}))),le=0,ue=0,de=void 0,pe=void 0,me=void 0,fe={SetSubScene:f,InvalidPosenet:function(e){return{type:"INVALIDPOSENET",_invalidPoseKey:e}},ValidPosenet:function(e){return{type:"VALIDPOSENET",_validPoseKey:e}},ClosePosenet:v},ve=Object(d.b)((function(e){return{_posenetPose:e.posenet._posenetPose,_currentSubScene:e.scene._currentSubScene,_recordState:e.posenet._recordState,_invalidPosenetList:e.posenet._invalidPosenetList,_validPosenetList:e.posenet._validPosenetList}}),fe)((function(e){e.SetSubScene,e._currentSubScene;var t=e.InvalidPosenet,n=e.ValidPosenet,i=e._invalidPosenetList,r=e._validPosenetList,s=e._posenetPose,c=e.step,l=e.title,u=e.desc,d=e._recordState,p=ce();Object(o.useEffect)((function(){void 0!=s&&(.3<s.score?ue++:le++,console.log("PoseCameraRecord _recordState:"+d),1==d?m():f())}),[s]),Object(o.useEffect)((function(){return console.log("PoseCameraRecord start:"+c),le=0,ue=0,de=c,pe=l,me=u,function(){f()}}),[]);var m=function(){var e,t=document.getElementById("videoCamera");void 0!=t&&void 0!=(e=t.srcObject)&&void 0==k&&((k=new MediaRecorder(e)).ondataavailable=function(e){console.log("data-available data count:"+e.data.size),e.data.size>0&&(x.push(e.data),console.log("reocrd count:"+x.length))},console.log("VideoRecord_Start call:"+e),k.start())},f=function(){if(console.log(" stopVideoRecord call"),void 0!=k!=0){var e=0,o=ue+le;0!=o&&(e=100*ue/(ue+le)),console.log("percent:"+e+", total:"+o);var a=50<e;0==a?t(c):n(c),function(e,t,n,o){if(void 0==k)return!1;console.log("VideoRecord_Stop state:"+e);var a={};a.valid=e,a.step=t,a.title=n,a.desc=o,C.push(a),k.stop(),k=void 0}(a,de,pe,me)}};return a.a.createElement("div",{key:"PoseNetMiniCamera"},a.a.createElement(oe,{showMiniVideo:!0,minPoseConfidence:"0.1"}),function(){if(0==d){console.log(r),console.log(i);for(var e=0;e<r.length;e++){var t=r[e];if(de==t)return a.a.createElement("span",{className:p.contentsResult},"\uae30\ub85d \uc131\uacf5")}for(e=0;e<i.length;e++){t=i[e];if(de==t)return a.a.createElement("span",{className:p.contentsResult},"\uae30\ub85d \uc2e4\ud328")}}}())})),he={step1:{title:"\ucf54\uc5b4-\ubcf5\uadfc 15\ubd84",desc:"\ucf54\uc5b4-\ubcf5\uadfc 15\ubd84",type:"extra",url:"https://goli8111.github.io/home-training/data/intro.mp4",enableContentsPause:!0,enablePlayerView:!1,key:"intro"},step2:{title:"\ub9c8\uc6b4\ud2f4 \ud074\ub77c\uc774\uba38",desc:"\uc6cc\ubc0d\uc5c5:\ub9c8\uc6b4\ud2f4 \ud074\ub77c\uc774\uba38 40\ucd08",type:"extra",url:"https://goli8111.github.io/home-training/data/mountain-climber-intro.mp4",enableContentsPause:!0,enablePlayerView:!1,key:"mountain-climber"},step3:{title:"\ub9c8\uc6b4\ud2f4 \ud074\ub77c\uc774\uba38(set)",desc:"\uc6cc\ubc0d\uc5c5:\ub9c8\uc6b4\ud2f4 \ud074\ub77c\uc774\uba38 40\ucd08",type:"set",url:"https://goli8111.github.io/home-training/data/mountain-climber-set.mp4",enableContentsPause:!1,enablePlayerView:!0,key:"mountain-climber"},step4:{title:"\ud50c\ub7ad\ud06c \uc778 \uc564 \uc544\uc6c3",desc:"\ud50c\ub7ad\ud06c \uc778 \uc564 \uc544\uc6c3 30\ucd08 X 1 set",type:"extra",url:"https://goli8111.github.io/home-training/data/plank-in-and-out-intro.mp4",enableContentsPause:!0,enablePlayerView:!1,key:"plank-in-and-out"},step5:{title:"\ud50c\ub7ad\ud06c \uc778 \uc564 \uc544\uc6c3(set)",desc:"\ud50c\ub7ad\ud06c \uc778 \uc564 \uc544\uc6c3 30\ucd08 X 1 set",type:"set",url:"https://goli8111.github.io/home-training/data/plank-in-and-out-set.mp4",enableContentsPause:!1,enablePlayerView:!0,key:"plank-in-and-out"},step6:{title:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5",desc:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 30\ucd08 X 1 set",type:"extra",url:"https://goli8111.github.io/home-training/data/hollow-body-kick-intro-1.mp4",enableContentsPause:!0,enablePlayerView:!1,key:"hollow-body-kick"},step7:{title:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 Set#1",desc:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 30\ucd08 X 1 set",type:"set",url:"https://goli8111.github.io/home-training/data/hollow-body-kick-set-1.mp4",enableContentsPause:!0,enablePlayerView:!0,key:"hollow-body-kick"},step8:{title:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5(\ud734\uc2dd)",desc:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 30\ucd08 \ud6c4 \ud734\uc2dd",type:"extra",url:"https://goli8111.github.io/home-training/data/hollow-body-kick-intro-2.mp4",enableContentsPause:!0,enablePlayerView:!1,key:"hollow-body-kick"},step9:{title:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 Set#2",desc:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 30\ucd08 X 2 set",type:"set",url:"https://goli8111.github.io/home-training/data/intro.mp4",enableContentsPause:!0,enablePlayerView:!0,key:"hollow-body-kick"},step10:{title:"",desc:"\uacb0\uacfc",type:"extra",url:"https://goli8111.github.io/home-training/data/core-abs-result.mp4",enableContentsPause:!1,enablePlayerView:!1,key:"result"}},ge=Object(g.a)((function(e){return{root:{width:"100%",maxHeight:"100%"},videoContainer:{width:"100%",position:"relative"},progressContainer:{position:"absolute",zIndex:"1",left:"2%",top:"20%",width:"15%",height:"15%",margin:"0"}}})),be=0,Se={InvalidPosenetClear:function(){return{type:"INVALIDPOSENET_CLEAR"}},SetCameraRecord:function(e){return console.log("SETCAMERARECORD action call:"+e),{type:"SETCAMERARECORD",_recordState:e}},setScene:m},Ee=Object(d.b)((function(e){return{_posenetPose:e.posenet._posenetPose,_invalidPosenetList:e.posenet._invalidPosenetList,_validPosenetList:e.posenet._validPosenetList,_maxTime:e.countdown._maxTime,_currentTime:e.countdown._currentTime}}),Se)((function(e){e._posenetPose;var t=e.setScene,n=e.InvalidPosenetClear,o=e.SetCameraRecord,i=e._invalidPosenetList,r=e._validPosenetList,s=e._currentTime,c=e._maxTime,l=ge(),u=a.a.useState(6),d=Object(p.a)(u,2),m=d[0],f=d[1],v=function(e){return he["step"+e]},g=function(e,t,n){return a.a.createElement(z,{key:t,title:e,enableContentsSkip:!0,enableContentsPause:n,enableCountDown:!0,onVideoPlayComplete:S,onVideoSkip:E,videoUrl:t,autoPlay:!0,enableTitleText:!0,enableFullScreen:!0,enableScreenMirror:n})},b=function(){var e=m+1;void 0!=v(e)&&_(e)},S=function(){console.log("onVideoEnded call");var e=v(m);void 0!=e&&(o(!1),e.enablePlayerView&&setTimeout((function(){b()}),2e3))},E=function(){console.log("onVideoSkip call"),void 0!=v(m)&&b()};function _(e){for(var t=m,n=e,o=0;o<r.length;o++){var a=r[o];if(a==n||a==n+1)return console.log("skip scene type:"+t+"=>"+a),void _(a+1)}f(n),console.log("change scene type:"+t+"=>"+n)}var w=function(){var e=void 0,t=void 0,n=v(m);return void 0!=n&&(e=n.title,t=n.desc),a.a.createElement("div",{key:"PoseNetMiniCamera"},a.a.createElement(ve,{step:m,title:e,desc:t}))},k=function(){console.log("onOKClick"),f(6),t("Result")},O=function(){console.log("onRetryClick"),be=0,n(),function(){if(x.length==C.length){console.log("VideoRecord_InvalidDataClear prev reocrd count:"+x.length);for(var e=C.length-1;e>=0;e--)0==C[e].valid&&(console.log("VideoRecord_InvalidDataClear delete reocrd:"+e),C.splice(e,1),x.splice(e,1));console.log("VideoRecord_InvalidDataClear current reocrd count:"+x.length)}else console.log("VideoRecord_InvalidDataClear _recordedChunks, _recordedChunksState length diffrent")}(),_(6)},N=function(){var e=i.length;return 0==e?a.a.createElement("div",{key:"ResultSuccess"},a.a.createElement(P,{onOKClick:k})):a.a.createElement("div",{key:"ResultFailure"},a.a.createElement(y,{failureCount:e,onOKClick:k,onRetryClick:O}))};return a.a.createElement("div",{className:l.root},a.a.createElement("div",{className:l.videoContainer},function(){var e=[],t=v(m);void 0!=t&&(e.push(g(t.title,t.url,t.enableContentsPause)),void 0==v(m+1)&&e.push(N()),1==t.enablePlayerView&&(be!=m&&(o(!0),be=m),e.push(w())));return e}(),function(){var e=v(m);if(void 0!=e&&0!=e.enablePlayerView){var t=parseInt(c-s);return a.a.createElement("div",{className:l.progressContainer},a.a.createElement(h.a,{value:t,maxValue:c,text:"".concat(t),styles:Object(h.b)({textColor:"#ffffff",pathColor:"#ffffff",trailColor:"#ffffff11",textSize:"40px"})}))}}()))})),ye=(n(78),Object(g.a)((function(e){return{root:{width:"100%",maxHeight:"100%"},videoRoot:{position:"absolute",top:"5%",height:"95%",width:"100%"},videoContainer:{position:"relative",width:"100%"},contentsTitle_fail:{position:"relative",width:"100%",left:"0%",color:"red"},contentsTitle_fail_desc:{position:"relative",width:"100%",left:"0%",color:"gray"},contentsSummery:{width:"100%"},contentsSummery_left:{position:"absolute",top:"5px",left:"10px",color:"black"},contentsSummery_right:{position:"absolute",top:"5px",right:"30px",color:"black"},video:{position:"relative",width:"100%",margin:"0"}}}))),_e=void 0,we={SetSubScene:f},Pe=Object(d.b)((function(e){return{_currentSubScene:e.scene._currentSubScene,_invalidPosenetList:e.posenet._invalidPosenetList,_validPosenetList:e.posenet._validPosenetList}}),we)((function(e){e._currentSubScene;var t=e._invalidPosenetList,n=e._validPosenetList,i=ye(),r=a.a.useState(!1),s=Object(p.a)(r,2),c=s[0],l=s[1];Object(o.useEffect)((function(){void 0!=(_e=function(e){for(var t=[],n=0;n<C.length;n++)if(C[n].valid==e){var o=C[n].step,a=O(o);if(void 0!=a){var i={};i.step=o,i.url=a,i.desc=C[n].desc,i.title=C[n].title,t.push(i)}}return t}(!0))&&0<_e.length?console.log("FullScreenResult source count:"+_e.length):console.log("FullScreenResult source zero")}));var u=function(e){var t=e.target.getAttribute("data-index");console.log("onToggleVideoFaceMask call index:"+t),l(!c)},d=function(e){var t=e.target.getAttribute("data-index");console.log("onDeleteVideo call index:"+t),function(e){console.log("VideoRecordDelete index:"+e),C.splice(e,1),x.splice(e,1),k=void 0}(t),l(!c)},m=function(e,t,n,o,r){return a.a.createElement("div",{key:t},r?function(e,t,n){return a.a.createElement("div",{key:t},a.a.createElement("div",{className:"contentsTitle_left"},a.a.createElement("div",{className:i.contentsTitle_success_icon},a.a.createElement("img",{onClick:u,"data-index":e,className:"contentsTitle_success_smile_icon",src:"/home-training/img/face-mask-icon.png"}),a.a.createElement("img",{onClick:d,"data-index":e,className:"contentsTitle_success_delete_icon",src:"/home-training/img/result-scene-delete-icon.png"})),a.a.createElement("span",{className:"contentsTitle_success_text"},t)),a.a.createElement("video",{className:i.video,autoPlay:!1,controls:!0,poster:"/home-training/img/HomeTrainingQuest_icon.png"},a.a.createElement("source",{src:n,type:"video/mp4",id:"SelectSoundOutput"}),"Your browser does not support the video tag."))}(e,n,o):function(e){return a.a.createElement("div",{key:e},a.a.createElement("div",{className:"contentsTitle_fail_left"},a.a.createElement("span",{className:i.contentsTitle_fail},e)),a.a.createElement("div",{className:"contentsTitle_fail_center"},a.a.createElement("span",{className:i.contentsTitle_fail_desc},"\uc601\uc0c1 \uae30\ub85d \uc5c6\uc74c")))}(n))};return a.a.createElement("div",{key:"FullScreenResult",className:i.root},a.a.createElement("div",{className:i.contentsSummery},a.a.createElement("span",{className:i.contentsSummery_left},"\ub0b4\uae30\ub85d"),a.a.createElement("span",{className:i.contentsSummery_right},function(){var e=t.length+n.length,o=n.length;return a.a.createElement("div",null,a.a.createElement("span",{style:{color:"green"}},o," Set"),"\uae30\ub85d / \ucd1d ",e," Set")}())),a.a.createElement("div",{className:i.videoRoot},a.a.createElement("div",{className:i.videoContainer},function(){var e=[],t=function(){for(var e=[],t=0;t<C.length;t++){var n=C[t].step,o=O(n);if(void 0!=o){var a={};a.step=n,a.url=o,a.valid=C[t].valid,a.desc=C[t].desc,a.title=C[t].title,e.push(a)}}return e}();if(void 0!=t){console.log("fullSourceList:"+t.length);for(var n=0;n<t.length;n++)e.push(m(n,t[n].title,t[n].desc,t[n].url,t[n].valid))}return e}())))})),ke=(n(79),Object(g.a)((function(e){return{root:{width:"100%"},videoContainer:{width:"100%",position:"relative"},contentsTitle:{color:"black"},BottomBarBack:{position:"fixed",backgroundColor:"#FFFFFF88",width:"100%",height:"11%",top:"89%",left:"0%"},BottomBarButton:{position:"fixed",height:"8%",top:"90%",background:"linear-gradient(90deg, #cc6699 30%, #6666ff 80%)",borderRadius:3,border:0,color:"white",boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .3)",width:"94%",left:"3%"},BottomBarButton_text_1:{position:"absolute",left:"0",top:"10%",width:"100%",fontSize:"140%",fontWeight:"bold"},BottomBarButton_text_2:{position:"absolute",left:"0",top:"60%",width:"100%",fontSize:"80%"}}}))),xe={setScene:m},Ce=Object(d.b)((function(e){return{_posenetPose:e.posenet._posenetPose}}),xe)((function(e){e._posenetPose;var t=e.setScene,n=ke();console.log("IntroScene start");return a.a.createElement("div",{className:n.root},a.a.createElement("div",{className:"contents_body"},a.a.createElement("div",{className:"contents_intro"},a.a.createElement("span",{className:".contents_intro_text"},"\uc5b4\ub514\uc2a4\ub4e0 \uac00\ubccd\uac8c!"),a.a.createElement("span",{className:"contents_intro_text_sub"},a.a.createElement("br",null),"\ub531 16\ubd84 \ud2b8\ub808\uc774\ub2dd\uc73c\ub85c \ucf54\uc5b4\ub97c \ub2e8\ub2e8\ud558\uac8c \uc870\uc774\uace0, \ubcf5\uadfc\uc744 \ud65c\uc131\ud654 \ud569\ub2c8\ub2e4.",a.a.createElement("br",null),"\ub530\ub77c\uc624\uc138\uc694")),function(){var e=[];return Object.keys(he).forEach((function(t,o){var i,r,s;"set"==he[t].type&&e.push((i=he[t].title,r=he[t].desc,s=he[t].url,a.a.createElement("div",{key:i},a.a.createElement("span",{className:n.contentsTitle},r),a.a.createElement("div",{className:n.videoContainer},a.a.createElement(z,{key:s,title:i,enableContentsSkip:!1,enableContentsPause:!1,videoUrl:s,autoPlay:!1,enableTitleText:!1,enableFullScreen:!1,enableScreenMirror:!1})))))})),e}(),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:n.BottomBarBack})),a.a.createElement(b.a,{onClick:function(){console.log("onPlay call"),t("BodyScan")},className:n.BottomBarButton,variant:"contained",color:"secondary"},a.a.createElement("span",{className:n.BottomBarButton_text_1},"\uc601\uc0c1 \uae30\ub85d \uc2dc\uc791"),a.a.createElement("span",{className:n.BottomBarButton_text_2},"\ucd1d 11 Set / 15 \ubd84")))})),Oe=Object(g.a)((function(e){return{root:{position:"absolute",left:"0%",top:"0%",width:"100%",height:"100%"},videoContainer:{position:"absolute",height:"100%",width:"100%",left:"0%",top:"0%"},contentsLoading:{position:"absolute",zIndex:"1",left:"0%",top:"0%",width:"100%",height:"100%",textAlign:"left",margin:"0 auto",fontSize:"150%",textShadow:"2px 2px 5px black",color:"white"},progressContainer:{position:"absolute",zIndex:"1",left:"0%",top:"0%",width:"20%",height:"20%",marginLeft:"5%",marginTop:"10%"}}})),Ne={setScene:m},Te=Object(d.b)((function(e){return{_posenetPose:e.posenet._posenetPose}}),Ne)((function(e){var t=e._posenetPose,n=e.setScene,i=Oe(),r=a.a.useState(0),s=Object(p.a)(r,2),c=s[0],l=s[1];Object(o.useEffect)((function(){console.log("_posenetPose effect call"),void 0!=t&&(.3<=t.score?u():d())}),[t]);var u=function(){l(c+1)},d=function(){l(0)};return c>=4&&n("Play"),a.a.createElement("div",{className:i.root},a.a.createElement("div",{className:i.videoContainer},a.a.createElement("div",{className:i.progressContainer},a.a.createElement(h.a,{value:c,maxValue:4,text:"".concat(25*c,"%"),styles:Object(h.b)({textColor:"#ffffff",pathColor:"#ffffff",trailColor:"#ffffff11",textSize:"40px"})})),a.a.createElement("span",{className:i.contentsLoading},"\uce74\uba54\ub77c \uc778\uc2dd \uc911..."),a.a.createElement("div",{key:"PoseNetScanCamera"},a.a.createElement(oe,{showMiniVideo:!1,minPoseConfidence:.3}))))})),je={step3:{title:"\ub9c8\uc6b4\ud2f4 \ud074\ub77c\uc774\uba38(set)",desc:"\uc6cc\ubc0d\uc5c5:\ub9c8\uc6b4\ud2f4 \ud074\ub77c\uc774\uba38 40\ucd08",url:"https://goli8111.github.io/home-training/data/mountain-climber-set.mp4",comments:["0:41","\ub2e4\ub9ac\ub97c \ud3b4\uc8fc\uc138\uc694.","1:15","\ub9c8\uc6b4\ud2f4 \uc790\uc138 \uc2dc, \ud5c8\ub9ac\ub97c \ub354 \ud3b4\uc8fc\uc138\uc694."]},step5:{title:"\ud50c\ub7ad\ud06c \uc778 \uc564 \uc544\uc6c3(set)",desc:"\ud50c\ub7ad\ud06c \uc778 \uc564 \uc544\uc6c3 30\ucd08 X 1 set",url:"https://goli8111.github.io/home-training/data/plank-in-and-out-set.mp4",comments:["0:13","\uc870\uae08 \ub354 \ube60\ub974\uac8c \uc9c4\ud589 \ud574\uc8fc\uc138\uc694."]},step7:{title:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 Set#1",desc:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 30\ucd08 X 1 set",url:"https://goli8111.github.io/home-training/data/hollow-body-kick-set-1.mp4",comments:["0:00","\uc644\ubcbd\ud569\ub2c8\ub2e4."]},step9:{title:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 Set#2",desc:"\ud560\ub85c\uc6b0\ubc14\ub514 \ud0a5 30\ucd08 X 2 set",url:"https://goli8111.github.io/home-training/data/hollow-body-kick-set-2.mp4"}},Re=(n(80),Object(g.a)((function(e){return{root:{width:"100%",maxHeight:"100%"},videoRoot:{position:"relative",top:"5%",height:"95%",width:"100%"},videoContainer:{position:"relative",width:"100%",margin:"5px"},video:{position:"relative",width:"100%",margin:"0"},divLine:{border:"1px solid",color:"#DDDDDD",width:"95%"}}}))),Ve={SetSubScene:f},Le=Object(d.b)((function(e){return{_currentSubScene:e.scene._currentSubScene,_invalidPosenetList:e.posenet._invalidPosenetList,_validPosenetList:e.posenet._validPosenetList}}),Ve)((function(e){var t=e.resultState,n=Re();Object(o.useEffect)((function(){}));var i=function(e,t,o){return a.a.createElement("div",{key:e},a.a.createElement("div",{className:"contentsTitle_left"},a.a.createElement("span",{className:"contentsTitle_success_text"},e)),a.a.createElement("video",{className:n.video,autoPlay:!1,controls:!0,poster:"/home-training/img/HomeTrainingQuest_icon.png"},a.a.createElement("source",{src:t,type:"video/mp4",id:"SelectSoundOutput"}),"Your browser does not support the video tag."),a.a.createElement("div",{className:"contentsTitle_left"},function(e){if(void 0!=e){for(var t=[],n=parseInt(e.length/2),o=0;o<n;o++){0!=o&&t.push(a.a.createElement("br",{key:e}));var i=2*o,r=e[i],s=e[i+1];t.push(a.a.createElement("span",{key:r+s+"0",className:"contentsTitle_success_time"},r," ")),t.push(a.a.createElement("span",{key:r+s+"1",className:"contentsTitle_success_text"},s))}return t}}(o)),a.a.createElement("hr",{className:n.divLine}))};return a.a.createElement("div",{key:"FeedbackScene",className:n.root},a.a.createElement("div",{className:"contentsSummery"},a.a.createElement("span",{className:"contentsSummery_title"},"\ub9c8\uc2a4\ud130 \ucf54\uba58\ud2b8"),a.a.createElement("div",{className:"contentsSummery_result"},t?a.a.createElement("div",null,"\uc57d\uac04\uc758 \ub3d9\uc791 \uad50\uc815\uc774 \ud544\uc694\ud558\uc9c0\ub9cc, \uc798\ud558\uc168\uc2b5\ub2c8\ub2e4,",a.a.createElement("br",null),"\ud074\ub9ac\uc5b4 \ub3c4\uc7a5 \ucc0d\uc5b4\ub4dc\ub9bd\ub2c8\ub2e4!"):a.a.createElement("div",null,"\uc544\uc27d\uc2b5\ub2c8\ub2e4.",a.a.createElement("br",null),"\ucf54\uba58\ud2b8\ub97c \uc77d\uc5b4\ubcf4\uc2dc\uace0 \ub2e4\uc2dc \ub3c4\uc804\ud558\uc138\uc694.")),a.a.createElement("hr",{className:n.divLine}),a.a.createElement("div",{className:n.videoRoot},a.a.createElement("div",{className:n.videoContainer},function(){var e=[];return Object.keys(je).forEach((function(t,n){e.push(i(je[t].desc,je[t].url,je[t].comments))})),e}()))))})),Ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentWillUnmount",value:function(){I(!1),B(!1)}},{key:"getScene",value:function(){switch(this.props._currentScene){case"Result":return I(!1),B(!1),a.a.createElement(Pe,null);case"Play":return I(!0),B(!0),a.a.createElement(Ee,null);case"BodyScan":return I(!0),B(!0),a.a.createElement(Te,null);case"Feedback":return I(!1),B(!1),a.a.createElement(Le,{resultState:!1});default:return I(!1),B(!1),a.a.createElement(Ce,null)}}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.getScene())}}]),n}(o.Component),Be=Ie=Object(d.b)((function(e){return{_currentScene:e.scene._currentScene}}),(function(e){return{}}))(Ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=n(16),Ae={_currentScene:"IndexScene",_currentSubScene:""};var ze=n(44),Me=n(38),Fe={_posenetPose:void 0,_closePosenet:"",_invalidPosenetList:[],_validPosenetList:[],_recordState:!1};var Ue={_currentTime:0,_maxTime:0};var He=Object(De.b)({scene:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETSCENE":return console.log("SETSCENE:"+t._changeScene),Object.assign({},e,{_currentScene:t._changeScene});case"SETSUBSCENE":return console.log("SETSUBSCENE:"+t._changeSubScene),Object.assign({},e,{_currentSubScene:t._changeSubScene});default:return e}},posenet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETPOSENETPOSE":return Object.assign({},e,{_posenetPose:t._posenetPose});case"CLOSEPOSENET":return console.log("CLOSEPOSENET:"+t._closePosenet),Object.assign({},e,{_closePosenet:t._closePosenet});case"INVALIDPOSENET":return console.log("INVALIDPOSENET:"),console.log(e._invalidPosenetList),Object(Me.a)({},e,{_invalidPosenetList:[].concat(Object(ze.a)(e._invalidPosenetList),[t._invalidPoseKey])});case"INVALIDPOSENET_CLEAR":return console.log("INVALIDPOSENET_CLEAR:"),console.log(e._invalidPosenetList),Object(Me.a)({},e,{_invalidPosenetList:[]});case"VALIDPOSENET":return console.log("VALIDPOSENET:"),console.log(e._validPosenetList),Object(Me.a)({},e,{_validPosenetList:[].concat(Object(ze.a)(e._validPosenetList),[t._validPoseKey])});case"SETCAMERARECORD":return console.log("SETCAMERARECORD:"+t._recordState),Object.assign({},e,{_recordState:t._recordState});default:return e}},countdown:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETMAXTIME":return Object.assign({},e,{_maxTime:t._maxTime});case"SETCURRENTTIME":return Object.assign({},e,{_currentTime:t._currentTime});default:return e}}}),Xe=document.getElementById("root"),Ke=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),We=Object(De.c)(He,Ke);r.a.render(a.a.createElement(d.a,{store:We},a.a.createElement(Be,null)),Xe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.ab2b0439.chunk.js.map