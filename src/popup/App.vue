<template>
  <div>

    <div v-if="siteSelected" class="input">
      <div class="header input__header">
        <i @click="setSiteSelected(null)" class="material-icons icon input__headericon">keyboard_arrow_left</i>
        <div>cxclip.karte.io</div>
      </div>
      <div class="input__body">
        <textarea v-model="siteSelected.memo" id="memo" class="input__textarea"></textarea>
        <div class="btns">
          <button id="copy" class="memo__btn__save btn" style="margin-right: 8px;">選択範囲をコピー</button>
          <button id="save" class="memo__btn__save btn">メモを保存</button>
        </div>
      </div>
    </div>

    <div v-else class="memo">
      <div class="header">memo</div>
      <ul class="memo__list">
        <li
          v-for="site in sites" :key="site.id"
          class="memo__item"
          @click="setSiteSelected(site)"
        >
          <div>
            <i class="material-icons icon">create</i>
          </div>
          <div class="memo__itemtext">{{site.url}}</div>
        </li>
      </ul>
      <div class="btns">
        <button
          id="copy"
          class="memo__btn__save btn"
          @click="addSite"
        >このサイトのメモを追加</button>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "./store"

export default {
  data() {
    return {
      memo: false,
      store: Store
    }
  },
  computed: {
    sites() {
      return this.store.getSites()
    },
    siteSelected() {
      return this.store.getSiteSelected()
    }
  },
  methods: {
    addSite() {
      this.store.addSite();
    },
    setSiteSelected(site) {
      this.store.setSiteSelected(site)
    }
  },
  created() {
    console.log(Store)
    console.log(this.store)
  }
}
</script>

<style>
</style>
