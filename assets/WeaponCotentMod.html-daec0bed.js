import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as s,a as t,b as e,d as o,w as l,e as i}from"./app-a724709e.js";const c={},h=t("h1",{id:"weaponcotentmod",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#weaponcotentmod","aria-hidden":"true"},"#"),e(" WeaponCotentMod")],-1),u=t("h2",{id:"描述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),e(" 描述")],-1),_=t("h2",{id:"用法",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#用法","aria-hidden":"true"},"#"),e(" 用法")],-1),p=t("p",null,"将其套用在一个空物体预制件或武器本身配置即可",-1),m=t("p",null,"配置各个武器时先在Sizes设置本次导出的武器数量",-1),A=t("p",null,"最后选中物体，在菜单栏导出",-1),b=t("h2",{id:"注释",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#注释","aria-hidden":"true"},"#"),e(" 注释")],-1),S=t("p",null,"游戏默认TAG标签的自动分配机制：",-1),f=t("thead",null,[t("tr",null,[t("th",null,"TAG"),t("th",null,"译名"),t("th",null,"机制")])],-1),G=t("tr",null,[t("td",null,"CLOSE QUARTERS"),t("td",null,"近战武器"),t("td",null,"slot=Primary, 武器的projectilesPerShot>1")],-1),y=t("tr",null,[t("td",null,"ASSAULT"),t("td",null,"突击性武器"),t("td",null,"slot=Primary, 武器的auto=true")],-1),R=t("tr",null,[t("td",null,"MARKSMAN"),t("td",null,"远程武器"),t("td",null,"slot=Primary且不符合CLOSE QUARTERS与ASSAULT的后一个判定")],-1),E=t("tr",null,[t("td",null,"EQUIPMENT"),t("td",null,"装备"),t("td",null,"slot=Gear或LargeGear，武器的projectilesPerShot=null或都不符合GRENADES与ANTI ARMOR的后一个判定")],-1),N=t("td",null,"GRENADES",-1),P=t("td",null,"手榴弹",-1),T=t("td",null,"ANTI ARMOR",-1),x=t("td",null,"反装甲武器",-1),L=t("tr",null,[t("td",null,"UNTAGGED"),t("td",null,"未分类"),t("td",null,"均不符合以上判定")],-1),C=i('<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>武器名（意义不等于武器的<code>displayName</code>）</td></tr><tr><td>prefab</td><td>GameObject</td><td>武器的Prefab</td></tr><tr><td>slot</td><td>enum.WeaponSlot</td><td>武器槽位类型(Primary=主武器, Secondary父武器, Gear一小格装备, LargeGear=两格装备)</td></tr><tr><td>usableByAi</td><td>bool</td><td>此武器Bot可用</td></tr><tr><td>usableByAiAllowOverride</td><td>bool</td><td>此武器Bot可用（优先）</td></tr><tr><td>type</td><td>enum.LoadoutType</td><td>武器类型(Normal=普通, Stealth=消声类, AntiArmor=反装甲, Repair=载具修理工具, ResupplyAmmo=弹药补给包, ResupplyHealth=健康补给包)</td></tr><tr><td>sortPriority</td><td>int</td><td></td></tr><tr><td>tags</td><td>string[]</td><td>标签（<code>Size</code>=数量。先填写标签数量，再输入文本。会覆盖游戏默认分配的TAG）</td></tr></tbody></table>',2);function g(j,M){const d=r("RouterLink");return a(),s("div",null,[h,u,t("p",null,[e("武器导出配置组件，只有给载具预制件(包含"),o(d,{to:"/cn/Components/Weapon.html"},{default:l(()=>[e("Weapon")]),_:1}),e("或由其派生的组件)应用这个组件才能被Unity导出与被游戏导入")]),_,p,m,A,b,S,t("table",null,[f,t("tbody",null,[G,y,R,E,t("tr",null,[N,P,t("td",null,[e("slot=Gear或LargeGear，武器的projectiles是"),o(d,{to:"/cn/Components/GrenadeProjectile.html"},{default:l(()=>[e("GrenadeProjectile")]),_:1})])]),t("tr",null,[T,x,t("td",null,[e("slot=Gear或LargeGear，武器的projectiles是"),o(d,{to:"/cn/Components/ExplodingProjectile.html"},{default:l(()=>[e("ExplodingProjectile")]),_:1}),e("或其派生类")])]),L])]),C])}const O=n(c,[["render",g],["__file","WeaponCotentMod.html.vue"]]);export{O as default};
