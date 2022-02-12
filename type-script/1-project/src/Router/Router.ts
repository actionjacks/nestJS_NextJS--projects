export type Route = {
  name: string;
  path: string;
  renderFunction: () => void;
};

export class Router {
  private readonly routes: Route[] = [];
  private previousHash = '';

  public constructor() {
    window.addEventListener('hashchange', this.changeRoute);
    window.addEventListener('DOMContentLoaded', this.changeRoute);
  }

  public addRoute(route: Pick<Route, 'name' | 'renderFunction'>): void {
    const path = `#/${route.name}`;

    this.routes.push({ ...route, path });
  }

  private readonly changeRoute = (): void => {
    const newLocation = window.location.hash;

    if (this.previousHash === newLocation) {
      return;
    }
    const route = this.routes.find(({ path }) => newLocation.match(new RegExp(path)));
    if (!route) {
      return;
    }

    this.previousHash = newLocation;
    route.renderFunction();
  };
}
