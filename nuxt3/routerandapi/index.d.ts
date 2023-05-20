declare module "#app" {
  interface NuxtApp {
    $sayPiczes(name: string): void;
  }
}
declare module "vue" {
  interface ComponentCustomProperties {
    $sayPiczes(name: string): void;
  }
}
export {};
