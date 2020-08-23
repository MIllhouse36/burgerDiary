// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatBurger").on("click", function(event) {
    var id = $(this).data("id");
    var eat = $(this).data("eat");

    var burgEaten = {
      eaten : eat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgEaten
    }).then(
      function() {
        console.log("This burg was: ", eat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    var id = $(this).data("id");
  
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("DELETED");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      name: $("#burg").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(
      function() {
        console.log("new burger added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
