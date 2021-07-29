<template>
  <div class="login">
    <h2 class="title">LOGIN</h2>

    <div class="login-box">
      <form action="form_action.asp" method="get">
        <p><input class="input text-input" placeholder="账户" type="text" name="id" /></p>
        <p><input class="input text-input" placeholder="密码" type="password" name="pwd" /></p>
        <!-- <input type="submit" value="Submit" /> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  width: calc(100vw);
  height: calc(100vh);
  overflow: hidden;

  .title {
    color: "#ff0036";
    text-align: center;
  }

  .login-box {
    width: 50%;
    margin: 0 auto;
  }
}
</style>