import { Suspense, lazy } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { ProtectedPage } from "./context/ProtectedPage";

import Index from "./pages";
import { SheetDemo } from "./pages/user-manager/sheet";
import { UserManager } from "./pages/user-manager/user-manager";
import { GroupManager } from "./pages/group-manager/group-manager";


export function AppRoutes() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
            <Routes>
                <Route path="/" element={<Index />} >
                    <Route path="user/" index element={<UserManager />} />
                    <Route path="group/" index element={<GroupManager />} />
                </Route>
                <Route path="*" element={<>PAgina não encontrada</>} />
            </Routes>
        </Router >)
}