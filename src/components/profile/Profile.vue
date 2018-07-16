<template>
<div v-if="bio.person">
  <nav>
    <div class="appBar">
      <div>
        <div class="bio-drawer">
        </div>
        <div class="top-bar">
          <md-toolbar md-elevation="0" class="main-bar">
            <MdButton md-primary><img src="../../assets/img/torrebio.png"/></MdButton>
            <MdButton md-primary><img src="../../assets/img/torreprotocol.png"/></MdButton>
            <MdButton md-primary><img src="../../assets/img/torrejobs.png"/></MdButton>
          </md-toolbar>
          <md-toolbar md-elevation="0" class="about-bar">
            <MdButton md-primary class="about" href="https://torre.co" ><img src="../../assets/img/torreabout.png"/></MdButton>
          </md-toolbar>
        </div>
        <hr class="bar-divider">
        <div  class="menu-bar">
          <md-toolbar md-elevation="0" >
            <MdButton class="menu md-icon-button" v-on:click="toggleMenu()"  md-primary><icon name="menu"></icon></MdButton>
            <img src="../../assets/img/torrebiologo.png"/>
          </md-toolbar>
        </div>
      </div>
    </div>
    <div class="coverBar">
      <MdTabs tabs  md-theme-blueGrey500 class="md-primary" md-alignment="centered">
        <md-tab  v-on:click="() => { this.$SmoothScroll(this.elmId('body')) }" id="tab-profile"  class=" md-theme-blueGrey500" v-bind:md-label="this.getName(bio.person.name)"></md-tab>
        <md-tab  v-on:click="() => { this.$SmoothScroll(this.elmId('#recomendations')) }" id="tab-recomendations"  md-label="RECOMENDATIONS"></md-tab>
        <md-tab  v-on:click="() => { this.$SmoothScroll(this.elmId('#about')) }" id="tab-about"  md-label="ABOUT"></md-tab>
        <md-tab  v-on:click="() => { this.$SmoothScroll(this.elmId('#experiences')) }" id="tab-experiences" md-label="JOBS"></md-tab>
        <md-tab  v-on:click="() => { this.$SmoothScroll(this.elmId('#education')) }" id="tab-education"  md-label="EDUCATION"></md-tab>
        <md-tab v-on:click="linkedin()" md-label="LINKEDIN"></md-tab>
      </MdTabs>
      <!-- <div v-smoothscroll="{ duration : 500, callback: () => {} , context : undefined, axis :'y' }" >ABOUT</div> -->
    </div>
    <div class="side-panel-overlay" v-on:click="toggleMenu()"></div>
    <div class="side-panel">
      <div class="content">
        <header>
          <div  class="menu-bar">
            <md-toolbar md-elevation="0" >
              <img src="../../assets/img/torrebiologo.png"/>
            </md-toolbar>
          </div>
          <div class="tdl-avatar">
            <img v-bind:src="`${bio.person.picture}`" class="tdl-placeholder">
            <div class="tdl-user-name">{{bio.person.name}}</div> <div>{{bio.person.name}}</div>
          </div>
        </header>
        <md-list>
          <md-list-item v-on:click="() => { bio.person={}; this.$router.push('/')}">
              <icon name="exit_to_app"></icon>
              <span class="md-list-item-text">Sign out</span>
          </md-list-item>
          <md-list-item >
              <icon name="account_box"></icon>
              <span class="md-list-item-text"> your bio</span>
          </md-list-item>
          <md-list-item >
              <icon name="code"></icon>
              <span class="md-list-item-text">API for developers</span>
          </md-list-item>
          <md-list-item >
              <icon name="help"></icon>
              <span class="md-list-item-text">Help</span>
          </md-list-item>
          <md-divider></md-divider>
          <md-list-item >
            <div>
              <img class="logo" src="../../assets/img/logo.png"/>
              <img src="../../assets/img/torrebio.png"/>
            </div>
          </md-list-item>
          <md-list-item >
            <div>
              <img class="logo" src="../../assets/img/logo.png"/>
              <img src="../../assets/img/torreprotocol.png"/>
            </div>
          </md-list-item>
          <md-list-item >
            <div>
              <img class="logo" src="../../assets/img/logo.png"/>
              <img src="../../assets/img/torrejobs.png"/>
            </div>
          </md-list-item>
        </md-list>
        <footer><div class="tdl-footer-links"><a href="https://torre.co/" target="_blank" class="md-primary"><small>About us</small></a>&nbsp;&nbsp;&nbsp;
          <a href="https://accounts.torre.co/terms/" target="_blank" class="md-primary"><small>Terms of use</small></a>&nbsp;&nbsp;&nbsp;
          <a href="https://accounts.torre.co/privacy/" target="_blank" class="md-primary"><small>Privacy policy</small></a></div> <div class="tdl-footer-copy"><small>© Torre Technologies Co.</small></div></footer>
      </div>
    </div>
  </nav>
  <div class="bio" >
    <section class="profile" id="profile" >
      <div class="background" v-bind:style="`background-image:url(${bio.person.picture})`"></div>
      <div class="profile-detail">
        <img title="" v-bind:src="bio.person.picture" class="avatar">
        <div title="" class="md-headline profile__headline">
            Hello, my name is {{bio.person.name}}
        </div>
        <div title="" class="title">
            {{bio.person.professionalHeadline}}
        </div>
        <div title="" class="opportunities">
            Interested in freelance gigs, and jobs.
        </div>
        <div class="recommendation">
            <div class="count">{{bio.person.itemsVerified}}
              <svgicon fill  name="weight" height="24px"></svgicon>
            </div>
            <MdButton class="md-raised" >Recommend</MdButton>
            <p>(without recommendation letters)</p>
        </div>
        <div  class="location md-subheading profile__subheading profile__location">
            {{bio.person.location}}
        </div>
        <div class="summary-contact-info">
          <MdButton class="md-icon-button" v-for="info in bio.person.links" :key="info.id" >
              <template><svgicon v-bind:name="info.name" class="icon" height="24px"></svgicon></template>
            </MdButton>
        </div>
      </div>
    </section>
    <section class="recomendations" id="recomendations"> </section>
    <section class="about" id="about">
      <div class="md-subheading">
        <p>{{bio.person.summaryOfBio}}</p>
      </div>
    </section>
    <section class="experiences" id="experiences">
        <div class="section-list">
          <h3 class="title">Jobs</h3>
          <md-card class="item" v-for="job in bio.jobs" v-bind:key="job.id">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title"><h2>{{job.role}}</h2></div>
                <div class="md-subhead">
                  <ul>
                    <li v-for="item in job.organizations" :key="item.id">
                      <h3>{{item.name}}</h3>
                    </li>
                  </ul>
                </div>
              </md-card-header-text>
            </md-card-header>
            <div class="md-card-footer" >
              <div class="date">{{parseJobDate(job)}}</div>
              <div class="options">
                <MdButton class="md-icon-button" ><icon name="share"></icon></MdButton>
                <MdButton class="md-icon-button" ><icon name="remove_red_eye"></icon></Mdbutton>
              </div>
            </div>
          </md-card>
        </div>
        <div class="timeline">
        </div>
    </section>
    <section class="education" id="education">
      <div class="section-list">
          <h3 class="title">Education</h3>
          <md-card class="item" v-for="study in bio.education" v-bind:key="study.id">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title"><h2>{{study.name}}</h2></div>
                <div class="md-subhead">
                  <ul>
                    <li v-for="item in study.organizations" :key="item.id">
                      <h3>{{item.name}}</h3>
                    </li>
                  </ul>
                </div>
              </md-card-header-text>
            </md-card-header>
            <div class="md-card-footer" >
              <div class="date">{{parseJobDate(study)}}</div>
              <div class="options">
                <MdButton class="md-icon-button" ><icon name="share"></icon></MdButton>
                <MdButton class="md-icon-button" ><icon name="remove_red_eye"></icon></Mdbutton>
              </div>
            </div>
          </md-card>
        </div>
        <div class="timeline">
        </div>
    </section>
  </div>
  <div class="main-footer">
    <div>
      <MdButton>what is torre bio?</MdButton>
      <MdButton>build your bio</MdButton>
    </div>
  </div>
</div>
</template>

<script>
import Icon from 'vue-md-icons/src/components/Icon'
import VueSmoothScroll from 'vue-smoothscroll'
import * as svgicon from 'vue-svgicon'
import { mapState } from 'vuex'

// svgicon.register({
//   'weight': {
//     width: 24,
//     height: 24,
//     viewBox: '0 0 24 24',
//     data: '<path pid="0" d="M12 3a4 4 0 0 1 4 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.89 3.89 0 0 1 8 7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z"/>'
//   }
// })
export default {
  name: 'Profile',
  computed: mapState({
    bio: state => state.profile.bio
  }),
  components: {
    Icon,
    VueSmoothScroll,
    svgicon
  },
  filters: {
    trimMonth: (string) => {
      return (string) ? string.substring(0, 3) : ''
    }
  },
  methods: {
    toggleMenu: () => {
      let leftPanelOverlay = document.querySelector('.side-panel-overlay')
      let leftPanel = document.querySelector('.side-panel')
      if (leftPanel.classList.contains('show')) {
        leftPanel.classList.remove('show')
        leftPanelOverlay.classList.remove('show')
      } else {
        leftPanel.classList.add('show')
        leftPanelOverlay.classList.add('show')
      }
    },
    elmId: (el) => {
      return document.querySelector(el)
    },
    getTorreBio: (_this) => {
      let postBody = {
        torreId: _this.$route.params.torreId
      }
      _this.$store.dispatch('profile/getBio', postBody).then((r) => {
        setTimeout(() => {
          _this.stickyMenu()
        }, 3000)
      })
    },
    stickyMenu: () => {
      let menuBar = document.querySelector('.coverBar')
      console.log(menuBar)
      let sticky = menuBar.offsetTop
      console.log(sticky)
      window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
          menuBar.classList.add('sticky')
        } else {
          menuBar.classList.remove('sticky')
        }
      }
    },
    parseJobDate: (item) => {
      if (!item.fromYear) {
        return ''
      }
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      let from = new Date(item.fromYear, monthNames.indexOf(item.fromMonth))
      let to = new Date(item.toYear, monthNames.indexOf(item.toMonth))
      return (from.getTime() !== to.getTime())
        ? `${monthNames[from.getMonth()].substring(0, 3)} ${from.getFullYear()} - ${monthNames[to.getMonth()].substring(0, 3)} ${to.getFullYear()}`
        : `${monthNames[to.getMonth()].substring(0, 3)} ${to.getFullYear()}`
    },
    getName: (string) => {
      if (!string) {
        return 'PROFILE'
      }
      let parts = string.split(' ')
      return parts[0]
    },
    linkedin: function () {
      // axios.get(`http://localhost:3000/api/oauth/linkedin/`)
      //   .then(response => {
      //     console.log(response.data)
      //   })
      //   .catch(e => { console.log(e) })
      this.$auth.options.setId('linkedin', this.bio.person.publicId)
      this.$auth.authenticate('linkedin').then(function () {
        console.log('autenticado')
        // console.log(response)
      })
    }
  },
  mounted () { },
  created () {
    this.getTorreBio(this)
  },
  data () {
    return {
      errors: [],
      linkedinData: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './profile.scss'
</style>
