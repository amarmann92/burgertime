$(function () {
  // Event listener for "Submit" to create a new burger
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      name: $("#burger-name").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });

  // Event listener for "Devour"
  $(".devour").on("click", function (event) {
    event.preventDefault();

    const id = $(this).data("id");
    const devourStatus = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourStatus,
    }).then(function () {
      location.reload();
    });
  });

  // Event listener to delete selected burger
  $(".delete").on("click", function (event) {
    event.preventDefault();

    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      location.reload();
    });
  });
});
