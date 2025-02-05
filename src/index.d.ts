declare module 'frandev-ui' {
    import { ReactNode } from 'react';
  
    interface ContainerProps {
      children: ReactNode;
    }
  
    export const Container: React.FC<ContainerProps>;
}