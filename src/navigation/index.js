import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "../App";
import ProjectScreen from "../screens/project";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="project" element={<ProjectScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;