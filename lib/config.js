module.exports = {
  footerText: "Moto.mn © 2021",

  prepareTitle: (myTitle) => {
    if (myTitle) {
      // return myTitle.substring(0, 30) + " - Moto.mn";
      return myTitle.substring(0, 100) + " - Moto.mn";
    } else {
      return "Moto.mn - Car, Parts";
    }
  },

  defaultSrc: (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg";
  },

  prepareImageSrc: (mySrc) => {
    // console.log("FFFFFFFFFFFFF", mySrc);
    // storage/uploads/content/autozar/1587535124048720/2020/04/picture_1587535463.jpg
    if (mySrc.slice(0, 8) === "storage/") {
      return `https://cloudapi.moto.mn/${mySrc}`;
    }

    if (mySrc === "") {
      return "https://res.cloudinary.com/motomn/image/upload/v1599652650/moto/default_01_qpvj5a.jpg";
    }

    return mySrc;
  },

  formStandardLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 17 },
    },
  },

  formCompactLayout: {
    labelCol: {
      xs: { span: 0 },
      sm: { span: 9 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 15 },
    },
  },

  validateMessages: () => {
    const typeTemplate = "'${label}' талбар ${type} төрөлтэй таарахгүй байна.";

    return {
      default: "Validation error on field '${name}'",
      required: "'${labelRaw}' талбарыг заавал бөглөх ёстой.",
      enum: "'${name}' must be one of [${enum}]",
      whitespace: "'${labelRaw}' талбар хоосон байж болохгүй.",
      date: {
        format: "'${labelRaw}' талбарын формат буруу байна.",
        parse: "'${labelRaw}' талбарыг огноо болгож чадсангүй.",
        invalid: "'${labelRaw}' талбар буруу огноо байна.",
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: "'${labelRaw}' must be exactly ${len} characters",
        min: "'${labelRaw}' must be at least ${min} characters",
        max: "'${labelRaw}' cannot be longer than ${max} characters",
        range: "'${labelRaw}' must be between ${min} and ${max} characters",
      },
      number: {
        len: "'${labelRaw}' must equal ${len}",
        min: "'${labelRaw}' cannot be less than ${min}",
        max: "'${labelRaw}' cannot be greater than ${max}",
        range: "'${labelRaw}' must be between ${min} and ${max}",
      },
      array: {
        len: "'${labelRaw}' must be exactly ${len} in length",
        min: "'${labelRaw}' cannot be less than ${min} in length",
        max: "'${labelRaw}' cannot be greater than ${max} in length",
        range: "'${labelRaw}' must be between ${min} and ${max} in length",
      },
      pattern: {
        mismatch: "'${labelRaw}' does not match pattern ${pattern}",
      },
    };
  },

  // validateMessages: {
  //   default: "Validation error on field '${name}'",
  //   required: "'${name}' is required",
  //   enum: "'${name}' must be one of [${enum}]",
  //   whitespace: "'${name}' cannot be empty",
  //   date: {
  //     format: "'${name}' is invalid for format date",
  //     parse: "'${name}' could not be parsed as date",
  //     invalid: "'${name}' is invalid date",
  //   },
  //   types: {
  //     string: "'${name}' is not a valid ${type}",
  //     method: "'${name}' is not a valid ${type}",
  //     array: "'${name}' is not a valid ${type}",
  //     object: "'${name}' is not a valid ${type}",
  //     number: "'${name}' is not a valid ${type}",
  //     date: "'${name}' is not a valid ${type}",
  //     boolean: "'${name}' is not a valid ${type}",
  //     integer: "'${name}' is not a valid ${type}",
  //     float: "'${name}' is not a valid ${type}",
  //     regexp: "'${name}' is not a valid ${type}",
  //     email: "'${name}' is not a valid ${type}",
  //     url: "'${name}' is not a valid ${type}",
  //     hex: "'${name}' is not a valid ${type}",
  //   },
  //   string: {
  //     len: "'${name}' must be exactly ${len} characters",
  //     min: "'${name}' must be at least ${min} characters",
  //     max: "'${name}' cannot be longer than ${max} characters",
  //     range: "'${name}' must be between ${min} and ${max} characters",
  //   },
  //   number: {
  //     len: "'${name}' must equal ${len}",
  //     min: "'${name}' cannot be less than ${min}",
  //     max: "'${name}' cannot be greater than ${max}",
  //     range: "'${name}' must be between ${min} and ${max}",
  //   },
  //   array: {
  //     len: "'${name}' must be exactly ${len} in length",
  //     min: "'${name}' cannot be less than ${min} in length",
  //     max: "'${name}' cannot be greater than ${max} in length",
  //     range: "'${name}' must be between ${min} and ${max} in length",
  //   },
  //   pattern: {
  //     mismatch: "'${name}' does not match pattern ${pattern}",
  //   },
  // },

  isMobile: () => {
    if (window.innerWidth < 576) {
      return true;
    } else return false;
  },
};
