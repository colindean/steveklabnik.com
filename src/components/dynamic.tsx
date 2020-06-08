import dynamic from 'next/dynamic'

export default {
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  blockquote: 'blockquote',
  a: 'a',

  Code: dynamic(() => import('./code')),
  Counter: dynamic(() => import('./counter')),
}
