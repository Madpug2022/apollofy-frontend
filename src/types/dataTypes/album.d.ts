import { TrackType } from "./track";

export interface AlbumType {
    id: number,
    name: string,
    imageUrl: string,
    tracks: TrackType[],
    artistId: string
}