(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{17:function(t,e,c){},26:function(t,e,c){},27:function(t,e,c){},28:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),a=c(18),i=c.n(a),s=(c(26),c(27),c(28),c(5)),j=c(9),o=c(16),d=c(6),u=c.p+"static/media/cat1.30069a47.jpg",l=c.p+"static/media/cat2.1adabed7.jpg",p=c.p+"static/media/cat3.6fb9c369.jpg",b=c.p+"static/media/cat4.73a5303e.jpg",f=c.p+"static/media/cat5.98f5e452.jpg",O=c.p+"static/media/cat6.82cea4e5.jpg",h=c.p+"static/media/cat7.53493124.jpg",x=c.p+"static/media/cat8.659e107b.jpg",m=c.p+"static/media/cat9.68c8f9db.jpg",g=c.p+"static/media/cat10.6bcfe261.jpg",v=c.p+"static/media/cat11.772ebe7e.jpg",y=c.p+"static/media/cat12.ffe3c2e5.jpg",N=c.p+"static/media/cat13.8e2cce16.jpg",k=c.p+"static/media/cat14.098d22bc.jpg",C=c.p+"static/media/cat15.b6e60d67.jpg",I=function(){var t=[29.99,39.99,49.99],e=0,c=[u,l,p,b,f,O,h,x,m,g,v,y,N,k,C].map((function(c,n){3===e&&(e=0);var r=t[e];return e++,{src:c,id:n,price:r}}));return c}(),w=c(0),P=r.a.createContext(),S=function(t){var e=Object(n.useState)(I),c=Object(d.a)(e,2),r=c[0],a=(c[1],Object(n.useState)([])),i=Object(d.a)(a,2),s=i[0],u=i[1];console.log(s);return Object(w.jsx)(P.Provider,{value:{products:r,addToCart:function(t,e){var c=r.find((function(e){return e.id===t}));u((function(n){var r=n.some((function(e){return e.id===t}));if(r){var a=s.find((function(e){return e.id===t}));e=a.quantity+=e}return[].concat(r?Object(o.a)(n.filter((function(e){return e.id!==t}))):Object(o.a)(n),[Object(j.a)(Object(j.a)({},c),{},{quantity:e})])}))},cartItems:s,removeFromCart:function(t){var e=s.filter((function(e){return e.id!==t}));u((function(){return e}))},emptyCart:function(){u((function(){return[]}))}},children:t.children})},T=function(){var t=Object(n.useContext)(P).cartItems;return Object(w.jsxs)("nav",{className:"header",children:[Object(w.jsx)(s.b,{to:"/",children:"Home"}),Object(w.jsx)(s.b,{to:"/store",children:"Store"}),Object(w.jsx)("div",{className:"cartIconWrap",children:Object(w.jsxs)(s.b,{to:"/cart",children:[Object(w.jsx)("i",{className:"ri-shopping-cart-line",children:" "}),0===t.length?"":t.length]})})]})},B=c(2),q=(c(17),c.p+"static/media/emptyCart.fd6bd057.png"),W=function(){var t=Object(n.useContext)(P),e=Object(B.f)(),c=t.cartItems.map((function(e){return Object(w.jsxs)("div",{className:"cartItem",children:[Object(w.jsx)("img",{alt:"cat",src:e.src}),Object(w.jsxs)("div",{className:"productQuantity",children:[Object(w.jsx)("i",{className:"ri-delete-bin-2-fill",onClick:function(){return t.removeFromCart(e.id)}}),Object(w.jsxs)("p",{children:["quantity: ",e.quantity]})]})]},e.id)}));return c.length>0?Object(w.jsxs)("div",{className:"cartWrap",children:[Object(w.jsx)("div",{className:"cartPage",children:c}),Object(w.jsxs)("div",{className:"checkOut",children:[Object(w.jsxs)("p",{children:["Total:"," ",function(){var e=0;return t.cartItems.forEach((function(t){for(var c=0;c<t.quantity;c++)e+=t.price})),e}().toLocaleString("en-GB",{style:"currency",currency:"GBP"})]}),Object(w.jsx)("button",{onClick:function(){setTimeout((function(){e.push("/thanks"),t.emptyCart()}),1e3)},children:"checkOut"})]})]}):Object(w.jsxs)("div",{className:"emptyCart",children:[Object(w.jsx)("p",{children:"Your cart is empty! Head to the store page to start shopping! "}),Object(w.jsx)("img",{alt:"empty cart cat",src:q})]})},G=c(15),E=c.n(G),H=c(21),A=(c(39),function(t){return Object(w.jsx)(s.b,{to:"/store/".concat(t.id),children:Object(w.jsx)("img",{alt:"cat",src:t.src})})}),D=function(){var t=Object(n.useContext)(P).products,e=Object(n.useState)(!0),c=Object(d.a)(e,2),r=c[0],a=c[1];Object(n.useEffect)((function(){var e=function(){var t=Object(H.a)(E.a.mark((function t(e){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.map((function(t){return new Promise((function(e,c){var n=new Image;n.src=t.src,n.onload=e(),n.onerror=c()}))}));case 2:return c=t.sent,t.next=5,Promise.all(c).then((function(){a(!1)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e(t)}),[t]);var i=t.map((function(t){return Object(w.jsx)(A,{src:t.src,id:t.id},t.id)}));return Object(w.jsx)("div",{className:"store",children:r?Object(w.jsx)("div",{}):i})},F=(c(40),function(){var t=Object(B.g)(),e=Object(n.useContext)(P),c=e.products,r=e.addToCart,a=Object(B.f)(),i=Object(n.useState)(1),s=Object(d.a)(i,2),j=s[0],o=s[1],u=c.find((function(e){return e.id===parseInt(t.id)}));return Object(w.jsx)("div",{className:"productDetail",children:Object(w.jsxs)("div",{className:"productInfo",children:[Object(w.jsxs)("div",{className:"detailWrap",children:[Object(w.jsx)("i",{class:"ri-arrow-left-fill",style:{position:"fixed",left:10,top:"50vh"},onClick:function(){t.id>0&&a.push("".concat(parseInt(t.id)-1))}}),Object(w.jsx)("img",{alt:"cat",src:u.src}),Object(w.jsx)("i",{class:"ri-arrow-right-fill",style:{position:"fixed",right:10,top:"50vh"},onClick:function(){t.id<14&&a.push("".concat(parseInt(t.id)+1))}})]}),Object(w.jsxs)("div",{className:"productText",children:[Object(w.jsx)("p",{children:u.price.toLocaleString("en-GB",{style:"currency",currency:"GBP"})}),Object(w.jsx)("button",{onClick:function(){return r(parseInt(t.id),j)},children:"Add to Cart"}),Object(w.jsxs)("div",{className:"amountWrap",children:[Object(w.jsx)("i",{className:"ri-indeterminate-circle-fill",onClick:function(){o((function(t){return t>1?t-1:t}))}}),Object(w.jsx)("p",{children:j}),Object(w.jsx)("i",{className:"ri-add-circle-fill",onClick:function(){o((function(t){return t+1}))}})]})]})]})})}),J=(c(41),function(){return Object(w.jsx)("div",{className:"footer",children:"Designed for the Odin Project"})}),L=c.p+"static/media/catBackground.3d099953.png",M=(c(42),function(){return Object(w.jsxs)("div",{className:"homePage",children:[Object(w.jsx)("p",{children:"Here at PawPrints we sell only the finest of cat photographs "})," ",Object(w.jsxs)("p",{children:["Take a look at our store page to find the purrfect artwork for your wall!"," "]}),Object(w.jsx)("img",{src:L})]})}),Q=c.p+"static/media/thanks.4a1f2a42.png",Y=function(){return Object(w.jsx)("div",{className:"thanksWrap",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:Q}),Object(w.jsx)("p",{children:"Thanks for your order!"})]})})};var z=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(T,{}),Object(w.jsxs)(B.c,{children:[Object(w.jsx)(B.a,{exact:!0,path:"/",children:Object(w.jsx)(M,{})}),Object(w.jsx)(B.a,{exact:!0,path:"/store",children:Object(w.jsx)(D,{})}),Object(w.jsx)(B.a,{exact:!0,path:"/store/:id",children:Object(w.jsx)(F,{})}),Object(w.jsx)(B.a,{path:"/cart",children:Object(w.jsx)(W,{})}),Object(w.jsx)(B.a,{path:"/thanks",children:Object(w.jsx)(Y,{})})]}),Object(w.jsx)(J,{})]})};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(S,{children:Object(w.jsx)(s.a,{basename:"/shopping-cart",children:Object(w.jsx)(z,{})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ad5dc4f8.chunk.js.map