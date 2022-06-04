// import "./styles.css";

const onClickAdd = () => {
    // テキストボックスrの値を取得
    const inputText = document.getElementById('add-text').value;
    // 値を初期化
    document.getElementById('add-text').value = "";

    createIncompleteList(inputText);
}

// incomplete-listの子要素を削除する関数
const deleteFromIncompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target);
}

// complete-listの子要素を削除する関数
const deleteFromCompleteList = (target) => {
    document.getElementById('complete-list').removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // DOMを作成 div を生成
    const div = document.createElement("div");
    div.className = "list-row";

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // 完了ボタンタグを生成する
    const completeButton = document.createElement('button');
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 完了ボタンを押した時の処理

        // 完了ボタンのリスト要素を未完リストから削除
        deleteFromIncompleteList(completeButton.parentNode);

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;
        // TODOテキストを取得
        const text = addTarget.firstElementChild.innerText; // firstElementChild...completeButton > liの部分

        // div以下を初期化
        addTarget.textContent = null

        // liタグ生成
        const li = document.createElement('li');
        li.innerText = text;

        // 戻すボタンタグを生成する
        const backButton = document.createElement('button');
        backButton.innerText = "戻す";
        backButton.addEventListener('click', () => {
            // ターゲットを指定して削除する backButtonの親要素を指定
            const backTarget = backButton.parentNode;
            deleteFromCompleteList(backTarget);
            // テキストを取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        })

        // divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        // 完了リストに追加
        document.getElementById('complete-list').appendChild(addTarget)
    })

    // 削除ボタンタグを生成する
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 削除ボタンを押した時の処理
        // 削除ボタンのリスト要素を未完リストから削除
        deleteFromIncompleteList(deleteButton.parentNode);
    })
    
    // div タグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);

}

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
