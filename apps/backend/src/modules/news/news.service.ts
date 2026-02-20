import { supabase } from "../../config/supabase.js";
import { HttpError } from "../../utils/http-error.js";

type NewsRow = {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image_url: string;
  tags: string[] | null;
};

const mapNewsRow = (row: NewsRow) => ({
  id: row.id,
  category: row.category,
  date: row.date,
  title: row.title,
  excerpt: row.excerpt,
  imageUrl: row.image_url,
  tags: row.tags ?? []
});

export const newsService = {
  async listNews() {
    const { data, error } = await supabase
      .from("news")
      .select("id, category, date, title, excerpt, image_url, tags")
      .order("id", { ascending: false });

    if (error) {
      throw new HttpError(500, `Failed to fetch news: ${error.message}`);
    }

    return (data ?? []).map(mapNewsRow);
  },

  async getNewsById(id: string) {
    const { data, error } = await supabase
      .from("news")
      .select("id, category, date, title, excerpt, image_url, tags")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      throw new HttpError(500, `Failed to fetch news detail: ${error.message}`);
    }

    if (!data) {
      throw new HttpError(404, "News not found");
    }

    return mapNewsRow(data);
  }
};
