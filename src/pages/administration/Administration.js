import { useState, createContext } from "react";
import { CollectionTable } from "./components/CollectionTable/CollectionTable";
import { CreateForm } from "./components/CreateForm";
import { UpdateForm } from "./components/UpdateForm";
import styles from "./Administration.module.css";
import commonStyles from "../../common/Styles.module.css";

export const CarsContext = createContext();
export const UpdateToggleContext = createContext();
export const DocumentContext = createContext();

export const Administration = () => {
  const [carList, setCarList] = useState([]);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [document, setDocument] = useState({});

  return (
    <CarsContext.Provider value={[carList, setCarList]}>
      <UpdateToggleContext.Provider value={[updateVisible, setUpdateVisible]}>
        <DocumentContext.Provider value={setDocument}>
          <main className={commonStyles.Main}>
            <h1 className={`${styles.Heading} ${commonStyles.Font400}`}>
              - Admin panel -
            </h1>
            <div
              className={`${commonStyles.FlexContainer} ${styles.TableContainer}`}
            >
              {updateVisible ? (
                <UpdateForm
                  document={document}
                  setUpdateVisible={setUpdateVisible}
                />
              ) : (
                <CreateForm />
              )}
              <CollectionTable />
            </div>
          </main>
        </DocumentContext.Provider>
      </UpdateToggleContext.Provider>
    </CarsContext.Provider>
  );
};
