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

    // 完了ボタンタグを生成する
    const completeButton = document.createElement('button');
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 完了ボタンを押した時の処理
        
    })

    // 削除ボタンタグを生成する
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 削除ボタンを押した時の処理
        // 削除ボタンのリスト要素を未完リストから削除
        const deleteTaret = deleteButton.parentNode;
        document.getElementById("imcomplete-list").removeChild(deleteTaret);
    })
    
    // div タグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("imcomplete-list").appendChild(div);
}

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
