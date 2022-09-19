/** Please don't modify or unzip this content. It will be updated regularly **/
    (function() {
      BoostPFS.inject(this);

      //Set global variable
      Globals.hasIntegration = true;
      // 3rd app compile template
      Integration.compileIntegrationTemplate = function (data, itemHtml) {
        var avg_rating = Utils.getProductMetafield(data, 'loox', 'avg_rating'); var num_reviews = Utils.getProductMetafield(data, 'loox', 'num_reviews'); var itemReviews = ''; if (avg_rating !== null && num_reviews !== null) {  itemReviews = '<div class="loox-rating" data-id="{{itemId}}" data-rating="'+avg_rating+'" data-raters="'+num_reviews+'"></div>'; } itemHtml = itemHtml.replace(/{{itemReviews}}/g, itemReviews);
        return itemHtml;
      };

      Integration.call3rdIntegrationFunc = function(data) {
        
      }

    })();