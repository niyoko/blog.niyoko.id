'use strict';

hexo.extend.helper.register('clean_url', function(path, options){
  const oldUrl = this.url_for(path, options);
  if(!oldUrl) return oldUrl;
  if(!oldUrl.endsWith('.html')) return oldUrl;

  return oldUrl.substring(0, oldUrl.length - 5);
});