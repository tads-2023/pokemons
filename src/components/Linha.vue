<script setup>
const props = defineProps(["banana"])
</script>

<template>
    <tr>
        <td>
            {{ banana.name }}
        </td>
        <td>
            {{ banana.types[0].type.name }}
        </td>
        <td>
            <img :src="banana.sprites.back_default" alt="" srcset="">
        </td>
    </tr>
</template>