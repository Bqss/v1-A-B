"use client"
import cc from '@/util'
import { ElementType, FC, ReactNode, memo, useContext, createContext, Dispatch, SetStateAction, Fragment } from 'react'

interface TabsProps {
  activeTab: number ,
  setActiveTab: Dispatch<SetStateAction<number>>,
  children?: ReactNode,
  className?: string,
}

interface PanelProps {
  value:number,
  children?: ReactNode,
  className?: string
}


interface TabPanels {
  children?: ReactNode,
  className?: string
}

interface TabProps {
  value: number,
  children: ReactNode,
  className?: string
}

interface ListProps {
  children?: ReactNode,
  className?: string
}


type TabsType = FC<TabsProps> & { Panel: FC<PanelProps>, Tab: FC<TabProps>, List: FC<ListProps>, Panels: FC<TabPanels> }

const TabContext = createContext<Partial<TabsProps>>({ activeTab: 0, setActiveTab: (value) => { } })

const Tabs: TabsType = ({ activeTab, setActiveTab, children, className = "" }) => {
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cc(className)}>
        {children}
      </div>
    </TabContext.Provider>
  )
}



const Panels: FC<TabPanels>  = ({ children, className = '' }) => {
  return (
    <Fragment >
      {children}
    </Fragment>
  )
}
const Panel: FC<PanelProps> = ({ children, className = '', value }) => {
  const { activeTab } = useContext(TabContext);
  if (activeTab != value) return null;
  return (
    <div className={cc(className,'h-full text-sm')}>
      {children}
    </div>
  )
}

const List: FC<ListProps> = ({ children, className = '' }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <div className='flex '>
      <div className=' w-[2px]  rounded-lg bg-darkslate'>
        <span className='w-full rounded-lg bg-themecolor h-[2.5rem] inline-block transition-all duration-300' style={{transform: `translateY(${2.5 * (activeTab||0) }rem)`}}></span>
      </div>
      <ul className={cc(className, "relative flex flex-col ")}>{children}</ul>
    </div>
  )
}

const Tab: FC<TabProps> = ({ children, value, className = '' }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <li className={cc(className, 'min-w-[10rem]')}>
      <button className={cc('px-5 py-2 w-full text-left hover:bg-themecolor/20 hover:text-themecolor transition duration-100',(activeTab == value ? "bg-themecolor/20 text-themecolor":''))} onClick={setActiveTab && (() => setActiveTab(value))}>
        {children}
      </button>
    </li>
  )
}

Tabs.Panel = memo(Panel);
Tabs.Panels = Panels;
Tabs.List = List;
Tabs.Tab = memo(Tab);
export default Tabs 