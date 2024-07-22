import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as c,c as d,a as e,b as t,d as n,w as l,e as i}from"./app-DEPi_5o8.js";const p={},h=i('<h1 id="教程-vhc-1-载具" tabindex="-1"><a class="header-anchor" href="#教程-vhc-1-载具"><span>教程 vhc.1 载具</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>在此文档中，我们将为您呈现制作一个载具的大致过程，使用原版载具作为示例</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>同样地，在本文档中，我们不会指导您制作套皮载具（隐藏原模型Render的事）</strong></p></div><h2 id="_0-0-构思" tabindex="-1"><a class="header-anchor" href="#_0-0-构思"><span>0.0 构思</span></a></h2>',5),u=e("p",null,"你要做的东西对应你所需要使用的Unity组件：",-1),_=e("thead",null,[e("tr",null,[e("th",null,"载具类型"),e("th",null,"对应组件")])],-1),m=e("td",null,"飞机",-1),v=e("td",null,"简单载具、固定载具",-1),f=e("td",null,"直升机",-1),g=e("td",null,"船只",-1),b=e("td",null,"碰碰车、车辆（带物理效果）",-1),y={href:"https://metalgear.fandom.com/wiki/Metal_Gear_REX",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>上述的每一种载具都需要以下流程：</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TD
    A<span class="token text string">[制作载具模型并创建材质]</span>
    A <span class="token arrow operator">--&gt;</span> B[&quot;\`制作动画（仅AnimationDrivenVehicle）
    制作载具图标
    制作音效\`&quot;]
    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[&quot;Unity内配置组件&quot;]</span>
    C <span class="token arrow operator">--&gt;</span> D<span class="token text string">[导出与发布]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是的，又要出发了！</p><h2 id="_1-0-确定所需资源" tabindex="-1"><a class="header-anchor" href="#_1-0-确定所需资源"><span>1.0 确定所需资源</span></a></h2>`,4),x={href:"https://docs.unity.cn/cn/2020.3/Manual/ParticleSystems.html",target:"_blank",rel:"noopener noreferrer"},A=i('<p>上述三项资源需要您自行上网寻找或按要仿制的游戏武器自行寻找对应原版游戏美术资源、或自制</p><h2 id="_1-1-调整模型" tabindex="-1"><a class="header-anchor" href="#_1-1-调整模型"><span>1.1 调整模型</span></a></h2><p>模型这步真的没什么好说的，因载具而异</p><p>如果只是想练手，可以直接使用<code>RFTools\\Models\\Vehicles</code>内的模型</p><p>如果想自己制作而建模有些许不行，可以自行寻找模型或按要仿制的游戏武器自行寻找对应原版游戏美术资源</p><p>值得注意的是模型的几个问题：</p><p>确保模型的面数始终保持在一个相对较低的范围如8万,减少在Blender里三角面与四角面的混用,以防在规格化转换与材质映射中出现问题</p><p>确保模型的原点、法向正确</p><p>分好可动件与子级</p><p>总而言之、确保模型的规格化</p>',10),C={class:"hint-container details"},w=e("summary",null,"如果是AnimationDrivenVehicle...（制作动画）",-1),T={href:"https://docs.unity.cn/cn/2020.3/Manual/AnimationSection.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=3000223001",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"已经够用",-1),E=e("h2",{id:"_2-0-导入unity",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-0-导入unity"},[e("span",null,"2.0 导入Unity")])],-1),R={href:"/cn/Tutorials/#%E6%A8%A1%E5%9E%8B%E3%80%81%E5%8A%A8%E7%94%BB%E5%88%B6%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"},j=i('<p>打开Unity项目</p><p>如果您未创建Unity项目或导入RFTools.unitypackage，请自行导入，此处不再赘述</p><p>然后新建一个场景，乌鸦官方没有提供一个类似<code>Weapon Lab.unity</code>的场景用于测试载具</p><p>我们将在这个场景继续我们的全部工作</p><p>将载具模型添加入场景</p><h2 id="_2-1-各个载具组成" tabindex="-1"><a class="header-anchor" href="#_2-1-各个载具组成"><span>2.1 各个载具组成</span></a></h2><p>一个载具包含什么？</p><p>以下为各个类型载具的组成</p><h3 id="_2-1-1-jeep与武装jeep" tabindex="-1"><a class="header-anchor" href="#_2-1-1-jeep与武装jeep"><span>2.1.1 Jeep与武装Jeep</span></a></h3>',9),D=i(`<p>在这个模型中，模型包含车体、座位、方向盘、车轮，要进行的操作包括：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 添加载具组件、Rigidbody与Audio Source组件并配置（包括粒子效果）
<span class="token list punctuation">-</span> 配置方向盘动画、车轮、座位及相机
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L=e("h2",{id:"_3-0-测试与导出",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-0-测试与导出"},[e("span",null,"3.0 测试与导出")])],-1);function N(S,U){const a=s("RouteLink"),o=s("ExternalLinkIcon");return c(),d("div",null,[h,e("p",null,[t("同样地，像"),n(a,{to:"/cn/Tutorials/wpn.1.html"},{default:l(()=>[t("wpn.1")]),_:1}),t("一样")]),u,e("table",null,[_,e("tbody",null,[e("tr",null,[m,e("td",null,[n(a,{to:"/cn/Components/Airplane.html"},{default:l(()=>[t("Airplane")]),_:1})])]),e("tr",null,[v,e("td",null,[n(a,{to:"/cn/Components/Vehicle.html"},{default:l(()=>[t("Vehicle")]),_:1})])]),e("tr",null,[f,e("td",null,[n(a,{to:"/cn/Components/Helicopter.html"},{default:l(()=>[t("Helicopter")]),_:1})])]),e("tr",null,[g,e("td",null,[n(a,{to:"/cn/Components/Boat.html"},{default:l(()=>[t("Boat")]),_:1})])]),e("tr",null,[b,e("td",null,[n(a,{to:"/cn/Components/ArcadeCar.html"},{default:l(()=>[t("ArcadeCar")]),_:1})])]),e("tr",null,[e("td",null,[e("a",y,[t("MG Rex"),n(o)]),t("（自定义动画）")]),e("td",null,[n(a,{to:"/cn/Components/AnimationDrivenVehicle.html"},{default:l(()=>[t("AnimationDrivenVehicle")]),_:1})])])])]),k,e("p",null,[t("类似的，一个载具同样包含模型、音效、以及"),e("a",x,[t("粒子效果"),n(o)])]),A,e("details",C,[w,e("p",null,[t("未实装、请先参考"),e("a",T,[t("Unity文档"),n(o)]),t("与社区"),e("a",B,[t("Steam指南"),n(o)])]),V]),E,e("p",null,[t("导出的过程敬请参考教程首页的"),e("a",R,[t("提示"),n(o)])]),j,e("p",null,[t("原版中Jeep使用的是"),n(a,{to:"/cn/Components/ArcadeCar.html"},{default:l(()=>[t("ArcadeCar")]),_:1}),t(",你也可以直接使用"),n(a,{to:"/cn/Components/Vehicle.html"},{default:l(()=>[t("Vehicle")]),_:1}),t(",但可能会缺失一些物理效果")]),D,e("p",null,[t("在载具模型顶层添加"),n(a,{to:"/cn/Components/ArcadeCar.html"},{default:l(()=>[t("ArcadeCar")]),_:1}),t("与Rigidbody与Audio Source组件")]),L])}const q=r(p,[["render",N],["__file","vhc.1.html.vue"]]),z=JSON.parse('{"path":"/cn/Tutorials/vhc.1.html","title":"教程 vhc.1 载具","lang":"zh-CN","frontmatter":{"category":["教程"],"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Tutorials/vhc.1.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"教程 vhc.1 载具"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-22T13:40:35.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-22T13:40:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"教程 vhc.1 载具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-22T13:40:35.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"0.0 构思","slug":"_0-0-构思","link":"#_0-0-构思","children":[]},{"level":2,"title":"1.0 确定所需资源","slug":"_1-0-确定所需资源","link":"#_1-0-确定所需资源","children":[]},{"level":2,"title":"1.1 调整模型","slug":"_1-1-调整模型","link":"#_1-1-调整模型","children":[]},{"level":2,"title":"2.0 导入Unity","slug":"_2-0-导入unity","link":"#_2-0-导入unity","children":[]},{"level":2,"title":"2.1 各个载具组成","slug":"_2-1-各个载具组成","link":"#_2-1-各个载具组成","children":[{"level":3,"title":"2.1.1 Jeep与武装Jeep","slug":"_2-1-1-jeep与武装jeep","link":"#_2-1-1-jeep与武装jeep","children":[]}]},{"level":2,"title":"3.0 测试与导出","slug":"_3-0-测试与导出","link":"#_3-0-测试与导出","children":[]}],"git":{"createdTime":1691332050000,"updatedTime":1721655635000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":6},{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":3}]},"filePathRelative":"cn/Tutorials/vhc.1.md","localizedDate":"2023年8月6日"}');export{q as comp,z as data};
