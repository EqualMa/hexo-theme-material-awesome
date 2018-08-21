# Material Awesome for Hexo

## WHY Awesome: 

### New Features:

#### 1 Disable Auto Thumbnail

In `vanilla material`, if a post doesn't have thumbnail specified, either `pure color` or `random colors` will be used (decided by `thumbnail ` config in `theme config`). Also, the min-height of thumbnail is 400px.

`Material Awesome` removes the min-height and adds a config `thumbnail.auto`:

If `thumbnail.auto` is true, then thumbnail generates like vanilla, except the min-height. Otherwise, nearly transparent background will be used.

Preview & compare:

![preview-thumbnail](https://i.loli.net/2018/08/22/5b7c3dcf89957.png)



#### 2 Hierarchy Categories

`Material Awesome` show categories in sidebar hierarchically. 

![preview-hierarchy-category](https://i.loli.net/2018/08/22/5b7c3dcf06a51.png)



#### 3 Auto header for archives and categories

![preview-header](https://i.loli.net/2018/08/22/5b7c3dcf32eed.png)



### Fix Bugs:

#### 1 Error when using schema `Isolation `

> https://github.com/viosey/hexo-theme-material/pull/689



#### 2 `dnsprefetch` bug

> https://github.com/viosey/hexo-theme-material/issues/686



## Installation

For traditional ways to install themes, you can follow:

> [material > docs > start](https://material.viosey.com/docs/#/start)

### using git submodule

The recommended way is to use `git submodule`.

```shell
# cd root dir of your site 
git submodule add git@github.com:EqualMa/hexo-theme-material-awesome.git themes/material
git submodule update --init --recursive
```

### **NOTE:**

> **The `_config.yaml` file does not exist in the theme, you need to manually duplicate the `_config.template.yamlfile` and rename it to `_config.yaml`** 


