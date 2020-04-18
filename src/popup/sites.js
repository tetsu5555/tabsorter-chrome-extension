import Site from "./site"

export default class Sites {
  constructor() {
    this._sites = []
  }

  addSites(sites) {
    if (!sites || sites === []) throw Error("invalid sites")

    const CSites = sites.map(site => {
      return new Site(site)
    })

    this._sites = CSites;
  }

  addSite(site) {
    this._sites.push(new Site(site));
  }

  getSites() {
    return this._sites;
  }
}