// tailwind.config.js
module.exports = {
  corePlugins: {
    textColor: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#0095f6",
    }),
    extend: {
      fontSize: {
        cmd: "17px",
        csm: "14px",
        cxsm: "13px",
        cxxsm: "12px",
      },
      textColor: {
        secondaryGray: "#8e8e8e",
      },
    },
  },
  variants: {
    extend: {},
  },
};
