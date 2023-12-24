<template>
    <yandex-map
        :coords="[54.62896654088406, 39.731893822753904]"
        zoom="3"
        style="width: 100%; height: 1000px;" 
    >
      <ymap-marker
      marker-id="1"
      marker-type="placemark"
      :coords="[54.7, 39.7]"
      hint-content="Hint content 1"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      :icon="{color: 'green', glyph: 'cinema'}"
      cluster-name="1"
        ></ymap-marker>
    </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
    components: {
        yandexMap,
        ymapMarker
    },
}

</script>