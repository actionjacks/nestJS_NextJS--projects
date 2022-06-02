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

      const numberOfChunks = Math.ceil(bytes / maxChunkSizeInBytes)
      const partIndex = Math.ceil(tempArray.length / numberOfChunks)

      for (let i = 0; i < numberOfChunks; i++) {
        const chunk = tempArray.splice(-partIndex)

        if (fileByteSize(chunk) > maxChunkSizeInBytes) {
          const newPartIndex = Math.ceil(chunk.length / numberOfChunks)
          const newChunk = chunk.splice(-newPartIndex)
          chunks.push(newChunk)
        }
        if (chunk.length) {
          chunks.push(chunk)
        }
      }
      chunks.push(tempArray)
      return chunks.filter(chunk => chunk.length)
    }
```
```
    function sliceIntoChunks_ (products: string[]): string[][] {
      const MAX_CHUNK_SIZE = 1024000 // 128kb

      let bytesCounter = 0
      let chunkIndex = 0
      const chunks: string[][] = [[]]

      products.forEach((product) => {
        bytesCounter += new Blob([product]).size
        if ((bytesCounter + new Blob([product]).size) >= MAX_CHUNK_SIZE) {
          chunkIndex++
          bytesCounter = 0
          chunks.push([])
        }
        chunks[chunkIndex].push(product)
      })

      return chunks
    }
```
