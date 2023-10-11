import { toast } from "react-toastify";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const createHeaders = (keys) => {
  const result = [];
  for (let key of keys) {
    result.push({
      id: key,
      name: key,
      prompt: key,
    });
  }
  return result;
};

export const getReportFromData = (data) => {
  if (!data || data.length == 0) {
    toast.error("empty data")
    return
  };
  const doc = new jsPDF({ orientation: "landscape" });
  // doc.autoTable({
  //   html: "#example",
  // });
  autoTable(doc, {
    head: [Object.keys(data[0])],
    body: data.map((row) => Object.values(row)),
  });
  // doc.table(1, 1, [{id:"1", name:"2"}],createHeaders(["header1", "header2"]), {autoSize: true});

  doc.save("data.pdf");
};
