import axios from "axios";

export default class PostService {
  static async getAll(limit: number, page: number) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`, {
        params: {
          _limit: limit,
          _page: page
        }
      });
      return response;
    } catch (e: any) {
      return e.message;
    }
  }

  static async getById(id: string) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response;
    } catch (e: any) {
      return e.message;
    }
  }

  static async getCommentsByPostId(id: string) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      return response;
    } catch (e: any) {
      return e.message;
    }
  }
}