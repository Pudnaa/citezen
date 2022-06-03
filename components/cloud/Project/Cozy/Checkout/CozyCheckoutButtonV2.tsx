import { useEffect } from "react";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { useHookForm } from "hooks/use-form";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import useProcessBasketList from "../Basket/useProcessBasketList";
import dayjs from "util/dayjslocale";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function CozyCheckoutButtonV2() {
  const { basketList, basketMutate, totalPrice } = useProcessBasketList();
  const salesorderid = basketList[0]?.salesorderid;
  const { data: session } = useSession();

  const formContext = useHookForm();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      schedule: { deliverydate: null },
      payment: { typeid: null },
    },
  });

  //formContext руу Form-ын мэдээллийг хийх. React даяар ашиглах боломжтой болно.
  useEffect(() => {
    formContext.setFormList({
      cozyCheckout: {
        register,
        setValue,
        handleSubmit,
        control,
        watch,
        errors,
      },
    });
  }, [register, setValue, handleSubmit, control, watch, errors]);

  const onFormSubmit = async (data: any) => {
    console.log("Success! Form data: ", data);

    const myParameters = {
      id: salesorderid,
      orderDate: dayjs().format("YYYY-MM-DD"),
      custUserId: session.sessionCustUserId,
      deliveryContactLastname: data.person.familyname,
      deliveryContactName: data.person.firstname,
      deliveryContactPhone: data.person.mobile,
      deliveryContactPhone2: data.person.phone,
      email: data.person.email,
      deliveryCityId: data.cityid,
      deliveryDistrictId: data.districtid,
      deliveryStreetId: data.streetid,
      deliveryAddress: data.address,
      wfmStatusId: "1642050656876633",
      refPlanDtlId: data.schedule.deliverytimeintervalid,
      sdmSalesOrderPaymentDtl: [
        {
          paymentTypeId: data.payment.typeid,
          paymentDate: dayjs().format("YYYY-MM-DD"),
          amt: totalPrice,
        },
      ],
    };

    console.log("FFFFFFFFFFEEEEEEE", myParameters);
    const { data: ssss } = await axios.post(`/api/post-process`, {
      processcode: "czSalesOrderBookDv_002",
      parameters: myParameters,
    });

    console.log("XXXXXXXXX", ssss);
  };

  const onFormError = (errors: any) =>
    console.log("Error! Form Validate", errors);

  return (
    <>
      <BlockDiv customClassName="" divNumber="CozyCheckoutButtonV2Outer">
        <form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
          <RenderAtom
            item={{
              value: "Худалдан авалт хийх",
              positionnemgoo: {
                atom: {
                  type: "button",
                  className: "",
                  props: {
                    type: "primary",
                    custom: {
                      type: "submit",
                    },
                  },
                },
              },
            }}
            defaultAtom="button"
            customClassName="cursor-pointer w-full text-white hover:text-white bg-cozy text-center flex items-center justify-center py-2 rounded-full uppercase font-semibold hover:brightness-90"
            customStyle={{
              fontSize: "14px",
              lineHeight: "16px",
              height: "50px",
            }}
          />
        </form>
      </BlockDiv>
    </>
  );
}
