import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/HoshinoHB",
					external: true,
					icon: "fa7-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/3546659699034625",
					external: true,
					icon: "fa7-brands:bilibili",
				},
				{
					name: "抖音",
					url: "https://v.douyin.com/hzJCUqzF6pE/",
					external: true,
					icon: "prime:tiktok",
				},
				{
					name: "CSDN",
					url: "https://blog.csdn.net/2606_96763730",
					external: true,
					icon: "simple-icons:csdn",
				},
			],
		},
		{
			name: "My",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				{
					name: "Anime",
					url: "/anime/",
					icon: "material-symbols:movie",
				},
				{
					name: "Diary",
					url: "/diary/",
					icon: "material-symbols:book",
				},
				{
					name: "Gallery",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
				{
					name: "Devices",
					url: "/devices/",
					icon: "material-symbols:devices",
					external: false,
				},
			],
		},
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "About",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "Friends",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},
		{
			name: "Others",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Projects",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "Skills",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "Timeline",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};

