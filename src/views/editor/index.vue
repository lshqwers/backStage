<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="html"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
      @onChange="onChange"
    />
    <div style="margin-top: 20px">{{ html }}</div>
  </div>
</template>
<script>
import Vue from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

export default Vue.extend({
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null, // 编辑器的实例
      html: "<p>hello</p>",
      toolbarConfig: {}, // 工具栏配置
      editorConfig: { placeholder: "请输入内容..." },
      /*
          default 默认模式 - 集成了wangEditor 所有的功能
          simple  简洁模式 - 仅有部分常见功能, 但更加简洁易用
        */
      mode: "default", // or 'simple'
    };
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      // this.html = this.editor;
      /*
          {children: Array(1), operations: Array(3), selection: null, marks: null, isInline: ƒ, …} 
          this.editor返回的是对象,直接赋值没有效果
        */
      // editor.onchange = (html) => {
      //   // 编辑器里的内容
      //   console.log(html, "内容");
      //   this.dialogForm.description = html; // 赋值给自己在data中定义的值
      // };
    },
    onChange() {
      // console.log(this.editor.getText(), "editoreditor", this.editor);
    },
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      // html是设置它的内容
      // this.html = `<p id="pValue"><Strong>模拟 Ajax 异步设置内容 HTML</Strong></p>`;
    }, 1500);
    // 设置html, 异步的方式,要不然设置不上去
    // this.$nextTick(() => {
    //   this.html = `<p id="pValue"><Strong>模拟 Ajax 异步设置内容 HTML</Strong></p>`;
    // });
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
});
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
