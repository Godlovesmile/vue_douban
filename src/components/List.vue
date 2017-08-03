<template>
  <div>
    <ul class="list">
      <li class="child-list clearfix" v-for="item in items">
        <!-- left -->
        <div class="pull-left content-left">
          <h2>{{item.title}}</h2>
          <p>{{item.content | subStr}}</p>
          <p class="exhibition">展览</p>
        </div>
        <!-- right -->
        <img class="pull-right img-right" :src="item.image_hlarge" alt="同城活动">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    filters: {
      subStr: function (value) {
        value.replace(/<.+>|\s/, '')
        return value.slice(0, 30)
      }
    }
  }
</script>

<style lang="scss">
  .child-list {
    padding: 3.2rem 1.8rem 1.5rem 0;
    border-bottom: 1px solid #e3e3e3;
    .img-right {
      width: 20%;
      height: 8.678rem;
    }
    .content-left {
      width: 70%;
      margin-left: 1.2rem;
    h2 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }
    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: 1.2rem;
    }
    .exhibition {
      color: #ccc;
      margin-top: 2rem;
    }
  }
}
</style>
