import{m as x,p as l,a as u,l as m,j as p,P as e}from"./iframe-BZJsol1c.js";const v=u("div")`    
  box-sizing: border-box;
  text-align: ${a=>a.$align};
  
  ${a=>l(a)}

  ${a=>{let n="";return Object.keys(a.theme.breakpoints).forEach(r=>{const i=a[`$${r}`];if(i!==void 0){const s=a.theme?.breakpoints[r],f=i==="auto"?"auto":`${i/12*100}%`,g=i==="auto"?"none":`${i/12*100}%`,o=`
          flex-basis: ${f};
          flex-grow: 0;
          max-width: ${g};
        `;r==="xs"||s==="0px"?n+=o:n+=`
            @media (min-width: ${s}) {
              ${o}
            }
          `}}),n}}
`,y=u("div")`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
    
  ${a=>x(a)}
  ${a=>l(a)}
`,c={Item:v,Wrapper:y},$={align:"left",children:null,padding:"a-0",xs:12,sm:void 0,md:void 0,lg:void 0,xl:void 0},t=a=>{const n=m.merge({},$,a);return p.jsx(c.Item,{$align:n.align,$padding:n.padding,$xs:n.xs,$sm:n.sm,$md:n.md,$lg:n.lg,$xl:n.xl,children:n.children})};t.propTypes={align:e.oneOf(["left","center","right","justify"]),children:e.node,paddding:e.string,xs:e.oneOfType([e.number,e.oneOf(["auto"])]),sm:e.oneOfType([e.number,e.oneOf(["auto"])]),md:e.oneOfType([e.number,e.oneOf(["auto"])]),lg:e.oneOfType([e.number,e.oneOf(["auto"])]),xl:e.oneOfType([e.number,e.oneOf(["auto"])])};t.__docgenInfo={description:"",methods:[],displayName:"GridItem",props:{align:{description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"center"',computed:!1},{value:'"right"',computed:!1},{value:'"justify"',computed:!1}]},required:!1},children:{description:"",type:{name:"node"},required:!1},paddding:{description:"",type:{name:"string"},required:!1},xs:{description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1}]}]},required:!1},sm:{description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1}]}]},required:!1},md:{description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1}]}]},required:!1},lg:{description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1}]}]},required:!1},xl:{description:"",type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:'"auto"',computed:!1}]}]},required:!1}}};const h={children:null,margin:"a-0",padding:"a-0"},d=a=>{const n=m.merge({},h,a);return p.jsx(c.Wrapper,{$margin:n.margin,$padding:n.padding,children:n.children})};d.propTypes={children:e.node,margin:e.string,padding:e.string};d.__docgenInfo={description:"",methods:[],displayName:"GridWrapper",props:{children:{description:"",type:{name:"node"},required:!1},margin:{description:"",type:{name:"string"},required:!1},padding:{description:"",type:{name:"string"},required:!1}}};const O={Container:d,Item:t};export{O as G};
