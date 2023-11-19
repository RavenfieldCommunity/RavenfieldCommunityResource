import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as d,a as t,b as e,d as a,w as o,e as l}from"./app-6e7f78a1.js";const h={},c=t("h1",{id:"pathfindinglink",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pathfindinglink","aria-hidden":"true"},"#"),e(" PathfindingLink")],-1),u=t("h2",{id:"description",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),e(" Description")],-1),f=t("p",null,"Derived from the GraphModifier",-1),p=l('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Add to an empty object as a starting point</p><p>Or just use the Pathfinding Link.prefab of \\Assets\\Prefabs\\Map Elements\\Must Have\\ (recommended).</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2>',5),_=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Type"),t("th",null,"Description")])],-1),m=t("tr",null,[t("td",null,"end"),t("td",null,"Transform"),t("td",null,"End point (empty object)")],-1),b=t("tr",null,[t("td",null,"costFactor"),t("td",null,"float"),t("td",null,"Cost to Bot of going through this path (affects priority)")],-1),y=t("tr",null,[t("td",null,"oneWay"),t("td",null,"bool"),t("td",null,"It's a one-way street.")],-1),g=t("td",null,"type",-1),k=t("td",null,"type (i.e. who this pathfinder is used to qualify. Infantry=Infantry, Car=Land Carrier, Boat=Water Carrier)",-1);function x(w,v){const n=r("RouterLink");return s(),d("div",null,[c,u,f,t("p",null,[e("A forced pathfinder allows a place that is considered unwalkable by the NAV system but where walking can be forced for the AI to consider it walkable (seems like a bit of a messy way to put it), with a higher priority than "),a(n,{to:"/en/Components/AvoidanceBox.html"},{default:o(()=>[e("Avoidance Box")]),_:1})]),p,t("table",null,[_,t("tbody",null,[m,b,y,t("tr",null,[g,t("td",null,[a(n,{to:"/en/Components/PathfindingBox.html"},{default:o(()=>[e("PathfindingBox")]),_:1}),e(".Type")]),k])])])])}const A=i(h,[["render",x],["__file","PathfindingLink.html.vue"]]);export{A as default};
