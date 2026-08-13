import { useState } from 'react';
import { Hero } from './components/Hero';

import { PasscodeScreen } from './components/PasscodeScreen';
import { WrongPasscodeScreen } from './components/WrongPasscodeScreen';
import { GiftPromptScreen } from './components/GiftPromptScreen';
import { LetterScreen } from './components/LetterScreen';
import { BirthdayGreetingScreen } from './components/BirthdayGreetingScreen';
import { MemoriesScreen } from './components/MemoriesScreen';
import { BookScreen } from './components/BookScreen';
import { ScrapbookGallery } from './components/ScrapbookGallery';

export type AppState = 'hero' | 'passcode' | 'wrong' | 'gift' | 'unlocked';

function App() {
  const [appState, setAppState] = useState<AppState>('hero');

  return (
    <main>
      {appState === 'hero' && <Hero onUnlockPrompt={() => setAppState('passcode')} />}
      
      {appState === 'passcode' && (
        <PasscodeScreen 
          onSuccess={() => setAppState('gift')} 
          onFailure={() => setAppState('wrong')} 
        />
      )}
      
      {appState === 'wrong' && (
        <WrongPasscodeScreen 
          onRetry={() => setAppState('passcode')} 
        />
      )}
      
      {appState === 'gift' && (
        <GiftPromptScreen 
          onAccept={() => setAppState('unlocked')} 
        />
      )}
      
      {appState === 'unlocked' && (
        <>
          <LetterScreen />
          <BirthdayGreetingScreen />
          <MemoriesScreen />
          <div className="w-full min-h-screen flex items-center justify-center bg-gray-600 py-8 overflow-hidden">
            <div className="scale-110 md:scale-125 transform-gpu">
              <BookScreen />
            </div>
          </div>
          <ScrapbookGallery />
        </>
      )}
    </main>
  );
}

export default App;
