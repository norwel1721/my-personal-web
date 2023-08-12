<template>
  <section id="portfolio" class="dark-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>

      <!-- start of filters  -->
      <div class="row filters">
        <ul class="list-inline mx-auto">
          <li
            v-for="item in filters"
            :key="item.title"
            class="list-inline-item filter"
          >
            <a
              class="nav-item"
              :class="item.filter === currentFilter ? 'active' : null"
              :data-filter="item.filter"
              @click="setFilter"
              >{{ item.filter }}</a
            >
          </li>
        </ul>
      </div>
      <!-- end of filters  -->

      <div id="portfolio-container" class="row">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          v-for="(item, index) in filteredProjects"
          :key="index"
          
          class="col-sm-12 col-md-4 flex-col"
        >
          <div class="portfolio-item" >
            <!-- <img 
              
              :src="require(`../../assets/images/portfolio/${item.image}`)" 
              :style="{
                width: originalWidth + 'px',
                height: originalHeight + 'px',
              }"
            /> -->
              
            <!-- <div class="overlay">
              <img 
              :src="require(`../../assets/images/portfolio/${item.image}`)" 
              :style="{
                width: originalWidth + 'px',
                height: originalHeight + 'px',
              }"
              @click="toggleEnlargement(index)"
            />
            </div> -->
            
            <!-- <div>
              <img
              class="hoverable-image"
              @mouseover="setHovered(index, true)"
              @mouseout="setHovered(index, false)"
              :style="getImageStyles(index)"
              :src="require(`../../assets/images/portfolio/${item.image}`)"  
              />
            </div> -->
            <div>
              <img
              :src="require(`../../assets/images/projects/${item.image}`)"  
              />
            </div>
            <div class="overlay">
              <a :href="item.link" title="GitHub" target="_blank">
                <div class="portfolio-item-content">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                  <div v-if="item.source !== '' " class="link-icons">
                    <a :href="item.source" title="Source Code" target="_blank">
                      <i class="fas fa-code fa-2x"></i>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- Pop-up message for enlarged image -->
          
        </div>
      </div>
      <!-- <div v-if="currentEnlargedIndex !== null" class="pop-up-message" >
            <img
              :src="require(`../../assets/images/portfolio/${filteredProjects[currentEnlargedIndex].image}`)"
              :style="{
                width: enlargedWidth + 'px',
                height: enlargedHeight + 'px',
              }"
            />
            <span class="close-button" @click.stop="closePopUp">&times;</span>
          </div> -->
    </div>
    <Arrow />
  </section>
</template>

<script>
import data from "../../data/data.json";
import Arrow from "../components/Arrow.vue";

export default {
  name: "portfolio",
  props: {},
  components: {
    Arrow,
  },

  data() {
    
    return {
      projects: data.portfolio.projects,
      heading: data.main.headings.portfolio,
      currentFilter: data.portfolio.defaultFilter,
      currentEnlargedIndex: null,
      originalWidth: 200,
      originalHeight: 150,
      enlargedWidth: 800,
      enlargedHeight: 400,
      
    };
  },
  computed: {
    filteredProjects() {
      var projects = data.portfolio.projects;
      var filter = this.currentFilter;
      var filtered = projects.filter(function(x) {
        return x.filter === filter;
      });
      return filtered;
    },
    filters() {
      var filterList = [];
      var projects = data.portfolio.projects;
      filterList = projects.filter(function(x) {
        if (!filterList.includes(x.filter)) {
          filterList.push(x.filter);
          return x.filter;
        }
      });
      return filterList;
    },
  },



  methods: {
    test(){
      console.log('testttttt')
    },
    setFilter(event) {
      this.currentFilter = event.target.dataset.filter;
    },

    toggleEnlargement(index) {
      // Check if the click event target is the image itself or the close button
      // const isImageClick = event.target.tagName.toLowerCase() === 'img';
      // if (!isImageClick) {
        // Toggle the enlargement state for the clicked image
        this.currentEnlargedIndex = this.currentEnlargedIndex === index ? null : index;
      // }
    },

    closePopUp() {
      // Close the pop-up
      this.currentEnlargedIndex = null;
    },

  },
};
</script>

<style lang="scss"></style>
