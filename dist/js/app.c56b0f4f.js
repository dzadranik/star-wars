(function(e){function a(a){for(var n,l,c=a[0],s=a[1],i=a[2],m=0,f=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(t,l)&&t[l]&&f.push(t[l][0]),t[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);L&&L(a);while(f.length)f.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,c=1;c<o.length;c++){var s=o[c];0!==t[s]&&(n=!1)}n&&(r.splice(a--,1),e=l(l.s=o[0]))}return e}var n={},t={app:0},r=[];function l(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,a,o){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(o,n,function(a){return e[a]}.bind(null,n));return o},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/star-wars/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=a,c=c.slice();for(var i=0;i<c.length;i++)a(c[i]);var L=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"073b":function(e,a,o){},"10b4":function(e,a,o){},2828:function(e,a,o){},"449d":function(e,a,o){"use strict";var n=o("10b4"),t=o.n(n);t.a},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n,t=o("2b0e"),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"sw",attrs:{id:"app"}},[o("div",{staticClass:"sw__header"}),o("main",{staticClass:"sw__main"},[o("Search"),e.hasPersons?o("div",{staticClass:"sw__persons"},e._l(e.persons,(function(e){return o("Person",{key:e.id,attrs:{person:e}})})),1):e._e(),e.isLoading?o("Loader"):e._e(),!e.hasMorePersons||e.isSearch?o("div",{staticClass:"sw__all"},[o("svg",{attrs:{width:"60",height:"65",viewBox:"0 0 60 65",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M28.5506 5.26836L28.5506 24.8192L27.7834 24.8192L28.9222 29.376L27.6082 29.7036L26.3871 24.8192L24.0895 24.8192L27.1374 29.8994L25.9757 30.5957L22.5102 24.8192L21.1694 24.8192L21.1694 23.465L27.1963 23.465L27.1963 21.9461L25.0003 21.9461L25.0003 20.5919L27.1963 20.5919L27.1963 19.0729L25.0003 19.0729L25.0003 17.7187L27.1963 17.7187L27.1963 16.1998L25.0003 16.1998L25.0003 14.8455L27.1963 14.8455L27.1963 13.3266L25.0003 13.3266L25.0003 11.9724L27.1963 11.9724L27.1963 10.4534L25.0003 10.4534L25.0003 9.09923L27.1963 9.09923L27.1963 6.62257L25.4801 6.62257L19.3632 24.0329L19.254 24.1421L20.2117 25.0998L19.254 26.0576L18.2963 25.0998L16.5154 26.8807L24.7499 31.8216L24.0536 32.9833L15.7483 28.0003L14.462 31.1052L23.8577 33.454L23.5302 34.768L14.2126 32.4388L14.2126 34.9576L15.5677 34.9576L15.5677 36.3118L14.2126 36.3118L14.2126 38.8306L23.5302 36.5015L23.8577 37.8155L14.462 40.1643L15.7483 43.2692L24.0536 38.2862L24.7499 39.4479L16.5154 44.3888L18.2963 46.1696L19.254 45.2119L20.2117 46.1696L19.254 47.1274L21.0349 48.9082L25.9757 40.6738L27.1374 41.37L22.1544 49.6754L25.2594 50.9616L27.6082 41.5659L28.9222 41.8934L26.593 51.2111L29.1118 51.2111L29.1118 49.8559L30.466 49.8559L30.466 51.2111L32.9848 51.2111L30.6556 41.8934L31.9696 41.5659L34.3184 50.9616L37.4233 49.6754L32.4403 41.37L33.602 40.6738L38.5429 48.9082L40.3238 47.1274L39.3661 46.1696L40.3238 45.2119L41.2815 46.1696L43.0624 44.3888L34.8279 39.4479L35.5242 38.2862L43.8295 43.2692L45.1157 40.1643L35.72 37.8155L36.0476 36.5015L45.3652 38.8306L45.3652 36.3118L44.01 36.3118L44.01 34.9576L45.3652 34.9576L45.3652 32.4388L36.0476 34.768L35.72 33.454L45.1157 31.1052L43.8295 28.0003L35.5242 32.9833L34.8279 31.8216L43.0624 26.8807L41.2815 25.0998L40.3238 26.0575L39.3661 25.0998L40.3238 24.1421L40.2146 24.0329L34.0977 6.62257L32.3814 6.62257L32.3814 9.09923L34.5775 9.09923L34.5775 10.4534L32.3814 10.4534L32.3814 11.9724L34.5775 11.9724L34.5775 13.3266L32.3814 13.3266L32.3814 14.8455L34.5775 14.8455L34.5775 16.1998L32.3814 16.1998L32.3814 17.7187L34.5775 17.7187L34.5775 19.0729L32.3814 19.0729L32.3814 20.5919L34.5775 20.5919L34.5775 21.9461L32.3814 21.9461L32.3814 23.465L38.4084 23.465L38.4084 24.8192L37.0675 24.8192L33.602 30.5957L32.4403 29.8994L35.4883 24.8192L33.1907 24.8192L31.9696 29.7036L30.6556 29.376L31.7943 24.8192L31.0272 24.8192L31.0272 5.26836L35.0573 5.26836L41.3907 23.2936L44.7288 26.6317L46.719 31.4366L46.719 39.8329L44.7288 44.6378L38.7919 50.5747L33.987 52.5648L25.5907 52.5648L20.7859 50.5747L14.849 44.6378L12.8588 39.8329L12.8588 31.4366L14.849 26.6317L18.1871 23.2936L24.5205 5.26836L28.5506 5.26836Z",fill:"white"}}),o("path",{attrs:{d:"M33.1409 32.2827C34.9893 34.1311 34.9893 37.1383 33.1409 38.9867C31.2925 40.8351 28.2853 40.8351 26.4369 38.9867C24.5885 37.1383 24.5885 34.1311 26.4369 32.2827C28.2853 30.4343 31.2925 30.4343 33.1409 32.2827ZM27.3946 38.029C28.7148 39.3492 30.863 39.3492 32.1832 38.029C33.5034 36.7088 33.5034 34.5606 32.1832 33.2404C30.863 31.9202 28.7148 31.9202 27.3946 33.2404C26.0744 34.5606 26.0744 36.7088 27.3946 38.029Z",fill:"white"}}),o("path",{attrs:{d:"M30.4664 19.2089L30.4664 20.311L29.112 20.311L29.112 19.2089L30.4664 19.2089Z",fill:"white"}}),o("rect",{attrs:{width:"13.6257",height:"2",transform:"matrix(-1 3.17865e-08 3.17865e-08 1 36.6051 55.1332)",fill:"#6EF6FF"}}),o("rect",{attrs:{opacity:"0.4",width:"11.1925",height:"2",transform:"matrix(-1 3.17865e-08 3.17865e-08 1 35.6317 59.0262)",fill:"#6EF6FF"}}),o("rect",{attrs:{opacity:"0.1",width:"8.75936",height:"2",transform:"matrix(-1 3.17865e-08 3.17865e-08 1 34.172 62.9193)",fill:"#6EF6FF"}})])]):e._e()],1),o("div",{staticClass:"sw__footer"},[e._v("STAR WARS CHARACTER Encyclopedia, 2019")]),e.isModalShow?o("Modal"):e._e()],1)},l=[],c=o("5530"),s=o("2f62"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoad,expression:"isLoad"}],staticClass:"person",on:{click:e.showModal}},[o("div",{staticClass:"person__avatar",style:e.background},[e._v(e._s(e.person.name[0]))]),o("div",{staticClass:"person__name"},[e._v(e._s(e.person.name))]),o("div",{staticClass:"person__species"},[e._v(e._s(e.species))])])},L=[],m=(o("b0c0"),o("8591")),f=function(e,a,o){var n;return function(){var t=this,r=arguments,l=function(){n=null,o||e.apply(t,r)},c=o&&!n;clearTimeout(n),n=setTimeout(l,a),c&&e.apply(t,r)}},d=function(e,a){return Math.floor(Math.random()*(a-e))+e},u=function(){var e=d(0,148);return m[e].color},h={name:"Person",props:{person:Object},data:function(){return{species:"",isLoad:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["getOtherValue"])),{},{background:function(){return"background-color: ".concat(u())}}),methods:Object(c["a"])(Object(c["a"])({},Object(s["c"])(["SHOW_MODAL"])),{},{showModal:function(){this.SHOW_MODAL({person:this.person,species:this.species,background:this.background})}}),mounted:function(){var e=this;if(this.person.species.length>0){var a=this.getOtherValue(this.person.species[0]);a.then((function(a){e.species=a.name,e.isLoad=!0}))}else this.isLoad="true"}},p=h,b=(o("eebd"),o("2877")),_=Object(b["a"])(p,i,L,!1,null,null,null),v=_.exports,g=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"search"},[o("label",{staticClass:"search__label",class:{"to-top":!e.isEmptyInput},attrs:{for:"search"}},[e._v("Search by name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"search__input",attrs:{id:"search"},domProps:{value:e.inputValue},on:{input:[function(a){a.target.composing||(e.inputValue=a.target.value)},e.searchPersons]}})])},w=[],O={name:"Search",data:function(){return{inputValue:""}},computed:{isEmptyInput:function(){return""===this.inputValue}},methods:Object(c["a"])(Object(c["a"])({},Object(s["c"])(["SEARCH_PERSONS"])),{},{searchPersons:function(){f(this.SEARCH_PERSONS,900)(this.inputValue);//!!!
}})},y=O,C=(o("875b"),Object(b["a"])(y,g,w,!1,null,null,null)),k=C.exports,j=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"loader"},[o("svg",{attrs:{width:"60",height:"65",viewBox:"0 0 60 65",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M28.5506 5.26836L28.5506 24.8192L27.7834 24.8192L28.9222 29.376L27.6082 29.7036L26.3871 24.8192L24.0895 24.8192L27.1374 29.8994L25.9757 30.5957L22.5102 24.8192L21.1694 24.8192L21.1694 23.465L27.1963 23.465L27.1963 21.9461L25.0003 21.9461L25.0003 20.5919L27.1963 20.5919L27.1963 19.0729L25.0003 19.0729L25.0003 17.7187L27.1963 17.7187L27.1963 16.1998L25.0003 16.1998L25.0003 14.8455L27.1963 14.8455L27.1963 13.3266L25.0003 13.3266L25.0003 11.9724L27.1963 11.9724L27.1963 10.4534L25.0003 10.4534L25.0003 9.09923L27.1963 9.09923L27.1963 6.62257L25.4801 6.62257L19.3632 24.0329L19.254 24.1421L20.2117 25.0998L19.254 26.0576L18.2963 25.0998L16.5154 26.8807L24.7499 31.8216L24.0536 32.9833L15.7483 28.0003L14.462 31.1052L23.8577 33.454L23.5302 34.768L14.2126 32.4388L14.2126 34.9576L15.5677 34.9576L15.5677 36.3118L14.2126 36.3118L14.2126 38.8306L23.5302 36.5015L23.8577 37.8155L14.462 40.1643L15.7483 43.2692L24.0536 38.2862L24.7499 39.4479L16.5154 44.3888L18.2963 46.1696L19.254 45.2119L20.2117 46.1696L19.254 47.1274L21.0349 48.9082L25.9757 40.6738L27.1374 41.37L22.1544 49.6754L25.2594 50.9616L27.6082 41.5659L28.9222 41.8934L26.593 51.2111L29.1118 51.2111L29.1118 49.8559L30.466 49.8559L30.466 51.2111L32.9848 51.2111L30.6556 41.8934L31.9696 41.5659L34.3184 50.9616L37.4233 49.6754L32.4403 41.37L33.602 40.6738L38.5429 48.9082L40.3238 47.1274L39.3661 46.1696L40.3238 45.2119L41.2815 46.1696L43.0624 44.3888L34.8279 39.4479L35.5242 38.2862L43.8295 43.2692L45.1157 40.1643L35.72 37.8155L36.0476 36.5015L45.3652 38.8306L45.3652 36.3118L44.01 36.3118L44.01 34.9576L45.3652 34.9576L45.3652 32.4388L36.0476 34.768L35.72 33.454L45.1157 31.1052L43.8295 28.0003L35.5242 32.9833L34.8279 31.8216L43.0624 26.8807L41.2815 25.0998L40.3238 26.0575L39.3661 25.0998L40.3238 24.1421L40.2146 24.0329L34.0977 6.62257L32.3814 6.62257L32.3814 9.09923L34.5775 9.09923L34.5775 10.4534L32.3814 10.4534L32.3814 11.9724L34.5775 11.9724L34.5775 13.3266L32.3814 13.3266L32.3814 14.8455L34.5775 14.8455L34.5775 16.1998L32.3814 16.1998L32.3814 17.7187L34.5775 17.7187L34.5775 19.0729L32.3814 19.0729L32.3814 20.5919L34.5775 20.5919L34.5775 21.9461L32.3814 21.9461L32.3814 23.465L38.4084 23.465L38.4084 24.8192L37.0675 24.8192L33.602 30.5957L32.4403 29.8994L35.4883 24.8192L33.1907 24.8192L31.9696 29.7036L30.6556 29.376L31.7943 24.8192L31.0272 24.8192L31.0272 5.26836L35.0573 5.26836L41.3907 23.2936L44.7288 26.6317L46.719 31.4366L46.719 39.8329L44.7288 44.6378L38.7919 50.5747L33.987 52.5648L25.5907 52.5648L20.7859 50.5747L14.849 44.6378L12.8588 39.8329L12.8588 31.4366L14.849 26.6317L18.1871 23.2936L24.5205 5.26836L28.5506 5.26836Z",fill:"white"}}),o("path",{attrs:{d:"M33.1409 32.2827C34.9893 34.1311 34.9893 37.1383 33.1409 38.9867C31.2925 40.8351 28.2853 40.8351 26.4369 38.9867C24.5885 37.1383 24.5885 34.1311 26.4369 32.2827C28.2853 30.4343 31.2925 30.4343 33.1409 32.2827ZM27.3946 38.029C28.7148 39.3492 30.863 39.3492 32.1832 38.029C33.5034 36.7088 33.5034 34.5606 32.1832 33.2404C30.863 31.9202 28.7148 31.9202 27.3946 33.2404C26.0744 34.5606 26.0744 36.7088 27.3946 38.029Z",fill:"white"}}),o("path",{attrs:{d:"M30.4664 19.2089L30.4664 20.311L29.112 20.311L29.112 19.2089L30.4664 19.2089Z",fill:"white"}}),o("rect",{attrs:{width:"13.6257",height:"2",transform:"matrix(-1 3.17865e-08 3.17865e-08 1 36.6051 55.1332)",fill:"#6EF6FF"}}),o("rect",{attrs:{opacity:"0.4",width:"11.1925",height:"2",transform:"matrix(-1 3.17865e-08 3.17865e-08 1 35.6317 59.0262)",fill:"#6EF6FF"}}),o("rect",{attrs:{opacity:"0.1",width:"8.75936",height:"2",transform:"matrix(-1 3.17865e-08 3.17865e-08 1 34.172 62.9193)",fill:"#6EF6FF"}})])])},S=[],M={name:"Loader"},E=M,P=(o("449d"),Object(b["a"])(E,j,S,!1,null,null,null)),x=P.exports,V=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"modal__wrapper",on:{click:function(a){return a.target!==a.currentTarget?null:e.HIDE_MODAL()}}},[o("div",{staticClass:"modal__container"},[o("div",{staticClass:"modal__close",on:{click:function(a){return e.HIDE_MODAL()}}},[o("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{staticClass:"close",attrs:{d:"M1 13L13 1M13 13L1 1","stroke-width":"2","stroke-linecap":"round"}})])]),e.isLoad?e._e():[o("loader")],e.isLoad?[o("div",{staticClass:"modal__header"},[o("div",{staticClass:"modal__avatar",style:e.modalValue.background},[e._v(e._s(e.person.name[0]))]),o("div",{staticClass:"modal__name"},[e._v(e._s(e.person.name))])]),o("div",{staticClass:"modal__descriptions"},[o("div",{staticClass:"modal__description"},[o("div",{staticClass:"modal__item"},[o("div",{staticClass:"modal__item-name modal__item-name--birth"},[e._v("Birth year")]),o("div",{staticClass:"modal__item-value"},[e._v(e._s(e.person.birth_year))])]),o("div",{staticClass:"modal__item"},[o("div",{staticClass:"modal__item-name modal__item-name--species"},[e._v("Species")]),o("div",{staticClass:"modal__item-value"},[e._v(e._s(e.modalValue.species))])]),o("div",{staticClass:"modal__item"},[o("div",{staticClass:"modal__item-name modal__item-name--gender"},[e._v("Gender")]),o("div",{staticClass:"modal__item-value"},[e._v(e._s(e.person.gender))])])]),o("div",{staticClass:"modal__description"},[o("div",{staticClass:"modal__item"},[o("div",{staticClass:"modal__item-name modal__item-name--home"},[e._v("Homeworld")]),o("div",{staticClass:"modal__item-value"},[e._v(e._s(e.homeworld))])]),o("div",{staticClass:"modal__item"},[o("div",{staticClass:"modal__item-name modal__item-name--films"},[e._v("Films")]),o("div",{staticClass:"modal__item-value"},[e._l(e.films,(function(a){return[e._v(e._s(a)),o("br")]}))],2)])])])]:e._e()],2)])},F=[],A=(o("d3b7"),o("3ca3"),o("ddb0"),{name:"Modal",components:{Loader:x},data:function(){return{homeworld:"",films:[],isLoad:!1}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(s["d"])(["modalValue"])),Object(s["b"])(["getOtherValue"])),{},{person:function(){return this.modalValue.person}}),methods:Object(c["a"])({},Object(s["c"])(["HIDE_MODAL"])),beforeMount:function(){var e=this,a=[];if(this.person.homeworld.length>0){var o=this.getOtherValue(this.person.homeworld);a.push(o.then((function(a){return e.homeworld=a.name})))}if(this.person.films.length>0)for(var n=0;n<this.person.films.length;n++){var t=this.getOtherValue(this.person.films[n]);a.push(t.then((function(a){return e.films.push(a.title)})))}Promise.all(a).then((function(){return e.isLoad=!0}))}}),D=A,H=(o("e72f"),Object(b["a"])(D,V,F,!1,null,null,null)),R=H.exports,N={name:"App",components:{Person:v,Loader:x,Search:k,Modal:R},computed:Object(c["a"])(Object(c["a"])({},Object(s["d"])(["persons","isLoading","hasMorePersons","isModalShow","isSearch"])),{},{hasPersons:function(){return this.persons.length>0}}),methods:Object(c["a"])({},Object(s["c"])(["LOAD_PERSONS"])),mounted:function(){var e=this.LOAD_PERSONS;e(),window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight>=document.documentElement.offsetHeight-10&&e()}))}},q=N,T=(o("cf25"),Object(b["a"])(q,r,l,!1,null,null,null)),Z=T.exports,I=o("ade3"),$=o("2909"),B="LOAD_PERSONS",W="SEARCH_PERSONS",J="SHOW_MODAL",z="HIDE_MODAL",G=(o("ac1f"),o("5319"),function(e){return fetch("https://swapi.dev/api/people/?page=".concat(e)).then((function(e){return e.json()}))}),K=function(e){return fetch("https://swapi.dev/api/people/?search=".concat(e)).then((function(e){return e.json()}))},Q=function(e){var a=e.replace("http:/","https:/");return fetch(a).then((function(e){return e.json()}))};t["a"].use(s["a"]);var U=new s["a"].Store({state:{isLoading:!0,isSearch:!1,hasMorePersons:!0,pageNumber:1,isModalShow:!1,modalValue:{},persons:[]},getters:{getOtherValue:function(){return function(e){return Q(e).then((function(e){return e}))}}},mutations:(n={},Object(I["a"])(n,B,(function(e){e.hasMorePersons&&!e.isSearch&&(e.isLoading=!0,G(e.pageNumber).then((function(a){var o;(o=e.persons).push.apply(o,Object($["a"])(a.results)),e.persons.length!==a.count?e.pageNumber++:e.hasMorePersons=!1})).catch((function(e){return console.log(e)})).finally((function(){e.isLoading=!1})))})),Object(I["a"])(n,W,(function(e,a){e.isSearch=""!==a,K(a).then((function(a){e.persons=a.results}))})),Object(I["a"])(n,J,(function(e,a){e.isModalShow=!0,e.modalValue=a})),Object(I["a"])(n,z,(function(e){e.isModalShow=!1,e.modalValue={}})),n)});t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(Z)},store:U}).$mount("#app")},8591:function(e){e.exports=JSON.parse('[{"name":"aliceblue","color":"#f0f8ff"},{"name":"antiquewhite","color":"#faebd7"},{"name":"aqua","color":"#00ffff"},{"name":"aquamarine","color":"#7fffd4"},{"name":"azure","color":"#f0ffff"},{"name":"beige","color":"#f5f5dc"},{"name":"bisque","color":"#ffe4c4"},{"name":"black","color":"#000000"},{"name":"blanchedalmond","color":"#ffebcd"},{"name":"blue","color":"#0000ff"},{"name":"blueviolet","color":"#8a2be2"},{"name":"brown","color":"#a52a2a"},{"name":"burlywood","color":"#deb887"},{"name":"cadetblue","color":"#5f9ea0"},{"name":"chartreuse","color":"#7fff00"},{"name":"chocolate","color":"#d2691e"},{"name":"coral","color":"#ff7f50"},{"name":"cornflowerblue","color":"#6495ed"},{"name":"cornsilk","color":"#fff8dc"},{"name":"crimson","color":"#dc143c"},{"name":"cyan","color":"#00ffff"},{"name":"darkblue","color":"#00008b"},{"name":"darkcyan","color":"#008b8b"},{"name":"darkgoldenrod","color":"#b8860b"},{"name":"darkgray","color":"#a9a9a9"},{"name":"darkgreen","color":"#006400"},{"name":"darkgrey","color":"#a9a9a9"},{"name":"darkkhaki","color":"#bdb76b"},{"name":"darkmagenta","color":"#8b008b"},{"name":"darkolivegreen","color":"#556b2f"},{"name":"darkorange","color":"#ff8c00"},{"name":"darkorchid","color":"#9932cc"},{"name":"darkred","color":"#8b0000"},{"name":"darksalmon","color":"#e9967a"},{"name":"darkseagreen","color":"#8fbc8f"},{"name":"darkslateblue","color":"#483d8b"},{"name":"darkslategray","color":"#2f4f4f"},{"name":"darkslategrey","color":"#2f4f4f"},{"name":"darkturquoise","color":"#00ced1"},{"name":"darkviolet","color":"#9400d3"},{"name":"deeppink","color":"#ff1493"},{"name":"deepskyblue","color":"#00bfff"},{"name":"dimgray","color":"#696969"},{"name":"dimgrey","color":"#696969"},{"name":"dodgerblue","color":"#1e90ff"},{"name":"firebrick","color":"#b22222"},{"name":"floralwhite","color":"#fffaf0"},{"name":"forestgreen","color":"#228b22"},{"name":"fuchsia","color":"#ff00ff"},{"name":"gainsboro","color":"#dcdcdc"},{"name":"ghostwhite","color":"#f8f8ff"},{"name":"goldenrod","color":"#daa520"},{"name":"gold","color":"#ffd700"},{"name":"gray","color":"#808080"},{"name":"green","color":"#008000"},{"name":"greenyellow","color":"#adff2f"},{"name":"grey","color":"#808080"},{"name":"honeydew","color":"#f0fff0"},{"name":"hotpink","color":"#ff69b4"},{"name":"indianred","color":"#cd5c5c"},{"name":"indigo","color":"#4b0082"},{"name":"ivory","color":"#fffff0"},{"name":"khaki","color":"#f0e68c"},{"name":"lavenderblush","color":"#fff0f5"},{"name":"lavender","color":"#e6e6fa"},{"name":"lawngreen","color":"#7cfc00"},{"name":"lemonchiffon","color":"#fffacd"},{"name":"lightblue","color":"#add8e6"},{"name":"lightcoral","color":"#f08080"},{"name":"lightcyan","color":"#e0ffff"},{"name":"lightgoldenrodyellow","color":"#fafad2"},{"name":"lightgray","color":"#d3d3d3"},{"name":"lightgreen","color":"#90ee90"},{"name":"lightgrey","color":"#d3d3d3"},{"name":"lightpink","color":"#ffb6c1"},{"name":"lightsalmon","color":"#ffa07a"},{"name":"lightseagreen","color":"#20b2aa"},{"name":"lightskyblue","color":"#87cefa"},{"name":"lightslategray","color":"#778899"},{"name":"lightslategrey","color":"#778899"},{"name":"lightsteelblue","color":"#b0c4de"},{"name":"lightyellow","color":"#ffffe0"},{"name":"lime","color":"#00ff00"},{"name":"limegreen","color":"#32cd32"},{"name":"linen","color":"#faf0e6"},{"name":"magenta","color":"#ff00ff"},{"name":"maroon","color":"#800000"},{"name":"mediumaquamarine","color":"#66cdaa"},{"name":"mediumblue","color":"#0000cd"},{"name":"mediumorchid","color":"#ba55d3"},{"name":"mediumpurple","color":"#9370db"},{"name":"mediumseagreen","color":"#3cb371"},{"name":"mediumslateblue","color":"#7b68ee"},{"name":"mediumspringgreen","color":"#00fa9a"},{"name":"mediumturquoise","color":"#48d1cc"},{"name":"mediumvioletred","color":"#c71585"},{"name":"midnightblue","color":"#191970"},{"name":"mintcream","color":"#f5fffa"},{"name":"mistyrose","color":"#ffe4e1"},{"name":"moccasin","color":"#ffe4b5"},{"name":"navajowhite","color":"#ffdead"},{"name":"navy","color":"#000080"},{"name":"oldlace","color":"#fdf5e6"},{"name":"olive","color":"#808000"},{"name":"olivedrab","color":"#6b8e23"},{"name":"orange","color":"#ffa500"},{"name":"orangered","color":"#ff4500"},{"name":"orchid","color":"#da70d6"},{"name":"palegoldenrod","color":"#eee8aa"},{"name":"palegreen","color":"#98fb98"},{"name":"paleturquoise","color":"#afeeee"},{"name":"palevioletred","color":"#db7093"},{"name":"papayawhip","color":"#ffefd5"},{"name":"peachpuff","color":"#ffdab9"},{"name":"peru","color":"#cd853f"},{"name":"pink","color":"#ffc0cb"},{"name":"plum","color":"#dda0dd"},{"name":"powderblue","color":"#b0e0e6"},{"name":"purple","color":"#800080"},{"name":"rebeccapurple","color":"#663399"},{"name":"red","color":"#ff0000"},{"name":"rosybrown","color":"#bc8f8f"},{"name":"royalblue","color":"#4169e1"},{"name":"saddlebrown","color":"#8b4513"},{"name":"salmon","color":"#fa8072"},{"name":"sandybrown","color":"#f4a460"},{"name":"seagreen","color":"#2e8b57"},{"name":"seashell","color":"#fff5ee"},{"name":"sienna","color":"#a0522d"},{"name":"silver","color":"#c0c0c0"},{"name":"skyblue","color":"#87ceeb"},{"name":"slateblue","color":"#6a5acd"},{"name":"slategray","color":"#708090"},{"name":"slategrey","color":"#708090"},{"name":"snow","color":"#fffafa"},{"name":"springgreen","color":"#00ff7f"},{"name":"steelblue","color":"#4682b4"},{"name":"tan","color":"#d2b48c"},{"name":"teal","color":"#008080"},{"name":"thistle","color":"#d8bfd8"},{"name":"tomato","color":"#ff6347"},{"name":"turquoise","color":"#40e0d0"},{"name":"violet","color":"#ee82ee"},{"name":"wheat","color":"#f5deb3"},{"name":"white","color":"#ffffff"},{"name":"whitesmoke","color":"#f5f5f5"},{"name":"yellow","color":"#ffff00"},{"name":"yellowgreen","color":"#9acd32"}]')},"875b":function(e,a,o){"use strict";var n=o("2828"),t=o.n(n);t.a},cf25:function(e,a,o){"use strict";var n=o("fea6"),t=o.n(n);t.a},e14d:function(e,a,o){},e72f:function(e,a,o){"use strict";var n=o("e14d"),t=o.n(n);t.a},eebd:function(e,a,o){"use strict";var n=o("073b"),t=o.n(n);t.a},fea6:function(e,a,o){}});
//# sourceMappingURL=app.c56b0f4f.js.map