// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	"OPPO A5"8: [
		{
			name: "OPPO A58",
			image: "/images/device/oppoa58.webp",
			specs: "black / 8+256",
			description: "双模5G芯片，90Hz高刷新，后置5千万像素主摄，环绕立体声双扬，200%超音量，5000mAh电池，VOOC 33w超级闪充，双卡双待，ColorOS13系统",
			link: "https://www.oppo.com/cn/smartphones/series-a/a58/specs/",
		},
	],
	"Watch": [
		{
			name: "SPRD",
			image: "/images/device/mt3000.webp",
			specs: "Black / 2+16",
			description: "SPRD手表宽为42.5mm厚为13.4mm，从表耳到表耳尺寸均为46mm；防水100m，适用于从自由潜水到水肺潜水的所有事物；被动式表冠，Hardlex水晶和Seiko 4R36机芯",
			link: "https://www.unisoc.com/cn/product/SmartWearables/W377E",
		},
	],
};
