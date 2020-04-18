export default class Site {
  constructor({id, url, memo}) {
    if (!id) throw new Error("invalid id")
    if (!url) throw new Error("invalid url")
    
    this.id = id
    this.url = url
    this.memo = memo
  }
}