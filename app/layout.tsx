import './globals.css'
import React, { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <head>
        <title>KnownApp</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
