// import "./styles.css";

const onClickAdd = () => {
    // テキストボックスrの値を取得
    const inputText = document.getElementById('add-text').value;
    // 値を初期化
    document.getElementById('add-text').value = "";

    // DOMを作成 div を生成
    const div = document.createElement("div");
    div.className = "list-row";

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = inputText;
    
    // div タグの子要素に各要素を設定
    div.appendChild(li);

    // 未完了リストに追加
    document.getElementById("imcomplete-list").appendChild(div);
}

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
