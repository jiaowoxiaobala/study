/* 
  index.js: webpack入口起点文件
  1.运行指令
  开发环境: webpack ./src/index.js -o ./build/built.js --mode==development
    webpack会以./src/index.js为入口文件开始打包,打包后输出到./built/built.js
    整体打包环境是开发环境
  生产环境: webpack ./src/index.js -o ./build/built.js --mode==production
    webpack会以./src/index.js为入口文件开始打包,打包后输出到./build/built.js
    整体打包环境是生产环境
  2.结论
    -webpack能处理js/json,不能处理css/img等其他资源
    -生产环境和开发环境将es6模块化编译成浏览器能识别的模块化
    -生产环境比开发环境多一个压缩js代码
*/

import data from './data.json'

console.log(data);

function add(x, y) {
  return x + y;
}
console.log(add(1, 2));