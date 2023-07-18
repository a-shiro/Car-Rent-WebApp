import { Fragment, useEffect, useState } from "react";
import { Outlet, Navigate, useParams } from "react-router-dom";
import { getDataWhere } from "../../services/queries";
import { where } from "firebase/firestore";

const DetailsRouteGuard = () => {
  const { carModel } = useParams();
  const [loading, setLoading] = useState(true);
  const [modelFound, setModelFound] = useState(null);
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getDataWhere("cars", [where("urlPath", "==", carModel)]);

      if (data.length > 0) {
        setCar(data[0]);
        setModelFound(true);
        setLoading(false);
      } else {
        setModelFound(false);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div style={{ height: "100vh", backgroundColor: "white" }}></div>
      ) : modelFound ? (
        <Outlet context={[car, setCar]} />
      ) : (
        <Navigate to="/page-not-found" />
      )}
    </Fragment>
  );
};

export default DetailsRouteGuard;
