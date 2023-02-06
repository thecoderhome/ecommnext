(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(4754)}])},3399:function(e,s,r){"use strict";r.d(s,{Z:function(){return j}});var a=r(5893),n=r(7294),i=r(2920);r(7134);var t=r(5746),l=r(9008),c=r.n(l),o=r(1664),d=r.n(o),h=r(2148),m=r(3299);function u(e){let{href:s,children:r,...n}=e;return(0,a.jsx)(d(),{href:s,legacyBehavior:!0,children:(0,a.jsx)("a",{...n,children:r})})}var x=r(1955);function j(e){let{title:s,children:r}=e,{status:l,data:o}=(0,m.useSession)(),{state:j,dispatch:f}=(0,n.useContext)(h.y),{cart:{cartItems:p}}=j,[g,v]=(0,n.useState)(0);(0,n.useEffect)(()=>{v(p.reduce((e,s)=>e+s.quantity,0))},[p]);let w=()=>{x.Z.remove("cart"),f("CART_RESET"),(0,m.signOut)({callbackUrl:"/login"})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:s?"".concat(s," - EVSHOP"):"EVSHOP"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(i.Ix,{position:"bottom-center",limit:1}),(0,a.jsxs)("div",{className:"flex min-h-screen flex-col justify-between",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md",children:[(0,a.jsx)(d(),{href:"/",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"text-lg font-bold",children:"EVSHOP"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d(),{href:"/cart",legacyBehavior:!0,children:(0,a.jsxs)("a",{className:"p-2",children:["Cart",g>0&&(0,a.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:g})]})}),"loading"===l?"Loading":(null==o?void 0:o.user)?(0,a.jsxs)(t.v,{as:"div",className:"relative inline-block",children:[(0,a.jsx)(t.v.Button,{className:"text-blue-600",children:o.user.name}),(0,a.jsxs)(t.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-white shadow-lg",children:[(0,a.jsx)(t.v.Item,{children:(0,a.jsx)(u,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,a.jsx)(t.v.Item,{children:(0,a.jsx)(u,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),(0,a.jsx)(t.v.Item,{children:(0,a.jsx)("a",{className:"dropdown-link",href:"#",onClick:w,children:"Logout"})})]})]}):(0,a.jsx)(d(),{href:"/login",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"p-2",children:"Login"})})]})]})}),(0,a.jsx)("main",{className:"container m-auto mt-4 px-4",children:r}),(0,a.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:"Copyright \xa92023 EVSHOP"})]})]})}},4754:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return u}});var a=r(5893),n=r(3399),i=r(1664),t=r.n(i),l=r(3299),c=r(7294),o=r(7536),d=r(5738),h=r(2920),m=r(1163);function u(){let{data:e}=(0,l.useSession)(),s=(0,m.useRouter)(),{redirect:r}=s.query;(0,c.useEffect)(()=>{(null==e?void 0:e.user)&&s.push(r||"/")},[s,e,r]);let{handleSubmit:i,register:u,formState:{errors:x}}=(0,o.cI)(),j=async e=>{let{email:s,password:r}=e;try{let e=await (0,l.signIn)("credentials",{redirect:!1,email:s,password:r});e.error&&h.Am.error(e.error)}catch(e){h.Am.error((0,d.b)(e))}};return(0,a.jsx)(n.Z,{title:"Login",children:(0,a.jsxs)("form",{className:"mx-auto max-w-screen-md",onSubmit:i(j),children:[(0,a.jsx)("h1",{className:"mb-4 text-xl",children:"Login"}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"email",children:"Email"}),(0,a.jsx)("input",{type:"email",...u("email",{required:"Please enter email",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Please enter valid email"}}),className:"w-full",id:"email",autoFocus:!0}),x.email&&(0,a.jsx)("div",{className:"text-red-500",children:x.email.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"password",children:"Password"}),(0,a.jsx)("input",{type:"password",...u("password",{required:"Please enter password",minLength:{value:6,message:"Password is more than 5 chars"}}),className:"w-full",id:"password",autoFocus:!0}),x.password&&(0,a.jsx)("div",{className:"text-red-500",children:x.password.message})]}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)("button",{className:"primary-button",children:"Login"})}),(0,a.jsxs)("div",{className:"mb-4",children:["Don't have an account? \xa0",(0,a.jsx)(t(),{href:"register",children:"Register"})]})]})})}},5738:function(e,s,r){"use strict";r.d(s,{b:function(){return a}});let a=e=>{e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message}}},function(e){e.O(0,[329,536,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);