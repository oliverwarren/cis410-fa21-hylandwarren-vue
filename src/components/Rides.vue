<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">"{{driver.DriverFirstName}} {{driver.DriverLastName}}"</h2>
        <br/>

        <p>Vehicle Type: <br/><strong>{{driver.VehicleType}}</strong></p>
      </div>
    </div>
    <br/>


    <router-link v-if="auth" :to="`/drivers/${this.$route.params.pk}/ride`"><button class="btn btn-success">Add a Ride</button></router-link>
    <router-link v-else :to="`/login`"><button class="btn btn-outline-success">Sign In to Add a Ride</button></router-link>

  </div>
</template>

<script>
export default {
  computed:{
    driver(){
      let allDrivers = this.$store.state.drivers

      let thisDriver = allDrivers.find((aDriver)=>{
        return aDriver.DriverPK == this.$route.params.pk
      })

      return thisDriver;
    },
    // fortmattedBuget(){
    //   return new Intl.NumberFormat("en-US",{
    //     style: "currency",
    //     currency: "USD"
    //   }).format(this.driver.field_to_format)
    // }
    auth(){
      return this.$store.state.token
    }
  },
};
</script>

<style></style>
