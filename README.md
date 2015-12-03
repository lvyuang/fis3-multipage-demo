# fis3-multipage-demo

一个简单的基于fis3的多页面打包样例。

支持压缩、合并js、css文件，自动进行css sprites，支持CommonJS的模块化方案。

1. 安装必要的依赖：
    > npm i

2. 部署代码到fis3内置服务器：
    > fis3 release

3. 在浏览器里打开demo:
    > fis3 server start

4. 默认访问的地址为：
    > http://127.0.0.1:8080

   另一个页面可以这样访问：
    > http://127.0.0.1:8080/index2.html

5. 为生产环境打包，非生产环境不压缩合并代码：
    > fis3 release prod

6. test/目录中的是假数据，原始地址为：
    > http://127.0.0.1:8080/test/sample.json

   由于改写了规则（见test/server.conf），也可以这样访问：
    > http://127.0.0.1:8080/api/user
