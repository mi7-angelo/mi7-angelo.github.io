<template>
  <section class="home">
    <div class="content">
      <h2 class="greeting" data-aos="fade-up">Hey, I'm Yayravi Michel Angelo 👋</h2>
      <h1 class="title" data-aos="fade-up" data-aos-delay="100">
        <span class="highlight">Front</span>End<br />
        Developer
      </h1>
      <p class="description" data-aos="fade-up" data-aos-delay="200">
        I'm a frontend developer based in Ghana, I'll help you<br />
        build beautiful websites your users will love.
      </p>
      <div class="buttons" data-aos="fade-up" data-aos-delay="300">
        <router-link to="/contact" class="btn primary">Get In Touch</router-link>
        <router-link to="/projects" class="btn">Browse Projects</router-link>
      </div>
    </div>
    <div class="image-container" data-aos="fade-left">
      <div class="circle">
        <img src="D:\port\my-portfolio\src\assets\profile.jpg" alt="Profile" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  min-height: 100vh;
  flex-wrap: wrap;
}

.content {
  max-width: 600px;
}

.greeting {
  font-size: 1.2rem;
  color: var(--text-color);
}

.title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 1rem 0;
  color: var(--text-color);
}

.highlight {
  color: #7a3ffc;
}

.description {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: 2px solid #000;
  border-radius: 6px;
  background: none;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #eee;
}

.primary {
  background-color: #7a3ffc;
  color: white;
  border-color: #7a3ffc;
}

.primary:hover {
  background-color: #6025e1;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;
}

.circle {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px solid #a175ff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
