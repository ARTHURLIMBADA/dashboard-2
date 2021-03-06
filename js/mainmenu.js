// HEADER COMPONENT

'use strict';

var menu = {
    menus: [
    {
      title: 'dashboard',
      link: 'index.html',
      isActive: true
    },
    {
      title: 'workflow',
      link: 'workflow.html',
      isActive: false

    },
    {
      title: 'todo list',
      link: 'todo.html',
      isActive: false

    },
    {
      title: 'messages',
      link: 'messages.html',
      isActive: false
    }
    ]
}
Vue.component('main-menu', {
  methods: {
    changeTheme() {
        $("#theme-changer").on('click', function(){
        $("main").toggleClass('dark');
      });
    }
  },
  template: `
             <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button v-on:click="changeTheme" class="btn btn-outline-success my-2 my-sm-0" type="button" id="theme-changer">Theme</button>
    </form>
  </div>
</nav>
            `,
  data: function() {
    return menu;
  }
});

var menus = new Vue({
  el: '#mainmenu'
})





