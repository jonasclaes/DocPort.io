export interface ISbLinkAlternate {
  path: string;
  name: string;
  lang: string;
  published: boolean;
  translated_slug: string;
}

export interface ISbLink {
  id: number;
  uuid: string;
  slug: string;
  path: string;
  real_path: string;
  name: string;
  published: boolean;
  parent_id: number | null;
  is_folder: boolean;
  is_startpage: boolean;
  position: number;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  alternates: ISbLinkAlternate[];
}
