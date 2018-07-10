<template>
    <div>
        <span>{{connected}}</span>
        <button v-if="!connected" @click="connect">Connect</button>
        <h1 v-else>{{username}}</h1>
        <img :src="picture">
    </div>
</template>

<script>
export default {
    data() {
        return {
            connected: false,
            username: '',
            picture: '',
        };
    },
    methods: {
        connect() {
            FB.login(this.getStatus);
        },
        getStatus(result) {
            //this.connected = result.status === 'connected';
            if (result.status === 'connected') {
                this.connected = true;
                FB.api('/me', 'GET', {
                    fields: ['picture', 'email'],
                },
                    rs => {
                        console.log(rs);
                        this.username = rs.name;
                        this.picture = rs.picture.data.url;
                    });
                //   FB.api('/me', rs => {
                //       this.username = rs.name;
                //   });
            }
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
