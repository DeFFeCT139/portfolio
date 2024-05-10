import { lazy } from "react"

const Home = lazy(()=> import("../page/main/home/home"))
const Video = lazy(()=> import("../page/main/video/video"))
const Login = lazy(()=> import("../page/login/login"))
const TodoList = lazy(()=> import("../page/main/todolist/todolist"))
const Map = lazy(()=> import("../page/main/map/map"))
const Weather = lazy(()=> import("../page/main/weather/weather"))
const Films = lazy(()=> import("../page/main/films/films"))
const Film = lazy(()=> import("../page/main/films/film/film"))

export const privatRouts = [
    {path: '/', stateLP: true, comment: <Home/>, name:'Home'},
    {path: '/converters', stateLP: true, comment: <Home/>, name:'Converters'},
    {path: '/video', stateLP: true, comment: <Video/>, name:'Video'},
    {path: '/todolist', stateLP: true, comment: <TodoList/>, name:'Todolist'},
    {path: '/map', stateLP: true, comment: <Map/>, name:'Map'},
    {path: '/films', stateLP: true, comment: <Films/>, name:'Films'},
    {path: '/weather', stateLP: true, comment: <Weather/>, name:'Weather'},
    {path: '/films/:id', stateLP: false, comment: <Film/>, name:'Film'}
]

export const openRouts = [
    {path: '/', comment: <Login/>},
]