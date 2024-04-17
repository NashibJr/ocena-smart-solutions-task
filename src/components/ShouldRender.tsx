import React, { PropsWithChildren } from "react";

type IProps = PropsWithChildren & {
  visibility: boolean;
};

const ShouldRender: React.FC<IProps> = ({ visibility, children }) => {
  return <>{visibility ? <div>{children}</div> : <></>}</>;
};

export default ShouldRender;
