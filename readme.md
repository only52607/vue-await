# vue-await
## 支持在vue3模板中使用Promise结果

## 使用
### 引入依赖
```
npm i vawait --save
```
### 在模板中使用

``` typescript
<script setup lang="ts">
async function getUsername() {
    return (await axios.get("/username")).data
} 
</script>
```

```html
<div> {{ vawait(getUsername()) }} </div>
```