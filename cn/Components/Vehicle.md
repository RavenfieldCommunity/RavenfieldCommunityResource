# Vehicle

## 描述

## 用法

## 注释

## 变量
| 名称 | 类型 | 描述 |
| ----------- | ----------- | ----------- |
| aiType | enum | ai类型 |
| armorRating | enum | 装甲强度（轻武器，重武器，穿甲）|
| aiUseStrategy |enum |  ai使用策略 （占领，游走，运输）|
| name | string | 载具名称 | 
| seats | List<[Seat](/Documents/Components/Vehicle/Seat.md)> | 座位（gameobject) |
| targetType | Actor.TargetType | 目标类型（载具自身的类型）|
| armorDamagedBy | ArmorRating | 装甲类型 | 
| smallArmsMultiplier | float | 轻武器伤害倍率 | 
| heavyArmsMultiplier | float | 重武器伤害倍率 |
| canBeRepairedAfterDeath | bool | 死亡后可修复 |
| maxHealth | float |  最大生命值 |
| crashDamageSpeedThrehshold | float |   撞击造成伤害的速度的阈值 |
| crashDamageMultiplier | float |   撞击伤害 |
| spotChanceMultiplier | float |   醒目程度倍率 |
| burnTime | float |  燃烧时间 |
| crashSkipsBurn | bool |  撞死跳过燃烧 |
| directJavelinPath | bool |   引导导弹锁定（不打勾就默认是在坐标原点吧好像） |
| canCapturePoints | bool |   可占领点位 |
| canFireAtOwnVehicle | bool |   可以伤害自身所在的载具 |
| targetLockPoint | Transform |   锁定点（须先开启引导导弹锁定） |
| aiUseToDefendPoint | bool |   ai使用载具防御点位 |
| minCrewCount | int |   最低载员（适用于运输载具） |
| roamCompleteDistance | float |   没感觉出有啥用途 |
| smokeParticles | ParticleSystem |   冒烟粒子 |
| fireParticles | ParticleSystem |   着火粒子 |
| fireAlarmSound | AudioSource |   火焰警报 |
| deathParticles | ParticleSystem |   死亡粒子 |
| deathSound | AudioSource |   死亡音效 |
| impactAudio | AudioSource |   撞击音效 |
| heavyDamageAudio | AudioSource |  冒烟时的音效 |
| blockSensor | Transform |   没感觉出有啥用途 |
| blip | Texture |   小地图上的载具图标 |
| blipScale | float |   小地图上的载具图标的显示大小倍率 |
| avoidanceSize | Vector2 |   载具生成避让大小 |
| pathingRadius | float |   ai进入载具的距离 |
| ramSize | Vector3 |   撞击区域大小调整 |
| ramOffset | Vector3 |  撞击区域位置调整 |
| disableOnDeath | GameObject[] |   死亡时隐藏 |
| activateOnDeath | GameObject[] |   死亡时显示 |
| teamColorMaterials | MaterialTarget[] |   阵营颜色材质 |
| engine | Engine |   引擎 |
| hasCountermeasures | bool |   有无干扰弹 |
| countermeasuresActiveTime | float |   干扰持续时间 |
| countermeasuresCooldown | float |   干扰冷却时间 |
| countermeasureParticles | ParticleSystem |  干扰粒子 |
| countermeasureSpawnPrefab | GameObject |  干扰生成prefab |
| countermeasureAudio | AudioSource |   干扰音效 |
| controlAudio | bool |  控制音频（引擎） |
| powerGainSpeed | float |  音频响度提升速度（不太确定是不是） |
| pitchGainSpeed | float |  音频频率提升速度 |
| throttleGainSpeed | float |  载具油门提升速度 |
| throttleAudioSource | AudioSource |  没用过，应该也是音效 |
| extraAudioSource | AudioSource | 没用过，应该也是音效 |
| shiftForwardClip | AudioClip |  没用过，应该也是音效 |
| shiftReverseClip | AudioClip |  没用过，应该也是音效 |
| ignitionClip | AudioClip |  启动音效 |