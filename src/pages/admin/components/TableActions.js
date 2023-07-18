import { deleteDataById } from "../../../services/queries";
import { storage } from "../../../setup/config/firebase";
import { ref, deleteObject } from "firebase/storage";

export const TableActions = ({ obj, activeCollection }) => {
  const deleteDocument = () => {
    try {
      if (obj?.photos) {
        obj.photos.map((photo) => {
          const photosRef = ref(storage, photo);
          deleteObject(photosRef);
        });

        const thumbnailRef = ref(storage, obj.thumbnail);
        deleteObject(thumbnailRef);
      } else {
        const findFile = (obj, string) => {
          return Object.values(obj).find((value) =>
            String(value).includes(string)
          );
        };

        const file = findFile(obj, "https://");
        const fileRef = ref(storage, file);

        deleteObject(fileRef);
      }

      deleteDataById(activeCollection, obj.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <td>
      <div className="actions-wrapper-admin">
        <button className="action-button-admin">Edit</button>
        <button onClick={deleteDocument} className="action-button-admin">
          Delete
        </button>
      </div>
    </td>
  );
};
