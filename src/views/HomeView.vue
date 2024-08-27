<template>
  <NavbarSection id="home-section">
    <MainSection />
  </NavbarSection>
  <AboutSection id="about-section" />
  <SkillSection id="skill-section" />
  <ProjectSection id="projects-section" />
  <ContactSection id="contact-section" />
  <FooterSection />
  <ToTopButton />
</template>

<script setup>
import NavbarSection from '@/components/NavbarSection.vue'
import MainSection from '@/components/MainSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillSection from '@/components/SkillSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import ToTopButton from '@/components/ToTopButton.vue'
import ProjectSection from '@/components/ProjectSection.vue'
</script>
