(this.webpackJsonpexportify=this.webpackJsonpexportify||[]).push([[0],{103:function(t,e,a){},104:function(t,e,a){},148:function(t,e,a){},151:function(t,e,a){},163:function(t,e){},196:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(0),s=a.n(r),i=a(33),c=a.n(i),o=a(87),l=a.n(o),u=a(38),h=a.n(u),p=(a(103),a(104),a(34)),d=a(88),f=a(36),b=a(22);p.b.add(d.a,f.a,f.d,f.b,f.c,b.a,b.d,b.c,b.b,b.e,b.g,b.f);var y=a(14),j=(a(108),a(8)),x=a(11),m=a(13),v=a(12),k=a(91),g=a(4),O=a.n(g),w=a(10),P=a(89),C=a.n(P),I=a(90);function S(t){t=t.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(window.location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))}var T=new(a.n(I).a)({maxConcurrent:1,minTime:0});T.on("failed",function(){var t=Object(w.a)(O.a.mark((function t(e,a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(429===e.response.status&&a.retryCount<2)){t.next=4;break}return t.abrupt("return",1e3*(e.response.headers["retry-after"]||1)+1e3);case 4:if(401===e.response.status||429===e.response.status||0!==a.retryCount){t.next=7;break}return c.a.notify(e,(function(t){t.addMetadata("response",e.response),t.addMetadata("request",e.config),t.groupingHash="Retried Request"})),t.abrupt("return",1e3);case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());var A=T.wrap((function(t,e){return C.a.get(t,{headers:{Authorization:"Bearer "+e}})}));function D(t){if(!t.isAxiosError||401!==t.request.status)throw t;window.location.href=window.location.href.split("#")[0]}var E=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(x.a)(a,[{key:"authorize",value:function(){var t=S("app_client_id"),e=""!==S("change_user");""===t&&(t="9950ac751e34487dbbe027c4fd7f8e99"),window.location.href="https://accounts.spotify.com/authorize?client_id="+t+"&redirect_uri="+encodeURIComponent([window.location.protocol,"//",window.location.host,window.location.pathname].join(""))+"&scope=playlist-read-private%20playlist-read-collaborative%20user-library-read&response_type=token&show_dialog="+e}},{key:"render",value:function(){return Object(n.jsxs)(k.a,{id:"loginButton",type:"submit",variant:"outline-secondary",size:"lg",onClick:this.authorize,children:[Object(n.jsx)(y.a,{icon:["far","check-circle"],size:"sm"})," Get Started"]})}}]),a}(s.a.Component),L=a(203),_=a(23),N=function(){function t(e,a,n,r){Object(j.a)(this,t),this.PLAYLIST_LIMIT=50,this.SEARCH_LIMIT=20,this.userId=void 0,this.accessToken=void 0,this.onPlaylistsLoadingStarted=void 0,this.onPlaylistsLoadingDone=void 0,this.data=void 0,this.likedTracksPlaylist=void 0,this.dataInitialized=!1,this.accessToken=e,this.userId=a,this.onPlaylistsLoadingStarted=n,this.onPlaylistsLoadingDone=r,this.data=[],this.likedTracksPlaylist=null}return Object(x.a)(t,[{key:"total",value:function(){var t=Object(w.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dataInitialized){t.next=3;break}return t.next=3,this.loadSlice();case 3:return t.abrupt("return",this.data.length);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"slice",value:function(){var t=Object(w.a)(O.a.mark((function t(e,a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadSlice(e,a);case 2:return t.next=4,this.loadLikedTracksPlaylist();case 4:if(0!==e){t.next=8;break}return t.abrupt("return",[this.likedTracksPlaylist].concat(Object(_.a)(this.data.slice(e,a))));case 8:return t.abrupt("return",this.data.slice(e,a));case 9:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"all",value:function(){var t=Object(w.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadAll();case 2:return t.next=4,this.loadLikedTracksPlaylist();case 4:return t.abrupt("return",[this.likedTracksPlaylist].concat(Object(_.a)(this.data)));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"search",value:function(){var t=Object(w.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadAll();case 2:return t.abrupt("return",this.data.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).slice(0,this.SEARCH_LIMIT));case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"loadAll",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.onPlaylistsLoadingStarted&&this.onPlaylistsLoadingStarted(),t.next=3,this.loadSlice();case 3:e=this.PLAYLIST_LIMIT;case 4:if(!(e<this.data.length)){t.next=10;break}return t.next=7,this.loadSlice(e,e+this.PLAYLIST_LIMIT);case 7:e+=this.PLAYLIST_LIMIT,t.next=4;break;case 10:this.onPlaylistsLoadingDone&&this.onPlaylistsLoadingDone();case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadSlice",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e,a,n,r,s,i,c,o=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=o.length>0&&void 0!==o[0]?o[0]:0,n=o.length>1&&void 0!==o[1]?o[1]:a+this.PLAYLIST_LIMIT,!this.dataInitialized){t.next=6;break}if(0!==(r=this.data.slice(a,n)).filter((function(t){return!t})).length){t.next=6;break}return t.abrupt("return",r);case 6:return s="https://api.spotify.com/v1/users/".concat(this.userId,"/playlists?offset=").concat(a,"&limit=").concat(n-a),t.next=9,A(s,this.accessToken);case 9:i=t.sent,c=i.data,this.dataInitialized||(this.data=Array(c.total).fill(null),this.dataInitialized=!0),(e=this.data).splice.apply(e,[a,c.items.length].concat(Object(_.a)(c.items)));case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadLikedTracksPlaylist",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e,a,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===this.likedTracksPlaylist){t.next=2;break}return t.abrupt("return");case 2:return e="https://api.spotify.com/v1/users/".concat(this.userId,"/tracks"),t.next=5,A(e,this.accessToken);case 5:a=t.sent,n=a.data,this.likedTracksPlaylist={id:"liked",name:"Liked",public:!1,collaborative:!1,owner:{id:this.userId,display_name:this.userId,uri:"spotify:user:"+this.userId},tracks:{href:"https://api.spotify.com/v1/me/tracks",limit:n.limit,total:n.total},uri:"spotify:user:"+this.userId+":saved"};case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),z=(a(148),a(201)),M=a(202),R=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).includeArtistsDataCheck=s.a.createRef(),t.includeAudioFeaturesDataCheck=s.a.createRef(),t.state={spin:!1},t.handleCheckClick=function(e){var a,n;(e.stopPropagation(),"INPUT"===e.target.nodeName)&&t.props.onConfigChanged({includeArtistsData:(null===(a=t.includeArtistsDataCheck.current)||void 0===a?void 0:a.checked)||!1,includeAudioFeaturesData:(null===(n=t.includeAudioFeaturesDataCheck.current)||void 0===n?void 0:n.checked)||!1})},t}return Object(x.a)(a,[{key:"spin",value:function(t){this.setState({spin:t})}},{key:"render",value:function(){return Object(n.jsxs)(z.a,{children:[Object(n.jsx)(z.a.Toggle,{variant:"link",children:Object(n.jsx)(y.a,{icon:["fas","cog"],size:"lg",spin:this.state.spin})}),Object(n.jsxs)(z.a.Menu,{align:"right",children:[Object(n.jsx)(z.a.Item,{onClickCapture:this.handleCheckClick,as:"div",children:Object(n.jsx)(M.a.Check,{id:"config-include-artists-data",type:"switch",label:"Include artists data",ref:this.includeArtistsDataCheck})}),Object(n.jsx)(z.a.Item,{onClickCapture:this.handleCheckClick,as:"div",children:Object(n.jsx)(M.a.Check,{id:"config-include-audio-features-data",type:"switch",label:"Include audio features data",ref:this.includeAudioFeaturesDataCheck})})]})]})}}]),a}(s.a.Component),F=(a(151),a(200)),B=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).searchField=s.a.createRef(),t.state={searchSubmitted:!1,query:""},t.handleKeyDown=function(e){e.stopPropagation(),"Enter"===e.key?(t.submitSearch(),e.preventDefault()):"Escape"===e.key&&t.cancelSearch()},t.handleChange=function(e){t.setState({query:e.target.value})},t.submitSearch=function(){t.state.query.length>0&&t.setState({searchSubmitted:!0},(function(){t.props.onPlaylistSearch(t.state.query)}))},t.cancelSearch=function(){t.props.onPlaylistSearchCancel().then((function(){t.clear(),t.searchField.current&&t.searchField.current.blur()}))},t}return Object(x.a)(a,[{key:"clear",value:function(){var t=this;this.setState({searchSubmitted:!1,query:""},(function(){t.searchField.current&&(t.searchField.current.value="")}))}},{key:"render",value:function(){var t=this.state.searchSubmitted?Object(n.jsx)(y.a,{icon:["fas","times"],size:"sm",onClick:this.cancelSearch,className:"closeIcon"}):Object(n.jsx)(y.a,{icon:["fas","search"],size:"sm",onClick:this.submitSearch,className:"searchIcon"}),e=this.state.query.length>0?"search queryPresent":"search";return Object(n.jsx)(M.a,{className:e,children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(M.a.Control,{type:"text",role:"searchbox",placeholder:"Search",size:"sm",onChange:this.handleChange,onKeyDown:this.handleKeyDown,ref:this.searchField,className:"border-right-0 border"}),Object(n.jsx)(F.a.Append,{children:Object(n.jsx)(F.a.Text,{className:"bg-transparent",children:t})})]})})}}]),a}(s.a.Component),U=a(40),q=function t(e){Object(j.a)(this,t),this.accessToken=void 0,this.accessToken=e},G=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t,n){var r;return Object(j.a)(this,a),(r=e.call(this,t)).playlist=void 0,r.playlistItems=[],r.playlist=n,r}return Object(x.a)(a,[{key:"dataLabels",value:function(){return["Track URI","Track Name","Artist URI","Artist Name","Album URI","Album Name","Album Release Date","Disc Number","Track Number","Track Duration (ms)","Explicit","Popularity","Added By","Added At"]}},{key:"tracks",value:function(){var t=Object(w.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getPlaylistItems();case 2:return t.abrupt("return",this.playlistItems.map((function(t){return t.track})));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"data",value:function(){var t=Object(w.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getPlaylistItems();case 2:return t.abrupt("return",new Map(this.playlistItems.map((function(t){return[t.track.id,[t.track.uri,t.track.name,t.track.artists.map((function(t){return t.uri})).join(", "),t.track.artists.map((function(t){return String(t.name).replace(/,/g,"\\,")})).join(", "),t.track.album.uri,t.track.album.name,t.track.album.release_date,t.track.disc_number,t.track.track_number,t.track.duration_ms,t.track.explicit,t.track.popularity,null==t.added_by?"":t.added_by.uri,t.added_at]]}))));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPlaylistItems",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e,a,n,r,s,i=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.playlistItems.length>0)){t.next=2;break}return t.abrupt("return",this.playlistItems);case 2:for(e=[],a=this.playlist.tracks.limit||100,n=0;n<this.playlist.tracks.total;n+=a)e.push("".concat(this.playlist.tracks.href.split("?")[0],"?offset=").concat(n,"&limit=").concat(a));return r=e.map((function(t){return A(t,i.accessToken)})),t.next=8,Promise.all(r);case 8:s=t.sent,this.playlistItems=s.flatMap((function(t){return t.data.items.filter((function(t){return t.track}))}));case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),a}(q),Z=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t,n){var r;return Object(j.a)(this,a),(r=e.call(this,t)).ARTIST_LIMIT=50,r.tracks=void 0,r.tracks=n,r}return Object(x.a)(a,[{key:"dataLabels",value:function(){return["Artist Genres"]}},{key:"data",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e,a,n,r,s,i,c=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=Array.from(new Set(this.tracks.flatMap((function(t){return t.artists.filter((function(t){return"artist"===t.type})).map((function(t){return t.id})).filter((function(t){return t}))})))),a=[],n=0;n<e.length;n+=this.ARTIST_LIMIT)a.push("https://api.spotify.com/v1/artists?ids=".concat(e.slice(n,n+this.ARTIST_LIMIT)));return r=a.map((function(t){return A(t,c.accessToken)})),t.next=6,Promise.all(r);case 6:return s=t.sent,i=new Map(s.flatMap((function(t){return t.data.artists})).map((function(t){return[t.id,t]}))),t.abrupt("return",new Map(this.tracks.map((function(t){return[t.id,[t.artists.map((function(t){return i.has(t.id)?i.get(t.id).genres.filter((function(t){return t})).join(","):""})).filter((function(t){return t})).join(",")]]}))));case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),a}(q),H=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t,n){var r;return Object(j.a)(this,a),(r=e.call(this,t)).AUDIO_FEATURES_LIMIT=100,r.tracks=void 0,r.tracks=n,r}return Object(x.a)(a,[{key:"dataLabels",value:function(){return["Danceability","Energy","Key","Loudness","Mode","Speechiness","Acousticness","Instrumentalness","Liveness","Valence","Tempo","Time Signature"]}},{key:"data",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e,a,n,r,s,i,c,o=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=this.tracks.map((function(t){return t.id})),a=[],n=0;n<e.length;n+=this.AUDIO_FEATURES_LIMIT)a.push("https://api.spotify.com/v1/audio-features?ids=".concat(e.slice(n,n+this.AUDIO_FEATURES_LIMIT)));return r=a.map((function(t){return A(t,o.accessToken)})),t.next=6,Promise.all(r);case 6:return s=t.sent.flatMap((function(t){return t.data.audio_features})),i=new Map(s.filter((function(t){return t})).map((function(t){return[t.id,[t.danceability,t.energy,t.key,t.loudness,t.mode,t.speechiness,t.acousticness,t.instrumentalness,t.liveness,t.valence,t.tempo,t.time_signature]]}))),c=Array.from(i.keys()),e.filter((function(t){return!c.includes(t)})).forEach((function(t){i.set(t,["","","","","","","","","","","",""])})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),a}(q),K=function(){function t(e){Object(j.a)(this,t),this.playlist=void 0,this.columnNames=void 0,this.lineData=void 0,this.playlist=e,this.columnNames=[],this.lineData=new Map}return Object(x.a)(t,[{key:"addData",value:function(){var t=Object(w.a)(O.a.mark((function t(e){var a,n=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=this.columnNames).push.apply(a,Object(_.a)(e.dataLabels())),t.next=3,e.data();case 3:t.sent.forEach((function(t,e){var a;n.lineData.has(e)?(a=n.lineData.get(e)).push.apply(a,Object(_.a)(t)):n.lineData.set(e,t)}));case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"content",value:function(){var t=this,e="";return e+=this.columnNames.map(this.sanitize).join()+"\n",this.lineData.forEach((function(a,n){e+=a.map(t.sanitize).join(",")+"\n"})),e}},{key:"sanitize",value:function(t){return'"'+String(t).replace(/"/g,'""')+'"'}}]),t}(),Y=function(){function t(e,a,n){Object(j.a)(this,t),this.accessToken=void 0,this.playlist=void 0,this.config=void 0,this.accessToken=e,this.playlist=a,this.config=n}return Object(x.a)(t,[{key:"export",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.csvData().then((function(t){var a=new Blob([t],{type:"text/csv;charset=utf-8"});Object(U.saveAs)(a,e.fileName(),!0)})));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"csvData",value:function(){var t=Object(w.a)(O.a.mark((function t(){var e,a,n,r,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new K(this.playlist),a=new G(this.accessToken,this.playlist),t.next=4,e.addData(a);case 4:return t.next=6,a.tracks();case 6:if(n=t.sent,!this.config.includeArtistsData){t.next=11;break}return r=new Z(this.accessToken,n),t.next=11,e.addData(r);case 11:if(!this.config.includeAudioFeaturesData){t.next=15;break}return s=new H(this.accessToken,n),t.next=15,e.addData(s);case 15:return a.tracks(),t.abrupt("return",e.content());case 17:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fileName",value:function(){return this.playlist.name.replace(/[\x00-\x1F\x7F/\\<>:;"|=,.?*[\] ]+/g,"_").toLowerCase()+".csv"}}]),t}(),J=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).exportPlaylist=function(){new Y(t.props.accessToken,t.props.playlist,t.props.config).export().catch(D)},t}return Object(x.a)(a,[{key:"renderTickCross",value:function(t){return t?Object(n.jsx)(y.a,{icon:["far","check-circle"],size:"sm"}):Object(n.jsx)(y.a,{icon:["far","times-circle"],size:"sm",style:{color:"#ECEBE8"}})}},{key:"renderIcon",value:function(t){return"Liked"===t.name?Object(n.jsx)(y.a,{icon:["far","heart"],style:{color:"red"}}):Object(n.jsx)(y.a,{icon:["fas","music"]})}},{key:"render",value:function(){var t=this.props.playlist;return null==t.uri?Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:this.renderIcon(t)}),Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{colSpan:"2",children:"This playlist is not supported"}),Object(n.jsx)("td",{children:this.renderTickCross(t.public)}),Object(n.jsx)("td",{children:this.renderTickCross(t.collaborative)}),Object(n.jsx)("td",{children:"\xa0"})]},t.name):Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:this.renderIcon(t)}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:t.uri,children:t.name})}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:t.owner.uri,children:t.owner.display_name})}),Object(n.jsx)("td",{children:t.tracks.total}),Object(n.jsx)("td",{children:this.renderTickCross(t.public)}),Object(n.jsx)("td",{children:this.renderTickCross(t.collaborative)}),Object(n.jsx)("td",{className:"text-right",children:Object(n.jsxs)(k.a,{type:"submit",variant:"primary",size:"xs",onClick:this.exportPlaylist,className:"text-nowrap",children:[Object(n.jsx)(y.a,{icon:["fas","download"],size:"sm"})," Export"]})})]},t.uri)}}]),a}(s.a.Component),V=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).nextClick=function(e){e.preventDefault(),t.props.onPageChanged(t.props.currentPage+1)},t.prevClick=function(e){e.preventDefault(),t.props.onPageChanged(t.props.currentPage-1)},t.totalPages=function(){return Math.ceil(t.props.totalRecords/t.props.pageLimit)},t}return Object(x.a)(a,[{key:"render",value:function(){return Object(n.jsx)("nav",{className:"paginator text-right",children:Object(n.jsxs)("ul",{className:"pagination pagination-sm",children:[Object(n.jsx)("li",{className:this.props.currentPage<=1?"page-item disabled":"page-item",children:Object(n.jsx)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:this.prevClick,children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(n.jsx)("li",{className:this.props.currentPage>=this.totalPages()?"page-item disabled":"page-item",children:Object(n.jsx)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:this.nextClick,children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})}}]),a}(s.a.Component),Q=a(95),W=a(96),X=a.n(W),$=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).exportPlaylists=function(){t.export(t.props.accessToken,t.props.playlistsData,t.props.config).catch(D)},t}return Object(x.a)(a,[{key:"export",value:function(){var t=Object(w.a)(O.a.mark((function t(e,a,n){var r,s,i,c,o,l,u,h,p,d;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],s=[],t.next=4,a.all(this.props.onLoadedPlaylistCountChanged);case 4:i=t.sent,c=0,o=Object(Q.a)(i),t.prev=7,o.s();case 9:if((l=o.n()).done){t.next=21;break}return u=l.value,this.props.onPlaylistExportStarted(u.name,c),h=new Y(e,u,n),t.next=15,h.csvData();case 15:p=t.sent,r.push(h.fileName(u)),s.push(p),c++;case 19:t.next=9;break;case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(7),o.e(t.t0);case 26:return t.prev=26,o.f(),t.finish(26);case 29:this.props.onPlaylistsExportDone(),d=new X.a,s.forEach((function(t,e){d.file(r[e],t)})),d.generateAsync({type:"blob"}).then((function(t){Object(U.saveAs)(t,"spotify_playlists.zip")}));case 33:case"end":return t.stop()}}),t,this,[[7,23,26,29]])})));return function(e,a,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)(k.a,{type:"submit",variant:"outline-secondary",size:"xs",onClick:this.exportPlaylists,className:"text-nowrap",disabled:this.props.disabled,children:[Object(n.jsx)(y.a,{icon:["far","file-archive"]})," Export All"]})}}]),a}(s.a.Component),tt=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(t){var n;return Object(j.a)(this,a),(n=e.call(this,t)).PAGE_SIZE=20,n.userId=null,n.playlistsData=null,n.state={initialized:!1,searching:!1,playlists:[],playlistCount:0,likedSongs:{limit:0,count:0},currentPage:1,progressBar:{show:!1,label:"",value:0},config:{includeArtistsData:!1,includeAudioFeaturesData:!1}},n.handlePlaylistSearch=function(){var t=Object(w.a)(O.a.mark((function t(e){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=4;break}n.handlePlaylistSearchCancel(),t.next=9;break;case 4:return t.next=6,n.playlistsData.search(e).catch(D);case 6:a=t.sent,n.setState({searching:!0,playlists:a,playlistCount:a.length,currentPage:1}),a.length===n.playlistsData.SEARCH_LIMIT?n.setSubtitle("First ".concat(a.length,' results with "').concat(e,'" in playlist name')):n.setSubtitle("".concat(a.length,' results with "').concat(e,'" in playlist name'));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.handlePlaylistSearchCancel=function(){return n.loadCurrentPlaylistPage().catch(D)},n.loadCurrentPlaylistPage=Object(w.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.playlistSearch.current&&n.playlistSearch.current.clear(),t.next=3,n.playlistsData.slice((n.state.currentPage-1)*n.PAGE_SIZE,(n.state.currentPage-1)*n.PAGE_SIZE+n.PAGE_SIZE).catch(D);case 3:return e=t.sent,t.t0=n,t.t1=e,t.next=8,n.playlistsData.total();case 8:t.t2=t.sent,t.t3={initialized:!0,searching:!1,playlists:t.t1,playlistCount:t.t2},t.t4=function(){var t=(n.state.currentPage-1)*n.PAGE_SIZE+1,e=Math.min(t+n.PAGE_SIZE-1,n.state.playlistCount);n.setSubtitle("".concat(t,"-").concat(e," of ").concat(n.state.playlistCount," playlists for ").concat(n.userId))},t.t0.setState.call(t.t0,t.t3,t.t4);case 12:case"end":return t.stop()}}),t)}))),n.handlePlaylistsLoadingStarted=function(){n.configDropdown.current.spin(!0)},n.handlePlaylistsLoadingDone=function(){n.configDropdown.current.spin(!1)},n.handlePlaylistsExportDone=function(){n.setState({progressBar:{show:!0,label:"Done!",value:n.state.playlistCount}})},n.handlePlaylistExportStarted=function(t,e){n.setState({progressBar:{show:!0,label:"Exporting ".concat(t,"..."),value:e}})},n.handleConfigChanged=function(t){n.setState({config:t})},n.handlePageChanged=function(t){try{n.setState({currentPage:t},n.loadCurrentPlaylistPage)}catch(e){D(e)}},n.configDropdown=s.a.createRef(),n.playlistSearch=s.a.createRef(),t.config&&(n.state.config=t.config),n}return Object(x.a)(a,[{key:"setSubtitle",value:function(t){null!==document.getElementById("subtitle")&&(document.getElementById("subtitle").textContent=t)}},{key:"componentDidMount",value:function(){var t=Object(w.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A("https://api.spotify.com/v1/me",this.props.accessToken).then((function(t){return t.data.id}));case 3:return this.userId=t.sent,this.playlistsData=new N(this.props.accessToken,this.userId,this.handlePlaylistsLoadingStarted,this.handlePlaylistsLoadingDone),t.next=7,this.loadCurrentPlaylistPage();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),D(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=Object(n.jsx)(L.a,{striped:!0,variant:"primary",animated:this.state.progressBar.value<this.state.playlistCount,now:this.state.progressBar.value,max:this.state.playlistCount,label:this.state.progressBar.label});return this.state.initialized?Object(n.jsxs)("div",{id:"playlists",children:[Object(n.jsxs)("div",{id:"playlistsHeader",children:[Object(n.jsx)(V,{currentPage:this.state.currentPage,pageLimit:this.PAGE_SIZE,totalRecords:this.state.playlistCount,onPageChanged:this.handlePageChanged}),Object(n.jsx)(B,{onPlaylistSearch:this.handlePlaylistSearch,onPlaylistSearchCancel:this.handlePlaylistSearchCancel,ref:this.playlistSearch}),Object(n.jsx)(R,{onConfigChanged:this.handleConfigChanged,ref:this.configDropdown}),this.state.progressBar.show&&e]}),Object(n.jsxs)("table",{className:"table table-hover table-sm",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{style:{width:"30px"}}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{style:{width:"150px"},children:"Owner"}),Object(n.jsx)("th",{style:{width:"100px"},children:"Tracks"}),Object(n.jsx)("th",{style:{width:"120px"},children:"Public?"}),Object(n.jsx)("th",{style:{width:"120px"},children:"Collaborative?"}),Object(n.jsx)("th",{style:{width:"100px"},className:"text-right",children:Object(n.jsx)($,{accessToken:this.props.accessToken,onPlaylistsExportDone:this.handlePlaylistsExportDone,onPlaylistExportStarted:this.handlePlaylistExportStarted,playlistsData:this.playlistsData,config:this.state.config,disabled:this.state.searching})})]})}),Object(n.jsx)("tbody",{children:this.state.playlists.map((function(e,a){return Object(n.jsx)(J,{playlist:e,accessToken:t.props.accessToken,config:t.state.config},e.id)}))})]}),Object(n.jsx)("div",{id:"playlistsFooter",children:Object(n.jsx)(V,{currentPage:this.state.currentPage,pageLimit:this.PAGE_SIZE,totalRecords:this.state.playlistCount,onPageChanged:this.handlePageChanged})})]}):Object(n.jsx)("div",{className:"spinner","data-testid":"playlistTableSpinner"})}}]),a}(s.a.Component),et=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).handleClick=function(){window.location.href="".concat(window.location.href.split("#")[0],"?change_user=true")},t}return Object(x.a)(a,[{key:"render",value:function(){return Object(n.jsx)(k.a,{id:"logoutButton",type:"submit",variant:"link",size:"lg",onClick:this.handleClick,title:"Change user",children:Object(n.jsx)(y.a,{icon:["fas","sign-out-alt"],size:"lg"})})}}]),a}(s.a.Component);var at=function(){var t,e=new URLSearchParams(window.location.hash.substring(1));return t=""!==S("rate_limit_message")?Object(n.jsxs)("div",{id:"rateLimitMessage",className:"lead",children:[Object(n.jsx)("p",{children:Object(n.jsx)(y.a,{icon:["fas","bolt"],style:{fontSize:"50px",marginBottom:"20px"}})}),Object(n.jsxs)("p",{children:["Oops, Exportify has encountered a ",Object(n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://developer.spotify.com/web-api/user-guide/#rate-limiting",children:"rate limiting"})," error while using the Spotify API. This might be because of the number of users currently exporting playlists, or perhaps because you have too many playlists to export all at once. Try ",Object(n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/watsonbox/exportify/issues/6#issuecomment-110793132",children:"creating your own"})," Spotify application. If that doesn't work, please add a comment to ",Object(n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/watsonbox/exportify/issues/6",children:"this issue"})," where possible resolutions are being discussed."]}),Object(n.jsx)("p",{style:{marginTop:"50px"},children:"It should still be possible to export individual playlists, particularly when using your own Spotify application."})]}):e.has("access_token")?Object(n.jsx)(tt,{accessToken:e.get("access_token")}):Object(n.jsx)(E,{}),Object(n.jsxs)("div",{className:"App container",children:[Object(n.jsxs)("header",{className:"App-header",children:[e.has("access_token")&&Object(n.jsx)(et,{}),Object(n.jsxs)("h1",{children:[Object(n.jsx)(y.a,{icon:["fab","spotify"],color:"#84BD00",size:"sm"})," ",Object(n.jsx)("a",{href:"/exportify",children:"Exportify"})]}),Object(n.jsx)("p",{id:"subtitle",className:"lead text-secondary",children:"Export your Spotify playlists."})]}),t]})},nt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,204)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),s(t),i(t)}))};a(156).shim(),c.a.start({apiKey:"a65916528275f084a1754a59797a36b3",plugins:[new l.a],redactedKeys:["Authorization"],enabledReleaseStages:["production","staging"],onError:function(t){t.request.url="[REDACTED]",t.originalError.isAxiosError&&(t.groupingHash=t.originalError.message)}});var rt=c.a.getPlugin("react").createErrorBoundary(s.a);h.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(rt,{children:Object(n.jsx)(at,{})})}),document.getElementById("root")),nt()}},[[196,1,2]]]);
//# sourceMappingURL=main.c7150ad7.chunk.js.map