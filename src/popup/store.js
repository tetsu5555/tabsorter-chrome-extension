import Sites from "./sites"

class Store {
  constructor() {
    this.state = {
      sites: new Sites(),
      siteSelected: null
    }

    this.init();
  }

  init() {
    this.fetchSites();
  }

  fetchSites() {
    "fetch sites!!"
    const sites = [
      { id: "hoge0", url: "cxclip.karte.io", memo: "" },
      { id: "hoge1", url: "cxclip.karte.io", memo: "" },
      { id: "hoge2", url: "cxclip.karte.io", memo: "" },
    ]
    this.state.sites.addSites(sites)
  }

  addSite() {
    const site = { id: "hoge3", url: "tetsuo.karte.io", memo: "" }
    this.state.sites.addSite(site)
  }

  getSites() {
    return this.state.sites.getSites()
  }

  getSiteSelected() {
    return this.state.siteSelected
  }
  
  setSiteSelected(site) {
    this.state.siteSelected = site
  }
}

export default new Store();