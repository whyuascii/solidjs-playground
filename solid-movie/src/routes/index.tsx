import { Routes, Route, A } from "@solidjs/router";
import { Home } from "../pages/public";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>

    )
}
