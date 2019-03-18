# JS-Create-Slide

![image](https://img.shields.io/badge/JavaScript-exercise-brightgreen.svg)
![image](https://img.shields.io/badge/SASS-exercise-ff69b4.svg)

![images](https://github.com/jedchang/toDoList/blob/master/preview.jpg)

### 定義資料

- 用陣列先定義對應圖片資料。
- `length 陣列長度` : imgArray[0] 索引從 0 開始，故為 'page-1.jpg'，
- `index 陣列索引` : imgArray.length 長度從 1 開始，故為 5。

```javascript
// 存放資料
var imgArray = ['page-1.jpg', 'page-2.jpg', 'page-3.jpg', 'page-4.jpg', 'page-5.jpg'];
```

### 偵聽事件 addEventListener

- 事件偵聽，用來綁定 click 事件。
- `false 事件氣泡`，指定元素往外找，預設可不寫。

### 增加小圓點

- 增加按鈕點擊事件，每個按鈕都要做，用 `for()` 每個跑一次。

```javascript
// 獲取 pageView 動態產出 a 當前狀態
var dotsCurrent = dotsView.querySelectorAll('a');

// 增加按鈕點擊事件，每個按鈕都要做，用for()每個跑一次
for (var i = 0; i < dotsCurrent.length; i++) {
  // 自定義屬性 序號
  dotsCurrent[i].index = i;
  // console.log(i);
  dotsCurrent[i].addEventListener(
    'click',
    function() {
      // 因為 dotsCurrent.length 長度從 1 開始，但索引從 0 開始，故需+1
      index = this.index + 1;
      changeView();
    },
    false
  );
```

- `this.index`，指定 this 對象!!
- `style.display` 改變 CSS 屬性

```javascript
dotsCurrent[i].addEventListener(
  'mouseover',
  function() {
    thumbImg.style.display = 'block';
    arrowView.style.display = 'block';
    // this.index 重要!! 在for()裡，指定 this 對象
    thumbImg.src = 'images/' + imgArray[this.index];
  },
  false
);
```

### 變更圖片

- 使用 `className` 改變 class 屬性樣式為 .active
