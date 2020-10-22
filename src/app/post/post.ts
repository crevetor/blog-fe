class User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

class Author {
  user: User;
  photo: string;
}
export class Post {
  id: number;
  author: Author;
  tags: string[];
  state: string;

  title: string;
  summary: string;
  content: string;

  created_date: Date;
  modified_date: Date;
  published_date: Date;
}
