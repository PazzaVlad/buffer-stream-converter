# Convert Node.js Stream to Buffer and vise versa

This util converts Node.js Stream to Buffer or Buffer to Stream.

## Usage

```js
const { streamToBuffer, bufferToStream } = require('buffer-stream-converter')

const buffer = await streamToBuffer(someStream) // Converting Stream to Buffer 

const stream = bufferToStream(someBuffer) // Converting Buffer to Stream

```

## License

MIT