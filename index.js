const phb = [
    "爱国主义、",
    "奥卡姆剃刀、",
    "八卦、",
    "存在论、",
    "良心、",
    "美、",
    "矛盾、",
    "平均共产主义、",
    "死亡、",
    "自由意志、"
]
const food = [
    "小鸡炖蘑菇",
    "红烧排骨",
    "土豆泥",
    "阿拉斯加鲍鱼",
    "波士顿龙虾",
    "佛跳墙",
    "东北大乱炖",
    "四川九宫格",
    "鸳鸯锅",
    "红烧猪蹄",
    "炖肘子",
    "荷兰豆",
    "酸菜熘粉条",
    "小葱拌豆腐",
    "热干面",
    "烤全羊",
    "烤馕",
    "鱼头泡饼",
    "可乐鸡翅",
    "红烧牛肉面"
    // 、糖炒栗子、盐水鸭、卤蛋、兰州拉面、口水鸭、大盘鸡、海底捞、狗不理、大列巴、成吉斯汗火锅、烤包子、马迭尔冰棍、大马哈鱼籽拌饭、芒果冰、水煮肉片、湄公河烤鱼、烤乳猪、黄油烤面包、煮卷心菜、老坛酸菜牛肉面、海南粉、椰子饭、加积鸭、黄焖鸡米饭、凉粉、炸酱面、凉面、牛肉粉、海鲜面、马骨粉、地三鲜、石锅拌饭、盐水虾、醉蟹、罗宋汤、宫保鸡丁、清蒸大闸蟹、焦糖布丁、鸭血粉丝汤、沙丁鱼、金枪鱼、三文鱼片、泡椒凤爪、咖喱鸡块、滕椒麻鸡、酱汁排骨、死神辣条、死神辣酱拌面、死神锅巴、老干妈煎肉、麻辣香锅、麻婆豆腐、麻辣烫、安徽鸭叫跳、猫不闻、滕椒排骨、蜜薯地瓜干、叫花鸡、干红辣椒炒鸭舌、酱牛肉、草莓、菠萝、苹果、葡萄、青提、柠檬、李子、水晶梨、红富士、山楂、树莓、牛油果、蛇果、榴莲、山毛榉坚果，海棠果，蓝莓，栗子，板栗，木瓜，桃子，人参果，金桔 、西洋李子、 砀山梨 毛桃 干果 公爵樱桃 无花果 榛子 鲜荔枝 白果，银杏 葡萄 青梅 哈密瓜 山楂果 榛子 水蜜桃 金桔 柠檬 荔枝 桂圆，龙眼 枇杷 柑桔 芒果 黑樱桃 香瓜 甜瓜 脐橙 佛爪 沙枣猕猴桃 红富士 黄富士 黄香蕉
]
const thing = [
    "旋转木马",
    "枕头、",
    "诺言、",
    "天空",
    "冬天",
    "春天",
    "夏天",
    "秋天",
    "冬日",
    "毛衣",
    "白羊",
    "帅哥",
    "美女",
    "季节",
    "鲜花",
    "服饰",
    "白开水",
    "大山",
    "火车",
    "汽车",
    "歌曲",
    "舞蹈",
]

// 取随机数
function random(min = 0, max = 100) {
    return Math.random() * (max - min) + min
}

//
// 取随机句
function randomWord(list) {
    return list[Math.floor(Math.random() * list.length)]
}


function generate() {
    let name = document.querySelector('input').value

    if (name === '黄格妍') {
        document.querySelector('#text').innerHTML = '<div class="content">' + name.toString() + '的意义是' + randomWord(phb) + randomWord(food) + '和吴逸宁。' + '</div>'
    }
    else if (name === '吴逸宁') {
        document.querySelector('#text').innerHTML = '<div class="content">' + name.toString() + '的意义是' + randomWord(phb) + randomWord(food) + '和黄格妍。' + '</div>'
    } else {
        document.querySelector('#text').innerHTML = '<div class="content">' + name.toString() + '的意义是' + randomWord(phb) + randomWord(food) + '和' + randomWord(thing) + '。' + '</div>'
    }

}

document.querySelector('#generate').addEventListener('click', function () {
    generate()
})



