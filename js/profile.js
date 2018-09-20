// PROFILE COMPONENT

'use strict';

var profile = {
    title: 'DASHBOARD',
    name: 'John Doe',
    career: 'Sales Admin',
    status: false,
    image: 'img/svg/logo.png',
    picture: 'img/svg/profile.png'

};


Vue.component('profile', {
  template: `<div class="profile-container">
              <div class="img-container">
                <img v-bind:src="image">
              </div>
              <h2>{{ title }}</h2>
              <div class="profile-container">
                <img v-bind:src="picture">
              </div>
              <h3>{{ name }}</h3>
              <p>{{ career }}</p>
              <div class="user-status">
                <i v-bind:class="{ active: status }"></i>
                <p v-if="status">ACTIVE</p>
              </div>
            </div>
            `,
  data: function() {
    return profile;
  }
})

var profile = new Vue({
  el: '#profile'
})