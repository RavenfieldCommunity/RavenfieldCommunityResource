import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as d,b as l,d as n,e as r,w as u,r as a,o as s}from"./app-0_ev0JfL.js";const m={};function p(f,t){const e=a("RouteLink");return s(),i("div",null,[t[65]||(t[65]=d('<h1 id="vehicle" tabindex="-1"><a class="header-anchor" href="#vehicle"><span>Vehicle</span></a></h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>The base class of a carrier, the foundation for building a carrier</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Add to the topmost level of a carrier object, with attached objects hanging down inside this object</p>',5)),l("p",null,[t[1]||(t[1]=n("Refer ")),r(e,{to:"/cn/Tutorials/"},{default:u(()=>t[0]||(t[0]=[n("RFCreator Project")])),_:1})]),t[66]||(t[66]=l("h2",{id:"comment",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#comment"},[l("span",null,"Comment")])],-1)),t[67]||(t[67]=l("h2",{id:"variables",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#variables"},[l("span",null,"Variables")])],-1)),l("table",null,[t[64]||(t[64]=l("thead",null,[l("tr",null,[l("th",null,"Name"),l("th",null,"Type"),l("th",null,"Description")])],-1)),l("tbody",null,[t[7]||(t[7]=l("tr",null,[l("td",null,"aiType"),l("td",null,"enum"),l("td",null,"Type of vehicle use as determined by bot (Capture=capture position, Roam=move, Transport=transport)")],-1)),t[8]||(t[8]=l("tr",null,[l("td",null,"armorRating"),l("td",null,"enum"),l("td",null,"Armor strength (SmallArms=light weapons, HeavyArms=heavy weapons, AntiTank=armor piercing)")],-1)),t[9]||(t[9]=l("tr",null,[l("td",null,"aiUseStrategy"),l("td",null,"enum"),l("td",null,"Carrier use scenarios identified by bot (Default, OnlyFromFrontlineSpawn, FromAnySpawn)")],-1)),t[10]||(t[10]=l("tr",null,[l("td",null,"name"),l("td",null,"string"),l("td",null,"vehicle name")],-1)),l("tr",null,[t[5]||(t[5]=l("td",null,"seats",-1)),l("td",null,[t[3]||(t[3]=n("List<")),r(e,{to:"/en/Components/Seat.html"},{default:u(()=>t[2]||(t[2]=[n("Seat")])),_:1}),t[4]||(t[4]=n(">"))]),t[6]||(t[6]=l("td",null,"Seats (first seat will be set as driver's seat)",-1))]),t[11]||(t[11]=l("tr",null,[l("td",null,"targetType"),l("td",null,"enum.Actor.TargetType"),l("td",null,"Target Type (the vehicle's own Type. Infantry=Infantry, InfantryGroup=Infantry Group, Unarmored=Unarmored, Armored=Armored, Air=Airborne, AirFastMover=High-speed airborne target)")],-1)),t[12]||(t[12]=l("tr",null,[l("td",null,"armorDamagedBy"),l("td",null,"enum.ArmorRating"),l("td",null,"What type of weapon the carrier can be attacked by (SmallArms=light weapons, HeavyArms=heavy weapons, AntiTank=armor piercing)")],-1)),t[13]||(t[13]=l("tr",null,[l("td",null,"smallArmsMultiplier"),l("td",null,"float"),l("td",null,"Light weapon damage multiplier")],-1)),t[14]||(t[14]=l("tr",null,[l("td",null,"heavyArmsMultiplier"),l("td",null,"float"),l("td",null,"Heavy weapon damage multiplier")],-1)),t[15]||(t[15]=l("tr",null,[l("td",null,"canBeRepairedAfterDeath"),l("td",null,"bool"),l("td",null,"Repairable on death")],-1)),t[16]||(t[16]=l("tr",null,[l("td",null,"maxHealth"),l("td",null,"float"),l("td",null,"Maximum health value")],-1)),t[17]||(t[17]=l("tr",null,[l("td",null,"crashDamageSpeedThrehshold"),l("td",null,"float"),l("td",null,"Threshold for the speed at which impacts cause damage")],-1)),t[18]||(t[18]=l("tr",null,[l("td",null,"crashDamageMultiplier"),l("td",null,"float"),l("td",null,"impact damage")],-1)),t[19]||(t[19]=l("tr",null,[l("td",null,"spotChanceMultiplier"),l("td",null,"float"),l("td",null,"Visibility multiplier")],-1)),t[20]||(t[20]=l("tr",null,[l("td",null,"burnTime"),l("td",null,"float"),l("td",null,"burn time")],-1)),t[21]||(t[21]=l("tr",null,[l("td",null,"crashSkipsBurn"),l("td",null,"bool"),l("td",null,"Crash and burn")],-1)),t[22]||(t[22]=l("tr",null,[l("td",null,"directJavelinPath"),l("td",null,"bool"),l("td",null,"Whether to guide the missile lock (without checking the box, it defaults to the origin, I think)")],-1)),t[23]||(t[23]=l("tr",null,[l("td",null,"canCapturePoints"),l("td",null,"bool"),l("td",null,"can occupiable captrue points")],-1)),t[24]||(t[24]=l("tr",null,[l("td",null,"canFireAtOwnVehicle"),l("td",null,"bool"),l("td",null,"Can damage the vehicle itself")],-1)),t[25]||(t[25]=l("tr",null,[l("td",null,"targetLockPoint"),l("td",null,"Transform"),l("td",null,"Missile lock point (guided missile lock must be enabled first)")],-1)),t[26]||(t[26]=l("tr",null,[l("td",null,"aiUseToDefendPoint"),l("td",null,"bool"),l("td",null,"Whether or not a bot can use a carrier to defend a stronghold")],-1)),t[27]||(t[27]=l("tr",null,[l("td",null,"minCrewCount"),l("td",null,"int"),l("td",null,"bot minimum occupancy (applicable to transport carriers)")],-1)),t[28]||(t[28]=l("tr",null,[l("td",null,"roamCompleteDistance"),l("td",null,"float"),l("td")],-1)),t[29]||(t[29]=l("tr",null,[l("td",null,"smokeParticles"),l("td",null,"ParticleSystem"),l("td",null,"fuming particle")],-1)),t[30]||(t[30]=l("tr",null,[l("td",null,"fireParticles"),l("td",null,"ParticleSystem"),l("td",null,"Ignition particle")],-1)),t[31]||(t[31]=l("tr",null,[l("td",null,"fireAlarmSound"),l("td",null,"AudioSource"),l("td",null,"flame warning")],-1)),t[32]||(t[32]=l("tr",null,[l("td",null,"deathParticles"),l("td",null,"ParticleSystem"),l("td",null,"death particle")],-1)),t[33]||(t[33]=l("tr",null,[l("td",null,"deathSound"),l("td",null,"AudioSource"),l("td",null,"Death sound effects")],-1)),t[34]||(t[34]=l("tr",null,[l("td",null,"impactAudio"),l("td",null,"AudioSource"),l("td",null,"Impact sound effects")],-1)),t[35]||(t[35]=l("tr",null,[l("td",null,"heavyDamageAudio"),l("td",null,"AudioSource"),l("td",null,"Sound effects when smoking")],-1)),t[36]||(t[36]=l("tr",null,[l("td",null,"blockSensor"),l("td",null,"Transform"),l("td")],-1)),t[37]||(t[37]=l("tr",null,[l("td",null,"blip"),l("td",null,"Texture"),l("td",null,"vehicle icons on the mini-map")],-1)),t[38]||(t[38]=l("tr",null,[l("td",null,"blipScale"),l("td",null,"float"),l("td",null,"Display size multiplier for vehicle icons on the mini-map")],-1)),t[39]||(t[39]=l("tr",null,[l("td",null,"avoidanceSize"),l("td",null,"Vector2"),l("td",null,"Carrier generation avoidance size (the size of the volume that the AI considers in the patrolling system)")],-1)),t[40]||(t[40]=l("tr",null,[l("td",null,"pathingRadius"),l("td",null,"float"),l("td",null,"Minimum distance for bot to enter carrier")],-1)),t[41]||(t[41]=l("tr",null,[l("td",null,"ramSize"),l("td",null,"Vector3"),l("td",null,"Impact area resizing")],-1)),t[42]||(t[42]=l("tr",null,[l("td",null,"ramOffset"),l("td",null,"Vector3"),l("td",null,"Impact area repositioning")],-1)),t[43]||(t[43]=l("tr",null,[l("td",null,"disableOnDeath"),l("td",null,"GameObject[]"),l("td",null,"Objects hidden at the time of death")],-1)),t[44]||(t[44]=l("tr",null,[l("td",null,"activateOnDeath"),l("td",null,"GameObject[]"),l("td",null,"Objects displayed (enabled) on death")],-1)),t[45]||(t[45]=l("tr",null,[l("td",null,"teamColorMaterials"),l("td",null,"MaterialTarget[]"),l("td",null,"Camp color material (requires a material slot to be pre-assigned in Blender for displaying the material color)")],-1)),t[46]||(t[46]=l("tr",null,[l("td",null,"hasCountermeasures"),l("td",null,"bool"),l("td",null,"Whether or not to enable countermeasures")],-1)),t[47]||(t[47]=l("tr",null,[l("td",null,"countermeasuresActiveTime"),l("td",null,"float"),l("td",null,"Duration of countermeasures")],-1)),t[48]||(t[48]=l("tr",null,[l("td",null,"countermeasuresCooldown"),l("td",null,"float"),l("td",null,"countermeasures cooldown time")],-1)),t[49]||(t[49]=l("tr",null,[l("td",null,"countermeasureParticles"),l("td",null,"ParticleSystem"),l("td",null,"countermeasure particle")],-1)),t[50]||(t[50]=l("tr",null,[l("td",null,"countermeasureSpawnPrefab"),l("td",null,"GameObject"),l("td",null,"countermeasure generation prefab")],-1)),t[51]||(t[51]=l("tr",null,[l("td",null,"countermeasureAudio"),l("td",null,"AudioSource"),l("td",null,"countermeasure sound effect")],-1)),t[52]||(t[52]=l("tr",null,[l("td",null,"controlAudio"),l("td",null,"bool"),l("td",null,"Control audio (engine sounds)")],-1)),t[53]||(t[53]=l("tr",null,[l("td",null,"powerGainSpeed"),l("td",null,"float"),l("td",null,"Audio loudness boost speed (not quite sure if it is)")],-1)),t[54]||(t[54]=l("tr",null,[l("td",null,"pitchGainSpeed"),l("td",null,"float"),l("td",null,"Audio frequency boost speed")],-1)),t[55]||(t[55]=l("tr",null,[l("td",null,"throttleGainSpeed"),l("td",null,"float"),l("td",null,"Carrier Throttle Lift Speed")],-1)),t[56]||(t[56]=l("tr",null,[l("td",null,"throttleAudioSource"),l("td",null,"AudioSource"),l("td")],-1)),t[57]||(t[57]=l("tr",null,[l("td",null,"extraAudioSource"),l("td",null,"AudioSource"),l("td")],-1)),t[58]||(t[58]=l("tr",null,[l("td",null,"shiftForwardClip"),l("td",null,"AudioClip"),l("td")],-1)),t[59]||(t[59]=l("tr",null,[l("td",null,"shiftReverseClip"),l("td",null,"AudioClip"),l("td")],-1)),t[60]||(t[60]=l("tr",null,[l("td",null,"ignitionClip"),l("td",null,"AudioClip"),l("td",null,"Startup Sound")],-1)),t[61]||(t[61]=l("tr",null,[l("td",null,"shiftForwardClip"),l("td",null,"AudioClip"),l("td")],-1)),t[62]||(t[62]=l("tr",null,[l("td",null,"shiftReverseClip"),l("td",null,"AudioClip"),l("td")],-1)),t[63]||(t[63]=l("tr",null,[l("td",null,"ignitionClip"),l("td",null,"AudioClip"),l("td")],-1))])])])}const y=o(m,[["render",p],["__file","Vehicle.html.vue"]]),A=JSON.parse('{"path":"/en/Components/Vehicle.html","title":"Vehicle","lang":"en-US","frontmatter":{"category":["Components","Vehicle"],"description":"Vehicle Description The base class of a carrier, the foundation for building a carrier Usage Add to the topmost level of a carrier object, with attached objects hanging down ins...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/Vehicle.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/Vehicle.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Documents"}],["meta",{"property":"og:title","content":"Vehicle"}],["meta",{"property":"og:description","content":"Vehicle Description The base class of a carrier, the foundation for building a carrier Usage Add to the topmost level of a carrier object, with attached objects hanging down ins..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vehicle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/Vehicle.md","localizedDate":"November 19, 2023","autoDesc":true}');export{y as comp,A as data};