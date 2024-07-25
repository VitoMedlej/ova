"use client"
import { useLangContext } from '@/context/Contexts';

const useLanguage = () => {
      const text = (textEn : string, textOther ?: string) => {
        return `${textEn}`
      };
    
      return {text };
}

export default useLanguage