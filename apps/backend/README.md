# Backend (Express + TypeScript + Supabase)

## Run
1. Copy `.env.example` to `.env`
2. Fill `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
3. Install deps: `npm install`
4. Dev mode: `npm run dev`

## Endpoints
- `GET /api/health`
- `GET /api/news`
- `GET /api/news/:id`
- `GET /api/products`
- `GET /api/products/:slug`

## Supabase Tables
- `news`
  - `id` (int, PK)
  - `category` (text)
  - `date` (text)
  - `title` (text)
  - `excerpt` (text)
  - `image_url` (text)
  - `tags` (text[])
- `products`
  - `id` (int, PK)
  - `slug` (text, unique)
  - `title` (text)
  - `label` (text)
  - `description` (text)
  - `image_url` (text)
  - `hero_description` (text)
  - `demo_label` (text)
  - `feature_heading` (text)
  - `feature_description` (text)
  - `feature_points` (text[])
  - `faq_items` (jsonb)
  - `use_cases` (jsonb)
