import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "Right-nowCurrent-status",
		title: "上学",
		description:
			"目前还在上学，九年义务教育即将结束",
		type: "education",
		startDate: "2014-03-02",
		location: "江西",
		position: "学生",
		skills: ["游戏", "定点睡觉", "GitHub", "视频创作者"],
		achievements: [
			"搭建个人博客网站",
			"拿下学校官网",
			"抖音 B 站账号成功做起",
		],
		icon: "fa7-solid:book-reader",
		color: "#09B300",
		featured: true,
	},
	{
		id: "Build-a-website",
		title: "建站",
		description:
			"用手机套 Mizuki 的壳搭建个人博客网站",
		type: "project",
		startDate: "2026-07-14",
		location: "江西",
		skills: ["Astro", "Mizuki", "Blog"],
		achievements: [
			"Mizuki 博客用手机运行成功",
		],
		links: [
			{
				name: "Hoshino.hb.blog",
				url: "https://hoshinohb.de5.net",
				type: "project",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "video-open-make",
		title: "成为视频创作者",
		description:
			"在抖音、B站发布视频，成为一名视频创作者",
		type: "work",
		startDate: "2023-07-18",
		location: "江西",
		organization: "BiliBili、抖音",
		position: "UP主、主播",
		achievements: [
			"100粉",
			"1000粉",
		],
		icon: "stash:play-btn",
		color: "#FF4DAF",
		featured: true,
	},
	{
		id: "bilibili",
		title: "入驻 B 站",
		description:
			"因一场梦，然后让我想来 B 站做 UP",
		type: "work",
		startDate: "2023-07-26",
		organization: "上海宽娱数码科技有限公司",
		skills: ["千粉 UP"],
		achievements: [
			"10粉",
			"100粉",
			"1000粉",
		],
		links: [
			{
				name: "BiliBili",
				url: "https://space.bilibili.com/3546659699034625",
				type: "UP",
			},
		],
		icon: "mingcute:bilibili-line",
		color: "#FF84C8",
	},
	{
		id: "douyin",
		title: "加入抖音创作者",
		description:
			"因为闲着没事，心血来潮就这样来抖音做了几年短视频创作者",
		type: "work",
		startDate: "2023-03-26",
		location: "北京字节跳动科技有限公司",
		skills: ["主播"],
		achievements: [
			"还在做",
		],
		icon: "iconoir:tiktok",
		color: "#000000",
	},
	{
		id: "csdn",
		title: "加入 CSDN",
		description:
			"因为做视频作者太无聊所以来到 CSDN 写文章",
		type: "work",
		startDate: "2026-08-16",
		location: "北京创新乐知网络科技有限公司",
		skills: ["主播"],
		achievements: [
			"专注手机端开发",
			"基本几千字的硬核博文",
		],
		icon: "simple-icons:csdn",
		color: "#F66F00",
	},
];

