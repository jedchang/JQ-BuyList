# JQ-BuyList-exercise

![image](https://img.shields.io/badge/jQuery-exercise-0769AD.svg) ![image](https://img.shields.io/badge/SCSS-exercise-ff69b4.svg)

![image](https://github.com/jedchang/JQ-BuyList/blob/master/preview.jpg)

### 動態產出畫面

- 組字串模板，並使用字串替換。將組字串中的 `{{item}}` 等替換。

```javascript
var itemHtml =
  '<li id={{id}} class="buy-item">{{num}}. {{item}}<div class="price">{{price}}</div><div id="{{delId}}" class="del-btn" data-del-id="{{dataDelId}}">REMOVE</div></li>';

  略...

var currentItemHtml = itemHtml
  .replace('{{num}}', i + 1)
  .replace('{{item}}', item.name)
  .replace('{{id}}', itemId)
  .replace('{{delId}}', delItemId)
  .replace('{{price}}', item.price)
  .replace('{{dataDelId}}', i);
```

- 使用 `append()` 插入選定元素的最末端。
- 使用 `attr()` 抓取元素的屬性。用來判斷觸發對象

```javascript
$('#' + delItemId).on('click', function() {
  removeItem($(this).attr('data-del-id'));
});
```

### 新增資料

- 取得 `val()` 選定元素的內容。
- 判斷使用者輸入的值，若為空值則返回 `return`

```javascript
if (
  isNaN(checkNum) ||
  $('#inputName').val() === '' ||
  $('#inputPrice').val() === '' ||
  $('#inputName')
    .val()
    .trim() === '' ||
  $('#inputPrice')
    .val()
    .trim() === ''
) {
  return;
}
```

- `push()` 將取得資料添加進去

```javascript
shopList.list.push({
  name: $('#inputName').val(),
  price: $('#inputPrice').val()
});
```

### 刪除資料

- `splice()` 移除 item

```javascript
function removeItem(id) {
  shopList.list.splice(id, 1);
  showList();
}
```
