export default {
  plugins: {
    autoprefixer: {},
    "postcss-simple-vars": {
      /**
       * Required since media queries can't use CSS variables.
       * @see https://mantine.dev/styles/responsive/#breakpoints-variables-in-css-modules
       * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
       */
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
};
