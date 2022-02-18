import React, { useEffect } from "react";
import { generateHash } from "@kaiju-ui/system";
import { useTabsContext } from "../TabsContext";
import { TabsItemContainer, TabsItemTrigger } from "./styles";

interface TabsItemProps {
  children: React.ReactNode;
  value: string;
  id?: string;
}

function TabsItem({
  children,
  value,
  id = `trigger-${generateHash()}`,
}: TabsItemProps) {
  const { setTrigger, activeTab, handleTabChange } = useTabsContext();

  useEffect(() => {
    setTrigger((prevState) => [
      ...prevState,
      { id: `trigger-${generateHash()}`, value },
    ]);
  }, [value]);

  return (
    <TabsItemContainer active={activeTab === value}>
      <TabsItemTrigger onClick={() => handleTabChange(value)} value={value}>
        {children}
      </TabsItemTrigger>
    </TabsItemContainer>
  );
}

export default TabsItem;
