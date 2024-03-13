<script lang="ts" setup>
const editor = ref();

const getContent = () => {
  const content = editor.value.getHTML();

  alert("콘솔을 확인해주세요");

  console.log(content);
};

onMounted(() => {
  editor.value = toastEditorInstance(
    editor.value,
    "wysiwyg",
    false,
    false,
    "50vh"
  );
});
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    "
  >
    <div style="display: flex; margin-bottom: 3rem; flex-direction: column">
      <h1>toast editor</h1>

      <div style="display: flex; justify-content: center">
        <button @click="getContent">작성 내용 가져오기</button>
      </div>
    </div>

    <div style="display: flex">
      <div ref="editor"></div>
    </div>
  </div>
</template>

<style scoped></style>
