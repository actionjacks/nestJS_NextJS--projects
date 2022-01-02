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
