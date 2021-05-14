<template>
  <div class="review">
    <!--
    <div class="revnav" >
        <div class="text-center py-3">
          <a class="col-3 mx-2" href="{% url 'postexpense' object.pk %}"><button class="w-30 btn btn-primary"> 口コミを投稿する</button></a>
        </div>
    </div>-->
    <div v-for="review in reviews" :key="review.pk">
      <div class="card mb-3 mx-auto">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">投稿者：{{review.author}}さん</p>
              <p class="card-text">現在：{{review.status}}</p>
              <p class="card-text">総合評価：{{review.avgrate}}</p>
              <p class="card-text">費用：{{review.costrate}}</p>
              <p class="card-text">{{review.costcomment}}</p>
              <p class="card-text">デザイン：{{review.designrate}}</p>
              <p class="card-text">{{review.designcomment}}</p>
              <p class="card-text">間取り：{{review.layoutrate}}</p>
              <p class="card-text">{{review.layoutcomment}}</p>
              <p class="card-text">住宅の性能：{{review.specrate}}</p>
              <p class="card-text">{{review.speccomment}}</p>
              <p class="card-text">付帯設備：{{review.attachcomment}}</p>
              <p class="card-text">{{review.attachrate}}</p>
              <p class="card-text">保証：{{review.guaranteerate}}</p>
              <p class="card-text">{{review.guaranteecomment}}</p>
              <p class="card-text">担当営業：{{review.salesrate}}</p>
              <p class="card-text">{{review.salescomment}}</p>
              <!--
              {% if item.author == user.username%}
              <form method="POST" action="{% url 'deletereview' object.pk %}">{% csrf_token %}
                <button class="btn btn-outline-primary" type="submit">削除する</button>
              </form>
              {% endif %}-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $axios, params }) {
        const url = 'api/reviews/?maker_name=' + `${params.pk}`
        const reviews = await $axios.$get(url)
        return {reviews}
    },
}
</script>

<style lang="scss">
</style>