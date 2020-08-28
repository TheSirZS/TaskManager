import { TrackerScreen } from "../pages/tracker.screen";
import { ChartScreen } from "../pages/chart.screen";

export const routes = [
  {
    pathname: '/',
    component: TrackerScreen,
    name: 'Tracker'
  },
  {
    pathname: '/chart',
    component: ChartScreen,
    name: 'Chart'
  }
]