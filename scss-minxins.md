```
@use '~@/styles/mixins/text';

.some-class {
  @include text.scale(14px, 16px, 0.6);
  
    .some-class {
      font-size: 0.9rem;

      @media screen and (max-width: 1186px) {
        font-size: 0.85rem;
      }

      @media screen and (max-width: 1120px) {
        font-size: 0.8rem;
      }

      @media screen and (max-width: 1054px) {
        font-size: 0.75rem;
      } 
	  
//mixin 
$scale-factor: 55 !default;
@mixin scale($min-size, $max-size, $scale) {
  font-size: min(max(calc(#{$scale} * (100vw / #{$scale-factor})), #{$min-size}), #{$max-size});
}
```

```
$min_width: 701px;
$max_width: 1200px;

$x-small_font: 10px;
$small_font: 14px;
$medium_font: 16px;
$large_font: 20px;
$x-large_font: 26px;

:export {
  min-vw: $min_width;
  max-vw: $max_width;

  x-small-font: $x-small_font;
  small-font: $small_font;
  medium-font: $medium_font;
  large-font: $large_font;
  x-large-font: $x-large_font;
}

/**
  helper function
*/
@function strip-unit($value) {
  @return calc($value / ($value * 0 + 1px));
}

/**
Scale text to be responsive based on screen width
  $min_width  Minimal window width (in pixels)
  $max_width  Maximum window width (in pixels)
  $min_font  Minimal font size (in pixels)
  $max_font  Maximum font size (in pixels)
*/
@mixin dynamic($min-vw, $max-vw, $min-font-size, $max-font-size) {
  $u1: unit($min-vw);
  $u2: unit($max-vw);
  $u3: unit($min-font-size);
  $u4: unit($max-font-size);

  @if $u1 == $u2 and $u1 == $u3 and $u1 == $u4 {
    & {
      font-size: $min-font-size;
      @media screen and (min-width: $min-vw) {
        font-size: calc(#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
      }
      @media screen and (min-width: $max-vw) {
        font-size: $max-font-size;
      }
    }
  }
}
```
