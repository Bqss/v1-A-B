"use client"
import cc from '@/util'
import { Component, useRef, MutableRefObject, forwardRef, useEffect, useState } from "react"
// @ts-ignore
import { useWindowSize, useMediaQuery } from "@uidotdev/usehooks";
import { ElementType, FC, ReactNode, memo, useContext, createContext, Dispatch, SetStateAction, Fragment } from 'react'
import { render } from 'react-dom';
import classNames from 'classnames';
import { NumberLiteralType } from 'typescript';

interface TabsProps {
  activeTab: number,
  setActiveTab: Dispatch<SetStateAction<number>>,
  children?: ReactNode,
  className?: string,
}

interface PanelProps {
  value: number,
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

const TabsContext = createContext<Partial<TabsProps>>({ activeTab: 0, setActiveTab: (value) => { } })
const ListContext = createContext<{ slider: MutableRefObject<any> | null }>({ slider: null });




const Tabs: TabsType = ({ activeTab = 0, setActiveTab, children, className = "" }) => {
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cc(className, 'flex flex-col md:flex-row items-start gap-10')}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}


const Panels: FC<TabPanels> = ({ children, className = '' }) => {
  return (
    <div className={classNames(className)} >
      {children}
    </div>
  )
}
const Panel: FC<PanelProps> = ({ children, className = '', value }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab != value) return null;
  return (
    <div className={cc(className, 'h-full text-sm')}>
      {children}
    </div>
  )
}

const List: FC<ListProps> = ({ children, className = '' }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const listRef = useRef<HTMLUListElement>(null);
  const size = useWindowSize();
  const isbig = useMediaQuery("only screen and (min-width : 768px)");
  const [tabs, setTabs] = useState<Array<{width : number, height: number, top : number, left: number}>>([]);
  const sliderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (listRef.current) {
      setTimeout(() => {
        const widths = Array.from(listRef?.current?.children||[] ).map((children ) => {
          const ch  = children as HTMLElement
          return {
            width : ch.offsetWidth,
            height : ch.offsetHeight,
            left : ch.offsetLeft,
            top : ch.offsetTop,
          }
        })

        setTabs(widths);
      }, 100)
    }
  }, [listRef, isbig, size])

  useEffect(() => {
    if(listRef.current && sliderRef.current  ){

      const activeT = tabs[activeTab||0];
      const indicator =  sliderRef.current;
      if(!tabs[activeTab||0]?.width) return 
      if(isbig){
        indicator.style.height = `${activeT.height}px`;
        indicator.style.width = `${2.5}px`
        indicator.style.transform = `translate(0,${activeT.top}px)`
      }else{
        indicator.style.width =`${activeT.width}px`;
        indicator.style.height = `${2.5}px`;
        indicator.style.transform = `translate(${activeT.left}px, 0)`
      }

    }
  },[listRef, sliderRef, isbig, activeTab, tabs])


  return (

    <div className='relative flex flex-col-reverse  md:flex-row h-full w-full md:w-auto '>
      <div className='relative rounded-lg overflow-hidden bg-darkslate h-[2.5px] md:w-[2.5px] md:h-auto '>
        <span ref={sliderRef} className='absolute rounded-lg bg-themecolor  inline-block transition-transform duration-300 ease-out' ></span>
      </div>
      <ul className={cc(className, "relative flex md:flex-col w-full overflow-x-auto scrollbar_hidden ")} ref={listRef} >{children}</ul>
    </div>

  )
}

const Tab: FC<TabProps> = ({ children, value, className = '' }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <li className={cc(className, 'w-full')} >
      <button className={cc('px-8 py-2 w-full text-xs sm:text-sm text-left hover:bg-themecolor/10 hover:text-themecolor transition duration-100', (activeTab == value ? "bg-themecolor/10 text-themecolor" : ''))} onClick={setActiveTab && (() => setActiveTab(value))}>
        {children}
      </button>
    </li>
  )
}



Tabs.Panel = memo(Panel);
Tabs.Panels = Panels;
Tabs.List = memo(List);
Tabs.Tab = Tab;
export default Tabs 