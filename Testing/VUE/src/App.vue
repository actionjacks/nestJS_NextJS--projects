<template>
  <div id="app">
    <Header/>
    <AddTask/>
    <TaskManager/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import AddTask from './components/AddTask';
import TaskManager from './components/TaskManager';

export default {
  name: 'app',
  components: {
    Header,
    AddTask,
    TaskManager
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
