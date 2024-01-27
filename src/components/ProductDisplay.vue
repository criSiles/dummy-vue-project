<template>
  <div class="p-4">
    <!-- Top bar -->
    <div class="flex flex-row flex-wrap">
      <div class="w-[100%] md:w-[50%]">
        <img class="w-[70%] m-10 p-4 mist-border-2" v-bind:src="image" />
      </div>

      <!-- Sizes -->
      <div class="mt-10">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-medium text-gray-900">Size</h3>
          <a
            href="#"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >Size guide</a
          >
        </div>

        <fieldset class="mt-4">
          <legend class="sr-only">Choose a size</legend>
          <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200"
            >
              <input
                type="radio"
                name="size-choice"
                value="XXS"
                disabled
                class="sr-only"
                aria-labelledby="size-choice-0-label"
              />
              <span id="size-choice-0-label">XXS</span>
              <span
                aria-hidden="true"
                class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
              >
                <svg
                  class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                >
                  <line
                    x1="0"
                    y1="100"
                    x2="100"
                    y2="0"
                    vector-effect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </label>
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
            >
              <input
                type="radio"
                name="size-choice"
                value="XS"
                class="sr-only"
                aria-labelledby="size-choice-1-label"
              />
              <span id="size-choice-1-label">XS</span>
              <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
              <span
                class="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            </label>
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
            >
              <input
                type="radio"
                name="size-choice"
                value="S"
                class="sr-only"
                aria-labelledby="size-choice-2-label"
              />
              <span id="size-choice-2-label">S</span>
              <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
              <span
                class="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            </label>
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
            >
              <input
                type="radio"
                name="size-choice"
                value="M"
                class="sr-only"
                aria-labelledby="size-choice-3-label"
              />
              <span id="size-choice-3-label">M</span>
              <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
              <span
                class="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            </label>
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
            >
              <input
                type="radio"
                name="size-choice"
                value="L"
                class="sr-only"
                aria-labelledby="size-choice-4-label"
              />
              <span id="size-choice-4-label">L</span>
              <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
              <span
                class="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            </label>
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
            >
              <input
                type="radio"
                name="size-choice"
                value="XL"
                class="sr-only"
                aria-labelledby="size-choice-5-label"
              />
              <span id="size-choice-5-label">XL</span>
              <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
              <span
                class="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            </label>
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
            >
              <input
                type="radio"
                name="size-choice"
                value="2XL"
                class="sr-only"
                aria-labelledby="size-choice-6-label"
              />
              <span id="size-choice-6-label">2XL</span>
              <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
              <span
                class="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            </label>
            <!-- Active: "ring-2 ring-indigo-500" -->
            <label
              class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
            >
              <input
                type="radio"
                name="size-choice"
                value="3XL"
                class="sr-only"
                aria-labelledby="size-choice-7-label"
              />
              <span id="size-choice-7-label">3XL</span>
              <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
              <span
                class="pointer-events-none absolute -inset-px rounded-md"
                aria-hidden="true"
              ></span>
            </label>
          </div>
        </fieldset>
      </div>

      <div class="w-[100%] md:w-[50%] ml-3 md:ml-0 mist-border-2 m-10 p-4 mist-border-2">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          v-for="(variant, index) in variants"
          class="w-12 h-12 mt-2 mist-border-2 rounded-[50%]"
          :class="
            {
              green: 'bg-[green]',
              blue: 'bg-[blue]',
            }[variant.color]
          "
          :key="variant.id"
          @click="updateVariant(index)"
        ></div>

        <PrettyButton :isActive="inStock" @click="addToCart">
          Add to Cart
        </PrettyButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import socksBlueImage from "../assets/shop/socks_blue.jpg";
import socksGreenImage from "../assets/shop/socks_green.jpg";
import PrettyButton from "./PrettyButton.vue";

const props = defineProps({
  premium: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["add-to-cart"]);

const product = ref("Socks");
const brand = ref("Vue Mastery");
const selectedVariant = ref(0);
const details = ref(["50% cotton", "30% wool", "20% polyester"]);

const variants = ref([
  { id: 2234, color: "green", image: socksGreenImage, quantity: 50 },
  { id: 2235, color: "blue", image: socksBlueImage, quantity: 0 },
]);

const title = computed(() => {
  return brand.value + " " + product.value;
});

const image = computed(() => {
  return variants.value[selectedVariant.value].image;
});

const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0;
});

const shipping = computed(() => {
  if (props.premium) {
    return "Free";
  }
  return 2.99;
});

function addToCart() {
  emit("add-to-cart", variants.value[selectedVariant.value].id);
}

function updateVariant(index) {
  selectedVariant.value = index;
}
</script>

<style>
h1 {
  font-size: 50px;
}

h3 {
  font-size: 25px;
}

p {
  font-size: 22px;
}

ul {
  list-style-type: none;
}

li {
  font-size: 18px;
}
</style>
