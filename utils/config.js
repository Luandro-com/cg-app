export const colors = {
  orange: '#f1623a',
  white: '#ffffff',
  black: '#4a4a4a',
  grey: '#404040',
  secondary: '#7a5634',
};
export const GAKey = 'UA-84658570-1';
export const fontFamily = 'Open Sans';
export const appUrl = 'http://consultoriacg.com.br';
export const apiUrl = 'http://admin.consultoriacg.com.br/wp-json/';
export const componentsDataUrl = `${apiUrl}wp/v2/pages?per_page=20&_query=[0:20].{title: title.rendered, slug: slug, text: content.rendered, seo: yoast, custom: acf, image: better_featured_image.source_url }`;
export const menuDataUrl = `${apiUrl}wp-api-menus/v2/menus/2`;
export const blogDataUrl = range => `${apiUrl}wp/v2/posts?_embed&_query=[${range}].{image: better_featured_image.source_url, slug: slug, title: title.rendered, text: excerpt.rendered, author: _embedded.author[0].name, date: date}`;
export const fullBlogUrl = slug => `${apiUrl}wp/v2/posts?_embed&slug=${slug}&_query=[].{slug:slug,title:title.rendered,content:content.rendered,image:better_featured_image.source_url,author:_embedded.author[0].name,date:date,previousPost:previous_post,nextPost:next_post,seo:yoast}`;
export const footerContactUrl = `${apiUrl}wp/v2/pages?include=300,313&_query=[0:20].{title:%20title.rendered,%20slug:%20slug,%20text:%20content.rendered,%20custom:%20acf,%20image:%20better_featured_image.source_url%20}`;
export const searchUrl = term => `${apiUrl}wp/v2/posts?filter[s]=${term}&_query=[].{title: title.rendered, slug: slug, author: author, date: date}`;
export const postInfoUrl = id => `${apiUrl}wp/v2/posts/${id}?fields=title,author,date,slug`;
export const mailing = {
  user: 'user_SUl0Vj0ZyDbT6UE7FY5Ca',
  service: 'default_service',
  template: 'comentario',
};
