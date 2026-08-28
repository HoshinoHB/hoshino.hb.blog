import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "提示", // 公告标题，填空使用i18n字符串Key.announcement
	content: "欢迎来到HoshinoHB的个人博客页，在这里你可以看到一位学生的成长历程", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "我的聚合链", // 链接文本
		url: "https://vlink.cc/HoshinoHB", // 链接 URL
		external: true, // 内部链接
	},
};
