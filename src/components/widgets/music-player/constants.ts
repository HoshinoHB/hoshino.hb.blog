import cmCover from "../../../assets/music/cover/constant_moderato.webp?url";
import usCover from "../../../assets/music/cover/unwelcome_school.webp?url";
import ready_goCover from "../../../assets/music/cover/ready_go.webp?url";
import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "Constant Moderato",
		artist: "蔚蓝档案",
		cover: cmCover,
		url: "assets/music/url/constant_moderato.mp3/",
		duration: 241,
	},
	{
		id: 2,
		title: "unwelcome_school",
		artist: "蔚蓝档案",
		cover: usCover,
		url: "assets/music/url/unwelcome_school.mp3/",
		duration: 253,
	},
	{
		id: 3,
		title: "ready_go",
		artist: "蔚蓝档案",
		cover: ready_goCover,
		url: "assets/music/url/ready_go.mp3/",
		duration: 245,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: DEFAULT_COVER_URL,
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "3546659699034625";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
