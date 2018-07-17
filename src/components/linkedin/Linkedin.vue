<template>
  <section>
    <div class="container">
      <div class="background"></div>
      <md-card>
        <md-card-header></md-card-header>
        <md-card-content>
          <div class="logo">
            <img src="../../assets/img/linkedin.png" />
            <span class="spinner"> <img src="../../assets/img/spinner.gif"/></span> <img src="../../assets/img/torrebio.png"/>
          </div>
        </md-card-content>
        <md-card-actions>
          <p> Connecting wait a moment please...</p>
        </md-card-actions>
      </md-card>
    </div>
  </section>
</template>

<script>
import Icon from 'vue-md-icons/src/components/Icon'
import { mapState } from 'vuex'
export default {
  name: 'Linkedin',
  computed: mapState({
    bio: state => state.profile.bio,
    access_token: state => state.profile.access_token
  }),
  components: {
    Icon
  },
  data () {
    return {
      torreId: ''
    }
  },
  methods: {
    linkedin: function () {
      let params = this.$route.query
      if (params.code && params.state) {
        params['redirect_uri'] = 'http://localhost:8080/linkedin/auth'
        let payload = {
          qs: this.jsonQueryString(params)
        }
        console.log(payload)
        this.$store.dispatch('profile/getToken', payload)
      }
    },
    jsonQueryString: function (obj, prefix) {
      let str = []
      let p
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          let k = prefix ? prefix + '[' + p + ']' : p
          let v = obj[p]
          str.push((v !== null && typeof v === 'object')
            ? this.jsonQueryString(v, k)
            : encodeURIComponent(k) + '=' + encodeURIComponent(v))
        }
      }
      return str.join('&')
    }
  },
  created () {
    this.linkedin()
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
    background-image: url('../../assets/img/background.svg');
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
  text-align: center;
  width: 540px;
  position: relative;
  top: 0;
  .md-button{
        font-size: 14px;
        img{
            float: center;
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
    text-align: center;
    img {
      height: 45px;
    }
    .spinner {
      img {
        height: 30px;
        margin: 0 20px;
      }
    }
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
      p {
        width: 100%
      }
  }
}
</style>
