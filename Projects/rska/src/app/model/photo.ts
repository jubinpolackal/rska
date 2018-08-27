export class Photo {
  id: number;
  photourl: string;
  photoalbum: number;
  filename: string;

  constructor(id, albumid, filename, url ) {
    this.id = id;
    this.photourl = url;
    this.filename = filename;
    this.photoalbum = albumid;
  }
}
