---
title: Day05 控制台搭建
index: false
icon: laptop-code
category:
  - 开发笔记
  - 学习记录
---


## 使用 Docker 搭建 dubbo admin

### **第一步：拉取镜像文件**

```
docker pull apache/dubbo-admin
```

默认拉去的是latest 最新版本，支持jdk8+dubbo3.x

![截图](ba245c405d37e783afc3546107ba6281.png)

检查镜像是否存在

![截图](c2cbbe0045c1416b4655b484fbc15c07.png)

<br/>

### **第二步：创建启动配置文件目录，并且编写配置文件，配置zookeeper的位置**

```
cd /root
mkdir -p  dubbo-admin-my/conf
```

<br/>

![截图](6a3fb1fa67cd9763e9338ca10a9fe14b.png)

![截图](46c6e0166633b94f47f2fd6d69bda54b.png)

<br/>

### **第三步：后台启动，映射主机的虚拟目录到主机中的实际目录**

```
docker run -d --rm -v /root/dubbo-admin-my/conf:/config -p 38080:38080 apache/dubbo-admin
```

访问地址，启动dubbo服务提供者，检查是否启动成功，以及功能是否正常

![截图](defde8eac0fd318b8105341503bcdf77.png)

![截图](f15859cff2b4e827b53733751e8ff6ab.png)