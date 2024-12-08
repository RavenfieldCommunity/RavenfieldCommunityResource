import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as e,d as n,e as l,w as r,a as i,r as s,o as p}from"./app-C_v4U1Ia.js";const m={};function u(g,t){const o=s("RouteLink");return p(),d("div",null,[t[24]||(t[24]=e("h1",{id:"weaponcotentmod",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#weaponcotentmod"},[e("span",null,"WeaponCotentMod")])],-1)),t[25]||(t[25]=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description"},[e("span",null,"Description")])],-1)),e("p",null,[t[1]||(t[1]=n("The Weapon Export Configuration component, which can only be exported by Unity and imported into the game if it is applied to a carrier prefab (containing ")),l(o,{to:"/en/Components/Weapon.html"},{default:r(()=>t[0]||(t[0]=[n("Weapon")])),_:1}),t[2]||(t[2]=n(" or its derivatives) can only be exported by Unity and imported by the game."))]),t[26]||(t[26]=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage"},[e("span",null,"Usage")])],-1)),t[27]||(t[27]=e("p",null,"Just apply it to an empty object prefab or to the weapon itself.",-1)),t[28]||(t[28]=e("p",null,[n("To configure each weapon, first set the number of weapons to be exported in "),e("code",null,"Sizes"),n(".")],-1)),t[29]||(t[29]=e("p",null,"Then you can check the toolbar to export the mod.",-1)),t[30]||(t[30]=e("h2",{id:"comment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comment"},[e("span",null,"Comment")])],-1)),t[31]||(t[31]=e("p",null,"Automatic assignment mechanism for the game's default TAG tags:",-1)),e("table",null,[t[23]||(t[23]=e("thead",null,[e("tr",null,[e("th",null,"TAG"),e("th",null,"Name"),e("th",null,"Mechanism")])],-1)),e("tbody",null,[t[18]||(t[18]=e("tr",null,[e("td",null,"CLOSE QUARTERS"),e("td",null,"CLOSE QUARTERS weapons"),e("td",null,[e("code",null,"slot"),n("=Primary, weapon's "),e("code",null,"projectilesPerShot"),n(">1")])],-1)),t[19]||(t[19]=e("tr",null,[e("td",null,"ASSAULT"),e("td",null,"assault weapon"),e("td",null,[e("code",null,"slot"),n("=Primary, weapon's "),e("code",null,"auto"),n("=true")])],-1)),t[20]||(t[20]=e("tr",null,[e("td",null,"MARKSMAN"),e("td",null,"long-range weapon"),e("td",null,[e("code",null,"slot"),n("=Primary and does not meet the latter determination of CLOSE QUARTERS and ASSAULT")])],-1)),t[21]||(t[21]=e("tr",null,[e("td",null,"EQUIPMENT"),e("td",null,"EQUIPMENT"),e("td",null,[e("code",null,"slot"),n("=Gear或LargeGear，weapon's "),e("code",null,"projectilesPerShot"),n("=null or neither of them meets the latter determination of GRENADES and ANTI ARMOR.")])],-1)),e("tr",null,[t[8]||(t[8]=e("td",null,"GRENADES",-1)),t[9]||(t[9]=e("td",null,"GRENADES",-1)),e("td",null,[t[4]||(t[4]=e("code",null,"slot",-1)),t[5]||(t[5]=n("=Gear或LargeGear，weapon's ")),t[6]||(t[6]=e("code",null,"projectiles",-1)),t[7]||(t[7]=n(" is ")),l(o,{to:"/en/Components/GrenadeProjectile.html"},{default:r(()=>t[3]||(t[3]=[n("GrenadeProjectile")])),_:1})])]),e("tr",null,[t[16]||(t[16]=e("td",null,"ANTI ARMOR",-1)),t[17]||(t[17]=e("td",null,"Anti-armor weapons",-1)),e("td",null,[t[11]||(t[11]=e("code",null,"slot",-1)),t[12]||(t[12]=n("=Gear或LargeGear，weapon's ")),t[13]||(t[13]=e("code",null,"projectiles",-1)),t[14]||(t[14]=n(" is ")),l(o,{to:"/en/Components/ExplodingProjectile.html"},{default:r(()=>t[10]||(t[10]=[n("ExplodingProjectile")])),_:1}),t[15]||(t[15]=n(" or its derivatives"))])]),t[22]||(t[22]=e("tr",null,[e("td",null,"UNTAGGED"),e("td",null,"Uncategorized"),e("td",null,"None of the above determinations")],-1))])]),t[32]||(t[32]=i('<h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Weapon name (meaning not equal to the weapon&#39;s <code>displayName</code>)</td></tr><tr><td>prefab</td><td>GameObject</td><td>Prefab for weapons</td></tr><tr><td>slot</td><td>enum.WeaponSlot</td><td>Weapon Slot Type (Primary=Primary Weapon, Secondary Parent Weapon, Gear One Gear, LargeGear=Two Gear)</td></tr><tr><td>usableByAi</td><td>bool</td><td>This weapon is Bot-ready.</td></tr><tr><td>usableByAiAllowOverride</td><td>bool</td><td>This weapon Bot available (priority high)</td></tr><tr><td>type</td><td>enum.LoadoutType</td><td>Weapon Type (Normal=Normal, Stealth=Silenced, AntiArmor=Anti-Armor, Repair=Carrier Repair Tool, ResupplyAmmo=Ammunition Resupply Kit, ResupplyHealth=Health Resupply Kit)</td></tr><tr><td>sortPriority</td><td>int</td><td></td></tr><tr><td>tags</td><td>string[]</td><td>Label (<code>Size</code> = quantity. Fill in the number of tags first, then enter the text. (This will override the default TAG assigned by the game)</td></tr></tbody></table>',2))])}const f=a(m,[["render",u],["__file","WeaponCotentMod.html.vue"]]),h=JSON.parse('{"path":"/en/Components/WeaponCotentMod.html","title":"WeaponCotentMod","lang":"en-US","frontmatter":{"category":["Components","Weapon"],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/WeaponCotentMod.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/WeaponCotentMod.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Documents"}],["meta",{"property":"og:title","content":"WeaponCotentMod"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WeaponCotentMod\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/WeaponCotentMod.md","localizedDate":"November 19, 2023"}');export{f as comp,h as data};