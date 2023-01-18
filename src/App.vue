<template>
  <main>
    <router-view/>
  </main>
</template>

<style>
body {
  font-family: hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #0a0a2e;
  width: 100%;
}
#app {
  width: 100%;
  display: flex;
  justify-content: center;
}
main {
  width: 60%;
}
a, h2 {
  color: white;
  font-size: 1rem;
  letter-spacing: normal;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
  font-weight: 550;
}
h1 {
  color: white;
  flex-basis: 100%;
  font-size: 2rem;
  font-weight: 550;
  letter-spacing: normal;
  line-height: 1.25;
  word-break: break-word;
}
h3 {
  color: white;
  font-size: 20px;
  word-wrap: break-word;
  position: relative;
  word-break: break-word;
  font-weight: 100;
}
section {
  font-size: .875rem;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.4285714285714286;
  color: #4a5e88;
  font-weight: 550;
}

@media only screen and (max-width: 800px) {
  main {
    width: 100%;
  }
}
</style>
