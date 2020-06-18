window.onload = function () {
  // 部屋の選択肢
  room = document.getElementById("room");
  // ジャンルの選択肢が変更された際の動作
  building = document.getElementById("building");
  building.onchange = changeCategory;
};

// ジャンルの選択肢が変更された際の動作

function changeCategory() {
  // 変更後のカテゴリを取得
  var changedCategory = building.value;
  if (changedCategory == "0") {
    // カテゴリに和食が選択された場合
    setZengakukyoikuto();
  } else if (changedCategory == "1") {
    // カテゴリにアジア料理が選択された場合
    Zengakukyoikuto();
  } else if (changedCategory == "10") {
    // カテゴリにアジア料理が選択された場合
    gakukyoikuto();
  }else if (changedCategory == "11") {
    // カテゴリにアジア料理が選択された場合
    kyoikuto();
  }else if (changedCategory == "1") {
    // カテゴリにアジア料理が選択された場合
    setSample2();
  }else {
    // カテゴリにヨーロッパ料理が選択された場合
    setEuropeFoods();
  }
}

// 全学教育等の選択肢を設定する

function setZengakukyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "0", label: "C10" },
    { cd: "1", label: "C11" },
    { cd: "2", label: "C12" },
    { cd: "2", label: "C13" },
    { cd: "2", label: "sample" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}

//選択肢を設定する
function Zengakukyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "0", label: "A10" },
    { cd: "1", label: "A11" },
    { cd: "2", label: "A12" },
    { cd: "2", label: "A13" },
    { cd: "2", label: "sample" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}

function gakukyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "0", label: "B10" },
    { cd: "1", label: "B11" },
    { cd: "2", label: "B12" },
    { cd: "2", label: "B13" },
    { cd: "2", label: "sample" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}

function kyoikuto() {
  //選択肢を空にする
  room.textContent = null;
  //選択肢
  var rooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "2", label: "sample" },
  ];

  rooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}


  function initMap() {
    var directionsRenderer = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {
        lat: 35.154639,
        lng: 136.966778
      }
    });
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('right-panel'));

    var control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function () {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'WALKING'
    }, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
