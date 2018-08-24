export class Photo {
  id: number;
  url: string;
  albumid: number;

  constructor(id, url, albumid ) {
    this.id = id;
    this.url = url;
    this.albumid = albumid;
  }
}
