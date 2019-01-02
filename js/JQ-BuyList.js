$(function() {
  var shopList = {};
  shopList.name = 'Shopping list';
  shopList.time = '2016/09/10';
  shopList.list = [
    { name: 'iPhone 6', price: 8000 },
    { name: 'iPhone 7', price: 12000 },
    { name: 'iPhone 8', price: 22000 },
    { name: 'iPhone X', price: 32000 }
  ];
  var itemHtml =
    '<li id={{id}} class="buy-item">{{num}}. {{item}}<div class="price">{{price}}</div><div id="{{delId}}" class="del-btn" data-del-id="{{dataDelId}}">REMOVE</div></li>';

  var totalHtml = '<li class="buy-item total">總價<div class="price">{{price}}</div></li>';

  function showList() {
    $('#items-list').html('');
    var totalPrice = 0;
    for (var i = 0; i < shopList.list.length; i++) {
      var item = shopList.list[i];
      var itemId = 'buyItem_' + i;
      var delItemId = 'delBuyItem_' + i;

      totalPrice += parseInt(item.price);

      var currentItemHtml = itemHtml
        .replace('{{num}}', i + 1)
        .replace('{{item}}', item.name)
        .replace('{{id}}', itemId)
        .replace('{{delId}}', delItemId)
        .replace('{{price}}', item.price)
        .replace('{{dataDelId}}', i);

      $('#items-list').append(currentItemHtml);

      $('#' + delItemId).on('click', function() {
        removeItem($(this).attr('data-del-id'));
      });
    }

    var currentTotalHtml = totalHtml.replace('{{price}}', totalPrice);
    $('#items-list').append(currentTotalHtml);
  }
  showList();

  $('.add-btn').on('click', function() {
    var checkNum = $('#inputPrice').val();

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

    shopList.list.push({
      name: $('#inputName').val(),
      price: $('#inputPrice').val()
    });

    $('#inputName').val('');
    $('#inputPrice').val('');
    showList();
  });

  function removeItem(id) {
    shopList.list.splice(id, 1);
    showList();
  }
});
