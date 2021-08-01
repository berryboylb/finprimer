<nav >
    <div class="logo">
        <img src="{{ asset('images/Finprimer Logo.png') }}">
        <h4 id="title">Finprimer</h4>
    </div>
        <ul class="nav-links"> 
            <li><a href="/"  class="{{ request()->is('/') ? 'active-link' : ''  }}">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
            <div class="link">
                <li><a href="" class="login">Login</a></li>
                <li><a href="" class="signup">Signup</a></li>
            </div>
            
        </ul>
        <div class="burger">
            <div class="line0"></div>
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
</nav>  