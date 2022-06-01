import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom/cjs/react-router-dom.min";
// import Navbar from "../layouts/header";
import AuthRouter from "./routes";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                {AuthRouter.map((item, index) => {
                    return (
                        <Route
                            key={index}
                            exact
                            path={item.path}
                            component={item.component}
                        />
                    );
                })}
            </Switch>
        </Router>
    );
}