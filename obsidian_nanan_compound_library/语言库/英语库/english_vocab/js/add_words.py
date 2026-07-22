#!/usr/bin/env python3
"""Add 10-15 new trendy words to each scene in data.js"""

import re

with open("/root/.openclaw/workspace/english_vocab/js/data.js", "r", encoding="utf-8") as f:
    content = f.read()

# New words per scene - each with en, cn, example, ex_cn
new_words = {
    "coffee": [
        ('"Barista"', '"咖啡师"', '"Your barista made a beautiful latte art for you."', '"你的咖啡师给你做了漂亮的拉花。"'),
        ('"latte art"', '"拿铁拉花"', '"Wow, the latte art on this cappuccino is amazing!"', '"哇，这杯卡布奇诺上的拉花太棒了！"'),
        ('"oat milk"', '"燕麦奶"', '"Can I swap regular milk for oat milk in my latte?"', '"我的拿铁可以把普通奶换成燕麦奶吗？"'),
        ('"cold brew"', '"冷萃咖啡"', '"I prefer cold brew in summer — it\'s smoother and less acidic."', '"夏天我更喜欢冷萃，口感更顺滑，酸度更低。"'),
        ('"refill"', '"续杯"', '"Does this café offer free refills on drip coffee?"', '"这家店滴滤咖啡可以免费续杯吗？"'),
        ('"caffeine"', '"咖啡因"', '"I\'m trying to cut down on caffeine, so I\'ll have a decaf."', '"我在减少咖啡因摄入，给我来杯低因的吧。"'),
        ('"pastry"', '"酥皮糕点"', '"Their croissant is the most popular pastry here."', '"他们的可颂是这里最受欢迎的酥皮糕点。"'),
        ('"blend"', '"混合咖啡豆"', '"This house blend has notes of chocolate and caramel."', '"这款店内烘焙混合豆有巧克力和焦糖的风味。"'),
        ('"cozy"', '"舒适惬意的"', '"This café has such a cozy vibe — I could stay here all day."', '"这家店氛围太舒服了，我能待一整天。"'),
        ('"reusable cup"', '"可重复使用杯"', '"Bring your own reusable cup and get a discount."', '"自带杯可以享受折扣。"'),
        ('"loyalty card"', '"会员积分卡"', '"After your 10th coffee, the next one is free with our loyalty card."', '"买满10杯咖啡，下一杯用我们的积分卡免费。"'),
        ('"sustainable"', '"可持续的"', '"They only use sustainable coffee beans and eco-friendly packaging."', '"他们只用可持续咖啡豆和环保包装。"'),
        ('"half-caff"', '"半咖啡因"', '"I\'ll take a half-caff latte — I still want some energy but not too much."', '"我来杯半因拿铁——想要点提神但不要太猛。"'),
        ('"single origin"', '"单一产地"', '"This single origin Ethiopian coffee has a fruity flavor."', '"这款埃塞俄比亚单一产地咖啡有果香。"'),
        ('"almond milk"', '"杏仁奶"', '"I\'m lactose intolerant, so I always get almond milk in my latte."', '"我乳糖不耐受，所以拿铁一直加杏仁奶。"'),
    ],
    "friends": [
        ('"vibe"', '"氛围/气场"', '"We have the same vibe — I feel like we\'ve known each other forever."', '"我们气场太合了——感觉像认识很久了。"'),
        ('"cringe"', '"尴尬/社死"', '"That joke was so cringe, I wanted to hide under the table."', '"那个笑话太尴尬了，我想钻桌子底下。"'),
        ('"ghost"', '"玩消失/断联"', '"We went on three dates and then he totally ghosted me."', '"我们约会了三次，然后他完全消失了。"'),
        ('"flex"', '"炫耀/显摆"', '"Sorry for the flex, but I just got promoted to senior manager!"', '"抱歉我嘚瑟一下，我刚升了高级经理！"'),
        ('"bounce"', '"离开/闪人"', '"It\'s getting late, I\'m gonna bounce. Catch you later!"', '"不早了，我先撤了。回头见！"'),
        ('"stan"', '"铁粉/狂热支持"', '"I totally stan that singer — I\'ve been to all her concerts."', '"我是那个歌手的铁粉——她的每场演唱会我都去了。"'),
        ('"slay"', '"惊艳全场/超棒"', '"You absolutely slayed that presentation! Everyone was impressed."', '"你的演示太惊艳了！所有人都被震住了。"'),
        ('"low-key"', '"低调地"', '"I\'m low-key obsessed with this new coffee shop around the corner."', '"我有点上头拐角那家新咖啡店了。"'),
        ('"squad"', '"死党圈/小团体"', '"My squad and I hang out every Friday night."', '"我和我的死党们每周五晚上一起玩。"'),
        ('"bond"', '"感情联结"', '"We bonded over our love for K-pop and Korean food."', '"因为都喜欢K-pop和韩国料理，我们俩一拍即合。"'),
        ('"mutual"', '"共同的/互关"', '"We have a mutual friend who introduced us at the party."', '"我们有个共同的朋友，在派对上介绍我们认识的。"'),
        ('"reconnect"', '"重新联系"', '"I reconnected with my college roommate after ten years."', '"时隔十年我和大学室友又重新联系上了。"'),
        ('"unmatched"', '"不匹配/配不上"', '"Your energy is unmatched — I love being around you!"', '"你的能量无人能及——跟你在一起太开心了！"'),
        ('"no cap"', '"真的/不骗你"', '"No cap, this is the best pizza I\'ve ever had."', '"不吹不黑，这是我吃过最好吃的披萨。"'),
    ],
    "phone": [
        ('"tap"', '"点击/轻触"', '"Just tap the screen to answer the call."', '"轻触屏幕就能接电话。"'),
        ('"swipe"', '"滑动"', '"Swipe right to accept the call, left to decline."', '"右滑接听，左滑拒接。"'),
        ('"DM"', '"私信"', '"Slide into my DMs if you want to chat more!"', '"想多聊聊就私信我！"'),
        ('"mute"', '"静音"', '"I always mute the group chat when it gets too noisy."', '"群聊太吵的时候我一般直接静音。"'),
        ('"block"', '"拉黑"', '"He kept sending spam messages, so I blocked him."', '"他一直发垃圾消息，我把他拉黑了。"'),
        ('"spam"', '"垃圾信息"', '"I keep getting spam calls from unknown numbers."', '"我一直收到陌生号码的骚扰电话。"'),
        ('"archive"', '"归档"', '"I archive old conversations to keep my chat list clean."', '"我把旧对话归档，保持聊天列表清爽。"'),
        ('"screenshot"', '"截屏"', '"Please don\'t screenshot our private conversation."', '"请不要截屏我们的私密对话。"'),
        ('"read receipt"', '"已读回执"', '"I turned off read receipts so people don\'t know when I\'ve seen their message."', '"我关了已读回执，这样别人不知道我看了消息。"'),
        ('"forward"', '"转发"', '"Could you forward me that message about tomorrow\'s meeting?"', '"你能把明天开会那条消息转发给我吗？"'),
        ('"pin"', '"置顶"', '"I pin my girlfriend\'s chat so I never miss her messages."', '"我把女朋友的聊天置顶了，这样不会漏消息。"'),
        ('"notification"', '"通知"', '"I turned off notifications for that app, it was too distracting."', '"我把那个应用的通知关了，太分心了。"'),
        ('"emoji"', '"表情符号"', '"She replied with just an emoji, and I had no idea what she meant."', '"她就回了一个表情，我完全没懂啥意思。"'),
        ('"status"', '"状态/在线状态"', '"His status says he\'s online, but he\'s not replying to my messages."', '"他的状态显示在线，但是不回我消息。"'),
    ],
    "restaurant": [
        ('"waitlist"', '"等位/排队"', '"The restaurant is fully booked, so we\'re on the waitlist."', '"餐厅都订满了，我们在等位。"'),
        ('"plant-based"', '"植物基/纯素"', '"More restaurants are adding plant-based options to their menus."', '"越来越多餐厅在菜单上加入植物基选项。"'),
        ('"QR code menu"', '"扫码点餐"', '"You can scan the QR code on the table to see the full menu."', '"扫桌上的二维码就能看到完整菜单。"'),
        ('"fusion"', '"融合菜"', '"This fusion restaurant mixes Japanese and Italian cuisines."', '"这家融合菜餐厅把日料和意餐结合了。"'),
        ('"delivery"', '"外卖配送"', '"Let\'s just order delivery tonight — I\'m too tired to go out."', '"今晚点外卖吧——我太累了不想出门。"'),
        ('"foodie"', '"吃货/美食达人"', '"My sister is a total foodie — she knows every good restaurant in town."', '"我姐是个地道吃货，城里哪家好吃她都知道。"'),
        ('"craving"', '"特别想吃"', '"I\'m having a serious craving for hotpot right now."', '"我现在特别想吃火锅。"'),
        ('"takeout"', '"外卖/外带"', '"We got Chinese takeout and watched a movie at home."', '"我们点了中餐外卖，在家看电影。"'),
        ('"dip"', '"蘸酱"', '"Can I have extra dip for my fries, please?"', '"能给我多一份薯条蘸酱吗？"'),
        ('"garnish"', '"装饰/配菜"', '"The dish arrived beautifully garnished with fresh herbs."', '"菜品上桌时用新鲜香草装饰得很漂亮。"'),
        ('"pairing"', '"搭配(酒/食物)"', '"The waiter recommended a red wine pairing for the steak."', '"服务员推荐了和牛排搭配的红酒。"'),
        ('"sustainable seafood"', '"可持续海鲜"', '"This restaurant only serves sustainable seafood."', '"这家餐厅只供应可持续捕捞的海鲜。"'),
        ('"table for one"', '"一人食"', '"Table for one, please. I\'m dining solo tonight."', '"一位用餐，谢谢。今晚一个人吃。"'),
        ('"doggy bag"', '"打包袋"', '"Could I get a doggy bag for the leftovers, please?"', '"能给我个打包袋装剩菜吗？"'),
    ],
    "shopping": [
        ('"window shopping"', '"橱窗购物/只看不买"', '"I\'m just window shopping today — I don\'t plan to buy anything."', '"我今天就随便逛逛，没打算买东西。"'),
        ('"haul"', '"购物收获"', '"Check out my shopping haul from the weekend sale!"', '"看看我周末大促的战利品！"'),
        ('"OOTD"', '"今日穿搭"', '"Here\'s my OOTD — I got this jacket from a thrift store."', '"这是我的今日穿搭——这件外套是在古着店淘的。"'),
        ('"thrift"', '"二手/古着"', '"I love thrift shopping — you can find unique pieces for cheap."', '"我喜欢逛二手店——能淘到便宜又独特的单品。"'),
        ('"price match"', '"价格匹配"', '"Does this store offer price matching if I find it cheaper elsewhere?"', '"如果别家更便宜，你们能价格匹配吗？"'),
        ('"try-on haul"', '"试穿分享"', '"I did a try-on haul at Zara and bought half of what I tried."', '"我在Zara试了一堆，买了一半。"'),
        ('"sustainable fashion"', '"可持续时尚"', '"I\'m trying to buy more sustainable fashion brands."', '"我正在多买可持续时尚品牌。"'),
        ('"vintage"', '"复古/中古"', '"This vintage bag is from the 90s — it\'s so unique."', '"这个中古包是90年代的，真的很独特。"'),
        ('"capsule wardrobe"', '"胶囊衣橱"', '"I\'m building a capsule wardrobe with just 30 essential pieces."', '"我正在打造一个只含30件必需品的胶囊衣橱。"'),
        ('"final sale"', '"特价清仓/不退不换"', '"This is a final sale item, so no returns or exchanges."', '"这是清仓特价商品，不接受退换。"'),
        ('"pre-order"', '"预售"', '"The new collection is available for pre-order now."', '"新系列现已开放预售。"'),
        ('"gift receipt"', '"礼品收据"', '"Can I get a gift receipt with this purchase?"', '"这件商品能给一张礼品收据吗？"'),
        ('"loyalty program"', '"会员计划"', '"Sign up for our loyalty program and earn points on every purchase."', '"加入我们的会员计划，每次购物积分。"'),
    ],
    "transport": [
        ('"ride-sharing"', '"拼车/网约车"', '"I use ride-sharing apps to get around the city."', '"我用网约车应用在城市里出行。"'),
        ('"e-scooter"', '"电动滑板车"', '"You can rent an e-scooter through the app and ride to the subway."', '"你可以通过App租电动滑板车骑到地铁站。"'),
        ('"contactless"', '"无接触/非接触式"', '"You can tap your card for contactless payment on the bus."', '"在公交车上可以刷卡无接触支付。"'),
        ('"transit card"', '"交通卡"', '"Make sure your transit card has enough balance before boarding."', '"上车前确认交通卡余额充足。"'),
        ('"rush hour"', '"高峰期"', '"Avoid taking the subway during rush hour if you can."', '"如果可能的话，避免高峰期坐地铁。"'),
        ('"real-time"', '"实时"', '"The app shows real-time bus arrival information."', '"这个App显示实时公交到站信息。"'),
        ('"carpool"', '"拼车"', '"We carpool to work every day to save on gas and tolls."', '"我们每天拼车上班，省油钱和过路费。"'),
        ('"peak hour"', '"高峰时段"', '"The fare is higher during peak hours on the metro."', '"地铁高峰时段票价会更贵。"'),
        ('"parking spot"', '"停车位"', '"It\'s impossible to find a parking spot downtown on weekends."', '"周末市中心根本找不到停车位。"'),
        ('"detour"', '"绕路"', '"There\'s an accident ahead, so we need to take a detour."', '"前面出了事故，我们得绕路。"'),
        ('"speed bump"', '"减速带"', '"Slow down — there\'s a speed bump coming up."', '"减速——前面有减速带。"'),
        ('"toll road"', '"收费公路"', '"If we take the toll road, we\'ll save about 20 minutes."', '"走收费公路的话能省大约20分钟。"'),
        ('"range anxiety"', '"里程焦虑(电动车)"', '"I get range anxiety whenever my EV battery drops below 20%."', '"我的电动车电量低于20%时我就会里程焦虑。"'),
    ],
    "supermarket": [
        ('"self-checkout"', '"自助结账"', '"The lines are shorter at the self-checkout counters."', '"自助结账的队更短。"'),
        ('"loyalty card"', '"会员卡"', '"Scan your loyalty card to get the member-only prices."', '"扫会员卡享受会员价。"'),
        ('"bulk bin"', '"散装区"', '"You can buy just the amount you need from the bulk bins."', '"散装区可以按需购买量。"'),
        ('"vegan"', '"纯素食的"', '"More supermarkets now have a dedicated vegan section."', '"现在更多超市有了专门的纯素食品区。"'),
        ('"gluten-free"', '"无麸质的"', '"My friend has celiac disease, so she only eats gluten-free products."', '"我朋友有乳糜泻，只吃无麸质食品。"'),
        ('"best before"', '"最佳食用日期"', '"This yogurt is past its best before date — I wouldn\'t eat it."', '"这个酸奶过了最佳食用日期了——我不会吃的。"'),
        ('"multi-buy"', '"多买优惠"', '"There\'s a multi-buy deal — buy three for the price of two."', '"有多买优惠——买三件付两件的钱。"'),
        ('"plant-based"', '"植物基"', '"The plant-based meat section is growing bigger every month."', '"植物肉的区域每个月都在扩大。"'),
        ('"recycle"', '"回收"', '"Don\'t forget to recycle the plastic bags at the front of the store."', '"别忘了把塑料袋放到店门口的回收处。"'),
        ('"shopping list"', '"购物清单"', '"I made a shopping list so I don\'t forget anything."', '"我列了购物清单，免得忘记买什么。"'),
        ('"free-range"', '"散养的"', '"I always buy free-range eggs — they taste so much better."', '"我一直买散养鸡蛋——好吃太多了。"'),
        ('"aisle end"', '"货架端头"', '"The best deals are usually displayed at the aisle end."', '"最划算的东西通常摆在货架端头。"'),
        ('"clean eating"', '"清洁饮食"', '"She\'s into clean eating, so she avoids processed foods."', '"她崇尚清洁饮食，不吃加工食品。"'),
    ],
    "hospital": [
        ('"telemedicine"', '"远程医疗"', '"You can book a telemedicine appointment and see the doctor from home."', '"你可以预约远程医疗，在家看医生。"'),
        ('"outpatient"', '"门诊"', '"The outpatient department is on the second floor."', '"门诊部在二楼。"'),
        ('"inpatient"', '"住院"', '"He was admitted as an inpatient after the surgery."', '"手术后他作为住院病人入院了。"'),
        ('"medical record"', '"病历/医疗记录"', '"Your medical records are stored securely in our system."', '"你的病历资料安全保存在我们的系统中。"'),
        ('"prescription"', '"处方"', '"You\'ll need a prescription from the doctor to get this medicine."', '"你需要医生处方才能拿到这个药。"'),
        ('"checkup"', '"体检"', '"I go for my annual checkup every June."', '"我每年六月去做年度体检。"'),
        ('"vaccination"', '"疫苗接种"', '"Have you had your flu vaccination this year?"', '"你今年打流感疫苗了吗？"'),
        ('"side effect"', '"副作用"', '"The medicine might cause some side effects like dizziness."', '"这个药可能会引起头晕等副作用。"'),
        ('"surgery"', '"手术"', '"The surgery went well and he\'s recovering now."', '"手术很顺利，他正在康复中。"'),
        ('"ER (emergency room)"', '"急诊室"', '"If the pain gets worse, go straight to the ER."', '"如果疼得更厉害了，直接去急诊室。"'),
        ('"X-ray"', '"X光"', '"The doctor ordered an X-ray to check for any fractures."', '"医生开了X光检查是否有骨折。"'),
        ('"physical therapy"', '"物理治疗"', '"After the knee injury, I need six weeks of physical therapy."', '"膝盖受伤后，我需要六周的物理治疗。"'),
        ('"wellness"', '"健康保健"', '"Many companies now offer wellness programs for their employees."', '"很多公司现在都为员工提供健康保健计划。"'),
    ],
    "weather": [
        ('"heatwave"', '"热浪"', '"There\'s a heatwave this week — temperatures will reach 40 degrees."', '"这周有热浪——气温将达到40度。"'),
        ('"air quality"', '"空气质量"', '"The air quality index is unhealthy today, better wear a mask."', '"今天空气质量指数不健康，最好戴口罩。"'),
        ('"AC"', '"空调"', '"I can\'t survive this summer without AC."', '"没有空调我过不了这个夏天。"'),
        ('"UV index"', '"紫外线指数"', '"The UV index is extremely high today — don\'t forget sunscreen!"', '"今天紫外线指数极高——别忘了涂防晒！"'),
        ('"typhoon"', '"台风"', '"A typhoon is approaching, so all flights might be cancelled."', '"台风正在靠近，所有航班可能取消。"'),
        ('"thunderstorm"', '"雷阵雨"', '"A sudden thunderstorm caught us on our way home."', '"回家路上突然遇到了雷阵雨。"'),
        ('"smog"', '"雾霾"', '"The smog is so thick today you can barely see the buildings."', '"今天雾霾太严重了，几乎看不清建筑。"'),
        ('"AC unit"', '"空调设备"', '"Our AC unit broke down in the middle of the heatwave."', '"热浪中间我们的空调坏了。"'),
        ('"heatstroke"', '"中暑"', '"Drink plenty of water to avoid heatstroke in this weather."', '"这种天气多喝水以防中暑。"'),
        ('"raincoat"', '"雨衣"', '"I always carry a raincoat in my bag during the rainy season."', '"梅雨季我包里常备一件雨衣。"'),
        ('"air conditioner"', '"空调"', '"The air conditioner is making a strange noise."', '"空调发出奇怪的声音。"'),
        ('"global warming"', '"全球变暖"', '"The summers keep getting hotter due to global warming."', '"因为全球变暖，夏天越来越热了。"'),
        ('"weather app"', '"天气App"', '"My weather app says it\'s going to rain after 5 pm."', '"我的天气App说下午5点后会下雨。"'),
    ],
    "job": [
        ('"remote work"', '"远程办公"', '"I\'ve been doing remote work since the pandemic and love it."', '"疫情以来我一直远程办公，很喜欢。"'),
        ('"hybrid"', '"混合办公"', '"Our company adopted a hybrid model — two days in office, three at home."', '"我们公司采用混合办公——两天去公司，三天在家。"'),
        ('"layoff"', '"裁员"', '"There were massive layoffs in the tech industry this year."', '"今年科技行业有大规模裁员。"'),
        ('"onboarding"', '"入职培训"', '"The onboarding process helped me understand the company culture."', '"入职培训帮我了解了公司文化。"'),
        ('"performance review"', '"绩效考核"', '"I have my annual performance review next week."', '"下周是我的年度绩效考核。"'),
        ('"side hustle"', '"副业"', '"Many people have a side hustle to earn extra income."', '"很多人有副业来增加收入。"'),
        ('"networking"', '"人脉拓展"', '"Attending industry events is great for networking."', '"参加行业活动对拓展人脉很有帮助。"'),
        ('"work-life balance"', '"工作生活平衡"', '"I quit my job because there was zero work-life balance."', '"我辞职了，因为完全没有工作生活平衡。"'),
        ('"quit"', '"辞职/退出"', '"She decided to quit and start her own business."', '"她决定辞职创业。"'),
        ('"burnout"', '"职业倦怠"', '"Working 80 hours a week led to serious burnout."', '"每周工作80小时导致了严重的职业倦怠。"'),
        ('"freelance"', '"自由职业"', '"He switched to freelance work so he could travel more."', '"他转做自由职业了，这样能多旅行。"'),
        ('"hustle culture"', '"奋斗文化/内卷"', '"Hustle culture makes people feel guilty for taking breaks."', '"奋斗文化让人休息都感到愧疚。"'),
        ('"job hopping"', '"跳槽"', '"Job hopping every two years is common in the tech industry."', '"每两年跳一次槽在科技行业很常见。"'),
        ('"internship"', '"实习"', '"I did a summer internship at a startup last year."', '"去年我在一家初创公司做了暑期实习。"'),
    ],
    "chat": [
        ('"vibe"', '"氛围/感觉"', '"This restaurant has such a good vibe — we should come here more often."', '"这家餐厅氛围真好——我们应该常来。"'),
        ('"literally"', '"简直/真的"', '"I literally died laughing when he told that story."', '"他讲那个故事的时候我简直笑死了。"'),
        ('"random"', '"随机的/突然的"', '"She sent me a random meme at 3 am and I woke up laughing."', '"她凌晨三点突然给我发了个表情包，我笑醒了。"'),
        ('"fomo"', '"错失恐惧症"', '"I have major FOMO seeing everyone\'s travel photos on social media."', '"看到大家社交媒体上的旅行照，我超怕错过。"'),
        ('"mood"', '"心情/状态"', '"That\'s so my mood right now — tired and just want to stay home."', '"那完全是我现在的状态——累了只想宅家。"'),
        ('"no worries"', '"没事/不客气"', '"Thanks for the help! — No worries, happy to help!"', '"谢谢帮忙！——不客气，乐意帮忙！"'),
        ('"same here"', '"我也是"', '"I\'m starving. — Same here, let\'s grab something to eat."', '"我饿死了。——我也是，去吃点东西吧。"'),
        ('"catch up"', '"叙旧/交流近况"', '"We should grab coffee and catch up soon!"', '"我们应该找个时间喝咖啡叙叙旧！"'),
        ('"chill"', '"放松/淡定"', '"Just chill, everything\'s going to be fine."', '"放轻松，一切都会好起来的。"'),
        ('"go-to"', '"首选/必选"', '"This ramen place is my go-to when I\'m craving comfort food."', '"这家拉面店是我想吃治愈食物的首选。"'),
        ('"guilty pleasure"', '"罪恶的快乐"', '"Binge-watching reality shows is my guilty pleasure."', '"刷真人秀是我的罪恶快乐。"'),
        ('"DM"', '"私信"', '"I slid into her DMs and now we\'re dating!"', '"我私信了她，现在我们在约会！"'),
        ('"tbh"', '"说实话"', '"TBH, I didn\'t really like the movie as much as everyone else."', '"说实话，我没有像大家那么喜欢那部电影。"'),
        ('"for real"', '"真的假的/说真的"', '"You\'re moving to Tokyo? For real?"', '"你要搬去东京？真的假的？"'),
    ],
    "neighbor": [
        ('"HOA"', '"业主协会"', '"The HOA requires approval for any changes to the building\'s exterior."', '"业主协会规定任何建筑外部改动都需要审批。"'),
        ('"property management"', '"物业管理"', '"Call property management if the elevator is broken."', '"电梯坏了就给物业打电话。"'),
        ('"shared space"', '"共享空间"', '"The rooftop is a shared space for all residents."', '"天台是所有住户的共享空间。"'),
        ('"package delivery"', '"快递包裹"', '"Package delivery is left at the front desk if you\'re not home."', '"你不在家时快递放在前台。"'),
        ('"neighborly"', '"睦邻友好的"', '"It\'s always good to maintain a neighborly relationship with people next door."', '"和邻居保持睦邻友好的关系总是好的。"'),
        ('"parking permit"', '"停车许可证"', '"You need a parking permit to park in the community garage."', '"在小区车库停车需要停车许可证。"'),
        ('"homeowners"', '"业主"', '"The homeowners\' meeting is scheduled for next Tuesday."', '"业主大会定在下周二。"'),
        ('"sublet"', '"转租"', '"I\'m subletting my apartment while I travel for three months."', '"我去旅行三个月期间把公寓转租出去了。"'),
        ('"soundproof"', '"隔音"', '"The walls aren\'t very soundproof — I can hear my neighbor\'s TV."', '"墙不太隔音——我能听到邻居的电视声。"'),
        ('"maintenance fee"', '"物业费"', '"The monthly maintenance fee covers cleaning and security."', '"每月物业费包括清洁和安保。"'),
        ('"lease"', '"租约"', '"We signed a one-year lease with an option to renew."', '"我们签了一年租约，可续约。"'),
        ('"landlord"', '"房东"', '"Our landlord is very responsive when something needs fixing."', '"有什么东西需要修的时候我们房东响应很快。"'),
        ('"security camera"', '"监控摄像头"', '"There are security cameras in the lobby and parking lot."', '"大堂和停车场有监控摄像头。"'),
    ],
    "travel": [
        ('"staycation"', '"居家度假"', '"We\'re having a staycation this year — we\'ll explore our own city."', '"今年我们居家度假——探索自己的城市。"'),
        ('"Airbnb"', '"民宿/爱彼迎"', '"We booked a cozy Airbnb in the mountains for the weekend."', '"我们周末在山里订了个温馨的民宿。"'),
        ('"all-inclusive"', '"全包式"', '"We booked an all-inclusive resort so everything is covered."', '"我们订了全包式度假村，什么都包括了。"'),
        ('"jet lag"', '"时差"', '"I had terrible jet lag after the 15-hour flight from New York."', '"从纽约飞了15个小时后时差反应很严重。"'),
        ('"layover"', '"中转停留"', '"We have a three-hour layover in Dubai before the connecting flight."', '"我们在迪拜中转停留三小时。"'),
        ('"travel hack"', '"旅行省钱妙招"', '"Here\'s a travel hack: book flights on Tuesday for the best deals."', '"分享一个旅行窍门：周二订机票最便宜。"'),
        ('"digital nomad"', '"数字游民"', '"She\'s a digital nomad — she works remotely while traveling the world."', '"她是个数字游民——一边旅行世界一边远程工作。"'),
        ('"overbooked"', '"超售"', '"The flight was overbooked and they asked for volunteers to take a later flight."', '"航班超售了，他们在征求自愿改签的人。"'),
        ('"no-show"', '"未到/未入住"', '"There\'s a no-show fee if you cancel less than 24 hours before."', '"如果提前不到24小时取消会收取未入住费。"'),
        ('"upgrade"', '"升级"', '"We got a free upgrade to a suite because the hotel was overbooked."', '"因为酒店超售，我们免费升级到了套房。"'),
        ('"packing list"', '"行李清单"', '"I always make a packing list before a trip so I don\'t forget anything."', '"我旅行前总是列个行李清单避免遗漏。"'),
        ('"carry-on"', '"手提行李"', '"I only travel with a carry-on — no checked luggage."', '"我旅行只带手提行李——不托运。"'),
        ('"travel insurance"', '"旅行保险"', '"I never travel without travel insurance — just in case."', '"我旅行一定会买旅行保险，以防万一。"'),
    ],
    "movie": [
        ('"spoiler"', '"剧透"', '"Don\'t tell me what happens! No spoilers!"', '"别告诉我发生了什么！不要剧透！"'),
        ('"binge-watch"', '"刷剧/一口气看完"', '"I binge-watched the entire series over the weekend."', '"我周末一口气刷完了整部剧。"'),
        ('"must-watch"', '"必看"', '"This documentary is a must-watch if you care about climate change."', '"如果你关心气候变化，这部纪录片必看。"'),
        ('"box office"', '"票房"', '"The movie topped the box office for three weeks in a row."', '"这部电影连续三周登顶票房榜首。"'),
        ('"remake"', '"翻拍"', '"They\'re doing a live-action remake of my favorite animated film."', '"他们要翻拍我最喜欢的动画电影真人版了。"'),
        ('"sequel"', '"续集"', '"The sequel is even better than the original!"', '"续集比第一部还要好看！"'),
        ('"premiere"', '"首映"', '"We got tickets to the premiere — I\'m so excited!"', '"我们弄到了首映式的票——太激动了！"'),
        ('"cast"', '"演员阵容"', '"The cast of this movie is insane — all my favorite actors!"', '"这部电影的演员阵容太强了——全是我喜欢的演员！"'),
        ('"cinematography"', '" cinematography ",', 'Wait, let me not misspell. Let me use:
        ('"cinematography"', '"摄影/ cinematography"', '"The cinematography in this film is breathtaking."', '"这部电影的摄影令人叹为观止。"'),
Let me fix that. Let me write this more carefully.

Actually, this is getting complex. Let me write a Python script that generates the modifications accurately.<｜end▁of▁thinking｜>Let me write a cleaner Python script to handle this programmatically:

<｜｜DSML｜｜tool_calls>
<｜｜DSML｜｜invoke name="write">
<｜｜DSML｜｜parameter name="content" string="true">#!/usr/bin/env python3
"""Add 10-15 new trendy words to each scene in data.js"""

import re, json

with open("/root/.openclaw/workspace/english_vocab/js/data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Each tuple: (en, cn, example, ex_cn)
additions = {
    "coffee": [
        ('Barista', '咖啡师', '"Your barista made a beautiful latte art for you."', '"你的咖啡师给你做了漂亮的拉花。"'),
        ('latte art', '拿铁拉花', '"Wow, the latte art on this cappuccino is amazing!"', '"哇，这杯卡布奇诺上的拉花太棒了！"'),
        ('oat milk', '燕麦奶', '"Can I swap regular milk for oat milk in my latte?"', '"我的拿铁可以把普通奶换成燕麦奶吗？"'),
        ('cold brew', '冷萃咖啡', '"I prefer cold brew in summer — it\\'s smoother and less acidic."', '"夏天我更喜欢冷萃，口感更顺滑，酸度更低。"'),
        ('refill', '续杯', '"Does this café offer free refills on drip coffee?"', '"这家店滴滤咖啡可以免费续杯吗？"'),
        ('caffeine', '咖啡因', '"I\\'m trying to cut down on caffeine, so I\\'ll have a decaf."', '"我正在减少咖啡因摄入，给我来杯低因的吧。"'),
        ('pastry', '酥皮糕点', '"Their croissant is the most popular pastry here."', '"他们的可颂是这里最受欢迎的酥皮糕点。"'),
        ('blend', '混合咖啡豆', '"This house blend has notes of chocolate and caramel."', '"这款店内烘焙混合豆有巧克力和焦糖的风味。"'),
        ('cozy', '舒适惬意的', '"This café has such a cozy vibe — I could stay here all day."', '"这家店氛围太舒服了，我能待一整天。"'),
        ('reusable cup', '可重复使用杯', '"Bring your own reusable cup and get a discount."', '"自带杯可以享受折扣。"'),
        ('loyalty card', '会员积分卡', '"After your 10th coffee, the next one is free with our loyalty card."', '"买满10杯咖啡，下一杯用会员卡免费。"'),
        ('sustainable', '可持续的', '"They only use sustainable coffee beans and eco-friendly packaging."', '"他们只用可持续咖啡豆和环保包装。"'),
        ('single origin', '单一产地', '"This single origin Ethiopian coffee has a fruity flavor."', '"这款埃塞俄比亚单一产地咖啡有果香。"'),
        ('almond milk', '杏仁奶', '"I always get almond milk in my latte because I\\'m lactose intolerant."', '"我拿铁一直加杏仁奶，因为我乳糖不耐受。"'),
    ],
    "friends": [
        ('vibe', '氛围/气场', '"We have the same vibe — I feel like we\\'ve known each other forever."', '"我们气场太合了——感觉像认识很久了。"'),
        ('cringe', '尴尬/社死', '"That joke was so cringe, I wanted to hide."', '"那个笑话太尴尬了，我想钻地缝。"'),
        ('ghost', '玩消失/断联', '"We went on three dates and then he totally ghosted me."', '"我们约会了三次，然后他完全消失了。"'),
        ('flex', '炫耀/显摆', '"Sorry for the flex, but I just got promoted!"', '"抱歉我嘚瑟一下，我刚升职了！"'),
        ('bounce', '离开/闪人', '"It\\'s getting late, I\\'m gonna bounce. Catch you later!"', '"不早了，我先撤了。回头见！"'),
        ('stan', '铁粉/狂热支持', '"I totally stan that singer — I\\'ve been to all her concerts."', '"我是那个歌手的铁粉——她的每场演唱会我都去了。"'),
        ('slay', '超棒/惊艳', '"You absolutely slayed that presentation! Everyone loved it."', '"你的展示太棒了！大家都超喜欢。"'),
        ('low-key', '低调地/悄悄地', '"I\\'m low-key obsessed with this new coffee shop."', '"我有点上头那家新咖啡店。"'),
        ('squad', '死党圈/小团体', '"My squad and I hang out every Friday night."', '"我和我的死党们每周五晚上一起玩。"'),
        ('bond', '感情联结', '"We bonded over our love for K-pop and Korean food."', '"因为都喜欢K-pop和韩国料理，我们一拍即合。"'),
        ('mutual', '共同的/互关', '"We have a mutual friend who introduced us."', '"我们有个共同朋友介绍我们认识的。"'),
        ('reconnect', '重新联系', '"I reconnected with my college roommate after ten years."', '"时隔十年我和大学室友又重新联系上了。"'),
        ('unmatched', '无人能及的', '"Your energy is unmatched — I love being around you!"', '"你的能量无人能及——跟你在一起太开心了！"'),
        ('no cap', '真的/不骗你', '"No cap, this is the best pizza I\\'ve ever had."', '"不吹不黑，这是我吃过最好吃的披萨。"'),
    ],
    "phone": [
        ('tap', '点击/轻触', '"Just tap the screen to answer the call."', '"轻触屏幕就能接电话。"'),
        ('swipe', '滑动', '"Swipe right to accept the call, left to decline."', '"右滑接听，左滑拒接。"'),
        ('DM', '私信', '"Slide into my DMs if you want to chat more!"', '"想多聊聊就私信我！"'),
        ('mute', '静音', '"I always mute the group chat when it gets too noisy."', '"群聊太吵的时候我一般直接静音。"'),
        ('block', '拉黑', '"He kept sending spam, so I blocked him."', '"他一直发垃圾消息，我把他拉黑了。"'),
        ('spam', '垃圾信息', '"I keep getting spam calls from unknown numbers."', '"我一直收到陌生号码的骚扰电话。"'),
        ('archive', '归档', '"I archive old conversations to keep my chat list clean."', '"我把旧对话归档，保持聊天列表清爽。"'),
        ('screenshot', '截屏', '"Please don\\'t screenshot our private conversation."', '"请不要截屏我们的私密对话。"'),
        ('read receipt', '已读回执', '"I turned off read receipts so people don\\'t know when I\\'ve seen their message."', '"我关了已读回执，这样别人不知道我看了消息。"'),
        ('forward', '转发', '"Could you forward me that meeting message?"', '"你能把开会那条消息转发给我吗？"'),
        ('pin', '置顶', '"I pin my best friend\\'s chat so I never miss her messages."', '"我把闺蜜的聊天置顶了，这样不会漏消息。"'),
        ('notification', '通知', '"I turned off notifications for that app, it was too distracting."', '"我把那个应用的通知关了，太分心了。"'),
        ('emoji', '表情符号', '"She replied with just an emoji, and I had no idea what she meant."', '"她就回了一个表情，我完全没懂啥意思。"'),
        ('status', '在线状态', '"His status says he\\'s online, but he\\'s not replying."', '"他的状态显示在线，但是不回我消息。"'),
    ],
    "restaurant": [
        ('waitlist', '等位/排队', '"The restaurant is fully booked, so we\\'re on the waitlist."', '"餐厅都订满了，我们在等位。"'),
        ('plant-based', '植物基/纯素', '"More restaurants are adding plant-based options to their menus."', '"越来越多餐厅在菜单上加入植物基选项。"'),
        ('QR code menu', '扫码点餐', '"Scan the QR code on the table to see the full menu."', '"扫桌上的二维码就能看到完整菜单。"'),
        ('fusion', '融合菜', '"This fusion restaurant mixes Japanese and Italian cuisines."', '"这家融合菜餐厅把日料和意餐结合了。"'),
        ('delivery', '外卖配送', '"Let\\'s just order delivery tonight."', '"今晚点外卖吧。"'),
        ('foodie', '吃货/美食达人', '"My sister is a total foodie — she knows every good spot in town."', '"我姐是个地道吃货，城里哪家好吃她都知道。"'),
        ('craving', '特别想吃', '"I\\'m having a serious craving for hotpot right now."', '"我现在特别想吃火锅。"'),
        ('takeout', '外卖/外带', '"We got Chinese takeout and watched a movie at home."', '"我们点了中餐外卖，在家看电影。"'),
        ('dip', '蘸酱', '"Can I have extra dip for my fries, please?"', '"能给我多一份薯条蘸酱吗？"'),
        ('garnish', '装饰/配菜', '"The dish arrived beautifully garnished with fresh herbs."', '"菜品上桌时用新鲜香草装饰得很漂亮。"'),
        ('pairing', '搭配（酒/食物）', '"The waiter recommended a red wine pairing for the steak."', '"服务员推荐了和牛排搭配的红酒。"'),
        ('doggy bag', '打包袋', '"Could I get a doggy bag for the leftovers?"', '"能给我个打包袋装剩菜吗？"'),
        ('table for one', '一人食', '"Table for one, please. I\\'m dining solo tonight."', '"一位用餐，谢谢。今晚一个人吃。"'),
    ],
    "shopping": [
        ('window shopping', '只看不买', '"I\\'m just window shopping today — no purchases planned."', '"我今天就随便逛逛，没打算买东西。"'),
        ('haul', '购物收获', '"Check out my shopping haul from the weekend sale!"', '"看看我周末大促的战利品！"'),
        ('thrift', '二手/古着', '"I love thrift shopping — you find unique pieces for cheap."', '"我喜欢逛二手店——能淘到便宜又独特的单品。"'),
        ('price match', '价格匹配', '"Does this store offer price matching?"', '"这家店能价格匹配吗？"'),
        ('vintage', '复古/中古', '"This vintage bag is from the 90s — it\\'s so unique."', '"这个中古包是90年代的，真的很独特。"'),
        ('capsule wardrobe', '胶囊衣橱', '"I\\'m building a capsule wardrobe with just 30 essential pieces."', '"我正在打造一个只含30件必需品的胶囊衣橱。"'),
        ('final sale', '清仓特价', '"This is a final sale item — no returns or exchanges."', '"这是清仓特价商品，不接受退换。"'),
        ('pre-order', '预售', '"The new collection is available for pre-order now."', '"新系列现已开放预售。"'),
        ('gift receipt', '礼品收据', '"Can I get a gift receipt with this purchase?"', '"这件商品能给一张礼品收据吗？"'),
        ('loyalty program', '会员计划', '"Sign up for our loyalty program and earn points."', '"加入我们的会员计划，购物积分。"'),
        ('sustainable fashion', '可持续时尚', '"I\\'m trying to buy more sustainable fashion brands."', '"我正在多买可持续时尚品牌。"'),
        ('try-on', '试穿', '"I spent an hour trying on dresses at the mall."', '"我在商场花了一小时试穿裙子。"'),
    ],
    "transport": [
        ('ride-sharing', '拼车/网约车', '"I use ride-sharing apps to get around the city."', '"我用网约车应用在城市里出行。"'),
        ('e-scooter', '电动滑板车', '"You can rent an e-scooter and ride to the subway."', '"你可以租电动滑板车骑到地铁站。"'),
        ('contactless', '非接触式', '"Tap your card for contactless payment on the bus."', '"在公交车上刷卡无接触支付。"'),
        ('transit card', '交通卡', '"Make sure your transit card has enough balance."', '"确认交通卡余额充足。"'),
        ('rush hour', '高峰期', '"Avoid the subway during rush hour if you can."', '"如果可能的话，避免高峰期坐地铁。"'),
        ('real-time', '实时', '"The app shows real-time bus arrival info."', '"这个App显示实时公交到站信息。"'),
        ('carpool', '拼车', '"We carpool to work to save on gas and tolls."', '"我们拼车上班省油钱和过路费。"'),
        ('detour', '绕路', '"There\\'s an accident ahead — we need to take a detour."', '"前面出了事故，我们得绕路。"'),
        ('parking spot', '停车位', '"It\\'s impossible to find a parking spot downtown."', '"市中心根本找不到停车位。"'),
        ('speed bump', '减速带', '"Slow down — there\\'s a speed bump coming up."', '"减速——前面有减速带。"'),
        ('toll road', '收费公路', '"If we take the toll road, we\\'ll save 20 minutes."', '"走收费公路能省20分钟。"'),
        ('range anxiety', '里程焦虑', '"I get range anxiety when my EV battery drops below 20%.",', '"我的电动车电量低于20%时我就会里程焦虑。"'),
    ],
    "supermarket": [
        ('self-checkout', '自助结账', '"The lines are shorter at the self-checkout counters."', '"自助结账的队更短。"'),
        ('bulk bin', '散装区', '"You can buy just what you need from the bulk bins."', '"散装区可以按需购买量。"'),
        ('vegan', '纯素食的', '"The supermarket now has a dedicated vegan section."', '"超市现在有了专门的纯素食品区。"'),
        ('gluten-free', '无麸质的', '"My friend only eats gluten-free products."', '"我朋友只吃无麸质食品。"'),
        ('best before', '最佳食用日期', '"This yogurt is past its best before date."', '"这个酸奶过了最佳食用日期了。"'),
        ('multi-buy', '多买优惠', '"There\\'s a multi-buy deal — three for the price of two."', '"有多买优惠——买三件付两件的钱。"'),
        ('recycle', '回收', '"Don\\'t forget to recycle the plastic bags at the front."', '"别忘了把塑料袋放到店门口的回收处。"'),
        ('shopping list', '购物清单', '"I made a shopping list so I don\\'t forget anything."', '"我列了购物清单，免得忘记买什么。"'),
        ('free-range', '散养的', '"I always buy free-range eggs — they taste better."', '"我一直买散养鸡蛋——好吃很多。"'),
        ('clean eating', '清洁饮食', '"She\\'s into clean eating and avoids processed food."', '"她崇尚清洁饮食，不吃加工食品。"'),
        ('aisle end', '货架端头', '"The best deals are usually at the aisle end."', '"最划算的东西通常摆在货架端头。"'),
        ('club card', '会员卡', '"Scan your club card to get member-only prices."', '"扫会员卡享受会员价。"'),
    ],
    "hospital": [
        ('telemedicine', '远程医疗', '"You can book a telemedicine appointment and see the doctor from home."', '"你可以预约远程医疗，在家看医生。"'),
        ('outpatient', '门诊', '"The outpatient department is on the second floor."', '"门诊部在二楼。"'),
        ('medical record', '病历', '"Your medical records are stored securely in our system."', '"你的病历资料安全保存在系统中。"'),
        ('prescription', '处方', '"You need a doctor\\'s prescription to get this medicine."', '"你需要医生处方才能拿到这个药。"'),
        ('checkup', '体检', '"I go for my annual checkup every June."', '"我每年六月去做年度体检。"'),
        ('vaccination', '疫苗接种', '"Have you had your flu vaccination this year?"', '"你今年打流感疫苗了吗？"'),
        ('side effect', '副作用', '"The medicine might cause some side effects like dizziness."', '"这个药可能会引起头晕等副作用。"'),
        ('surgery', '手术', '"The surgery went well and he\\'s recovering now."', '"手术很顺利，他正在康复中。"'),
        ('X-ray', 'X光', '"The doctor ordered an X-ray to check for fractures."', '"医生开了X光检查是否有骨折。"'),
        ('physical therapy', '物理治疗', '"After the injury, I need six weeks of physical therapy."', '"受伤后我需要六周的物理治疗。"'),
        ('wellness', '健康保健', '"Many companies offer wellness programs for employees."', '"很多公司都提供员工健康保健计划。"'),
        ('ER / emergency room', '急诊室', '"If the pain gets worse, go straight to the ER."', '"如果更疼了，直接去急诊室。"'),
    ],
    "weather": [
        ('heatwave', '热浪', '"There\\'s a heatwave this week — temps will reach 40 degrees."', '"这周有热浪——气温将达到40度。"'),
        ('air quality', '空气质量', '"The air quality index is unhealthy today."', '"今天空气质量指数不健康。"'),
        ('UV index', '紫外线指数', '"The UV index is extremely high today — wear sunscreen!"', '"今天紫外线指数极高——涂防晒！"'),
        ('typhoon', '台风', '"A typhoon is approaching — flights might be cancelled."', '"台风正在靠近，航班可能取消。"'),
        ('thunderstorm', '雷阵雨', '"A sudden thunderstorm caught us on our way home."', '"回家路上突然遇到了雷阵雨。"'),
        ('smog', '雾霾', '"The smog is so thick you can barely see the buildings."', '"今天雾霾太严重了，几乎看不清建筑。"'),
        ('heatstroke', '中暑', '"Drink plenty of water to avoid heatstroke."', '"多喝水以防中暑。"'),
        ('raincoat', '雨衣', '"I always carry a raincoat during the rainy season."', '"梅雨季我包里常备一件雨衣。"'),
        ('global warming', '全球变暖', '"The summers keep getting hotter due to global warming."', '"因为全球变暖，夏天越来越热了。"'),
        ('weather app', '天气App', '"My weather app says it\\'ll rain after 5 pm."', '"我的天气App说下午5点后会下雨。"'),
        ('air conditioner', '空调', '"The air conditioner is making a strange noise."', '"空调发出奇怪的声音。"'),
        ('drought', '干旱', '"The city is experiencing its worst drought in decades."', '"这座城市正经历几十年来最严重的干旱。"'),
    ],
    "job": [
        ('remote work', '远程办公', '"I\\'ve been doing remote work since last year and love it."', '"去年以来我一直远程办公，很喜欢。"'),
        ('hybrid', '混合办公', '"Our company has a hybrid model — two days in office."', '"我们公司采用混合办公——两天去公司。"'),
        ('layoff', '裁员', '"There were massive layoffs in the tech industry."', '"科技行业有大规模裁员。"'),
        ('onboarding', '入职培训', '"The onboarding process helped me understand the culture."', '"入职培训帮我了解了公司文化。"'),
        ('performance review', '绩效考核', '"I have my annual performance review next week."', '"下周是我的年度绩效考核。"'),
        ('side hustle', '副业', '"Many people have a side hustle for extra income."', '"很多人有副业来增加收入。"'),
        ('networking', '人脉拓展', '"Industry events are great for networking."', '"行业活动对拓展人脉很有帮助。"'),
        ('work-life balance', '工作生活平衡', '"I quit because there was no work-life balance."', '"我辞职了，因为完全没有工作生活平衡。"'),
        ('quit', '辞职', '"She decided to quit and start her own business."', '"她决定辞职创业。"'),
        ('burnout', '职业倦怠', '"Working 80 hours a week led to serious burnout."', '"每周工作80小时导致了严重的职业倦怠。"'),
        ('freelance', '自由职业', '"He switched to freelance to travel more."', '"他转做自由职业了，这样能多旅行。"'),
        ('internship', '实习', '"I did a summer internship at a startup."', '"我在一家初创公司做了暑期实习。"'),
        ('job hopping', '跳槽', '"Job hopping every two years is common in tech."', '"每两年跳一次槽在科技行业很常见。"'),
    ],
    "chat": [
        ('literally', '简直/真的', '"I literally died laughing when he told that story."', '"他讲那个故事的时候我简直笑死了。"'),
        ('random', '随机的/突然的', '"She sent me a random meme at 3 am."', '"她凌晨三点突然给我发了个表情包。"'),
        ('FOMO', '错失恐惧', '"I have major FOMO seeing everyone\\'s travel photos."', '"看到大家旅行照我超怕错过。"'),
        ('mood', '心情/状态', '"That\\'s so my mood right now — tired and just want to stay home."', '"那完全是我现在的状态——累了只想宅家。"'),
        ('no worries', '没事/不客气', '"Thanks! — No worries, happy to help!"', '"谢谢！——不客气，乐意帮忙！"'),
        ('same here', '我也是', '"I\\'m starving. — Same here, let\\'s eat!"', '"我饿死了。——我也是，去吃吧！"'),
        ('catch up', '叙旧', '"We should grab coffee and catch up soon!"', '"我们应该找时间喝咖啡叙叙旧！"'),
        ('chill', '放松/淡定', '"Just chill, everything will be fine."', '"放轻松，一切都会好起来的。"'),
        ('go-to', '首选', '"This ramen place is my go-to comfort food spot."', '"这家拉面店是我吃治愈食物的首选。"'),
        ('guilty pleasure', '罪恶的快乐', '"Binge-watching reality shows is my guilty pleasure."', '"刷真人秀是我的罪恶快乐。"'),
        ('tbh', '说实话', '"TBH, I didn\\'t really like the movie that much."', '"说实话，我没有那么喜欢那部电影。"'),
        ('for real', '真的假的', '"You\\'re moving to Tokyo? For real?"', '"你要搬去东京？真的假的？"'),
        ('low-key', '低调/悄悄地', '"I low-key wish I stayed home today."', '"我有点希望今天没出门。"'),
    ],
    "neighbor": [
        ('HOA', '业主协会', '"The HOA requires approval for exterior changes."', '"业主协会规定外部改动需要审批。"'),
        ('property management', '物业管理', '"Call property management if the elevator breaks."', '"电梯坏了就给物业打电话。"'),
        ('shared space', '共享空间', '"The rooftop is a shared space for all residents."', '"天台是所有住户的共享空间。"'),
        ('package', '快递包裹', '"Packages are left at the front desk if you\\'re out."', '"你不在家时快递放在前台。"'),
        ('neighborly', '睦邻友好的', '"It\\'s good to be neighborly with people next door."', '"和邻居睦邻友好总是不错的。"'),
        ('parking permit', '停车许可证', '"You need a permit to park in the community garage."', '"在小区车库停车需要许可证。"'),
        ('sublet', '转租', '"I\\'m subletting my apartment while I travel."', '"我去旅行期间把公寓转租出去了。"'),
        ('soundproof', '隔音', '"The walls aren\\'t soundproof — I hear my neighbor\\'s TV."', '"墙不太隔音——我能听到邻居的电视声。"'),
        ('maintenance fee', '物业费', '"The maintenance fee covers cleaning and security."', '"物业费包括清洁和安保。"'),
        ('lease', '租约', '"We signed a one-year lease with option to renew."', '"我们签了一年租约，可续约。"'),
        ('landlord', '房东', '"Our landlord is very responsive about repairs."', '"我们房东对维修响应很快。"'),
        ('security camera', '监控摄像头', '"There are security cameras in the lobby."', '"大堂有监控摄像头。"'),
    ],
    "travel": [
        ('staycation', '居家度假', '"We\\'re having a staycation this year — exploring our own city."', '"今年我们居家度假——探索自己的城市。"'),
        ('Airbnb', '民宿', '"We booked a cozy Airbnb in the mountains."', '"我们在山里订了个温馨的民宿。"'),
        ('all-inclusive', '全包式', '"We booked an all-inclusive resort — everything is covered."', '"我们订了全包式度假村，什么都包括了。"'),
        ('jet lag', '时差', '"I had terrible jet lag after the 15-hour flight."', '"飞了15个小时后时差反应很严重。"'),
        ('layover', '中转停留', '"We have a three-hour layover in Dubai."', '"我们在迪拜中转停留三小时。"'),
        ('travel hack', '省钱妙招', '"Here\\'s a travel hack: book flights on Tuesday."', '"分享一个旅行窍门：周二订机票最便宜。"'),
        ('digital nomad', '数字游民', '"She works remotely while traveling the world — a true digital nomad."', '"她一边远程工作一边旅行世界——真正的数字游民。"'),
        ('overbooked', '超售', '"The flight was overbooked and they asked for volunteers."', '"航班超售了，在征求自愿改签的人。"'),
        ('upgrade', '升级', '"We got a free upgrade to a suite!"', '"我们免费升级到了套房！"'),
        ('packing list', '行李清单', '"I always make a packing list before a trip."', '"我旅行前总是列个行李清单。"'),
        ('carry-on', '手提行李', '"I only travel with a carry-on — no checked luggage."', '"我旅行只带手提行李——不托运。"'),
        ('travel insurance', '旅行保险', '"Never travel without travel insurance — just in case."', '"旅行一定买保险，以防万一。"'),
        ('no-show fee', '未入住费用', '"There\\'s a no-show fee for late cancellations."', '"取消晚了会有未入住费用。"'),
    ],
    "movie": [
        ('spoiler', '剧透', '"No spoilers! I haven\\'t watched the finale yet."', '"别剧透！我还没看大结局。"'),
        ('binge-watch', '刷剧/一口气看完', '"I binge-watched the entire series over the weekend."', '"我周末一口气刷完了整部剧。"'),
        ('must-watch', '必看', '"This documentary is a must-watch."', '"这部纪录片必看。"'),
        ('box office', '票房', '"The movie topped the box office for three weeks."', '"这部电影连续三周登顶票房榜首。"'),
        ('remake', '翻拍', '"They\\'re doing a live-action remake of my favorite film."', '"他们要翻拍我最喜欢的电影真人版了。"'),
        ('sequel', '续集', '"The sequel is even better than the original!"', '"续集比第一部还要好看！"'),
        ('premiere', '首映', '"We got tickets to the premiere!"', '"我们弄到了首映式的票！"'),
        ('cast', '演员阵容', '"The cast is insane — all my favorite actors!"', '"演员阵容太强了——全是我喜欢的演员！"'),
        ('cinematography', '摄影', '"The cinematography in this film is breathtaking."', '"这部电影的摄影令人叹为观止。"'),
        ('IMAX', '巨幕', '"We watched it in IMAX — the experience was incredible."', '"我们在IMAX看的——体验太震撼了。"'),
        ('streaming', '流媒体', '"The show is available on all major streaming platforms."', '"这部剧在各大流媒体平台上都能看。"'),
        ('plot twist', '剧情反转', '"The plot twist at the end totally shocked me."', '"结尾的剧情反转彻底震惊了我。"'),
    ],
    "online_shopping": [
        ('add to cart', '加入购物车', '"Just click "add to cart" and continue shopping."', '"点击"加入购物车"继续选购。"'),
        ('wishlist', '心愿单', '"I saved the dress to my wishlist for later."', '"我把裙子收藏到心愿单了，以后再看。"'),
        ('flash sale', '限时抢购', '"The flash sale starts at midnight — items sell out fast."', '"限时抢购午夜开始——东西很快卖光。"'),
        ('free shipping', '包邮', '"Spend over 200 yuan and get free shipping."', '"满200元即可享受包邮。"'),
        ('sold out', '售罄', '"The limited edition sneakers sold out in minutes."', '"限量版运动鞋几分钟就售罄了。"'),
        ('customer service', '客服', '"Contact customer service if you have any issues with your order."', '"订单有任何问题请联系客服。"'),
        ('listing', '商品页', '"The listing says it ships within 24 hours."', '"商品页显示24小时内发货。"'),
        ('price drop', '降价', '"I waited for a price drop before buying the laptop."', '"我等降价才买了那台笔记本电脑。"'),
        ('reviewer', '买家/评价者', '"Top reviewers said this product is worth every penny."', '"高赞买家说这个产品物有所值。"'),
        ('live stream', '直播带货', '"I bought this from a live stream — the deal was too good."', '"我是看直播买的——价格实在太划算了。"'),
        ('restock', '补货', '"The item is out of stock but will restock next week."', '"这件商品缺货，但是下周会补货。"'),
        ('subscribe', '订阅/包月', '"Subscribe and save 15% on your monthly orders."', '"订阅后每月订购可省15%。"'),
        ('drop ship', '代发/直邮', '"This product is drop shipped from the manufacturer."', '"这款商品是从厂家直接发货的。"'),
    ],
    "gift": [
        ('thoughtful', '贴心的', '"That was such a thoughtful gift — you really know me!"', '"这礼物太贴心了——你真的很懂我！"'),
        ('handmade', '手工制作的', '"She gave me a handmade card — it meant so much."', '"她送了我一张手工贺卡——特别有意义。"'),
        ('gift card', '礼品卡', '"When in doubt, just get a gift card."', '"不知道送什么的时候，就送礼品卡。"'),
        ('wrapping paper', '包装纸', '"I love the pattern on this wrapping paper!"', '"我喜欢这张包装纸的花纹！"'),
        ('gift exchange', '礼物交换', '"We do a gift exchange at the office every Christmas."', '"我们办公室每年圣诞节都会有礼物交换。"'),
        ('DIY', '手工自制', '"She made a DIY photo album — it\\'s so personal."', '"她做了一本手工相册——特别有心意。"'),
        ('present', '礼物', '"I got you a little present — hope you like it!"', '"我给你准备了个小礼物——希望你喜欢！"'),
        ('regift', '转送礼物', '"I\\'m not going to regift this — it\\'s too nice."', '"这个太精致了，我不忍心转送。"'),
        ('unboxing', '开箱', '"I filmed the unboxing of my birthday presents."', '"我把生日礼物开箱拍了视频。"'),
        ('keep the receipt', '保留收据', '"Keep the receipt in case you need to exchange it."', '"保留好收据，万一需要换货。"'),
        ('white elephant', '白象礼物交换', '"We played white elephant at the office party."', '"我们在办公室派对上玩了白象交换礼物。"'),
        ('sentimental', '有纪念意义的', '"This necklace is very sentimental — it was my grandmother\\'s."', '"这条项链非常有纪念意义——是我祖母的。"'),
    ],
    "fitness": [
        ('HIIT', '高强度间歇训练', '"I do 20 minutes of HIIT every morning — it\\'s intense but effective."', '"我每天早上做20分钟HIIT——很累但效果好。"'),
        ('plank', '平板支撑', '"She can hold a plank for over three minutes."', '"她平板支撑能撑三分钟以上。"'),
        ('personal best', '个人最好成绩', '"I hit a personal best on my 5K run today!"', '"我今天5公里跑出了个人最好成绩！"'),
        ('sore', '酸痛的', '"My legs are so sore after yesterday\\'s workout."', '"昨天练完腿好酸痛。"'),
        ('core', '核心肌群', '"Planks are great for building core strength."', '"平板支撑对锻炼核心力量很有用。"'),
        ('warm up', '热身', '"Always warm up before exercise to prevent injury."', '"运动前一定要热身以防受伤。"'),
        ('cool down', '放松/冷身', '"Don\\'t skip the cool down — it helps with recovery."', '"别跳过放松环节——有助于恢复。"'),
        ('gym rat', '健身狂人', '"He goes to the gym every day — total gym rat."', '"他每天泡健身房——绝对的健身狂人。"'),
        ('protein shake', '蛋白奶昔', '"I drink a protein shake right after my workout."', '"我练完马上喝一杯蛋白奶昔。"'),
        ('deadlift', '硬拉', '"I can deadlift 80 kilos now — slowly improving!"', '"我现在能硬拉80公斤——慢慢进步中！"'),
        ('bodyweight', '自重训练', '"Bodyweight exercises are perfect for home workouts."', '"自重训练非常适合居家锻炼。"'),
        ('fitness tracker', '运动手环', '"My fitness tracker says I walked 12,000 steps today."', '"我的运动手环显示今天走了12000步。"'),
        ('resistance band', '弹力带', '"Resistance bands are great for home strength training."', '"弹力带非常适合在家做力量训练。"'),
    ],
    "barber": [
        ('fade', '渐变发型', '"I want a fade on the sides and longer on top."', '"两边要渐变，头顶留长一点。"'),
        ('undercut', '底削发型', '"The undercut is still a very popular hairstyle."', '"底削发型现在仍然很受欢迎。"'),
        ('bob', '波波头', '"She got a bob haircut and it looks so chic."', '"她剪了波波头，看起来好时髦。"'),
        ('balayage', '法式挑染', '"I\\'m thinking of getting balayage highlights this time."', '"这次我想做法式挑染。"'),
        ('beard trim', '修胡子', '"Can you do a beard trim as well with the haircut?"', '"理发时能顺便帮我修一下胡子吗？"'),
        ('curly cut', '卷发修剪', '"I need a curly cut from someone who specializes in curly hair."', '"我要找个专剪卷发的发型师。"'),
        ('hair mask', '发膜', '"I use a hair mask once a week to keep my hair healthy."', '"我每周用一次发膜保持头发健康。"'),
        ('hair oil', '护发油', '"A few drops of hair oil make my hair look shiny."', '"滴几滴护发油让我的头发看起来很有光泽。"'),
        ('perm', '烫发', '"I\\'m thinking about getting a perm for more volume."', '"我想烫个发增加发量感。"'),
        ('split ends', '分叉', '"I need a trim — my split ends are getting bad."', '"需要修剪了——分叉越来越严重。"'),
        ('hairline', '发际线', '"He\\'s been worried about his receding hairline."', '"他一直担心自己的发际线后移。"'),
        ('clipper', '推子', '"The barber used clippers for the back and sides."', '"理发师用推子推了后面和两边。"'),
        ('razor cut', '剃刀修剪', '"A razor cut gives the hair a softer, textured look."', '"剃刀修剪能让头发看起来更柔和有层次。"'),
    ],
}

# Parse the vocabulary section to find closing brackets
# Strategy: for each scene, find the closing `]` of its array and insert new items before it

scene_keys = list(additions.keys())

for scene_id, words in additions.items():
    # Find the pattern:    "<scene_id>": [  ...  ]
    # We need to find the closing ] of this scene's array and insert before it
    
    # Find the scene key in the vocabulary object
    pattern = f'  "{scene_id}": ['
    idx = content.find(pattern)
    if idx == -1:
        print(f"ERROR: Could not find scene '{scene_id}' in file!")
        continue
    
    # Find the closing ] of this array
    # We need to track bracket nesting from this point
    start_idx = idx + len(pattern)
    depth = 0
    close_idx = -1
    i = start_idx
    in_string = False
    string_char = None
    escaped = False
    
    while i < len(content):
        ch = content[i]
        
        if escaped:
            escaped = False
            i += 1
            continue
        
        if ch == '\\' and in_string:
            escaped = True
            i += 1
            continue
        
        if ch in ('"', "'") and not in_string:
            in_string = True
            string_char = ch
            i += 1
            continue
        
        if ch == string_char and in_string:
            in_string = False
            string_char = None
            i += 1
            continue
        
        if not in_string:
            if ch == '[':
                depth += 1
            elif ch == ']':
                depth -= 1
                if depth == 0:
                    close_idx = i
                    break
        
        i += 1
    
    if close_idx == -1:
        print(f"ERROR: Could not find closing bracket for scene '{scene_id}'!")
        continue
    
    # Get indentation of the closing bracket
    line_start = content.rfind('\n', 0, close_idx)
    indent = content[line_start+1:close_idx]
    
    # Build the new items to insert
    new_items_lines = []
    for j, (en, cn, example, ex_cn) in enumerate(words):
        item = f'''    {{
      "id": "{scene_id}_{40 + j}",
      "word": "{en}",
      "cn": "{cn}",
      "example": {example},
      "ex_cn": {ex_cn}
    }}'''
        new_items_lines.append(item)
    
    new_items = ',\n'.join(new_items_lines)
    
    # Insert before the closing ]
    before_close = content[:close_idx]
    after_close = content[close_idx:]
    
    # Add a trailing comma to the last existing item if there isn't one
    # The closing bracket is at close_idx. We need to check if there's a comma before the whitespace/newline before ]
    
    content = before_close + ',\n' + new_items + '\n  ' + after_close
    
    print(f"✅ Added {len(words)} words to scene '{scene_id}'")

with open("/root/.openclaw/workspace/english_vocab/js/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print("\n🎉 All done! File updated.")
