import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as i,c as r,a as e,b as t,d as n,w as l,e as s}from"./app-DXZsKAOQ.js";const p={},h=s('<h1 id="教程-vhc-1-载具" tabindex="-1"><a class="header-anchor" href="#教程-vhc-1-载具"><span>教程 vhc.1 载具</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>在此文档中，我们将为您呈现制作一个载具的大致过程，使用原版载具作为示例</p><h2 id="_0-0-构思" tabindex="-1"><a class="header-anchor" href="#_0-0-构思"><span>0.0 构思</span></a></h2>',4),u=e("p",null,"你要做的东西对应你所需要使用的Unity组件：",-1),_=e("thead",null,[e("tr",null,[e("th",null,"载具类型"),e("th",null,"对应组件")])],-1),m=e("td",null,"飞机",-1),g=e("td",null,"简单载具、固定载具",-1),f=e("td",null,"直升机",-1),v=e("td",null,"船只",-1),b=e("td",null,"碰碰车、车辆（带物理效果）",-1),y={href:"https://metalgear.fandom.com/wiki/Metal_Gear_REX",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>上述的每一种载具都需要以下流程：</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TD
    A<span class="token text string">[制作载具模型并创建材质]</span>
    A <span class="token arrow operator">--&gt;</span> B[&quot;\`制作动画（仅AnimationDrivenVehicle）
    制作载具图标
    制作音效\`&quot;]
    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[&quot;Unity内配置组件&quot;]</span>
    C <span class="token arrow operator">--&gt;</span> D<span class="token text string">[导出与发布]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是的，又要出发了！</p><h2 id="_1-0-确定所需资源" tabindex="-1"><a class="header-anchor" href="#_1-0-确定所需资源"><span>1.0 确定所需资源</span></a></h2>`,4),C={href:"https://docs.unity.cn/cn/2020.3/Manual/ParticleSystems.html",target:"_blank",rel:"noopener noreferrer"},A=s('<p>上述三项资源需要您自行上网寻找或按要仿制的游戏武器自行寻找对应原版游戏美术资源、或自制</p><h2 id="_1-1-调整模型" tabindex="-1"><a class="header-anchor" href="#_1-1-调整模型"><span>1.1 调整模型</span></a></h2><p>模型这步真的没什么好说的，因载具而异</p><p>如果只是想练手，可以直接使用<code>RFTools\\Models\\Vehicles</code>内的模型</p><p>如果想自己制作而建模有些许不行，可以自行寻找模型或按要仿制的游戏武器自行寻找对应原版游戏美术资源</p><p>值得注意的是模型的几个问题：</p><p>确保模型的面数始终保持在一个相对较低的范围如8万,减少在Blender里三角面与四角面的混用,以防在规格化转换与材质映射中出现问题</p><p>确保模型的原点、法向正确</p><p>分好可动件与子级</p><p>总而言之、确保模型的规格化</p>',10),x={class:"hint-container details"},S=e("summary",null,"如果是AnimationDrivenVehicle...（制作动画）",-1),T={href:"https://docs.unity.cn/cn/2020.3/Manual/AnimationSection.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=3000223001",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"已经够用",-1),D=e("h2",{id:"_2-0-导入unity",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-0-导入unity"},[e("span",null,"2.0 导入Unity")])],-1),M={href:"/cn/Tutorials/#%E6%A8%A1%E5%9E%8B%E3%80%81%E5%8A%A8%E7%94%BB%E5%88%B6%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"},R=s('<p>打开Unity项目</p><p>如果您未创建Unity项目或导入<code>RFTools.unitypackage</code>，请自行导入，此处不再赘述</p><p>然后新建一个场景，乌鸦官方没有提供一个类似<code>Weapon Lab.unity</code>的场景用于测试载具</p><p>我们将在这个场景继续我们的全部工作</p><p>将载具模型添加入场景</p><h2 id="_2-1-各个载具组成-简单换皮向" tabindex="-1"><a class="header-anchor" href="#_2-1-各个载具组成-简单换皮向"><span>2.1 各个载具组成（简单换皮向）</span></a></h2><p>出于快速入门与简单易行的原因，我们将向你介绍一种简单易行的方法来快速制作载具</p><p>首先按照要制作的载具类型，复制粘贴一个原版对应载具的Prefab，这就是我们的工作prefab</p><p>各个原版载具包含什么？</p><h2 id="_2-2-各个载具组成-复杂向" tabindex="-1"><a class="header-anchor" href="#_2-2-各个载具组成-复杂向"><span>2.2 各个载具组成（复杂向）</span></a></h2><p>以下为各个类型原版载具的组成（面向差异，与一些比较隐蔽的步骤）</p><p>下面的一些配置项跟着的值为原版各载具的值</p><h3 id="_2-1-1-jeep与武装jeep" tabindex="-1"><a class="header-anchor" href="#_2-1-1-jeep与武装jeep"><span>2.1.1 Jeep与武装Jeep</span></a></h3>',13),V=s(`<p>在这个模型中，模型包含车体、座位、方向盘、车轮，要进行的操作包括：</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 添加载具组件、Rigidbody与AudioSource组件
<span class="token list punctuation">-</span> 配置，添加BoxCollider、方向盘动画、粒子效果、音效、车轮、座位及相机
<span class="token list punctuation">-</span> 配置载具组件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个空物体（这将作为载具物体。不推荐直接将模型拖入场景，模型物体作为载具物体，模型的中心点可能不正确），将模型（<code>RFTools/Models/Vehicles/jeep.blend</code>）拖入空物体内，作为其子物体添加进去</p>`,3),j=e("code",null,"mass",-1),E=e("code",null,"drag",-1),L=e("code",null,"angularDrag",-1),P={href:"https://docs.unity.cn/cn/2020.3/Manual/class-Rigidbody.html",target:"_blank",rel:"noopener noreferrer"},U=s("<p>在载具物体内均匀添加BoxCollider，使其基本覆盖载具，可以留一些空</p><p>与AudioSource，勾选<code>loop</code>，参下）组件</p><p>找到方向盘物体，可以直接挂上SteeringWheel组件并配置，确保方向盘模型的z轴在LOCAL坐标模式下转地正常（否则你得套一个空物体在模型上，作为子物体）：</p><p>{缺图}</p><p>再然后在方向盘下放两个子物体作为手放在方向盘的位置，待会备用：</p><p>{缺图}</p><p>新建两个Particle System粒子系统子物体（或从原版jeep处复制粘贴，推荐），作为载具的<code>smokeParticles</code>和<code>deathParticles</code></p>",7),N=e("code",null,"duration",-1),O=e("code",null,"looping",-1),J=e("code",null,"startLifetime",-1),z=e("code",null,"startSpeed",-1),q=e("code",null,"startSize",-1),F=e("code",null,"startRotation",-1),H=e("code",null,"startColor",-1),W=e("code",null,"scalingMode",-1),Z=e("code",null,"playOnAwake",-1),G=e("code",null,"rateOverTime",-1),I=e("code",null,"bursts",-1),K=e("code",null,"material",-1),X=e("code",null,"sortingFudge",-1),Q=e("code",null,"reflectionProbes",-1),Y={href:"https://docs.unity.cn/cn/2020.3/Manual/PartSysMainModule.html",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,[t("然后将其放入载具组件对应位置"),e("code",null,"smokeParticles"),t("和"),e("code",null,"deathParticles")],-1),ee=e("p",null,[t("新建两个空物体，并分别挂载AudioSource组件（如果你刚才是复制粘贴原版jeep粒子系统的话，那么应该已经带了AudioSource组件，可以免去这步），作为载具的"),e("code",null,"impactAudio"),t("和"),e("code",null,"deathSound")],-1),te=e("code",null,"audioClip",-1),ne=e("code",null,"playOnAwake",-1),oe=e("code",null,"priority",-1),le=e("code",null,"volumeRolloff",-1),ae=e("code",null,"maxDistance",-1),se={href:"https://docs.unity.cn/cn/2020.3/Manual/class-AudioSource.html",target:"_blank",rel:"noopener noreferrer"},de=s('<p>然后将其放入载具组件对应位置</p><p>新建一个空物体，添加CarWheel组件（如果CarWheel组件的绿色圆圈旋转不正确，你需要先旋转一下这个空物体，使它回到正确位置）：</p><p>将一个车轮模型作为子物体放进去，调整好位置，使其与圆圈重合：</p><p>然后删掉其他的轮子模型物体，复制粘贴做好的这个放到原位置上（你也可以分别弄，但会麻烦得多）。这个不用像刚才一样将其放入载具组件对应位置（因为不需要放）：</p><p>新建一个相机子物体，放在载具内合适位置，禁用其上的Camera组件，添加ThirdPersonCameraLook组件。作为第三人称视角相机，备用</p><p>新建一个空物体并添加Seat、BoxCollider组件（你也可以直接在模型物体上添加组件，但不推荐，除非模型的缩放为0），然后调整BoxCollider大小，将一个座椅模型作为子物体放进去并调整好位置使其重合与BoxCollider重合</p><p>然后删掉其他的座椅模型物体，复制粘贴做好的这个放到原位置上（如果你是直接在模型物体上添加组件，复制粘贴组件即可。你也可以分别弄，但会麻烦得多）。这个它们放入载具组件对应位置<code>seats</code></p><p>配置各个Seat的<code>allowLean</code>、<code>exitOffset</code>、<code>ThirdPersonCamera</code>，放入刚才新建的相机</p><p>对于驾驶位的Seat，一并配置<code>handTargetL</code>、<code>handTargetR</code>与<code>weapons</code>，（使用CarHorn组件，如果你想给驾驶位加个喇叭，像制作武器Mod一样配置CarHorn组件）</p><p>最后配置完ArcadeCar组件的剩余项<code>name</code>、<code>crashDamageSpeedThrehshold</code>、<code>crashDamageMultiplier</code>、<code>aiType</code>、<code>aiUseToDefendPoint</code>、<code>blip</code>、<code>disableOnDeath</code>、<code>acceleration</code>、<code>topSpeed</code>、<code>brakeAccelerationTriggerSpeed</code>、<code>driftByBrake</code>、<code>extraStability</code>、<code>groundDrag</code></p><h2 id="_3-0-测试与导出" tabindex="-1"><a class="header-anchor" href="#_3-0-测试与导出"><span>3.0 测试与导出</span></a></h2>',11);function ce(ie,re){const o=d("RouteLink"),a=d("ExternalLinkIcon");return i(),r("div",null,[h,e("p",null,[t("同样地，像"),n(o,{to:"/cn/Tutorials/wpn.1.html"},{default:l(()=>[t("wpn.1")]),_:1}),t("一样")]),u,e("table",null,[_,e("tbody",null,[e("tr",null,[m,e("td",null,[n(o,{to:"/cn/Components/Airplane.html"},{default:l(()=>[t("Airplane")]),_:1})])]),e("tr",null,[g,e("td",null,[n(o,{to:"/cn/Components/Vehicle.html"},{default:l(()=>[t("Vehicle")]),_:1})])]),e("tr",null,[f,e("td",null,[n(o,{to:"/cn/Components/Helicopter.html"},{default:l(()=>[t("Helicopter")]),_:1})])]),e("tr",null,[v,e("td",null,[n(o,{to:"/cn/Components/Boat.html"},{default:l(()=>[t("Boat")]),_:1})])]),e("tr",null,[b,e("td",null,[n(o,{to:"/cn/Components/ArcadeCar.html"},{default:l(()=>[t("ArcadeCar")]),_:1})])]),e("tr",null,[e("td",null,[e("a",y,[t("MG Rex"),n(a)]),t("（自定义动画）")]),e("td",null,[n(o,{to:"/cn/Components/AnimationDrivenVehicle.html"},{default:l(()=>[t("AnimationDrivenVehicle")]),_:1})])])])]),k,e("p",null,[t("类似的，一个载具同样包含模型、音效、以及"),e("a",C,[t("粒子效果"),n(a)])]),A,e("details",x,[S,e("p",null,[t("未实装、请先参考"),e("a",T,[t("Unity文档"),n(a)]),t("与社区"),e("a",B,[t("Steam指南"),n(a)])]),w]),D,e("p",null,[t("导出的过程敬请参考教程首页的"),e("a",M,[t("提示"),n(a)])]),R,e("p",null,[t("原版中Jeep使用的是"),n(o,{to:"/cn/Components/ArcadeCar.html"},{default:l(()=>[t("ArcadeCar")]),_:1}),t(",你也可以直接使用"),n(o,{to:"/cn/Components/Vehicle.html"},{default:l(()=>[t("Vehicle")]),_:1}),t(",但可能会缺失一些物理效果")]),V,e("p",null,[t("在载具物体顶层添加"),n(o,{to:"/cn/Components/ArcadeCar.html"},{default:l(()=>[t("ArcadeCar")]),_:1}),t("组件")]),e("p",null,[t("在载具物体顶层添加Rigidbody组件配置其"),j,t("=300、"),E,t("=0.1、"),L,t("=3，参考"),e("a",P,[t("刚体"),n(a)])]),U,e("p",null,[t("仿照原版jeep，配置这两个粒子系统的Main（原版中改变了"),N,t("、"),O,t("、"),J,t("、"),z,t("、"),q,t("、"),F,t("、"),H,t("、"),W,t("、"),Z,t(",注意配置项旁边的小三角）、Emission（原版中改变了"),G,t("、"),I,t("）、Renderer模块（原版中改变了"),K,t("、"),X,t("、"),Q,t("），参见"),e("a",Y,[t("粒子系统"),n(a)])]),$,ee,e("p",null,[t("配置这两个AudioSource组件（原版中改变了"),te,t("、"),ne,t("、"),oe,t("、"),le,t("、"),ae,t("、立体音3D曲线）参见"),e("a",se,[t("AudioSource组件"),n(a)])]),de])}const ue=c(p,[["render",ce],["__file","vhc.1.html.vue"]]),_e=JSON.parse('{"path":"/cn/Tutorials/vhc.1.html","title":"教程 vhc.1 载具","lang":"zh-CN","frontmatter":{"category":["教程"],"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Tutorials/vhc.1.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"教程 vhc.1 载具"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-01T14:04:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-01T14:04:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"教程 vhc.1 载具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-01T14:04:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"0.0 构思","slug":"_0-0-构思","link":"#_0-0-构思","children":[]},{"level":2,"title":"1.0 确定所需资源","slug":"_1-0-确定所需资源","link":"#_1-0-确定所需资源","children":[]},{"level":2,"title":"1.1 调整模型","slug":"_1-1-调整模型","link":"#_1-1-调整模型","children":[]},{"level":2,"title":"2.0 导入Unity","slug":"_2-0-导入unity","link":"#_2-0-导入unity","children":[]},{"level":2,"title":"2.1 各个载具组成（简单换皮向）","slug":"_2-1-各个载具组成-简单换皮向","link":"#_2-1-各个载具组成-简单换皮向","children":[]},{"level":2,"title":"2.2 各个载具组成（复杂向）","slug":"_2-2-各个载具组成-复杂向","link":"#_2-2-各个载具组成-复杂向","children":[{"level":3,"title":"2.1.1 Jeep与武装Jeep","slug":"_2-1-1-jeep与武装jeep","link":"#_2-1-1-jeep与武装jeep","children":[]}]},{"level":2,"title":"3.0 测试与导出","slug":"_3-0-测试与导出","link":"#_3-0-测试与导出","children":[]}],"git":{"createdTime":1691332050000,"updatedTime":1722521090000,"contributors":[{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":8},{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":6}]},"filePathRelative":"cn/Tutorials/vhc.1.md","localizedDate":"2023年8月6日"}');export{ue as comp,_e as data};
