import { ChartLine, House, Settings, SquareKanban, Users, Calendar, Filter, Share2, Sparkles } from "lucide-react";
import introduction_tags from '@/../public/introduction_tags.svg'
import anywhere_access from '@/../public/anywhere_access.svg'
import share_notes from '@/../public/share_notes.svg'

interface MenuType {
  icons: JSX.Element;
  name: string;
}
interface BannerTaskType {
  imageurl: any;
  title: string;
  description: string;
}
interface FilterOptionType {
  icons: JSX.Element;
  title: string;
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

export const BannerTask: BannerTaskType[] = [
  {
    imageurl: introduction_tags,
    title: "Introducing tags",
    description: "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
  },
  {
    imageurl: share_notes,
    title: "Share Notes Instantly",
    description: "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
  },
  {
    imageurl: anywhere_access,
    title: "Access Anywhere",
    description: "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
  },
]
export const filterOption: FilterOptionType[] = [
  {
    icons: <Calendar />,
    title: "Calendar view"
  },
  {
    icons: <Sparkles />,
    title: "Automation"
  },
  {
    icons: <Filter />,
    title: "Filter"
  },
  {
    icons: <Share2 />,
    title: "Share"
  },
]