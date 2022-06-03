import { FC, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import { useRouter } from "next/router";
import useGoLink from "@customhook/useGoLink";
import { useCloud } from "hooks/use-cloud";
import { prepareDefaultValueForFilter } from "util/helper";

type PropsType = {
  item?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
  props?: object;
};

const MoleculeFilterWrapper: FC<PropsType> = ({
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
  props = {},
}) => {
  const router = useRouter();
  const cloudContext = useCloud();

  //prepare Component
  const filterNemgoo = item?.filternemgooReady || {};
  const showtype = filterNemgoo?.showtype
    ? filterNemgoo?.showtype
    : item?.showtype;

  const fieldTypeList: any = {
    bigdecimal: "MoleculeFilterDecimal", //decimal-тай ижил
    check: "MoleculeFilterCheckbox", //only Boolean
    combo: "MoleculeFilterCombo", //multi
    numberslider: "MoleculeFilterNumberSlider", //? custom - number
    date: "MoleculeFilterDate", //only date
    datetime: "MoleculeFilterDatetime", //full date time
    decimal: "MoleculeFilterDecimal", //бутархай тоо
    description_auto: "MoleculeFilterDescriptionAuto", //автомат сунадаг
    description: "MoleculeFilterDescription",
    file: "MoleculeFilterFile", //file upload
    group: "MoleculeFilterGroup", //? мэдэхгүй!!
    label: "MoleculeFilterLabel", //label буюу цаанаас олгосон ID харуулах
    multicheck: "MoleculeFilterMultiCheckbox", //Олон Checkbox
    multicheckstar: "MoleculeFilterMultiCheckboxStar", //? custom - multicheck
    number: "MoleculeFilterNumber",
    percent: "MoleculeFilterPercent", //percent number
    radio: "MoleculeFilterRadiobox", //radio inline
    radiobutton: "MoleculeFilterRadioboxButton", //? custom - radio
    radiocolor: "MoleculeFilterRadioboxColor", //? custom - radio
    // rows: "MoleculeFilterRows",
    star: "MoleculeFilterStar", //мэдэхгүй!!
    text: "MoleculeFilterText",
    time: "MoleculeFilterTime",
  };

  const RenderComponent = useMemo(
    () =>
      dynamic(() =>
        import(
          `@components/common/Molecule/${
            fieldTypeList?.[showtype] || "MoleculeFilterCheckbox"
          }`
        ).catch((err) => {
          return () => (
            <>Field молекул олдсонгүй - {fieldTypeList?.[showtype]}</>
          );
        })
      ),
    []
  );

  const componentProps: any = {
    input: {
      className:
        "w-full h-8 rounded-lg border-gray-300 focus:ring-cozy focus:ring-2 focus:border-0",
      style: {},
    },
    props: props,
  };

  const search = filterNemgoo?.search || {};

  /* --------------- defaultValue олох хэсэг -------------- */
  const defaultValues = prepareDefaultValueForFilter(
    cloudContext.cloudURL.query,
    item.columnname
  );
  // [cloudContext.cloudURL.query[`dvc${item.columnname}`]];

  /* ---------------------- onChange ---------------------- */
  const onChange = (query: any) => {
    useGoLink(router, {
      query: query,
      props: {
        shallow: true,
        keepQuery: true,
      },
    });
  };

  const [rowsReady, setRowsReady] = useState(item?.rowsReady || []);
  // console.log("🚀 ~ rowsReady", rowsReady);

  const onSearchChange = (e: any) => {
    // console.log("Search value: ", e.target.value);

    const filteredRows = _.filter(item?.rowsReady, (item: any) => {
      return _.includes(
        _.lowerCase(item.position1.value),
        _.lowerCase(e.target.value)
      );
    });

    setRowsReady(filteredRows);

    // console.log("BBBBB", sdsd);
  };

  return (
    <BlockDiv
      customClassName={customClassName}
      customStyle={{
        ...customStyle,
      }}
      divNumber="MoleculeFilterOuter"
      divNamePrefix={divNamePrefix}
    >
      <BlockDiv
        customClassName=""
        divNumber="MoleculeFilterInner"
        divNamePrefix={divNamePrefix}
      >
        <BlockDiv
          customClassName=""
          divNumber="MoleculeFilterHeader"
          divNamePrefix={divNamePrefix}
        >
          {/* Гарчиг */}
          <RenderAtom
            item={{ value: item.title }}
            defaultAtom="title"
            divNamePrefix={divNamePrefix}
          />

          {!_.isEmpty(search) && (
            <input
              className={`mt-4 ${componentProps?.input?.className}`}
              style={componentProps?.input?.style}
              type="search"
              placeholder={search?.placeholder?.title || "Хайх"}
              onChange={onSearchChange}
            />
          )}
        </BlockDiv>
        <BlockDiv
          customClassName="pt-3"
          divNumber="MoleculeFilterBody"
          divNamePrefix={divNamePrefix}
        >
          <RenderComponent
            item={item}
            rows={rowsReady}
            filterNemgoo={filterNemgoo}
            defaultValues={defaultValues}
            onChange={onChange}
            customClassName=""
            customStyle={{}}
            divNamePrefix="cozyfilter"
            {...componentProps}
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeFilterWrapper;
