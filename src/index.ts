import { Endpoints, NSFWEndpoints } from "./resources/api";

export type SFWGifType = keyof typeof Endpoints
export type NSFWGifType = keyof typeof NSFWEndpoints

export * from "./functions/index"