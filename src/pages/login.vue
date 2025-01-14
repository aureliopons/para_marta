<template>
  <f7-page name="login" class="login-base">

        <f7-navbar title="Login" back-link="Back"></f7-navbar>
        
        <f7-block class="text-align-center" style="margin-bottom:100px">          
          <img src="/assets/img/logo_vamoh_inverso.png" alt="Vamoh Logo" class="login-logo">
        </f7-block> 

        <f7-block>
          <f7-button raised large fill href="/login_user_email/" class="margin-bottom">Iniciar Sesión</f7-button>
          <f7-button raised large href="/login_user_email/" bg-color="white">Regístrate</f7-button>
        </f7-block>

        <f7-block class="text-align-center" text-color="white">
          O
        </f7-block>

        <f7-block>
          <f7-button icon-f7="logo_facebook" raised large @click="" bg-color="white" class="margin-bottom">&nbsp;Inicia con Facebook</f7-button>
          <f7-button icon-f7="logo_google" raised large @click="" bg-color="white"  class="margin-bottom">&nbsp;Inicia con Google</f7-button>
        </f7-block>
        
        <f7-block-footer class="text-align-center white">
            Al registrarte aceptas la política de privacidad<br>y los términos de uso
        </f7-block-footer>
  </f7-page>
</template>

<style scoped>
.login-base { 
  background: #ccc url('/assets/img/login_screen.png') center center no-repeat!important; 
  background-size: cover!important;
}

.login-base::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 50% dark overlay */
  z-index: 1;
}

.login-base > * {
  position: relative;
  z-index: 2;
}

.login-logo {
  max-width: 100%;
  height: auto;
}
</style>