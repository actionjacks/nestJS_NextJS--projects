```
Url is valid
function validUrl (urlToCheck: string): boolean {
      try {
       Boolean(new URL(urlToCheck))
     } catch {
      return false
     }
     return true
   }
```
