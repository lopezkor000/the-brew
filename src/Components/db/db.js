import { app } from "../../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

async function getImage(location) {
  const ImageURL = await getDownloadURL(ref(storage, location));
  return ImageURL;
}

export { getImage };
