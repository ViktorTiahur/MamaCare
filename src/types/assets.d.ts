// SVGR як React-компонент
declare module '*.svg?react' {
  import * as React from 'react';
  const Component: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default Component;
}
// URL-рядок
declare module '*.svg?url' {
  const src: string;
  export default src;
}
