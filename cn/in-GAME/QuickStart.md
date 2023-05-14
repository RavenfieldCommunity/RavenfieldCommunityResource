# 前言
[h1]WARNING[/h1](For non-Chinese players only/仅对于非中国玩家)：
1. This guide is for Chinese players only, due to the localization of the language and the quality of the translation, you may have deviations in the translation, please solve them yourself!
2. Due to legal and network factors in mainland China, some of the links in the text may not be applicable or openable for you, please understand!
3. This guide is licensed under [url=https://creativecommons.org/licenses/by-sa/2.0/]CC BY-SA 2.0[/url], please read the agreement before using any part of this guide (excluding the quoted content, for which please ask the original author yourself).
(Translated by DeepL)

[h1][b]在看到本指南的这一刻起，我们祝贺您入手了Ravenfield[/b][/h1]

[h1][b] \(@^0^@)/ [/b][/h1]

这是由SteelRaven7制作和发行的FPS游戏

这是一个非常欢乐[strike]NB[/strike]（[spoiler]Raven什么时候更EA27我就什么时候改回(* ￣︿￣)[/spoiler]）的游戏，你可以与友方AI暴打对面的红色小人

也可以在游戏强大的创意工坊中“订阅”各种MOD（载具，皮肤，地图，武器，脚本......）

如果你熟悉Unity开发，您还可以创造自己的MOD！

准备好了吗？

让我们出发吧 o(*￣▽￣*)ブ

[previewimg=30223474;sizeOriginal,floatLeft;Logoed2.jpg][/previewimg]

图片来源：自制。图中步枪模型来自某位群友（感谢＠[url=http://steamcommunity.com/profiles/76561198859753798]戴维[/url]），暂未模组化？

[h1]制作不易，您的支持是我最大的动力！[/h1]

[h1]本指南根据2022.5时的EA26稳定版制作，遵循[url=https://creativecommons.org/licenses/by-sa/2.0/]CC BY-SA 2.0[/url]协议（不包括引用的内容，对于这些内容请自行询问原作者）[/h1]

# 1.0 开始游玩（主菜单）
进入游戏，在MOD加载完后（除非你没加MOD）按任意键，进入游戏主界面：

[previewimg=27422660;sizeFull,floatLeft;图像 1.png][/previewimg]

点击PLAY，进入模式选择界面：

[previewimg=27422700;sizeFull,floatLeft;图像 002.png][/previewimg]

INSTANT ACTION为即时对战模式，CONQUSET为战役模式

我们先介绍即时对战模式

# 1.1 对局配置（选关界面）
点击[b]INSTANT ACTION[/b]进入本局游戏的配置界面

[previewimg=27422718;sizeFull,floatRight;图像 003.png][/previewimg]

在[b]MAPS[/b]处的下拉菜单中选择游戏的自带地图，[b]CUSTOM MAP[/b]处选择你从创意工坊中下载下来的地图或地图编辑器中保存的地图。

在[b]GAME MODE[/b]处选择游戏模式，目前游戏有以下6个模式：

[list]
[*] SKIRMISH【死斗模式】
[/list]
该模式下双方只有一个初始据点，玩家无法重生（飞机增援时除外），死亡后将附身在存活的AI，继承AI的武器或者载具继续战斗。双方队伍拥有2次增援，双方兵力将不断损耗，直至一方兵力损耗完或者把地图旗帜据点全部占领，游戏结束。
[list]
[*] POINT MATCH【征服模式】
[/list]
此模式双方任意一方达到击杀数量即可胜利。
[list]
[*] BATTLE【对战模式】
[/list]
该模式特点为，游戏开始时，双方都有固定兵力，击杀敌人或占领了地图内全部据点都会损耗敌方兵力，如果敌方兵力降为0后游戏胜即利。
[list]
[*] SPEC OPS【特别行动模式】
[/list]
懒(✿◡‿◡)，此处直接引用（感谢 @[url=https://steamcommunity.com/profiles/76561199102628353]VadertheConqueror[/url]）
https://steamcommunity.com/sharedfiles/filedetails/?id=2584237725
[list]
[*] HAUNTED【亡灵模式】
[/list]
类似于生存模式，你需要带领3名队员在骷髅的围剿攻击下生存7回合即可胜利。骷髅分为2种，一种是近战骷髅，一种是远程骷髅，每回合都会有新的武器补给，但是攻击的时候不能跑出圈外，不然会持续掉血。
[list]
[*] DOMINATION【兵力对抗模式】
[/list]
游戏开始时，游戏双方都有三个进程，一方三个进程全部结束，则该方不会再继续刷兵，并且游戏会胜利，如果一方据点占领得多，血条掉的也会更快。


[b]PLAYER TEAM[/b]处选择玩家的队伍，Eagle和Raven分别为蓝、红队，Spectator为旁观模式（即上帝视角，游戏中你可以通过单击一个AI来追踪他的行动，再次单击取消）

[b]GAME LENGTH[/b]处选择对局长度，SHORT为短，EPIC为超长，以此类推（说白了就是这局游戏你想玩多久，在一些游戏模式中该选项也等于游戏难度）

[b]BOTS[/b]处选择一局游戏最多同时存在几个AI

[b]BALANCE[/b]处调整游戏双方人数平衡，具体的AI数取决于BOTS的值，圆圈靠近哪方哪方人数相对更多


接着往下拉，你可以调整更多
[previewimg=27423147;sizeFull,floatLeft;图像 004.png][/previewimg]
在[b]LOAD CONFIGURATION[/b]下拉菜单处选择已保存的游戏配置（即脚本、武器、皮肤、载具等配置）（如果你下载了一些整合包也是在这里选择），也可以通过[b]SAVE NEW CONFIG[/b]来保存自己的配置，方便调用。（重命名时如果名字已存在会覆盖已有的配置），删除配置请参考[b]4.1游戏Q&A[/b]


[b]CHARCTER SKINS[/b]处选择双方的皮肤（上方的窗口可以预览，载具、武器同样）。

单击[b]WEAPON SWITCH[/b]可以选择AI可用的武器，右上角的[b]TOGGLE ALL[/b]的功能是全部启用\全部不启用，[b]BOTHTEAMS[/b]处的下拉菜单可以分别为Eagle和Raven两队分别启用武器（按颜色判断），默认为为所有的AI启用\关闭。

[previewimg=27500231;sizeFull,floatLeft;图像 036.png][/previewimg]

单击[b]VEHICLE SWITCH[/b]可以选择AI队伍的载具，两个大框分别对应两个队伍，点击一个小框可以选择载具，最上方的[b]Load Preset[/b]可以一键启用MOD包的载具，Official Vehicle为游戏自带载具，None为无载具（即禁用载具）。

[previewimg=27500230;sizeFull,floatLeft;图像 037.png][/previewimg]

单击[b]MUTATORS SWITCH[/b]可以选择启用的脚本，或设置脚本。脚本可以更改游戏的HUD皮肤，或禁用掉友方伤害（没错这游戏有友方伤害）等，游戏自带一些脚本，其他的可以从创意工坊中获取。

[previewimg=27500229;sizeFull,floatLeft;图像 038.png][/previewimg]

在最下面的复选框中，
[b]Player Has All Weapon[/b]可以让玩家脱离WEAPON SWITCH中的选项自由选择武器，

[b]Night[/b]可以让地图时间变为夜晚（即天黑），

[b]Respawn Time[/b]可以调整重生的缓冲时间，

[b]Reverse Mode[/b]可以反转游戏时的双方初始据点，

[b]Configure Flags[/b]可以在游戏开始时调整地图中双方的初始旗帜，

[b]PAINT EXPLOSIONS[/b]可以让AI或玩家被攻击时出现的血球爆炸（慎开，电脑变成土豆就不好玩了(っ °Д °;)っ）。

# 2.0 选择武器（游戏中）
当你配置好对局后，点击右下角的[b]PLAY[/b]，游戏加载完地图后，会进入武器选择界面。

[previewimg=27423381;sizeFull,floatLeft;图像 005.png][/previewimg]

左边的武器框单击可选择武器

[previewimg=27551912;sizeFull,floatLeft;图像 042.png][/previewimg]

武器选择界面中的[b]NOTHING[/b]的意思是该槽位不选择武器。[previewimg=27423399;sizeThumb,floatLeft;图像 006.png][/previewimg]

武器选择界面上方的是标签用来分类武器，某些MOD作者会专门给自己的武器做一个标签

ASSAULT意为突击性武器

MARKSMAN是远程武器

CLOSE QUARTERS是近战武器

STEALTH是消声型的武器（≈特别行动模式专用？）

GRENADES是手榴弹

ANTI ARMOR是反装甲武器（打坦克一类的）

EQUIPMENT是装备（如弹药包一类）

[previewimg=27423415;sizeThumb,floatLeft;图像 007.png][/previewimg]

而左边的[b]DEPLOYMENT[/b]可以选择出生、重生点，[b]BATTLE PLAN[/b]的作用在[b]2.2指挥系统[/b]中会讲。

选择完后，点击[b]DEPLOY[/b]键，稍作等待即可进入游戏。