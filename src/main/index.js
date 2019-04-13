'use strict'

import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/#upload`
  : `file://${__dirname}/index.html#upload`

function createWindow () {
  /**
   * Initial window options
   */
  const options = ({
    title: '波洞星球COS对象存储管理器',
    show: true,
    height: 563,
    useContentSize: true,
    width: 1000,
    frame: true,
    center: true,
    resizable: false,
    backgroundColor: '#fff',
    transparent: true,
    vibrancy: 'ultra-dark',
    titleBarStyle: 'hidden',
    webPreferences: {
      backgroundThrottling: false, // 是否在窗口进入后台后关掉计时器和动画
      webSecurity: false,
    }
  })

  if (process.platform !== 'darwin') {
    options.frame = false // 非苹果系统要去掉框架，全部自己模拟关闭按钮啥的
    options.backgroundColor = '#3f3c37'
    options.transparent = false // 非苹果系统的窗口透明也没用了
    options.icon = `${__static}/logo.jpg`
  }

  mainWindow = new BrowserWindow(options)

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
  if (process.platform === 'darwin' || process.platform === 'win32') {
    // createTray()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
