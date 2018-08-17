
export class Album {
  id: number;
  name: string;
  description: string;
  thumbnailId: number;

  constructor(id, name, description, thumbnailId) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnailId = thumbnailId;
  }
}
