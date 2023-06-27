import { useEffect, useState } from "react";

export const Modal = ({ tableHeads, tableData }) => {
  const [formFields, setFormFields] = useState(null);

  const changeHandler = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    const createFormSchema = (fields, values) => {
      const schema = [];

      fields.forEach((name, index) => {
        const fieldName = name;
        let dataType = typeof values[index];

        // ToDo: Add a way to send files to database
        if (dataType === "object") {
          dataType = "string";
        }
        // /\
        // |________________________
        // Fix dataType to be file |

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
      <div className="form-wrapper-admin">
        <h1>Add</h1>
        {formFields && (
          <form className="form-admin">
            {formFields.map(([name, type]) => (
              <label htmlFor={name.toLowerCase()} key={name}>
                <input
                  value=""
                  onChange={changeHandler}
                  id={name.toLowerCase()}
                  type={type}
                  placeholder={name}
                />
              </label>
            ))}
            <div>
              <input type="submit" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
