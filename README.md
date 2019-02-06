# recommend

### 接口说明
**CPU相关**
请求地址：/cpu?where=...
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
