'use client';

import { useRef, useEffect } from 'react';
import ChatInput from '../chatInput/ChatInput';
import TopBar from '../topBar/TopBar';
import { useSetRecoilState } from 'recoil';
import { showBottomDivRef } from '@/recoil/atom/AtomRef';

type ContentContainerProps = {
  children: React.ReactNode;
  pageId?: string;
};

function ContentContainer({ children, pageId }: ContentContainerProps) {
  const messageEndRef = useRef<null | HTMLDivElement>(null);

  const setShowBottomDivRef = useSetRecoilState(showBottomDivRef);

  useEffect(() => {
    setShowBottomDivRef(messageEndRef);
  }, []);

  return (
    <div className="main">
      <TopBar />
      <main className=" relative flex h-full w-full flex-1 flex-col items-stretch overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <div className="relative h-full dark:bg-gray-800">
            <div className="h-full w-full overflow-y-auto">
              <div className="flex flex-col items-center text-sm dark:bg-gray-800">
                {children}
              </div>
              <div
                ref={messageEndRef}
                className="h-32 w-full flex-shrink-0 md:h-48"
              ></div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full border-t bg-white dark:border-white/20 dark:bg-gray-800 
        md:border-t-0 md:border-transparent md:!bg-transparent md:dark:border-transparent"
        >
          <ChatInput chatId={pageId as string} />
        </div>
      </main>
    </div>
  );
}

export default ContentContainer;
