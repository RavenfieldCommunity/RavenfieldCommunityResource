import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c,a as e,b as t,d as o,e as a}from"./app-Gun06PRG.js";const p={},s={style:{"text-align":"center"}},d={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=3237432182",target:"_blank",rel:"noopener noreferrer"},h=a('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>为Ravenfield提供动态多语言支持，无需频繁手动更新dll与覆盖，支持游戏Beta版</p><p>本项目依赖前置BepInEX插件</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="安装bepinex" tabindex="-1"><a class="header-anchor" href="#安装bepinex"><span>安装BepInEX</span></a></h3><p>BepInEX是一个Unity模组插件框架，本项目的前置多语言插件需要通过其来对游戏进行动态修改</p><p>如果你的电脑是32位的，请到下方的Github或KGithub下载<code>BepInEx_x86_XXX.zip</code>，即32位版本，因为32位比较冷门，所以蓝奏云社区分流处就懒得添加32位的BepInEX了</p>',7),m=e("code",null,"BepInEx_macos_XXX_XXX.zip",-1),u=e("code",null,"BepInEx_unix_XXX_XXX.zip",-1),g={href:"https://docs.bepinex.dev/articles/user_guide/installation/index.html?tabs=tabid-nix#installing-bepinex-1",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("strong",null,[t('注意建议不要使用BepInEX 6，即文件不带"'),e("code",null,"pre6"),t('"，而是使用当前的BepInEX 5')])],-1),b=e("p",null,"首先，你可以在以下网站下载BepInEX：",-1),f={href:"https://github.com/BepInEx/BepInEx/releases/latest",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[t("在此页面找到并点击"),e("code",null,"Assets"),t("下拉选项，找到"),e("code",null,"BepInEx_x64_XXX.zip"),t("（例如"),e("code",null,"BepInEx_x64_5.4.22.0.zip"),t("），点击并下载")],-1),X=e("p",null,[e("img",{src:"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.001.png",alt:""})],-1),y={href:"https://kkgithub.com/BepInEx/BepInEx/releases/latest",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"方法同上",-1),v={href:"https://wwyl.lanzoum.com/b052nto8h",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[t("方法同上，找到找到"),e("code",null,"BepInEx_x64_XXX.zip"),t("，点击并下载")],-1),I={href:"https://zhuanlan.zhihu.com/p/419457461",target:"_blank",rel:"noopener noreferrer"},B=a('<p>然后打开压缩文件</p><p>打开游戏目录（例如<code>E:\\Program Files\\Steam\\steamapps\\common\\Ravenfield</code>）,你也可以在Steam的库页面找到游戏，点击<code>属性</code> &gt; <code>管理</code> &gt; <code>浏览本地文件</code></p><p><img src="https://ravenfieldcommunity.github.io/docs-img/Project/mlang.002.png" alt=""></p><p>将压缩文件内的文件解压到游戏目录，现在目录应该看着像多了这些文件：</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/Project/mlang.003.png" alt=""></p><p>启动一次游戏，等到出现过场动画就可以关闭，如果无报错，则BepInEX安装完成</p><h3 id="安装xunity-autotranslator" tabindex="-1"><a class="header-anchor" href="#安装xunity-autotranslator"><span>安装XUnity.AutoTranslator</span></a></h3><p>XUnity.AutoTranslator是一个由BepInEX官方开发人员开发的一个游戏翻译插件</p><p>你可以在以下网站下载XUnity.AutoTranslator：</p>',9),P={href:"https://github.com/bbepis/XUnity.AutoTranslator/releases/latest",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,[t("在此页面找到并点击"),e("code",null,"Assets"),t("下拉选项，找到"),e("code",null,"XUnity.AutoTranslator-BepInEx-XXX.zip"),t("（例如"),e("code",null,"XUnity.AutoTranslator-BepInEx-5.3.0.zip"),t("，"),e("strong",null,[t("注意不是"),e("code",null,"XUnity.AutoTranslator-BepInEx-IL2CPP-XXX.zip")]),t("），点击并下载")],-1),j={href:"https://kkgithub.com/bbepis/XUnity.AutoTranslator/releases/latest",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"方法同上",-1),A={href:"https://wwyl.lanzoum.com/b052nto8h",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[t("方法同上，找到找到"),e("code",null,"XUnity.AutoTranslator-BepInEx-5.3.0.zip"),t("，点击并下载")],-1),U=a('<p>将压缩文件解压到游戏目录，现在你的游戏目录看着应该像这样，原有的<code>BepInEX</code>文件夹下的<code>plugins</code>下多了两个文件夹，<code>core</code>下多了一个文件：</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/Project/mlang.004.png" alt=""></p><p>再运行一次游戏，同上，确保插件已正确安装</p><h3 id="导入翻译文件" tabindex="-1"><a class="header-anchor" href="#导入翻译文件"><span>导入翻译文件</span></a></h3><p>这是最后一步</p><p>我们故意将翻译文件作为工坊物品上传是为了进行正版认证（毕竟Steam已经关闭了Mod下载工具对RF工坊访问权限），如果您确有需要且无主观恶意，请自行找一个朋友代下</p><p>打开游戏目录，返回当前目录的上两级目录（例如游戏目录为<code>E:\\Program Files\\Steam\\steamapps\\common\\Ravenfield</code>，返回上级目录后，文件管理器应处在<code>E:\\Program Files\\Steam\\steamapps\\</code>）</p><p>然后依次打开当前目录下的<code>\\workshop\\content\\636480\\3237432182</code>,如图（保证已订阅上面的工坊项目，此处的<code>3237432182</code>即为我们的工坊项目id）：</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/Project/mlang.006.png" alt=""></p><p>里面就是所需文件，将它们全部复制</p><p>然后回到游戏目录，打开目录下的<code>BepInEX\\</code>文件夹下的<code>Translation\\</code>下的<code>en\\</code>下的<code>Text</code>文件夹（默认,否则查看<code>BepInEx\\config\\AutoTranslatiorConfig.ini</code>的<code>Language</code>一项的值），将先前复制的文件粘贴到这里：</p><p><img src="https://ravenfieldcommunity.github.io/docs-img/Project/mlang.005.png" alt=""></p><p>大功告成！</p>',13),G={href:"https://steamcommunity.com/sharedfiles/filedetails/?id=3237432182",target:"_blank",rel:"noopener noreferrer"},R=a('<h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h2><p><code>main-sch.txt</code>是基本的游戏翻译文件</p><p><code>main_extra-sch.txt</code>是游戏的扩展翻译文件，包含剧情模式与SPEC OPS模式的对话文本</p><p><code>ravenm-sch.txt</code>是RavenM联机插件国际版的翻译文件（尽管我们用的是国内的，但这里我们仍然保留了对国际版的翻译。你可以自行选择是否安装ravenm的翻译文件）</p><p>现阶段，剧情模式与SPEC OPS模式的对话文本仍存在某些bug即滚动文字无法正常翻译（但在文本滚动结束的时候仍可以正常翻译），打开<code>BepInEx\\config\\AutoTranslatiorConfig.ini</code>，插件的配置文件,将<code>GeneratePartialTranslations</code>一项修改为<code>True</code>即可，但这可能会引发其他翻译bug，这个问题将在未来修复，敬请留意</p><p>要启用RavenM国际版的翻译，请将<code>EnableIMGUI</code>修改为<code>True</code></p><p>另外，地图编辑器与战役模式的翻译仍未全部完成，如需要请在评论区提出，我们会尽快更新</p><h2 id="为其他语言编写翻译文件" tabindex="-1"><a class="header-anchor" href="#为其他语言编写翻译文件"><span>为其他语言编写翻译文件</span></a></h2><p>未完成，如需要请在评论区提出，我们会尽快更新</p><h2 id="❤捐助" tabindex="-1"><a class="header-anchor" href="#❤捐助"><span>❤捐助</span></a></h2><p>欢迎在Steam工坊给我们一个赞和订阅，让我们看到你们的对这个项目的认可，让更多人知道这个项目！</p>',11);function C(w,L){const n=i("ExternalLinkIcon");return r(),c("div",null,[e("div",s,[e("p",null,[t("Steam工坊："),e("a",d,[t("Steam"),o(n)])])]),h,e("p",null,[t("如果你是MacOS/Linux用户也同样请到下方的Github或KGithub下载"),m,t("或"),u,t("，即macos/linux版本（同样请注意区分32位和64位版本），然后按照"),e("a",g,[t("BepInEX官方文档"),o(n)]),t("来配置你的BepInEX环境，配置好环境后其他步骤基本完全相同。由于同样过于冷门这里不作翻译")]),_,b,e("blockquote",null,[e("p",null,[e("a",f,[t("Github"),o(n)])]),x,X]),e("blockquote",null,[e("p",null,[e("a",y,[t("KGithub镜像"),o(n)])]),E]),e("blockquote",null,[e("p",null,[e("a",v,[t("蓝奏云社区分流(提取码:rfcn)"),o(n)])]),k,e("p",null,[t("若无法访问蓝奏云，请参考"),e("a",I,[t("此知乎专栏"),o(n)])])]),B,e("blockquote",null,[e("p",null,[e("a",P,[t("Github"),o(n)])]),T]),e("blockquote",null,[e("p",null,[e("a",j,[t("KGithub镜像"),o(n)])]),z]),e("blockquote",null,[e("p",null,[e("a",A,[t("蓝奏云社区分流(提取码:rfcn)"),o(n)])]),S]),U,e("p",null,[e("strong",null,[t("如果可能的话，请回到"),e("a",G,[t("我们的Steam工坊物品页面"),o(n)]),t("点一个免费的赞，让更多的人知道这个项目！（否则我就会怀疑这玩意到底有没有人用 XD）")])]),R])}const K=l(p,[["render",C],["__file","mlang.html.vue"]]),M=JSON.parse('{"path":"/cn/Project/mlang.html","title":"游戏多语言","lang":"zh-CN","frontmatter":{"title":"游戏多语言","description":"Ravenfield 简体中文汉化 游戏本地化多语言","head":[["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/cn/Project/mlang.html"}],["meta",{"property":"og:site_name","content":"Ravenfield社区文档"}],["meta",{"property":"og:title","content":"游戏多语言"}],["meta",{"property":"og:description","content":"Ravenfield 简体中文汉化 游戏本地化多语言"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.001.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-15T14:43:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T14:43:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"游戏多语言\\",\\"image\\":[\\"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.001.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.002.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.003.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.004.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.006.png\\",\\"https://ravenfieldcommunity.github.io/docs-img/Project/mlang.005.png\\"],\\"dateModified\\":\\"2024-08-15T14:43:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"安装BepInEX","slug":"安装bepinex","link":"#安装bepinex","children":[]},{"level":3,"title":"安装XUnity.AutoTranslator","slug":"安装xunity-autotranslator","link":"#安装xunity-autotranslator","children":[]},{"level":3,"title":"导入翻译文件","slug":"导入翻译文件","link":"#导入翻译文件","children":[]}]},{"level":2,"title":"提示","slug":"提示","link":"#提示","children":[]},{"level":2,"title":"为其他语言编写翻译文件","slug":"为其他语言编写翻译文件","link":"#为其他语言编写翻译文件","children":[]},{"level":2,"title":"❤捐助","slug":"❤捐助","link":"#❤捐助","children":[]}],"git":{"createdTime":1714571318000,"updatedTime":1723733030000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":6},{"name":"KeilAwk","email":"82655578+KeilAwk@users.noreply.github.com","commits":5}]},"filePathRelative":"cn/Project/mlang.md","localizedDate":"2024年5月1日"}');export{K as comp,M as data};
