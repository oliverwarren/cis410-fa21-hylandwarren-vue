<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Rides</h3>
    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>
    <table v-if="ridesByUser" class="table">
      <thead>
        <th>Location From</th>
        <th>Location To</th>
      </thead>
      <tbody>
        <tr v-for="thisRide in ridesByUser" :key="thisRide.RidePK">
          <th>
            <router-link :to="`/rides/${thisRide.DriverFK}`">{{
              thisRide.DriverFirstName
            }}</router-link>
          </th>
          <th>{{ thisRide.LocationTo }}</th>
          <th>{{ thisRide.LocationFrom }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ridesByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log(("here is the store so far", this.$store.state));
      return this.$store.state.user.FirstName;
    },
  },
  created() {
    axios
      .get("/rides/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the response", theResponse);
        this.ridesByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>
