"use strict";(self.webpackChunklanding_page=self.webpackChunklanding_page||[]).push([["3937"],{4649(e,r,s){s.d(r,{KK:()=>l,l5:()=>c});let a="https://api.applicationcontrolroom.com/v1",t="acr_live_",n="1.0.0",i=e=>`${e}ACR_API_KEY=${t}\u{2026} # publishable (client) key
${e}ACR_ENDPOINT=${a}`,o=`ACR_API_KEY=${t}\u{2026} # server key
ACR_API_SECRET=acr_secret_\u{2026}
ACR_ENDPOINT=${a}`,c={react:{label:"React",pkg:"@lib-acr/react",runtime:"Browser",keyType:"client",envFile:i("VITE_"),code:`import { ACRProvider } from '@lib-acr/react';

createRoot(document.getElementById('root')!).render(
  <ACRProvider
    config={{
      apiKey: import.meta.env.VITE_ACR_API_KEY,
      endpoint: import.meta.env.VITE_ACR_ENDPOINT,
      appVersion: '${n}',
    }}
  >
    <App />
  </ACRProvider>,
);`},angular:{label:"Angular",pkg:"@lib-acr/angular",runtime:"Browser",keyType:"client",envFile:`// src/environments/environment.ts
acr: { apiKey: '${t}\u{2026}', endpoint: '${a}' }`,code:`// app.config.ts
import { provideACR } from '@lib-acr/angular';
import { provideACRRouterTracking } from '@lib-acr/angular/router';
import { environment } from './environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideACR({ ...environment.acr, appVersion: '${n}' }),
    provideACRRouterTracking(),
  ],
};`},browser:{label:"JavaScript",pkg:"@lib-acr/browser",runtime:"Browser",keyType:"client",envFile:i(""),code:`import { BrowserACR } from '@lib-acr/browser';

const acr = new BrowserACR({
  apiKey: '${t}\u{2026}', // publishable key
  endpoint: '${a}',
  appVersion: '${n}',
});
acr.start();`},nestjs:{label:"NestJS",pkg:"@lib-acr/nestjs",runtime:"Server",keyType:"server",envFile:o,code:`// app.module.ts
import { ACRModule } from '@lib-acr/nestjs';

@Module({
  imports: [
    ACRModule.forRoot({
      apiKey: process.env.ACR_API_KEY!,
      apiSecret: process.env.ACR_API_SECRET!,
      endpoint: process.env.ACR_ENDPOINT!,
      appVersion: '${n}',
    }),
  ],
})
export class AppModule {}`},express:{label:"Express",pkg:"@lib-acr/express",runtime:"Server",keyType:"server",envFile:o,code:`import { ACR, ACRErrorHandler, ACRMiddleware } from '@lib-acr/express';

const acr = new ACR({
  apiKey: process.env.ACR_API_KEY!,
  apiSecret: process.env.ACR_API_SECRET!,
  endpoint: process.env.ACR_ENDPOINT!,
  appVersion: '${n}',
});
acr.startHeartbeat();

app.use(ACRMiddleware({ client: acr }));
// \u{2026} your routes \u{2026}
app.use(ACRErrorHandler({ client: acr }));`},node:{label:"Node.js",pkg:"@lib-acr/node",runtime:"Server",keyType:"server",envFile:o,code:`import { ACR } from '@lib-acr/node';

const acr = new ACR({
  apiKey: process.env.ACR_API_KEY!,
  apiSecret: process.env.ACR_API_SECRET!,
  endpoint: process.env.ACR_ENDPOINT!,
  appVersion: '${n}',
});
acr.startHeartbeat();
acr.captureProcessErrors();

acr.trackEvent('order_placed', { plan: 'pro' });`}},l=Object.keys(c)},2105(e,r,s){s.r(r),s.d(r,{default:()=>m});var a=s(4848),t=s(8872),n=s(5916),i=s(6540),o=s(5558),c=s(4649);function l({value:e,label:r}){let[s,n]=(0,i.useState)(!1),o=(0,i.useRef)(void 0);(0,i.useEffect)(()=>()=>window.clearTimeout(o.current),[]);let c=async()=>{try{await navigator.clipboard.writeText(e),n(!0),window.clearTimeout(o.current),o.current=window.setTimeout(()=>n(!1),1800)}catch{n(!1)}};return(0,a.jsxs)("button",{type:"button",className:"code-block__copy",onClick:c,"aria-label":s?`${r} copied`:`Copy ${r}`,children:[(0,a.jsx)(t.In,{name:s?"check":"file",size:14}),(0,a.jsx)("span",{"aria-live":"polite",children:s?"Copied":"Copy"})]})}function d({code:e,label:r}){return(0,a.jsxs)("div",{className:"code-block",children:[(0,a.jsx)("pre",{tabIndex:0,"aria-label":r,children:(0,a.jsx)("code",{children:e})}),(0,a.jsx)(l,{value:e,label:r})]})}function p({n:e,title:r,aside:s,children:t}){return(0,a.jsxs)("li",{className:"setup-step",children:[(0,a.jsx)("span",{className:"setup-step__n","aria-hidden":"true",children:e}),(0,a.jsxs)("div",{className:"setup-step__body",children:[(0,a.jsxs)("div",{className:"setup-step__head",children:[(0,a.jsxs)("h3",{children:[(0,a.jsxs)("span",{className:"sr-only",children:["Step ",e,": "]}),r]}),s]}),t]})]})}function h({initial:e="react"}){let r=`sdk-${(0,i.useId)().replace(/[^a-zA-Z0-9]/g,"")}`,[s,n]=(0,i.useState)(e),l=c.l5[s],u="client"===l.keyType;return(0,a.jsxs)("div",{className:"setup card",children:[(0,a.jsxs)("div",{className:"setup__head",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Connect your app"}),(0,a.jsx)("p",{children:"Install the SDK, add your key and start the app. Data appears in the console within a minute."})]}),(0,a.jsx)(t.tU,{idBase:r,label:"Choose an SDK",value:s,onChange:n,items:c.KK.map(e=>({id:e,label:c.l5[e].label}))})]}),(0,a.jsxs)("ol",{className:"setup__steps",id:`${r}-panel`,role:"tabpanel","aria-labelledby":`${r}-tab-${s}`,children:[(0,a.jsx)(p,{n:1,title:"Install",aside:(0,a.jsxs)(t.Ex,{tone:"neutral",children:[l.runtime," SDK"]}),children:(0,a.jsx)(d,{code:`npm install ${l.pkg}`,label:"install command"})}),(0,a.jsxs)(p,{n:2,title:u?"Add a publishable (client) key":"Add a server key and secret",aside:(0,a.jsxs)("a",{className:"setup__key-link",href:o.cG,children:[(0,a.jsx)(t.In,{name:"key",size:14})," Create key"]}),children:[(0,a.jsx)(d,{code:l.envFile,label:"environment variables"}),(0,a.jsxs)("p",{className:"setup-step__note",children:[(0,a.jsx)(t.In,{name:u?"globe":"lock",size:14}),u?"Client keys are safe in the browser and only work from the origins you allow.":"Keep the secret on the server. Never ship it to a browser."]})]}),(0,a.jsx)(p,{n:3,title:"Initialise",children:(0,a.jsx)(d,{code:l.code,label:"initialisation code"})})]},s)]})}let u=[["React","Provider, safe SSR hooks, error boundary, React Router tracking, controls and typed feature flags.","React 18 / 19","code"],["Angular","Angular binding for application telemetry, remote controls and signal-based feature flags.","Framework","layers"],["Browser","Automatic sessions, navigation, page views, errors, fetch/XHR timing, Web Vitals and remote UI states.","Web","globe"],["Node.js","Server telemetry, structured logs, process error capture, feature flags, controls and runtime heartbeats.","Runtime","server"],["Express","Request timing, route templates, trace correlation, error middleware and opt-in maintenance handling.","Framework","activity"],["NestJS","Module integration, injected client, interceptor/filter capture, logger forwarding and opt-in guard.","Framework","shield"],["Public events API","Send named server-side events from a service without a first-party SDK using a server credential.","HTTP","zap"]];function m(){return(0,n.A)().collectAnchor("setup"),(0,a.jsxs)(t.qK,{title:"Integrations",description:"Connect ACR to React, Angular, browser JavaScript, Node.js, Express, NestJS or the public events API.",children:[(0,a.jsx)(t.WB,{eyebrow:"SDKs & integrations",title:(0,a.jsxs)(a.Fragment,{children:["Meet every application ",(0,a.jsx)("em",{children:"where it runs."})]}),description:"Use a framework binding when one exists, combine browser and server SDKs for full-stack visibility, or send events from any other language with the public events API.",actions:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.vx,{to:"#setup",children:"See the setup steps"}),(0,a.jsx)(t.vx,{to:"/contact",variant:"secondary",children:"Ask about your stack"})]})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("section",{className:"sec sec--alt setup-section",id:"setup",children:(0,a.jsxs)("div",{className:"acr-container split split--top",children:[(0,a.jsxs)(t.gN,{children:[(0,a.jsx)(t.w,{eyebrow:"Setup",title:(0,a.jsxs)(a.Fragment,{children:["Connected in ",(0,a.jsx)("em",{children:"three steps."})]}),description:"The same copy-ready steps you get in the console, for every first-party SDK. Pick your runtime, install the package, add a key and start the app."}),(0,a.jsx)(t.Pg,{items:["Browser SDKs use a publishable key that only works from the origins you allow.","Server SDKs use a key and secret that never leave your backend.","The first accepted event moves the app from awaiting telemetry to connected."]}),(0,a.jsx)("div",{className:"actions",children:(0,a.jsx)(t.vx,{to:o.cG,children:"Create a free key"})})]}),(0,a.jsx)(t.gN,{delay:100,children:(0,a.jsx)(h,{})})]})}),(0,a.jsx)("section",{className:"acr-content-section",children:(0,a.jsxs)("div",{className:"acr-container",children:[(0,a.jsx)(t.gN,{children:(0,a.jsx)(t.w,{eyebrow:"First-party coverage",title:"A consistent contract across the stack.",description:"All SDKs share batching, bounded buffering, retry behavior, privacy transforms and control polling through the core package."})}),(0,a.jsx)("div",{className:"acr-content-grid acr-content-grid--2",children:u.map(([e,r,s,n],i)=>(0,a.jsx)(t.gN,{delay:i%2*60,children:(0,a.jsxs)("article",{className:"acr-content-card acr-integration-card",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"acr-icon-box",children:(0,a.jsx)(t.In,{name:n})}),(0,a.jsx)("span",{className:"acr-tag",children:s})]}),(0,a.jsx)("h3",{children:e}),(0,a.jsx)("p",{children:r}),(0,a.jsxs)("span",{className:"acr-integration-link",children:["Integration available ",(0,a.jsx)(t.In,{name:"check",size:15})]})]})},e))})]})}),(0,a.jsx)("section",{className:"acr-content-section acr-content-section--muted",children:(0,a.jsxs)("div",{className:"acr-container acr-text-split",children:[(0,a.jsx)(t.gN,{children:(0,a.jsx)(t.w,{eyebrow:"Choosing a package",title:"Use the narrowest integration that matches your runtime."})}),(0,a.jsx)(t.gN,{delay:80,children:(0,a.jsxs)("div",{className:"acr-prose",children:[(0,a.jsx)("h3",{children:"Frontend application"}),(0,a.jsx)("p",{children:"Use React or Angular when those bindings match your framework; use the browser package for Vue, Svelte or plain JavaScript."}),(0,a.jsx)("h3",{children:"Backend application"}),(0,a.jsx)("p",{children:"Express combines the Node client with request middleware. NestJS provides the integrated module, interceptor, filters, logger and optional maintenance guard."}),(0,a.jsx)("h3",{children:"Full-stack application"}),(0,a.jsx)("p",{children:"Install a browser SDK and a server SDK with two credentials belonging to the same app\u2014or use separate ACR apps when the deployment targets should be isolated."})]})})]})}),(0,a.jsx)(t.J0,{title:"Connect the stack you already operate.",description:"Choose a first-party SDK, or send events from any language with the public events API.",primary:"View product features",primaryTo:"/features"})]})]})}}}]);