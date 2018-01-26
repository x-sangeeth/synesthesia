import { Profile } from './profile.model';
//problem only
//related idea
export class Article {
  slug: string;
  title = '';
  description = '';
  body = '';
  tagList: Array<string> = [];
  problem = '';
  solution = '';
  usecases = '';
  advantages = '';
  disadvantages = '';
  monetizationPlan = '';
  plan = '';
  images: Array<string> = [];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
