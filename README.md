## Next 13 Demo

Build a basic note-taking app with Next.js 13 and Pocketbase. 

### Setup

1. Create a new Next.js app:
`npx create-next-app@latest --ts`

2. Locate the provided Pocketbase executables or Download Pocketbase from [pocketbase.io](pocketbase.io)
3. Navigate to the unzipped directory that suites your OS
`cd linux_pocket` or `cd windows_pocket` or `cd macOS_pocket` or `cd macOS_pocket_ARM`
4. Start Pocketbase:
`./pocketbase serve`
5. Open the [Admin UI](http://127.0.0.1:8090/_/), create collection, and update security rules to allow read/write access. 
6. Add `experimental: { appDir: true }` to `next.config.js`