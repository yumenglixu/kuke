### kuchuan - 酷传前端
```
./
├── README.md
├── app            // 公共框架
│   ├── dialog     // 浮层框架
│   │   ├── alert  // 弹框层框架
│   │   ├── modal  // 模拟框框架，负责订单回收和上传文件
│   │   ├── toast  // 接口 & 信息的toast弹框
│   ├── filter     // 过滤器-时间过滤器
│   ├── finance    // tab 财务框架
│   ├── kk         // tab 首页基础框架
│   ├── order      // tab 订单框架
│   ├── orderInfo  // tab 订单信息框架
│   ├── page       // 分页框架
│   ├── protoclo   // tab 协议框架
│   ├── service    // service端，包括所有ajax请求接口分发
│   ├── kuke.js    // 基础js，路由，
|
├── asstes
│   ├── css        // 基础样式库
│   ├── js         // 基础代码库
│   └── image      // 图片资源
|
├── client         // 各个页面的前端样式模块
│   ├── financePanle        // 财务主页面，dom元素和angular
│   ├── kk                  // 主页面
│   └── kkHeader            // 公共头部
│   ├── navbar              // 公共左侧
│   └── orderInfoPanle      // 订单基础信息，dom元素和angular
│   ├── orderList           // 公共订单列表信息，dom元素和angular
│   └── orderPanle          // 订单列表界面，dom元素和angular
│   ├── projectPanle        // 概述界面，dom元素和angular
│   └── protocol            // 协议界面，dom元素和angular
└── index.html // 首页
```

### hosts配置
    配置本地host：120.27.146.136     shangjia.kuchuan.com
    
### 服务启动

#### 1、 安装node：去node官网下载

#### 2、 进入kuke文件夹里。输入 node start.js

#### 3、 在谷歌浏览器输入 http://127.0.0.1:2000/   即可




