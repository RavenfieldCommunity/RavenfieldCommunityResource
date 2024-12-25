import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as n,b as i,d as t,e as s,w as p,r as l,o as d}from"./app-om7Ms7nm.js";const c={};function h(m,e){const a=l("RouteLink");return d(),r("div",null,[e[3]||(e[3]=n('<h1 id="vehiclespawner" tabindex="-1"><a class="header-anchor" href="#vehiclespawner"><span>VehicleSpawner</span></a></h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>Vehicle spawning Points</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Applied to an empty object, you need to add the Mesh Filter (you should choose Resource\\Perview\\Default.obj in RFTools), Mesh Renderer and material by yourself.</p><p>Or just use Vehicle Spawner.prefab in \\Assets\\Prefabs\\Map Elements (recommended).</p>',6)),i("p",null,[e[1]||(e[1]=t("The object should be protected by ")),s(a,{to:"/en/Components/CapturePoint.html"},{default:p(()=>e[0]||(e[0]=[t("Capture Point")])),_:1}),e[2]||(e[2]=t(", otherwise there is a chance of error when exporting the map."))]),e[4]||(e[4]=n('<h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>spawnTime</td><td>float</td><td>Generation interval of two carriers</td></tr><tr><td>respawnType</td><td>enum.RespawnType</td><td>When to regenerate the carrier (AfterDestroyed=After the previous one is destroyed, AfterMoved=After the previous one is driven away, Never=Never)</td></tr><tr><td>typeToSpawn</td><td>enum.VehicleSpawnType</td><td>spawn type(Jeep, JeepMachineGun, Quad, Tank, AttackHelicopter, AttackPlane, Rhib, AttackBoat, BombPlane, TransportHelicopter, Apc)</td></tr><tr><td>prefab</td><td>GameObject</td><td>Custom spawn vehicle Prefab (i.e. specify one individually, this option is not affected by game options)</td></tr><tr><td>priority</td><td>byte</td><td>Priority (role unknown)</td></tr><tr><td>isRelevantPathfindingPointForBoats</td><td>bool</td><td>is the Pathfinding Point of the boat (enable when the generated carrier is a Boat)</td></tr></tbody></table>',3))])}const y=o(c,[["render",h],["__file","VehicleSpawner.html.vue"]]),b=JSON.parse('{"path":"/en/Components/VehicleSpawner.html","title":"VehicleSpawner","lang":"en-US","frontmatter":{"category":["Components","Map"],"description":"VehicleSpawner Description Vehicle spawning Points Usage Applied to an empty object, you need to add the Mesh Filter (you should choose Resource\\\\Perview\\\\Default.obj in RFTools),...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/VehicleSpawner.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/VehicleSpawner.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Documents"}],["meta",{"property":"og:title","content":"VehicleSpawner"}],["meta",{"property":"og:description","content":"VehicleSpawner Description Vehicle spawning Points Usage Applied to an empty object, you need to add the Mesh Filter (you should choose Resource\\\\Perview\\\\Default.obj in RFTools),..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VehicleSpawner\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/VehicleSpawner.md","localizedDate":"November 19, 2023","autoDesc":true}');export{y as comp,b as data};
