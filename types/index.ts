export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface ICertificate {
    title: string;
    category: string;
    issuer: string;
    institution?: string;
    date: string;
    credentialId: string;
    validity?: string;
    description: string;
    tags: string[];
    image: string;
    imageWidth: number;
    imageHeight: number;
    imagePosition?: 'top' | 'center';
    pdf: string;
}

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
    promoVideo?: string;
}
