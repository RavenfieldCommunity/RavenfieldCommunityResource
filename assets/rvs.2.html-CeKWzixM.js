import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c as u,a as n,b as s,d as a,w as e,e as l}from"./app-CaNES3Ui.js";const r={},k=l('<h1 id="rvs-2-mutators" tabindex="-1"><a class="header-anchor" href="#rvs-2-mutators"><span>rvs.2 Mutators</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>此文档将一步步引导你开发一个简单的Mutators，带您理解Mutators的基本构造</p><h2 id="_0-0-想" tabindex="-1"><a class="header-anchor" href="#_0-0-想"><span>0.0 想！</span></a></h2><p>现在我们先想一下我们的Mutators有什么功能</p><p>例如我们本次的示例Mutators简单血量回复，他应该有：</p><ul><li>基本的血量回复，每次修复35%（可修改）</li><li>有冷却时间（可修改，最低为60s）</li><li>防止血量回复后健康超过最大值</li><li>（次要）加入UI，显示修复状态与健康</li></ul><p>然后我们再简单想一下脚本的运行逻辑与可以供玩家在游戏中调整的数值，方便实际敲代码(可以跳过)</p><p>在本实例中，公开的可以供玩家在游戏中调整的数值：血量回复比例、冷却时间、键位</p><p>现在我们可以正式开始了!</p><h2 id="_1-0-unity内简单配置" tabindex="-1"><a class="header-anchor" href="#_1-0-unity内简单配置"><span>1.0 Unity内简单配置</span></a></h2><p>在打代码之前，我们先在Unity配置一下Mutators的预制件的Mod导出设置</p>',12),d=n("p",null,"新建一个右键新建一个Ravenscrpit文件，把这个文件拖入组件内的source，Behaviour处填写TXT的文件名：",-1),v=n("p",null,"{缺图}",-1),m=n("p",null,"{缺图}",-1),f=n("h2",{id:"_1-1-完成主要功能",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-完成主要功能"},[n("span",null,"1.1 完成主要功能")])],-1),h=n("h2",{id:"_1-2-添加次要功能",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-添加次要功能"},[n("span",null,"1.2 添加次要功能")])],-1),b=n("p",null,"现在添加我们的次要功能UI操作",-1),y={href:"https://docs.unity.cn/cn/current/Manual/UICanvas.html",target:"_blank",rel:"noopener noreferrer"},_=l(`<p>首先在场景内的Mutator添加一个Canvas，在Canvas内添加Scroll View，在Scroll View内添加Button和Text：</p><p>{缺图}</p><p>然后自行修改UI物体的大小位置以及文字，注意禁用Canvas物体放置一开游戏就显示Canvas：</p><p>{缺图}</p><p>将canvas添加进我们前面ScriptedBehaviour组件内的target，方便调用：</p><p>{缺图}</p><p>在MutatorCotentMod内添加一个Bool选项卡，让我们可以自定义UI的开启：</p><p>{缺图}</p><p>现在回到代码编辑器</p><p>按照文档提供的api编写脚本：</p><div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="token function">behaviour</span><span class="token punctuation">(</span><span class="token string">&quot;QuickTreat&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">local</span> timer <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">local</span> cooldown
<span class="token keyword">local</span> ratio
<span class="token keyword">local</span> keybind
<span class="token keyword">local</span> mutator
<span class="token keyword">local</span> enableUI <span class="token operator">=</span> <span class="token keyword">false</span>  <span class="token comment">--是否启用UI，默认为false</span>
<span class="token keyword">local</span> button  <span class="token comment">--canvas内的按键</span>
<span class="token keyword">local</span> text  <span class="token comment">--canvas内的Text物体</span>

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    coroutine<span class="token punctuation">.</span><span class="token function">yield</span><span class="token punctuation">(</span><span class="token function">WaitForSeconds</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>mutator <span class="token operator">=</span> self<span class="token punctuation">.</span>script<span class="token punctuation">.</span>mutator
	self<span class="token punctuation">.</span>cooldown <span class="token operator">=</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationFloat</span><span class="token punctuation">(</span><span class="token string">&quot;cooldown&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> self<span class="token punctuation">.</span>cooldown <span class="token operator">&lt;</span> <span class="token number">60</span> <span class="token keyword">then</span>
	    self<span class="token punctuation">.</span>cooldown <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token keyword">end</span>
	self<span class="token punctuation">.</span>ratio <span class="token operator">=</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationRange</span><span class="token punctuation">(</span><span class="token string">&quot;ratio&quot;</span><span class="token punctuation">)</span>
	self<span class="token punctuation">.</span>keybind <span class="token operator">=</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationString</span><span class="token punctuation">(</span><span class="token string">&quot;keybind&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> self<span class="token punctuation">.</span>keybind <span class="token operator">==</span> <span class="token keyword">nil</span> <span class="token keyword">then</span>
	    self<span class="token punctuation">.</span>keybind <span class="token operator">=</span> <span class="token string">&quot;P&quot;</span>
    <span class="token keyword">end</span>
	<span class="token keyword">if</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationBool</span><span class="token punctuation">(</span><span class="token string">&quot;enableUI&quot;</span><span class="token punctuation">)</span> !<span class="token operator">=</span> <span class="token keyword">nil</span> <span class="token keyword">then</span>
	    self<span class="token punctuation">.</span>enableUI <span class="token operator">=</span> self<span class="token punctuation">.</span>mutator<span class="token punctuation">.</span><span class="token function">GetConfigurationBool</span><span class="token punctuation">(</span><span class="token string">&quot;enableUI&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">end</span>
	self<span class="token punctuation">.</span>button <span class="token operator">=</span> self<span class="token punctuation">.</span>targets<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span><span class="token function">GetComponentInChildren</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>  <span class="token comment">--获取Button组件</span>
    self<span class="token punctuation">.</span>button<span class="token punctuation">.</span>onClick<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token string">&quot;onClick&quot;</span><span class="token punctuation">)</span>  <span class="token comment">--添加一个监听事件，self是指在触发事件时要使用的事件函数所在脚本，“onClick”是指在触发事件时要调用的方法名，也就是下面的QuickTreat:onClick()</span>
	self<span class="token punctuation">.</span>text <span class="token operator">=</span> self<span class="token punctuation">.</span>targets<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span><span class="token function">GetComponentInChildren</span><span class="token punctuation">(</span>Text<span class="token punctuation">)</span>  <span class="token comment">--获取Text组件（可能会获取到button的Text组件，届时请自行修改代码lol）</span>
    self<span class="token punctuation">.</span>timer <span class="token operator">=</span> Time<span class="token punctuation">.</span>time <span class="token operator">+</span> self<span class="token punctuation">.</span>cooldown
<span class="token keyword">end</span>

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>keybind<span class="token punctuation">)</span> <span class="token keyword">then</span>
	    <span class="token keyword">if</span> self<span class="token punctuation">.</span>enableUI <span class="token operator">==</span> <span class="token keyword">true</span> <span class="token keyword">then</span>  <span class="token comment">--如果启用UI,就设置Canvas为活动</span>
            self<span class="token punctuation">.</span>targets<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">SetActive</span><span class="token punctuation">(</span><span class="token keyword">not</span> self<span class="token punctuation">.</span>targets<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>activeSelf<span class="token punctuation">)</span>
			<span class="token keyword">if</span> self<span class="token punctuation">.</span>targets<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>activeSelf <span class="token operator">==</span> <span class="token keyword">true</span> <span class="token keyword">then</span>  <span class="token comment">--如果Canvas处于活动状态，就将鼠标从游戏操作解锁，否则锁定鼠标</span>
			    Screen<span class="token punctuation">.</span><span class="token function">UnlockCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">else</span>
			    Screen<span class="token punctuation">.</span><span class="token function">LockCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">end</span>
        <span class="token keyword">else</span>
		    <span class="token keyword">if</span> Time<span class="token punctuation">.</span>time <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>timer <span class="token keyword">then</span>
                Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span><span class="token function">ResupplyHealth</span><span class="token punctuation">(</span>Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>maxHealth <span class="token operator">*</span> self<span class="token punctuation">.</span>ratio<span class="token punctuation">)</span>
			    self<span class="token punctuation">.</span>timer <span class="token operator">=</span> Time<span class="token punctuation">.</span>time <span class="token operator">+</span> self<span class="token punctuation">.</span>cooldown
				Overlay<span class="token punctuation">.</span><span class="token function">ShowMessage</span><span class="token punctuation">(</span><span class="token string">&quot;[QuickTreat]Sucess&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span>
                Overlay<span class="token punctuation">.</span><span class="token function">ShowMessage</span><span class="token punctuation">(</span><span class="token string">&quot;[QuickTreat]Failure,Need delay&quot;</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span>
			<span class="token keyword">end</span>
        <span class="token keyword">end</span>
	<span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">function</span> QuickTreat<span class="token punctuation">:</span><span class="token function">OnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">--点击Button时的事件函数</span>
    <span class="token keyword">if</span> Time<span class="token punctuation">.</span>time <span class="token operator">&gt;=</span> self<span class="token punctuation">.</span>timer <span class="token keyword">then</span>
        Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span><span class="token function">ResupplyHealth</span><span class="token punctuation">(</span>Player<span class="token punctuation">.</span>actor<span class="token punctuation">.</span>maxHealth <span class="token operator">*</span> self<span class="token punctuation">.</span>ratio<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>timer <span class="token operator">=</span> Time<span class="token punctuation">.</span>time <span class="token operator">+</span> self<span class="token punctuation">.</span>cooldown
		self<span class="token punctuation">.</span>text<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;Sucess&quot;</span>  <span class="token comment">--如果ResupplyHealth了，就将text物体的text属性改为目标文本</span>
	<span class="token keyword">else</span>
	    self<span class="token punctuation">.</span>text<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&quot;Failure,Need delay&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>timer <span class="token operator">-</span> Time<span class="token punctuation">.</span>time<span class="token punctuation">)</span>  <span class="token comment">--如果没过冷却了，就将text物体的text属性改为目标文本</span>
    <span class="token keyword">end</span> 
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试，没bug，我们就可以进行最后一步了</p><h2 id="_3-0-测试与导出" tabindex="-1"><a class="header-anchor" href="#_3-0-测试与导出"><span>3.0 测试与导出</span></a></h2>`,13),g=n("h2",{id:"_4-0-拓展参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-0-拓展参考"},[n("span",null,"4.0 拓展参考")])],-1),w=n("p",null,"这些是一些modder在github上公开的mutators参考，你可以自行研究：",-1),x={href:"https://github.com/veroiuxl/RavenfieldMutatorMods",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/RadioactiveJelly?tab=repositories",target:"_blank",rel:"noopener noreferrer"};function M(T,q){const t=p("RouteLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("场景内新建一个空物体，添加"),a(t,{to:"/cn/Components/ScriptedBehaviour.html"},{default:e(()=>[s("ScriptedBehaviour")]),_:1}),s("组件")]),d,v,n("p",null,[s("预制件化这个物体（游戏中这个物体下的所有东西都会被实例化，包括UI之类的物体），在"),a(t,{to:"/cn/Components/MutatorCotentMod.html"},{default:e(()=>[s("MutatorCotentMod")]),_:1}),s("配置这个Mutator，此处在config这里配置了float、range、string各一个：")]),m,f,n("p",null,[s("已迁移至"),a(t,{to:"/cn/Tutorials/rvs.1.html"},{default:e(()=>[s("rsv.1")]),_:1})]),h,b,n("p",null,[s("各类"),n("a",y,[s("UI组件的应用"),a(o)]),s("不再赘述")]),_,n("p",null,[s("参考"),a(t,{to:"/cn/Components/MutatorCotentMod.html"},{default:e(()=>[s("MutatorCotentMod")]),_:1})]),g,w,n("ul",null,[n("li",null,[n("p",null,[n("a",x,[s("veroiuxl/RavenfieldMutatorMods"),a(o)])])]),n("li",null,[n("p",null,[n("a",C,[s("RadioactiveJelly的Github主页"),a(o)])])])])])}const U=c(r,[["render",M],["__file","rvs.2.html.vue"]]),B=JSON.parse('{"path":"/cn/Tutorials/rvs.2.html","title":"rvs.2 Mutators","lang":"zh-CN","frontmatter":{"category":["教程"],"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Tutorials/rvs.2.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"rvs.2 Mutators"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-11T14:02:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T14:02:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rvs.2 Mutators\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-11T14:02:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"0.0 想！","slug":"_0-0-想","link":"#_0-0-想","children":[]},{"level":2,"title":"1.0 Unity内简单配置","slug":"_1-0-unity内简单配置","link":"#_1-0-unity内简单配置","children":[]},{"level":2,"title":"1.1 完成主要功能","slug":"_1-1-完成主要功能","link":"#_1-1-完成主要功能","children":[]},{"level":2,"title":"1.2 添加次要功能","slug":"_1-2-添加次要功能","link":"#_1-2-添加次要功能","children":[]},{"level":2,"title":"3.0 测试与导出","slug":"_3-0-测试与导出","link":"#_3-0-测试与导出","children":[]},{"level":2,"title":"4.0 拓展参考","slug":"_4-0-拓展参考","link":"#_4-0-拓展参考","children":[]}],"git":{"createdTime":1677332562000,"updatedTime":1699711354000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":5}]},"filePathRelative":"cn/Tutorials/rvs.2.md","localizedDate":"2023年2月25日"}');export{U as comp,B as data};