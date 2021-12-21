const host = 'http://localhost:8080/api';
const url = path => `${host}/${path}`;

const header = {
    headers: {
        'Content-Type': 'application/json'  // JSONを送ることをサーバーに通知
    }
};

// fetch()をラップして GET が綺麗に書ける共通化関数を実装
// (必要なデータだけをPromiseで返す関数)
export const get = async path => {
    const resp = await fetch(url(path));
    const result = await resp.json();

    return result;
};

// 予定を追加する
export const post = async (path, body) => {
    const options = { ...header, method: 'POST', body: JSON.stringify(body) };

    const resp = await fetch(url(path), options);

    const result = await resp.json();

    return result;
};

export const deleteRequest = async path => {
    const options = { method: 'DELETE' };

    await fetch(url(path), options);

    // 204 No Contentが返ってくるので成功の場合は何もreturnしない
    return;
};