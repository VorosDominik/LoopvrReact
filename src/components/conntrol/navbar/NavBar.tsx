import { Route, Routes, Navigate } from "react-router-dom";
import NavLink from "./navlink/NavLink";
import MainPage from "../../../pages/MainPage/MainPage";
import Battleground from "../../../pages/Battleground/Battleground";
import type { ComponentType } from "react";

type RouteDef = { path: string; label: string; component: ComponentType };

const routes: RouteDef[] = [
  { path: "/MainPage", label: "Főoldal", component: MainPage },
  { path: "/Battleground", label: "Battleground", component: Battleground },
];

export default function NavBar() {
  return (
    <nav className="flex flex-1 flex-col rounded-[1.25rem] border-4 border-[#2a1209] bg-[#7c3518] p-3 shadow-[8px_8px_0_#2a1209,0_20px_55px_rgba(0,0,0,0.34)] sm:p-4">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {routes.map((r) => (
          <NavLink key={r.path} link={{ to: r.path, label: r.label }} />
        ))}
      </div>

      <div className="flex min-h-[calc(100vh-15rem)] flex-1 rounded-[1rem] border-4 border-[#2a1209] bg-[#ffe7a3] bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_38%),repeating-linear-gradient(0deg,rgba(78,36,13,0.06)_0_1px,transparent_1px_12px)] p-5 text-[#3b1a0b] shadow-[inset_0_0_0_3px_rgba(255,255,255,0.35),6px_6px_0_rgba(42,18,9,0.85)] sm:p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/MainPage" />} />
          {routes.map((r) => {
            const C = r.component;
            return <Route key={r.path} path={r.path} element={<C />} />;
          })}
        </Routes>
      </div>
    </nav>
  );
}
