import { lazy } from "react"
import Weather from "../page/main/weather/weather"

const Home = lazy(()=> import("../page/main/home/home"))
const Video = lazy(()=> import("../page/main/video/video"))
const Login = lazy(()=> import("../page/login/login"))
const TodoList = lazy(()=> import("../page/main/todolist/todolist"))
const Map = lazy(()=> import("../page/main/map/map"))

export const privatRouts = [
    {path: '/', comment: <Home/>, name:'Home'},
    {path: '/converters', comment: <Home/>, name:'Converters'},
    {path: '/video', comment: <Video/>, name:'Video'},
    {path: '/todolist', comment: <TodoList/>, name:'Todolist'},
    {path: '/map', comment: <Map/>, name:'Map'},
    {path: '/tovarfilter', comment: <Home/>, name:'Films'},
    {path: '/weather', comment: <Weather/>, name:'Weather'},
]

export const openRouts = [
    {path: '/', comment: <Login/>},
]