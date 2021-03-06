define({ "api": [
  {
    "type": "GET",
    "url": "/api/detailstatistic/listActivityChannelAndSum",
    "title": "【统计页-双创活动分析】全国/省/市 活动渠道",
    "version": "1.0.0",
    "name": "listActivityChannelAndSum_______",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市，活动渠道分布，按平台、第三方两个渠道统计当前平台活动总数；(不包括活动报备) 第三方：根据活动状态统计，选择官方报名状态的活动为第三方渠道活动；其余状态为平台活动(hc_zone_activity表) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listActivityChannelAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listActivityChannelAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listActivityChannelAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "platformSum",
            "description": "<p>平台发布数</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "thirdPartySum",
            "description": "<p>第三方发布数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"platformSum\": 120,\n            \"thirdPartySum\": 9\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listActivityChannelAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listActivitySum",
    "title": "【统计页-双创活动分析】全国/省/市 双创活动数量分布",
    "version": "1.0.0",
    "name": "listActivitySum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 双创活动数量分布,按省份，市，区统计按省份统计当前的平台活动总数+活动报备总数;(包括全部状态的平台活动和全部状态的活动报备) (hc_zone_activity表以及hc_sys_company_activity的活动总数的和，,需要注意的是活动只能由管理员发起，发起之后企业可以申请参加活动，由管理员审核通过，活动报备是指没有经过平台的流程，活动举办完成以后到平台做报备登记) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listActivitySum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listActivitySum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listActivitySum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>地区名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "\t{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": \n          [{\"result\":2,\"type\":\"上海市\"},{\"result\":1,\"type\":\"重庆市\"},{\"result\":1,\"type\":\"云南省\"},{\"result\":2,\"type\":\"内蒙古自治区\"},{\"result\":16,\"type\":\"北京市\"},{\"result\":13,\"type\":\"天津市\"},{\"result\":1,\"type\":\"山东省\"},{\"result\":7,\"type\":\"山西省\"},{\"result\":54,\"type\":\"广东省\"},{\"result\":13,\"type\":\"河北省\"},{\"result\":1,\"type\":\"湖南省\"}]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listActivitySum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listActivityTypeAndSum",
    "title": "【统计页-双创活动分析】全国/省/市 活动类型分布",
    "version": "1.0.0",
    "name": "listActivityTypeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 活动类型分布，按赛事汇和沙龙路演两个类型统计当前平台活动总数(hc_zone_policy表) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listActivityTypeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listActivityTypeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listActivityTypeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>政策分类 字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>政策分类 字典表value  key,value对应关系{&quot;college&quot;:&quot;高校和科研院所&quot;,&quot;enterprise&quot;:&quot;企事业单位&quot;,&quot;estate&quot;:&quot;产业园区&quot;,&quot;incubator&quot;:&quot;孵化器和众创空间&quot;,&quot;maker&quot;:&quot;创客&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": \n          [{\"key\":\"1\",\"value\":\"赛事汇\",\"result\":53},{\"key\":\"2\",\"value\":\"沙龙&路演\",\"result\":20}] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listActivityTypeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listAuditPassProjectSum",
    "title": "【统计页-创客企业分析】全国/省/市 项目分布",
    "version": "1.0.0",
    "name": "listAuditPassProjectSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 项目分布,只统计已审核通过的项目，项目状态一共有五种0:待审核,1:预热项目,2: 融资中,3:融资结束,4:审核失败,5:已退孵，只选出 预热项目，融资中，融资结束状态的项目即可 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listAuditPassProjectSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listAuditPassProjectSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listAuditPassProjectSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>省/市/区名称统计分类</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>项目数量统计结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"type\": \"天河区\",\n            \"result\": 4\n        },\n        {\n            \"type\": \"海珠区\",\n            \"result\": 4\n        },\n        {\n            \"type\": \"番禺区\",\n            \"result\": 1\n        },\n        {\n            \"type\": \"白云区\",\n            \"result\": 10\n        },\n        {\n            \"type\": \"荔湾区\",\n            \"result\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": "{\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listAuditPassProjectSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listCompanyActivityTypeAndSum",
    "title": "【统计页-双创政策分析】全国/省/市 活动报备类型分布",
    "version": "1.0.0",
    "name": "listCompanyActivityTypeAndSum_________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 活动报备类型分布,统计创业活动等每个类型的活动报备总数（包括全部状态的活动报备，不管是否审核通过）(hc_sys_company_activity表) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyActivityTypeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyActivityTypeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyActivityTypeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>活动报备数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>活动报备 字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>活动报备字典表value, key,value对应关系 {&quot;0&quot;:&quot;创新创业大赛&quot;,&quot;1&quot;:&quot;投融资对接&quot;,&quot;2&quot;:&quot;创业培训&quot;,&quot;3&quot;:&quot;项目路演筛选&quot;,&quot;4&quot;:&quot;重要科技会议&quot;,&quot;5&quot;:&quot;技术研讨会&quot;,&quot;6&quot;:&quot;产业论坛&quot;,&quot;7&quot;:&quot;行业会展&quot;,&quot;8&quot;:&quot;创新创业沙龙&quot;,&quot;9&quot;:&quot;其他类型&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": \n          [{\"key\":\"0\",\"result\":7,\"value\":\"创新创业大赛\"},{\"key\":\"1\",\"result\":2,\"value\":\"投融资对接\"},{\"key\":\"2\",\"result\":2,\"value\":\"创业培训\"},{\"key\":\"3\",\"result\":2,\"value\":\"项目路演筛选\"},{\"key\":\"4\",\"result\":0,\"value\":\"重要科技会议\"},{\"key\":\"5\",\"result\":0,\"value\":\"技术研讨会\"},{\"key\":\"6\",\"result\":0,\"companyActivityValue\":\"产业论坛\"},{\"key\":\"7\",\"result\":0,\"value\":\"行业会展\"},{\"key\":\"8\",\"result\":0,\"value\":\"创新创业沙龙\"},{\"key\":\"9\",\"result\":0,\"value\":\"其他类型\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listCompanyActivityTypeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listCompanyAndProjectAndEmployeeIncreaseInOneYear",
    "title": "返回结果跟api文档部分【统计页-创客企业分析】近一年创客企业变化情况",
    "version": "1.0.0",
    "name": "listCompanyAndProjectAndEmployeeIncreaseInOneYear",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>省/市/区,近一年创客企业变化情况,统计每月新增企业数量(hc_sys_user_company表)，审核通过的项目数量(hc_project表)，审核通过的创业团队人数(即企业每月审核通过的成员数量，在hc_sys_company_member_audit表里查询出每月新增的并且审核通过的成员数量); 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyAndProjectAndEmployeeIncreaseInOneYear?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyAndProjectAndEmployeeIncreaseInOneYear?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyAndProjectAndEmployeeIncreaseInOneYear?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "increasedProjectNum",
            "description": "<p>项目数量</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "increasedCompanyNum",
            "description": "<p>企业数量</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "increasedMemberNum",
            "description": "<p>创业团队人数</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>近一年12个月份统计分类，需要显示年份和月份 例如：2017年3月</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"type\": \"2016-10\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 0\n        },\n        {\n            \"type\": \"2016-11\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 1\n        },\n        {\n            \"type\": \"2016-12\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 4\n        },\n        {\n            \"type\": \"2017-01\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 13\n        },\n        {\n            \"type\": \"2017-02\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 22\n        },\n        {\n            \"type\": \"2017-03\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 17\n        },\n        {\n            \"type\": \"2017-04\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 3\n        },\n        {\n            \"type\": \"2017-05\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 98\n        },\n        {\n            \"type\": \"2017-06\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 5\n        },\n        {\n            \"type\": \"2017-07\",\n            \"increasedMemberNum\": 0,\n            \"increasedCompanyNum\": 18\n        },\n        {\n            \"type\": \"2017-08\",\n            \"increasedMemberNum\": 3,\n            \"increasedCompanyNum\": 18\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listCompanyAndProjectAndEmployeeIncreaseInOneYear"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listCompanyAttributeAndSum",
    "title": "【统计页-创客企业分析】全国/省/市 企业类型分布",
    "version": "1.0.0",
    "name": "listCompanyAttributeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 企业类型分布,按无限责任公司等6个类型，统计各类型的企业总数,返回企业类型以及该类型企业的数量； 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyAttributeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyAttributeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyAttributeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>全国/省/市企业数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>企业属性字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>企业属性 字典表value    key:value对应关系(&quot;0&quot;:&quot;国有企业&quot;, &quot;1&quot;:&quot;国有控股企业&quot;,&quot;2&quot;:&quot;外资企业&quot;,&quot;3&quot;:&quot;合资企业&quot;,&quot;4&quot;:&quot;私营企业&quot;)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":7,\"value\":\"国有企业\",\"key\":\"0\"},{\"result\":5,\"value\":\"国有控股企业\",\"key\":\"1\"},{\"result\":2,\"value\":\"外资企业\",\"key\":\"2\"},{\"result\":1,\"value\":\"合资企业\",\"key\":\"3\"},{\"result\":0,\"value\":\"私营企业\",\"key\":\"4\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": "{\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listCompanyAttributeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listCompanyRegTimeAndSum",
    "title": "【统计页-创客企业分析】 企业孵化时长分布",
    "version": "1.0.0",
    "name": "listCompanyRegTimeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>省/市/区, 企业孵化时长分布,从企业注册平台的时间开始计算，新需求按半年、1-2年、2-5年、大于5年四个区间划分，统计每个时间区间的企业总数;(在hc_park表中筛选,在相应时间段中成立的园区数量即为要统计的园区数量) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyRegTimeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyRegTimeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyRegTimeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>企业总数的统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>时间范围统计分类 {&quot;0&quot;:&quot;半年以内&quot;},{&quot;1&quot;:&quot;半年到两年&quot;},{&quot;2&quot;:&quot;两年到五年&quot;},{&quot;3&quot;:&quot;大于五年&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\":[{\"result\":656,\"type\":0},{\"result\":57,\"type\":1},{\"result\":0,\"type\":2},{\"result\":0,\"type\":3}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listCompanyRegTimeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listCompanySettledStatusAndSum",
    "title": "【统计页-创客企业分析】全国/省/市  企业孵化状态情况",
    "version": "1.0.0",
    "name": "listCompanySettledStatusAndSum_________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市， 企业孵化状况情况：按在孵、出孵2个状态，统计各状态当前的企业总数及占比，在孵企业：入驻了具体园区的企业,出孵企业：在平台上孵化的企业(企业入驻园区状态一共有五种， 0未入驻 1已入驻 2入驻中 3退孵中，状态1为入孵，其余归为出孵) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listCompanySettledStatusAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanySettledStatusAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanySettledStatusAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>统计名称(用0,1代替统计名称){&quot;0&quot;:&quot;出孵企业&quot;,&quot;1&quot;:&quot;入孵企业&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":14,\"name\":\"0\"},{\"result\":744,\"name\":\"1\"}]    \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listCompanySettledStatusAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listCompanySum",
    "title": "【统计页-创客企业分析】全国/省/市企业分布图",
    "version": "1.0.0",
    "name": "listCompanySum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市企业分布图;() 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listCompanySum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanySum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanySum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>全国/省/市企业数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>省/市/区 名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"result\": 92,\n            \"type\": \"北京市\"\n        },\n        {\n            \"result\": 709,\n            \"type\": \"广东省\"\n        },\n        {\n            \"result\": 1,\n            \"type\": \"江苏省\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listCompanySum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listCompanyTypeAndSum",
    "title": "【统计页-创客企业分析】全国/省/市 企业类型分布",
    "version": "1.0.0",
    "name": "listCompanyTypeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 企业类型分布,按无限责任公司等6个类型，统计各类型的企业总数,返回企业类型以及该类型企业的数量； 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyTypeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyTypeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listCompanyTypeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>全国/省/市企业数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>企业类型字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>园企业类型字典表value  key:value对应关系(&quot;1&quot;:&quot;无限责任公司&quot;,&quot;2&quot;:&quot;有限责任公司&quot;,&quot;3&quot;:&quot;股份有限公司&quot;,&quot;4&quot;:&quot;个人独资公司&quot;,&quot;5&quot;:&quot;合伙企业&quot;,&quot;6&quot;:&quot;公司制企业&quot;)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":27,\"value\":\"无限责任公司\",\"key\":\"1\"},{\"result\":213,\"value\":\"有限责任公司\",\"key\":\"2\"},{\"result\":58,\"value\":\"股份有限公司\",\"key\":\"3\"},{\"result\":3,\"value\":\"个人独资公司\",\"key\":\"4\"},{\"result\":1,\"value\":\"合伙企业\",\"key\":\"5\"},{\"result\":0,\"value\":\"公司制企业\",\"key\":\"6\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": "{\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listCompanyTypeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listMonthActivityAndApplySumInOneYear",
    "title": "【统计页-双创活动分析】全国/省/市 近一年双创活动举办情况",
    "version": "1.0.0",
    "name": "listMonthActivityAndApplySumInOneYear____________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市，近一年双创活动举办情况，发布活动：每月新增的活动数（包括全部状态的活动+官方报名活动）；报名人数：每月新增审核通过的报名人数(hc_zone_activity表里查询，每月新发布的活动和报名人数) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listMonthActivityAndApplySumInOneYear?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listMonthActivityAndApplySumInOneYear?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listMonthActivityAndApplySumInOneYear?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "activityIncrease",
            "description": "<p>发布活动</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "applyNumIncrease",
            "description": "<p>申请人数</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>近半年12个月份统计分类，需要显示年份和月份 例如：2017年3月</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": \n          [{\"type\":\"2016-10\",\"activityIncrease\":0,\"applyNumIncrease\":0},{\"type\":\"2016-11\",\"activityIncrease\":0,\"applyNumIncrease\":0},{\"type\":\"2016-12\",\"activityIncrease\":30,\"applyNumIncrease\":1485},{\"type\":\"2017-01\",\"activityIncrease\":20,\"applyNumIncrease\":200},{\"type\":\"2017-02\",\"activityIncrease\":14,\"applyNumIncrease\":100},{\"type\":\"2017-03\",\"activityIncrease\":34,\"applyNumIncrease\":100},{\"type\":\"2017-04\",\"activityIncrease\":13,\"applyNumIncrease\":43},{\"type\":\"2017-05\",\"activityIncrease\":6,\"applyNumIncrease\":0},{\"type\":\"2017-06\",\"activityIncrease\":3,\"applyNumIncrease\":0},{\"type\":\"2017-07\",\"activityIncrease\":12,\"applyNumIncrease\":0},{\"type\":\"2017-08\",\"activityIncrease\":0,\"applyNumIncrease\":0},{\"type\":\"2017-09\",\"activityIncrease\":6,\"applyNumIncrease\":5}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listMonthActivityAndApplySumInOneYear"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listMonthParkSumAndAreaInOneYear",
    "title": "【统计页-双创园区分析】近一年园区数量变化情况",
    "version": "1.0.0",
    "name": "listMonthParkSumAndAreaInOneYear",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>省/市/区,近一年园区数量变化情况,统计每月新增园区的面积数和每月新增园区数;(直接在hc_park表中筛选出近一年每月增长的园区数量和新增园区面积,要用月份为单位) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listMonthParkSumAndAreaInOneYear?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listMonthParkSumAndAreaInOneYear?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listMonthParkSumAndAreaInOneYear?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "increasedArea",
            "description": "<p>全国/省/市每月增长园区创业面积</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "increasedParkNum",
            "description": "<p>全国/省/市每月增长园区数量</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>近一年12个月份统计分类，需要显示年份和月份 例如：2017年3月</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"increasedParkNum\":0,\"type\":\"2016-10\",\"increasedArea\":0},{\"increasedParkNum\":1,\"type\":\"2016-11\",\"increasedArea\":12233},{\"increasedParkNum\":2,\"type\":\"2016-12\",\"increasedArea\":40000},{\"increasedParkNum\":21,\"type\":\"2017-01\",\"increasedArea\":29908766},{\"increasedParkNum\":6,\"type\":\"2017-02\",\"increasedArea\":68082},{\"increasedParkNum\":20,\"type\":\"2017-03\",\"increasedArea\":101761},{\"increasedParkNum\":1,\"type\":\"2017-04\",\"increasedArea\":0},{\"increasedParkNum\":2,\"type\":\"2017-05\",\"increasedArea\":1430000},{\"increasedParkNum\":3,\"type\":\"2017-06\",\"increasedArea\":889},{\"increasedParkNum\":5,\"type\":\"2017-07\",\"increasedArea\":0},{\"increasedParkNum\":2,\"type\":\"2017-08\",\"increasedArea\":112},{\"increasedParkNum\":3,\"type\":\"2017-09\",\"increasedArea\":3000}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listMonthParkSumAndAreaInOneYear"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listMonthPolicySumInOneYear",
    "title": "【统计页-双创政策分析】全国/省/市 近一年政策发布情况",
    "version": "1.0.0",
    "name": "listMonthPolicySumInOneYear",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市近一年政策发布情况,统计每月新增政策数(hc_zone_policy表) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listMonthPolicySumInOneYear?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listMonthPolicySumInOneYear?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listMonthPolicySumInOneYear?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>全国/省/市每月增长政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>近一年12个月份统计分类，需要显示年份和月份 例如：2017年3月*</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": \n            [{\"type\":\"2016-10\",\"result\":0},{\"type\":\"2016-11\",\"result\":0},{\"type\":\"2016-12\",\"result\":3},{\"type\":\"2017-01\",\"result\":5},{\"type\":\"2017-02\",\"result\":7},{\"type\":\"2017-03\",\"result\":117},{\"type\":\"2017-04\",\"result\":15},{\"type\":\"2017-05\",\"result\":17},{\"type\":\"2017-06\",\"result\":6},{\"type\":\"2017-07\",\"result\":1},{\"type\":\"2017-08\",\"result\":2},{\"type\":\"2017-09\",\"result\":0}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listMonthPolicySumInOneYear"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listParkGradeAndSum",
    "title": "【统计页-双创园区分析】园区等级分布",
    "version": "1.0.0",
    "name": "listParkGradeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市,普通园区，市级园区，省级园区数量分布;(直接在hc_park表中找到全国，全省或者全市对应的等级的园区数量) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listParkGradeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkGradeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkGradeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>园区数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>园区等级字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>园区等级字典表value  key:value对应关系{&quot;0&quot;:&quot;普通&quot;,&quot;1&quot;:&quot;市级&quot;,&quot;2&quot;:&quot;省级&quot;,&quot;3&quot;:&quot;国家级&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": " {\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":108,\"value\":\"普通\",\"key\":\"0\"},{\"result\":4,\"value\":\"市级\",\"key\":\"1\"},{\"result\":6,\"value\":\"省级\",\"key\":\"2\"},{\"result\":26,\"value\":\"国家级\",\"key\":\"3\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listParkGradeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listParkOperationTimeAndSum",
    "title": "【统计页-双创园区分析】 园区运营时间分布",
    "version": "1.0.0",
    "name": "listParkOperationTimeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>省/市/区,按半年、半年-2年、2-5年、大于5年四个区间划分，统计每个时间区间的园区总数;(在hc_park表中筛选,在相应时间段中成立的园区数量即为要统计的园区数量) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listParkOperationTimeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkOperationTimeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkOperationTimeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>园区总数统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>统计分类 {&quot;0&quot;:&quot;半年以内&quot;},{&quot;1&quot;:&quot;半年到两年&quot;},{&quot;2&quot;:&quot;两年到五年&quot;},{&quot;3&quot;:&quot;大于五年&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\":[{\"result\":83,\"type\":0},{\"result\":59,\"type\":1},{\"result\":0,\"type\":2},{\"result\":0,\"type\":3}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listParkOperationTimeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listParkSum",
    "title": "【统计页-双创园区分析】全国/省/市 园区数量分布",
    "version": "1.0.0",
    "name": "listParkSum_______",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市园区数量分布，包括全部类型的园区; 假如有些省份没有返回，没有数据，前端需要自行判断。  (只需要根据条件，从hc_park表里select count出来，再group by即可) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listParkSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>园区数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>省/市/区名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": " {\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":1,\"type\":\"山东省\"},{\"result\":193,\"type\":\"广东省\"},{\"result\":1,\"type\":\"广西壮族自治区\"},{\"result\":1,\"type\":\"河南省\"},{\"result\":1,\"type\":\"海南省\"},{\"result\":2,\"type\":\"湖南省\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listParkSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listParkTypeAndSum",
    "title": "【统计页-双创园区分析】全国/省/市园区类型分布",
    "version": "1.0.0",
    "name": "listParkTypeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市高新园区，社会园区，高校园区数量,如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listParkTypeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkTypeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listParkTypeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>园区类型字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>园区类型字典表value   key:value对应关系{&quot;0&quot;:&quot;社会园区&quot;,&quot;1&quot;:&quot;高校园区&quot;,&quot;3&quot;:&quot;高新园区&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": " {\n    \"data\": [{\"result\":146,\"value\":\"社会园区\",\"key\":\"0\"},{\"result\":23,\"value\":\"高校园区\",\"key\":\"1\"},{\"result\":7,\"value\":\"高新园区\",\"key\":\"3\"}],\n    \"meta\": {\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true,\n        \"type\": 200\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listParkTypeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listPolicyClassifyAndSum",
    "title": "【统计页-双创政策分析】全国/省/市政策分类情况",
    "version": "1.0.0",
    "name": "listPolicyClassifyAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市，按优惠补贴、政策信息两种类型，统计每个分类的政策总数及占比(hc_zone_policy表) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyClassifyAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyClassifyAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyClassifyAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>政策分类 字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>政策分类 字典表value  key,value对应关系{&quot;college&quot;:&quot;高校和科研院所&quot;,&quot;enterprise&quot;:&quot;企事业单位&quot;,&quot;estate&quot;:&quot;产业园区&quot;,&quot;incubator&quot;:&quot;孵化器和众创空间&quot;,&quot;maker&quot;:&quot;创客&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"result\": 44,\n            \"value\": \"政策信息\",\n            \"key\": \"0\"\n        },\n        {\n            \"result\": 130,\n            \"value\": \"优惠补贴\",\n            \"key\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listPolicyClassifyAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listPolicyDepartmentAndSum",
    "title": "【统计页-双创政策分析】全国/省/市政策来源分布",
    "version": "1.0.0",
    "name": "listPolicyDepartmentAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市政策来源分布,按经信等7个政策来源，统计当前每个来源渠道的政策总数(hc_zone_policy表) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyDepartmentAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyDepartmentAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyDepartmentAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>政策发布部门 字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>政策发布部门 字典表value, key,value对应关系 {&quot;cotrun&quot;:&quot;科创&quot;,&quot;industry&quot;:&quot;工商&quot;,&quot;letter&quot;:&quot;经信&quot;,&quot;ndrcOffical&quot;:&quot;发改委&quot;,&quot;oneClub&quot;:&quot;人社&quot;,&quot;rent&quot;:&quot;地税&quot;,&quot;stateTaxes&quot;:&quot;国税&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"key\": \"cotrun\",\n            \"value\": \"科创\",\n            \"result\": 8\n        },\n        {\n            \"key\": \"industry\",\n            \"value\": \"工商\",\n            \"result\": 1\n        },\n        {\n            \"key\": \"letter\",\n            \"value\": \"经信\",\n            \"result\": 13\n        },\n        {\n            \"key\": \"ndrcOffical\",\n            \"value\": \"发改委\",\n            \"result\": 2\n        },\n        {\n            \"key\": \"oneClub\",\n            \"value\": \"人社\",\n            \"result\": 10\n        },\n        {\n            \"key\": \"rent\",\n            \"value\": \"地税\",\n            \"result\": 3\n        },\n        {\n            \"key\": \"stateTaxes\",\n            \"value\": \"国税\",\n            \"result\": 4\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listPolicyDepartmentAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listPolicyFitObjectAndSum",
    "title": "【统计页-双创政策分析】全国/省/市政策适用对象分布",
    "version": "1.0.0",
    "name": "listPolicyFitObjectAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市政策适用对象分布,按企事业单位等5个对象，统计每个对象的政策总数(hc_zone_policy表,fit_object二级对象) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyFitObjectAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyFitObjectAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyFitObjectAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>政策适用部门字典key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>政策适用部门字典value  key,value对应关系{&quot;college&quot;:&quot;高校和科研院所&quot;,&quot;enterprise&quot;:&quot;企事业单位&quot;,&quot;estate&quot;:&quot;产业园区&quot;,&quot;incubator&quot;:&quot;孵化器和众创空间&quot;,&quot;maker&quot;:&quot;创客&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"value\": \"高校和科研院所\",\n            \"key\": \"college\",\n            \"result\": 0\n        },\n        {\n            \"value\": \"企事业单位\",\n            \"key\": \"enterprise\",\n            \"result\": 1\n        },\n        {\n            \"value\": \"产业园区\",\n            \"key\": \"estate\",\n            \"result\": 0\n        },\n        {\n            \"value\": \"孵化器和众创空间\",\n            \"key\": \"incubator\",\n            \"result\": 0\n        },\n        {\n            \"value\": \"创客\",\n            \"key\": \"maker\",\n            \"result\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listPolicyFitObjectAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listPolicyNum",
    "title": "【统计页-双创政策分析】全国/省/市 政策数量分布",
    "version": "1.0.0",
    "name": "listPolicyNum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 政策数量分布,按省份，市，区统计当前的政策数量总数(hc_zone_policy表里查询) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyNum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyNum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyNum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>地区名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"type\": \"北京市\",\n            \"result\": 43\n        },\n        {\n            \"type\": \"天津市\",\n            \"result\": 7\n        },\n        {\n            \"type\": \"山西省\",\n            \"result\": 1\n        }\n        {\n            \"type\": \"辽宁省\",\n            \"result\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listPolicyNum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listPolicyApplySumInHalfYear",
    "title": "【统计页-双创政策分析】近半年政策申报情况",
    "version": "1.0.0",
    "name": "listPolicySupportNumInHalfYear",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市,近半年政策申报情况,统计近半年每月提交申报的条数(人数)，不用区分处理状态(hc_zone_policy_support表，需要关联hc_sys_user表才能进行区域统计) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyApplySumInHalfYear?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyApplySumInHalfYear?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyApplySumInHalfYear?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策申报人数统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>近半年6个月份统计分类，需要显示年份和月份 例如：2017年3月</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "\t{\n\t    \"meta\": {\n\t        \"type\": 200,\n\t        \"code\": \"success\",\n\t        \"message\": \"请求成功\",\n\t        \"success\": true\n\t    },\n\t    \"data\": \n              [{\"type\":\"2017-04\",\"result\":0},{\"type\":\"2017-05\",\"result\":0},{\"type\":\"2017-06\",\"result\":1},{\"type\":\"2017-07\",\"result\":0},{\"type\":\"2017-08\",\"result\":3},{\"type\":\"2017-09\",\"result\":0}]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listPolicyApplySumInHalfYear"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listPolicyTypeAndSum",
    "title": "要把统计分类改成数字，【统计页-双创政策分析】全国/省/市政策类型分布",
    "version": "1.0.0",
    "name": "listPolicyTypeAndSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市政策类型分布,按产业政策等4个类型，统计当前每个类型的政策总数(hc_zone_policy表) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyTypeAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyTypeAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listPolicyTypeAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>政策类型字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>政策类型字典表value  key:value对应关系 {&quot;ESTATE&quot;:&quot;产业政策&quot;,&quot;MERCHANTS&quot;:&quot;招商政策&quot;,&quot;TALENT&quot;:&quot;人才政策&quot;,&quot;TECHNOLOGY&quot;:&quot;科技政策&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":79,\"value\":\"产业政策\",\"key\":\"ESTATE\"},{\"result\":40,\"value\":\"招商政策\",\"key\":\"MERCHANTS\"},{\"result\":53,\"value\":\"人才政策\",\"key\":\"TALENT\"},{\"result\":6,\"value\":\"科技政策\",\"key\":\"TECHNOLOGY\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listPolicyTypeAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listProjectDomainAndSum",
    "title": "【统计页-行业分析】全国/省/市 行业孵化情况",
    "version": "1.0.0",
    "name": "listProjectDomainAndSum_________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 行业孵化情况,按行业统计各行业的入孵项目总数和出孵项目总数;入孵企业：每个行业已入驻具体园区的项目数;出孵企业：每个行业在平台孵化的项目数;(hc_project表，根据settled_status来区别入孵还是出孵) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listProjectDomainAndSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listProjectDomainAndSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listProjectDomainAndSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "settledProjectSum",
            "description": "<p>入孵项目数，即入驻了具体园区的项目数</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "notSettledProjectSum",
            "description": "<p>出孵项目数，即在平台孵化的项目数</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>行业 字典表key</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>行业 字典表value, key,value对应关系  {&quot;3C&quot;:&quot;家电数码&quot;,&quot;3D&quot;:&quot;3D技术&quot;,&quot;ACG&quot;:&quot;动漫游戏&quot;,&quot;AGRICULTURAL&quot;:&quot;农业生鲜&quot;,&quot;AI&quot;:&quot;人工智能&quot;,&quot;AVM&quot;:&quot;影音传媒&quot;,&quot;BIOCHEMIE&quot;:&quot;生物化工&quot;, &quot;BIOTECHNOLOGY&quot;:&quot;生物科技&quot;, &quot;CAR_SERVICE&quot;:&quot;汽车服务&quot;,&quot;CMNET&quot;:&quot;移动互联网&quot;}更多对应关系，查看字典表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回: 实际结果包含所有的行业，但以下实例仅列举了部分行业及数值出来",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\":\n[{\"value\":\"家电数码\",\"notSettledProjectSum\":0,\"settledProjectSum\":0,\"key\":\"3C\"},{\"value\":\"3D技术\",\"notSettledProjectSum\":1,\"settledProjectSum\":0,\"key\":\"3D\"}}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listProjectDomainAndSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listSupportFundingInHalfYear",
    "title": "【统计页-双创活动分析】全国/省/市 近半年活动经费补贴情况",
    "version": "1.0.0",
    "name": "listSupportFundingInHalfYear__________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市，近半年活动经费补贴情况，统计每月已批准的经费金额(hc_sys_company_activity表,经费补贴是只有报备的活动才有的,由于没有审批时间字段,目前可以根据举办时间来筛选，报备活动是企业已经举办了的活动，可以申请经费资助) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listSupportFundingInHalfYear?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listSupportFundingInHalfYear?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listSupportFundingInHalfYear?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>经费金额统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>近半年6个月份统计分类，需要显示年份和月份 例如：2017年3月</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": \n           [{\"result\":0,\"type\":\"2017-04\"},{\"result\":0,\"type\":\"2017-05\"},{\"result\":222,\"type\":\"2017-06\"},{\"result\":0,\"type\":\"2017-07\"},{\"result\":0,\"type\":\"2017-08\"},{\"result\":0,\"type\":\"2017-09\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listSupportFundingInHalfYear"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTopFiveActivitySum",
    "title": "【统计页-双创活动分析】全国/省/市 双创活动数量TOP5",
    "version": "1.0.0",
    "name": "listTopFiveActivitySum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 政策数量TOP5,按省份，市，区按统计当前的平台活动总数+活动报备总数，显示活动数量最多前5位;(包括全部状态的平台活动和全部状态的活动报备)(hc_zone_activity表以及hc_sys_company_activity里查询) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveActivitySum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveActivitySum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveActivitySum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>地区名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": \n           [{\"result\":54,\"type\":\"广东省\"},{\"result\":16,\"type\":\"北京市\"},{\"result\":13,\"type\":\"天津市\"},{\"result\":13,\"type\":\"河北省\"},{\"result\":7,\"type\":\"山西省\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTopFiveActivitySum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTopFiveCompanySum",
    "title": "【统计页-创客企业分析】全国/省/市企业数量前五",
    "version": "1.0.0",
    "name": "listTopFiveCompanySum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市企业数量前五 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveCompanySum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveCompanySum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveCompanySum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>全国/省/市企业数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>省/市/区 名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"result\": 236,\n            \"type\": \"天河区\"\n        },\n        {\n            \"result\": 132,\n            \"type\": \"萝岗区\"\n        },\n        {\n            \"result\": 97,\n            \"type\": \"越秀区\"\n        },\n        {\n            \"result\": 78,\n            \"type\": \"白云区\"\n        },\n        {\n            \"result\": 64,\n            \"type\": \"番禺区\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": "{\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTopFiveCompanySum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTopFiveParkAreaSum",
    "title": "【统计页-双创园区分析】创业面积top5",
    "version": "1.0.0",
    "name": "listTopFiveParkAreaSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>省/市/区,创业面积top5;(直接在hc_park表中找到创业面积top5的省/市/区，返回地区名以及园区总面积，总面积取整即可) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkAreaSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkAreaSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkAreaSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>省/市/区创业总面积统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>省/市/区园区名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":35649517,\"type\":\"广东省\"},{\"result\":6666666,\"type\":\"河南省\"},{\"result\":1223,\"type\":\"山东省\"},{\"result\":1001,\"type\":\"湖南省\"},{\"result\":133,\"type\":\"湖北省\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": "{\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTopFiveParkAreaSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTopFiveParkSeatSum",
    "title": "【统计页-双创园区分析】创业工位top5",
    "version": "1.0.0",
    "name": "listTopFiveParkSeatSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>省/市/区,创业面积top5;(直接在hc_park表中找到创业面积top5的省/市/区，返回地区名以及园区总面积，总面积取整即可) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkSeatSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkSeatSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkSeatSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>省/市/区创业总面积统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>省/市/区园区名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":0,\"type\":\"广东省\"},{\"result\":0,\"type\":\"123\"},{\"result\":0,\"type\":\"山东省\"},{\"result\":0,\"type\":\"广西壮族自治区\"},{\"result\":0,\"type\":\"河南省\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTopFiveParkSeatSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTopFiveParkSum",
    "title": "【统计页-双创园区分析】园区数量top5",
    "version": "1.0.0",
    "name": "listTopFiveParkSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>省/市/区,园区数量top5;(直接在hc_park表中找到top5的省/市/区，返回地区名以及园区数量即可) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveParkSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>园区数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>省/市/区园区名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":193,\"type\":\"广东省\"},{\"result\":18,\"type\":\"湖北省\"},{\"result\":2,\"type\":\"湖南省\"},{\"result\":1,\"type\":\"123\"},{\"result\":1,\"type\":\"河南省\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTopFiveParkSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTopFivePolicyNum",
    "title": "【统计页-双创政策分析】全国/省/市 政策数量TOP5",
    "version": "1.0.0",
    "name": "listTopFivePolicyNum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 政策数量TOP5,按省份，市，区统计当前的政策数量总数前五的数量(hc_zone_policy表里查询) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTopFivePolicyNum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFivePolicyNum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFivePolicyNum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>政策数量统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>地区名称统计分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"type\": \"广东省\",\n            \"result\": 69\n        },\n        {\n            \"type\": \"北京市\",\n            \"result\": 43\n        },\n        {\n            \"type\": \"天津市\",\n            \"result\": 7\n        },\n        {\n            \"type\": \"辽宁省\",\n            \"result\": 2\n        },\n        {\n            \"type\": \"山西省\",\n            \"result\": 1\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTopFivePolicyNum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTopFiveProjectSum",
    "title": "【统计页-创客企业分析】全国/省/市 top5 项目数量",
    "version": "1.0.0",
    "name": "listTopFiveProjectSum",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市 top5项目分布,只统计已审核通过的项目，项目状态一共有五种0:待审核,1:预热项目,2: 融资中,3:融资结束,4:审核失败,5:已退孵，只选出 预热项目，融资中，融资结束状态的项目即可 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveProjectSum?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveProjectSum?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTopFiveProjectSum?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>省/市/区名称统计分类</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>项目数量统计结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": " \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [\n        {\n            \"type\": \"广州市\",\n            \"result\": 51\n        },\n        {\n            \"type\": \"清远市\",\n            \"result\": 15\n        },\n        {\n            \"type\": \"河源市\",\n            \"result\": 12\n        },\n        {\n            \"type\": \"茂名市\",\n            \"result\": 8\n        },\n        {\n            \"type\": \"韶关市\",\n            \"result\": 1\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": "{\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTopFiveProjectSum"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTotalActivity",
    "title": "【统计页-双创活动分析】全国/省/市 活动总数量,累计活动经费补贴",
    "version": "1.0.0",
    "name": "listTotalActivity____________________________________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市，活动总数量:平台活动总数+活动报备总数(包括全部状态的平台活动和全部状态的活动报备);累计活动经费补贴:已批准的经费总金额; 累计报名人数:已审核通过的报名总人数,本月发布活动:本月平台发布的活动数(包括全部状态的活动+官方报名活动),本月报名人数:本月已审核通过的报名人数(hc_sys_company_activity表查询活动经费补贴和活动报备总数,其他的在表hc_zone_activity) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTotalActivity?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalActivity?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalActivity?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>统计分类(用0,1,2,3,4代替统计名称){&quot;0&quot;:&quot;活动总数量&quot;,&quot;1&quot;:&quot;累计活动经费补贴&quot;,&quot;2&quot;:&quot;累计报名人数&quot;,&quot;3&quot;:&quot;本月发布活动&quot;,&quot;4&quot;:&quot;本月报名人数&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\": [{\"result\":49,\"type\":\"0\"},{\"result\":25901,\"type\":\"1\"},{\"result\":313,\"type\":\"2\"},{\"result\":5,\"type\":\"3\"},{\"result\":5,\"type\":\"4\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTotalActivity"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTotalCompanyAndProject",
    "title": "【统计页-创客企业分析】全国/省/市 创客企业总数量,创业项目总数量等",
    "version": "1.0.0",
    "name": "listTotalCompanyAndProject_________________________________________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市，创客企业总数量:统计创客企业总数;创业项目总数量:统计已审核通过的项目总数,项目状态一共有五种,只选出 1:预热项目，2:融资中，3:融资结束状态的项目即可;平均孵化时长(企业):当前时间－企业在平台注册时间, 原退孵率需求改为入孵率:当前入孵企业/总企业数(入孵企业即入驻具体园区的企业，企业入驻园区状态一共有五种， 0未入驻 1已入驻 2入驻中 3退孵中，只需要筛选状态1的企业即可);本月新增企业：本月创客企业新增数量,本月新增项目：本月已审核通过的项目数 (hc_project表查询创业项目总数量和本月新增项目数量,其他的在表hc_sys_user_company) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTotalCompanyAndProject?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalCompanyAndProject?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalCompanyAndProject?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>统计名称(用0,1,2,3,4，5代替统计名称){&quot;0&quot;:&quot;创客企业总数量&quot;,&quot;1&quot;:&quot;创业项目总数量&quot;,&quot;2&quot;:&quot;平均孵化时长&quot;,&quot;3&quot;:&quot;退孵率&quot;,&quot;4&quot;:&quot;本月新增企业&quot;,&quot;5&quot;:&quot;本月新增项目&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\":[{\"result\":\"713\",\"name\":\"0\"},{\"result\":\"55\",\"name\":\"1\"},{\"result\":\"1\",\"name\":\"2\"},{\"result\":\"2.38%\",\"name\":\"3\"},{\"result\":\"624\",\"name\":\"4\"},{\"result\":\"1\",\"name\":\"5\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTotalCompanyAndProject"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTotalParks",
    "title": "【统计页-双创园区分析】全国/省/市 创业园区总量，园区平均运营时长等",
    "version": "1.0.0",
    "name": "listTotalParks",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市创业园区总数量:统计园区总数(包括全部类型的园区)，园区平均运营时长:运营时长=当前时间-园区成立时间,求平均数;创业总面积:园区面积总数;创业总工位:园区工位总数;本月新增园区:本月园区新增数量;()</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTotalParks?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalParks?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalParks?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功的数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据集</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>统计名称/分类(用0,1,2,3,4替代){&quot;0&quot;:&quot;创业园区总数量&quot;,&quot;1&quot;:&quot;园区平均运营时长(月)&quot;,&quot;2&quot;:&quot;创业总面积&quot;,&quot;3&quot;:&quot;创业总工位&quot;,&quot;4&quot;:&quot;本月增长园区&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": " {\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\":[{\"0\":218,\"1\":4,\"2\":42318545,\"3\":0,\"4\":2}] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTotalParks"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  },
  {
    "type": "GET",
    "url": "/api/detailstatistic/listTotalPolicy",
    "title": "【统计页-双创活动分析】全国/省/市 政策总数量,政策解读占比等",
    "version": "1.0.0",
    "name": "listTotalPolicy__________________________________",
    "group": "DetailStatisticMapController",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "description": "<p>全国/省/市，政策总数量:政策总数,政策解读占比:已解读政策占全部政策的比例,需要注意的是，假如某地区政策数量为0，那么占比也会返回0，前端需要自行加上百分号，结果为0%;累计申报人数:提交申报的总人数(包含全部处理状态),本月发布政策:本月政策新增数量,本月申报人数:本月提交申报的人数 (hc_zone_policy表查询活动经费补贴和活动报备总数,其他的在表hc_zone_activity) 如果参数值有中文或者特殊字符，在发送请求前必须对参数值进行URLEncode，比如要想传输的请求参数为?code=123&amp;name=铅笔&amp;price=1，实际发送的请求参数为?code=123&amp;name=%e9%93%85%e7%ac%94&amp;price=1</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ContentType",
            "defaultValue": "application/x-www-form-urlencoded",
            "description": "<p>请求类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "defaultValue": "application/json;charset=UTF-8",
            "description": "<p>响应类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "app_key",
            "defaultValue": "532c28d5412dd75bf975fb951c740a30",
            "description": "<p>应用标记</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "version",
            "defaultValue": "1.0",
            "description": "<p>应用版本</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头部示例: ",
          "content": "{\n \"Content-Type\":\"application/x-www-form-urlencoded\",\n \"Accept\":\"application/json;charset=UTF-8\",\n \"app_key\":\"532c28d5412dd75bf975fb951c740a30\",\n  \"version\":\"1.0\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>认证令牌 ，获取token方法：curl -X POST 'http://localhost:8082/user/login' -d &quot;account=admin&amp;password=123456&amp;timestamp=1504627716096&amp;sign=f0c798751c90db80c03c3789891d2c61&quot; -H &quot;version&quot;:&quot;1.0&quot; -H &quot;app_key&quot;:&quot;532c28d5412dd75bf975fb951c740a30&quot; -H &quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot; -H &quot;Accept&quot;:&quot;application/json;charset=UTF-8&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>请求时间的毫秒数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>对请求参数的MD5签名(不包括sign)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flag",
            "description": "<p>参数类型 0表示全国，1表示省份，2表示城市，必填参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>中国或者省名称或者市名称，必填参数,当flag=0时,area=&quot;中国&quot;,表示查询全国页面数据，当flag=1时,area=&quot;XX省&quot;,表示查询全省数据，当flag=0时,area=&quot;XX市&quot;,表示查询全市数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数示例: ",
          "content": "?flag=0&area=中国&timestamp=xxx&token=xxxx&sign=xxxx             \n?flag=1&area=广东省&timestamp=xxx&token=xxxx&sign=xxxx   \n?flag=2&area=广州市&timestamp=xxx&token=xxxx&sign=xxxx",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例 ",
        "content": "curl -X GET 'http://localhost:8082/api/detailstatistic/listTotalPolicy?flag=0&area=中国&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalPolicy?flag=1&area=广东省&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"\ncurl -X GET 'http://localhost:8082/api/detailstatistic/listTotalPolicy?flag=2&area=广州市&timestamp=1504628239095&token=d9f9e165ab62f5c2d3b07c93b0cc630b&sign=62fd1fbee256e5740c5dc7fc80b63aa2' -H \"app_key\":\"532c28d5412dd75bf975fb951c740a30\" -H \"version\":\"1.0\" -H \"Content-Type\":\"application/x-www-form-urlencoded\" -H \"Accept\":\"application/json;charset=UTF-8\"",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回成功元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回成功数据集</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 200表示成功</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求成功true</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ],
        "data数组元素字段数据：": [
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>统计结果</p>"
          },
          {
            "group": "data数组元素字段数据：",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>统计名称分类(用0,1,2,3,4代替统计名称){&quot;0&quot;:&quot;政策总数量&quot;,&quot;1&quot;:&quot;政策解读占比&quot;,&quot;2&quot;:&quot;累计申报人数&quot;,&quot;3&quot;:&quot;本月发布政策&quot;,&quot;4&quot;:&quot;本月申报人数&quot;}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回:",
          "content": "{\n    \"meta\": {\n        \"type\": 200,\n        \"code\": \"success\",\n        \"message\": \"请求成功\",\n        \"success\": true\n    },\n    \"data\":[{\"result\":\"69\",\"name\":\"0\"},{\"result\":\"5.79%\",\"name\":\"1\"},{\"result\":\"4\",\"name\":\"2\"},{\"result\":\"0\",\"name\":\"3\"},{\"result\":\"0\",\"name\":\"4\"}] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "返回字段": [
          {
            "group": "返回字段",
            "type": "Object",
            "optional": false,
            "field": "meta",
            "description": "<p>返回失败元数据</p>"
          },
          {
            "group": "返回字段",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>返回失败数据集，值为空，即 data:[]</p>"
          }
        ],
        "meta字段数据": [
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>提示语</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>状态码 非200表示失败</p>"
          },
          {
            "group": "meta字段数据",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>请求失败false</p>"
          },
          {
            "group": "meta字段数据",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败返回:   ",
          "content": " {\n  \"meta\": {\n    \"type\": 50000, \n    \"code\": \"failure\", \n    \"message\": \"请求失败\", \n    \"success\": false\n  }, \n  \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8082/api/detailstatistic/listTotalPolicy"
      }
    ],
    "filename": "./map/statistic/DetailStatisticMapController.java",
    "groupTitle": "地图接口"
  }
] });
