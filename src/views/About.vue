<template>
  <section class="about">
    <div class="header" data-aos="fade-down">
      <h1>
        About <span class="highlight">me.</span>
      </h1>
      <p class="subtitle">
        <span class="bar"></span>
        Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.
      </p>
    </div>

    <div class="grid">
      <div class="stack" data-aos="fade-right">
        <h2>My Stack<span class="highlight">.</span></h2>
        <div class="tags">
          <span class="tag">Cyber-Security</span>
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
          <span class="tag">JavaScript</span>
          <span class="tag">Vue.js</span>
          <span class="tag">Problem Solving</span>
          <span class="tag">Team Player</span>
        </div>
      </div>

      <div class="location" data-aos="fade-left">
        <h2>My Special Place<span class="highlight">.</span></h2>
        <div class="globe">
          <img src="@/assets/globe.jpg" alt="My Location" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 4rem 2rem;
  color: var(--text-color);
}

.header h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.highlight {
  color: #7a3ffc;
}

.subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  max-width: 700px;
  position: relative;
  padding-left: 1.5rem;
}

.bar {
  position: absolute;
  left: 0;
  top: 0.4rem;
  width: 5px;
  height: 100%;
  background-color: #7a3ffc;
  border-radius: 2px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
}

.stack,
.location {
  flex: 1;
  min-width: 300px;
}

.stack h2,
.location h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 12px;
}

.tag {
  background-color: #222;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  display: inline-block;
}

.globe {
  border-radius: 12px;
  overflow: hidden;
  background-color: #ccc;
}

.globe img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
