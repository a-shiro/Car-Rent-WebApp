import { useState, createContext } from "react";
import { CollectionTable } from "./components/CollectionTable/CollectionTable";
import { CreateForm } from "./components/CreateForm";
import { UpdateForm } from "./components/UpdateForm";
import styles from "./Administration.module.css";
import commonStyles from "../../common/Styles.module.css";

export const CarsContext = createContext();
export const ToggleEdit = createContext();
export const DocumentContext = createContext();

export const Administration = () => {
  const [carList, setCarList] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [document, setDocument] = useState({});

  return (
    <CarsContext.Provider value={[carList, setCarList]}>
      <ToggleEdit.Provider value={[toggleEdit, setToggleEdit]}>
        <DocumentContext.Provider value={setDocument}>
          <main className={commonStyles.Main}>
            <h1 className={`${styles.Heading} ${commonStyles.Font400}`}>
              - Admin panel -
            </h1>
            <div
              className={`${commonStyles.FlexContainer} ${styles.TableContainer}`}
            >
              {toggleEdit ? <CreateForm /> : <UpdateForm document={document} />}

              <CollectionTable />
            </div>
          </main>
        </DocumentContext.Provider>
      </ToggleEdit.Provider>
    </CarsContext.Provider>
  );
};
