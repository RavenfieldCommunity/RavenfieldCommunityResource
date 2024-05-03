import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as l,a as e,d as r,w as i,e as s,b as d}from"./app-BgL-Tz3l.js";const c={},h=s('<h1 id="planehud" tabindex="-1"><a class="header-anchor" href="#planehud"><span>PlaneHud</span></a></h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>Used to monitor the values of the aircraft in real time in the game and apply them to UI objects.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Add anywhere, recommended to be mounted on top of the UI parent object</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h2><p>If no helicopter is specified, the component will automatically look for the airplane component of the bound parent.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2>',8),p=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),u=e("td",null,"plane",-1),m=e("td",null,"Target Monitoring Aircraft",-1),g=e("tr",null,[e("td",null,"gearIndicator"),e("td",null,"GameObject.Indicator"),e("td",null,"Landing gear status (ready = UI object shown when ready, waiting = UI object shown when busy)")],-1),b=e("tr",null,[e("td",null,"airbrakeIndicator"),e("td",null,"GameObject.Indicator"),e("td",null,"Decelerator state (trigger ready when the aircraft's vector.y is less than -0.3, otherwise waiting. ready = UI object shown when ready, waiting = UI object shown when busy)")],-1),_=e("tr",null,[e("td",null,"countermeasureIndicator"),e("td",null,"GameObject.Indicator"),e("td",null,"Thermal booby trap status (ready = UI object shown when ready, waiting = UI object shown when loaded)")],-1),f=e("tr",null,[e("td",null,"speedLabel"),e("td",null,"Text"),e("td",null,"Text object showing speed (purely numeric, would overwrite the original text)")],-1),y=e("tr",null,[e("td",null,"altitudeLabel"),e("td",null,"Text"),e("td",null,"Text object showing elevation (purely numeric, will overwrite the original text)")],-1);function w(v,x){const t=a("RouteLink");return o(),l("div",null,[h,e("table",null,[p,e("tbody",null,[e("tr",null,[u,e("td",null,[r(t,{to:"/en/Components/Airplane.html"},{default:i(()=>[d("Airplane")]),_:1})]),m]),g,b,_,f,y])])])}const T=n(c,[["render",w],["__file","PlaneHud.html.vue"]]),U=JSON.parse('{"path":"/en/Components/PlaneHud.html","title":"PlaneHud","lang":"en-US","frontmatter":{"category":["Components","Vehicle"],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/PlaneHud.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/PlaneHud.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Documents"}],["meta",{"property":"og:title","content":"PlaneHud"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PlaneHud\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/PlaneHud.md","localizedDate":"November 19, 2023"}');export{T as comp,U as data};