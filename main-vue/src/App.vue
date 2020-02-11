<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-sub-menu key="1">
          <span slot="title">
            <a-icon type="user" />
            <span>vue</span>
          </span>
          <a-menu-item key="1-1">
            <router-link to="/">
              home
            </router-link>
          </a-menu-item>
          <a-menu-item key="1-2">
            <router-link to="/blog">
              blog
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <span slot="title">
            <a-icon type="user" />
            <span>qiankun-react</span>
          </span>
          <a-menu-item key="2-1">
            <router-link to="/react/home">
              home
            </router-link>
          </a-menu-item>
          <a-menu-item key="2-2">
            <router-link to="/react/blog">
              blog
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <div>
          <!-- 在主项目View中必须添加挂载子项目的标签 -->
          <div v-html="content">content</div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    mounted() {
      return require('./single-spa-config');
    },
    props: {
			loading: Boolean,
			content: String,
		},
    data() {
      return {
        collapsed: false,
      };
    }
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
