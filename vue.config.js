const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // should always be multi-word vue/multi-word-component-names 에러 발생
  // 컴포넌트를 만들때 단어의 조합으로 만들어야 할때 해당 규칙을 안지키면 나는 에러
  // 해당 에러를 무시하기위해 아래 코드 추가
  lintOnSave : false
})
