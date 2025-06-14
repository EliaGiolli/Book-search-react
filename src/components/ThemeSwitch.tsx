import * as Switch from "@radix-ui/react-switch";

import { useAppDispatch } from '../custom hooks/useAppDispatch';
import { toggleTheme } from '../features/theme/themeReducer';
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect } from 'react';



const ThemeSwitch = () => {

    const theme = useSelector((state:RootState) => state.theme.theme);
    const dispatch = useAppDispatch();

  // Apply theme to <html> tag for Tailwind dark mode
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

	return(
        <>
         <form>
            <div className="flex items-center">
                <label
                    className="pr-4 text-base font-medium text-yellow-300"
                    htmlFor="theme-switch"
                >
                    Theme Switch
                </label>
            <Switch.Root
                className="relative h-[25px] w-[42px] cursor-pointer rounded-full bg-amber-50 shadow-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-amber-400 data-[state=checked]:bg-amber-700"
                id="theme-switch"
                aria-label="toggle light and dark theme"
                onClick={() => dispatch(toggleTheme())}
                checked={theme === 'dark'}
            >
                <Switch.Thumb
                className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-yellow-300 shadow-md transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]"
                />
            </Switch.Root>
            </div>
         </form>
        
        </>
    )
}
export default ThemeSwitch;
