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
    "自由意志、",
    "本真的自我、",
    "精神、",
    "绝对自由、",
    "西西弗斯、",
    "悲观主义、",
    "存在主义、",
    "快乐主义、",
    "神秘主义、",
    "荒诞主义、",
    "中国特色社会主义、"
]
const nature = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
    "宇宙",
    "情话",
    "邂逅",
    "思念",
    "爱情",
    "旋转木马",
    "枕头",
    "诺言",
    "天空",
    "冬天",
    "春天",
    "夏天",
    "秋天",
    "冬日",
    "毛衣",
    "阳光",
    "男人",
    "女人",
    "季节",
    "静水",
    "漩涡",
    "明信片",
    "童话书",
    "火车",
    "神话",
    "音乐",
    "舞蹈",
    "月亮",
    "星星",
    "太阳",
    "树叶",
    "极光",
    "彩虹",
    "微笑",
    "雏菊",
    "朋友",
    "甄嬛传"
]
const poem = [
    "尝试被改变的命运",
    "多雨的黄昏",
    "无疾而终的恋爱",
    "仲夏夜之梦",
    "皆大欢喜",
    "百年孤独",
    "一见钟情",
    "小心翼翼却又急切的心动",
    "花束般的恋爱",
    "冰冷的玻璃杯在桌面留下的印迹",
    "久别重逢",
    "怦然心动",
    "高中的最后一个晚自习",
    "刻骨铭心的恋爱",
    "无人理解的选择",
    "失眠的日子",
    "空气新鲜又明亮",
    "穿越世界的旅行",
    "贫穷的街道",
    "绝望的日落",
    "破败郊区的月亮",
    "一日天堂十日地狱的爱",
    "有人在家的房子",
    "孩提时代的下课铃",
    "南方小镇的雨季",
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
        document.querySelector('#text').innerHTML = '<div class="content">' + name.toString() + '的意义是巧克力、速食、土色衣服、猫、doi、睡觉和吴逸宁。' + '</div>'
    }
    else if (name === '吴逸宁') {
        document.querySelector('#text').innerHTML = '<div class="content">' + name.toString() + '的意义是' + randomWord(nature) + '、'+randomWord(poem) + '和黄格妍。' + '</div>'
    } else {
        document.querySelector('#text').innerHTML = '<div class="content">' + name.toString() + '的意义是' + randomWord(phb) + randomWord(nature) + '和' + randomWord(poem) + '。' + '</div>'
    }

}

document.querySelector('#generate').addEventListener('click', function () {
    generate()
})



