# easy-intro
## 介绍 [English](./doc/English.md)

`easy-intro` 用于在web页面中，添加一组 **引导**。
通常用来介绍页面的 **功能** 向用户介绍页面的大致布局和功能概括；
或者 **引导操作** 引导用户完成首次操作体验，类似游戏中的新手指引。
通过这种方式，降低用户的学习成本和操作成本。

[Example](./example/index.html)

![Example](./doc/example.gif)


## 安装
### NPM
`npm install easy-intro -S`

### Yarn
`yarn add easy-intro -S`


## API


|    API          | param      | return   | description                                                                                      |
| ----------      | ---------- | ------   | ------------------------------------------------------------------------------------------------ |
| addIntro        | introObj   | function | 为单个元素添加引导（通常引导用户点击按钮，产生真实的效果） , **返回一个函数用于移除该引导**               |
| addIntros       | [introObj] | void     | 添加一组引导，通常用于功能介绍                                                                              |
| removeAllIntro  |            | void     | 移除所有的引导元素                                                                         |
 
 The `introObj` is an Object.
 
| property  | type | default | description | 
| --------  | ---- | ------- | ----------- |
| el        | DOM element | null | 已经出现在dom上的目标元素  |
| desc      | String | "" | 引导描述 |
| realClick | Boolean | true | 该元素是否真的被点击（即按钮的click事件是否触发） |
| hint | Boolean | true | 是否显示引导点击的动画效果 |


## 用法

通过插件的形式，在已有的dom元素上添加引导蒙层。

```javascript
// example.js
import { addIntro, addIntros, removeAllIntro } from "easy-intro";

// Start the introduction for single defined element
const removeIntroItem = addIntro({
  el: document.getElementById('button'),  // 已经出现在dom上的目标元素
  desc: 'Click Me!', // 引导描述
  realClick: true,  // 该元素是否真的被点击（即按钮的click事件是否触发）
  hint: true, // 是否显示引导点击的动画效果
})

// remove this introduction
removeIntroItem();

// Start the introduction for defined elements.
addIntros([
  {
    el: document.getElementById('step-1'),
    desc: 'First Step! click me!',
    realClick: false,
    hint: false,
  },
  {
   el: document.getElementById('step-2'),
   desc: 'Second Step! click me!',
   realClick: false,
   hint: false,
   },
   {
   el: document.getElementById('step-3'),
   desc: 'Third Step! click me!',
   realClick: false,
   hint: false,
   }
]);

// remove All introductions
removeAllIntro();
```
