import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  theme: {
    colors: {
      black: {
        DEAFAULT: '#061322'
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      gray: {
        'dark': "#394256",
        'middle': '#8591AA',
        "light": "#F3F5F7",
      },
      purple: {
        'primary': '#7400B7',
        'primary-hover': '#8800D6',
        'primary-disabled': '#F9F2FD',
        'primary-disabled-text': '#A470C2',
        'primary-focus': '#6700A3',
        'primary-outlined-disabled': '#EBD8F8',
        'primary-focus-light': '#F5E9FC',
      },
      blue: {
        'graphic-element': '#00A0D0',
        'middle': '#BDEFFF',
        'text': '#007AA3',
      },
      red: {
        DEAFULT: '#FF3F3F'
      }
    }
  }
});
