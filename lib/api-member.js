import { useMember } from "hooks/use-member";

export default function Member() {
  const memberContext = useMember();
  return memberContext.memberInfo;
}
