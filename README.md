#此项目使用说明

1. 确保安装了nodejs，以及版本"node": ">= 4.0.0", "npm": ">= 3.0.0"
2. 在终端里运行
```
	npm install --registry=https://registry.npm.taobao.org
```
3. 运行下面命令启动项目
```
	npm run start
```
* 注意终端里的端口提示，新版模板采用了自动寻找端口功能，端口由8080叠加

4. 运行下面命令打包项目
```
	npm run build
```

#2017.12更新, 与旧版对比

1. 基于最新的vue init webpack xxx 的空白模板
2. 摒弃vue-resource， 采用axios替代
3. 放弃dev-server和express搭建模拟数据服务的方式，采用mock.js替代
4. 去除store层的使用
5. 使用vue-carousel，取代原来的幻灯片组件
6. 一些样式上的美化
7. router-link 改用name