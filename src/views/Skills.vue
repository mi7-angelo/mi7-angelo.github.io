<template>
  <section class="skills-container">
    <div class="header">
      <h1><span>My</span> Professional Background Skills and Accomplishments</h1>
      <p class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when.
      </p>
    </div>

    <div class="icons-section">
      <div class="icon-circle">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" />
      </div>
      <div class="icon-circle">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Webflow_logo.svg" alt="Webflow" />
      </div>
      <div class="icon-circle">
        <img src="https://seeklogo.com/images/F/framer-logo-DC5E7B6A4C-seeklogo.com.png" alt="Framer" />
      </div>
      <div class="icon-circle code-icon">
        <span>&lt;/&gt;</span>
      </div>
    </div>

    <div class="skills-grid">
      <div class="skills-left">
        <div class="skill">
          <label>UI Design</label>
          <div class="bar"><div class="fill" style="width: 90%"></div></div>
        </div>
        <div class="skill">
          <label>Product Design</label>
          <div class="bar"><div class="fill" style="width: 80%"></div></div>
        </div>
        <div class="skill">
          <label>User Research</label>
          <div class="bar"><div class="fill" style="width: 85%"></div></div>
        </div>
      </div>
      <div class="skills-right">
        <div class="skill">
          <label>Coding</label>
          <div class="bar"><div class="fill" style="width: 60%"></div></div>
        </div>
        <div class="skill">
          <label>No Code Tools</label>
          <div class="bar"><div class="fill" style="width: 65%"></div></div>
          <div class="no-code-logos">
            <img src="https://seeklogo.com/images/F/framer-logo-DC5E7B6A4C-seeklogo.com.png" alt="Framer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Webflow_logo.svg" alt="Webflow" />
            <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-container {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: bold;
}
.header h1 span {
  font-family: 'Times New Roman', serif;
  font-style: italic;
}
.description {
  font-size: 0.9rem;
  margin: 0.5rem 0 2rem;
  max-width: 500px;
}

.icons-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-circle img {
  width: 50%;
  height: auto;
}
.code-icon span {
  font-size: 1.5rem;
  font-weight: bold;
}

.skills-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.skills-left, .skills-right {
  flex: 1;
  min-width: 250px;
}

.skill {
  margin-bottom: 1.2rem;
}
.skill label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.bar {
  background-color: #eee;
  height: 8px;
  border-radius: 10px;
  overflow: hidden;
}
.fill {
  height: 100%;
  background-color: #3b82f6;
  border-radius: 10px;
}
.no-code-logos {
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.no-code-logos img {
  height: 24px;
}
</style>
