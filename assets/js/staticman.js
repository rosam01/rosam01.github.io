<!DOCTYPE html>
<html lang="en">
  <!-- Beautiful Jekyll | MIT license | Copyright Dean Attali 2020 -->
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>The Urban Monk</title>
  
  
  <meta name="author" content="Martin Rosa">
  
  
  

  <link rel="alternate" type="application/rss+xml" title="The Urban Monk - Gathers resources to help people in their search for inner peace." href="https://rosam01.github.io/feed.xml">

  

  

  


  
    
      
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


    
      
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">


    
      
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">


    
      
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">


    
  

  
    
      <link rel="stylesheet" href="/assets/css/bootstrap-social.css">
    
      <link rel="stylesheet" href="/assets/css/main.css">
    
  

  

  

  <!-- Facebook OpenGraph tags -->
  

  
  <meta property="og:title" content="The Urban Monk">
  

   
  <meta property="og:description" content="(function ($) { var $comments = $('.js-comments'); $('#new_comment').submit(function () { var form = this; $(form).addClass('disabled'); var endpoint = 'https://staticman3.herokuapp.com/v3/entry/github/'; var repository = ''; var branch = ''; $.ajax({ type: $(this).attr('method'), url: endpoint + repository + '/' + branch + '/comments', data: $(this).serialize(), contentType: 'application/x-www-form-urlencoded', success: function (data) { $('#comment-form-submit').addClass('hidden'); $('#comment-form-submitted').removeClass('hidden');...">
  


  <meta property="og:type" content="website">

  
  <meta property="og:url" content="https://rosam01.github.io/assets/js/staticman.js">
  <link rel="canonical" href="https://rosam01.github.io/assets/js/staticman.js">
  

  
  <meta property="og:image" content="https://rosam01.github.io/assets/img/pray256.png">
  


  <!-- Twitter summary cards -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@">
  <meta name="twitter:creator" content="@">

  
  <meta name="twitter:title" content="The Urban Monk">
  

  
  <meta name="twitter:description" content="(function ($) { var $comments = $('.js-comments'); $('#new_comment').submit(function () { var form = this; $(form).addClass('disabled'); var endpoint = 'https://staticman3.herokuapp.com/v3/entry/github/'; var repository = ''; var branch = ''; $.ajax({ type: $(this).attr('method'), url: endpoint + repository + '/' + branch + '/comments', data: $(this).serialize(), contentType: 'application/x-www-form-urlencoded', success: function (data) { $('#comment-form-submit').addClass('hidden'); $('#comment-form-submitted').removeClass('hidden');...">
  

  
  <meta name="twitter:image" content="https://rosam01.github.io/assets/img/pray256.png">
  

  

  

</head>


  <body>

    

  
    <nav class="navbar navbar-expand-md navbar-light fixed-top navbar-custom "><a class="navbar-brand" href="https://rosam01.github.io/">The Urban Monk</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="main-navbar">
    <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/notes">Notes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/talks">Talks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/books">Books</a>
          </li></ul>
  </div>

  
    <div class="avatar-container">
      <div class="avatar-img-border">
        <a href="https://rosam01.github.io/">
          <img alt="Navbar avatar" class="avatar-img" src="/assets/img/pray256.png" />
        </a>
      </div>
    </div>
  

</nav>


    <!-- TODO this file has become a mess, refactor it -->




<div class="intro-header"></div>



<div class="container-md" role="main">
  <div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      (function ($) {
  var $comments = $('.js-comments');

  $('#new_comment').submit(function () {
    var form = this;

    $(form).addClass('disabled');

    var endpoint = 'https://staticman3.herokuapp.com/v3/entry/github/';
    var repository = '';
    var branch = '';

    $.ajax({
      type: $(this).attr('method'),
      url: endpoint + repository + '/' + branch + '/comments',
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#comment-form-submit').addClass('hidden');
        $('#comment-form-submitted').removeClass('hidden');
        $('.page__comments-form .js-notice').removeClass('notice--danger');
        $('.page__comments-form .js-notice').addClass('notice--success');
        showAlert('success');
      },
      error: function (err) {
        console.log(err);
        $('#comment-form-submitted').addClass('hidden');
        $('#comment-form-submit').removeClass('hidden');
        $('.page__comments-form .js-notice').removeClass('notice--success');
        $('.page__comments-form .js-notice').addClass('notice--danger');
        showAlert('failure');
        $(form).removeClass('disabled');
      }
    });

    return false;
  });

  function showAlert(message) {
    $('.page__comments-form .js-notice').removeClass('hidden');
    if (message == 'success') {
      $('.page__comments-form .js-notice-text-success').removeClass('hidden');
      $('.page__comments-form .js-notice-text-failure').addClass('hidden');
    } else {
      $('.page__comments-form .js-notice-text-success').addClass('hidden');
      $('.page__comments-form .js-notice-text-failure').removeClass('hidden');
    }
  }
})(jQuery);

      
    </div>
  </div>
</div>


    <footer>
  <div class="container-md beautiful-jekyll-footer">
    <div class="row">
      <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
      <ul class="list-inline text-center footer-links"></ul>

      
      <p class="copyright text-muted">
      
        Martin Rosa
        &nbsp;&bull;&nbsp;
      
      2021

      

      
      </p>
      <!-- Please don't remove this, keep my open source work credited :) -->
      <p class="theme-by text-muted">
        Theme by
        <a href="https://beautifuljekyll.com">beautiful-jekyll</a>
      </p>
      </div>
    </div>
  </div>
</footer>

  
    
  
    
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>


  
    
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>


  
    
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


  



  
    <!-- doing something a bit funky here because I want to be careful not to include JQuery twice! -->
    
      <script src="/assets/js/main.js"></script>
    
  






  
  </body>
</html>
