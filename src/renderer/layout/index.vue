<template>
  <div class="main-page">
    <div class="cos-title-bar" :class="{ 'darwin': os === 'darwin' }">
      <div class="title-text">波洞星球 COS 存储管理器 - {{ version }}</div>
      <div class="handle-bar" v-if="os !== 'darwin'">
        <Icon class="ope-icon" type="ios-arrow-dropdown"  size="24" @click="minimizeWindow" />
        <Icon class="ope-icon" type="ios-close-circle-outline" size="24" @click="closeWindow" />
      </div>
    </div>

    <div class="main-body">
        <div class="layout">
            <Sider :collapsible="true" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
                <Menu active-name="upload" theme="dark" width="auto" :open-names="['1']">
                    <MenuItem name="upload" :to="{name: 'upload'}">
                            <Icon type="ios-images"></Icon>
                            上传
                    </MenuItem>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-cloud"></Icon>
                            存储
                        </template>
                        <MenuItem name="1-2" :to="{name: 'gallery', params: {slug: 'hogwards/'}}">hogwards/</MenuItem>
                        <MenuItem name="1-3" :to="{name: 'gallery', params: {slug: 'caches/'}}">caches/</MenuItem>
                    </Submenu>
                    <MenuItem name="setting" :to="{name: 'setting'}">
                            <Icon type="ios-settings"></Icon>
                            设置
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '200px', height: '100%', display: 'flex'}">
                <router-view></router-view>
            </Layout>
        </div>
    </div>



    <!-- <Row type="flex" justify="space-between" align="top">
        <Col span="6">col-6</Col>
        <Col span="18">col-18</Col>
    </Row> -->
  </div>
</template>

<script>
import pkg from '@root/package.json'
import { remote } from 'electron'
const { Menu, dialog, BrowserWindow } = remote // 通过remote对象拿到主进程才有的

export default {
    data() {
        return {
            os: process.platform,
            version: pkg.version
        }
    },
    methods: {
        minimizeWindow () {
        const window = BrowserWindow.getFocusedWindow()
        window.minimize()
        },
        closeWindow () {
        const window = BrowserWindow.getFocusedWindow()
        window.close()
        },
    }
};
</script>

<style lang="less">
html, body {
    height: 100%;
    overflow: hidden;
}
*::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
*::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #6f6f6f;
}
*::-webkit-scrollbar-track {
    background-color: transparent;
}
.main-page {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.cos-title-bar {
    position: relative;
    cursor: pointer;
    background: #2d8cf0;
    height: 40px;
    line-height: 40px;
    -webkit-app-region: drag;
    width: 100%;
    color: white;
}
.cos-title-bar .title-text {
    margin-left: 10px;
}
.handle-bar {
    position: absolute;
    -webkit-app-region: no-drag;
    height: 40px;
    line-height: 40px;
    top: 0;
    right: 0;
    display: flex;
}
.handle-bar .ope-icon {
    width: 35px;
    padding: 0 5px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.handle-bar .ope-icon:hover {
    background: #5cadff;
}
.main-body {
    flex: 1;
    overflow: auto;
    height: 100%;
}
</style>
