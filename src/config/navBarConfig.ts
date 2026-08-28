import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";
export const navBarConfig: NavBarConfig = {
	links: [
		// 预设链接：首页
		LinkPreset.Home,
		// 预设链接：归档
		LinkPreset.Archive,

		// 自定义一级下拉菜单示例：外部链接集合
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/HoshinoHB",
					external: true, // 外部链接，新标签页打开
					icon: "fa7-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/3546659699034625",
					external: true,
					icon: "fa7-brands:bilibili",
				},
				{
                                        name: "抖音"
                                        url: "https://v.douyin.com/hzJCUqzF6pE/",
                                        external: true,
                                        icon: ""prime:tiktok,
				},
                                {       
                                        name: "CSDN",
                                        url: "https://blog.csdn.net/2606_96763730",
                                        external: true,
                                        icon: "simple-icons:csdn",
                                },
			],
		},

		// 自定义一级下拉菜单示例：个人内容页面
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
					external: false, // 内部链接，当前页导航
				},
			],
		},

		// 自定义一级下拉菜单示例：关于相关
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

		// 自定义一级下拉菜单示例：其他页面
		{
			name: "Others",
			url: "#", // "#" 作为占位 URL，点击不会跳转
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
				LinkPreset.AITools,
				{
					name: "Timeline",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};
