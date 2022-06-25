// Small devices (landscape phones, 576px and up)
//@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
//@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
//@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
//@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
//@media (min-width: 1400px) { ... }

export default {
  up(size) {
    const sizes = {
      xl: "1400px",
      lg: "1199.98px",
      md: "991.98px",
      sm: "767.98px",
      xs: "575.98px",
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px",
      xl: "1400px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
