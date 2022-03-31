export default function ({ store, redirect }) {
    const lastCharacter = route.path.slice(-1)
    if (route.path !== '/' && lastCharacter === '/') {
        redirect(301, route.path.slice(0, -1))
    }    
}