// // Place here global interface and variable that should be available globally
declare module "*.json" {
  const value: any;
  export default value;
}
declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare module "*.m4a" {
  const value: any;
  export default value;
}

declare module "*.wav" {
  const value: any;
  export default value;
}

declare module "*.mp3" {
  const value: any;
  export default value;
}

declare module "*.ttf" {
  const value: any;
  export default value;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}
