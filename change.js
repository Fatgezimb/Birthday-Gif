$("#cat-button").on("click", function() {
    // Storing our giphy API URL for a random cat image
    var anything = $("#changeGif");
    console.log(anything.val());
    var queryURL =
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" +
      anything.val();

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // After the data from the AJAX request comes back
      .then(function(response) {
        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        catImage.attr("src", imageUrl);
        catImage.attr("alt", anything);

        // Prepending the catImage to the images div
        $("#images").prepend(catImage);
      });
  });

  $("#changeGif").click(function(e) {
    e.preventDefault();
  });