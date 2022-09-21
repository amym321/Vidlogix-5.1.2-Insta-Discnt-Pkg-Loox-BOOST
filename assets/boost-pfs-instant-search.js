// Override Settings
var boostPFSInstantSearchConfig = {
  search: {
    //suggestionMode: 'test',
    //suggestionPosition: 'left'
    //suggestionMobileStyle: 'style2'
  }
};

(function () {
  /* This is to inject boost components into this scope, so we can override component's function */
  BoostPFS.inject(this);

  // Customize style of Suggestion box

  InstantSearchResultItemPopular.prototype.afterRender = function () {
    if (this.$element){
      var suggestionLink = this.$element.find('a');
        fetch('https://services.mybcapps.com/bc-sf-filter/search/redirects?shop=vidilogix.myshopify.com&page=1&limit=20&terms[]=' + this.data)
        .then((response) => response.json())
        .then((redirect) => {
          console.log(redirect);
          if (redirect.data.length > 0) {
            suggestionLink.attr('href',redirect.data[0].redirect_to);
          }
        })
    }
  }
})();