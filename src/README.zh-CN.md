# 中机联-行业大数据-协会门户操作前台

###技术栈 css3+html+vue2.0+javaScript+vue-cli4.0+axios+vuex+echarts+elementUI2.12.0

##vuecli 脚手架可以 14 以上

##一、安装环境 nodejs （参考：https://www.cnblogs.com/liuqiyun/p/8133904.html）
1、本机系统：Windows 10 Pro（64 位）
2、Node.js：v6.9.2LTS（64 位）
二、安装 Node.js 步骤
1、下载对应你系统的 Node.js 版本:https://nodejs.org/en/download/
2、选安装目录进行安装
3、环境配置
4、测试
三、前期准备
1、Node.js 简介
简单的说 Node.js 就是运行在服务端的 JavaScript。Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。
2、下载 Node.js
打开官网下载链接:https://nodejs.org/en/download/ 我这里下载的是 node-v6.9.2-x64.msi,如下图：
四、开始安装
1、下载完成后，双击“node-v6.9.2-x64.msi”，开始安装 Node.js
点击【Next】按钮
勾选复选框，点击【Next】按钮
修改好目录后，点击【Next】按钮
安装完后点击【Finish】按钮完成安装
至此 Node.js 已经安装完成，可以先进行下简单的测试安装是否成功了，后面还要进行环境配置
在键盘按下【win+R】键，输入 cmd，然后回车，打开 cmd 窗口
此处说明下：新版的 Node.js 已自带 npm，安装 Node.js 时会一起安装，npm 的作用就是对 Node.js 依赖的包进行管理，也可以理解为用来安装/卸载 Node.js 需要装的东西
五、环境配置
说明：这里的环境配置主要配置的是 npm 安装的全局模块所在的路径，以及缓存 cache 的路径，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g 代表 global 全局安装的意思）的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占 C 盘空间。
例如：我希望将全模块所在路径和缓存路径放在我 node.js 安装的文件夹中，则在我安装的文件夹【D:\Develop\nodejs】下创建两个文件夹【node_global】及【node_cache】如下图：
创建完两个空文件夹之后，打开 cmd 命令窗口，输入
npm config set prefix "D:\Develop\nodejs\node_global"
npm config set cache "D:\Develop\nodejs\node_cache"
接下来设置环境变量，关闭 cmd 窗口，“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”
进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入【D:\Develop\nodejs\node_global\node_modules】，将【用户变量】下的【Path】修改为【D:\Develop\nodejs\node_global】
六、测试
配置完后，安装个 module 测试下，我们就安装最常用的 express 模块，打开 cmd 窗口，
输入如下命令进行模块的全局安装：

npm install express -g # -g 是全局安装的意思
##yarn 的安装:
下载 node.js，使用 npm 安装
npm install -g yarn
查看版本：yarn --version
安装 node.js,下载 yarn 的安装程序:
提供一个.msi 文件，在运行时将引导您在 Windows 上安装 Yarn
Yarn 淘宝源安装，分别复制粘贴以下代码行到黑窗口运行即可
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

## 二、下载依赖(建议使用 YARN)

```
yarn install  /  npm install
```

### 三、启动项目

```
yarn serve  / npm run serve
```

### 四、构建打包

```
yarn build  / npm run build
```

### 检查错误

```
yarn lint  /  npm run lint
```

#注意： 提交规范

### type

#git 和 svn 提交规则
type: commit 的类型
=》
-feat: 新功能、新特性
-fix: 修改 bug
-perf: 更改代码，以提高性能
-refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
-docs: 文档修改
-style: 代码格式修改, 注意不是 css 修改（例如分号修改）
-test: 测试用例新增、修改
-build: 影响项目构建或依赖项修改
-revert: 恢复上一次提交
-ci: 持续集成相关文件修改
-chore: 其他修改（不在上述类型中的修改）
-release: 发布新版本
-workflow: 工作流相关文件修改
====》
-scope: commit 影响的范围, 比如: route, component, utils, build...
-subject: commit 的概述
-body: commit 具体修改内容, 可以分为多行.
-footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.


##例如：
增加新功能
有新的功能增加时，Commit message类型标识符为feat(feature)。提交描述的句式为：增加xxxxx的功能（接口）。例如：
feat: 新增xxx组件
复制代码
修补bug
修补bug的提交，Commit message类型标识符为fix。提交描述的句式为：修正（解决）了xxxxx的问题。例如：
fix: 修复了画笔丢字相关问题
复制代码
文档改动
改动了相关文档，Commit message类型标识符为docs(documentation)。提交描述的句式为：完善（增加）了xxxxx到xxxxxx文档中。例如：
docs: 完善了H5端demo
复制代码
格式变动（不影响代码运行）
不影响代码含义的变化（空白，格式化，缺少分号，增加注释等），Commit message类型标识符为style。提交描述变动了什么样式。例如：
style: 更新用户列表组件样式
复制代码
代码重构（既不修复错误也不添加功能）
对代码进行了更改，但是没有修复bug，也没有增加新功能。Commit message类型标识符为refactor。提交描述更改了什么文件的什么功能，或者对文件进行了什么重构操作。例如：
refactor: 画笔重构
复制代码
增加测试
添加缺失测试或更正现有测试。Commit message标识符为test。提交描述的句式为：更正（增加）了xxxxx的测试用例。例如：
test: 增加了Select的测试用例
复制代码
性能提升
性能有所提升，改善。Commit message标识符为perf(Performance Improvements)。提交描述提升了哪方面的性能。例如：
perf: 提高首屏加载速度
复制代码
构建过程或辅助工具的变动
影响构建系统或外部依赖关系的更改（示例范围：webpack，npm）。Commit message标识符为chore。提交描述变动了什么构建过程或辅助工具。例如：
chore: 更新构建脚本

## 前端项目文件结构
```
├── build                      // 构建相关  
├── bin                        // 执行脚本
├── public                     // 公共文件
│   ├── favicon.ico            // favicon图标
│   └── index.html             // html模板
│   └── robots.txt             // 反爬虫
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── layout                 // 布局
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── permission.js          // 权限管理
│   └── settings.js            // 系统配置
├── .editorconfig              // 编码格式
├── .env.development           // 开发环境配置
├── .env.production            // 生产环境配置
├── .env.staging               // 测试环境配置
├── .eslintignore              // 忽略语法检查
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── babel.config.js            // babel.config.js
├── package.json               // package.json
└── vue.config.js              // vue.config.js
```

