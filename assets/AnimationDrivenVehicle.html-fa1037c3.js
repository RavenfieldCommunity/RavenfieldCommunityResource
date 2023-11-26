import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as h,c as l,a as e,b as t,d as r,w as o,e as c}from"./app-a724709e.js";const s={},u=e("h1",{id:"animationdrivenvehicle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#animationdrivenvehicle","aria-hidden":"true"},"#"),t(" AnimationDrivenVehicle")],-1),_=e("h2",{id:"描述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),m=e("p",null,"自定义动画的载具",-1),p=e("h2",{id:"用法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用法","aria-hidden":"true"},"#"),t(" 用法")],-1),f=e("p",null,"需要一个CharacterController组件，否则载具无法操作",-1),b=e("h2",{id:"注释",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注释","aria-hidden":"true"},"#"),t(" 注释")],-1),C=e("code",null,"applyRootMotion",-1),x={href:"https://docs.unity.cn/cn/2020.3/Manual/class-Animator.html",target:"_blank",rel:"noopener noreferrer"},k=c('<p>注意Animator组件于AnimatorController的运用</p><p>当CharacterController的碰撞箱与地面碰撞时，载具才会移动，因此请按情况调整CharacterController的碰撞箱体积</p><p>对应动画机的Parameters：</p><table><thead><tr><th>Parameters名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>input forward</td><td>float</td><td>前后操作的axis虚拟轴（Vertical）</td></tr><tr><td>input right</td><td>float</td><td>左右操作的axis虚拟轴（Horizontal）</td></tr><tr><td>moving</td><td>bool</td><td>当载具在移动时为true（仅XY轴）</td></tr><tr><td>sprint</td><td>bool</td><td>玩家按下“冲刺”键时为true</td></tr><tr><td>jump</td><td>bool</td><td>玩家按下“跳”键时为true</td></tr><tr><td>crouch</td><td>bool</td><td>玩家按下“蹲起”键时为true</td></tr><tr><td>lean</td><td>float</td><td>玩家按下“侧头”键时为true</td></tr><tr><td>touching ground</td><td>bool</td><td>载具碰撞体接触地面时为true</td></tr></tbody></table><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>groundCheckers</td><td>GroundChecker[]</td><td>地面检测</td></tr><tr><td>inputSmoothness</td><td>int</td><td>虚拟轴输入平滑度（值越大，载具实际操作灵敏度越低）</td></tr><tr><td>checker</td><td>Transform</td><td></td></tr><tr><td>rayLength</td><td>float</td><td>光线长度（应该是作用于<code>groundChecker</code>，但疑似废弃）</td></tr></tbody></table>',6);function V(v,A){const d=n("RouterLink"),a=n("ExternalLinkIcon");return h(),l("div",null,[u,_,e("p",null,[t("从"),r(d,{to:"/cn/Components/Vehicle.html"},{default:o(()=>[t("Vehicle")]),_:1}),t("类派生")]),m,p,f,e("p",null,[t("参考"),r(d,{to:"/cn/Components/Vehicle.html"},{default:o(()=>[t("Vehicle")]),_:1})]),b,e("p",null,[t("建议将"),r(d,{to:"/cn/Components/InheritDeltaRotation.html"},{default:o(()=>[t("InheritDeltaRotation")]),_:1}),t("、"),r(d,{to:"/cn/Components/LookAtCamera.html"},{default:o(()=>[t("LookAtCamera")]),_:1}),t("与本组件配合使用")]),e("p",null,[t("注意Animator组件"),C,t("选项，按需求启用，作用参考"),e("a",x,[t("Unity官方文档"),r(a)])]),k])}const L=i(s,[["render",V],["__file","AnimationDrivenVehicle.html.vue"]]);export{L as default};
