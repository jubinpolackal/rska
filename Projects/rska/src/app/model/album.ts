
export class Album {
  id: number;
  name: string;
  description: string;
  thumbnailid: number;
  isEditing: boolean;

  constructor(id, name, description, thumbnailId) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnailid = thumbnailId;
    this.isEditing = false;
  }
}
