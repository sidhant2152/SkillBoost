import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
import { catalogData } from "../APIs";

const { CATALOGPAGEDATA_API } = catalogData;
export const getCatalogPageData = async (categoryId) => {
  const toastId = toast.loading("Loading....");
  let result = [];
  try {
    // Step 1 -> Make request
    const response = await apiConnector("POST", CATALOGPAGEDATA_API, {
      categoryId,
    });

    // Step 2 -> Check if request was successful
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 3 -> Set result
    result = response?.data;
  } catch (error) {
    // Step 4 -> Handle error
    console.log(
      "Error occurred in getCatalogPageData function in CatalogPAGE_DATA API",
    );
    console.log(error);
    result = error.response?.data;
  }
  toast.dismiss(toastId);
  return result;
};
