import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,a as e,d as s,w as d,b as t,e as r}from"./app-6e7f78a1.js";const h={},c=r('<h1 id="pathfindingbox" tabindex="-1"><a class="header-anchor" href="#pathfindingbox" aria-hidden="true">#</a> PathfindingBox</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Pathfinder box to delineate the bots&#39; movement space across the map</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Applied to an empty object</p><p>Volume of the object is the range (make sure to cover the water when using it for watercraft pathfinding)</p><p>No other add-ons (collision, rigidbody, etc.) are needed.</p><p>Or just use the prefabs in \\Assets\\Prefabs\\Map Elements\\Must Have\\Pathfinding (recommended, different names correspond to different types of pathfinding boxes, you can change them below, no need to get hung up).</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2>',10),u=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1),f=e("tr",null,[e("td",null,"type"),e("td",null,"enum.Type"),e("td",null,"Pathfinder Box Type (i.e. who this pathfinder box is used to qualify. Infantry=Infantry, Car=Land vahicle, Boat=Water vehicle)")],-1),p=e("tr",null,[e("td",null,"tiled"),e("td",null,"bool"),e("td",null,"Inside this PathfindingBox is a flat surface (which speeds up the pathfinding scanning time and may introduce some unwanted obstacles. Disabling this item ensures that NAV-MESH fits perfectly in the PathfindingBox. it is recommended to enable it)")],-1),m=e("tr",null,[e("td",null,"automaticCellSize"),e("td",null,"bool"),e("td",null,"Enable automatic path scanning fineness (smaller and finer, longer scanning time)")],-1),g=e("tr",null,[e("td",null,"cellSize"),e("td",null,"float"),e("td",null,"Scanning fineness")],-1),b=e("tr",null,[e("td",null,"characterRadius"),e("td",null,"float"),e("td",null,"Bot's radius size (how much space a Bot takes up when walking, distance from MAV-MESH, places that are not fully contained will be marked as unwalkable)")],-1),_=e("tr",null,[e("td",null,"climbHeight"),e("td",null,"float"),e("td",null,"Maximum relative slope size (in degrees)")],-1),x=e("tr",null,[e("td",null,"coverPointSpacing"),e("td",null,"float"),e("td",null,"Distance to search coverage points (for large maps, you can increase this value to around 1 to speed up scanning pathfinding time)")],-1),y=e("td",null,"blockers",-1),B=e("td",null,"Ignored Scanned Areas (if another PathfindingBox is to be used to scan a specific area, the NAV-MESH generation of this PathfindingBox can be blocked by adding another box as a blocker)",-1);function v(w,P){const n=i("RouterLink");return o(),l("div",null,[c,e("table",null,[u,e("tbody",null,[f,p,m,g,b,_,x,e("tr",null,[y,e("td",null,[s(n,{to:"/en/Components/PathfindingBox.html"},{default:d(()=>[t("PathfindingBox")]),_:1}),t("[]")]),B])])])])}const V=a(h,[["render",v],["__file","PathfindingBox.html.vue"]]);export{V as default};
