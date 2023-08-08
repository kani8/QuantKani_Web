import { ref, reactive } from "vue";
import axios from "axios";

interface Post {
  _id: string;
  uid: string;
  author: string;
  title: string;
  content: string;
  category: string;
  timestamp: Date;
}

export interface NewPost {
  _id?: string;
  uid?: string;
  author?: string;
  title: string;
  content: string;
  category: string;
}

export function usePosts() {
  const posts = ref<Post[]>([]);
  const newPost = reactive<NewPost>({
    uid: "",
    author: "",
    title: "",
    content: "",
    category: "",
  });

  const currentPost = ref<Post | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(
        "https://api.quantkani.com/api/blogs"
      );
      posts.value = response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const createPost = async (post: NewPost) => {
    const response = await axios.post<Post>(
      "https://api.quantkani.com/api/blogs",
      post
    );
    posts.value.push(response.data);
  };

  const editPost = async (id: string, updatedPost: NewPost) => {
    const response = await axios.put<Post>(
      `https://api.quantkani.com/api/blogs/${id}`,
      updatedPost
    );
    const index = posts.value.findIndex((post: Post) => post._id === id);
    posts.value[index] = response.data;
  };

  const deletePost = async (id: string) => {
    await axios.delete(`https://api.quantkani.com/api/blogs/${id}`);
    posts.value = posts.value.filter((post: Post) => post._id !== id);
  };

  return {
    posts,
    newPost,
    fetchPosts,
    createPost,
    editPost,
    deletePost,
    currentPost,
  };
}
