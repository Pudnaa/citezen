import { isEmpty } from "lodash";

// ----------------------------------------------------------------
//JSON объект ирсэн түүхий criteria-г ERP-д зориулсан формат руу хөрвүүлнэ.

//Түүхий нь ингэж ирнэ.
/*
criteria: [
  {
    filterfield: "mglfirm",
    operator: "=",
    value: "KIA"
  }
]
*/

/*
Дээдэхийг ийм болгоод буцаана.
myCriteria = {
    mglfirm: {
      0: {
        operator: "=",
        operand: "KIA",
      },
    },
  }
*/
export const prepareCriteia = (criteria) => {
  if (isEmpty(criteria)) return {};

  let myCriteria = {};
  criteria.map((item, index) => {
    myCriteria[item.filterfield] = {
      0: {
        operator: item.operator || "=",
        operand: item.value || "",
      },
    };
  });

  return myCriteria;
};

// generaloptionContext.motoURL.query дотор байгаа criteria утга нь
//   mglbody: "Кабриолет"
//   mglfirm: "TOYOTA"
//   mglmark: "Corolla Spacio"
// ↓
//  Доодох шиг болгох ёстой.
// [
//   {
//     filterfield: "mglfirm",
//     operator: "=",
//     value: "TOYOTA",
//   },
//   {
//     filterfield: "mglmark",
//     operator: "=",
//     value: "Land Cruiser 200",
//   },
// ];
export const encodeCriteria = (criteria) => {
  if (isEmpty(criteria)) return [{}];

  let myCriteria = [];
  Object.entries(criteria).map(([key, value]) => {
    myCriteria.push({
      filterfield: key,
      operator: "=",
      value: value,
    });
  });

  return myCriteria;
};
