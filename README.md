
开始
-----------
1. 安装 [node.js](https://nodejs.org/en/)

2. 全局安装 ionic CLI
```bash
npm install -g ionic
```

3. 安装相关依赖
```bash
npm install
```
在天朝，推荐采用 [cnpm](https://github.com/cnpm/cnpm) 进行安装
```bash
cnpm install
```
创建app项目
 ionic start  xxxappname tabs  (带有3个导航条的项目)

4. 启动 APP
```bash
ionic serve 
```
其它命令：
- 清空 www/build 文件夹
```bash
npm run clean
```
- 生成生产环境代码
```bash
ionic build
```

详情请查看 package.json 

更多命令请查看 [ionic-app-scripts](https://github.com/driftyco/ionic-app-scripts)


[生成文件](https://ionicframework.com/docs/v2/cli/generate/)
----------------------------------------------------
- 生成页面
```bash
ionic g page myPage
```
- 生成服务
```bash
ionic g provider MyData
```
- 生产公共组件
 ```bash
 ionic g component header
关于字体图标说明
--
字体图标使用阿里图标库。搜索对应的图标添加到项目，下载到本地，解压后放到 assets/fonts文件夹下。对应的添加icons.scss到theme下，引入图标文件，对应的添加类名，最后别忘了引入到variables.scss

文档参考
-----------
- [ionic2](http://ionicframework.com/)
- [angular](https://angular.io/) 或 [angular中文文档](https://angular.cn/docs/ts/latest/)
- [typescript](http://www.typescriptlang.org/) 或 [typescript中文文档](http://www.tslang.cn/)
- [ionic-app-scripts](https://github.com/driftyco/ionic-app-scripts) App Build Scripts for Ionic Projects
- [webpack](https://webpack.js.org/) 或 [webpack中文文档](https://doc.webpack-china.org/)
- [sass]()
- [moment](https://github.com/moment/moment/) Parse, validate, manipulate, and display dates in javascript.
- [iconfont](http://www.iconfont.cn) 字符图标
- [rx.js](https://github.com/ReactiveX/RxJS) A reactive programming library for JavaScript [文档](http://reactivex.io/rxjs)
- [ng2-slim-loading-bar](https://github.com/akserg/ng2-slim-loading-bar) Angular 2 component shows slim loading bar at the top of the page.




