import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../../screens/Home"
import Feedback from "../../Feedback"
import FeedbackForm from "../../screens/FeedbackForm"
import { LogoutRouting, PrivateRouting, PublicRouting } from "../routing/customRoutes"
import Login from "../../screens/Login"
// import Login from "../../screens/Login"
import Error from "../../screens/Error"
import Navbar from "../../../components/Navbar"
import Logout from "../../screens/Logout"

const AllRouting = () => {
    return <>
    <Router>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<Home />} />
            <Route path="/add-feedback" element={<PrivateRouting />}>
                <Route path="/add-feedback" element={<FeedbackForm />} />
            </Route>
            <Route path="/login" element={<PublicRouting />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/logout" element={<LogoutRouting />}>
                <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>

    </>
}

export default AllRouting