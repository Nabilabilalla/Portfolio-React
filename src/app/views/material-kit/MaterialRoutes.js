import { lazy } from "react";
import Loadable from "app/components/Loadable";
import ExperienceSection from "../charts/echarts/ExperienceSection";
import Realiastion from "../dashboard/Realisation";
import DesignGallery from "../dashboard/DesignData";

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
    { path: "/material/realisation", element: < Realiastion / > },
    { path: "/material/design", element: < DesignGallery / > },
    { path: "/material/menu", element: < AppMenu / > }
];

export default materialRoutes;