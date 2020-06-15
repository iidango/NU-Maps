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
    setSample2();
  } else {
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
function setSample2() {
  //選択肢を空にする
  food.textContent = null;
  // 選択肢
  var sampleRooms = [
    { cd: "", label: "選択して下さい" },
    { cd: "0", label: "aaaa" },
    { cd: "1", label: "iiii" },
    { cd: "2", label: "uuuu" },
  ];

  sampleRooms.forEach(function (value) {
    var op = document.createElement("option");
    op.value = value.cd;
    op.text = value.label;
    room.appendChild(op);
  });
}
