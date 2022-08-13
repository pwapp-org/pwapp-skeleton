import { env, argv } from 'node:process'
import { buildHelper } from '@espoal/build'

// React
const versioning = true
let isProd = false
if ( argv.includes('prod') ) {
  env.NODE_ENV = 'production'
  isProd = true
}

console.log(`Starting ${isProd ? 'production' : 'dev' } build`)

// App

await buildHelper({
  name: '@main/app',
  entryPoints: ['main/app/client.mjs'],
  outDir: 'public/',
  isProd
})

// Vendors

await buildHelper({
  name: '@vendors/react',
  entryPoints: ['vendors/react/react.mjs'],
  outDir: 'public/vendors/',
  isProd,
  versioning
})
