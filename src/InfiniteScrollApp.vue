<template>
    <div>
        <span>{{connected}}</span>
        <button v-if="!connected" @click="connect">Connect</button>
        <InfiniteScroll :pictures="pictures" :next="getAlbum" />
    </div>
</template>

<script>
import InfiniteScroll from './InfiniteScroll.vue';

export default {
    components: {
        InfiniteScroll,
    },
    data() {
        return {
            connected: false,
            username: '',
            after: '',
            pictures: [],
        };
    },
    methods: {
        connect() {
            FB.login(this.getStatus);
        },
        getStatus(result) {
            if (result.status === 'connected') {
                this.connected = true;
                this.getAlbum();
            }
        },
        getAlbum() {
            return new Promise(resolve => {
                FB.api('476232862523073/photos', {
                    fields: ['picture'],
                    after: this.after,
                }, result => {
                    this.after = result.paging.cursors.after;
                    this.pictures = this.pictures.concat(
                        result.data.map(item => item.picture)
                    );
                    resolve();
                });
            });
        },
        next() {
            this.getAlbum();
        },
    },
    mounted() {
        FB.init({
            appId: 1877286745650895,   //fb app id
            version: 'v3.0',
        });
        FB.getLoginStatus(this.getStatus);    /// connected, not-authorized, unknow
    },
};
</script>
