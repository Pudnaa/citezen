import React, {
  createContext,
  useReducer,
  FC,
  useState,
  useEffect,
} from "react";
// import { MetaReducer } from './MetaReducer';
// import ACTIONS from './MetaActions';
import useSWR from "swr";
import { notification } from "antd";
import { validateForm } from "@util/helper";
import _ from "lodash";
import axios from "axios";
import fetchJson from "lib/fetchJson";
import ChangeEventInput from "util/ChangeEventInput";

type PropsContextType = {
  formDataInitData?: any;
  setFormDataData?: any;
  processConfig?: any;
  handleChangeContext?: any;
  handleClickContext?: any;
  handleSubmitContext?: any;
  validData?: any;
  lookUpData?: any;
  handleLookUpData?: any;
  processExpression?: any;
};

const FormMetaContext = createContext<PropsContextType>({});

type PropsType = {
  children?: any;
  formInitData?: any;
  formExpression?: any;
  processConfig?: any;
};

export const FormMetaContextProvider: FC<PropsType> = ({
  children,
  formInitData,
  formExpression,
  processConfig,
}) => {
  const [formDataInitData, setFormDataInitData] = useState(formInitData);
  const [processExpression, setProcessExpression] = useState(formExpression);
  const [validData, setValidData] = useState({});
  const [lookUpData, setLookUpData] = useState({});

  /**
   * Expression events
   * @param payload
   */
  const handleChangeContext = (payload: any) => {
    const { name, value, rowIndex } = payload;
    let formDataInitDataClone = { ...formDataInitData },
      processExpressionClone = { ...processExpression };

    if (name.split(".").length == 2) {
      let nameArr = name.split(".");

      if (processConfig["__groupPath"][nameArr[0]][0]["recordtype"] === "row") {
        formDataInitDataClone[nameArr[0]][nameArr[1]] = value;
      } else {
        formDataInitDataClone[nameArr[0]][rowIndex][nameArr[1]] = value;
      }
    } else {
      formDataInitDataClone[name] = value;
    }

    ChangeEventInput(
      name,
      {},
      {},
      formDataInitDataClone,
      processConfig,
      processExpressionClone,
      setProcessExpression
    );

    setFormDataInitData(formDataInitDataClone);

    // if (value) {
    //   setValidData((prevState) => ({
    //     ...prevState,
    //     [name]: false,
    //   }));
    // }
  };

  const handleClickContext = (payload: any) => {
    const { name, value, rowIndex } = payload;
    /**
     * State clone to variables
     */
    let formDataInitDataClone = { ...formDataInitData },
      processExpressionClone = { ...processExpression };

    ChangeEventInput(
      name,
      {},
      {},
      formDataInitDataClone,
      processConfig,
      processExpressionClone,
      setProcessExpression
    );

    setFormDataInitData(formDataInitDataClone);
  };

  const handleSubmitContext = async (e: any) => {
    e.preventDefault();
    const valid = validateForm(formDataInitData, processConfig);
    console.log(`formSubmitData`, formDataInitData);

    if (valid) {
      setValidData(valid);
    }

    if (!Object.keys(valid).length) {
      const { data } = await axios.post(`/api/post-process`, {
        processcode: processConfig.metadatacode,
        parameters: formDataInitData,
      });

      if (data.status === "success") {
        notification.success({ message: "Амжилттай хадгалагдлаа" });
        setFormDataInitData({});
      } else {
        notification.error({ message: data.text });
      }
    }
  };

  const handleLookUpData = async (payload: any) => {
    let data = await fetchJson(
      `/api/get-data?metaid=${
        payload.lookupmetadataid
      }&pagingwithoutaggregate=1&criteria=${JSON.stringify(payload.criteria)}`
    );
    delete data.aggregatecolumns;
    delete data.paging;
    data = _.values(data);
    setLookUpData((prevState) => ({
      ...prevState,
      [payload.paramrealpath]: data,
    }));
    return data;
  };

  const setFormDataData = async (payload: any) => {
    setFormDataInitData(payload);
  };

  const contextValues = {
    formDataInitData,
    setFormDataData,
    processConfig,
    handleChangeContext,
    handleClickContext,
    handleSubmitContext,
    validData,
    lookUpData,
    handleLookUpData,
    processExpression,
  };

  return (
    <FormMetaContext.Provider value={contextValues}>
      {children}
    </FormMetaContext.Provider>
  );
};

export default FormMetaContext;
