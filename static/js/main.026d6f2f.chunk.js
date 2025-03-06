(this.webpackJsonpdeaf_assistant_frontend=this.webpackJsonpdeaf_assistant_frontend||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},34:function(e,t,a){},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(23),o=a.n(l),c=(a(34),a(35),a(11)),i=a(4),s=a(48);const m=Object(r.createContext)();function d(e){let{children:t}=e;const[a,l]=Object(r.useState)(null),[o,c]=Object(r.useState)(!0);Object(r.useEffect)(()=>{const e=localStorage.getItem("token");e&&(s.a.defaults.headers.common.Authorization="Bearer "+e,l({token:e})),c(!1)},[]);return n.a.createElement(m.Provider,{value:{user:a,login:async(e,t)=>{try{const a=await s.a.post("http://localhost:8000/api/login/",{email:e,password:t}),{token:r}=a.data;return localStorage.setItem("token",r),s.a.defaults.headers.common.Authorization="Bearer "+r,l({token:r}),!0}catch(a){return console.error("\u0648\u0631\u0648\u062f \u0646\u0627\u0645\u0648\u0641\u0642:",a),!1}},signup:async(e,t,a)=>{try{return await s.a.post("http://localhost:8000/api/signup/",{name:e,email:t,password:a}),!0}catch(r){return console.error("\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0646\u0627\u0645\u0648\u0641\u0642:",r),!1}},logout:()=>{localStorage.removeItem("token"),delete s.a.defaults.headers.common.Authorization,l(null)},loading:o}},!o&&t)}const u=()=>Object(r.useContext)(m);var p=a(50),g=a(47),b=a(49),y=a(46);const f={pageContainer:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",padding:"2rem"},cardContainer:{width:"100%",maxWidth:"400px"},card:{width:"100%",borderRadius:"15px",boxShadow:"0 10px 30px rgba(0,0,0,0.2)",border:"none",backgroundColor:"#ffffff"},cardContent:{padding:"2rem"},button:{borderRadius:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",fontSize:"1rem",padding:"0.75rem",transition:"all 0.3s ease",boxShadow:"0 4px 6px rgba(102, 126, 234, 0.25)",fontWeight:"500",display:"block",margin:"0 auto",width:"100%",maxWidth:"250px"},input:{borderRadius:"8px",padding:"0.75rem 1rem",border:"1px solid #e2e8f0",fontSize:"1rem",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0,0,0,0.05)",backgroundColor:"#f8fafc",width:"100%",boxSizing:"border-box",display:"block"},title:{color:"#2d3748",fontWeight:"600",fontSize:"1.75rem",marginBottom:"0.5rem"},subtitle:{color:"#718096",marginBottom:"1.5rem",fontSize:"1rem"},link:{color:"#667eea",textDecoration:"none",fontWeight:"500",transition:"color 0.2s ease"},formGroup:{marginBottom:"1.25rem",textAlign:"right",width:"100%"},formLabel:{fontWeight:"500",marginBottom:"0.5rem",color:"#4a5568",display:"block"},checkboxContainer:{marginBottom:"1.5rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",width:"100%"},forgotPassword:{color:"#667eea",fontSize:"0.875rem",textAlign:"center",display:"block"},registerText:{textAlign:"center",marginTop:"1.5rem",color:"#718096"}};var E=()=>{const[e,t]=Object(r.useState)(""),[a,l]=Object(r.useState)(""),[o,s]=Object(r.useState)(!1),[m,d]=Object(r.useState)(""),[E,h]=Object(r.useState)(!1),{login:x}=u(),v=Object(i.q)();return n.a.createElement("div",{className:"login-page",style:f.pageContainer},n.a.createElement("div",{style:f.cardContainer},n.a.createElement(p.a,{style:f.card},n.a.createElement(p.a.Body,{style:f.cardContent},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",{style:f.title},"\u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f"),n.a.createElement("p",{style:f.subtitle},"\u0644\u0637\u0641\u0627 \u0648\u0627\u0631\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0634\u0648\u06cc\u062f")),m&&n.a.createElement(g.a,{variant:"danger",className:"text-center mb-4",style:{borderRadius:"8px"}},m),n.a.createElement(b.a,{onSubmit:async t=>{t.preventDefault(),d(""),h(!0);try{await x(e,a,o)&&v("/")}catch(m){d("\u0627\u06cc\u0645\u06cc\u0644 \u06cc\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a!")}finally{h(!1)}},noValidate:!0},n.a.createElement(b.a.Group,{style:f.formGroup},n.a.createElement(b.a.Label,{style:f.formLabel},"\u0627\u06cc\u0645\u06cc\u0644"),n.a.createElement(b.a.Control,{type:"email",value:e,onChange:e=>t(e.target.value),required:!0,style:f.input,autoFocus:!0})),n.a.createElement(b.a.Group,{style:f.formGroup},n.a.createElement(b.a.Label,{style:f.formLabel},"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"),n.a.createElement(b.a.Control,{type:"password",value:a,onChange:e=>l(e.target.value),required:!0,style:f.input})),n.a.createElement("div",{style:f.checkboxContainer},n.a.createElement(b.a.Check,{type:"checkbox",id:"rememberMe",checked:o,onChange:e=>s(e.target.checked),label:"\u0645\u0631\u0627 \u0628\u0647 \u062e\u0627\u0637\u0631 \u0628\u0633\u067e\u0627\u0631",style:{fontSize:"0.875rem"}}),n.a.createElement("a",{href:"/forgot-password",style:f.forgotPassword},"\u0641\u0631\u0627\u0645\u0648\u0634\u06cc \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\u061f")),n.a.createElement(y.a,{variant:"primary",type:"submit",style:f.button,disabled:E},E?"\u0644\u0637\u0641\u0627 \u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f...":"\u0648\u0631\u0648\u062f"),n.a.createElement("p",{style:f.registerText},"\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc\u062f\u061f"," ",n.a.createElement(c.b,{to:"/signup",style:f.link},"\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628")))))))};var h=()=>{const[e,t]=Object(r.useState)({name:"",email:"",password:"",confirmPassword:""}),[a,l]=Object(r.useState)(""),[o,s]=Object(r.useState)(!1),{signup:m}=u(),d=Object(i.q)(),E=a=>{const{name:r,value:n}=a.target;t({...e,[r]:n})};return n.a.createElement("div",{className:"signup-page",style:f.pageContainer},n.a.createElement("div",{style:f.cardContainer},n.a.createElement(p.a,{style:f.card},n.a.createElement(p.a.Body,{style:f.cardContent},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",{style:f.title},"\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"),n.a.createElement("p",{style:f.subtitle},"\u0628\u0631\u0627\u06cc \u0639\u0636\u0648\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f")),a&&n.a.createElement(g.a,{variant:"danger",className:"text-center mb-4",style:{borderRadius:"8px"}},a),n.a.createElement(b.a,{onSubmit:async t=>{if(t.preventDefault(),l(""),e.password===e.confirmPassword){s(!0);try{await m(e.name,e.email,e.password)?d("/login"):l("\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0646\u0627\u0645\u0648\u0641\u0642! \u0644\u0637\u0641\u0627\u064b \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.")}catch(a){l("\u062e\u0637\u0627 \u062f\u0631 \u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc")}finally{s(!1)}}else l("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0648 \u062a\u06a9\u0631\u0627\u0631 \u0622\u0646 \u0645\u0637\u0627\u0628\u0642\u062a \u0646\u062f\u0627\u0631\u0646\u062f!")},noValidate:!0},n.a.createElement(b.a.Group,{style:f.formGroup},n.a.createElement(b.a.Label,{style:f.formLabel},"\u0646\u0627\u0645"),n.a.createElement(b.a.Control,{type:"text",name:"name",value:e.name,onChange:E,required:!0,style:f.input,autoFocus:!0})),n.a.createElement(b.a.Group,{style:f.formGroup},n.a.createElement(b.a.Label,{style:f.formLabel},"\u0627\u06cc\u0645\u06cc\u0644"),n.a.createElement(b.a.Control,{type:"email",name:"email",value:e.email,onChange:E,required:!0,style:f.input})),n.a.createElement(b.a.Group,{style:f.formGroup},n.a.createElement(b.a.Label,{style:f.formLabel},"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"),n.a.createElement(b.a.Control,{type:"password",name:"password",value:e.password,onChange:E,required:!0,style:f.input})),n.a.createElement(b.a.Group,{style:f.formGroup},n.a.createElement(b.a.Label,{style:f.formLabel},"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"),n.a.createElement(b.a.Control,{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:E,required:!0,style:f.input})),n.a.createElement(y.a,{variant:"primary",type:"submit",className:"w-100 mt-2",style:f.button,disabled:o},o?"\u0644\u0637\u0641\u0627 \u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f...":"\u062b\u0628\u062a\u200c\u0646\u0627\u0645"),n.a.createElement("p",{style:f.registerText},"\u0642\u0628\u0644\u0627 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f\u061f"," ",n.a.createElement(c.b,{to:"/login",style:f.link},"\u0648\u0631\u0648\u062f \u0628\u0647 \u062d\u0633\u0627\u0628")))))))};var x=()=>{const{user:e,logout:t}=u();return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h2",null,"\u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f!"),n.a.createElement("p",null,"\u062a\u0648\u06a9\u0646 JWT \u0634\u0645\u0627: ",null===e||void 0===e?void 0:e.token),n.a.createElement(y.a,{variant:"danger",onClick:t},"\u062e\u0631\u0648\u062c"))};var v=e=>{let{children:t}=e;const{user:a}=u();return a?t:n.a.createElement(i.a,{to:"/login"})};var C=function(){return n.a.createElement(c.a,null," ",n.a.createElement(d,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/login",element:n.a.createElement(E,null)}),n.a.createElement(i.b,{path:"/signup",element:n.a.createElement(h,null)}),n.a.createElement(i.b,{path:"/",element:n.a.createElement(v,null,n.a.createElement(x,null))}))))};var w=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:l,getTTFB:o}=t;a(e),r(e),n(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null))),w()}},[[27,1,2]]]);
//# sourceMappingURL=main.026d6f2f.chunk.js.map