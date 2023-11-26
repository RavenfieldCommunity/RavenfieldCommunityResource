import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as e,e as a}from"./app-a724709e.js";const r={},h=a('<h1 id="actorskincontentmod" tabindex="-1"><a class="header-anchor" href="#actorskincontentmod" aria-hidden="true">#</a> ActorSkinContentMod</h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>人物皮肤导出配置组件，只有给Mesh应用这个组件才能被Unity导出与被游戏导入</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>先给模型绑骨</p><p>将其套用在一个空物体预制件</p><p>配置各个Skin时先在<code>Sizes</code>设置本次导出的Skin数量再配置各个皮肤</p><p>然后再各个MeshSkin槽位配置对应皮肤模型</p><p>最后选中物体，在菜单栏导出</p><p>MeshSkin槽位变量：</p><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>mesh</td><td>Mesh</td><td>此MeshSkin的Mesh（模型）</td></tr><tr><td>materials</td><td>Material[]</td><td>此MeshSkin模型所用材质</td></tr><tr><td>teamMaterial</td><td>int</td><td></td></tr></tbody></table><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>皮肤名</td></tr><tr><td>characterSkin</td><td>class.MeshSkin</td><td>第三人称的MeshSkin</td></tr><tr><td>armSkin</td><td>class.MeshSkin</td><td>第一人称手臂的MeshSkin</td></tr><tr><td>kickLegSkin</td><td>class.MeshSkin</td><td>第一人称腿的模型的MeshSkin</td></tr></tbody></table>',14),n=[h];function i(s,o){return d(),e("div",null,n)}const l=t(r,[["render",i],["__file","ActorSkinContentMod.html.vue"]]);export{l as default};
