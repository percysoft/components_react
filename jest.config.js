module.exports = {
  setupFiles: ["./jest.setup.js","jest-localstorage-mock"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
   transform: {
       "^.+\\.tsx?$": "ts-jest"
   },
   testMatch: [
     '**/src/**.(test|spec).(jsx|tsx|js|ts)'
   ],
   moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "verbose": true,
  "testURL": "http://localhost/",
};
