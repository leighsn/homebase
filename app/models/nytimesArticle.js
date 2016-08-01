const NYtimesArticle = (function(){
  var counter = 0;

  return class {
    constructor(url, byline, title, published_date, image) {
      this.url = url
      this.byline = byline
      this.title = title
      this.published_date = published_date
      this.image = image

      Store.nytimesArticles.push(this)
      console.log('Created new NYtimesArticle object')
    }
  }

  // displayBuilder() {
  //   //takes an object and creates all the necessary tags
  //   //then appends all tags to DOM
  //   //will eventually replace with Handlebars
  // }
}())
