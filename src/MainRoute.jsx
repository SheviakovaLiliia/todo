import { Routes, Route } from 'react-router-dom'
// import { TodoPage } from './pages/TodoPage'
import { TestPage } from './pages/TestPage'

export const MainRoute = () => {

    return <Routes>
        {/* <Route path="/" element={<TodoPage/>}/> */}
        <Route path="/test" element={<TestPage/>}/>
    </Routes>
}
