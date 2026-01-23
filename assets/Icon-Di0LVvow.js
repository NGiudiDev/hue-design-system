import{m,r as p,a as c,l as d,i as u,j as s,P as i}from"./iframe-BZJsol1c.js";import{g as f}from"./Text-CRCib6v8.js";const r={minor:"20px",major:"24px",spot:"36px"},t={minor:"16px",major:"20px",spot:"32px"},$=c("svg")`
  height: ${e=>t[e.$size]};
  width: ${e=>t[e.$size]};
  fill: ${e=>f(e.theme.colors,e.$color)||e.theme.colors.black.main};
  display: block;
`,g=c("div")`
  align-items: center;
  display: inline-flex;
  height: ${e=>r[e.$size]};
  justify-content: center;
  width: ${e=>r[e.$size]};
  cursor: ${e=>e.onClick?"pointer":"default"};
  
  ${e=>e.$spin&&p`
    animation: ${e.theme.animations.spin} 1s linear infinite;
  `}
  
  ${e=>m(e)}
`,a={IconItem:$,IconWrapper:g},h={color:"black.main",margin:"a-0",name:"home",onClick:null,size:"major",spin:!1},l=e=>{const n=d.merge({},h,e),o=u[n.name];return o?s.jsx(a.IconWrapper,{$margin:n.margin,onClick:n.onClick,$size:n.size,$spin:n.spin,children:s.jsx(a.IconItem,{$color:n.color,$size:n.size,viewBox:o.viewBox,children:s.jsx("path",{d:o.path})})}):(console.warn(`Icon "${n.name}" not found`),null)};l.propTypes={color:i.string,margin:i.string,name:i.string,onClick:i.func,size:i.oneOf(["minor","major","spot"]),spin:i.bool};l.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{color:{description:"",type:{name:"string"},required:!1},margin:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},size:{description:"",type:{name:"enum",value:[{value:'"minor"',computed:!1},{value:'"major"',computed:!1},{value:'"spot"',computed:!1}]},required:!1},spin:{description:"",type:{name:"bool"},required:!1}}};export{l as I};
