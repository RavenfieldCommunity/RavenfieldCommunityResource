import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as i,a as e,b as t,d as h,e as o}from"./app-6e7f78a1.js";const s={},c=o('<h1 id="timeofday" tabindex="-1"><a class="header-anchor" href="#timeofday" aria-hidden="true">#</a> TimeOfDay</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Environmental properties for controlling the map during the day and at night (Lighting, Atmosphere atmospheric scattering, Ambient colors, Skybox)</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Apply to empty objects</p><p>Place the Light object used during the day inside the application object of this component and rename it to &quot;Day&quot;, do the same for the night object and rename it to &quot;Night&quot;.</p><p>Alternatively, you can use the Time Of Day.prefab in \\Assets\\Prefabs\\Map Elements\\Must Haves (recommended).</p>',7),l={href:"https://docs.unity3d.com/2020.3/Documentation/Manual/lighting-window.html",target:"_blank",rel:"noopener noreferrer"},p=o('<p>Color can only be changed when Lighting window -&gt; Environment tab -&gt; Environment Lighting -&gt; Source property is Gradient.</p><p>Modify fog properties in the component when Lighting window -&gt; Environment tab -&gt; Other Settings -&gt; Fog property is enabled.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> Comment</h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>nightAtmosphere</td><td>Atmosphere</td><td>night&#39;s Atmosphere</td></tr><tr><td>atmosphere</td><td>Atmosphere</td><td>day&#39;s Atmosphere</td></tr><tr><td>testNight</td><td>bool</td><td>Testing the night (previewing the night effect in the Editor&#39;s playback mode)</td></tr><tr><td>sky</td><td>Color</td><td>sky color</td></tr><tr><td>equator</td><td>Color</td><td>The Color of the Horizon</td></tr><tr><td>ground</td><td>Color</td><td>floor color</td></tr><tr><td>fogDensity</td><td>float</td><td>Fog density</td></tr><tr><td>fog</td><td>Color</td><td>Fog color (available when fog is enabled)</td></tr><tr><td>skyboxMaterial</td><td>Material</td><td>Night Sky Box Material</td></tr></tbody></table>',5);function m(g,f){const r=n("ExternalLinkIcon");return d(),i("div",null,[c,e("p",null,[t("For a large part of the options of this component to work, you need to configure the map scene environment in the "),e("a",l,[t("Lighting Window"),h(r)]),t(" first.")]),p])}const y=a(s,[["render",m],["__file","TimeOfDay.html.vue"]]);export{y as default};
