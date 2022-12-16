import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "V-Pop", value: "v-pop" },
  { id: 3, name: "US-UK", value: "usuk" },
  { id: 4, name: "RAP", value: "RAP" },
  { id: 5, name: "Không lời", value: "khongloi" },
];

export const filterByLanguage = [
  { id: 1, name: "VietNam", value: "vietnam" },
  { id: 2, name: "English", value: "english" },
//   { id: 3, name: "", value: "malayalam" },
//   { id: 4, name: "Telungu", value: "Telungu" },
//   { id: 5, name: "Hindi", value: "hindi" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
