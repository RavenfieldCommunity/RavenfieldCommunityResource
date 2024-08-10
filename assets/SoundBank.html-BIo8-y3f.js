import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as s,c as d,a as e,b as t,d as a,w as l,e as c}from"./app-D_zjl-ti.js";const p={},h=e("h1",{id:"soundbank",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#soundbank"},[e("span",null,"SoundBank")])],-1),m=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description"},[e("span",null,"Description")])],-1),u=e("p",null,"AudioCilp集",-1),f=e("p",null,"Used for in-game Animations events to play the specified AudioCilp according to the incoming intType parameter.",-1),g={href:"https://docs.unity3d.com/2020.3/Documentation/Manual/script-AnimationWindowEvent.html",target:"_blank",rel:"noopener noreferrer"},_=c('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>add to a weapon object</p><p>AnimationEvent has two available functions, PlayRandom and PlaySoundBank.</p><p>PlayRandom has no parameters available and is used to play a random AudioClip from a clip[].</p><p>PlaySoundBank needs to pass an int parameter as index (&quot;serial number&quot;, the * in &quot;Element *&quot; at the clips is the index of the AudioClip), which is used to play the AudioClip corresponding to the index in the <code>clips[]</code> according to the index.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>clips</td><td>AudioClip[]</td><td>AudioClip to be used</td></tr><tr><td>audioSource</td><td>AudioSource</td><td>AudioSource object for AudioCilp playback</td></tr></tbody></table>',8);function b(y,k){const o=n("RouteLink"),i=n("ExternalLinkIcon");return s(),d("div",null,[h,m,u,f,e("p",null,[t("Scenarios such as single/multi-shot weapons playing a specific sound effect at a specific animation time.（Refer "),a(o,{to:"/cn/Tutorials/wpn.1.html"},{default:l(()=>[t("RFCreator Project")]),_:1}),t("）")]),e("p",null,[t("Refer "),e("a",g,[t(`Unity docs' "Animation Event"`),a(i)])]),_])}const x=r(p,[["render",b],["__file","SoundBank.html.vue"]]),C=JSON.parse('{"path":"/en/Components/SoundBank.html","title":"SoundBank","lang":"en-US","frontmatter":{"category":["Components","Weapon"],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/SoundBank.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/SoundBank.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Documents"}],["meta",{"property":"og:title","content":"SoundBank"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SoundBank\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/SoundBank.md","localizedDate":"November 19, 2023"}');export{x as comp,C as data};