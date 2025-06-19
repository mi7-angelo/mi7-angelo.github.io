<template>
  <div id="app">
    <nav class="navbar">
      <div class="brand">
        <img src="@/assets/logo.png" alt="Logo" />
        <span>Portfolio</span>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <div class="actions">

      </div>
    </nav>

    <transition name="fade-slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.body.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.body.classList.add('dark')
  }
})
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  max-width: 1200px;
  margin: 2rem auto;
  gap: 1rem;
  flex-wrap: wrap;
}

.brand {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
  gap: 0.5rem;
}

.brand img {
  width: 24px;
  height: 24px;
}

.nav-links {
  display: flex;
  gap: 1.8rem;
  list-style: none;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-links a.router-link-exact-active {
  color: #000;
  font-weight: 600;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.login {
  background: none;
  border: none;
  font-size: 0.95rem;
  cursor: pointer;
  color: #333;
}

.signup {
  background: #111;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s;
}

.signup:hover {
  background: #000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
  }

  .actions {
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
  }
}

/* Page transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
