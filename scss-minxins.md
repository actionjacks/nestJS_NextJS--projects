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

@use 'sass:math';

@function strip-unit ($value) {
  @return calc($value / ($value * 0 + 1px));
}

/**
Scale text to be responsive based on screen width
  $min_width  Minimal window width (in pixels)
  $max_width  Maximum window width (in pixels)
  $min_font  Minimal font size (in pixels)
  $max_font  Maximum font size (in pixels)
*/

@mixin dynamic ($min-vw, $max-vw, $min-font-size, $max-font-size) {
  $unit-1: math.unit($min-vw);
  $unit-2: math.unit($max-vw);
  $unit-3: math.unit($min-font-size);
  $unit-4: math.unit($max-font-size);

  @if $unit-1 == $unit-2 and $unit-1 == $unit-3 and $unit-1 == $unit-4 {
    font-size: $min-font-size;

    @media screen and (min-width: $min-vw) {
      font-size: calc(#{$min-font-size} + #{strip-unit($max-font-size - $min-font-size)} * ((100vw - #{$min-vw}) / #{strip-unit($max-vw - $min-vw)}));
    }

    @media screen and (min-width: $max-vw) {
      font-size: $max-font-size;
    }
  }
}

```
##use
```
@use 'variables';
@use '~@/styles/mixins/dynamic_font';
    @include dynamic_font.dynamic(variables.$min_width, variables.$max_width, variables.$small_font, variables.$medium_font);
```

```
@function betterClamp($minSize, $maxSize, $minWidth: 480, $maxWidth: 1536) {
// convert to rem
$minSize: $minSize / 16;
$maxSize: $maxSize / 16;
$maxWidth : $maxWidth / 16;
$minWidth : $minWidth / 16;
// do calculations
$slope: ($maxSize - $minSize) / ($maxWidth - $minWidth);
$yAxisIntersection: -$minWidth * $slope + $minSize;
$preferredValue: #{$yAxisIntersection * 1rem} + #{$slope * 100vw};
// output as rem
$minSize: $minSize * 1rem;
$maxSize: $maxSize * 1rem;
@return clamp($minSize, $preferredValue, $maxSize);
}
```

```
/**
Scale text to be responsive based on screen width

  $min_width  Minimal supported window width (in pixels)
  $max_width  Maximum supported window width (in pixels)
  $min_font  Minimal font size that an element can accept (in pixels)
  $max_font  Maximum font size that an element can accept (in pixels)
*/
$min-width: 701px !default;
$max-width: 1200px !default;

@function clamp-calc ($min-font-size, $max-font-size) {
  $slope: ($max-font-size - $min-font-size) / ($max-width - $min-width);
  $y-axis-intersection: -1 * $min-width * $slope + $min-font-size;
  $return-value: clamp(#{$min-font-size}, #{$y-axis-intersection} + #{$slope} * 100vw, #{$max-font-size});
  @return $return-value;
}

@mixin clamp ($min-font-size, $max-font-size) {
  font-size: #{clamp-calc($min-font-size, $max-font-size)};
}
```
