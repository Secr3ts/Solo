<template>
  <div class="wrapper">
    <div class="container input-wrapper">
      <div class="row">
        <div class="col s2"></div>
        <div class="col s8">
          <md-field md-clearable>
            <md-input placeholder="Getter - Solo (Feat. Party Nails)" ref="inputSearch"></md-input>
          </md-field>
        </div>
        <div class="col s2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'input-field',
  mounted () {
    this.$refs.inputSearch.$el.focus()
  }
}
</script>

<style>
  input, input::placeholder {
    text-align: center
  }
</style>
