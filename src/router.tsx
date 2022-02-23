import { Routes, Route } from "react-router-dom"

import { Home } from './pages/Home';
import { Cars } from './pages/Cars';
import { Admin } from './pages/Admin';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>

    )
}