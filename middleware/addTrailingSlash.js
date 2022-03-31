// middleware/addTrailingSlash.js
export default function({ route, redirect }) {
    if (route.path.slice(-1) === '/') {
        route.path.slice(-1)
        return redirect(route) // ルートオブジェクトを渡すことでパラメータやハッシュを残せる
    }
}