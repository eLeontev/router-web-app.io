(this["webpackJsonprouter-web-app"]=this["webpackJsonprouter-web-app"]||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"DevicesList",(function(){return le}));var n,c,o=a(1),r=a.n(o),i=a(4),l=(a(224),a(12)),u=a(3),s=function(e,t){return"page-content ".concat(e," ").concat(t?"page-content__with-scroll":"")},b=r.a.memo((function(e){var t=e.children,a=e.classModifier,n=void 0===a?"":a,c=function(){var e=Object(o.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(o.useEffect)((function(){var e=function(){return n(Boolean(window.pageYOffset))};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[n]),a}();return r.a.createElement("section",{className:s(n,c)},t)})),d=a(64),m=a(0),p=a(10),f=a(15),O=!1,v="431",j={common:{value:0,unitId:"123"},upload:{value:0,unitId:"123"},download:{value:0,unitId:"123"}},g=a(36),E=a(49),w=O,h=v,L=j,S=L.common,N=L.download,y=L.upload,D=Object(f.a)(h),k=Object(f.a)(h),C=(n={},Object(m.a)(n,g.c.common,Object(f.a)(Object(p.a)({},S))),Object(m.a)(n,g.c.upload,Object(f.a)(Object(p.a)({},y))),Object(m.a)(n,g.c.download,Object(f.a)(Object(p.a)({},N))),n),_=(c={},Object(m.a)(c,g.c.common,Object(f.a)(Object(p.a)({},S))),Object(m.a)(c,g.c.upload,Object(f.a)(Object(p.a)({},y))),Object(m.a)(c,g.c.download,Object(f.a)(Object(p.a)({},N))),c),x=Object(f.a)(w),R=Object(f.a)(w),I=Object(f.b)((function(e){var t=e.get;return{filter:{default:t(D),input:t(k)},asymmetric:{default:t(x),input:t(R)},common:{default:t(C.common),input:t(_.common)},upload:{default:t(C.upload),input:t(_.upload)},download:{default:t(C.download),input:t(_.download)}}})),B=Object(f.b)((function(e){var t=(0,e.get)(I),a=t.filter,n=t.asymmetric,c=t.common,o=t.download,r=t.upload,i=a.default!==a.input,l=n.default!==n.input,u=[c,o,r].some((function(e){return e.default.value!==e.input.value||e.default.unitId!==e.input.unitId}));return i||l||u})),M=function(e){return Object(f.b)((function(t){var a=(0,t.get)(_[e]).value,n=Object(u.a)(E.d,2),c=n[0],o=n[1];return 0===a||a>=c&&a<=o}))},T={common:M(g.c.common),upload:M(g.c.upload),download:M(g.c.download)},V=Object(f.b)((function(e){var t=e.get,a=t(R),n=t(T.common),c=t(T.upload),o=t(T.download);return a?c&&o:n})),A=(a(225),a(226),a(28)),H=r.a.memo((function(e){var t=e.dropdownOptions,a=e.onChange,n=Object(o.useMemo)((function(){return(t.find((function(e){return e.isSelected}))||t[0]).id}),[t]),c=Object(o.useCallback)((function(e){var t=e.target.value;a(t)}),[a]);return r.a.createElement("select",{className:"dropdown",value:n,onChange:c},t.map((function(e){var t=e.id,a=e.label;return r.a.createElement("option",{key:t,value:t},a)})))})),K=r.a.memo((function(e){var t=e.dropdownOptions,a=e.onChange,n=e.value,c=e.classNameModifier,i=Object(o.useMemo)((function(){return(t.find((function(e){return e.isSelected}))||t[0]).id}),[t]),l=Object(o.useCallback)((function(e){var t=e.trim();a({value:parseFloat(t)||0,unitId:i})}),[a,i]),u=Object(o.useCallback)((function(e){a({value:Number(n),unitId:e})}),[n,a]);return r.a.createElement("section",{className:"dropdown-with-input ".concat(c)},r.a.createElement(A.a,{value:n,onChange:l,name:"dropdowm-input",className:"dropdown-with-input__input"}),r.a.createElement("label",{className:"dropdown-wrapper"},r.a.createElement(H,{dropdownOptions:t,onChange:u})))})),J=a(160),F=a(164),Y=a(162),q=a(7),z=function(e,t,a,n){var c=Object(i.useRecoilState)(e),r=Object(u.a)(c,2),l=r[0],s=r[1],b=Object(o.useMemo)((function(){return t.map((function(e){return e.label}))}),[t]),d=Object(q.c)([a].concat(Object(F.a)(b))),m=Object(Y.a)(d),p=m[0],f=m.slice(1),O=n(l);return{value:l,setState:s,dropdownOptions:Object(o.useMemo)((function(){return function(e,t,a){return e.map((function(e,n){var c=e.id;return{id:c,label:t[n],isSelected:c===a}}))}(t,f,O)}),[t,f,O]),i18nLabel:p}},G=function(e){var t=e.children,a=e.i18nLabel,n=e.isAligned;return r.a.createElement("section",{className:"setting-pair ".concat(n?" setting-pair__aligned":"")},r.a.createElement("p",{className:"page-text"},a),t)},P=function(e){return e},Q=r.a.memo((function(e){var t=e.label,a=z(k,E.a,t,P),n=a.i18nLabel,c=a.setState,o=a.dropdownOptions;return r.a.createElement(G,{i18nLabel:n},r.a.createElement(H,{onChange:c,dropdownOptions:o}))})),U=g.a.speedValueRangeErrorLabel,W=function(e){return e.unitId},X=r.a.memo((function(e){var t=e.speedStateKey,a=e.label,n=z(_[t],E.c,a,W),c=n.i18nLabel,o=n.setState,l=n.dropdownOptions,u=n.value,s=Object(i.useRecoilValue)(T[t]),b=Object(q.a)(U,E.d);return r.a.createElement(G,{i18nLabel:c},r.a.createElement(K,{value:u.value||"",onChange:o,dropdownOptions:l,classNameModifier:s?"":"invalid"}),s?null:r.a.createElement("p",{className:"page-text__error-inline"},b))})),Z=r.a.memo((function(e){var t=e.name,a=e.label,n=z(R,[],a,(function(){return""})),c=n.setState,o=n.i18nLabel,i=n.value;return r.a.createElement(G,{i18nLabel:o,isAligned:!0},r.a.createElement(J.b,{name:t,checked:i,onChange:function(){return c((function(e){return!e}))}}))})),$=a(163),ee=a(5),te=a(2),ae=r.a.memo((function(){var e=Object(i.useRecoilValue)(R),t=Object(q.b)(g.b.settingsDescriptionLabel);return r.a.createElement("section",{className:"settings"},r.a.createElement("p",{className:"page-text"},t),r.a.createElement("section",{className:"page-section"},r.a.createElement(Q,{label:te.a.internetSafety}),r.a.createElement(X,{speedStateKey:e?g.c.download:g.c.common,label:e?ee.a.download:g.b.speedLimitLabel}),r.a.createElement(Z,{name:"asymmetric",label:g.b.asymmetricLabel}),e?r.a.createElement(X,{speedStateKey:g.c.upload,label:ee.a.upload}):null))})),ne=r.a.memo((function(){var e=Object($.a)([g.b.displayDeviceSettingsLabel,g.b.hideDeviceSettingsLabel]),t=e.i18nLabels,a=e.isHidden,n=e.toggleDetailsVisibility,c=Object(u.a)(t,2),o=c[0],i=c[1];return r.a.createElement("section",{className:"devices-settings"},r.a.createElement(l.a,{buttonName:a?o:i,buttonHandler:n,className:"details-button"}),a?null:r.a.createElement(ae,null))})),ce=a(24),oe=function(e){return e.forEach((function(e){var t=e.state;return(0,e.set)(t)}))},re=a(6),ie=a(37),le=function(){var e=Object(i.useRecoilValue)(V),t=function(e){var t=Object(i.useRecoilValue)(e),a=Object(i.useRecoilState)(D),n=Object(u.a)(a,2),c=n[0],o=n[1],r=Object(i.useRecoilState)(k),l=Object(u.a)(r,2),s=l[0],b=l[1],d=Object(i.useRecoilState)(x),m=Object(u.a)(d,2),p=m[0],f=m[1],O=Object(i.useRecoilState)(R),v=Object(u.a)(O,2),j=v[0],g=v[1],E=Object(i.useRecoilState)(C.common),w=Object(u.a)(E,2),h=w[0],L=w[1],S=Object(i.useRecoilState)(_.common),N=Object(u.a)(S,2),y=N[0],I=N[1],B=Object(i.useRecoilState)(C.download),M=Object(u.a)(B,2),T=M[0],V=M[1],A=Object(i.useRecoilState)(_.download),H=Object(u.a)(A,2),K=H[0],J=H[1],F=Object(i.useRecoilState)(C.upload),Y=Object(u.a)(F,2),q=Y[0],z=Y[1],G=Object(i.useRecoilState)(_.upload),P=Object(u.a)(G,2),Q=P[0],U=P[1];return{isDirty:t,onSave:function(e){return function(){e(),oe([{set:o,state:s},{set:f,state:j},{set:L,state:y},{set:V,state:K},{set:z,state:Q}])}},onCancel:function(){return oe([{set:b,state:c},{set:g,state:p},{set:I,state:h},{set:J,state:T},{set:U,state:q}])}}}(B),a=t.isDirty,n=t.onCancel,c=t.onSave,s=Object(o.useContext)(ce.a).setModal,m=Object(q.d)([g.b.titleLabel,g.b.descriptionLabel,g.b.unregisteredDevicesTitleLabel,g.b.unregisteredDevicesDescriptionLabel,g.b.registeredDevicesTitleLabel,g.b.blockedDevicesDescriptionLabel,g.b.blockedDevicesTitleLabel,g.b.addDeviceButtonLabel,ie.a.saveButtonLabel,ie.a.cancelButtonLabel]);return r.a.createElement(b,{classModifier:"devices"},r.a.createElement("h1",{className:"page-title"},m.titleLabel),r.a.createElement("section",{className:"page-content-wrapper"},r.a.createElement("p",{className:"page-text"},m.descriptionLabel),r.a.createElement("h2",{className:"page-sub-title"},m.unregisteredDevicesTitleLabel),r.a.createElement("p",{className:"page-text"},m.unregisteredDevicesDescriptionLabel),r.a.createElement("hr",null),r.a.createElement(ne,null),r.a.createElement("h2",{className:"page-sub-title"},m.registeredDevicesTitleLabel),r.a.createElement("hr",null),r.a.createElement("h2",{className:"page-sub-title"},m.blockedDevicesTitleLabel),r.a.createElement("p",{className:"page-text"},m.blockedDevicesDescriptionLabel),r.a.createElement("hr",null),r.a.createElement(l.a,{className:"show-more-button",buttonHandler:function(){return s({type:re.b.registerDeviceType})},buttonName:m.addDeviceButtonLabel})),r.a.createElement(d.a,{onCancel:n,onSave:c((function(){return console.log("saved")})),isDirty:a,isValid:e,cancelButtonLabel:m.cancelButtonLabel,saveButtonLabel:m.saveButtonLabel}))};t.default=le},149:function(e,t,a){"use strict";function n(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}a.d(t,"a",(function(){return n}))},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(1),c=a.n(n),o=(a(161),function(e){return e?"checkbox__active":"checkbox__inactive"}),r=function(e){return e?"checkbox--bar__active":"checkbox--bar__inactive"},i=function(e){return e?"checkbox__disabled":"checkbox__enabled"},l=c.a.memo((function(e){var t=e.isActive,a=e.triggerCheckbox,n=e.isDisable;return c.a.createElement("section",{className:"checkbox ".concat(o(t)," ").concat(i(n))},c.a.createElement("span",{onClick:function(){return!n&&a(!t)},className:"checkbox--bar ".concat(r(t))}))})),u=c.a.memo((function(e){var t=e.name,a=e.checked,n=e.onChange;return c.a.createElement("input",{type:"checkbox",className:"simple-checkbox",name:t,checked:a,onChange:n})}))},161:function(e,t,a){},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(47),c=a(149),o=a(46),r=a(48);function i(e){return Object(n.a)(e)||Object(c.a)(e)||Object(o.a)(e)||Object(r.a)()}},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(3),c=a(1),o=a(7),r=function(e){var t=Object(c.useState)(!0),a=Object(n.a)(t,2),r=a[0],i=a[1];return{isHidden:r,i18nLabels:Object(o.c)(e),toggleDetailsVisibility:Object(c.useCallback)((function(){return i((function(e){return!e}))}),[i])}}},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(41);var c=a(149),o=a(46);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(c.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){}}]);
//# sourceMappingURL=4.5d7a95fb.chunk.js.map