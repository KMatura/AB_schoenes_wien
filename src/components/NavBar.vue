<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Folge uns auf</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="ms-5 me-3 fa-brands fa-youtube"></i>
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="me-3 fa-brands fa-facebook"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="me-3 fa-brands fa-instagram-square"></i></a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="#"><i class="me-3 fa-brands fa-twitter"></i></a>
            </li>
          </ul>
          <div>
              <a class="navbar-brand" href="#"><i class="me-3 fa-solid fa-envelope"></i>Newsletter</a>
          </div>
        </div>
      </div>
    </nav>
    

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand text-center" href="#">
        <span class="wien text-uppercase text-danger">Wien</span><br>
        <span class="jetzt text-uppercase text-danger">Jetzt für immer</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link text-danger active" href="#">Sighseeing
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="#">Shopping</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-danger" href="#">Lifestyle & Szene</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>
</template>

<style>
    .wien{
        font-size: 40px;
        letter-spacing: 10px;
        font-weight: bold;
    }
    .jetzt{
        letter-spacing: 0.2rem;
        font-size: 15px;
    }
</style>