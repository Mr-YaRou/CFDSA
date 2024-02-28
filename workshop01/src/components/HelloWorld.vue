<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Randomised Programming Quotes</h3>
    <p :style="{ fontFamily: selectedFont, fontStyle: italic }"> {{ dynamicText }}</p>
    <ul>
      <p>
        <a href="https://github.com/Mr-YaRou/CFDSA" target="_blank" rel="noopener">Link to Github Repository</a>
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      quotes: [
        "Logic will get you from A to B. Imagination will take you everywhere.",
        "There are 10 kinds of people. Those who know binary and those who don't.",
        "There are two ways of constructing a software design. " +
        "One way is to make it so simple that there are obviously no deficiencies and" +
        "the other is to make it so complicated that there are no obvious deficiencies.",
        "It's not that I'm so smart, it's just that I stay with problems longer.",
        "It is pitch dark. You are likely to be eaten by a grue."
      ],
      fonts: [
        "Courier New, Courier, monospace italic",
        "Times New Roman, Times, serif italic"
      ],
      dynamicText: "",
      selectedFont: ""
    };
  },
  created() {
    this.getRandomQuote();
  },
  methods: {
    getRandomQuote() {
      const randomQuoteIndex = Math.floor(Math.random() * this.quotes.length);
      const randomFontIndex = Math.floor(Math.random() * this.fonts.length);
      this.dynamicText = this.quotes[randomQuoteIndex];
      this.selectedFont = this.fonts[randomFontIndex];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
