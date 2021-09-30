var table = $("#data_table").DataTable({
  order: [[1, "asc"]],
  pageLength: 50,
});

$("#add_button").on("click", function () {
  var newRowArray = [];
  if (
    $("#input_City").val() === "" &&
    $("#input_Correct_name").val() === "" &&
    $("#input_District").val() === "" &&
    $("#input_State").val() === "" &&
    $("#input_Region").val() === ""
  ) {
    Swal.fire("Some Fields are required!");
  } else {
    Swal.fire({
      title: "Are you sure you want to Submit?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        newRowArray.push(
          `<span class="material-icons" style="cursor: pointer;" onclick="deleteRow(this)">delete_outline</span>`
        );
        $(".form-control").each(function () {
          newRowArray.push($(this).val());
        });
        table.row.add(newRowArray).draw(false);
        $(".form-control").val("");
        $("#exampleModal").modal("hide");
        Swal.fire("Submited!", "Your record has been inserted.", "success");
      }
    });
  }
});

function deleteRow(context) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      table.row($(context).parents("tr")).remove().draw(false);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
}
