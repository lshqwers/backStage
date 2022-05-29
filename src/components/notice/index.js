import Vue from 'vue';
import Notice from './Notice';
const NoticeContructor = Vue.extend(Notice);
export default function notice(options){
  /*
    title: 'xxx',
    message: 'ooo'
  */
  // 1.实例化
  const instance = new NoticeContructor({
      data: options
  })
  // 2.手动挂载
  instance.$mount();// dom 元素渲染完成
  // 手动挂载到body
  document.body.appendChild(instance.$el);
  return instance
}