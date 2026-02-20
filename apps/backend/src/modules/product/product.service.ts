import { supabase } from "../../config/supabase.js";
import { HttpError } from "../../utils/http-error.js";

type ProductRow = {
  id: number;
  slug: string;
  title: string;
  label: string;
  description: string;
  image_url: string;
  hero_description: string;
  demo_label: string;
  feature_heading: string;
  feature_description: string;
  feature_points: string[] | null;
  faq_items: Array<{ question: string; answer: string }> | null;
  use_cases: Array<{ id: number; title: string; excerpt: string; imageUrl?: string; image_url?: string }> | null;
};

const mapProductRow = (row: ProductRow) => ({
  id: row.id,
  slug: row.slug,
  title: row.title,
  label: row.label,
  description: row.description,
  imageUrl: row.image_url,
  heroDescription: row.hero_description,
  demoLabel: row.demo_label,
  featureHeading: row.feature_heading,
  featureDescription: row.feature_description,
  featurePoints: row.feature_points ?? [],
  faqItems: row.faq_items ?? [],
  useCases: (row.use_cases ?? []).map((item) => ({
    ...item,
    imageUrl: item.imageUrl ?? item.image_url ?? ""
  }))
});

export const productService = {
  async listProducts() {
    const { data, error } = await supabase
      .from("products")
      .select(
        "id, slug, title, label, description, image_url, hero_description, demo_label, feature_heading, feature_description, feature_points, faq_items, use_cases"
      )
      .order("id", { ascending: true });

    if (error) {
      throw new HttpError(500, `Failed to fetch products: ${error.message}`);
    }

    return (data ?? []).map(mapProductRow);
  },

  async getProductBySlug(slug: string) {
    const { data, error } = await supabase
      .from("products")
      .select(
        "id, slug, title, label, description, image_url, hero_description, demo_label, feature_heading, feature_description, feature_points, faq_items, use_cases"
      )
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      throw new HttpError(500, `Failed to fetch product detail: ${error.message}`);
    }

    if (!data) {
      throw new HttpError(404, "Product not found");
    }

    return mapProductRow(data);
  }
};
