export interface Post {
  id: number;
  name: string;
  username: string;
  postedAt: Date;
  content: string;
  photo_url: string;
  likes: number;
  isAlreadyLiked: boolean;
}
