import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const Root = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App tab="calendar"></App>}></Route>
        </Routes>
    </BrowserRouter>

)
export default Root;