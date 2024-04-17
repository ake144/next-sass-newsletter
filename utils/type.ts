export type IBlog = {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
};

export type LatestBlog = {
   id: number;
  title: string;
  description:string;
  link: string;
  image:string;
  authorId: number;
  slug:string ;

}

export type posts = {
  id:number;
  title:string;
  link:string;
  thumbnail:string;
  content:string;
  authorId:number;
  slug:string ;
}

// export type IBlogDetial = {
// 	created_at: string;
// 	id: string;
// 	image_url: string;
// 	is_premium: boolean;
// 	is_published: boolean;
// 	title: string;
// 	blog_content: {
// 		blog_id: string;
// 		content: string;
// 		created_at: string;
// 	};
// } | null;


export type Iuser = {
	name: string;
	email: string;
	id: number;
} | null;