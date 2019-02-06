# recommend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```


### 接口列表
+ [CPU](#cpu)
+ [显卡](#graphics)
+ [内存条](#memory)


### 接口说明
**<span id="cpu">CPU</span>**
请求地址：/cpu?name=...
请求参数（可选）：
参数名|含义|说明
---|:--:|---:
name|CPU名称|酷睿i5 8500
brand|品牌|Inter
price|价格|价格区间：1200-2000，准确值：1200
series|系列|酷睿i9
slot|插槽|LGA 1151
返回数据：
```
{
    "code": 0,  // 错误代码，0-请求正常
    "msg": "",  // 错误信息
    "result": [ // 返回数据
        {
            "id": 3,    // CPU 的ID
            "name": "Intel 酷睿i5 8500",    // CPU名称
            "brand": "Inter",   // 品牌
            "price": 1499,  // 价格
            "series": "酷睿i5", // 系列
            "features": null,   // 特性
            "slot": "LGA 1151", // 插槽
            "tag": null,    // 标签
            "status": 1,    // 状态
            "image":"https://2b.zol-img.com.cn/product/190_320x240/577/cenD00LUkiNlI.jpg"   // 图片
        }
    ]
}
```
**说明**
不传参返回所有cpu数据

---

**<span id="graphics">显卡</span>**
请求地址：/graphics?name=...
请求参数（可选）：
参数名|含义|说明
---|:--:|---:
name|显卡名称|七彩虹iGame GeForce RTX 2080 Ti Advanced OC
brand|品牌|七彩虹
price|价格|价格区间：1200-2000，准确值：1200
capacity|显卡容量|11（GB）
chip|显卡芯片|GeForce RTX 2080Ti
image|显卡图片|https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg
type|显卡类型|发烧级
返回数据：
```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "id": 1,    // 显卡id
            "name": "七彩虹iGame GeForce RTX 2080 Ti Advanced OC",  // 显卡名称
            "brand": "七彩虹",  // 品牌
            "price": 9999,  // 价格
            "capacity": 11, // 显卡容量
            "chip": "GeForce RTX 2080Ti",   // 显卡芯片
            "image": "https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg", // 显卡图片
            "type": "发烧级",   // 显卡类型
            "status": 1
        }
    ]
}
```
**说明**
不传参返回所有显卡数据

---

**<span id="memory">内存条</span>**
请求地址：/memory?name=...
请求参数（可选）：
参数名|含义|说明
---|:--:|---:
name|内存条名称|影驰GAMER 8GB DDR4 2400
brand|品牌|影驰
price|价格|价格区间：1200-2000，准确值：1200
capacity|内存容量|8（GB）
frequency|内存主频|2400（MHz）
image|内存条图片|https://2d.zol-img.com.cn/product/192_320x240/461/ce6ElKKfHpLuU.jpg
type|内存类型|DDR4
返回数据：
```
{
    "code": 0,
    "msg": "",
    "result": [
        {
            "id": 1,    // 内存条id
            "name": "影驰GAMER 8GB DDR4 2400",  // 内存条名称
            "brand": "影驰",    // 品牌
            "price": 459,   // 价格
            "type": "DDR4", // 类型
            "capacity": 8,  // 内存容量
            "image": "https://2f.zol-img.com.cn/product/173_320x240/791/ceZMhVCgEfffk.jpg", // 图片
            "frequency": 2400,  // 主频
            "status": 1
        }
    ]
}
```
**说明**
不传参返回所有内存条数据

