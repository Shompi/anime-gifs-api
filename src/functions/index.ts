import { baseUrl, Endpoints } from "../resources/api"
import { request } from "undici";

export type GifType = keyof typeof Endpoints;

export interface AnimeApiReponse {
	url: string | null
};

export async function getAnimeGif(gifType: GifType): Promise<AnimeApiReponse | null> {

	if (!(gifType in Endpoints))
		throw new Error("Unknown Endpoint.")

	const endpoint = Endpoints[gifType]

	const response = await request(baseUrl + endpoint)

	if (response.statusCode !== 200) {
		return {
			url: null
		}
	}

	const data = await response.body.json() as AnimeApiReponse

	return {
		url: data.url
	}
}