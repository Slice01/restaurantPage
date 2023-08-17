(()=>{"use strict";function e(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("h1");d.textContent="The Greatest Restaurant",e.appendChild(t),t.appendChild(n),n.appendChild(d);const a=document.createElement("div");a.classList.add("container-outer");const c=document.createElement("div");c.classList.add("container-inner");const s=document.createElement("h2");s.classList.add("centered"),s.textContent="Review";const i=document.createElement("p");i.textContent='"This restaurant is the best ever. It serves all kinds of food from all over the world. It is absolutely delicious. I would recommend it over and over again!"';const o=document.createElement("p");o.setAttribute("id","customer"),o.textContent="- Johnny Hamburgers Periodical",e.appendChild(a),a.appendChild(c),c.appendChild(s),c.appendChild(i),c.appendChild(o);const l=document.createElement("div");l.classList.add("container-outer");const m=document.createElement("div");m.classList.add("container-inner","grid-container");const r=document.createElement("h2");r.classList.add("grid-header"),r.textContent="Hours";const p=document.createElement("h4");p.classList.add("item-name"),p.textContent="Sunday:";const h=document.createElement("h4");h.classList.add("item-listing"),h.textContent="9am - 8pm";const C=document.createElement("h4");C.classList.add("item-name"),C.textContent="Monday:";const u=document.createElement("h4");u.classList.add("item-listing"),u.textContent="11am - 9pm";const E=document.createElement("h4");E.classList.add("item-name"),E.textContent="Tuesday:";const L=document.createElement("h4");L.classList.add("item-listing"),L.textContent="11am - 9pm";const x=document.createElement("h4");x.classList.add("item-name"),x.textContent="Wednesday:";const g=document.createElement("h4");g.classList.add("item-listing"),g.textContent="11am - 9pm";const b=document.createElement("h4");b.classList.add("item-name"),b.textContent="Thursday:";const v=document.createElement("h4");v.classList.add("item-listing"),v.textContent="11am - 9pm";const y=document.createElement("h4");y.classList.add("item-name"),y.textContent="Friday:";const f=document.createElement("h4");f.classList.add("item-listing"),f.textContent="11am - 9pm";const T=document.createElement("h4");T.classList.add("item-name"),T.textContent="Saturday:";const B=document.createElement("h4");B.classList.add("item-listing"),B.textContent="8am - 11pm",e.appendChild(l),l.appendChild(m),m.appendChild(r),m.appendChild(p),m.appendChild(h),m.appendChild(C),m.appendChild(u),m.appendChild(E),m.appendChild(L),m.appendChild(x),m.appendChild(g),m.appendChild(b),m.appendChild(v),m.appendChild(y),m.appendChild(f),m.appendChild(T),m.appendChild(B);const k=document.createElement("div");k.classList.add("container-outer");const A=document.createElement("div");A.classList.add("container-inner");const S=document.createElement("h2");S.classList.add("centered"),S.textContent="Location";const H=document.createElement("p");H.classList.add("centered"),H.textContent="12345 Main Street, Mainland, WI",e.appendChild(k),k.appendChild(A),A.appendChild(S),A.appendChild(H)}function t(){switch(document.querySelectorAll(".tab").forEach((e=>e.classList.remove("current"))),this.id){case"homeTab":document.getElementById("homeTab").classList.add("current"),e();break;case"menuTab":document.getElementById("menuTab").classList.add("current"),function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("h1");d.textContent="Menu",e.appendChild(t),t.appendChild(n),n.appendChild(d);const a=document.createElement("div");a.classList.add("container-outer");const c=document.createElement("div");c.classList.add("container-inner","grid-container");const s=document.createElement("h2");s.classList.add("grid-header"),s.textContent="Entrees";const i=document.createElement("h4");i.classList.add("item-name"),i.textContent="Hamburger";const o=document.createElement("h4");o.classList.add("item-listing"),o.textContent="$7";const l=document.createElement("p");l.classList.add("item-description"),l.textContent="Bun, Beef Patty, Ketchup, Lettuce, Onion, Tomato, Pickles";const m=document.createElement("h4");m.classList.add("item-name"),m.textContent="Cheeseburger";const r=document.createElement("h4");r.classList.add("item-listing"),r.textContent="$8";const p=document.createElement("p");p.classList.add("item-description"),p.textContent="Bun, Beef Patty, Cheddar Cheese, Ketchup, Lettuce, Onion, Tomato, Pickles";const h=document.createElement("h4");h.classList.add("item-name"),h.textContent="Pizza";const C=document.createElement("h4");C.classList.add("item-listing"),C.textContent="$12";const u=document.createElement("p");u.classList.add("item-description"),u.textContent="Dough, Pizza Sauce, Mozzarella Cheese, Choice of 2 toppings";const E=document.createElement("h4");E.classList.add("item-name"),E.textContent="Hotdog";const L=document.createElement("h4");L.classList.add("item-listing"),L.textContent="$4";const x=document.createElement("p");x.classList.add("item-description"),x.textContent="Classic American Hotdog In A Bun";const g=document.createElement("h4");g.classList.add("item-name"),g.textContent="Corndog";const b=document.createElement("h4");b.classList.add("item-listing"),b.textContent="$5";const v=document.createElement("p");v.classList.add("item-description"),v.textContent="Breaded Hotdog On A Stick";const y=document.createElement("h4");y.classList.add("item-name"),y.textContent="Mac & Cheese";const f=document.createElement("h4");f.classList.add("item-listing"),f.textContent="$6";const T=document.createElement("p");T.classList.add("item-description"),T.textContent="Macaroni, Cheese, Sliced Hotdogs",e.appendChild(a),a.appendChild(c),c.appendChild(s),c.appendChild(i),c.appendChild(o),c.appendChild(l),c.appendChild(m),c.appendChild(r),c.appendChild(p),c.appendChild(h),c.appendChild(C),c.appendChild(u),c.appendChild(E),c.appendChild(L),c.appendChild(x),c.appendChild(g),c.appendChild(b),c.appendChild(v),c.appendChild(y),c.appendChild(f),c.appendChild(T);const B=document.createElement("div");B.classList.add("container-outer");const k=document.createElement("div");k.classList.add("container-inner","grid-container");const A=document.createElement("h2");A.classList.add("grid-header"),A.textContent="Sides";const S=document.createElement("h4");S.classList.add("item-name"),S.textContent="Fries";const H=document.createElement("h4");H.classList.add("item-listing"),H.textContent="$4";const P=document.createElement("p");P.classList.add("item-description"),P.textContent="Crinkle Cut French Fries";const w=document.createElement("h4");w.classList.add("item-name"),w.textContent="Chips";const I=document.createElement("h4");I.classList.add("item-listing"),I.textContent="$2";const M=document.createElement("p");M.classList.add("item-description"),M.textContent="Kettle Cooked --- Plain, Sour Cream, BBQ, Jalapeno";const $=document.createElement("h4");$.classList.add("item-name"),$.textContent="Tater Tots";const F=document.createElement("h4");F.classList.add("item-listing"),F.textContent="$4";const z=document.createElement("p");z.classList.add("item-description"),z.textContent="Crispy Deep Fried Hashbrowns With Seasoning";const O=document.createElement("h4");O.classList.add("item-name"),O.textContent="Loaded Tater Tots";const D=document.createElement("h4");D.classList.add("item-listing"),D.textContent="$6";const R=document.createElement("p");R.classList.add("item-description"),R.textContent="Tater Tots, Sour Cream, Chives, Bacon, Chicken",e.appendChild(B),B.appendChild(k),k.appendChild(A),k.appendChild(S),k.appendChild(H),k.appendChild(P),k.appendChild(w),k.appendChild(I),k.appendChild(M),k.appendChild($),k.appendChild(F),k.appendChild(z),k.appendChild(O),k.appendChild(D),k.appendChild(R);const W=document.createElement("div");W.classList.add("container-outer");const q=document.createElement("div");q.classList.add("container-inner","grid-container");const K=document.createElement("h2");K.classList.add("grid-header"),K.textContent="Beverages";const N=document.createElement("h4");N.classList.add("item-name"),N.textContent="Fountain Drink";const G=document.createElement("h4");G.classList.add("item-listing"),G.textContent="$2";const J=document.createElement("p");J.classList.add("item-description"),J.textContent="Choice of Cola, Diet Cola, Root Beer, Orange, Grape";const _=document.createElement("h4");_.classList.add("item-name"),_.textContent="Milk";const Q=document.createElement("h4");Q.classList.add("item-listing"),Q.textContent="$1";const U=document.createElement("p");U.classList.add("item-description"),U.textContent="Choice of White, Chocolate, Strawberry";const j=document.createElement("h4");j.classList.add("item-name"),j.textContent="Coffee";const V=document.createElement("h4");V.classList.add("item-listing"),V.textContent="$1";const X=document.createElement("p");X.classList.add("item-description"),X.textContent="Choice of Regular, Decaf",e.appendChild(W),W.appendChild(q),q.appendChild(K),q.appendChild(N),q.appendChild(G),q.appendChild(J),q.appendChild(_),q.appendChild(Q),q.appendChild(U),q.appendChild(j),q.appendChild(V),q.appendChild(X)}();break;case"contactTab":document.getElementById("contactTab").classList.add("current"),function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("h1");d.textContent="Contact Us",e.appendChild(t),t.appendChild(n),n.appendChild(d);const a=document.createElement("div");a.classList.add("container-outer");const c=document.createElement("div");c.classList.add("container-inner","grid-container");const s=document.createElement("h2");s.classList.add("grid-header"),s.textContent="Steve Rodgers";const i=document.createElement("h4");i.classList.add("item-name"),i.textContent="Position";const o=document.createElement("h4");o.classList.add("item-listing"),o.textContent="Owner";const l=document.createElement("h4");l.classList.add("item-name"),l.textContent="Phone Number";const m=document.createElement("h4");m.classList.add("item-listing"),m.textContent="555-123-4567";const r=document.createElement("h4");r.classList.add("item-name"),r.textContent="Email";const p=document.createElement("h4");p.classList.add("item-listing"),p.textContent="steve.rodgers@restaurant.com",e.appendChild(a),a.appendChild(c),c.appendChild(s),c.appendChild(i),c.appendChild(o),c.appendChild(l),c.appendChild(m),c.appendChild(r),c.appendChild(p);const h=document.createElement("div");h.classList.add("container-outer");const C=document.createElement("div");C.classList.add("container-inner","grid-container");const u=document.createElement("h2");u.classList.add("grid-header"),u.textContent="Tony Stark";const E=document.createElement("h4");E.classList.add("item-name"),E.textContent="Position";const L=document.createElement("h4");L.classList.add("item-listing"),L.textContent="Head Chef";const x=document.createElement("h4");x.classList.add("item-name"),x.textContent="Phone Number";const g=document.createElement("h4");g.classList.add("item-listing"),g.textContent="555-999-9999";const b=document.createElement("h4");b.classList.add("item-name"),b.textContent="Email";const v=document.createElement("h4");v.classList.add("item-listing"),v.textContent="tony.stark@restaurant.com",e.appendChild(h),h.appendChild(C),C.appendChild(u),C.appendChild(E),C.appendChild(L),C.appendChild(x),C.appendChild(g),C.appendChild(b),C.appendChild(v);const y=document.createElement("div");y.classList.add("container-outer");const f=document.createElement("div");f.classList.add("container-inner","grid-container");const T=document.createElement("h2");T.classList.add("grid-header"),T.textContent="Bruce Banner";const B=document.createElement("h4");B.classList.add("item-name"),B.textContent="Position";const k=document.createElement("h4");k.classList.add("item-listing"),k.textContent="Front Of House Manager";const A=document.createElement("h4");A.classList.add("item-name"),A.textContent="Phone Number";const S=document.createElement("h4");S.classList.add("item-listing"),S.textContent="555-424-4242";const H=document.createElement("h4");H.classList.add("item-name"),H.textContent="Email";const P=document.createElement("h4");P.classList.add("item-listing"),P.textContent="bruce.banner@grestaurant.com",e.appendChild(y),y.appendChild(f),f.appendChild(T),f.appendChild(B),f.appendChild(k),f.appendChild(A),f.appendChild(S),f.appendChild(H),f.appendChild(P)}()}}const n=document.createElement("nav");n.setAttribute("id","nav");const d=document.createElement("button");d.textContent="Home",d.setAttribute("id","homeTab"),d.setAttribute("class","tab"),d.classList.add("current");const a=document.createElement("button");a.textContent="Menu",a.setAttribute("id","menuTab"),a.setAttribute("class","tab");const c=document.createElement("button");c.textContent="Contact",c.setAttribute("id","contactTab"),c.setAttribute("class","tab");const s=document.createElement("div");s.setAttribute("id","content");const i=document.createElement("div");i.setAttribute("id","foot");const o=document.createElement("a");o.href="https://www.freepik.com/free-vector/restaurant-mural-wallpaper_10351122.htm#query=restaurant%20wallpaper&position=3&from_view=search&track=ais",o.textContent="Background Image by Freepik";const l=document.getElementById("page");l.appendChild(n),n.appendChild(d),n.appendChild(a),n.appendChild(c),l.appendChild(s),l.appendChild(i),i.appendChild(o),e(),document.querySelectorAll(".tab").forEach((e=>e.addEventListener("click",t)))})();