<template>
  <h1>Gallery</h1>
  <div class="slider">
    <div class="slider-container" :style="sliderStyle">
      <div v-for="(image, index) in images" :key="index" class="slider-item">
        <img :src="image" :alt="`Image ${index + 1}`" />
      </div>
    </div>
    <button class="prev-button" @click="prevImage">‹</button>
    <button class="next-button" @click="nextImage">›</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        require('@/assets/image1.jpeg'),
        require('@/assets/image2.jpeg'),
        require('@/assets/image3.jpeg')
      ],
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.5s ease',
      };
    },
  },
  methods: {
    prevImage() {
      this.currentIndex =
          this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    },
    nextImage() {
      this.currentIndex =
          this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 600px; /* Фиксированная ширина для слайдера */
  height: 400px; /* Фиксированная высота для слайдера */
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 auto; /* Центрирование слайдера */
}

.slider-container {
  display: flex;
  width: 100%;
  height: 100%; /* Добавлено для соответствия высоте родительского контейнера */
}

.slider-item {
  min-width: 100%;
  height: 100%; /* Добавлено для соответствия высоте родительского контейнера */
}

.slider-item img {
  width: 100%;
  height: 100%; /* Обеспечить, чтобы изображение соответствовало размеру контейнера */
  object-fit: cover; /* Сохранение пропорций изображения, обрезка по необходимости */
  display: block;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.prev-button:hover,
.next-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>