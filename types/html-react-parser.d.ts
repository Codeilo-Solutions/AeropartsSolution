declare module "html-react-parser" {
  import { ReactNode } from "react";

  function parse(html: string, options?: any): ReactNode;

  export default parse;
}
