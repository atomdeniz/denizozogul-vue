<template>
  <div id="app">
    <header>
      <div class="head-top">
        <a href="#" class="menu-btn"><span></span></a>
        <div class="top-menu">
          <ul>
            <!-- <li>
              <router-link to="/" class="btn">Home</router-link>
            </li> -->
            <li>
              <router-link to="/Contact" class="btn">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="wrapper"><router-view /></div>
  </div>
</template>
