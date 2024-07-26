import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as a,c as d,a as e,b as o,d as p,w as i,e as r}from"./app-hnBl5Ilb.js";const l={},s=e("h1",{id:"ravenm联机使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ravenm联机使用"},[e("span",null,"RavenM联机使用")])],-1),m=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),h=r('<p>打开游戏，若右下角提示版本不兼容，请检查你下载的安装工具是否为最新，或等待社区更新插件</p><h2 id="游戏前配置房间" tabindex="-1"><a class="header-anchor" href="#游戏前配置房间"><span>游戏前配置房间</span></a></h2><p>以下括号中的英文部分表示国际版RavenM原文</p><h3 id="加入-创建房间" tabindex="-1"><a class="header-anchor" href="#加入-创建房间"><span>加入&amp;创建房间</span></a></h3><p>进入游戏后打开Instant Action（即平常跟游戏时一样）的对局配置界面，在此时按下<code>M</code>键以呼出联机大厅菜单：</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.001.png" alt=""></p><p><code>主机</code>（<code>HOST</code>）意为创建房间，<code>加入</code>（<code>JOIN</code>）意为加入房间</p><p>点击<code>主机</code>，你可以自行配置房间属性，注意当你勾选<code>是否为公共房间</code>时，你的房间会公开在联机大厅列表</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.002.png" alt=""></p><p>点击<code>确定</code>，即可进入预开始界面，点击<code>离开房间</code>可以关闭此房间（关闭地图不会关闭房间，除了关闭游戏），左边菜单的数字是你的房间Lobby ID（LID，房间ID）</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.003.png" alt=""></p><p>像平常一样，配置好本局游戏（也会有Bot的！），点击开始<code>START</code>即可进入游戏</p><p>点击<code>加入</code>，分别有两个选项，一为通过联机大厅列表进入，一为直接使用LID进入房间</p><p>点击联机列表的一个房间，可以查看房间信息并选择进入房间（房间如果设置了限制或为 RavenM国际版 创建的房间，<code>加入房间</code>按钮可能不可用）</p><p>加入后，如果房主没有开始游戏，你点击开始<code>START</code>后，你可能需要等待房主开局（此时房主可以踢人、修改玩家队伍），如果已经开始，你会直接进入对局</p><h2 id="游戏中" tabindex="-1"><a class="header-anchor" href="#游戏中"><span>游戏中</span></a></h2><p>进入游戏后，按<code>P</code>键打开/隐藏聊天框，按<code>Y</code>可输入全局消息（按<code>Enter</code>发送，<code>Esc</code>关闭文本框），按<code>U</code>可在队伍（Eagle\\Raven）范围内输入消息（同），按<code>T</code>切换消息发送范围（全体、队伍）</p><p>按<code>Enter</code>打开重生界面的同时可打开房间菜单</p><p>按<code>CapsLock</code>可打开语音（疑似需要Discord）</p><p>按<code>F7</code>可打开数据流检测UI(仅作测试用)</p><p>按<code>~</code>可打开玩家坐标指示</p><p>小队指挥控件（<code>G</code>、<code>B</code>键）是可用的</p><p>右上角会显示Ping延迟值（房主的当然为0ms）</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><blockquote><p><strong>右下角提示“Steam连接失败，请检查网络联接”</strong></p><p>RavenM联机基于Steam官方架设的联机服务，故需要Steam在后台且不处于离线模式，请不要关闭Steam或尝试使用盗版环境运行</p></blockquote><blockquote><p><strong>右下角提示“版本不兼容”</strong></p><p>游戏大版本更新，导致插件不兼容，请更新或临时禁用插件</p></blockquote><blockquote><p><strong>无法使用本地Mod</strong></p><p>由于联机需要房主与玩家同步工坊Mod，这依赖于Steam创意工坊服务（从本地Mod体量、云服务传输文件成本考虑，后续也不会考虑兼容本地Mod），故不本地Mod不可用</p><p>爱发电定制的Mod一般会由作者上传到工坊，请在工坊订阅问题Mod</p><p>如果确有需要，请自行上传Mod至工坊并自行订阅（注意不要公开，设置好访问权限）</p></blockquote><blockquote><p><strong>原版游戏出现严重Bug（例如无法上车）</strong></p><p>一般是由于原版游戏小型补丁更新，导致插件不适用于现有游戏版本，切换至游戏stable（标准）分支（当为Beta版时，即在Steam游戏属性 -&gt; 测试版处选<code>无</code>），更新或临时禁用插件即可</p></blockquote><blockquote><p><strong>Ping延迟有点高</strong></p><p>要不你试一下挂加速器？</p></blockquote>',29);function g(u,v){const t=c("RouteLink");return a(),d("div",null,[s,m,e("p",null,[o("参考"),p(t,{to:"/cn/Project/ravenm.html"},{default:i(()=>[o("RavenM联机插件国内版")]),_:1})]),h])}const f=n(l,[["render",g],["__file","ravenm.html.vue"]]),_=JSON.parse('{"path":"/cn/in-GAME/ravenm.html","title":"RavenM联机使用","lang":"zh-CN","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/in-GAME/ravenm.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"RavenM联机使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.001.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T09:54:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-26T09:54:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RavenM联机使用\\",\\"image\\":[\\"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.001.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.002.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/in-GAME/ravenm.003.png\\"],\\"dateModified\\":\\"2024-07-26T09:54:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"游戏前配置房间","slug":"游戏前配置房间","link":"#游戏前配置房间","children":[{"level":3,"title":"加入&创建房间","slug":"加入-创建房间","link":"#加入-创建房间","children":[]}]},{"level":2,"title":"游戏中","slug":"游戏中","link":"#游戏中","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1721913894000,"updatedTime":1721987691000,"contributors":[{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":4}]},"filePathRelative":"cn/in-GAME/ravenm.md","localizedDate":"2024年7月25日"}');export{f as comp,_ as data};
