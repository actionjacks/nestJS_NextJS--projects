```
    function sliceIntoChunks (arr: string[]) {
      const chunkSize = 1024000 // 128kb
      const fileByteSize = (arr: string[]) => new Blob(arr).size

      const numberofChunks = Math.ceil(fileByteSize(arr) / chunkSize)
      const chunks = []
      for (let i = 0; i < arr.length; i += numberofChunks) {
        const chunk = arr.slice(i, i + numberofChunks)
        chunks.push(chunk)
      }
      return chunks
    }
```

```
    function sliceIntoChunks (arrayToDivide: string[]): string[][] {
      const fileByteSize = (array: string[]) => new Blob(array).size
      const tempArray = arrayToDivide

      const chunks = []
      const maxChunkSizeInBytes = 1024000 // 128kb
      const bytes: number = fileByteSize(tempArray)

      const numberofChunks = Math.ceil(bytes / maxChunkSizeInBytes)
      const partIndex = Math.ceil(tempArray.length / numberofChunks)

      for (let i = 0; i < numberofChunks; i++) {
        const chunk = tempArray.splice(-partIndex)
        chunks.push(chunk)
      }
      chunks.push(tempArray)

      return chunks
    }
```
