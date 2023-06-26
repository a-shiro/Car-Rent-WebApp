import { Fragment, useEffect, useState } from "react";

export const Modal = ({ tableHeads, tableData }) => {
  const [formFields, setFormFields] = useState(null);

  useEffect(() => {
    const createFormSchema = (fields, values) => {
      const schema = [];

      fields.forEach((name, index) => {
        const fieldName = name;
        let dataType = typeof values[index];

        if (dataType === "object") {
          dataType = "file";
        }

        schema.push([fieldName, dataType]);
      });

      setFormFields(schema);
    };

    if (tableHeads && tableData) {
      const fields = tableHeads.slice(0, tableHeads.length - 2);
      const values = tableData[0].slice(0, tableHeads.length - 2);

      createFormSchema(fields, values);
    }
  }, [tableHeads]);

  return (
    <div id="modal" className="modal-admin">
      <div className="modal-form-admin">
        <h1>Add</h1>
        {formFields && (
          <form>
            {formFields.map(([name, type]) => (
              <Fragment key={name}>
                <label>{name}:</label>
                <input type={type} />
              </Fragment>
            ))}
          </form>
        )}
      </div>
    </div>
  );
};
