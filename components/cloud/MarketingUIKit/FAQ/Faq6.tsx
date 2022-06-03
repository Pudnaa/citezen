import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
} from "@components/common/Atom";

export default function Faq6() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("Faq6 config", config);
  // console.log("Faq6 readyDatasrc", readyDatasrc);
  // console.log("Faq6 widgetnemgooReady", widgetnemgooReady);
  // console.log("Faq6 positionConfig", positionConfig);
  return (
    <div className="dark:bg-gray-900">
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto container lg:px-10 xl:px-0">
          <div className="flex justify-center items-center flex-col">
            <div className="text-center flex items-center justify-center">
              <h2 className="text-gray-800 dark:text-white md:text-6xl text-4xl font-black">
                Frequently asked questions
              </h2>
            </div>
            <div className="px-10 lg:px-0 grid lg:grid-cols-2 grid-cols-1 lg:justify-between justify-center items-start md:mt-28 mt-16 lg:gap-x-32 md:gap-y-14 gap-y-7">
              <div className="flex justify-start items-start flex-col">
                <div>
                  <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">
                    How do I use the webber for 3+ members?
                  </h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                  <p>
                    Another writing challenge can be to take the individual
                    sentences in the random paragraph and incorporate a single
                    sentence from that into a new paragraph to create a short
                    story.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <div>
                  <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">
                    What does early access mean
                  </h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                  <p>
                    Another writing challenge can be to take the individual
                    sentences in the random paragraph and incorporate a single
                    sentence from that into a new paragraph to create a short
                    story.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <div>
                  <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">
                    Whats the best way to make the most out of it?
                  </h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                  <p>
                    Another writing challenge can be to take the individual
                    sentences in the random paragraph and incorporate a single
                    sentence from that into a new paragraph to create a short
                    story.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <div>
                  <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">
                    How are enterprise package customers accomodated?
                  </h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                  <p>
                    Another writing challenge can be to take the individual
                    sentences in the random paragraph and incorporate a single
                    sentence from that into a new paragraph to create a short
                    story.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <div>
                  <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">
                    How do I use the webber for 3+ members
                  </h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                  <p>
                    Another writing challenge can be to take the individual
                    sentences in the random paragraph and incorporate a single
                    sentence from that into a new paragraph to create a short
                    story.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-col">
                <div>
                  <h3 className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold tracking-tighter">
                    How do I use the webber for 3+ members
                  </h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-3 text-sm md:text-base leading-normal">
                  <p>
                    Another writing challenge can be to take the individual
                    sentences in the random paragraph and incorporate a single
                    sentence from that into a new paragraph to create a short
                    story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
