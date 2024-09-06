import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as l,b as e,e as s,w as r,d as n,r as d,o as p}from"./app-CrnLyEfW.js";const u={};function h(m,t){const a=d("RouteLink");return p(),o("div",null,[t[12]||(t[12]=l('<h1 id="pathfindingbox" tabindex="-1"><a class="header-anchor" href="#pathfindingbox"><span>PathfindingBox</span></a></h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>Pathfinder box to delineate the bots&#39; movement space across the map</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Applied to an empty object</p><p>Volume of the object is the range (make sure to cover the water when using it for watercraft pathfinding)</p><p>No other add-ons (collision, rigidbody, etc.) are needed.</p><p>Or just use the prefabs in \\Assets\\Prefabs\\Map Elements\\Must Have\\Pathfinding (recommended, different names correspond to different types of pathfinding boxes, you can change them below, no need to get hung up).</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2>',10)),e("table",null,[t[11]||(t[11]=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])],-1)),e("tbody",null,[t[4]||(t[4]=e("tr",null,[e("td",null,"type"),e("td",null,"enum.Type"),e("td",null,"Pathfinder Box Type (i.e. who this pathfinder box is used to qualify. Infantry=Infantry, Car=Land vahicle, Boat=Water vehicle)")],-1)),t[5]||(t[5]=e("tr",null,[e("td",null,"tiled"),e("td",null,"bool"),e("td",null,"Inside this PathfindingBox is a flat surface (which speeds up the pathfinding scanning time and may introduce some unwanted obstacles. Disabling this item ensures that NAV-MESH fits perfectly in the PathfindingBox. it is recommended to enable it)")],-1)),t[6]||(t[6]=e("tr",null,[e("td",null,"automaticCellSize"),e("td",null,"bool"),e("td",null,"Enable automatic path scanning fineness (smaller and finer, longer scanning time)")],-1)),t[7]||(t[7]=e("tr",null,[e("td",null,"cellSize"),e("td",null,"float"),e("td",null,"Scanning fineness")],-1)),t[8]||(t[8]=e("tr",null,[e("td",null,"characterRadius"),e("td",null,"float"),e("td",null,"Bot's radius size (how much space a Bot takes up when walking, distance from MAV-MESH, places that are not fully contained will be marked as unwalkable)")],-1)),t[9]||(t[9]=e("tr",null,[e("td",null,"climbHeight"),e("td",null,"float"),e("td",null,"Maximum relative slope size (in degrees)")],-1)),t[10]||(t[10]=e("tr",null,[e("td",null,"coverPointSpacing"),e("td",null,"float"),e("td",null,"Distance to search coverage points (for large maps, you can increase this value to around 1 to speed up scanning pathfinding time)")],-1)),e("tr",null,[t[2]||(t[2]=e("td",null,"blockers",-1)),e("td",null,[s(a,{to:"/en/Components/PathfindingBox.html"},{default:r(()=>t[0]||(t[0]=[n("PathfindingBox")])),_:1}),t[1]||(t[1]=n("[]"))]),t[3]||(t[3]=e("td",null,"Ignored Scanned Areas (if another PathfindingBox is to be used to scan a specific area, the NAV-MESH generation of this PathfindingBox can be blocked by adding another box as a blocker)",-1))])])])])}const g=i(u,[["render",h],["__file","PathfindingBox.html.vue"]]),b=JSON.parse('{"path":"/en/Components/PathfindingBox.html","title":"PathfindingBox","lang":"en-US","frontmatter":{"category":["Components","Map"],"head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/PathfindingBox.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/PathfindingBox.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Documents"}],["meta",{"property":"og:title","content":"PathfindingBox"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PathfindingBox\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/PathfindingBox.md","localizedDate":"November 19, 2023"}');export{g as comp,b as data};
