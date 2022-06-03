import { FC, useContext } from "react";
const StepConfirm = () => {
  return (
    <>
      <p className="font-semibold my-3 text-lg text-green-600">Зээлийн хүсэлт амжилттай илгээгдлээ.</p>
      <p className="my-3">Та зээлийн хүсэлтийн хариу иртэл түр хүлээнэ үү.</p>
      <p className="my-3">
        Захиалгын дэлгэрэнгүй хэсэгт БАТАЛГААЖУУЛАХ товч идэвхэжсжэнээр та зээл
        төлөх өдрөө сонгон, 1 удаагийн баталгаажуулалт хийснээр захиалгаа
        зээлээр авах боломжтой болно.
      </p>
      <p className="font-semibold my-3">Санамж:</p>
      <p className="my-3">
        Зээлээр бараа бүтээгдэхүүн авч буй тохиолдолд заавал өөрийн биеэр
        захиалгаа хүлээн авахыг анхаарна уу.
      </p>
    </>
  );
};
export default StepConfirm;
