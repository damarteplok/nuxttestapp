import Vuex from 'vuex'

const createdStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                    vuexContext.commit('setPosts', [
                        {
                            id: "1",
                            title: "Post 1",
                            previewText: "This is previewText 1",
                            thumbnail:
                            "https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1453123070-898x505.jpg"
                        },
                        {
                            id: "2",
                            title: "Post 2",
                            previewText: "This is previewText 2",
                            thumbnail:
                            "https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1453123070-898x505.jpg"
                        },
                        {
                            id: "3",
                            title: "Post 3",
                            previewText: "This is previewText 3",
                            thumbnail:
                            "https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1453123070-898x505.jpg"
                        }
                    ]);
                    resolve();
                    }, 1000);
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        },
    })
}

export default createdStore