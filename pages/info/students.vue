<template>
  <div>
    <img
      style="width: 100px; height: 100px;"
      src="~/static/p2602596725.webp"
      alt=""
    />
    <h1>学生列表</h1>
    <table border="1">
      <thead>
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in rows" :key="item._id">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button>更新</button>
            <button>删除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <select v-model="curPage">
        <option v-for="n in maxPage" :value="n" :key="n">{{ n }}</option>
      </select>
    </div>
    <div>
      <button @click="first">首页</button>
      <button @click="pre">上一页</button>
      <button @click="next">下一页</button>
      <button @click="last">尾页</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "students"
);
export default {
  computed: {
    ...mapState(["rows", "total", "eachPage", "maxPage"]),
    curPage: {
      get() {
        return this.$store.state.students.curPage;
      },
      set(newVal) {
        this.setCur(newVal);
      }
    }
  },
  watch: {
    curPage() {
      this.getStudentsByPage();
    }
  },
  methods: {
    ...mapMutations(["setCur"]),
    ...mapActions(["getStudentsByPage"]),
    first() {
      if (this.curPage !== 1) {
        this.setCur(1);
      }
    },
    last() {
      if (this.curPage !== this.maxPage) {
        this.setCur(this.maxPage);
      }
    },
    pre() {
      if (this.curPage !== 1) {
        this.setCur(this.curPage - 1);
      }
    },
    next() {
      if (this.curPage !== this.maxPage) {
        this.setCur(this.curPage + 1);
      }
    }
  },
  async asyncData({ store, $axios, app }) {
    await store.dispatch("students/getStudentsByPage");
  }
};
</script>
