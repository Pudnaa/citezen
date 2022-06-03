import _ from "lodash";
import useProcessHeartList from "./useProcessHeartList";

const useGetItemFromHeartList = (id: string) => {
  const { heartList, heartMutate } = useProcessHeartList();

  const itemInList = _.find(heartList, { id: id });

  return itemInList;
};

export default useGetItemFromHeartList;
