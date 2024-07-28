import { Bell, ChartLine, House, Settings, SquareKanban, Users } from 'lucide-react'
interface MenuType {
    icons: JSX.Element;
    name: string;
}
export const Menu: MenuType[] = [
    {
        icons: <House />,
        name: "Home"
    },
    {
        icons: <SquareKanban />,
        name: "Boards"
    },
    {
        icons: <Settings />,
        name: "Settings"
    },
    {
        icons: <Users />,
        name: "Teams"
    },
    {
        icons: <ChartLine />,
        name: "Analytics"
    },

]