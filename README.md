# Anime-Images-Api Wrapper

This is a wrapper for the anime images api hosted on
<https://anime-api.hisoka17.repl.co/>

## Making a request is as simple as

```javascript
const { getAnimeGif, nsfwAnimeGif } = require('anime-gifs-api')

const { url: sfwGifUrl } = await getAnimeGif("Hug") // You will get autocompletion here
const { url: nsfwGifUrl } = await getAnimeGif("Boobs") // You will get autocompletion here

if (!sfwGifUrl || !nsfwGifUrl) {
  // Possibly an error within the api
  // Should handle the error here.
  // This check is for demonstration purposes only,
  // you should not handle a missing url like this.
}

console.log(url) // Should log a valid gif url
```

## Functions

### `getAnimeGif(gifType: SFWGifType)`

**returns** `Promise<AnimeApiResponse>`

### `nsfwAnimeGif(gifType: NSFWGifType)`

**returns** `Promise<AnimeApiResponse>`

## Types

### AnimeApiResponse

```typescript
interface AnimeApiResponse {
  url: string | null
}
```

### GifType

```typescript
type SFWGifType = "Hug" | "Kiss" | "Slap" | "Wink" | "Pat" | "Cuddle" | "Waifu"
type NSFWGifType = "Hentai" | "Boobs" | "Lesbian"
```

## List of available Endpoints

|Name|SFW|
|:-:|:-:|
|**Hug**|✅|
|**Kiss**|✅|
|**Slap**|✅|
|**Wink**|✅|
|**Pat**|✅|
|**Kill**|❓|
|**Cuddle**|✅|
|**Waifu**|✅|
|**Hentai**|❌|
|**Boobs**|❌|
|**Lesbian**|❌|

❓I have no idea what can come out from this endpoint, so be aware. It is listed under the sfw part of the api though.

## Latest changes

### *02/03/2023*

- Added NSFW endpoints, you can see them above ☝️
- Separated the endpoints in two functions `getAnimeGif()` `nsfwAnimeGif()`
