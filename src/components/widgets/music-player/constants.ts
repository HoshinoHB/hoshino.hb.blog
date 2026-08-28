import readyGoCover from "../../../assets/music/cover/ready_go.webp?url";
import unwelcomeCover from "../../../assets/music/cover/unwelcome_school.webp?url";
import constantCover from "../../../assets/music/cover/constant_moderato.webp?url";
import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";
export const DEFAULT_VOLUME = 0.7;

export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "准备出发",
		artist: "ブルーアーカイブ",
		cover: readyGoCover,
		url: "/assets/music/url/ready_go.mp3",
		duration: 241,
	},
	{
		id: 2,
		title: "Unwelcome School",
		artist: "ブルーアーカイブ",
		cover: unwelcomeCover,
		url: "/assets/music/url/unwelcome_school.mp3",
		duration: 253,
	},
	{
		id: 3,
		title: "Constant Moderato",
		artist: "ブルーアーカイブ",
		cover: constantCover,
		url: "/assets/music/url/constant_moderato.mp3",
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
	"https://www.bilibili.uno/api?server=:server&type=:type";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;

