## Cruise

### 使用

首先，启动 mock-server（这一步可以跳过，没有 mock-server，页面只是没有数据）：

```bash
# 在项目根目录下执行
npx json-server --watch ./mock-server/db.json --port 3001
```

用浏览器打开 `./dist/index.html` 即可。

### dev 预览

```bash
# 安装依赖
yarn
# 启动服务
yarn serve
# 启动 mock-sever
yarn mock
```

### 单元测试

```bash
yarn test:unit
```

### build

```bash
yarn build
```