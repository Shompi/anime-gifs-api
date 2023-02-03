import { AnimeApiReponse, NSFWGifType } from "../index";
import { baseUrl, NSFWEndpoints } from "../resources/api";
import { request } from "undici";

export async function nsfwAnimeGif(gif: NSFWGifType): Promise<AnimeApiReponse> {

	if (!(gif in NSFWEndpoints))
		throw new Error("Unknown endpoint.")

	const response = await request(baseUrl + NSFWEndpoints[gif])

	if (response.statusCode !== 200)
		return {
			url: null
		}

	const { url } = await response.body.json() as AnimeApiReponse

	return {
		url: url
	}
}