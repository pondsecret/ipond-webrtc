<template>
    <div width="100%" height="100%">
        <video class="vid" controls="true" autoplay="autoplay" loop="loop" muted="muted" preload="auto">
            <source src="" type="video/mp4">
            Please upgrade your browser so that it supports HTML5 videos.
        </video>
        <div class="overlay">
            text
        </div>
    </div>
</template>

<script>
export default {
    name: "StreamingVideo2"
}
</script>

<style>
.overlay {
    position: absolute;
    float: left;
    z-index: 99999;
}
.vid {
    z-index: -1
}
</style>