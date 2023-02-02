# Anime-Images-Api Wrapper
This is a wrapper for the anime images api hosted on
https://anime-api.hisoka17.repl.co/

### Making a request is as simple as:
```javascript
const { getAnimeGif } = require('anime-gifs-api')

const { url } = await getAnimeGif("Hug") // You will get autocompletion here

if (!url) {
  // Possibly an error within the api
  // Should handle the error here.
}

console.log(url) // Should log a valid gif url
```
## Functions
## `getAnimeGif(gifType: GifType)`
**returns** `Promise<AnimeApiResponse | null>`
## Types
### AnimeApiResponse
```typescript
interface AnimeApiResponse {
  url: string | null
}
```
### GifType
```typescript
type GifType = "Hug" | "Kiss" | "Slap" | "Wink" | "Pat" | "Cuddle" | "Waifu"
```
## List of available Endpoints
|Name|SFW|
|:-:|:-:|
|Hug|✅|
|Kiss|✅|
|Slap|✅|
|Wink|✅|
|Pat|✅|
|Cuddle|✅|
|Waifu|✅|