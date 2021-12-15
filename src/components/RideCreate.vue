<template>
  <div>
    <div class="row justify-content-center"><div class="col-lg-10"><div class="card"><div class="card-body"><h4>Create a Review</h4><form id="review-form" @submit.prevent="submitRide"><div class="mb-3">
      </div>
      <div class="mb-3">
        <label for="to-input" class="form-label">Location To</label><input type="text" row="3" class="form-control" id="to-input" required="" v-model="locationTo">
        <label for="from-input" class="form-label">Location From</label><input type="text" row="3" class="form-control" id="from-input" required="" v-model="locationFrom"></div><button type="submit" class="btn btn-primary">Submit Review</button><button v-on:click="cancelRide" type="clear" class="btn btn-outline-danger"> Cancel </button><p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p></form>
      </div>
      </div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      locationTo: "",
      locationFrom: "",
      errorMessage: null
    }
  },
  methods:{
    submitRide() {
      let myRide = {
        LocationTo: this.locationTo,
        LocationFrom: this.locationFrom,
        DriverFK: this.$route.params.pk
      };

      axios.post("/rides", myRide, {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      }).then(() => {
        this.$router.replace("/account");
      }).catch(()=>{
        this.errorMessage = "Unable to create a ride, please try again later"
      });
    },
    cancelRide(){
      this.$router.go(-1);
    }
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
