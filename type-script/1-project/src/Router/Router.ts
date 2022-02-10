export type Route = {
  name: string;
  path: string;
  renderFunction: () => void;
};

class Reuter {
  private readonly routes: Route[] = [];

  public constructor() {
    window.addEventListener('hashchange', this.changeRoute);
    window.addEventListener('DOMContentLoaded', this.changeRoute);
  }

  public addRoute(route: Pick<Route, 'name' | 'renderFunction'>): void {
    const path = `#/${route.name}`;
  }

  private readonly changeRoute = (): void => {};
}
