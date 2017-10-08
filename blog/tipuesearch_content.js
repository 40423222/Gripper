var tipuesearch = {"pages":[{"text":"Python: https://40423222.github.io/Python/blog Arduino: https://40423222.github.io/Arduino/blog Gripper: https://40423222.github.io/Gripper/blog Unlock: https://40423222.github.io/Unlock/blog HTML: https://40423222.github.io/HTML/blog HexadecimalColorTable: https://40423222.github.io/HexadecimalColorTable/blog","url":"./pages/about/","tags":"misc","title":"About"},{"text":"了解真空產生器上的微動開關 名稱: RVA-10-SJ 1.真空產生器功用: 真空產生器的觸動桿子(如下圖.a-1)會觸動微動開關(如下圖.a-2) 圖.a-1 圖.a-2 目前 還不知道 如何推動軸,只能確定軸會推動桿子,因而啟動微動開關. 下方介紹微動開關說明 2.微動開關說明: 沒按下彈簧片,會形成斷路,所以LED不會通電發亮 (如下圖.b-1) 圖.b-1 按下彈簧片,會形成通路,所以LED會通電發亮(如下圖.b-2) 圖.b-2 內部構造(如下圖.b-3) 圖.b-3 微動開關就像按鈕一樣,按下時電流會流通,放開時會形成斷路 下方為結論 3.結論: 所以當 氣壓驅動真空產生器就會啟動彈簧片(為個人猜測) ,這時線路(黃線和綠線)就會接通電流 4.注意: 因為微動開關電線太粗(Arduino孔會損壞),所以要使用接線器,再轉到Arduino上 Music:","url":"./vacuumGenerator-microSwitch.html","tags":"Gripper","title":"真空產生器-微動開關"},{"text":"各種夾爪的內容 friction gripper 摩擦夾爪: macro meso micro 原理: 利用夾爪表面的磨擦係數 夾持材質: 大多都是塑膠製品 夾持重量: 在影片中為10公斤以下 接觸外表: 表面有弧度的物品(增加接觸面積) 夾持物品的種類: 有弧度的塑膠製品,重量小於10公斤 影片: jaw gripper 颚夹: macro meso micro 類型: 平行爪(兩爪) 原理: 利用夾爪表面摩擦係數 加上 夾爪向內的力量 夾持材質: 非液體 夾持重量: 1公斤以下 (可能兩爪的摩擦力小) 接觸外表: 圓弧 夾持物品的種類: 圓弧的固體,1公斤以下 影片: 影片: ...................................................................................................................................... 類型: 三爪 原理: 利用夾爪表面摩擦係數 加上 夾爪向內的力量 夾持材質: 金屬 夾持重量: 人力無法移動(約300公斤) 接觸外表: 圓管 夾持物品的種類: 金屬圓管,重量300公斤 影片: 影片: needle Gripper 針夾爪: micro 原理: 用細針爪住物品 夾持材質: 布料 夾持重量: 1公斤以下(防止布料拉破) 接觸外表: 平面 夾持物品的種類: 平整布料,重量小於1公斤 影片: magnetic gripper 磁力夾爪: macro meso micro 原理: 在夾爪上通電產生磁力 夾持材質: 帶磁性 夾持重量: 約40~100公斤 接觸外表: 平面 夾持物品的種類: 表面平帶磁性,重量40~100公斤 影片: 影片: suction gripper 抽吸夾爪: macro meso micro 原理: 利用真空吸盤(會將吸盤內的空氣吸光) 夾持材質: 表面光滑(金屬或塑膠) 夾持重量: 10公斤以下 接觸外表: 平面(可有小彎曲) 夾持物品的種類: 表面不複雜的光滑製品,重量10公斤以下 影片: 影片: bernoulli gripper 伯努利夾爪: meso micro 原理: 氣體流動 夾持材質: 非液體 夾持重量: 1公斤以下 接觸外表: 平面 夾持物品的種類: 平面固體,重量小於1公斤 影片: electrostatic gripper 靜電夾爪: meso micro 原理: 靜電控制夾爪 夾持材質: 非液體 夾持重量: 3公斤以下 接觸外表: 小於夾爪 夾持物品的種類: 體積小於夾爪的固體,重量小於3公斤 影片: laser gripper 積光夾爪: micro 原理: 利用積光燒結出夾爪 夾持材質: 不確定 夾持重量: 10公斤以下 接觸外表: 應夾爪形狀而定 夾持物品的種類: 可夾持多種形狀,重量10公斤以下 影片: Universal Robot Gripper 萬能爪: 原理: 利用氣體控制夾爪外型 跟 夾爪表面摩擦力 夾持材質: 非液體 夾持重量: 1公斤以下 接觸外表: 體型小於夾爪 夾持物品的種類: 體積小於夾爪的固體,重量小於1公斤 影片:","url":"./Gripper species.html","tags":"Gripper","title":"夾持物品的種類"},{"text":"了解夾爪 基本說明: 網站: http://www.booster-machine.com/article_detail_18.htm 各種夾爪的說明影片: 網站: http://www.accudyna.com.tw/schunk/automation.html 兩爪: 製造方式: 購買實體 使用材料: 猜測鐵製品 控制夾爪方式: 馬達控制螺紋桿 操作方式: 手機跟電玩搖桿 影片: 兩爪 from Mech-Dickel Studios on YouTube . 三爪: 製造方式: 使用模型得出形狀 使用材料: 猜測矽膠(不怕衝擊) 控制夾爪方式: 不清楚 操作方式: 不清楚 影片: 三爪 from Harrison Young on YouTube . 四爪: 製造方式: 3D列印,得出架構 使用材料: 只知道是3D列印的材料 控制夾爪方式: 馬達控制線 操作方式: 不清楚 影片: 四爪 from XYZAidan on YouTube . 手爪: 製造方式: 3D列印,得出架構 使用材料: 只知道是3D列印的材料 控制夾爪方式: 使用Arduino控制,其餘結構不清楚 操作方式: 裝有電路的手套 影片: 手爪 from Leo Boghozian on YouTube . 個人分析: 二爪是最好製作,但能被使用率不高","url":"./Information.html","tags":"Gripper","title":"資訊"}]};