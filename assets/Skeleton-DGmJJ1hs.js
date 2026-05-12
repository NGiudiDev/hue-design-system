import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./react-C1q00N_b.js";import{d as r,f as i,n as a,p as o,t as s,u as c}from"./spacing-ByfHzs_K.js";import{t as l}from"./jsx-runtime-B-hFyic3.js";var u,d,f,p=t((()=>{c(),s(),u=i(`div`)(e=>r`
    animation-name: ${e.theme.animations.shine};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-color: ${e.theme.colors.black.disabled};
    background-image: linear-gradient(
      90deg,
      ${e.theme.colors.white.main}00 0px,
      ${e.theme.colors.white.main}80 40px,
      ${e.theme.colors.white.main}00 80px
    );
    background-size: 600px;
    border-radius: 50%;
    height: 48px;
    opacity: 0.35;
    width: 48px;

    ${a(e)}
  `),d=i(`div`)(e=>r`
    animation-name: ${e.theme.animations.shine};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-color: ${e.theme.colors.black.disabled};
    background-image: linear-gradient(
      90deg,
      ${e.theme.colors.white.main}00 0px,
      ${e.theme.colors.white.main}80 40px,
      ${e.theme.colors.white.main}00 80px
    );
    background-size: 600px;
    border-radius: 4px;
    height: ${e.$height};
    max-width: 100%;
    opacity: 0.35;
    width: ${e.$width};

    ${a(e)}
  `),f={CircleSkeleton:u,RectSkeleton:d}})),m,h,g,_=t((()=>{n(),m=e(o(),1),p(),h=l(),g=e=>{let{height:t=`12px`,margin:n=`a-0`,type:r=`rect`,width:i=`100%`}=e;return r===`circle`?(0,h.jsx)(f.CircleSkeleton,{$margin:n}):(0,h.jsx)(f.RectSkeleton,{$height:t,$margin:n,$width:i})},g.propTypes={height:m.default.string,margin:m.default.string,type:m.default.oneOf([`circle`,`rect`]),width:m.default.string},g.__docgenInfo={description:``,methods:[],displayName:`Skeleton`,props:{height:{description:``,type:{name:`string`},required:!1},margin:{description:``,type:{name:`string`},required:!1},type:{description:``,type:{name:`enum`,value:[{value:`"circle"`,computed:!1},{value:`"rect"`,computed:!1}]},required:!1},width:{description:``,type:{name:`string`},required:!1}}}}));export{_ as n,g as t};