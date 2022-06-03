import { useContext, useState } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import KhanDrawerLogin from './khanDrawer'
import { useTranslation } from 'next-i18next'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import useToggle from '@customhook/useToggle'

export default function KhanTenderMenu() {
  const { t } = useTranslation('common')
  const [activeBtn, setActiveBtn] = useState(0)
  return (
    <div className="max-w-kbcontainer mx-auto mt-5 items-end">
      <div className="w-full flex items-center border-b border-[#E4E4EB] z-10">
        {btn.map((item, index) => (
          <RenderAtom
            key={index}
            item={{ value: item }}
            defaultAtom="button"
            onClick={() => setActiveBtn(index)}
            customClassName={`text-kbportal border-b-2 z-20 mb-0 font-semibold ${
              activeBtn === index ? 'border-kbportal' : 'border-[#E4E4EB]'
            }`}
          />
        ))}
      </div>
      <div className="w-full h-auto border rounded border-kbportal mt-10 p-[30px]">
        {activeBtn === 0 ? (
          <>
            <div className="flex items-center">
              <RenderAtom
                item={{ value: 'fa-solid fa-circle-check' }}
                defaultAtom="icon"
                customClassName={'text-[#04A15A] rounded-full fa-2x'}
              />
              <RenderAtom
                item={{ value: 'Үнийн санал' }}
                defaultAtom="title"
                customClassName={'text-kbportal text-xl ml-4'}
              />
            </div>
            <div className="w-full h-1/3 grid grid-cols-2 gap-3 my-[30px]">
              {price.map((item, index) => (
                <div
                  className="w-[510px] relative  border rounded text-[#000000]/20 py-3 px-4 z-10"
                  key={index}
                >
                  <p className="absolute left-[18px] top-[-10px] bg-white z-20 text-[#19181B] font-semibold text-[12px]">
                    {item.title}
                  </p>
                  <RenderAtom
                    item={{ value: item.text }}
                    defaultAtom="text"
                    customClassName={'font-semibold text-[17px] text-black'}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between w-full h-[374px]">
              <div className="w-[510px] h-[338px]">
                <RenderAtom
                  item={{ value: 'Оролцогчийн санал' }}
                  defaultAtom="title"
                  customClassName={'text-[17px] font-semibold'}
                />
                <div className="border-dashed border border-kbportal w-full mt-3 h-[338px] rounded-md p-14 flex items-center justify-evenly">
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className="w-[100px] h-[100px] border-[8px] rounded-full border-kbportal flex flex-col items-center justify-center">
                      <RenderAtom
                        item={{ value: '100%' }}
                        defaultAtom="title"
                        customClassName={'text-[17px] font-semibold'}
                      />
                      <RenderAtom
                        item={{ value: 'complete' }}
                        defaultAtom="text"
                        customClassName={'text-3 text-#[19181B]'}
                      />
                    </div>
                    <div className="flex flex-col items-center mt-6">
                      <RenderAtom
                        item={{ value: 'Project1.pdf' }}
                        defaultAtom="text"
                        customClassName={'text-[15px]'}
                      />
                      <RenderAtom
                        item={{ value: '5.8 Mbs · 0 seconds ' }}
                        defaultAtom="text"
                        customClassName={'text-#19181B opacity-60'}
                      />
                      <RenderAtom
                        item={{ value: t('kb_0023') }}
                        defaultAtom="button"
                        customClassName={
                          'bg-[#F9F9F9] text-black text-[13px] px-[37px] py-[6px]'
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[510px] h-[338px]">
                <RenderAtom
                  item={{
                    value:
                      'Мэдээллийн аюулгүй байдлын дотоод үйл явц, журам, стандарт',
                  }}
                  defaultAtom="title"
                  customClassName={'text-[17px] font-semibold'}
                />
                <div className="border-dashed border border-kbportal w-full mt-3 h-[338px] rounded-md p-14 flex items-center justify-evenly">
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className="w-[100px] h-[100px] border-[8px] rounded-full border-kbportal flex flex-col items-center justify-center">
                      <RenderAtom
                        item={{ value: '100%' }}
                        defaultAtom="title"
                        customClassName={'text-[17px] font-semibold'}
                      />
                      <RenderAtom
                        item={{ value: 'complete' }}
                        defaultAtom="text"
                        customClassName={'text-3 text-#[19181B]'}
                      />
                    </div>
                    <div className="flex flex-col items-center mt-6">
                      <RenderAtom
                        item={{ value: 'Project1.pdf' }}
                        defaultAtom="text"
                        customClassName={'text-[15px]'}
                      />
                      <RenderAtom
                        item={{ value: '5.8 Mbs · 0 seconds ' }}
                        defaultAtom="text"
                        customClassName={'text-#19181B opacity-60'}
                      />
                      <RenderAtom
                        item={{ value: t('kb_0023') }}
                        defaultAtom="button"
                        customClassName={
                          'bg-[#F9F9F9] text-black text-[13px] px-[37px] py-[6px]'
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : activeBtn === 1 ? (
          <div className="w-full h-auto ">
            <div className="flex items-center">
              <RenderAtom
                item={{ value: 'fa-solid fa-circle-2' }}
                defaultAtom="icon"
                customClassName={'fa-2xl text-[#D4AD68]'}
              />
              <RenderAtom
                item={{ value: 'Компанийн ерөнхий мэдээлэл' }}
                defaultAtom="title"
                customClassName={'text-kbportal font-semibold text-xl ml-4'}
              />
            </div>
            <div className="flex justify-between mt-[30px]">
              {company.map((item, index) => (
                <div className="w-[510px] relative  border rounded text-[#000000]/20 py-3 px-4 z-10">
                  <p className="absolute left-[18px] font-semibold top-[-10px] bg-white z-20 text-[#19181B] text-[12px]">
                    {item.title}
                  </p>
                  <RenderAtom
                    item={{ value: item.text }}
                    defaultAtom="text"
                    customClassName={'font-semibold text-[17px] text-black'}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-12 mt-[30px]">
              {data.map((item, index) => (
                <div className="w-[510px] h-[338px]">
                  <RenderAtom
                    item={{ value: item }}
                    defaultAtom="title"
                    customClassName={'text-[17px] font-semibold'}
                  />
                  <div className="border-dashed border border-kbportal w-full mt-3 h-[338px] rounded-md p-14 flex items-center justify-evenly">
                    <div className="flex flex-col w-full h-full items-center justify-center">
                      {index > 3 ? (
                        <div className="flex flex-col items-center">
                          <i className="fa-thin fa-cloud-arrow-up fa-6x text-kbportal"></i>
                          <RenderAtom
                            item={{
                              value: 'Та өөрийн илгээх файлаа оруулна уу.',
                            }}
                            defaultAtom="text"
                            customClassName={'text-[15px]'}
                          />
                          <RenderAtom
                            item={{
                              value:
                                'JPG, PNG or PDF, таны оруулах файлын хэмжээ 10MB.',
                            }}
                            defaultAtom="text"
                            customClassName={'text-3 opacity-60'}
                          />
                          <RenderAtom
                            item={{ value: 'Файл оруулах' }}
                            defaultAtom="button"
                            customClassName={
                              'text-white bg-kbportal px-4 py-[6px] mt-6'
                            }
                          />
                        </div>
                      ) : (
                        <>
                          <div className="w-[100px] h-[100px] border-[8px] rounded-full border-kbportal flex flex-col items-center justify-center">
                            <RenderAtom
                              item={{ value: '100%' }}
                              defaultAtom="title"
                              customClassName={'text-[17px] font-semibold'}
                            />
                            <RenderAtom
                              item={{ value: 'complete' }}
                              defaultAtom="text"
                              customClassName={'text-3 text-#[19181B]'}
                            />
                          </div>
                          <div className="flex flex-col items-center mt-6">
                            <RenderAtom
                              item={{ value: 'Project1.pdf' }}
                              defaultAtom="text"
                              customClassName={'text-[15px]'}
                            />
                            <RenderAtom
                              item={{ value: '5.8 Mbs · 0 seconds ' }}
                              defaultAtom="text"
                              customClassName={'text-#19181B opacity-60'}
                            />
                            <RenderAtom
                              item={{ value: 'Цуцлах' }}
                              defaultAtom="button"
                              customClassName={
                                'bg-[#F9F9F9] text-black text-[13px] px-[37px] py-[6px]'
                              }
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-[510px] h-auto bg-[#FCF1D2] flex items-start px-4 py-[6px] mt-3">
                <i
                  className="fa-light fa-circle-exclamation text-[#D9A823] h-[35%] fa-xs mr-2"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '20px',
                  }}
                ></i>
                <RenderAtom
                  item={{
                    value:
                      'Уг баримт бичгийг урилга зарласан өдрийн хугацаанд авч хавсаргана. Оролцогч компани нь охин компани бол уг тодорхойлолтыг Толгой компанийн нэр дээр авахыг анхаарна уу.',
                  }}
                  defaultAtom="text"
                  customClassName={' text-4 text-[#D9A823] h-full'}
                  // customStyle={{}}
                />
              </div>
            </div>
          </div>
        ) : activeBtn === 3 ? (
          <div className="w-full h-auto">
            <div className="flex items-center">
              <RenderAtom
                item={{ value: 'fa-solid fa-circle-3' }}
                defaultAtom="icon"
                customClassName={'fa-2xl text-[#D4AD68]'}
              />
              <RenderAtom
                item={{ value: 'Гуравдагч талын асуулгын хариулт' }}
                defaultAtom="text"
                customClassName={'text-xl font-semibold text-kbportal ml-4'}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px] mt-[30px]">
              {question.map((item, index) => (
                <div className="w-full rounded border border-black/20 px-3 py-4 relative z-10">
                  <p className="absolute left-[18px] top-[-10px] bg-white z-20 text-[#19181B] font-semibold text-[12px]">
                    {item.title}
                  </p>
                  <RenderAtom
                    item={{ value: item.text }}
                    defaultAtom="text"
                    customClassName={'text-[17px] font-semibold '}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
const btn = [
  'Үнийн санал',
  'Компаны мэдээлэл',
  'Санхүүгийн тайлан',
  'Гуравдагч талын асуумж',
]
const price = [
  {
    title: 'Нэгж',
    text: '38,000',
  },
  {
    title: 'Нийт үнийн санал',
    text: '100,000,000₮',
  },
  {
    title: 'Хүн өдөр',
    text: '278',
  },
]
const company = [
  {
    title: 'Компанийн нэр',
    text: 'Төгөлдөр ХХК',
  },
  {
    title: 'Эзэмшигчийн нэр',
    text: 'Төгөлдөр',
  },
]
const data = [
  'Улсын бүртгэлийн гэрчилгээний хуулбар',
  'Татвар төлөгчийн хуулбар',
  'Компанийн танилцуулга',
  'Санхүүгийн чадавхийн үнэлгээ',
  'МТА-ны ААНБ-ын тодорхойлолт',
  'ЗГХАШШГЕГ, ШГА-ны тодорхойлолт',
]
const question = [
  {
    title: 'Нэгж',
    text: '38,000',
  },
  {
    title: 'Нийт үнийн санал',
    text: '100,000,000₮',
  },
  {
    title: 'Нэгж',
    text: '38,000',
  },
  {
    title: 'Нийт үнийн санал',
    text: '100,000,000₮',
  },
  {
    title: 'Нэгж',
    text: '38,000',
  },
  {
    title: 'Нийт үнийн санал',
    text: '100,000,000₮',
  },
]
