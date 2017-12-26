<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
    </ul>
    <div class="tabCon">
      <div v-for='(itemCon,index) in tabContents' v-show=" index == num">{{itemCon}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      tabs: ["分时租赁", "整晚租赁", "整日租赁"],
      tabContents: ["内容一", "内容二", "内容三"],
      num: 1
      }
    },
    methods:{
      tab(index) {
        this.num = index;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #adadad;
}

.hello ul {
  display: flex;
  justify-content:space-around;
}

.hello li{
  width: 2.5rem;
  height: 1rem;
  text-align: center;
}
.tabCon{
  width: 7.5rem;
  height: 7.5rem;
  background-color: #fffaaa;
}
</style>
