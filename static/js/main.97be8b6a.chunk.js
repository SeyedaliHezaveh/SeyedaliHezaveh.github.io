(this.webpackJsonpdeaf_assistant_frontend=this.webpackJsonpdeaf_assistant_frontend||[]).push([[0],{35:function(e,t,a){e.exports=a(51)},42:function(e,t,a){},43:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),l=(a(42),a(43),a(12)),s=a(4),d=a(55);const c=Object(n.createContext)();function p(e){let{children:t}=e;const[a,o]=Object(n.useState)(null),[i,l]=Object(n.useState)(!0);Object(n.useEffect)(()=>{const e=localStorage.getItem("token");e&&(d.a.defaults.headers.common.Authorization="Bearer "+e,o({token:e})),l(!1)},[]);return r.a.createElement(c.Provider,{value:{user:a,login:async(e,t)=>{try{const{token:e}="1234";return o({token:e}),!0}catch(a){return console.error("\u0648\u0631\u0648\u062f \u0646\u0627\u0645\u0648\u0641\u0642:",a),!1}},signup:async(e,t,a)=>{try{return await d.a.post("http://localhost:8000/api/signup/",{name:e,email:t,password:a}),!0}catch(n){return console.error("\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0646\u0627\u0645\u0648\u0641\u0642:",n),!1}},logout:()=>{localStorage.removeItem("token"),delete d.a.defaults.headers.common.Authorization,o(null)},loading:i}},!i&&t)}const m=()=>Object(n.useContext)(c);var g=a(59),x=a(56),b=a(57),f=a(54);const u={pageContainer:{minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",direction:"rtl",padding:"2rem"},cardContainer:{width:"100%",maxWidth:"400px"},card:{width:"100%",borderRadius:"15px",boxShadow:"0 10px 30px rgba(0,0,0,0.2)",border:"none",backgroundColor:"#ffffff"},cardContent:{padding:"2rem"},button:{borderRadius:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",fontSize:"1rem",padding:"0.75rem",transition:"all 0.3s ease",boxShadow:"0 4px 6px rgba(102, 126, 234, 0.25)",fontWeight:"500",display:"block",margin:"0 auto",color:"#fff",width:"100%",maxWidth:"250px"},input:{borderRadius:"8px",padding:"0.75rem 1rem",border:"1px solid #e2e8f0",fontSize:"1rem",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0,0,0,0.05)",backgroundColor:"#f8fafc",width:"100%",boxSizing:"border-box",display:"block"},title:{color:"#2d3748",fontWeight:"600",fontSize:"1.75rem",marginBottom:"0.5rem"},subtitle:{color:"#718096",marginBottom:"1.5rem",fontSize:"1rem"},link:{color:"#667eea",textDecoration:"none",fontWeight:"500",transition:"color 0.2s ease"},formGroup:{marginBottom:"1.25rem",textAlign:"right",width:"100%"},formLabel:{fontWeight:"500",marginBottom:"0.5rem",color:"#4a5568",display:"block"},checkboxContainer:{marginBottom:"1.5rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",width:"100%"},forgotPassword:{color:"#667eea",fontSize:"0.875rem",textAlign:"center",display:"block"},registerText:{textAlign:"center",marginTop:"1.5rem",color:"#718096"}};var h=()=>{const[e,t]=Object(n.useState)(""),[a,o]=Object(n.useState)(""),[i,d]=Object(n.useState)(!1),[c,p]=Object(n.useState)(""),[h,y]=Object(n.useState)(!1),{login:v}=m(),E=Object(s.q)();return r.a.createElement("div",{className:"login-page",style:u.pageContainer},r.a.createElement("div",{style:u.cardContainer},r.a.createElement(g.a,{style:u.card},r.a.createElement(g.a.Body,{style:u.cardContent},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:u.title},"\u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f"),r.a.createElement("p",{style:u.subtitle},"\u0644\u0637\u0641\u0627 \u0648\u0627\u0631\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0634\u0648\u06cc\u062f")),c&&r.a.createElement(x.a,{variant:"danger",className:"text-center mb-4",style:{borderRadius:"8px"}},c),r.a.createElement(b.a,{onSubmit:async t=>{t.preventDefault(),p(""),y(!0);try{await v(e,a,i)&&E("/")}catch(c){p("\u0627\u06cc\u0645\u06cc\u0644 \u06cc\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a!")}finally{y(!1)}},noValidate:!0},r.a.createElement(b.a.Group,{style:u.formGroup},r.a.createElement(b.a.Label,{style:u.formLabel},"\u0627\u06cc\u0645\u06cc\u0644"),r.a.createElement(b.a.Control,{type:"email",value:e,onChange:e=>t(e.target.value),required:!0,style:u.input,autoFocus:!0})),r.a.createElement(b.a.Group,{style:u.formGroup},r.a.createElement(b.a.Label,{style:u.formLabel},"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"),r.a.createElement(b.a.Control,{type:"password",value:a,onChange:e=>o(e.target.value),required:!0,style:u.input})),r.a.createElement("div",{style:u.checkboxContainer},r.a.createElement(b.a.Check,{type:"checkbox",id:"rememberMe",checked:i,onChange:e=>d(e.target.checked),label:"\u0645\u0631\u0627 \u0628\u0647 \u062e\u0627\u0637\u0631 \u0628\u0633\u067e\u0627\u0631",style:{fontSize:"0.875rem"}}),r.a.createElement("a",{href:"/forgot-password",style:u.forgotPassword},"\u0641\u0631\u0627\u0645\u0648\u0634\u06cc \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\u061f")),r.a.createElement(f.a,{variant:"primary",type:"submit",style:u.button,disabled:h},h?"\u0644\u0637\u0641\u0627 \u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f...":"\u0648\u0631\u0648\u062f"),r.a.createElement("p",{style:u.registerText},"\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc\u062f\u061f"," ",r.a.createElement(l.b,{to:"/signup",style:u.link},"\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628")))))))};var y=()=>{const[e,t]=Object(n.useState)({name:"",email:"",password:"",confirmPassword:""}),[a,o]=Object(n.useState)(""),[i,d]=Object(n.useState)(!1),{signup:c}=m(),p=Object(s.q)(),h=a=>{const{name:n,value:r}=a.target;t({...e,[n]:r})};return r.a.createElement("div",{className:"signup-page",style:u.pageContainer},r.a.createElement("div",{style:u.cardContainer},r.a.createElement(g.a,{style:u.card},r.a.createElement(g.a.Body,{style:u.cardContent},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:u.title},"\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"),r.a.createElement("p",{style:u.subtitle},"\u0628\u0631\u0627\u06cc \u0639\u0636\u0648\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0632\u06cc\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f")),a&&r.a.createElement(x.a,{variant:"danger",className:"text-center mb-4",style:{borderRadius:"8px"}},a),r.a.createElement(b.a,{onSubmit:async t=>{if(t.preventDefault(),o(""),e.password===e.confirmPassword){d(!0);try{await c(e.name,e.email,e.password)?p("/login"):o("\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0646\u0627\u0645\u0648\u0641\u0642! \u0644\u0637\u0641\u0627\u064b \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.")}catch(a){o("\u062e\u0637\u0627 \u062f\u0631 \u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc")}finally{d(!1)}}else o("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0648 \u062a\u06a9\u0631\u0627\u0631 \u0622\u0646 \u0645\u0637\u0627\u0628\u0642\u062a \u0646\u062f\u0627\u0631\u0646\u062f!")},noValidate:!0},r.a.createElement(b.a.Group,{style:u.formGroup},r.a.createElement(b.a.Label,{style:u.formLabel},"\u0646\u0627\u0645"),r.a.createElement(b.a.Control,{type:"text",name:"name",value:e.name,onChange:h,required:!0,style:u.input,autoFocus:!0})),r.a.createElement(b.a.Group,{style:u.formGroup},r.a.createElement(b.a.Label,{style:u.formLabel},"\u0627\u06cc\u0645\u06cc\u0644"),r.a.createElement(b.a.Control,{type:"email",name:"email",value:e.email,onChange:h,required:!0,style:u.input})),r.a.createElement(b.a.Group,{style:u.formGroup},r.a.createElement(b.a.Label,{style:u.formLabel},"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"),r.a.createElement(b.a.Control,{type:"password",name:"password",value:e.password,onChange:h,required:!0,style:u.input})),r.a.createElement(b.a.Group,{style:u.formGroup},r.a.createElement(b.a.Label,{style:u.formLabel},"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"),r.a.createElement(b.a.Control,{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:h,required:!0,style:u.input})),r.a.createElement(f.a,{variant:"primary",type:"submit",className:"w-100 mt-2",style:u.button,disabled:i},i?"\u0644\u0637\u0641\u0627 \u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f...":"\u062b\u0628\u062a\u200c\u0646\u0627\u0645"),r.a.createElement("p",{style:u.registerText},"\u0642\u0628\u0644\u0627 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f\u061f"," ",r.a.createElement(l.b,{to:"/login",style:u.link},"\u0648\u0631\u0648\u062f \u0628\u0647 \u062d\u0633\u0627\u0628")))))))},v=a(58),E=a(9);const w={pageContainer:{display:"flex",minHeight:"100vh",backgroundColor:"#f5f7fa",direction:"rtl",textAlign:"right",position:"relative",overflow:"hidden"},sidebar:{width:"280px",backgroundColor:"#ffffff",boxShadow:"0 0 20px rgba(0, 0, 0, 0.08)",position:"fixed",height:"100vh",right:0,padding:"0",zIndex:1e3,transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",borderLeft:"1px solid rgba(229, 231, 235, 0.5)",backgroundImage:"linear-gradient(to bottom, #ffffff, #fafbff)"},sidebarCollapsed:{width:"80px",overflow:"hidden"},sidebarHeader:{padding:"20px",borderBottom:"1px solid #eaeaea",background:"linear-gradient(to right, #f8f9ff, #ffffff)",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.02)"},logo:{fontSize:"1.5rem",fontWeight:"bold",color:"#3f51b5",marginBottom:"0",whiteSpace:"nowrap",textShadow:"0px 1px 1px rgba(0, 0, 0, 0.1)"},logoSmall:{fontSize:"1.5rem",fontWeight:"bold",color:"#3f51b5",marginBottom:"0",textAlign:"center",textShadow:"0px 1px 1px rgba(0, 0, 0, 0.1)"},navLink:{padding:"14px 20px",color:"#5a6171",fontSize:"0.95rem",display:"flex",alignItems:"center",borderRadius:"0",transition:"all 0.3s ease",whiteSpace:"nowrap",position:"relative",overflow:"hidden",marginBottom:"2px"},navLinkCollapsed:{padding:"12px",justifyContent:"center"},navLinkActive:{backgroundColor:"#f0f4ff",color:"#3f51b5",borderRight:"4px solid #3f51b5",fontWeight:"bold"},navIcon:{marginLeft:"16px",fontSize:"1.1rem",transition:"transform 0.2s ease"},navCategory:{fontSize:"0.8rem",color:"#9ca3af",fontWeight:"bold",padding:"20px 20px 10px",textTransform:"uppercase",whiteSpace:"nowrap",letterSpacing:"0.5px"},mainContent:{marginRight:"280px",width:"calc(100% - 280px)",transition:"all 0.3s ease",padding:"20px",minHeight:"100vh"},mainContentExpanded:{marginRight:"80px",width:"calc(100% - 80px)"},topNav:{backgroundColor:"#ffffff",borderBottom:"1px solid #eaeaea",padding:"10px 25px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.05)"},searchBar:{maxWidth:"400px"},searchInput:{backgroundColor:"#f5f7fa",border:"none",boxShadow:"none",borderRadius:"50px",padding:"10px 20px"},navbarToggler:{border:"none",backgroundColor:"transparent",padding:"8px"},iconButton:{color:"#555",fontSize:"1.1rem",margin:"0 5px",padding:"8px 10px",borderRadius:"50%",backgroundColor:"transparent",transition:"all 0.3s ease",position:"relative"},userDropdown:{display:"flex",alignItems:"center",cursor:"pointer",padding:"5px 10px",borderRadius:"5px",transition:"all 0.3s ease"},avatar:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",marginLeft:"10px",border:"2px solid #eaeaea"},userName:{margin:"0",fontSize:"0.9rem",fontWeight:"600"},userRole:{margin:"0",fontSize:"0.75rem",color:"#888"},contentWrapper:{padding:"25px"},pageTitle:{fontSize:"1.75rem",fontWeight:"bold",marginBottom:"20px",color:"#333"},cardDashboard:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.05)",borderRadius:"10px",border:"none",marginBottom:"25px",overflow:"hidden"},cardHeader:{backgroundColor:"#ffffff",borderBottom:"1px solid #f0f0f0",padding:"15px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"},cardTitle:{fontWeight:"600",margin:"0",fontSize:"1.1rem"},conversionTools:{display:"flex",flexDirection:"column",padding:"20px"},toolButton:{display:"flex",alignItems:"center",justifyContent:"center",padding:"15px",margin:"10px 0",borderRadius:"10px",backgroundColor:"#f0f4ff",border:"none",color:"#3f51b5",fontWeight:"600",fontSize:"1rem",transition:"all 0.3s ease"},toolIcon:{fontSize:"1.5rem",marginLeft:"10px"},messageArea:{height:"300px",overflowY:"auto",padding:"15px",backgroundColor:"#f9f9f9",borderRadius:"10px",marginBottom:"15px"},message:{padding:"10px 15px",borderRadius:"10px",marginBottom:"10px",maxWidth:"80%",wordWrap:"break-word"},incomingMessage:{backgroundColor:"#ffffff",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)",marginRight:"auto"},outgoingMessage:{backgroundColor:"#e3f2fd",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)",marginLeft:"auto"},messageInput:{display:"flex",alignItems:"center"},inputField:{borderRadius:"50px",padding:"10px 20px",border:"1px solid #eaeaea",flexGrow:1,marginLeft:"10px"},sendButton:{borderRadius:"50%",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#3f51b5",border:"none"},friendItem:{display:"flex",alignItems:"center",padding:"12px 15px",borderBottom:"1px solid #f0f0f0",transition:"all 0.3s ease"},friendAvatar:{width:"45px",height:"45px",borderRadius:"50%",marginLeft:"15px"},friendName:{fontWeight:"600",margin:"0",fontSize:"0.95rem"},friendStatus:{fontSize:"0.8rem",color:"#888",margin:"0"},onlineIndicator:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"#4caf50",display:"inline-block",marginLeft:"5px"},notificationItem:{padding:"12px 15px",borderBottom:"1px solid #f0f0f0"},"@media (max-width: 992px)":{sidebar:{transform:"translateX(260px)"},sidebarOpen:{transform:"translateX(0)"},mainContent:{marginRight:"0",width:"100%"}},footer:{backgroundColor:"#f8f9fa",borderTop:"1px solid #e9ecef",padding:"10px 15px",position:"fixed",left:"0",bottom:"0",width:"250px",textAlign:"center",zIndex:900},toggleButton:{position:"fixed",top:"50%",transform:"translateY(-50%)",backgroundColor:"#ffffff",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",cursor:"pointer",zIndex:1050,border:"1px solid #eaeaea",transition:"all 0.3s ease"}},S=[],k=[{id:1,name:"\u0633\u0627\u0631\u0627 \u0627\u062d\u0645\u062f\u06cc",status:"\u0622\u0646\u0644\u0627\u06cc\u0646",avatar:"https://randomuser.me/api/portraits/women/12.jpg",lastSeen:"\u0647\u0645 \u0627\u06a9\u0646\u0648\u0646"},{id:2,name:"\u0627\u0645\u06cc\u0631 \u062d\u0633\u06cc\u0646\u06cc",status:"\u0622\u0641\u0644\u0627\u06cc\u0646",avatar:"https://randomuser.me/api/portraits/men/22.jpg",lastSeen:"\u06f1 \u0633\u0627\u0639\u062a \u067e\u06cc\u0634"},{id:3,name:"\u0645\u0631\u06cc\u0645 \u06a9\u0631\u06cc\u0645\u06cc",status:"\u0622\u0646\u0644\u0627\u06cc\u0646",avatar:"https://randomuser.me/api/portraits/women/32.jpg",lastSeen:"\u0647\u0645 \u0627\u06a9\u0646\u0648\u0646"},{id:4,name:"\u0639\u0644\u06cc \u0645\u062d\u0645\u062f\u06cc",status:"\u0645\u0634\u063a\u0648\u0644",avatar:"https://randomuser.me/api/portraits/men/42.jpg",lastSeen:"\u06f3\u06f0 \u062f\u0642\u06cc\u0642\u0647 \u067e\u06cc\u0634"},{id:5,name:"\u0646\u06cc\u0644\u0648\u0641\u0631 \u0631\u0636\u0627\u06cc\u06cc",status:"\u0622\u0646\u0644\u0627\u06cc\u0646",avatar:"https://randomuser.me/api/portraits/women/52.jpg",lastSeen:"\u0647\u0645 \u0627\u06a9\u0646\u0648\u0646"}],C=[{id:1,name:"\u062f\u0648\u0633\u062a\u0627\u0646 \u062f\u0627\u0646\u0634\u06af\u0627\u0647",members:[1,2,3],avatar:"https://randomuser.me/api/portraits/women/90.jpg"},{id:2,name:"\u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u067e\u0631\u0648\u0698\u0647",members:[2,4,5],avatar:"https://randomuser.me/api/portraits/men/90.jpg"}];var j=()=>{const{user:e,logout:t}=m(),a=Object(s.q)(),[o,i]=Object(n.useState)("\u062f\u0627\u0634\u0628\u0648\u0631\u062f"),[l,d]=Object(n.useState)(!1),[c,p]=Object(n.useState)(!1),[g,x]=Object(n.useState)(S),[b,f]=Object(n.useState)(""),[u,h]=Object(n.useState)(!1),[y,j]=Object(n.useState)(!1),[L,N]=Object(n.useState)(""),[O,R]=Object(n.useState)(""),[I,z]=Object(n.useState)(!1),[B,W]=Object(n.useState)(!1),[A,T]=Object(n.useState)(!1),[G,q]=Object(n.useState)(!1),[F,P]=Object(n.useState)(null),[D,H]=Object(n.useState)(!1),[M,X]=Object(n.useState)(""),[_,J]=Object(n.useState)(!1),[V,Y]=Object(n.useState)(""),[K,Q]=Object(n.useState)([]),[U,Z]=Object(n.useState)(C),[$,ee]=Object(n.useState)(k),[te,ae]=Object(n.useState)(!1),ne=r.a.useRef(null);Object(n.useEffect)(()=>{if("webkitSpeechRecognition"in window||"SpeechRecognition"in window){const e=window.SpeechRecognition||window.webkitSpeechRecognition;ne.current=new e,ne.current.continuous=!0,ne.current.interimResults=!0,ne.current.lang="fa-IR",ne.current.onresult=e=>{const t=Array.from(e.results).map(e=>e[0]).map(e=>e.transcript).join("");N(t),f(t)},ne.current.onerror=e=>{console.error("Speech recognition error",e.error),z(!1),ae(!1)}}},[]),Object(n.useEffect)(()=>{const e=()=>{p(window.innerWidth<992)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);return r.a.createElement("div",{className:"flex min-h-screen bg-gray-50 relative",style:w.pageContainer},r.a.createElement("div",{className:"bg-white shadow-md transition-all duration-300 overflow-y-auto",style:c?{...w.sidebar,transform:l?"translateX(100%)":"translateX(0)",position:"fixed",zIndex:1e3}:{...w.sidebar,...l?w.sidebarCollapsed:{}}},r.a.createElement("div",{className:"border-b border-gray-200 p-5",style:w.sidebarHeader},l&&!c?r.a.createElement("h1",{className:"text-indigo-600 text-xl font-bold text-center m-0",style:w.logoSmall},"\u0635\u062f\u0627"):r.a.createElement("h1",{className:"text-indigo-600 text-xl font-bold m-0",style:w.logo},"\u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u0635\u062f\u0627")),r.a.createElement(v.a,{className:"flex-column",style:{padding:"10px 0",background:"linear-gradient(to bottom, #ffffff, #fafbff)"}},!l&&r.a.createElement("div",{className:"text-gray-500 text-xs uppercase font-semibold px-5 pt-5 pb-2",style:w.navCategory},"\u0627\u0635\u0644\u06cc"),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all "+("\u062f\u0627\u0634\u0628\u0648\u0631\u062f"===o?"bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600":""),style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},..."\u062f\u0627\u0634\u0628\u0648\u0631\u062f"===o?w.navLinkActive:w.navLink,boxShadow:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"===o?"0 2px 5px rgba(0, 0, 0, 0.03)":"none"},onClick:()=>i("\u062f\u0627\u0634\u0628\u0648\u0631\u062f"),title:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"},r.a.createElement(E.f,{className:"ml-3 text-lg",style:{...w.navIcon,transform:"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"===o?"scale(1.2)":"scale(1)"}}),!l&&r.a.createElement("span",null,"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"),!l&&"\u062f\u0627\u0634\u0628\u0648\u0631\u062f"===o&&r.a.createElement("div",{style:{position:"absolute",left:"0",height:"100%",width:"4px",background:"linear-gradient(to bottom, #3f51b5, #5677fc)",borderRadius:"0 4px 4px 0"}})),!l&&r.a.createElement("div",{className:"text-gray-500 text-xs uppercase font-semibold px-5 pt-5 pb-2",style:w.navCategory},"\u0627\u0628\u0632\u0627\u0631 \u0647\u0627\u06cc \u062a\u0628\u062f\u06cc\u0644"),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all "+("\u062a\u0628\u062f\u06cc\u0644-\u06af\u0641\u062a\u0627\u0631-\u0628\u0647-\u0645\u062a\u0646"===o?"bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600":""),style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},..."\u062a\u0628\u062f\u06cc\u0644-\u06af\u0641\u062a\u0627\u0631-\u0628\u0647-\u0645\u062a\u0646"===o?w.navLinkActive:w.navLink,boxShadow:"\u062a\u0628\u062f\u06cc\u0644-\u06af\u0641\u062a\u0627\u0631-\u0628\u0647-\u0645\u062a\u0646"===o?"0 2px 5px rgba(0, 0, 0, 0.03)":"none"},onClick:()=>{i("\u062a\u0628\u062f\u06cc\u0644-\u06af\u0641\u062a\u0627\u0631-\u0628\u0647-\u0645\u062a\u0646"),h(!0)},title:"\u062a\u0628\u062f\u06cc\u0644 \u06af\u0641\u062a\u0627\u0631 \u0628\u0647 \u0645\u062a\u0646"},r.a.createElement(E.g,{className:"ml-3 text-lg",style:{...w.navIcon,transform:"\u062a\u0628\u062f\u06cc\u0644-\u06af\u0641\u062a\u0627\u0631-\u0628\u0647-\u0645\u062a\u0646"===o?"scale(1.2)":"scale(1)"}}),!l&&r.a.createElement("span",null,"\u06af\u0641\u062a\u0627\u0631 \u0628\u0647 \u0645\u062a\u0646"),!l&&"\u062a\u0628\u062f\u06cc\u0644-\u06af\u0641\u062a\u0627\u0631-\u0628\u0647-\u0645\u062a\u0646"===o&&r.a.createElement("div",{style:{position:"absolute",left:"0",height:"100%",width:"4px",background:"linear-gradient(to bottom, #3f51b5, #5677fc)",borderRadius:"0 4px 4px 0"}})),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all "+("\u062a\u0628\u062f\u06cc\u0644-\u0645\u062a\u0646-\u0628\u0647-\u06af\u0641\u062a\u0627\u0631"===o?"bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600":""),style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},..."\u062a\u0628\u062f\u06cc\u0644-\u0645\u062a\u0646-\u0628\u0647-\u06af\u0641\u062a\u0627\u0631"===o?w.navLinkActive:w.navLink,boxShadow:"\u062a\u0628\u062f\u06cc\u0644-\u0645\u062a\u0646-\u0628\u0647-\u06af\u0641\u062a\u0627\u0631"===o?"0 2px 5px rgba(0, 0, 0, 0.03)":"none"},onClick:()=>{i("\u062a\u0628\u062f\u06cc\u0644-\u0645\u062a\u0646-\u0628\u0647-\u06af\u0641\u062a\u0627\u0631"),j(!0)},title:"\u062a\u0628\u062f\u06cc\u0644 \u0645\u062a\u0646 \u0628\u0647 \u06af\u0641\u062a\u0627\u0631"},r.a.createElement(E.j,{className:"ml-3 text-lg",style:{...w.navIcon,transform:"\u062a\u0628\u062f\u06cc\u0644-\u0645\u062a\u0646-\u0628\u0647-\u06af\u0641\u062a\u0627\u0631"===o?"scale(1.2)":"scale(1)"}}),!l&&r.a.createElement("span",null,"\u0645\u062a\u0646 \u0628\u0647 \u06af\u0641\u062a\u0627\u0631"),!l&&"\u062a\u0628\u062f\u06cc\u0644-\u0645\u062a\u0646-\u0628\u0647-\u06af\u0641\u062a\u0627\u0631"===o&&r.a.createElement("div",{style:{position:"absolute",left:"0",height:"100%",width:"4px",background:"linear-gradient(to bottom, #3f51b5, #5677fc)",borderRadius:"0 4px 4px 0"}})),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all "+("\u06af\u0641\u062a\u06af\u0648\u0647\u0627"===o?"bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600":""),style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},..."\u06af\u0641\u062a\u06af\u0648\u0647\u0627"===o?w.navLinkActive:w.navLink,boxShadow:"\u06af\u0641\u062a\u06af\u0648\u0647\u0627"===o?"0 2px 5px rgba(0, 0, 0, 0.03)":"none"},onClick:()=>i("\u06af\u0641\u062a\u06af\u0648\u0647\u0627"),title:"\u06af\u0641\u062a\u06af\u0648\u0647\u0627"},r.a.createElement(E.d,{className:"ml-3 text-lg",style:{...w.navIcon,transform:"\u06af\u0641\u062a\u06af\u0648\u0647\u0627"===o?"scale(1.2)":"scale(1)"}}),!l&&r.a.createElement("span",null,"\u06af\u0641\u062a\u06af\u0648\u0647\u0627"),!l&&"\u06af\u0641\u062a\u06af\u0648\u0647\u0627"===o&&r.a.createElement("div",{style:{position:"absolute",left:"0",height:"100%",width:"4px",background:"linear-gradient(to bottom, #3f51b5, #5677fc)",borderRadius:"0 4px 4px 0"}})),!l&&r.a.createElement("div",{className:"text-gray-500 text-xs uppercase font-semibold px-5 pt-5 pb-2",style:w.navCategory},"\u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a"),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all "+("\u062f\u0648\u0633\u062a\u0627\u0646"===o?"bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600":""),style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},..."\u062f\u0648\u0633\u062a\u0627\u0646"===o?w.navLinkActive:w.navLink,boxShadow:"\u062f\u0648\u0633\u062a\u0627\u0646"===o?"0 2px 5px rgba(0, 0, 0, 0.03)":"none"},onClick:()=>i("\u062f\u0648\u0633\u062a\u0627\u0646"),title:"\u062f\u0648\u0633\u062a\u0627\u0646"},r.a.createElement(E.i,{className:"ml-3 text-lg",style:{...w.navIcon,transform:"\u062f\u0648\u0633\u062a\u0627\u0646"===o?"scale(1.2)":"scale(1)"}}),!l&&r.a.createElement("span",null,"\u062f\u0648\u0633\u062a\u0627\u0646"),!l&&"\u062f\u0648\u0633\u062a\u0627\u0646"===o&&r.a.createElement("div",{style:{position:"absolute",left:"0",height:"100%",width:"4px",background:"linear-gradient(to bottom, #3f51b5, #5677fc)",borderRadius:"0 4px 4px 0"}})),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all "+("\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"===o?"bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600":""),style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},..."\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"===o?w.navLinkActive:w.navLink,boxShadow:"\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"===o?"0 2px 5px rgba(0, 0, 0, 0.03)":"none"},onClick:()=>i("\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"),title:"\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"},r.a.createElement(E.e,{className:"ml-3 text-lg",style:{...w.navIcon,transform:"\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"===o?"scale(1.2)":"scale(1)"}}),!l&&r.a.createElement("span",null,"\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"),!l&&"\u062a\u0627\u0631\u06cc\u062e\u0686\u0647"===o&&r.a.createElement("div",{style:{position:"absolute",left:"0",height:"100%",width:"4px",background:"linear-gradient(to bottom, #3f51b5, #5677fc)",borderRadius:"0 4px 4px 0"}})),!l&&r.a.createElement("div",{className:"text-gray-500 text-xs uppercase font-semibold px-5 pt-5 pb-2",style:w.navCategory},"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all "+("\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"===o?"bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600":""),style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},..."\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"===o?w.navLinkActive:w.navLink,boxShadow:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"===o?"0 2px 5px rgba(0, 0, 0, 0.03)":"none"},onClick:()=>i("\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"),title:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"},r.a.createElement(E.c,{className:"ml-3 text-lg",style:{...w.navIcon,transform:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"===o?"scale(1.2)":"scale(1)"}}),!l&&r.a.createElement("span",null,"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062d\u0633\u0627\u0628"),!l&&"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"===o&&r.a.createElement("div",{style:{position:"absolute",left:"0",height:"100%",width:"4px",background:"linear-gradient(to bottom, #3f51b5, #5677fc)",borderRadius:"0 4px 4px 0"}})),r.a.createElement(v.a.Link,{className:"flex items-center py-3 px-5 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all",style:{...l&&!c?{padding:"14px",justifyContent:"center"}:{},...w.navLink,marginTop:"10px"},onClick:async()=>{await t(),a("/login")},title:"\u062e\u0631\u0648\u062c"},r.a.createElement(E.h,{className:"ml-3 text-lg",style:w.navIcon}),!l&&r.a.createElement("span",null,"\u062e\u0631\u0648\u062c"))),r.a.createElement("div",{className:"absolute bottom-0 right-0 w-full border-t border-gray-200 p-4 bg-white text-center"},r.a.createElement("small",{className:"text-gray-500",style:{background:"linear-gradient(to right, #5677fc, #3f51b5)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"bold"}},"\u0646\u0633\u062e\u0647 \u06f1.\u06f0.\u06f0"))),r.a.createElement("button",{className:"fixed bg-white shadow-md rounded-full flex items-center justify-center focus:outline-none transition-all hover:bg-indigo-50",style:{...w.toggleButton,right:l?"85px":"285px"},onClick:()=>{d(!l)},title:l?"\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0645\u0646\u0648":"\u0628\u0633\u062a\u0646 \u0645\u0646\u0648"},l?r.a.createElement(E.a,{className:"text-indigo-600"}):r.a.createElement(E.b,{className:"text-indigo-600"})),r.a.createElement("div",{className:"transition-all duration-300 p-6",style:c?{marginRight:0,width:"100%",paddingTop:"20px"}:{...w.mainContent,...l?w.mainContentExpanded:{}}},r.a.createElement("div",{className:"bg-white rounded-lg shadow-sm p-6 mb-6"},r.a.createElement("h2",{className:"text-xl font-bold mb-4"},"\u0628\u0647 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u0635\u062f\u0627 \u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f"),r.a.createElement("p",{className:"text-gray-600"},"\u0627\u0632 \u0645\u0646\u0648\u06cc \u0633\u0645\u062a \u0631\u0627\u0633\u062a \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0647 \u0628\u062e\u0634\u200c\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f."))),r.a.createElement("div",{className:"fixed left-0 bottom-0 bg-gray-50 border-t border-gray-200 p-3 w-60 text-center z-50"},r.a.createElement("p",{className:"m-0 text-sm text-gray-600"},"\u062a\u0645\u0627\u0645\u06cc \u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638 \u0627\u0633\u062a \xa9 \u06f1\u06f4\u06f0\u06f4 | \u0633\u0627\u0645\u0627\u0646\u0647 \u0647\u0645\u06cc\u0627\u0632")))};var L=e=>{let{children:t}=e;const{user:a}=m();return a?t:r.a.createElement(s.a,{to:"/login"})};var N=function(){return r.a.createElement(l.a,null," ",r.a.createElement(p,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login",element:r.a.createElement(h,null)}),r.a.createElement(s.b,{path:"/signup",element:r.a.createElement(y,null)}),r.a.createElement(s.b,{path:"/",element:r.a.createElement(L,null,r.a.createElement(j,null))}))))};var O=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:o,getTTFB:i}=t;a(e),n(e),r(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null))),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.97be8b6a.chunk.js.map