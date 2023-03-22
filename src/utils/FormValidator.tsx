export const checkFormValidation = ({
  page,
  pageFieldsRequired,
}: {
  page: any;
  pageFieldsRequired: { [key: string]: boolean | string };
}): {
  errors: { [key: string]: boolean | string | undefined };
  isAnyError: boolean;
} => {
  const errors: { [key: string]: string | boolean | undefined } = {};
  for (const [key, value] of Object.entries(pageFieldsRequired)) {
    const pageFieldValue = page[key];
    const isValueString = typeof value === "string";
    let isFieldRequired = value === true;
    if (isValueString) {
      isFieldRequired = value !== "";
    }
    if (
      (!pageFieldValue && isFieldRequired) ||
      (pageFieldValue === "" && isFieldRequired)
    ) {
      if (isValueString) {
        errors[key] = value;
      } else {
        errors[key] = true;
      }
    } else {
      errors[key] = undefined;
    }
  }

  const errorsValues = Object.values(errors);
  const isAnyError = errorsValues?.some(
    (el: boolean | string | undefined) =>
      (el && el === true) || (typeof el === "string" && el !== "")
  );
  return { errors, isAnyError };
};
