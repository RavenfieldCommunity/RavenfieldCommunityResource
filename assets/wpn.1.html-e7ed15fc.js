import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as h,a as n,d as t,w as a,b as e,e as r}from"./app-53523fe3.js";const c={},u=r('<h1 id="wpn-1-武器" tabindex="-1"><a class="header-anchor" href="#wpn-1-武器" aria-hidden="true">#</a> wpn.1 武器</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>在此文档中，我们将为您呈现制作一个武器的大致过程并详细解释每一步制作过程</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>在本文档中，我们不会指导您制作套皮武器，在武器本身各方面高质量的情况下，这样固能快速生产大量高质量MOD，但在质量不可控的情况下这种做法却会让低质MOD污染Steam工坊环境，因此我们不提倡初阶MODDER模仿这些做法，套皮的流程敬请您在日后的实操中摸索。</strong></p></div><p><strong>当前您所需掌握的技能点：</strong></p><p>简单建模</p><p>Blender基本操作</p><p>打关键帧</p><p>Unity游戏物体基本变换</p><p>Unity组件的应用</p><p>Animator组件</p><p>动画机的应用（States、BlendTree...）</p><h2 id="_0-0-构思" tabindex="-1"><a class="header-anchor" href="#_0-0-构思" aria-hidden="true">#</a> 0.0 构思</h2><p>想什么？⊙﹏⊙∥</p><p>想你要做什么东西，</p><p>你要做的东西对应你所需要使用的Unity组件：</p>',16),_=n("thead",null,[n("tr",null,[n("th",null,"武器类型"),n("th",null,"对应组件")])],-1),m=n("td",null,"撬棍，刀等近战武器",-1),f=n("td",null,"手榴弹、烟雾弹等投掷类武器",-1),b=n("td",null,"火箭筒、枪械",-1),y=n("p",null,"而上述的每一种武器都需要以下流程：",-1),T=n("p",null,"他有什么？想好了吗？",-1),C=n("p",null,"好！",-1),M=n("p",null,"那我们现在开始吧！",-1),E=n("h2",{id:"_1-0-确定所需资源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-0-确定所需资源","aria-hidden":"true"},"#"),e(" 1.0 确定所需资源")],-1),W={href:"https://docs.unity.cn/cn/2020.3/Manual/ParticleSystems.html",target:"_blank",rel:"noopener noreferrer"},A=r('<p>音效对于冷兵器来说只有攻击音效、热兵器有攻击、切换、装填等音效，如果是单/多发装填武器则需要将装填音效分割成多个片段以对应各个装填动画，如果只是想练手可以选择直接套用RFTools自带音效用于测试</p><p>冷兵器不需要粒子效果，热兵器则需要枪口火花、烟雾等，可以选择直接套用RFTools自带的粒子</p><p>上述两项资源需要您自行上网寻找或按要仿制的游戏武器自行寻找对应原版游戏美术资源</p><p>模型将在<a href="#_1-1-%E5%BB%BA%E6%A8%A1">下一章</a>详细解释</p><h2 id="_1-1-建模" tabindex="-1"><a class="header-anchor" href="#_1-1-建模" aria-hidden="true">#</a> 1.1 建模</h2><p>按你所想的制作模型，是什么就什么，例如近战武器就制作本体，手榴弹就制作弹体</p><p>枪械需要制作枪体、弹体（不是一般意义,参考RFTools\\Prefabs\\Projectiles，可直接使用RFTools自带）、弹壳（建议使用RFTools自带RFTools\\Models\\Weapons\\Misc\\casing.blend）</p><p>不需要制作手臂模型，手臂模型RFTools自带，只需制作武器本体</p><p>如果只是想练手，可以直接使用RFTools\\Models\\Weapons内的模型</p>',9),B={href:"https://www.sketchfab.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.aplaybox.com/",target:"_blank",rel:"noopener noreferrer"},F=r('<p>当我们制作完模型后，它应该看着应该是这样的：</p><p>{缺图}</p><p>所有的物体能独立的都已独立并设置了父物体（以后你就懂力😋），原点正确，已应用缩放，物体mesh无问题</p><p>这时您就可以在菜单处追加RFTools\\Models\\Character\\Hands.blend内的所有内容</p><p>并继续下一步</p><details class="hint-container details"><summary>如果您的武器包含光学瞄具、全息瞄具...（瞄具预制作方法）</summary><p><strong>双渲镜与UI材质方案</strong>：请单独选择一个薄的物体（类似标准正方体、圆柱）放在瞄具对应的位置，并单独给予一个材质（不用纠结用什么，材质在Unity都会被替换），这个物体在Unity会被修改成瞄具瞄准画面，替换完成后，他看起来应该像这样</p><p>{缺图}</p><p>准星将在稍后再Unity配置，请预制做一个准星贴图</p><p><strong>贴图方案（仅光学）</strong>：直接制作一个准星贴图放置在瞄具对应的位置即可（RFTools\\Models\\Weapons\\Sinper.blend内有，可以在此基础上修改）</p><p>后续详细过程请参考<a href="#_2-4-%E7%9E%84%E5%85%B7%E8%AE%BE%E7%BD%AE-%E4%BB%85%E6%9E%AA%E6%A2%B0">2.4 瞄具设置（仅枪械）</a></p></details><h2 id="_1-2-制作动画" tabindex="-1"><a class="header-anchor" href="#_1-2-制作动画" aria-hidden="true">#</a> 1.2 制作动画</h2><p>当您追加RFTools\\Models\\Character\\Hands.blend完成后，它应该看着是这样的：</p><p>{缺图}</p><p>相机的位置在X0 Y0 Z0，所有物体均已应用缩放</p><p>不用担心这个手怎么这么高而调整他的位置，始终保持在X0 Y0 Z0，他的位置稍后做动画时可以在姿态模式中调整</p><p>好，在Blender菜单栏将新建一个工作区，自行命名工作区，将工作区调整为如下样式</p><p>{缺图}</p><p>这需要您合并、分割区域，添加线性编辑器、动画摄影表、时间线，属性编辑器上方添加添加一个3D视图并调整为相机画面</p><p>相机画面需要隐藏标题栏、视图Gizom以移除遮挡画面的工具UI</p><p>动画摄影表需要取消勾选“仅显示已选中”以显示所有关键帧，这有助于确保物体关键帧与对应的姿态关键帧保持在同一个位置</p><p>这时，我们先打开姿态模式，调整好手的位置、形态：</p><p>{缺图}</p><p>按您的需求，在“骨骼约束”为骨骼设置子级将手部的两个主骨骼（这两个就够了！）绑定在武器对应的位置，譬如:</p><p>{缺图}</p><p>这时，我们就可以正式开始为武器制作动画</p>',21),v=r(`<p>每个动画的大概用时可以参考官方模型（RFTools\\Models\\Weapons\\，片段划分需要在Unity的文件Inspector\\Animation\\Cilps一栏查看）</p><p>动画制作过程如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>* 善用快捷键可以事半功倍 *
* 不用担心各动画的过渡，Unity会自动过渡 *
** 请始终确保践行一个原则：插入关键帧只插入有变动的物体与骨骼，一切从简，不要随手一个A（全选）加I（插入关键帧） **

1. 估计一个动画的大概用时并划分时间
2. 估计一个动作的大概用时并移动时间轴至对应时间点（tip：12帧=1秒，帧≠帧率FPS）
3. (物体模式下)变换物体位置并插入关键帧
4. (姿态模式下)变换骨骼位置并插入关键帧
5. 精修动画：细调物体、骨骼动画，细调动画曲线以修改过渡动作过渡
6. 重复以上过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>投掷类武器在开火（投掷）动画这一个可能有点难，可以选择建一个空物体作为投掷点帮助K帧，然后再在Unity替换这个点</p></div><p>这部分用时较长，一个动画K几小时很正常</p>`,5),x={href:"https://steamcommunity.com/workshop/browse/?appid=636480&requiredtags%5B%5D=Weapons",target:"_blank",rel:"noopener noreferrer"},g=r('<p>另外，请确保手部骨骼始终保持贴合手的模型，像左图而不是右图，否则Unity内可能会出现动画问题：</p><p>{缺图}</p><p>K完帧了？是时候下一步了</p><h2 id="_1-3-制作武器图标" tabindex="-1"><a class="header-anchor" href="#_1-3-制作武器图标" aria-hidden="true">#</a> 1.3 制作武器图标</h2><p>此步将介绍工坊的武器图标常用制作方法（当然可以选择截屏，但此处我们随大统）</p><p>先新建一个blend工程（为不影响原工程）</p><p>然后追加武器模型，调整模型位置，添加相机（大小随意，够大够清晰即可）与光源（面光）:</p><p>{缺图}</p><p>将您的武器与相机对齐</p><p>转到属性，在世界属性中将背景颜色改为纯黑（表（曲）面-颜色，背景节点）</p><p>在渲染属性中勾选Freestyle，将线条宽度改为2.5px(默认分辨率下)</p><p>在视图层属性中勾选Freestyle，在其子选项卡“Freestyle线条样式”中选择颜色，将基础色改为纯白</p><p>最后渲染图像即可</p><p>太白灯光就后退一点，几乎没东西灯光就近一点：</p><p>{缺图}</p><p>最终效果参考RFTools\\Materials\\Textures\\UI\\Weapons</p><h2 id="_1-4-音效制作" tabindex="-1"><a class="header-anchor" href="#_1-4-音效制作" aria-hidden="true">#</a> 1.4 音效制作</h2><p>这部分需要看自己</p><p>需要按你自己制作的动画去剪辑音效（一般网上找到的可以直接用，但装填音效这个大坑要注意。单/多发装填武器则需要将装填音效分割成多个片段以对应各个装填动画）</p><p>让音效对应动画</p><p>如果只是想练手可以选择直接套用RFTools自带音效用于测试</p><h2 id="_2-0-导入unity" tabindex="-1"><a class="header-anchor" href="#_2-0-导入unity" aria-hidden="true">#</a> 2.0 导入Unity</h2><p>是时候将模型导入进Unity了</p>',23),R={href:"/cn/Tutorials/#%E6%A8%A1%E5%9E%8B%E3%80%81%E5%8A%A8%E7%94%BB%E5%88%B6%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"},U=r('<p>然后我们打开Unity项目</p><p>如果您未创建Unity项目或导入RFTools.unitypackage，请自行导入，此处不再赘述</p><h2 id="_2-1-配置动画cilps" tabindex="-1"><a class="header-anchor" href="#_2-1-配置动画cilps" aria-hidden="true">#</a> 2.1 配置动画Cilps</h2><p>此处配置动画片段，这部分稍后会在动画机用到</p><p>在Unity的Project窗口选中模型文件，在右侧的Inspector选择Animation选项卡：</p><p>{缺图}</p><p>在Clips处新建动画片段并在Start与End处设置动画起始帧与结束帧（像1~25而不是1~1，1~1在Unity无法正常播放），设置好所有的片段（名字按动画随便起）：</p><p>{缺图}</p><p>请始终确保切换(Unholster或Entry)动画处于Cilps的最顶层，这将有助于在Unity场景中设置枪口位置！</p>',9),P={class:"hint-container details"},k=n("summary",null,"如果您的武器是单/多发装填武器...（配置动画事件）",-1),w=n("p",null,"此处配置动画事件用于单/多发装填武器能在对应的动画时间点播放正确的音效",-1),D=n("p",null,[e("首先确保你已经配置好动画Cilps，将Reload动画细分为开始装弹、装入子弹动作、结束装弹（拉栓）,将开火动画（仅包括跳栓）以及Idle动画细分."),n("strong",null,"参考"),e("RFTools\\Models\\Weapons\\Garand.blend：")],-1),I=n("p",null,"{缺图}",-1),L=n("a",{href:"#_2-3-%E5%9C%A8%E5%9C%BA%E6%99%AF%E9%85%8D%E7%BD%AE%E6%AD%A6%E5%99%A8"},"下一章",-1),N=n("p",null,"重复以上操作",-1),z=n("p",null,[n("strong",null,"最后注意在结束装弹的对应时间点添加一个Function为ReloadDone的Event")],-1),K=n("p",null,[n("strong",null,"在一个装弹循环结束的对应时间点添加一个Function为MotionDone的Event")],-1),q=n("p",null,"否则游戏时会卡动画",-1),H=r('<h2 id="_2-2-预配置武器图标" tabindex="-1"><a class="header-anchor" href="#_2-2-预配置武器图标" aria-hidden="true">#</a> 2.2 预配置武器图标</h2><p>此处配置武器图标的部分属性，否则在<a href="#_2-3-%E5%9C%A8%E5%9C%BA%E6%99%AF%E9%85%8D%E7%BD%AE%E6%AD%A6%E5%99%A8">下一章</a>时可能会出现奇怪的Bug（？</p><p>在Unity的Project窗口选中武器图标文件，在右侧的Inspector选择将Texture Type改为Sprite(2D and UI)，勾选Generate Mip Maps，Filter Mode改为Trilinear：</p><p>{缺图}</p><p>这样就将武器图标从普通图片配置成了Sprite（又称精灵图或UI图像）</p><h2 id="_2-3-在场景配置武器" tabindex="-1"><a class="header-anchor" href="#_2-3-在场景配置武器" aria-hidden="true">#</a> 2.3 在场景配置武器</h2><p>打开RFTools\\Sence\\Weapons Lab.unity场景</p><p>然后将模型拖入左边的大纲视图（直接拖进场景难以调整位置），并确保场景内的其他武器处于禁用状态（在Inspector内消掉其他物体的复选框，不包括顶头的“Camera Parent”、“Directional Light”、“Plane”、“Soldier Weapon Holder Preview”、“EventSystem”、“Target Cube”）</p><p>这时他看着应该是这样的：</p><p>{缺图}</p><p>选中您的武器（它现在应该自带Animator组件）：</p><p>{缺图}</p>',12),j=n("p",null,"创建一个（多枪口可以多个）名为Muzzle（作为枪口或投掷类武器投掷点，其他名字亦可）的空物体对齐模型的枪口（或投掷点），确保空物体Z轴正对前方：",-1),V=n("p",null,"{缺图}",-1),X=n("p",null,"然后将这个空物体拖入Weapon组件(或其他)的muzzles：",-1),J=n("p",null,"{缺图}",-1),O={href:"https://docs.unity.cn/cn/2020.3/Manual/PartSysMainModule.html",target:"_blank",rel:"noopener noreferrer"},G={href:"https://docs.unity.cn/cn/2020.3/Manual/PartSysMainModule.html",target:"_blank",rel:"noopener noreferrer"},Y=r('<p>kickback、randomKick、、spread、followupSpreadGain、followupSpreadStayTime、followupSpreadDissipateTime、snapMagnitude、snapDuration、snapFrequency等武器手感相关的参数需要慢慢调</p><h2 id="_2-4-瞄具设置-仅枪械" tabindex="-1"><a class="header-anchor" href="#_2-4-瞄具设置-仅枪械" aria-hidden="true">#</a> 2.4 瞄具设置（仅枪械）</h2><p>瞄具有四种，分别为：机械瞄具、光学瞄具、全息瞄具、红点瞄具</p><h3 id="机械瞄具" tabindex="-1"><a class="header-anchor" href="#机械瞄具" aria-hidden="true">#</a> 机械瞄具</h3><p>最简单的瞄具，在BlenderK好瞄准动画，直接跳到<a href="#_2-4-%E5%88%B6%E4%BD%9C%E5%8A%A8%E7%94%BB%E6%9C%BA">下一章</a>即可，可以调Weapon的aimFov</p><h3 id="光学瞄具" tabindex="-1"><a class="header-anchor" href="#光学瞄具" aria-hidden="true">#</a> 光学瞄具</h3><p>光学瞄具有两种设置镜头的方法：</p><p>一是直接像官方的Sinper一样直接在Blender套一个<strong>贴图物体</strong>在镜筒，到Unity就直接套材质和改aimFov</p><p>二是<strong>双渲染</strong>：在Bledner放个薄的物体（类似标准平面、圆柱）当镜片， 在Unity新建一个Render Texture材质，500x500px大概够用了：</p><p>{缺图}</p><p>新建普通材质，将类型改为Unlit\\Texture，Base选择刚才创建的Render Texture：</p><p>{缺图}</p><p>场景内新建一个摄像机在武器下（不要放在武器模型的层级下）,检查器内的Target Texture就选刚才创建的Render Texture：：</p><p>{缺图}</p><p>最后，把刚才创建的普通材质应用在镜片即可，相机的Z轴位置可以调一下，跟换倍率的效果差不多：</p><p>{缺图}</p><details class="hint-container details"><summary>狙击手聚焦视角</summary><p>{缺图}</p><p>对于像图中的狙击手聚焦视角，把场景内的FP_scope（官方武器Sinper下）复制到与镜片相同的层级下即可，可能需要细调一下FP_scope的位置，请自行调整，别忘记把这个物体拖到Weapon组件的scopeAimObject里！</p><p>如果不满意FP_scope的标线，您可以到Blender自行更改，它在RFTools\\Assets\\Models\\Weapons\\Sinper.blend里</p></details><h3 id="全息瞄具" tabindex="-1"><a class="header-anchor" href="#全息瞄具" aria-hidden="true">#</a> 全息瞄具</h3><p>同光学瞄具，在Bledner放个薄的物体（类似标准平面、圆柱）当镜片，在Unity再复制一份到同样的位置</p><p>分别给予RFTools\\Materials\\UI\\HUD Glass.mat（作镜片）与RFTools\\Materials\\Weapons\\Holo Sight.mat（做红点贴图）材质</p><p>红点贴图可以在Holo Sight的材质选项改</p><p>镜片颜色可以在HUD Glass的材质选项中的Tint Color改</p><p>贴图太大可以把带Holo Sight材质的物体的Y方向拖远一点</p><h3 id="红点瞄具" tabindex="-1"><a class="header-anchor" href="#红点瞄具" aria-hidden="true">#</a> 红点瞄具</h3><p>同样简单，在武器下新建一个空物体，添加组件Line Render，取消勾选组件的Use World Space</p><p>将Positions的Sizes设为2，Element0不动，调整Element1的Z方向长度即可，颜色可以在Color改，Width可以改线条宽度，Material处可以改射线材质（RFTools\\Materials\\Tracers）：</p><p>{缺图}</p><h2 id="_2-5-制作动画机" tabindex="-1"><a class="header-anchor" href="#_2-5-制作动画机" aria-hidden="true">#</a> 2.5 制作动画机</h2><p>这玩意就需要你的想象力了</p><p>Project内右键新建一个动画机AnimationController，双击打开</p><p>动画机本质上就是各种状态时的if、if、if...，通过这些if与Parameters的配合，帮助模型跳转至一个合适的动画，但是各个States的链接有点费脑，一个基础的动画机（.controller）实例如下：</p>',31),Z=n("p",null,"这是官方AK 47的动画机",-1),Q=n("p",null,"如果武器复杂，动画机就会更复杂，这就需要你依靠parameters发挥充分的逻辑想象力",-1),$={href:"https://docs.unity.cn/cn/2020.3/Manual/StateMachineTransitions.html",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://docs.unity.cn/cn/2020.3/Manual/AnimationLayers.html",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://docs.unity.cn/cn/2020.3/Manual/class-State.html",target:"_blank",rel:"noopener noreferrer"},te=r('<p>特别是单/多发装填武器，在配置动画事件后，这应该会简单一点点，参考官方RFTools\\Animations\\Weapons\\Garand.controller</p><h2 id="_3-0-测试与导出" tabindex="-1"><a class="header-anchor" href="#_3-0-测试与导出" aria-hidden="true">#</a> 3.0 测试与导出</h2><p>现在我们的武器基本完工了！</p><p>这时您就可以在Weapon Lab场景中通过 Play播放 预览来武器了</p><p>附场景内的的可用键位：</p><table><thead><tr><th>键位</th><th>功能</th></tr></thead><tbody><tr><td>LMB</td><td>开火</td></tr><tr><td>RMB</td><td>瞄准</td></tr><tr><td>R</td><td>装填</td></tr><tr><td>X</td><td>切换开火模式</td></tr><tr><td>T+鼠标滚轮上 或 4</td><td>下一个瞄准模式</td></tr><tr><td>T+鼠标滚轮下 或 3</td><td>上一个瞄准模式</td></tr><tr><td>数字键盘1</td><td>Unholster</td></tr><tr><td>CapsLock</td><td>子弹时间</td></tr><tr><td>+</td><td>增加标靶的距离50m</td></tr><tr><td>-</td><td>减少标靶的距离50m</td></tr><tr><td>T</td><td>标靶视图</td></tr></tbody></table><p>如果不能正常播放请检查组件设置与场景内是否有其他武器处于启用状态</p><p>部分功能需要在游戏内测试（例如踢的动画，转动视角...）,但这需要导出Mod</p><p>所以我们需要先配置WeaponCotentMod（武器导出向导）组件</p>',9);function oe(ae,pe){const o=l("RouterLink"),s=l("Mermaid"),p=l("ExternalLinkIcon");return i(),h("div",null,[u,n("table",null,[_,n("tbody",null,[n("tr",null,[m,n("td",null,[t(o,{to:"/cn/Components/MeleeWeapon.html"},{default:a(()=>[e("MeleeWeapon")]),_:1}),e("（如带修理功能则是"),t(o,{to:"/cn/Components/Wrench.html"},{default:a(()=>[e("Wrench")]),_:1}),e("）")])]),n("tr",null,[f,n("td",null,[t(o,{to:"/cn/Components/ThrowableWeapon.html"},{default:a(()=>[e("ThrowableWeapon")]),_:1})])]),n("tr",null,[b,n("td",null,[t(o,{to:"/cn/Components/Weapon.html"},{default:a(()=>[e("Weapon")]),_:1})])])])]),y,t(s,{id:"mermaid-91",code:"eJxLy8kvT85ILCpRCHHhUgACx+inHdue7J3zbO2ypzNXPFux8Om87qc7tz3tmP10965ncye82LIiFqJQQVfXTsEpWikBouFp14rnU3aDpZBNeDp737MF7UjCL+dvfja1I0EJYooT2BTnaKXQvMySyqdtrS9be5/vXfd8d8uT3dseNzRCTIUqdgYrdol+un7P0/ZdT3b0Pe2f+HRHcywXABGXZG4="}),T,C,M,E,n("p",null,[e("一般来说，一个武器包含的美术资源有模型、音效、以及"),n("a",W,[e("粒子效果"),t(p)])]),A,n("p",null,[e("如果想自己制作而建模有些许不行，可以在"),n("a",B,[e("Sketchfab"),t(p)]),e("、"),n("a",S,[e("模之屋"),t(p)]),e("这类网站寻找模型或按要仿制的游戏武器自行寻找对应原版游戏美术资源")]),F,n("p",null,[e("无论哪种武器，按照"),t(o,{to:"/cn/Components/Weapon.html"},{default:a(()=>[e("Weapon")]),_:1}),e("提供的Parameters，您都至少需要制作6个动画，分别为：切换(Unholster或Entry)、待机(Idle)、瞄准(Aim。非热兵器可以不做)、装填（Reload）、冲刺(Spirit)、踢(Kick)(没错指挥队员Direct Member、召集队员Call Member两个动画可以选择偷懒不做hhh)")]),v,n("p",null,[e("武器动画风格多样，COD风和轻柔风二选一，网上以及"),n("a",x,[e("Steam工坊"),t(p)]),e("优秀例子过多，恕不一一举例，请自行临摹（")]),g,n("p",null,[e("导出的过程敬请参考首页的"),n("a",R,[e("提示"),t(p)])]),U,n("details",P,[k,w,D,I,n("p",null,[e("这一步需要先行在场景配置"),t(o,{to:"/cn/Components/Weapon.html"},{default:a(()=>[e("Weapon")]),_:1}),e("组件（启用advenceReload）以及"),t(o,{to:"/cn/Components/SoundBank.html"},{default:a(()=>[e("SoundBank")]),_:1}),e("组件,若未配置请先调至"),L,e("然后再配置动画事件")]),n("p",null,[e("选中要播放自定义的Cilp，转到下方的Events选项卡，将时间轴拖至对应时间点后单击旁边的Add Event，参考"),t(o,{to:"/cn/Components/SoundBank.html"},{default:a(()=>[e("SoundBank的组件文档")]),_:1}),e("配置这个Event的Function为PlaySoundBank以及Int为对应的音效index")]),N,z,K,q]),H,n("p",null,[e("添加"),t(o,{to:"/cn/Components/Weapon.html"},{default:a(()=>[e("Weapon")]),_:1}),e("（或按武器类型添加"),t(o,{to:"/cn/Components/MeleeWeapon.html"},{default:a(()=>[e("MeleeWeapon")]),_:1}),e("、"),t(o,{to:"/cn/Components/Wrench.html"},{default:a(()=>[e("Wrench")]),_:1}),e("或"),t(o,{to:"/cn/Components/ThrowableWeapon.html"},{default:a(()=>[e("ThrowableWeapon")]),_:1}),e("）、Audio Source（Weapon组件会附带）组件")]),n("p",null,[e("现在配置"),t(o,{to:"/cn/Components/Weapon.html"},{default:a(()=>[e("Weapon")]),_:1}),e("（或"),t(o,{to:"/cn/Components/MeleeWeapon.html"},{default:a(()=>[e("MeleeWeapon")]),_:1}),e("、"),t(o,{to:"/cn/Components/Wrench.html"},{default:a(()=>[e("Wrench")]),_:1}),e("或"),t(o,{to:"/cn/Components/ThrowableWeapon.html"},{default:a(()=>[e("ThrowableWeapon")]),_:1}),e(",都是必填，"),n("strong",null,[e("参阅"),t(o,{to:"/cn/Components/"},{default:a(()=>[e("组件文档")]),_:1})]),e("，要优先配置派生组件的选项）组件：")]),j,V,X,J,n("p",null,[e("在Muzzle物体下新建多个空物体作为枪口火花、烟雾的"),n("a",O,[e("粒子系统"),t(p)]),e("（自行配置,Particle System主模块（管理一般参数）与Renderer模块（管理外部模型、图像的渲染与显示），可以从其他武器复制、冷兵器可以跳过）")]),n("p",null,[e("在抛壳口的位置新建一个名为casingParticles的空物体作为抛壳口的"),n("a",G,[e("粒子系统"),t(p)]),e("（自行配置,Particle System主模块（管理一般参数）与Renderer模块（管理外部模型、图像的渲染与显示），可以从其他武器复制、冷兵器可以跳过）,将这个空物体拖入Weapon组件的casingParticles")]),n("p",null,[e("在projectilePrefab处配置子弹的的Prefab（不是一般意义,参考RFTools\\Prefabs\\Projectiles，可直接RFTools复制一份使用，此物体必须包含"),t(o,{to:"/cn/Components/Projectile.html"},{default:a(()=>[e("Projectile")]),_:1}),e("或其派生组件，当子弹为重火力兵器时建议添加Audio Source）")]),n("p",null,[e("然后检查并配置组件的displayName、thirdPersonTransform、reloadAudio、uiSprite、arms、ammo、auto、spareAmmo、resupplyNumber、reloadTime、aimFov、pose、advancedReload、effInfantry、effInfantryGroup、effUnarmored、effArmored、effAir、effAirFastMover,其他选项的看需求配置（"),t(o,{to:"/cn/Components/MeleeWeapon.html"},{default:a(()=>[e("MeleeWeapon")]),_:1}),e("、"),t(o,{to:"/cn/Components/Wrench.html"},{default:a(()=>[e("Wrench")]),_:1}),e("或"),t(o,{to:"/cn/Components/ThrowableWeapon.html"},{default:a(()=>[e("ThrowableWeapon")]),_:1}),e("需要配置更多，"),n("strong",null,[e("参阅"),t(o,{to:"/cn/Components/"},{default:a(()=>[e("组件文档")]),_:1})]),e("）")]),Y,t(s,{id:"mermaid-530",code:"eJxLy8kvT85ILCpR8AniUlBw1NBQcsyrVAguSSxJLVbS1FTQ1VVQerp3cklmenpq0ZMdu7Izk7OfTd+mBJSwU1BwilbyBgq82LFIKRYs4hKt5JFZ8HRf67M5u4BCNrq62HS/39PzYvvmF3vXPNnR8GzNwqf9HUDu09nzns1dCjHYLVrJJbMoNblEwTc1Lym16FlP+7OepUqxICeCLXaOVgrNy8jPKS5JLXra0f6sF+4AoBJXoC9c80qKKiEeAAqS7RD3aCXnxJwcqDOe9q95ObsN7AxMI0tKiTPSI1opuCCzKLPkadsmVKMSM3NB5hSVphJjjme0kmNm7vN5LU/bgU7CiCioc6B2YnVxUWpOfmIKMXZ5RSsFgRW/WNz6dOFqsLM9MayEmwfVBFTkDYqKiswSYExwAQCP9hzd"}),Z,Q,n("p",null,[e("善于运用"),n("a",$,[e("动画机过渡"),t(p)]),e("、"),n("a",ee,[e("动画层"),t(p)]),e("、"),n("a",ne,[e("States"),t(p)]),e("的各个知识点（虽然大部分情况用不到？）")]),te,n("p",null,[e("配置过程参考"),t(o,{to:"/cn/Components/WeaponCotentMod.html"},{default:a(()=>[e("WeaponContectMod的组件文档")]),_:1})])])}const se=d(c,[["render",oe],["__file","wpn.1.html.vue"]]);export{se as default};
