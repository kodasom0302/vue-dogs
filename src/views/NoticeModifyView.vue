<template>
    <div>

        <AppHeader/>



        <div>

            <form action="" method="">

                <div id="formGroup">
                    <span>제목</span>
                    <span><input type="text"></span>
                </div>

                <div id="formGroup">
                    <span>작성자</span>
                    <span></span>
                </div>

                <div id="formGroup">
                    <span>작성일</span>
                    <span></span>
                </div>

                <div id="formGroup">
                    <span>내용</span>
                    <span><textarea></textarea></span>
                </div>
                
            </form>

        </div>


        
        <AppFooter/>

    </div>
</template>


<script>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import '@/assets/css/notice/NoticeListView.css';
// import axios from 'axios';

export default {
    name: "NoticeModifyView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {};
    },
    methods: {},
    created() {}
};
</script>

<style></style>