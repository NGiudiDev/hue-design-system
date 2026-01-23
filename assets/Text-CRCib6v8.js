import{p as o,m as l,a,l as d,j as r,P as t,r as p,t as m}from"./iframe-BZJsol1c.js";const b=a("div")`
  flex-grow: 1;

  ${e=>o(e)}
  ${e=>l(e)}
`;a("div")`
  margin-top: auto;
  width: 100%;
  
  ${e=>o(e)}
  ${e=>l(e)}
`;const $=a("div")` 
  background-color: ${e=>e.theme.colors.white.surface};

  border: ${e=>e.$borderless?"none":`1px solid ${e.theme.colors.black.border}`};
  
  border-radius: 4px;
  box-shadow: ${e=>e.onClick&&e.theme.shadows.level1};
  box-sizing: border-box;
  cursor: ${e=>e.onClick?"pointer":"default"};
  display: flex;
  flex-direction: column;
  width: ${e=>e.width};
  
  ${e=>e.$isFullHeight&&`
    height: 100%;
  `}
  
  ${e=>o(e)}
  ${e=>l(e)}
`,h={Content:b,Wrapper:$},v={children:null,padding:"a-0",margin:"a-0"},c=e=>{const n=d.merge({},v,e);return r.jsx(h.Content,{$margin:n.margin,$padding:n.padding,children:n.children})};c.propTypes={children:t.node,margin:t.string,padding:t.string};c.__docgenInfo={description:"",methods:[],displayName:"PanelContent",props:{children:{description:"",type:{name:"node"},required:!1},margin:{description:"",type:{name:"string"},required:!1},padding:{description:"",type:{name:"string"},required:!1}}};t.node,t.string,t.string;const x={borderless:!1,children:null,isFullHeight:!1,margin:"a-0",onClick:null,padding:"a-16"},u=e=>{const n=d.merge({},x,e);return r.jsx(h.Wrapper,{$borderless:n.borderless,$isFullHeight:n.isFullHeight,$margin:n.margin,onClick:n.onClick,$padding:n.padding,children:n.children})};u.propTypes={borderless:t.bool,children:t.node,isFullHeight:t.bool,margin:t.string,onClick:t.func,padding:t.string};u.__docgenInfo={description:"",methods:[],displayName:"PanelWrapper",props:{borderless:{description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!1},isFullHeight:{description:"",type:{name:"bool"},required:!1},margin:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},padding:{description:"",type:{name:"string"},required:!1}}};const T={Content:c,Wrapper:u},q=(e,n)=>{if(!n)return e.black.main;if(n.includes(".")){const[s,i]=n.split(".");return e[s]?.[i]||e.black.main}return e[n]?e[n].main||e[n]:n},f=e=>{const n=e.theme.typography[e.$type]||e.theme.typography.bodyRegular;return p`
    color: ${q(e.theme.colors,e.$color)||e.theme.colors.black.main};
    font-family: Public Sans, sans-serif;
    font-size: ${n.size};
    font-weight: ${n.weight};
    line-height: ${n.lineHeight};
    text-align: ${e.$align};
    text-decoration: ${e.$decoration==="none"?"none":e.$decoration};
    margin: 0;
    padding: 0;
    
    ${l(e)}
    ${o(e)}
    
    /* Improve text rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    
    /* Handle long text gracefully */
    word-wrap: break-word;
    overflow-wrap: break-word;
  `},k=a("p")`
  ${e=>p`
    ${f(e)}
  `}
`,P=a("label")`
  ${e=>p`
    display: inline-block;
    cursor: pointer;
    user-select: none;
    
    /* Improve accessibility */
    &:focus-visible {
      outline: 2px solid ${e.theme.colors.highlight.main};
      outline-offset: 2px;
      border-radius: 2px;
    }
    
    /* Hover state for better UX */
    &:hover {
      opacity: 0.8;
    }
    
    ${f(e)}
  `}
`,g={LabelWrapper:P,TextWrapper:k},w={align:"start",as:"p",color:"black",decoration:"none",htmlFor:"",margin:"a-0",padding:"a-0",type:"bodyRegular"},y=e=>{const n=d.merge({},w,e);m[n.type]||(console.warn(`Typography type "${n.type}" not found. Using default "bodyRegular".`),n.type="bodyRegular");const s=n.as==="label"?{htmlFor:n.htmlFor}:{},i={$align:n.align,children:n.children,$color:n.color,$decoration:n.decoration,$margin:n.margin,$padding:n.padding,$type:n.type};return n.as==="label"?r.jsx(g.LabelWrapper,{...s,...i}):r.jsx(g.TextWrapper,{as:n.as,...i})};y.propTypes={align:t.oneOf(["start","center","end"]),as:t.oneOf(["p","span","label","h1","h2","h3","h4","h5","h6"]),children:t.node.isRequired,color:t.string,decoration:t.oneOf(["none","underline","line-through"]),htmlFor:t.string,margin:t.string,padding:t.string,type:t.oneOf(Object.keys(m))};y.__docgenInfo={description:"",methods:[],displayName:"Text",props:{align:{description:"",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]},required:!1},as:{description:"",type:{name:"enum",value:[{value:'"p"',computed:!1},{value:'"span"',computed:!1},{value:'"label"',computed:!1},{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1},{value:'"h6"',computed:!1}]},required:!1},children:{description:"",type:{name:"node"},required:!0},color:{description:"",type:{name:"string"},required:!1},decoration:{description:"",type:{name:"enum",value:[{value:'"none"',computed:!1},{value:'"underline"',computed:!1},{value:'"line-through"',computed:!1}]},required:!1},htmlFor:{description:"",type:{name:"string"},required:!1},margin:{description:"",type:{name:"string"},required:!1},padding:{description:"",type:{name:"string"},required:!1},type:{description:"",type:{name:"enum",value:[{value:'"bodyRegular"',computed:!1},{value:'"bodySemibold"',computed:!1},{value:'"captionRegular"',computed:!1},{value:'"captionSemibold"',computed:!1},{value:'"pageTitle"',computed:!1},{value:'"subtitle"',computed:!1},{value:'"title"',computed:!1}]},required:!1}}};export{T as P,y as T,q as g};
