const host = 'http://localhost:8080/api';
const url = path => `${host}/${path}`;

// fetch()をラップして GET が綺麗に書ける共通化関数を実装
// (必要なデータだけをPromiseで返す関数)
export const get = async path => {
    const resp = await fetch(url(path));
    const result = await resp.json();

    return result;
};