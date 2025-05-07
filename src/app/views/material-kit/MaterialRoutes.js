import { lazy } from "react";
import Loadable from "app/components/Loadable";
import ExperienceSection from "../charts/echarts/ExperienceSection";

const AppForm = Loadable(lazy(() =>
    import ("./forms/AppForm")));
// const Profil = Loadable(lazy(() =>
//     import ("./shared/Profil")));
const AppMenu = Loadable(lazy(() =>
    import ("./menu/AppMenu")));

const AppTable = Loadable(lazy(() =>
    import ("./tables/AppTable")));

const materialRoutes = [
    { path: "/dashboard/table", element: < AppTable / > },
    { path: "/material/form", element: < AppForm / > },
    { path: "/material/experiences", element: < ExperienceSection / > },
    { path: "/material/menu", element: < AppMenu / > }
];

export default materialRoutes;