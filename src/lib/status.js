export const getStatusColor = (status) => {
  let item = { bgCss: "badge-light-warning", label: "Pending" };
  // let bgCss = "badge-light-warning"

  switch (status) {
    case "paid":
      item.bgCss = "badge-light-success";
      item.label = "Paid";
      break;

    case "archived":
      item.bgCss = "badge-light-danger";
      item.label = "Cancelled";

    default:
      break;
  }

  return item;
};
