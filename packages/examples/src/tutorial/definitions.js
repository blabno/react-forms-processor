// @flow
import type { FieldDef } from "react-forms-processor";

export const singleField: FieldDef[] = [
  {
    id: "FIELD1",
    name: "key",
    type: "text",
    label: "My first field",
    description: "This is an example field",
    placeholder: "Enter a value",
    defaultValue: "",
    visible: true,
    required: false,
    disabled: false
  }
];

export const visibility: FieldDef[] = [
  {
    id: "TEXT",
    name: "key",
    type: "text",
    label: "Name",
    visibleWhen: [
      {
        field: "CHECKBOX",
        is: [true]
      }
    ]
  },
  {
    id: "CHECKBOX",
    name: "show",
    type: "checkbox",
    label: "Show the name field?",
    defaultValue: true
  }
];

export const requiredAndDisabledRules: FieldDef[] = [
  {
    id: "TEXT",
    name: "key",
    type: "text",
    label: "Name",
    requiredWhen: [
      {
        field: "REQUIRED",
        is: [true]
      }
    ],
    disabledWhen: [
      {
        field: "ENABLED",
        isNot: [true]
      }
    ]
  },
  {
    id: "REQUIRED",
    name: "isRequired",
    type: "checkbox",
    label: "Make the text field required",
    defaultValue: false
  },
  {
    id: "ENABLED",
    name: "isEnabled",
    type: "checkbox",
    label: "Enable the text field",
    defaultValue: true
  }
];

export const fieldsWithOptions: FieldDef[] = [
  {
    id: "OPTIONS1",
    name: "fruit",
    type: "radiogroup",
    label: "Pick your fruit?",
    defaultValue: "orange",
    options: [
      {
        items: ["apple", "banana", "orange", "pear"]
      }
    ]
  },
  {
    id: "OPTIONS2",
    name: "betterFruit",
    type: "select",
    label: "Pick your better named fruit?",
    defaultValue: "A",
    options: [
      {
        heading: "Round fruits",
        items: [{ label: "Apple", value: "A" }, { label: "Orange", value: "O" }]
      },
      {
        heading: "Other shapes",
        items: [{ label: "Banana", value: "B" }, { label: "Pear", value: "C" }]
      }
    ]
  },
  {
    id: "OPTIONS3",
    name: "characters",
    type: "multiselect",
    label: "Pick some characters?",
    defaultValue: []
  }
];

export const manipulateOptions: FieldDef[] = [
  {
    id: "FRUITS",
    name: "fruit",
    type: "multiselect",
    label: "Pick some fruit?",
    defaultValue: "apple,pear",
    options: [
      {
        items: ["apple", "banana", "orange", "pear"]
      }
    ],
    valueDelimiter: ",",
    useChangesAsValues: true,
    addedSuffix: "",
    removedSuffix: ""
  }
];

export const duplicateNames = [
  {
    id: "DEFAULTS",
    name: "number",
    type: "radiogroup",
    label: "Pick a number",
    defaultValue: "One",
    options: [
      {
        items: ["One", "Two", "Three", "Four", "Other"]
      }
    ],
    omitWhenValueIs: ["Other"]
  },
  {
    id: "CUSTOM",
    name: "number",
    type: "text",
    label: "Enter a number",
    visibleWhen: [{ field: "DEFAULTS", is: ["Other"] }],
    omitWhenHidden: true
  }
];

export const validation: FieldDef[] = [
  {
    id: "VALIDATED",
    name: "name",
    type: "text",
    label: "Get it right!",
    trimValue: true,
    validWhen: {
      lengthIsGreaterThan: {
        length: 3,
        message: "The value must have more than 3 characterrs"
      },
      lengthIsLessThan: {
        length: 6,
        message: "The value must less than 6 characters"
      },
      fallsWithinNumericalRange: {
        min: 150,
        max: 80000,
        message: "The value must be more than 150 and less than 80000"
      },
      matchesRegEx: {
        value: "1234",
        pattern: "^[\\d]+$",
        message: "Only numbers allowed"
      }
    }
  }
];

export const comparisonValidation: FieldDef[] = [
  {
    id: "ONE",
    name: "one",
    type: "text",
    label: "Field one",
    description: "Must be the biggest field",
    trimValue: true,
    validWhen: {
      comparedTo: {
        fields: ["TWO", "THREE"],
        is: "BIGGER"
      }
    }
  },
  {
    id: "TWO",
    name: "two",
    type: "text",
    label: "Field two",
    description: "Must be the shortest field",
    trimValue: true,
    validWhen: {
      comparedTo: {
        fields: ["ONE", "THREE"],
        is: "SHORTER"
      }
    }
  },
  {
    id: "THREE",
    name: "three",
    type: "text",
    label: "Field three",
    description: "Must be the smallest field",
    trimValue: true,
    validWhen: {
      comparedTo: {
        fields: ["ONE", "TWO"],
        is: "SMALLER"
      }
    }
  }
];
