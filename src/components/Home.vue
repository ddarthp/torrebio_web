<template>
  <section>
    <div class="container">
      <div class="background"></div>
      <md-card>
      <md-card-header>
        <div class="logo"><img src="../assets/img/torrebio.png"/></diV>
        <div class="md-title">Please sign in</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label>Torre Id:</label>
          <md-input v-model="torreId" ></md-input>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button  v-on:click="() => { this.$router.push('/' + torreId)}">
              <icon name="exit_to_app"></icon>
              <span >Sign in</span>
          </md-button>
      </md-card-actions>
    </md-card>
    </div>
  </section>
</template>

<script>
import Icon from 'vue-md-icons/src/components/Icon'
export default {
  name: 'Home',
  components: {
    Icon
  },
  data () {
    return {
      torreId: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  background-color: #fff;
  overflow: hidden;
  min-height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .background {
    background-image: url('../assets/img/background.svg');
    position: absolute;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    opacity: .5;
    min-height: calc(100vh - 41px - 56px - 8vh);
    background-repeat: repeat;
    background-position: 50%;
    background-size: cover;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    -o-filter: blur(10px);
    filter: blur(10px);
    margin: -10px;
  }
}
.md-card{
  color:rgba(0,0,0,.8);
  margin-bottom: 20px;
  background-color: #fff;
  text-align: left;
  width: 540px;
  position: relative;
  top: 0;
  .md-button{
        font-size: 14px;
        img{
            float: left;
            height: 16px;
            display: block;
            &.logo{
                width: 23px;
                height: 23px;
                margin-right: 32px,
            }
        }
        &:hover{
            background-color: #cfcfcf;
        }
    }
  .md-field, .md-input{
    border-bottom: .5px solid #74747459;
    color: #74747495;
  }
  .logo{
    width: 100%;
    text-align: right;
  }
  h2{
      font-size: 20px;
      font-weight: 600;
      margin: 0 0 8px 0;
      font-family: "Muli";
      letter-spacing: 0.1px;
      -webkit-font-smoothing: subpixel-antialiased;
  }
  h3{
      font-size: 16px;
      font-weight: 300;
      margin: 0
  }
  ul,li{
      list-style: none;
      padding: 0;
      margin: 0;
  }
  .md-card-actions{
      background: rgb(246, 247, 248);
      height: 56px;
      line-height: 56px;
      color:rgba(0,0,0,.5);
      padding: 0 16px;
      .date {
      width: 75%;
      float: left;
      }
      .options {
          width: 20%;
          float: right;
          margin-top: 8px;
          button {
              float:left;
          }
      }
  }
}
</style>
