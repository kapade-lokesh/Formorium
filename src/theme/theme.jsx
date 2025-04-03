const theme = {
  button: {
    base: "text-center m-1 px-4 py-2 bg-dark rounded-lg font-semibold transition-all duration-200 ease-in-out",

    variants: {
      solid: "text-white", // Solid text color for solid buttons
      text: "text-dark hover:bg-opacity-90",
      outline: "border-2 text-white border-transparent",
    },

    colors: {
      black: {
        solid: "bg-[#242424]", // Premium black color
        outline: "border-transparent text-[#242424] hover:border-[#242424]",
        text: "text-[#242424] hover:bg-[#242424] hover:text-white",
      },
      red: {
        solid: "bg-[#D32F2F]", // Premium red color
        outline: "border-transparent text-[#D32F2F] hover:border-[#B71C1C]",
        text: "text-[#D32F2F] hover:bg-[#B71C1C] hover:text-white",
      },
      blue: {
        solid: "bg-[#1976D2]", // Premium blue color
        outline: "border-transparent text-[#1976D2] hover:border-[#1565C0]",
        text: "text-[#1976D2] hover:bg-[#1565C0] hover:text-white",
      },
      green: {
        solid: "bg-[#388E3C]", // Premium green color
        outline: "border-transparent text-[#388E3C] hover:border-[#2C6B2F]",
        text: "text-[#388E3C] hover:bg-[#2C6B2F] hover:text-white",
      },
      yellow: {
        solid: "bg-[#FBC02D]", // Premium yellow color
        outline: "border-transparent text-[#FBC02D] hover:border-[#F57F17]",
        text: "text-[#FBC02D] hover:bg-[#F57F17] hover:text-white",
      },
      purple: {
        solid: "bg-[#8E24AA]", // Premium purple color
        outline: "border-transparent text-[#8E24AA] hover:border-[#7B1FA2]",
        text: "text-[#8E24AA] hover:bg-[#7B1FA2] hover:text-white",
      },
    },

    sizes: {
      sm: "text-sm px-2 py-1",
      md: "text-base px-4 py-2",
      lg: "text-lg px-5 py-3",
    },

    fullwidth: "w-full", // Fullwidth style
    disabled: "opacity-50 cursor-not-allowed", // Disabled style
  },

  input: {
    base: "peer block w-56 text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0",
    variants: {
      standard: {
        input:
          "border-b-2 border-gray-300 py-2.5 px-0  dark:text-white dark:border-gray-600 dark:focus:border-blue-500",
        label:
          "absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] transition-all duration-300 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75",
      },
      outline: {
        input:
          "border border-gray-300 rounded-lg py-2 px-3 focus:border-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500",
        label:
          "absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-3 scale-75 top-0 left-3 bg-white dark:bg-gray-900 px-1 origin-[0] transition-all duration-300 ease-in-out peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75",
      },
    },
    sizes: {
      sm: {
        input: "text-xs",
        label: "text-xs",
      },
      md: {
        input: "text-sm py-3",
        label: "text-sm",
      },
      lg: {
        input: "text-lg py-4 w-64",
        label: "text-lg",
      },
    },
    colors: {
      default: {
        input: "text-gray-900 border-gray-300  focus:border-gray-500",
        label: "text-gray-500 peer-focus:text-[#242424]",
      },
      red: {
        input: "text-[#D32F2F] border-red-500 focus:border-red-500",
        label: "text-red-500 peer-focus:text-[#D32F2F]",
      },
      blue: {
        input: "text-[#1976D2] border-blue-500 focus:border-[#1976D2]",
        label: "text-blue-500 peer-focus:text-[#1976D2]",
      },
      green: {
        input: "text-[#388E3C] border-green-500 focus:border-green-500",
        label: "text-green-500 peer-focus:text-[#388E3C]",
      },
      yellow: {
        input: "text-[#FBC02D] border-yellow-500 focus:border-yellow-500",
        label: "text-yellow-500 peer-focus:text-[#FBC02D]",
      },

      purple: {
        input: "text-[#8E24AA] border-purple-500 focus:border-purple-500",
        label: "text-purple-500 peer-focus:text-[#8E24AA]",
      },
    },

    fullwidth: "w-full", // Fullwidth style
    disabled: "opacity-50 cursor-not-allowed", // Disabled style
  },

  checkbox: {
    base: {
      check:
        "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
      label: "",
    },
  },
};

export default theme;
