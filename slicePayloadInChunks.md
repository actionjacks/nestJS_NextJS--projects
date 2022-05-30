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
