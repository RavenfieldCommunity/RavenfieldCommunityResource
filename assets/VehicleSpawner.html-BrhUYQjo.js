import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o,c as i,a as d,b as e,d as l,w as c,e as t}from"./app-BgL-Tz3l.js";const p={},s=t('<h1 id="vehiclespawner" tabindex="-1"><a class="header-anchor" href="#vehiclespawner"><span>VehicleSpawner</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>载具生成点</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>套用在一个空物体，需自行添加Mesh Filter（应选择RFTools内的Resource\\Perview\\Default.obj）、Mesh Renderer与材质</p><p>或者直接使用\\Assets\\Prefabs\\Map Elements内的Vehicle Spawner.prefab(推荐)</p>',6),h=t('<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>spawnTime</td><td>float</td><td>两个载具的生成间隔</td></tr><tr><td>respawnType</td><td>enum.RespawnType</td><td>何时再生成载具(AfterDestroyed=前一个报废后, AfterMoved=前一个开走后, Never=从不)</td></tr><tr><td>typeToSpawn</td><td>enum.VehicleSpawnType</td><td>生成类型(Jeep, JeepMachineGun, Quad, Tank, AttackHelicopter, AttackPlane, Rhib, AttackBoat, BombPlane, TransportHelicopter, Apc)</td></tr><tr><td>prefab</td><td>GameObject</td><td>自定义生成载具Prefab（即单独指定一个，此选项不受游戏选项的影响）</td></tr><tr><td>priority</td><td>byte</td><td>优先级（作用未知）</td></tr><tr><td>isRelevantPathfindingPointForBoats</td><td>bool</td><td>是船的Pathfinding Point（当生成的载具为Boat时请启用）</td></tr></tbody></table>',3);function m(f,u){const a=r("RouteLink");return o(),i("div",null,[s,d("p",null,[e("应将此物体至于"),l(a,{to:"/cn/Components/CapturePoint.html"},{default:c(()=>[e("据点Capture Point")]),_:1}),e("的保护范围，否则导出地图时有概率报错")]),h])}const g=n(p,[["render",m],["__file","VehicleSpawner.html.vue"]]),_=JSON.parse('{"path":"/cn/Components/VehicleSpawner.html","title":"VehicleSpawner","lang":"zh-CN","frontmatter":{"category":["组件","地图"],"head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ravenfieldcommunity.github.io/docs/en/Components/VehicleSpawner.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Components/VehicleSpawner.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"VehicleSpawner"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-17T09:37:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T09:37:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VehicleSpawner\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-17T09:37:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]}],"git":{"createdTime":1684053664000,"updatedTime":1686994675000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":3}]},"filePathRelative":"cn/Components/VehicleSpawner.md","localizedDate":"2023年5月14日"}');export{g as comp,_ as data};