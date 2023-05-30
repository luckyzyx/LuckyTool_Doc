---
title: StatusBar
icon: page
order: 2
# 设置作者
# author: 忆清鸣、luckyzyx
# 设置写作时间
# date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 模块功能
# 一个页面可以有多个标签
tag:
  - 模块功能
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## StatusBarFunction

- Double-click the status bar to lock the screen
- Remove and click on the status bar to return to the top white list

## StatusBarClock

### Default

- Do not modify the clock display

### Preset

- Date Display Seconds Dual Clock Day
- Dual display
- Text alignment within the clock
- Change font size
- Use user fonts

### Customize

- Custom clock format
- Support Chinese lunar calendar display
- Support time and time display
- Text alignment within the clock
- Use user fonts

### Clock Known Issues

- A single line of clock text may be skewed up or down -> Set text alignment to center

## StatusBarNetworkSpeed

- Set the network speed to refresh every second
- Support single-line and double-line display
- Remove rear unit(/s)
- Remove text spaces
- Use user fonts
- Set font size

### Network Speed Known Issues

When using dual-line network speed, the network speed in the status bar control center is 0

## StatusBar Notify

- Remove some notifications
- Allow long press notifications to be modifiable
- Remove notification management restrictions

## StatusBar Icon

### WiFiIcon

- remove data arrow

## MobileDataIcon

- Remove data arrow
- Remove network type
- Hide non-network cards
- Hide sim no service

### BluetoothIcon

- Hide icon when not connected

## OtherIcon

- Remove high performance
- Remove payment protection
- Remove the green dot privacy reminder in the upper right corner
- Remove Wi Fi Hotspot Green Capsule

## IconState

- Center icon vertically

## StatusBarControlCenter

### Clock

- Show seconds
- Red one display mode
- Fix colon
- Remove date comma
- Show lunar calendar
- Fix date display width

### Notification Center

- Notifications aligned on both sides
- Enable notification importance classification

### UI Components

- force show media player
- Set auto-brightness button mode
- remove my device
- remove multi-user icon
- Remove control center VPN connection information

## StatusBarTile

### Tile Long Press Event

- Long press WiFi to open the page
- Long press mobile data to open the page
- Long press the WiFi hotspot to open the page
- Long press Bluetooth to open the page
- Long press the screenshot to open the page
- Long press Do Not Disturb to open the page

### Tile Layout

- The number of rows and columns in the horizontal and vertical screen state
- Expand the number of rows and columns in the unexpanded state
- Fix tile alignment on both sides

### Module Built In Tiles

#### Jump related

- Charging Test
- Process Management
- Game Assistant
- High performance mode

#### Function related

- Display Refresh Rate
- Global DC
- High Brightness Mode
- Touch Sampling Rate
- Very Dark Mode
- 5G Switch

#### Self Starting Problem

**Need to add system interface scope**  
In addition to the display refresh rate, global DC and other functions support the lock screen to unlock and start automatically
The scope needs to be restarted after opening the tile. Similarly, the same is true for disabling self-starting

## Tiles Known Issues

- When the **vertical** screen is **not expanded**, the left and right sides are **not aligned** --> reapply the theme

## StatusBarLayout

### LayoutMode

- Default
- Clock Center Alignment

### ScreenCompatibilityMode

- Ignore screen digging
- Support for modifying margins on both sides

## StatusBarBattery

### BatteryIcon

- Remove battery percentage sign
- Use user fonts
- Change font size

### BatteryInformationNotification

- Battery information display mode (display only when charging)
- Display charging technology and other information when charging
- Simple display mode
- Display data update time

### Battery Notification Known Issues

- There is still a notification after turning off the battery information notification --> After waiting for the data to be updated, it will be automatically removed, or the scope will be restarted by itself
